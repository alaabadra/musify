const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const addUser = require('./queries/addUser');
const addsong = require('./queries/addSong');
const getFav = require('./queries/getFav');
const checkUser = require('./queries/checkUser');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const addToken = require('./queries/addToken');
const getToken = require('./queries/getToken.js')
const cookie = require('cookie');
const getSongs = require('./queries/getSongs');

const handleHomePage = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) return handleNotFound(res);
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.end(file);
  });
}


const handleSignup = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  })
  req.on('end', () => {
    const data = queryString.parse(allData);
      addUser(data.firstName, data.lastName, data.email, data.password);
      res.writeHead(302, {location: '/'});
      res.end();
  })
}
const handleLogin = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  })
  req.on('end', ()=> {
    const data = queryString.parse(allData);
    console.log(data)
    checkUser(data.email, (err, result)=> {
      if(result){
        const payload = {
          id: result.rows[0].user_id,
          logged_in: 'true',
        }
        jwt.sign(payload, secret, (err, token) => {
          addToken(token , payload.id, (err, results) => {
            res.writeHead(302, {'Set-Cookie': [`section = ${token}`, `userID = ${result.rows[0].user_id}`], 'location': '/songs'})
            res.end();
          })
        })
      }
    })
  })
}
const handleStatic = (endpoint, res) => {
  const ext = path.extname(endpoint).split('.')[1];
  const contentType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    json: 'application/json',
    ico: "image/x-icon"
  };

  const filePath = path.join(__dirname, "..", ...endpoint.split('/'));
  fs.readFile(filePath, (err, file) => {
    if (err) handleNotFound(res);
    res.writeHead(200, {
      "content-type": contentType[ext]
    });
    res.end(file);
  })
}
const handleSongs = (req, res) => {
  const reqCookie = req.headers.cookie;
  const obj = cookie.parse(reqCookie);
  const sesstion = obj.section;
  getToken(obj.userID, (err, coo) => {
    // const dataToken = coo.rows[0].token
    jwt.verify(sesstion, secret, (err, nateg) => {
      if(nateg){
        const songsPath = path.join(__dirname, '..', 'public', 'pages', 'songs.html');
        
        fs.readFile(songsPath, (err, file)=>{
          console.log(1111111);
          if(err) return handleServerError(res);
          res.writeHead(200, {'content-type': 'text/html'});
          res.end(file);
        })
        }else{
        res.writeHead(401, {'content-type': 'text/html'})
        res.end('<h1>dont play with us</h1>')
      }
    })
  });
}
const handleAddsong = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  })
  req.on('end', () => {
    const data = queryString.parse(allData);
    addsong(data.addSong, data.addSinger, (err, songs) => {
      res.writeHead(302, {location: '/songs'});
      res.end();
    });
  })
}

const handleMyfav = () => {

}
const handleServerError = () => {

}

const handlegetSongs = (req, res) => {
  getSongs((err, data) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(data));
  })
}
// const handleNotFound = (req, res) => {
//   res.writeHead(404, {'content-type': 'text/html'});
//   res.end('<h1>Page Not Found</h1>');
// }

module.exports = {
  handleHomePage,
  handleSignup,
  // handleNotFound,
  handleServerError,
  handleMyfav,
  handleStatic,
  handleLogin,
  handleAddsong,
  handleSongs,
  handlegetSongs
}
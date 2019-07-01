const {
    handleHomePage,
    handleSignup,
    handleNotFound,
    handleServerError,
    handleMyfav,
    handleStatic,
    handleLogin,
    handleAddsong,
    handleSongs,
    handlegetSongs
} = require('./handler')

const router = ((request, response) => {
   const endPoint = request.url;
    if (endPoint === '/') {
        handleHomePage(request, response);
    } else if (endPoint === '/signup' && request.method === 'POST') {
        handleSignup(request, response);

    } else if (endPoint === '/login' && request.method === 'POST') {
       handleLogin (request, response)

    } else if (endPoint === '/getSongs' &&  request.method === 'GET') {
        handlegetSongs(request, response)
    } else if (endPoint.includes('/public/') && request.method === 'GET') {
        handleStatic(endPoint, response)
    } else if (endPoint === '/songs' && request.method === 'GET') {
       handleSongs (request, response)
    } else if (endPoint === '/addsong' && request.method === 'POST') {
       handleAddsong (request, response)
    }else if (endPoint === '/postfav' && request.method === 'POST') {
       handlePostfav (request, response)
    }else if (endPoint === '/myfav' && request.method === 'GET') {
        handleMyfav(request, response)
    }
    //  else {
    //     handleNotFound(response)
    // }
})

module.exports = router;

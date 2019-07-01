const crypt = require('bcryptjs');

const hashPassword = (password) => {
  return crypt.hashSync(password, 10);
}

const comparePassword = (password, hashed, callback) => {
  crypt.compare(password, hashed, callback);
}

module.exports = {
  hashPassword,
  comparePassword
}

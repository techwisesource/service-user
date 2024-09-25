const register = require("./register");
const login = require("./login");
const update = require("./update");
const getUser = require("./getUser");
const getUsers = require("./getUsers");
const logout = require("./logout.js");

module.exports = {
    register,
    login,
    update,
    getUser,
    getUsers,
    logout,
}
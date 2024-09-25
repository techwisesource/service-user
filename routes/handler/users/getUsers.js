const { User } = require("../../../models");

module.exports = async(req, res) => {
    const users = await User.findAll({
        attributes: ["id", "name", "email", "profession", "role", "avatar"]
    });

    if(!users) {
        return res.status(404).json({
            status: "error",
            message: "user not found"
        })
    }

    res.json({
        status: "success",
        data: users
    });
}
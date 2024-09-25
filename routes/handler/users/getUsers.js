const { User } = require("../../../models");

module.exports = async(req, res) => {

    // default userIds is empty array
    const userIds = req.query.user_ids || [];

    const sqlOption = {
        attributes: ["id", "name", "email", "profession", "role", "avatar"]
    };

    if(userIds.length) {
        sqlOption.where = {
            id: userIds
        }
    }

    const users = await User.findAll(sqlOption);

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
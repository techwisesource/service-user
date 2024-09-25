const { User } = require("../../../models");

module.exports = async (req, res) => {
    const id = req.params.id;

    const user = await User.findByPk(id, {
        attributes: ["name", "email", "profession", "avatar", "role"]
    });

    if(!user) {
        return res.status(404).json({
            status: "error",
            message: "User Not Found"
        });
    }

    res.json({
        status: 'success',
        data: user
    });
}
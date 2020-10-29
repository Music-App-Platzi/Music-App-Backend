import User from '../models/user';

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const username = await User.findOne({ username: req.body.username });
        if (username)
            return res.status(400).json({ message: "The user already exists" });
        const mail = await User.findOne({ mail: req.body.mail });
        if (mail)
            return res.status(400).json({ message: "The mail already exists" });
        next();
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export {checkDuplicateUsernameOrEmail};
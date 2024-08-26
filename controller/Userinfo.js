const UserInfo = require("../model/userinfo.model");

const add = async(req, res, next) => {
    const postData = req.body;
    let user;
    try {
        user = new UserInfo(postData);

        user = await user.save();
    } catch (err) {
        console.log(err);
        return next();
    }
    res.status(201).json({
        user: user,
    });
};

const get = async(req, res, next) => {
    let user;
    try {
        user = await UserInfo.find();
    } catch (err) {
        console.log(err);
        return next();
    }
    if (!user) {
        return res.status(404).json({ message: "No product Found" });
    }
    res.status(200).json({ user: user });
};

/*
const edit = async(req, res, next) => {
    suger = await Suger.findById(req.params.id);
    if (!suger) {
        return res.status(404).send('something went wrong');

    }
    const postData = req.body;
    if (req.file) {
        postData['image'] = req.file.filename;
    }
    await Suger.findOneAndUpdate({ _id: req.params.id }, {
        $set: postData
    })
    return res.status(200).send('Success');
    next();
};

const delete_ = async(req, res, next) => {
    // console.log(req.params.id);
    suger = await Suger.findById(req.params.id);
    if (!suger) {
        return res.status(404).send('something went wrong');

    }
    await Suger.findOneAndDelete({ _id: req.params.id })
    return res.status(200).send('Success');
    next();
};
*/

module.exports = { add, get }
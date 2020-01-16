const path = require('path');
const Post = require('../database/models/Post');

module.exports = (req, res) => {
    if (req.files) {
        const {
            image
        } = req.files;

        if (image) {
            image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
                Post.create({
                    ...req.body,
                    image: `/posts/${image.name}`
                }, (error, post) => {
                    res.redirect("/");
                });
            });
        }
        return;
    }

    Post.create({
        ...req.body,
    }, (error, post) => {
        res.redirect("/");
    });
};
module.exports = {
    validateAdmin: (req, res) => {
        if (req.body.password === process.env.REACT_APP_ADMIN_PASS) {
            res.sendStatus(200)
        } else {
            res.status(400).send(`ADMIN: "${req.body.password}" NOT AUTHENTICATED`);
        }
    }
};

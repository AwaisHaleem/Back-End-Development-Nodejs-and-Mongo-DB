let authModel = require('../models/authschema');
const bcrypt = require('bcryptjs')

const signUp = async (req, res) => {

    var checkUser = await authModel.findOne({ email: req.body.email });

    if (checkUser) {
        res.status(200).send({ result: checkUser, message: "Email already registerd" });
    } else {
        var hashPass = await bcrypt.hash(req.body.password, 12);

        let userCreate = authModel({ email: req.body.email, password: hashPass });

        userCreate.save()
            .then((response) => {
                res.status(200).send({ result: response, message: "User SignedUp Succesfully" });
            })
            .catch((ere) => {
                res.status(400).send({ result: err.message, message: "Data is not Stored" });
            })
    }

}

const signIn = async (req, res) => {
    var checkUser = await authModel.findOne({ email: req.body.email });
    if (checkUser) {
        var checkPass = await bcrypt.compare(req.body.password, checkUser.password);
        if (checkPass) {
            res.status(200).send({ message: "Signin Successfuly" });
        } else {
            res.status(403).send({ message: "Your password is incorrect" });
        }
    } else {
        res.status(200).send({ message: "No User is registered with this Email" });
    }
}

module.exports = { signUp, signIn };
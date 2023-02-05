const router = require("express").Router();
const User = require('../Model/MLogin');
const CryptoJS = require("crypto-js");



router.post("/minister-register", async (req, res) => {
	const newUser = new User({
		mname: req.body.mname,
        minister:req.body.minister, 
		email: req.body.email,
		contact:req.body.contact,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
	})

	try {
		const registeruser = await newUser.save()
		return res.status(200).json(registeruser)
	} catch (error) {

	}

})


router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({
			email: req.body.email,
		});
		!user && res.status(401).json("User not Found!");
		const hashPassword = CryptoJS.AES.decrypt(
			user.password, process.env.PASS_SEC
		);

		const Originalpassword = hashPassword.toString(CryptoJS.enc.Utf8)

		Originalpassword !== req.body.password && res.status(401).json("Wrong Password");

		const { password, ...others } = user._doc;
		return res.status(200).json({ ...others });
	} catch (err) {
	} 
})

module.exports = router;
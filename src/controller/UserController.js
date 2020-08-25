const User = require('../models/User');


module.exports = {
   
    async register(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(user) {
            return res.json({error: 'email alredy used'});
        } 
        if(!email.length > 0 || !password.length > 0) {
            return res.json({error: 'please enter valid value'});
        }
        const newUser = new User({email, password});
        await newUser.save();
        const token = await jwt.sign({_id: newUser._id}, 'secretkey');
        res.status(200).json({success: 'Your register have been successfuly', token});
        
    },


    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!email.length > 0 || !password.length > 0) {
            return res.json({error: `Please enter valid value`});
        }
        if(!user) {
              return res.json({error: `User doesn't exist`});
        }
        if (user.password !== password) {
            return res.json({error: 'Wrong password'});
        } else {
            
        const token = jwt.sign({ _id: user._id}, 'secretKey');
        res.json({token})
        }
    }
}
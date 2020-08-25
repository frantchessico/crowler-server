const Contact = require('../models/ContactForm');



module.exports = {
    async store(req, res) {
        
      const {
            firstName,
            lastName,
            phone,
            email,
            cityName,
            subject,
            message
        } = req.body;
        if(
           !email || 
           !firstName || 
           !lastName || 
           !phone || 
           !email || 
           !message || 
           !cityName || 
           !subject) {
            return res.json({error: 'please enter valid value'});
        }
        const NewContact = new Contact({
            firstName,
            lastName,
            phone,
            email,
            cityName,
            subject,
            message 
        });

        await NewContact.save().then(() => {
            return res.json({succes: 'Your message has send successfuly'})
        }).catch(error => {
            return res.json(error)
        })
       
        
        
    }
}
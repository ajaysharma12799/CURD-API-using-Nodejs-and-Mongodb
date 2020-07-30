const Message = require('../models/message');

exports.createMessage = (req, res) => {

    let errors = [];
    const { name, email, phone, message } = req.body;
    
    if( !name || !email || !phone || !message ) { // Checking for Complete Validation
        errors.push({ message: 'Please Input all Fields' });
    }

    if(errors.length > 0) {
        res.render('index', errors );
    }
    else {
        let newMessage = new Message( {
            name: name,
            email: email,
            number: phone,
            message: message
        } )
        newMessage.save( (error, user) => {
            if(error) {
                console.log(error);
                req.flash('error_msg', 'Failed to Sent Data');
                res.redirect('/');
            }
            else {
                req.flash('success_msg', 'Message Sent Successfully');
                res.redirect('/');
            }
        })
    }
}

exports.findAllPOST = (req, res) => { // GET request for find all post
    Message.find({}, (error, posts) => {
        if(error) {
            console.log(error);
        }
        res.render('table', {
            posts: posts
        })
    })
}
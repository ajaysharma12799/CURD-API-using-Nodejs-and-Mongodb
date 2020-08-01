const Message = require('../models/message');

exports.getMessageByID = (req, res, next, id) => {
    Message.findById(id).exec( (error, message) => {
        if(error) {
            return res.status(200).json({ error: "Message Not Found" })
        }
        req.message = message;
        next();
    } )
}

exports.create = (req, res) => { // Create New Message

    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        message: req.body.message
    });

    newMessage.save( (error, message) => { // Save Message To DB
        if(error) {
            return res.status(400).json({ error: "Failed to Save in DB" })
        }
        res.json({ message })
    } )

}

exports.get = (req, res) => { // Get All Message
    Message.find({}, (error, messages) => {
        if(error) {
            return res.status(200).json({ error: "Failed to Load Products" })
        }
        res.json({ messages })
    })
}

exports.getOne = (req, res) => { // Get One Message
    res.json(req.message);
}

exports.updateOne = (req, res) => {
   Message.findByIdAndUpdate( 
       { _id: req.message._id },
       { $set: req.body },
       { new: true, useFindAndModify: false },
       (error, updatedMessage) => {
        if(error) {
            console.log(error);
            return res.status(400).json({ error: "Failed to Update Message" })
        }
        res.json({ updatedMessage })
       }
    )    
}

exports.deleteOne = (req, res) => {
    const message = req.message;
    message.remove( (error, deletedMessage) => {
        if(error) {
            return res.status(400).json({ error: "Failed to Delete Message" })
        }
        res.json({ deletedMessage })
    } )
}
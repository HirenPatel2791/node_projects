const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(connectionURL + '/' + databaseName, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password can not contain \'password\'')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if  (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: 'Andrew',
//     age: 'ad'
// })

// const me = new User({
//     name: 'Mike    ',
//     email: 'Mike@adf.com    ',
//     password: '   password'
// })

// me.save().then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log('ERROR => ', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const task = new Task({
//     description: 'Go home!',
    
// })

// task.save().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })
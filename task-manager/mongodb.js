// CRUD Create Read Update Delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()

// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.toHexString())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error)
        console.log('Unable to connect to database!')

    //console.log('Connected correctly!')
    const db = client.db(databaseName)

    /** READ */
    // db.collection('users').findOne({ name: 'Hiren'}, (error, user) => {
    //     if(error)
    //         console.log('Unable to fetch')
    //     console.log(user)
    // })

    // //returns null
    // db.collection('users').findOne({ _id: '5cacbfb3bb61320bf23a0645'}, (error, user) => {
    //     if(error)
    //         console.log('Unable to fetch')
    //     console.log(user)
    // })

    // //this works
    // db.collection('users').findOne({ _id: new ObjectID('5cacbfb3bb61320bf23a0645')}, (error, user) => {
    //     if(error)
    //         console.log('Unable to fetch')
    //     console.log(user)
    // })

    //find returns cursor
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })
    /** READ */

    /** CREATE */
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 27
    // },  (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jane',
    //     age: 10
    // }, {
    //     name: 'Gunther',
    //     age: 20
    // }], (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert documents')
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         complete: true
    //     }, 
    //     {
    //         description: 'Review inspection',
    //         complete: false
    //     }, 
    //     {
    //         description: 'Pot plants',
    //         complete: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })
    /** CREATE */

    /** UPDATE */
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5cacbe016e04ce0bd126a8de')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then(updateResult =>{
    //     console.log('Update Result: ',updateResult)
    // }).catch(error => {
    //     console.log('Update Failed: ', error)
    // })

    // db.collection('tasks').updateMany({
    //     complete: false
    // }, {
    //     $set: {
    //         complete: true
    //     }
    // }).then(updateResults => {
    //     console.log('Update success: ', updateResults)
    // }).catch(error => {
    //     console.log('Update failed: ', error)
    // })
    /** UPDATE */

    /** DELETE */
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then(result => {
    //     console.log('delete success: ', result)
    // }).catch(error => {
    //     console.log('Delete failed: ', error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Review inspection'
    // }).then(result => {
    //     console.log('delete success: ', result)
    // }).catch(error => {
    //     console.log('Delete failed: ', error)
    // })
    /** DELETE */
})


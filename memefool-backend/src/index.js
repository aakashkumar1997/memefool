const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const monk = require('monk')
const fetch = require('node-fetch')

const app = express()

const DB_URL =  process.env.MONGO_URI || 'localhost:27017/memefool'

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    if(req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH')
		return res.status(200).json({})
	}
	next()
})

const dburl = DB_URL
const db = monk(dburl)
const memeCollection = db.get('memes')
const memeUsers = db.get('users')
const feedbackCollection = db.get('feedbacks')

app.use(morgan('tiny'))
app.use(express.json())

app.post('/signup', (req, res) => {
	memeUsers.findOne({uname: req.body.uname}, (err, user) => {
		if(err) {
			console.log(err)
		}else {
			if(user) {
				console.log('user exists \n', user)
				return res.status(200).send({
					success: false,
					data: 'user exists'
				})
			}else {
				memeUsers.insert({
					uname: req.body.uname,
					points: 0,
					jwt: 'token'
				}).then(docs => {
					console.log(docs)
					return res.status(200).send({
						success: true,
						user: {
							uname: docs.uname,
							points: 0
						},
						jwt: 'token'
					})
				}).catch(err => {
					console.log(err)
				}).then(() => {
					db.close()
				})
			}
		}
	})
})

app.post('/signin', (req, res) => {
	memeUsers.findOne({uname: req.body.uname}, (err, user) => {
		if(err) {
			console.log(err)
		}else {
			if(!user) {
				console.log('user does not exists \n', user)
				return res.status(200).send({
					success: false,
					data: 'user does not exists'
			  	})
			}else {
				console.log('user logged in \n', user)
				return res.status(200).send({
					success: true,
					user: {
						uname: user.uname,
					 	points: user.points
					},
					jwt: 'token'
				})
			}
		}
	})
})

app.get('/signin', (req, res) => {
	return res.status(200).send({
		data: "hey"
	})
})

app.post('/feedback', (req, res) => {
	feedbackCollection.insert({
		data: req.body
	}).then(docs => {
		return res.status(200).send({
			data: 'feedback submitted successfully'
		})
	}).catch(err => {
		return res.send(err)
	}).then(() => {
		db.close()
	})
})

app.put('/update', (req, res) => {
	console.log(req.body)
	memeUsers.findOneAndUpdate({uname: req.body.user.uname}, {$set: {points: req.body.user.points}})
			.then(docs => {
				console.log(docs)
				return res.status(200).send({
					data: 'updated'
				})
			})
			.catch(err => {
				console.log(err)
				return res.status(500).send(err)
			})
})

app.get('/', (req, res) => {
	const resData = [];
    memeCollection.find({}, {fields: {_id: 0}}).then(docs => {
    	resData[0] = docs[Math.floor(Math.random() * Math.floor(docs.length)) - 1];
    	resData[1] = docs[Math.floor(Math.random() * Math.floor(docs.length)) - 1];
    })
    .catch(err => console.log(err))
    .then(() => {
    	return res.status(200).json({memes: resData})
    	db.close()
    })
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`listening at http://localhost:${process.env.PORT || 5000}....`)
})

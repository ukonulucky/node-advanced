const express = require('express')


const { createFriend, getFriend, getAllFriends, getAllFriendPic } = require('../controlers/friend.controler')
const friendModel = require("../model/friend.model")


const friendRouter = express.Router()

friendRouter.get("/getAllFriends", getAllFriends)

friendRouter.get("/getFriend/:friendId", getFriend)

friendRouter.post("/createFriend",createFriend)

friendRouter.get("/friendPic",getAllFriendPic)

module.exports = friendRouter
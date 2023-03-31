const express = require('express')
const path = require('path')

const friendModel = require("../model/friend.model")
const friendRouter = express.Router()

function getAllFriends(req, res){
    console.log("code ran")
        res.status(200).json(friendModel)
    }

    function getAllFriendPic(req, res){
        const imgPath = path.join(__dirname, "..", "public", "myPic.jpg")
        console.log(imgPath)
      res.sendFile(imgPath)
        }

 function getFriend(req, res){
       console.log("code ran")
        const friendId = +req.params.friendId
        const friend = friendModel.filter(i => i.id === friendId)
       if(friend && friend.length > 0){
        res.status(200).json({...friend})
       }else{
        res.status(404).json({
            error: "Friend Not Found"
        })
       }
    }
    

function createFriend(req, res){
    console.log("code ran")
    if(!req.body.name){
     return res.status(400).json({
         error:"name is required"
     })
    }
    const newFriend = {
     name: req.body.name,
     id: friendModel.length
 }
 friendModel.push(newFriend)
 res.status(201).json(newFriend)
 }
module.exports = {
    getFriend, getAllFriends, createFriend,
    getAllFriendPic
}
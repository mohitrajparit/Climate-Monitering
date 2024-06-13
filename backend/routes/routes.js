const express=require('express');
const { getAllData,createData,getCurrent } = require('../controllers/controller');

const router=express.Router();

router.get('/',getAllData)
.post('/',createData).get('/top',getCurrent);
module.exports=router

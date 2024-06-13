const db = require("../config/db");


const getAllData=async(req,res)=>{
    try {
        const data=await db.query("SELECT * FROM readings")
        // console.log(data);
        if(!data){
            return res.send(404).send({
                success:false,
                message:"No record found"
            })
        }
        return res.status(200).send({
            success:true,
            message:"data found",
            data:data[0]
        })
    } catch (error) {
        console.log(error)

        res.status(500).send({
            success:false,
            message:"Error occured in get all data",
            error:error
        })
    }
}

const createData=async(req,res)=>{
    try {
        const {temperature,co2_level,humidity,ppm}=req.body
        const currentDate = new Date();
        const curr = currentDate.toISOString();
        console.log(curr);
        // const data={temperature,co2_level,humidity,ppm,curr};
        if(!temperature || !co2_level || !humidity || !ppm){
            return res.send(500).send({
                success:false,
                message:"please fill all data"
            })
        }
        const data=await db.query(`INSERT INTO readings (temperature,co2_level,humidity,ppm) VALUES(?,?,?,?)`,[temperature,co2_level,humidity,ppm]);

        if(!data){
            return res.status(400).send({
                success:false,
                message:"Error in insertion"
            })
        }
        return res.status(201).send({
            success:true,
            message:"new Data created"
        })
    } catch (error) {
        console.log(error)

        res.status(500).send({
            success:true,
            message:"Error occured in posting data",
            error:error
        })
    }
}

const getCurrent=async(req,res)=>{
    try {
        const data=await db.query("SELECT * FROM readings ORDER BY id DESC LIMIT 1")
        // console.log(data);
        if(!data){
            return res.send(404).send({
                success:false,
                message:"No record found"
            })
        }
        return res.status(200).send({
            success:true,
            message:"data found",
            data:data[0]
        })
    } catch (error) {
        console.log(error)

        res.status(500).send({
            success:false,
            message:"Error occured in get current data",
            error:error
        })
    }
}

module.exports={getAllData,getCurrent,createData}
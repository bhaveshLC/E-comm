const userSchema = require('../models/user');
const productSchema = require('../models/products');
const bcrypt  = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require("body-parser"); 
const secretKey = 'bhavesh@123';
var id;
var otpSave;
const addUser = async (req, res) => {
    const { Name, Email, Password } = req.body;

    try {
        const existUser = await userSchema.findOne({Email});
        if(existUser){
            return res.status(400).json({
                message:"User Already Exists",
            });
        }
        const hashPassword = await bcrypt.hash(Password, 10);

        const newUser = await userSchema.create({
            Name: Name,
            Email: Email,
            Password: hashPassword,
        });
        return res.json("Account Successully Created"); // Return the newly created user object
    } catch (error) {
        return res.status(500).json({ error: 'Failed to add  user.'}); // Handle error
    }
}

const Login = async (req, res) => {
    const { Email, Password } = req.body;
  
    try {
      const userExist = await userSchema.findOne({ Email });
      if (!userExist) {
        return res.status(404).json({
          message: "User Not Found",
        });
      }
  
      const PasswordMatch = await bcrypt.compare(Password, userExist.Password);
      if (PasswordMatch) {
        const token = jwt.sign(
          { Email: Email },
          'bhavesh@123', // Replace 'your_secret_key' with your actual secret key
          { expiresIn: '1h' } // Token expires in 1 hour, adjust as needed
        );
        return res.status(200).json({
          token,
          message: "Login Successful",
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

const getAllProducts = async (req, res) => {
    try {
        const Product = await productSchema.find({});
        if (Product.length === 0) {
            console.log("No products found.");
        }
        res.json(Product);
    } catch (error) {
        console.log("Error retrieving products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const sendEmail = (req, res) =>{
    const {Email} = req.body;
    id= Email;
    const subject = "OTP Verification";
    console.log(Email);

    var transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'blchaudhari546@gmail.com',
            pass : 'dscc afxr gfuy myse',
        }
    })
    const otp = (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString();
    otpSave= otp;
    const mailOption= {
        from : 'blchaudhari546@gmail.com',
        to: Email,
        subject : subject,
        text : otp,
    }

    transporter.sendMail(mailOption,(err, info)=>{
        if(err){
            res.status(200).json({
                message:"Please try again",
            })
            console.log(err);
        }
        else{
            res.status(200).json({
                message:"OTP Sent Successfully"
            })
            setTimeout(() => {
                otpSave=0;
            }, 30000);
            console.log("Email Send", info);
        }
    })
}


const Otpverify = (req,res) =>{
    const {otp} = req.body;
    if(otp === otpSave){
        res.status(200).json({
            message: "Valid OTP",
        })
    }
    else
        res.status(200).json({
            message: "Invalid OTP"
    })
}

const ChangePassword = async(req, res) =>{
    const {Email,password, newPassword} = req.body;
    const userExist = await userSchema.findOne({Email: Email});

    if(password === newPassword){
        const hashedNewPassword = await bcrypt.hash(newPassword,10);
        await userSchema.findOneAndUpdate(userExist._id, { Password: hashedNewPassword });
        res.status(200).json({
            message: "Password Changes Successfully",
        })
    }
    else{
        res.json({
            message: "Password does not match",
        })
    }
}


module.exports = { addUser, sendEmail , Login, getAllProducts, Otpverify, ChangePassword};
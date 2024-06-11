import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js';


const createUser = async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({...req.body, password: hashedPassword})
        await user.save();

        const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET,{expiresIn: '24h'});

        // exclude password from user object
        user.password = undefined;

        res.status(201).json({ userDetails:user, token });


    } catch (error) {
        console.log(error);
        // duplication error
        if (error.code === 11000) {
            return res.status(400).send('This email is already in use');
        }

        res.status(400).send(error);
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET,{expiresIn: '24h'});

        // exclude password from user object
        user.password = undefined;

        res.status(200).json({ userDetails:user, token });
    }
    catch (error) {
        res.status(500).send(error);
        console.log('error at login',error)
    }
}

export { createUser, login };



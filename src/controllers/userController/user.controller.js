import express from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/User.js';


const createUser = async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({...req.body, password: hashedPassword})
        await user.save();
        res.status(201).send(user);
    } catch (error) {
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

        res.send('Logged in');
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export { createUser, login };



import express from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    getUsers,
    getUserById,
    updateUserProfile,
    updateUser,
    deleteUser
  } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).post(updateUserProfile);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);

export default router;
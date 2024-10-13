import express from 'express'
import { authUser } from '../controllers/userController.js'
const router = express.Router()

// @desc    Authenticate user and generate token
// @route   POST /api/users/login
// @access  public
router.post('/login', authUser)

export default router
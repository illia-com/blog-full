import { body } from 'express-validator'

export const registerValidation = [
	body('fullName').isLength({ min: 5 }),
	body('login').isLength({ min: 3 }),
	body('email').isEmail(),
	body('password').isLength({ min: 5 }),
]

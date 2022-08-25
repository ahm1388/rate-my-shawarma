import express from 'express'
import { getRestaurants, addRestaurant } from '../controllers/restaurants.js'
 
const router = express.Router()

router.get('/', getRestaurants)
router.post('/', addRestaurant)

export default router
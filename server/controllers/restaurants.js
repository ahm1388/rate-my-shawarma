import AddRestaurant from "../models/restaurantInfo.js"

export const getRestaurants = async (req, res) => {
    try {
        const restaurantInfo = await AddRestaurant.find()

        console.log(restaurantInfo)

        res.status(200).json(restaurantInfo)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addRestaurant = async (req, res) => {
    const restaurant = req.body

    const newRestaurant = new AddRestaurant(restaurant)

    try {
        await newRestaurant.save()

        res.status(201).json(newRestaurant)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
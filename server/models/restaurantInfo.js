import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema({
    name: String,
    Address: String,
    lat: Number,
    lon: Number,
    rating: Number,
    reviews: [{
        user: String,
        rating: Number,
        text: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }],
    addedAt: {
        type: Date,
        default: new Date()
    }
})

const AddRestaurant = mongoose.model('AddRestaurant', restaurantSchema)

export default AddRestaurant
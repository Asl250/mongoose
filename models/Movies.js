'use strict'
import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
	name: {type: String, required: true, trim: true},
	rating: {type: Number, required: true, trim: true},
	money: {
		type: mongoose.Decimal128,
		required: true,
		validate: v => v >= 10
	},
	genre: {type: Array},
	isActive: {type: Boolean},
	comments: [{value: {type: String}, published: {type: Date, default: Date.now}}]
})

//create model
const movieModel = mongoose.model("Movie", movieSchema)

export const allDoc = async () => {
	try {
		// creating new Document
		const result = await movieModel.
		find({$and: [{money: {$lt:40000}}, {rating:{$gt:2}}] })
		console.log(result)
		// result.forEach((movie) => {
		// 	console.log(movie.name)
		// })
	} catch (error){
		console.log(error)
	}
}
export const updateById = async (id) => {
	try {
		const result = await movieModel.deleteMany({ rating: 4})
		console.log(result)
	} catch (error){
		console.log(error)
	}
}

export default {movieModel, updateById}

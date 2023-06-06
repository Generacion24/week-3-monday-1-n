const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const country = await Country.findAll()
    return res.json(country)
});

const create = catchError(async (req,res)=>{
    const country = req.body
    const createCountry = await Country.create(country)
    return res.status(201).json(createCountry)
})

const getOneCountry = catchError(async (req,res)=>{
    const  {id} = req.params
    const countryOne = await Country.findByPk(id)
    if(!countryOne) return res.sendStatus(404)
    return res.json(countryOne)
})

const remove = catchError(async (req,res)=>{
    const {id} = req.params
    const removeCountry = await Country.destroy({where:{id}})
    if(!removeCountry) return res.sendStatus(404)
    return res.sendStatus(204)
})

const update = catchError(async (req,res)=>{
    const {id} =req.params
    const country = req.body
    const countryUpdate = await Country.update(country, {where:{id},returning:true})
    if(countryUpdate[0]===0) res.sendStatus(404)
    return res.json(countryUpdate[1][0])
})

module.exports = {
    getAll,
    create,
    getOneCountry,
    remove,
    update
}
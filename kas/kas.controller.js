const { filter } = require("lodash");
const { Pagination } = require("../libs/lib.common");
const { ExceptionHandler } = require("../libs/lib.exception");
const { KasModel } = require("./kas.model");
const { CheckKas } = require("./kas.service");

async function KasList(req, res) {
    try{
        const result = KasModel.find()
        const search = KasSearch(req, result)
        const paging = await Pagination(req, res, filter)
        return res.status(200).json(paging)
    }catch(error){
        console.log(error)
        return ExceptionHandler(error,res)
    }
}

async function KasCreate(req, res) {
    try {
      await CheckKas(req.body);
      const result = await KasModel.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      return ExceptionHandler(error, res);
    }
  }

  module.exports = {
    KasList,
    KasCreate
  }
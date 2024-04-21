const { KasModel } = require("../kas/kas.model")
const {Error403} = require("../libs/lib.exception")
const {CheckItems} = require("../order/order.service")


const CheckKas = async (cleanedData) => {
    let income = 0
    for(let item of cleanedData.items){
        const kas = await KasModel.findOne({_id: item._id})
        if(!kas){
            throw new Error403("Salah satu item tidak tesedia, permintaan ditolak untuk diproses!")
        }
    }

    return income  = CheckKas
    
}

module.exports = {
    CheckKas
}
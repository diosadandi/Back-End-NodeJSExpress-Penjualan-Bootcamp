const mongoose = require("mongoose");
const { OrderObject } = require("../order/order.model")

const KasObject = {
    nomorReferensi : new mongoose.Schema({...OrderObject, nomor: {type: String, unique: true}}),
    jumlahKeluar : {type : Number},
    jumlahMasuk : {type : Number},
    Tanggal : {type : Date}
};

const KasSchema = new mongoose.Schema(KasObject);

const KasModel = new mongoose.model("Kas", KasSchema);

module.exports = {
    KasObject,
    KasModel,
    KasSchema
}
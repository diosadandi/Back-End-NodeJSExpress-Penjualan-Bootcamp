const express = require("express")
const { IsAuthenticated, Validate } = require("../libs/lib.middleware");
const { KasCreate, KasList } =  require()

const KasRouter = express.Router();

KasRouter.get('/',[IsAuthenticated, ], KasList) 

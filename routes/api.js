import express from "express";
import * as demoController from "../app/controllers/demoController.js";
import * as jwtTest from "../app/controllers/jwtTest.js";
import {TokenDecode} from "../app/controllers/jwtTest.js";
const router = express.Router();


// get request api
router.get("/get",demoController.Demo);

// POST request api
router.post("/post",demoController.Demo1);

// jwt token api
router.get('/demo/tokenencode',jwtTest.TokenEncode);
router.get('/demo1/tokendecode',jwtTest.TokenDecode);

export default router;
import {EncodeToke,DecodeToken} from '../utility/tokenUtility.js';


export const TokenEncode=(req,res)=>{
  let result=EncodeToke("aminulislam@gmail.com","1234");
  res.json({token:result});
}


export const TokenDecode=(req,res)=>{
    let result=DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtaW51bGlzbGFtQGdtYWlsLmNvbSIsInVzZXJfaWQiOiIxMjM0IiwiaWF0IjoxNzM2Nzg5NzU4LCJleHAiOjE3MzkzODE3NTh9.N2e8G3ZCWlwjyXqBWV6Sa4cwEMp-BCrURi3LnB1a2do");
    res.json({token:result});
}



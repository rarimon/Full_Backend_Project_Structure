import {JWT_EXPIRE_TIME,JWT_SECRET} from '../config/config.js'
import jwt from 'jsonwebtoken';

export const EncodeToke=(email, user_id)=>{
    let Key=JWT_SECRET;
    let EXPIRE={expiresIn: JWT_EXPIRE_TIME};
    let PAYLOAD={email:email,user_id:user_id};
    return jwt.sign(PAYLOAD,Key,EXPIRE);

}

export const DecodeToken=(token)=>{
     try{
         return jwt.verify(token,JWT_SECRET);
     }catch(err){
         return null;
     }
}
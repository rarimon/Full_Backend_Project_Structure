import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import  helmet from 'helmet';
import  hpp from 'hpp';
import mongoose from 'mongoose';
import routes from './routes/api.js';
import {PORT,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER,JSON_MAX_SIXE,WEB_CACHING} from './app/config/config.js';

const app = express();

//Global Application Middleware
app.use(cookieParser());
app.use(express.json({limit:JSON_MAX_SIXE}));
app.use(cors());
app.use(helmet());
app.use(hpp());

const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter);

// Web Caching
app.set("etag",WEB_CACHING);

// MongoDB Database Connection
// mongoose.connect("http://localhost:8080",{autoIndex:true})
//     .then(()=>{
//         console.log("MongoDB Connected");
//     })
//     .catch((err)=>{
//         console.log("Database Connection Fail: "+err);
//     })

// Set API Routes
app.use('/api/v1',routes);



app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});
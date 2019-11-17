import { apiMiddleware } from 'redux-api-middleware'
import messageMiddleware from './messageMiddleware.js';
import chatMiddleware from './chatMiddleware.js';


export default [
    messageMiddleware,
    chatMiddleware,
    apiMiddleware
];
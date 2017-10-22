import express from 'express';
import userRoute from './userRoute';

const router = express.Router(); // eslint-disable-line new-cap

router.use('/users', userRoute);

export default router;

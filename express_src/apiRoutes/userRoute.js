import express from 'express';
import * as userCtrl from '../controllers/userController.js';

const router = express.Router();

router.route('/create')
  .post(userCtrl.create);

router.route('/:id')
  .put(userCtrl.update);

export default router;

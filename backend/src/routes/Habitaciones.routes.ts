import { Router } from 'express';
const router = Router();

import * as habCtrl from './Habitaciones.controller';

router.get('/habitaciones', habCtrl.getHabs);

router.get('/habitaciones/:id', habCtrl.getHab);

router.post('/habitaciones', habCtrl.createHab);

router.delete('/habitaciones/:id', habCtrl.deleteHab);

router.put('/habitaciones/:id', habCtrl.updateHab);

export default router;

import { Router } from 'express';
const router = Router();

import * as habCtrl from './Habitaciones.controller';

router.get('/habitaciones', habCtrl.getHabs);

router.post('/habitaciones', habCtrl.createHab);

router.put('/habitaciones', habCtrl.updateHab);

router.get('/habitaciones/:id', habCtrl.getHab);

router.put('/habitaciones/:id', habCtrl.updateHabData);

//router.delete('/habitaciones/:id', habCtrl.deleteHab);

export default router;

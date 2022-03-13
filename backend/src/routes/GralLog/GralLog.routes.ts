import { Router } from 'express';
const router = Router();

import * as gralLogCtrl from './GralLog.controller';

router.get('/logs', gralLogCtrl.getGralLogs);

router.delete('/logs/:id', gralLogCtrl.deleteGralLog);

/* router.put('/logs', gralLogCtrl.updateGralLog);

router.get('/logs/:id', gralLogCtrl.getGralLog);

router.put('/logs/:id', gralLogCtrl.updateGralLogData);

router.post('/logs', gralLogCtrl.createGralLog);*/

export default router;

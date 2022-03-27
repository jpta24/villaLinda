import { Router } from 'express';
const router = Router();

import * as gralLogCtrl from './GralLog.controller';

router.get('/logs', gralLogCtrl.getGralLogs);

router.delete('/logs/:id', gralLogCtrl.deleteGralLog);

router.put('/logs', gralLogCtrl.updateAll);

router.post('/logs', gralLogCtrl.createGralLog);

/* router.get('/logs/:id', gralLogCtrl.getGralLog);

router.put('/logs/:id', gralLogCtrl.updateGralLogData);*/

export default router;

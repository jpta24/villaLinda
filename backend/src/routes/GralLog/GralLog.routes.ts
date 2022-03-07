import { Router } from 'express';
const router = Router();

import * as gralLogCtrl from './GralLog.controller';

router.post('/logs', gralLogCtrl.createGralLog);

/* router.get('/logs', gralLogCtrl.getGralLogs);

router.put('/logs', gralLogCtrl.updateGralLog);

router.get('/logs/:id', gralLogCtrl.getGralLog);

router.put('/logs/:id', gralLogCtrl.updateGralLogData);

router.delete('/logs/:id', gralLogCtrl.deleteGralLog); */

export default router;

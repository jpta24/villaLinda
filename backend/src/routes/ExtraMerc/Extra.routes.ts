import { Router } from 'express';
const router = Router();

import * as extraCtrl from './Extra.controller';

router.get('/extramercs', extraCtrl.getExtras);

router.post('/extramercs', extraCtrl.createExtra);

router.put('/extramercs', extraCtrl.updateExtra);

//router.get('/habitaciones/:id', extraCtrl.getExtra);

//router.delete('/habitaciones/:id', extraCtrl.deleteExtra);

export default router;

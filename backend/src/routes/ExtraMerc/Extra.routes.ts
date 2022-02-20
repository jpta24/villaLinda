import { Router } from 'express';
const router = Router();

import * as extraCtrl from './Extra.controller';

router.get('/extras', extraCtrl.getExtras);

router.post('/extras', extraCtrl.createExtra);

router.put('/extras', extraCtrl.updateExtra);

//router.get('/habitaciones/:id', extraCtrl.getExtra);

//router.delete('/habitaciones/:id', extraCtrl.deleteExtra);

export default router;

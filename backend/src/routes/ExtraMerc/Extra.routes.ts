import { Router } from 'express';
const router = Router();

import * as extraCtrl from './Extra.controller';

router.get('/extramercs', extraCtrl.getExtras);

router.post('/extramercs', extraCtrl.createExtra);

router.put('/extramercs', extraCtrl.updateExtra);

router.get('/extramercs/:id', extraCtrl.getExtra);

router.put('/extramercs/:id', extraCtrl.updateExtraData);

router.delete('/extramercs/:id', extraCtrl.deleteExtra);

export default router;

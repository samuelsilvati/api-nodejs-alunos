import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/*
index - lista todos usuários -> GET
store/create - cria um novo usuário -> POST
delete - apaga um usuário -> DELETE
show - mostra um usuário -> GET
update - atualiza um usuário -> PATCH ou PUT
*/

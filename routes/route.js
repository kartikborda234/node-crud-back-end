import express,{Router} from 'express'
import {addUser,getUsers,getUser,editUser,deleteUser} from "../controller/userController.js";

const router=express.Router();

router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser)

export default router;

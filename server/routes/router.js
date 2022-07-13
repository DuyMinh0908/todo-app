import express from 'express';
import { createTodo, getAllTodo, deleteById,updateActivatesTodo} from '../controller/todoController';

const router = express.Router();
router.post('/todo', createTodo);
router.get('/getAllTodo',getAllTodo);
router.delete('/deleteById/:id',deleteById);
router.put('/updateActivatesById/:id',updateActivatesTodo);
export default router;
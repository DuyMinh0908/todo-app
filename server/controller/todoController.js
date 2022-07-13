import mongoose from "mongoose";
import todo from "../model/todo";



export function createTodo(req,res){
    const  newTodo = new todo({ 
        _id : mongoose.Types.ObjectId(),
        title: req.body.title,
        times: req.body.times,
    })
    return newTodo.save()
               .then((newTodo)=>{
                return res.status(201).json({
                    success: true,
                    message: 'New todo create successfully',
                    todo: newTodo,

                });
               })
               .catch((error=>{
                return res.status(500).json({
                    success: false,
                    message: 'Server erorr',
                    error: error.message,
                })
               }))
}
export function getAllTodo(req,res){
        
        todo.find({},function(err,todos){
            if(err){
                return res.status(404).json({
                    error:err.message,
                })
            }
            return res.status(200).json({
                data:todos,
            })
        })
    }
export function deleteById(req, res){
    console.log(req.params.id);
    todo.findByIdAndRemove(req.params.id, function(error){
        if(error){
            return res.status(404).json({
                err: error.message,
            });
        }
        return res.status(200).json({
            message: "xoa thang cong",
        })

    })
}

export function updateActivatesTodo(req,res){
    
    todo.findByIdAndUpdate(req.params.id,{activates:req.body.activates},(err,docs)=>{
        if(err){ 
            return res.status(404).json({
                err: err.message,
            })
        }
        else{
            return res.status(200).json({
                message:docs,
                
            })
        }
    })
}
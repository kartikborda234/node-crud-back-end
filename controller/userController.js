import User from "../models/User.js"

export const addUser=async (request,response)=>{
    console.log("req",request.body)
    const user = request.body;
    const newUser=new User(user)
    
    try{
       await newUser.save();
        response.status(201).json(newUser);
    }catch (error) {
        response.status(409).json({message:error.message})
    }
}

export const getUsers =async (req,res)=>{
    try{
        const users =await User.find();
        res.status(200).json(users)
    }catch (error) {
        res.status(404).json({message:error.message()})
    }
}

export const getUser=async (req,res)=>{
    try{
        const user =await User.find({_id:req.params.id});
        res.status(200).json(user)
    }catch (e) {
        res.status(404).json({message:e.message})
    }
}

export const editUser=async (request,response)=>{
    const user = request.body;
    const editUser=new User(user)

    try{
        await User.updateOne({_id:request.params.id},editUser)
        response.status(201).json(editUser);
    }catch (error) {
        response.status(409).json({message:error.message})
    }
}

export const deleteUser=async (request,response)=>{
    try{
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message:"user deleted successfully"});
    }catch (error) {
        response.status(409).json({message:error.message})
    }
}
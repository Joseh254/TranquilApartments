import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

export const validateInformation = async (req,res,next)=>  {
    const{firstname,lastname,emailaddress,password}=req.body;
    if(!firstname) return res.status(400).json({success:false,message:"First name required..."})
    if(!lastname) return res.status(400).json({success:false,message:"last name required..."})
    if(!emailaddress) return res.status(400).json({success:false,message:"Email addressrequired..."})
    if(!password) return res.status(400).json({success:false,message:"Password required..."})

const userWithEmail =await prisma.user.findFirst({
    where:{emailaddress:emailaddress}
})
if (userWithEmail)return res.status(400).json({success:false,message:"Oops email already taken..."})
    next();

}
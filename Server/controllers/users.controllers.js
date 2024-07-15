import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const prisma =new PrismaClient();



export const createUser=async(req,res)=>{
    try{
        const{firstname,lastname,emailaddress,phonenumber,password}=req.body;
        if(!firstname)return res.status(400).json({success:false, message:"First name required..."})
        
        const hashedPassword =bcrypt.hashSync(password, 10);
        const newUser= await prisma.user.create({
            data:{
                firstname:firstname,
                lastname:lastname,
                emailaddress:emailaddress,
                phonenumber:phonenumber,
                password:hashedPassword
            }
        })
        res.status(201).json({success:true,message:"hurray!!user created successfuly..."})
    }catch(e){
        console.log(e.message);
        res.status(500).json({success:false,message:e.message})
    }
    
    }
    export const loginUser = async (req, res) => {
        const { emailaddress, password } = req.body;
        try {
          const user = await prisma.user.findFirst({
            where: { emailaddress }
          });
          if (user) {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (passwordMatch === true) {
            const payload ={
                id:user.id,
                firstname:user.firstname,
                lastname:user.lastname,
                emailaddress:user.emailaddress
            }
            
                const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"10m"});
                //   return res.json({ success: true, message: "Signed in successfully...", user });
            res.cookie("access_token",token)
            res.status(200).json({success:true,data:payload})
            } else {
              return res.status(400).json({ success: false, message: "Oops! Wrong login credentials..." });
            }
          } else {
            return res.status(404).json({ success: false, message: "User not found..." });
          }
        } catch (e) {
          return res.status(500).json({ success: false, message: e.message });
        }
      }
      
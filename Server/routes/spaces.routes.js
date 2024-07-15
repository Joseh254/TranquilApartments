import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/",async (req, res) => {
    try{
        const spaces=await prisma.spaces.findMany();
        res.status(200).json(spaces);
    }catch(e){
        res.status(500).json({success:false, message:e.message})
    }
});
// Get by id
router.get("/:id",async (req, res) => {
const id =req.params.id;
try{
    const spaces=await prisma.spaces.findFirst({

        where:{id:id}
    })
    if (!spaces){
        res.status(404).json({message:"oops Space not found..."})
    }else{
        res.status(200).json(spaces)
    }
   
}catch(e){
    res.status(500).json({success:false, message:e.message})
}
});
// create
router.post("/", async (req, res) => {
    
    try {
        const { price,vacancy, location, floor,type } = req.body; 
        const newSpace = await prisma.spaces.create({
            data: {           
                type:type,
                vacancy: vacancy,
                location: location,
                floor: floor,
                price:price
            }
        });
        res.status(201).json(newSpace);
        
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});
// // update by id
// router.patch("/:id", async(req, res) => {
//     const {space_id, type,vacancy, location, floor } =req.body;
//     const id=req.params.id;
//     try{
//         let updatedSpace;
//             if(type){
//                 updatedSpace=await prisma.spaces.update({
//                     where:{id:id},
//                     data: {type:type}
//                 })
//             }


//             if(vacancy){
//                 updatedSpace=await prisma.spaces.update({
//                     where:{id:id},
//                     data: {vacancy:vacancy}
//                 })
//             }

//             if( location){
//                 updatedSpace=await prisma.spaces.update({
//                     where:{id:id},
//                     data: { location: location}
//                 })
//             }

//             if(  floor){
//                 updatedSpace=await prisma.spaces.update({
//                     where:{id:id},
//                     data: {  floor:  floor}
//                 })
//             }        
         
        
//         res.status(200).json({success:true,message:'hurray!!updated successfully'})

//     }catch(error){
//         res.status(500).json({success:false,message:error.message})
//     }
// });
   
// // delete by id
// router.delete("/:id", async(req, res) => {
//     const id=req.params.id;
//     try{
//       const deleteSpace=await prisma.spaces.delete(
//       {
//           where:{id:id}
//       }
          
//       );
//   res.status(201).json({success:true,message:"hurray!!Space deleted"})
//     }catch(error){
//       res.status(500).json({success:false,message:error.message})
//     }
//   });

export default router;

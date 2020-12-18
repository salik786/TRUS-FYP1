const express=require("express");
const router=express.Router();
const LandData=require("../../Models/Land");

router.post("/",(req,res)=>{


      const newEditProfile=new LandData({
            ownercnic:req.body.ownercnic,
            ownername:req.body.ownername,
            ownerfathername:req.body.ownerfathername,
            location:req.body.location,
            city:req.body.city,
            province:req.body.province,
            estimatedprice:req.body.estimatedprice,
      })
      newEditProfile.save()
      .then(newEditProfile=>res.json(newEditProfile))
      .catch(err=>res.json(err));

});

router.get("/",(req,res)=>{

      LandData.find().then(data=>res.json(data)).catch(err=>res.status(400).json("Error" +err));

})
//-------------------------//
//----------update---------//
//------------------------//router.put(`/survey/${id}`, data);
 router.get("/survey/id", (req, res) => {
      const id = req.params.id;
    
      LandData.findById(id)
        .then(data => {
          if (!data)
            res.status(404).send({ message: "Not found Survey with id " + id });
          else res.send(data);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "Error retrieving Survey with id=" + id });
        });
    });
router.put("/survey/:id", (req, res) => {
   LandData.findById(req.params.id)
   .then(data =>{
      data.title=req.body.title,
      
      data.subtitle=req.body.subtitle

      data.save()
      .then(()=>res.json("Survey Updated"))
      .catch(err=>res.status(400).json("Err :"+err));
      
   })
   .catch(err=>res.status(400).json("Err : ",err));
});


//delete by id
router.get("/survey/:id",(req,res)=>{

      LandData.findById(req.params.id).then(data=>res.json(data)).catch(err=>res.status(400).json("Error" +err));

});
router.delete('/survey/:id',(req,res)=>{

LandData.findByIdAndDelete(req.params.id)
.then(()=>res.json("Survey Deleted"))
.catch(err=>res.status(400).json("ERROR :" +err));
});

// router.delete('/survey',(req,res)=>{

//       LandData.deleteMany()
//       .then(()=>res.json("All Survey Deleted"))
//       .catch(err=>res.status(400).json("ERROR :" +err));
//       });
// });

module.exports=router;

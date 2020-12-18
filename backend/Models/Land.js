const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const LandSchema=new Schema({

    ownercnic:{
        type: String,
        required: true
    },
    
    
    ownername:{

        type:String,
        required:true
    },
    ownerfathername:{

        type:String,
        required:true
    },
    location:{

        type:String,
        required:true
    },
    city:{

        type:String,
        required:true
    },
    province:{

        type:String,
        required:true
    },
    estimatedprice:{

        type:String,
        
    },
   
});
LandSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
const ProfileData=mongoose.model("Land",LandSchema);
module.exports=ProfileData;
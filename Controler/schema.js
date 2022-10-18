const mongoose= require('mongoos')
const schma= new mongoose.Schema({
    id:Number,
    require:true,

    name:String,
    require:true,

    father_name:String,
})
mongoose.connect("mongodb://localhost:27017/database")
const main= async ()=>{
    // mongoose.connect("mongodb://localhost:27017/mongo");
    const modle =mongoose.model('data',schma)
    let data =new modle({id:121,name:"Usmn",father_name:"onetwo" })
    let results = await data.save(); 
    console.log(results)
}
main();
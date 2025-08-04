import mongoose from 'mongoose'

export const dbConnect = async ()=>{
const Connect = await mongoose.connect('mongodb+srv://manjityadav9986:Manjit9986@cluster0.c4tm2uh.mongodb.net/quirex');
if(Connect){
console.log("database connected...");
}

}




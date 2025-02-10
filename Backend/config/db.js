import mongoose from "mongoose"

export const connectDB = async ()=>{
    // await mongoose.connect('mongodb+srv://mahendra:@clusterone.tkm3k.mongodb.net/FoodDeliveryApp').then(()=>console.log("DB Connected"));
    // mongodb+srv://mahendra:PabbathiMahendra%401234@clusterone.tkm3k.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne
    
    await mongoose.connect('mongodb+srv://pabbathimahendra:BKxXkjVrmqufK5C8@cluster0.ms2je.mongodb.net/FoodDel').then(()=>console.log("DB Connected"));




    // password : BKxXkjVrmqufK5C8
    // string : mongodb+srv://pabbathimahendra:BKxXkjVrmqufK5C8@cluster0.ms2je.mongodb.net/?
}
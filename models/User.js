import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String,required: true,unique: true},
    username: {type: String,required: true,unique: true}, 
    profilepic: {type: String}, 
    coverpic: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    razorpayId: { type: String },
    razorpaySecret: { type: String },
    PhoneNumber: { type: Number },
});
export default mongoose.models.User || model("User", UserSchema);
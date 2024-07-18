import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true })

//encrypt password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    };
    this.password = await bcrypt.hash(this.password, 10)
})
//compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

export default model("User", userSchema)
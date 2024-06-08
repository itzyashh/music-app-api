import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database Connected");
}
).catch((err) => {
    console.log(err);
});



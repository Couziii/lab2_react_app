import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const URI = process.env.CONNECTION_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        })
        console.log("MongoDB connected")
        // const employeeCollection = mongoose.connection.db.collection("employees")
        // const employeeData = await employeeCollection.find({ fullname: "Ash Ketchum"}).toArray();

        // console.log(employeeData)
        

    } catch (error) {
        console.log(error)

        process.exit(1)
    }
}


export default connectDB
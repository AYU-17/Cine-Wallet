import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import connectionDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import watchlistRouter from "./routes/watchlistRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import helmat from 'helmet'
import rateLimit from 'express-rate-limit'
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config()

connectionDB()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(helmet())
app.use(rateLimit({windowMs: 15*60*1000, max: 100}))
app.use('/api/auth', authRouter)
app.use("/api/watchlist", watchlistRouter)
app.use("/api/bookings", bookingRouter)
app.use("/api/reviews", reviewRoutes)
app.use("/api/movies", movieRoutes)
app.use("/api/upload", uploadRoutes)

app.get("/", (req,res)=>{
    res.send("Cine Wallet API Running")
})

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})
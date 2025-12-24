import { Router } from "express";
import userRoute from "./user.routes.js"
import adminRoute from "./admin.routes.js"
import addressRoute from './address.route.js'
import bookingRoute from './booking.route.js'
import cleanersRoute from './cleaners.route.js' 
import cleanServiceRoute  from './cleaning-services.route.js'
import paymentRoute from './payments.route.js'
import categoryRoute from './service-categories.route.js'


const router = Router();

router
    .use("user", userRoute)
    .use("admin", adminRoute)
    .use('address',addressRoute)
    .use('booking', bookingRoute)
    .use('cleaners', cleanersRoute)
    .use('service', cleanServiceRoute)
    .use('payment', paymentRoute)
    .use('category',categoryRoute)

export default router
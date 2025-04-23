import express from "express"
import bodyParser from "body-parser"
import { generalRouter } from "./routing/general.router.js"
import { balustradeRouter } from "./routing/balustrade.router.js"
import { roleteRouter } from "./routing/rolete.router.js"
import { ferestreRouter } from "./routing/ferestre.router.js"
import { usiRouter } from "./routing/usi.router.js"

const api = express()
const port = 3000

api.use(bodyParser.json())

// Add headers before the routes are defined
api.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*")

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true)

  // Pass to next layer of middleware
  next()
})

api.use(generalRouter)
api.use("/balustrade", balustradeRouter)
api.use("/rolete", roleteRouter)
api.use("/ferestre", ferestreRouter)
api.use("/usi", usiRouter)


api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

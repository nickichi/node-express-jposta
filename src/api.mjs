import express from 'express'
import {getAddress} from "jposta";

const app = express()

const server = app.listen(3000, () => {
  console.log('Server running on port 3000')
})

app.get("/api/getAddress", async (req, res) => {
  const result = await getAddress(req.query.zip).catch((e) => {
    console.error(e)
    return {error: e.message}
  })
  return res.json(result)
})
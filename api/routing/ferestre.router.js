import { Router } from "express"
import {
  adaugaFereastra,
    getFerestreList,
    stergeFereastra,
    editeazaFereastra
} from "../service/ferestre.service.js"

export const ferestreRouter = Router()

ferestreRouter.get("/", (req, res) => {
  res.send(JSON.stringify(getFerestreList()))
})

ferestreRouter.post("/adauga-fereastra", (req, res) => {
  const { title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")

  if (!check.test(title) || !check.test(description)) {
    res.status(400).send("Invalid title or category")
    return
  }

  adaugaFereastra({ title, description, img })
  res.send("ok")
})

ferestreRouter.delete("/delete-note", (req, res) => {
  const { id } = req.body

  const checkId = new RegExp("^[0-9]*$")
  if (!checkId.test(id)) {
    res.status(400).send("Invalid note ID")
    return
  }

  stergeFereastra(id)
  res.send("ok")
})

ferestreRouter.put("/edit-note", (req, res) => {
  const { id, title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")
  if ((title && !check.test(title)) || (description && !check.test(description))) {
    res.status(400).send("Invalid title or category")
    return
  }

  editeazaFereastra(id, { title, description, img })
  res.send("ok")
})

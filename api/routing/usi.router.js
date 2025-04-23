import { Router } from "express"
import {
  adaugaUsa,
    getUsiList,
    stergeUsa,
    editeazaUsa
} from "../service/usi.service.js"

export const usiRouter = Router()

usiRouter.get("/", (req, res) => {
  res.send(JSON.stringify(getUsiList()))
})

usiRouter.post("/adauga-usa", (req, res) => {
  const { title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")

  if (!check.test(title) || !check.test(description)) {
    res.status(400).send("Invalid title or category")
    return
  }

  adaugaUsa({ title, description, img })
  res.send("ok")
})

usiRouter.delete("/delete-note", (req, res) => {
  const { id } = req.body

  const checkId = new RegExp("^[0-9]*$")
  if (!checkId.test(id)) {
    res.status(400).send("Invalid note ID")
    return
  }

  stergeUsa(id)
  res.send("ok")
})

usiRouter.put("/edit-note", (req, res) => {
  const { id, title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")
  if ((title && !check.test(title)) || (description && !check.test(description))) {
    res.status(400).send("Invalid title or category")
    return
  }

  editeazaUsa(id, { title, description, img })
  res.send("ok")
})

import { Router } from "express"
import {
  adaugaRoleta,
    getRoleteList,
    stergeRoleta,
    editeazaRoleta
} from "../service/rolete.service.js"

export const roleteRouter = Router()

roleteRouter.get("/", (req, res) => {
  res.send(JSON.stringify(getRoleteList()))
})

roleteRouter.post("/adauga-roleta", (req, res) => {
  const { title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")

  if (!check.test(title) || !check.test(description)) {
    res.status(400).send("Invalid title or category")
    return
  }

  adaugaRoleta({ title, description, img })
  res.send("ok")
})

roleteRouter.delete("/delete-roleta", (req, res) => {
  const { id } = req.body

  const checkId = new RegExp("^[0-9]*$")
  if (!checkId.test(id)) {
    res.status(400).send("Invalid note ID")
    return
  }

  stergeRoleta(id)
  res.send("ok")
})

roleteRouter.put("/edit-roleta", (req, res) => {
  const { id, title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")
  if ((title && !check.test(title)) || (description && !check.test(description))) {
    res.status(400).send("Invalid title or category")
    return
  }

  editeazaRoleta(id, { title, description, img })
  res.send("ok")
})

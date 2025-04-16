import { Router } from "express"
import {
  adaugaBalustrada,
  getBalustradeList,
  stergeBalustrada,
  editeazaBalustrada
  
} from "../service/balustrade.service.js"

export const balustradeRouter = Router()

balustradeRouter.get("/", (req, res) => {
  res.send(JSON.stringify(getBalustradeList()))
})

balustradeRouter.post("/adauga-balustrada", (req, res) => {
  const { title, description, img } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")

  if (!check.test(title) || !check.test(description)) {
    res.status(400).send("Invalid title or category")
    return
  }

  adaugaBalustrada({ title, description, img })
  res.send("ok")
})

balustradeRouter.delete("/delete-note", (req, res) => {
  const { id } = req.body

  const checkId = new RegExp("^[0-9]*$")
  if (!checkId.test(id)) {
    res.status(400).send("Invalid note ID")
    return
  }

  stergeBalustrada(id)
  res.send("ok")
})

balustradeRouter.put("/edit-note", (req, res) => {
  const { id, title, description, category } = req.body

  const check = new RegExp("^[a-zA-Z0-9 ]*$")
  if ((title && !check.test(title)) || (category && !check.test(category))) {
    res.status(400).send("Invalid title or category")
    return
  }

  editeazaBalustrada(id, { title, description, category })
  res.send("ok")
})

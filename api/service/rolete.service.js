export const lists = []

export const adaugaRoleta = ({ title, description, img }) => {
  lists.push({ title, description, img })
}

export const stergeRoleta = id => {
  lists.splice(id, 1)
}
export const editeazaRoleta = (id, { title, description, img }) => {
  lists[id].title = title
  lists[id].description = description
  lists[id].img = img

}

export const getRoleteList = () => {
  return lists
}

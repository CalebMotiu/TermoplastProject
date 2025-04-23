export const lists = []

export const adaugaUsa = ({ title, description, img }) => {
  lists.push({ title, description, img })
}

export const stergeUsa = id => {
  lists.splice(id, 1)
}
export const editeazaUsa = (id, { title, description, img }) => {
  lists[id].title = title
  lists[id].description = description
  lists[id].img = img
}

export const getUsiList = () => {
  return lists
}

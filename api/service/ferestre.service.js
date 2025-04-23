export const lists = []

export const adaugaFereastra = ({ title, description, img }) => {
  lists.push({ title, description, img })
}

export const stergeFereastra = id => {
  lists.splice(id, 1)
}
export const editeazaFereastra = (id, { title, description, img }) => {
  lists[id].title = title
  lists[id].description = description
  lists[id].img = img
}

export const getFerestreList = () => {
  return lists
}

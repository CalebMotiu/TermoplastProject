export const lists = []

export const adaugaBalustrada = ({ title, description, img }) => {
  lists.push({ title, description, img })
}

export const stergeBalustrada = id => {
  lists.splice(id, 1)
}
export const editeazaBalustrada = (id, { title, description, img }) => {
  lists[id].title = title
  lists[id].description = description
  lists[id].img = img
}

export const getBalustradeList = () => {
  return lists
}

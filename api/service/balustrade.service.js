export const lists = []

export const adaugaBalustrada = ({ title, description, img }) => {
  lists.push({ title, description, img })
}

export const stergeBalustrada = id => {
  lists.splice(id, 1)
}
export const editeazaBalustrada = (id, name) => {
  lists[id].name = name
}

export const getBalustradeList = () => {
  return lists
}

import { defineStore } from "pinia"
import axios from "axios"

export const useBalustrade = defineStore("balustrade", {
  state: () => {
    return {
      lists: [] 
    }
  },
  actions: {
    fetchBalustrade() {
      axios.get("http://localhost:3000/balustrade").then(response => {
        this.lists = response.data
      })
    },

    adaugaBalustrada({ title, description, img }) {
      const balustradaNoua = {
        title,
        description,
        img
      }

      this.lists.push(balustradaNoua)

      axios.post(
        "http://localhost:3000/balustrade/adauga-balustrada",
        {
          title,
          description,
          img
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    },

    stergeBalustrada(id) {
      this.lists.splice(id, 1)

      axios.delete("http://localhost:3000/balustrade/delete-note", {
        headers: {
          "Content-Type": "application/json"
        },
        data: { id }
      })
    },

    editeazaBalustrada(idBalustrada, updatedData) {
      Object.assign(this.lists[idBalustrada], updatedData)

      axios.put(
        "http://localhost:3000/balustrade/edit-note",
        {
          id: idBalustrada,
          ...updatedData
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    }
  }
})

import { defineStore } from "pinia"
import axios from "axios"

export const useUsi = defineStore("usi", {
  state: () => {
    return {
      lists: [] 
    }
  },
  actions: {
    fetchusi() {
      axios.get("http://localhost:3000/usi").then(response => {
        this.lists = response.data
      })
    },

    adaugaUsa({ title, description, img }) {
      const usaNoua = {
        title,
        description,
        img
      }

      this.lists.push(usaNoua)

      axios.post(
        "http://localhost:3000/usi/adauga-usa",
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

    stergeUsa(id) {
      this.lists.splice(id, 1)

      axios.delete("http://localhost:3000/usi/delete-note", {
        headers: {
          "Content-Type": "application/json"
        },
        data: { id }
      })
    },

    editeazaUsa(idUsa, updatedData) {
      Object.assign(this.lists[idUsa], updatedData)

      axios.put(
        "http://localhost:3000/usi/edit-note",
        {
          id: idUsa,
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

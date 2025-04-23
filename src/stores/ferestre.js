import { defineStore } from "pinia"
import axios from "axios"

export const useFerestre = defineStore("ferestre", {
  state: () => {
    return {
      lists: [] 
    }
  },
  actions: {
    fetchferestre() {
      axios.get("http://localhost:3000/ferestre").then(response => {
        this.lists = response.data
      })
    },

    adaugaFereastra({ title, description, img }) {
      const fereastraNoua = {
        title,
        description,
        img
      }

      this.lists.push(fereastraNoua)

      axios.post(
        "http://localhost:3000/ferestre/adauga-fereastra",
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

    stergeFereastra(id) {
      this.lists.splice(id, 1)

      axios.delete("http://localhost:3000/ferestre/delete-note", {
        headers: {
          "Content-Type": "application/json"
        },
        data: { id }
      })
    },

    editeazaFereastra(idFereastra, updatedData) {
      Object.assign(this.lists[idFereastra], updatedData)

      axios.put(
        "http://localhost:3000/ferestre/edit-note",
        {
          id: idFereastra,
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

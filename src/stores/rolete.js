import { defineStore } from "pinia"
import axios from "axios"

export const useRolete = defineStore("rolete", {
  state: () => {
    return {
      lists: [] 
    }
  },
  actions: {
    fetchrolete() {
      axios.get("http://localhost:3000/rolete").then(response => {
        this.lists = response.data
      })
    },

    adaugaRoleta({ title, description, img }) {
      const roletaNoua = {
        title,
        description,
        img
      }

      this.lists.push(roletaNoua)

      axios.post(
        "http://localhost:3000/rolete/adauga-roleta",
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

    stergeRoleta(id) {
      this.lists.splice(id, 1)

      axios.delete("http://localhost:3000/rolete/delete-roleta", {
        headers: {
          "Content-Type": "application/json"
        },
        data: { id }
      })
    },

    editeazaRoleta(idRoleta, updatedData) {
      Object.assign(this.lists[idRoleta], updatedData)

      axios.put(
        "http://localhost:3000/rolete/edit-roleta",
        {
          id: idRoleta,
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

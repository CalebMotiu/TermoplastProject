<script setup>
import AveragePrice from '../components/AveragePrice.vue'
import ProductCard from '../components/ProductCard.vue'
import { useBalustrade } from '../stores/balustrade'
import { ref, computed, onMounted } from 'vue'

const store = useBalustrade()

onMounted(() => {
  store.fetchBalustrade()
})

const searchQuery = ref('')

const newTitle = ref('')
const newDescription = ref('')
const newImg = ref('')

const handleAdauga = () => {
  if (!newTitle.value || !newImg.value) {
    alert("Titlul și imaginea sunt obligatorii!")
    return
  }

  store.adaugaBalustrada({
    title: newTitle.value,
    description: newDescription.value,
    img: newImg.value
  })

  newTitle.value = ''
  newDescription.value = ''
  newImg.value = ''
}
  
const filteredProducts = computed(() =>
  store.lists.filter(product =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const editingId = ref(null)
const editTitle = ref('')
const editDescription = ref('')
const editImg = ref('')

const handleSterge = (index) => {
  const confirmare = confirm("Ești sigur că vrei să ștergi această balustradă?")
  if (confirmare) {
    store.stergeBalustrada(index)
  }
}

const handleStartEdit = (index) => {
  editingId.value = index
  const item = store.lists[index]
  editTitle.value = item.title
  editDescription.value = item.description
  editImg.value = item.img
}

const handleSaveEdit = () => {
  store.editeazaBalustrada(editingId.value, {
    title: editTitle.value,
    description: editDescription.value,
    img: editImg.value
  })
  editingId.value = null
}

const handleCancelEdit = () => {
  editingId.value = null
}

</script>

<template>
  <div class="bg-gradient-to-b from-slate-700 to-slate-400 grow pb-10">
    <div class="flex justify-center mt-8 text-xl sm:text-4xl font-bold">Balustrade</div>

    <div class="flex justify-center mt-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by title..."
        class="border border-gray-300 p-2 rounded w-2/3 sm:w-1/3"
      />
    </div>

    <div class="flex flex-col items-center mt-6 space-y-2">
      <input
        v-model="newTitle"
        type="text"
        placeholder="Titlu"
        class="p-2 rounded w-2/3 sm:w-1/3 border border-gray-300"
      />
      <input
        v-model="newDescription"
        type="text"
        placeholder="Descriere"
        class="p-2 rounded w-2/3 sm:w-1/3 border border-gray-300"
      />
      <input
        v-model="newImg"
        type="text"
        placeholder="Link imagine"
        class="p-2 rounded w-2/3 sm:w-1/3 border border-gray-300"
      />
      <button
        @click="handleAdauga"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Adaugă balustradă
      </button>
    </div>

    <div class="grid grid-cols-2 grid-flow-row sm:grid-cols-3 lg:grid-cols-4 mt-6">
      <AveragePrice />

      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="flex flex-col items-center mt-4 p-4 rounded-xl mx-2 shadow-lg bg-white/10 backdrop-blur"
        >
        <div v-if="editingId === index" class="w-full space-y-2">
          <input
            v-model="editTitle"
            type="text"
            placeholder="Titlu"
            class="p-2 w-full border rounded"
          />
          <input
            v-model="editDescription"
            type="text"
            placeholder="Descriere"
            class="p-2 w-full border rounded"
          />
          <input
            v-model="editImg"
            type="text"
            placeholder="Imagine"
            class="p-2 w-full border rounded"
          />
          <div class="flex justify-between mt-2">
            <button @click="handleSaveEdit" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Salvează
            </button>
            <button @click="handleCancelEdit" class="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">
              Anulează
            </button>
          </div>
        </div>

        <div v-else>
          <ProductCard
            :title="product.title"
            :imageSrc="product.img"
            :route="product.route || '/balustrada'"
          />

          <div class="flex justify-center gap-2 mt-2">
            <button @click="handleStartEdit(index)" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
              Editează
            </button>
            <button @click="handleSterge(index)" class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
              Șterge
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

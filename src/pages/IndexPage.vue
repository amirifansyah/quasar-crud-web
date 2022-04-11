<template lang="">
       <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn color="teal" :disable="loading" label="Tambah Data Buku"/>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Kode Buku',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'namaBuku', align: 'center', label: 'Nama Buku', field: 'namaBuku', sortable: true },
  { name: 'penerbit', align: 'center', label: 'Penerbit', field: 'penerbit', sortable: true },
  { name: 'pengarang', align: 'center', label: 'Pengarang', field: 'pengarang' },
  { name: 'tahunTerbit', align: 'center', label: 'Tahun Terbit', field: 'tahunTerbit' },
]

const originalRows = [
  {
    name: 'K0001',
    namaBuku: 'Para Pencari Tuhan',
    penerbit: 'fakultas sementaun',
    pengarang: 'jono ',
    tahunTerbit: 2020,
  },
  {
    name: 'K0002',
    namaBuku: 'Para Pencari Kebaikan',
    penerbit: 'fakultas sementaun',
    pengarang: 'Sitompul',
    tahunTerbit: 2021,
  }
]
export default {
    name: 'data-buku',
     setup () {
    const loading = ref(false)
    const filter = ref('')
    const rowCount = ref(10)
    const rows = ref([...originalRows])

    return {
      columns,
      rows,

      loading,
      filter,
      rowCount,

      // emulate fetching data from server
      addRow () {
        loading.value = true
        setTimeout(() => {
          const
            index = Math.floor(Math.random() * (rows.value.length + 1)),
            row = originalRows[ Math.floor(Math.random() * originalRows.length) ]

          if (rows.value.length === 0) {
            rowCount.value = 0
          }

          row.id = ++rowCount.value
          const newRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
          rows.value = [ ...rows.value.slice(0, index), newRow, ...rows.value.slice(index) ]
          loading.value = false
        }, 500)
      },

      removeRow () {
        loading.value = true
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length)
          rows.value = [ ...rows.value.slice(0, index), ...rows.value.slice(index + 1) ]
          loading.value = false
        }, 500)
      }
    }
  }
}
</script>
<style lang="">

</style>

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
        <span class="text-blue-grey-14">Data Transaksi</span>
        <!-- <q-btn color="teal" :disable="loading" label="Tambah Data Buku" to="/inputdatabuku"/> -->
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
    label: 'Kode Transaksi',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
  { name: 'judulBuku', align: 'center', label: 'Judul Buku', field: 'judulBuku', sortable: true },
  { name: 'hargaBuku', align: 'center', label: 'Harga Buku', field: 'hargaBuku' },
  { name: 'jumlahBeli', align: 'center', label: 'Jumlah Beli', field: 'jumlahBeli' },
  { name: 'total', align: 'center', label: 'Total', field: 'total' },
]

const originalRows = [
  {
    name: 'Transn-001',
    namaPembeli: 'Jono',
    judulBuku: 'Meningkatkan Kesuburan',
    hargaBuku: '500000',
    jumlahBeli: 2,
    total: 1000000,
  },
  {
    name: 'Transn-002',
    namaPembeli: 'Surti',
    judulBuku: 'Cara Berbakti Kepada Orang Tua',
    hargaBuku: '605000',
    jumlahBeli: 4,
    total: 1200000,
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

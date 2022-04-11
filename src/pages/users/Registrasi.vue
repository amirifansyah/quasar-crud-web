<template>
   <q-layout class="bg-blue-grey-1" view="hHh Lpr LFf">
   <q-page-container>
     <q-page padding class="row items-center justify-center">
       <div class="row full-width">
         <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
           <q-card flat class="bg-white text-black">
             <div class="row">
                 <div class="col-md-12 col-xs-12 q-pt-md justify-center text-center">
                    <h3>Register Dulu jon</h3>
                   <div class="pa-md" style="padding: 0px 30px">
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="username"
                        label="User Name"
                        hint="username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'User Name Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="text"
                        v-model="email"
                        label="Email"
                        hint="email"
                        lazy-rules
                       :rules="[ val => val && val.length > 0 || 'email Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="text"
                        v-model="notelp"
                        label="No Telp"
                        hint="No Telp"
                        lazy-rules
                       :rules="[ val => val && val.length > 0 || 'email Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        hint="password"
                        lazy-rules
                       :rules="[ val => val && val.length > 0 || 'Password Tidak Boleh Kosong']"
                      />


                      <div class="q-mb-lg">
                        <p>Back To <q-btn label="Login" color="primary" flat to="/auth/login" class="q-ml-sm" /> </p>
                        <q-btn label="Submit" type="submit" color="primary"/>
                      </div>
                    </q-form>

                  </div>
                 </div>
             </div>
           </q-card>
         </div>
       </div>
     </q-page>
   </q-page-container>
 </q-layout>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  name: 'Register-user',
   setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      username: '',
      email: '',
      notelp: '',
      password: '',
      accept: false,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style>

</style>

<template>
 <q-layout class="bg-blue-grey-1" view="hHh Lpr LFf">
   <q-page-container>
     <q-page padding class="row items-center justify-center">
       <div class="row full-width">
         <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
           <q-card flat class="bg-white text-black">
             <div class="row">
               <div class="col-md-6 col-xs-12">
                 <div class="row q-pt-md q-pb-md bg-white">
                   <div class="col-md-8 offset-2 col-xs-6">
                      <q-img spinner-color="white" placeholder-src="../../../public/icons/user.png" src="../../../public/icons/Login.png"></q-img>
                   </div>
                 </div>
               </div>
                 <div class="col-md-6 col-xs-12 q-pt-md justify-center text-center">
                   <div class="pa-md" style="padding: 0px 30px">
                     <div class="text-blue-grey-14 text-h4">Login</div>
                    <q-form @submit="onSubmit"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="form.userName"
                        label="User Name"
                        hint="username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'User Name Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="form.password"
                        label="Password"
                        hint="password"
                        lazy-rules
                       :rules="[ val => val && val.length > 0 || 'Password Tidak Boleh Kosong']"
                      />

                      <div>
                        <q-btn label="Login" type="submit" color="primary"/>
                        <q-btn label="Registrasi" color="primary" flat to="/auth/registrasi" class="q-ml-sm" />
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
import { useQuasar, Notify } from 'quasar'
import { ref } from 'vue'
import { api } from "../../boot/axios";

export default {
  name: 'login-user',
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      accept: false
    }
  },
  methods: {
    onSubmit() {
      api.post('/api/user/login', this.form)
        .then(res => {
          if (res.error) {
            localStorage.setItem('datauser', JSON.stringify(res.message.data))
              if (res.message.data.role == 1) {
                this.$router.push('/admin')
              } else {
                this.$router.push('/pembeli')
              }
          } else {
            Notify.create({
              type: 'negative',
              message: res.message
            })
          }
        })
        .catch(err => {
          Notify.create({
            type: 'negative',
            message: err.message
          })
        })
    }
  }
}
</script>

<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr LFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div
                  class="col-md-12 col-xs-12 q-pt-md justify-center text-center"
                >
                  <h3>Register Dulu jon</h3>
                  <div class="pa-md" style="padding: 0px 30px">
                    <q-form @submit="onSubmit" class="q-gutter-md">
                      <q-input
                        filled
                        v-model="form.userName"
                        label="User Name"
                        hint="username"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'User Name Tidak Boleh Kosong',
                        ]"
                      />

                      <q-input
                        filled
                        v-model="form.namaLengkap"
                        label="Nama Lengkap"
                        hint="Nama Lengkap"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Nama Lengkap Tidak Boleh Kosong',
                        ]"
                      />

                      <q-input
                        filled
                        type="text"
                        v-model="form.email"
                        label="Email"
                        hint="email"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'email Tidak Boleh Kosong',
                        ]"
                      />

                      <q-input
                        filled
                        type="text"
                        v-model="form.noTelp"
                        label="No Telp"
                        hint="No Telp"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'email Tidak Boleh Kosong',
                        ]"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="form.password"
                        label="Password"
                        hint="password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) ||
                            'Password Tidak Boleh Kosong',
                        ]"
                      />

                      <div class="q-mb-lg">
                        <p>
                          Back To
                          <q-btn
                            label="Login"
                            color="primary"
                            flat
                            to="/auth/login"
                            class="q-ml-sm"
                          />
                        </p>
                        <q-btn label="Submit" type="submit" color="primary" />
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
import { useQuasar, Notify } from "quasar";
import { ref } from "vue";
import { api } from "../../boot/axios";

export default {
  name: "Register-user",
  data() {
    return {
      form: {
        userName: null,
        namaLengkap: null,
        email: null,
        noTelp: null,
        password: null,
      },
      accept: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.form.userName && this.form.namaLengkap && this.form.email && this.form.noTelp && this.form.password) {
        api.post("api/user/registrasi", this.form).then((res) => {
          if (res.error) {
            Notify.create({
              message: "Register Berhasil",
              color: "positive",
              position: "top",
              icon: "check_circle",
            });
            this.$router.push("/auth/login");
          } else {
            Notify.create({
              message: "Register Gagal",
              color: "negative",
              position: "top",
              icon: "error",
            });
          }
        });
      } else {
        Notify.create({
          message: "Register Gagal",
          color: "negative",
          position: "top",
          icon: "error",
        });
      }
    },
  },
};
  </script>

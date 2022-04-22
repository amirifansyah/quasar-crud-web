// import { boot } from "quasar/wrappers";
// import axios from "axios";

// // const axiosInstance = axios.create({
// //   baseURL: 'http://localhost:3000/',
// // })

// // export default async ({ Vue }) => {
// //   Vue.prototype.$axios = axiosInstance
// // }

// // export {axiosInstance}

// // Be careful when using SSR for cross-request state pollution
// // due to creating a Singleton instance here;
// // If any client changes this (global) instance, it might be a
// // good idea to move this instance creation inside of the
// // "export default () => {}" function below (which runs individually
// // for each client)

// const api = axios.create({ baseURL: "http://localhost:3000/" });

// export default boot(({ app }) => {
//   // for use inside Vue files (Options API) through this.$axios and this.$api

//   app.config.globalProperties.$axios = axios;
//   // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
//   //       so you won't necessarily have to import axios in each vue file

//   app.config.globalProperties.$api = api;
//   // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
//   //       so you can easily perform requests against your app's API
// });

// export { api };

import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const config = {
  baseURL: "http://localhost:3000/",
  timeout: 60 * 1000,
};

const api = axios.create(config);

api.interceptors.response.use(
  function (response) {
    // Do something with response data
    response = typeof response.data !== undefined ? response.data : response;
    return response;
  },

  function (error) {
    if (error.response.status === 404) {
      // return window.location.href = '/error/error-404'
    } else if (error.response.status === 401) {
      //  return window.location.href = '/error/error-401'
    }
    return Promise.reject(error);
  }
);


export default boot(({ app }) => {
  app.config.globalProperties.$axios = api;
  app.config.globalProperties.$api = api;
});

export { api }

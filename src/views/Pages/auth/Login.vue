<template>
  <auth-layout>
    <VCardText >
      <VForm
        ref="refVForm"
        class="form-container"
        @submit.prevent="onSubmit"
      >
        <VRow>
          <!-- email -->
          <VCol cols="12">
            <v-text-field
              v-model="credentials.email"
              label="Email"
              placeholder="email@gmail.com"
              type="email"
              autofocus
              :rules="[rules.requiredValidator, rules.emailValidator]"
              :error-messages="errors.email"
            />
          </VCol>

          <!-- password -->
          <VCol cols="12">
            <a
              class="mb-1"
              href="/recuperacion"
            >
              ¿Olvidaste tu contraseña?
            </a>
            <v-text-field
              v-model="credentials.password"
              label="Contraseña"
              placeholder="············"
              autocomplete="false"
              :type="isPasswordVisible ? 'text' : 'password'"
              :rules="[rules.requiredValidator, rules.passwordValidator]"
              :error-messages="errors.password"
              :append-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="isPasswordVisible = !isPasswordVisible"
            />
            <VBtn
              class="btn"
              block
              type="submit"
            >
              Iniciar sesión
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
    <VCardText class="mx-auto text-center">
      Eres nuevo?
      <a href="/register" class="text-verde">
       Registrate
      </a>
    </VCardText>
  </auth-layout>
</template>

<script>
import authLayout from '@/layouts/Auth.vue'
import { requiredValidator, emailValidator, passwordValidator } from '@/utils/validators';
import { users } from '@/utils/api';
import { mapActions } from 'vuex';

export default {
  name: 'auth-login',
  components: {
    authLayout
  },
  data() {
    return {
      rules: {
        requiredValidator,
        emailValidator,
        passwordValidator
      },
      errors: {
        email: undefined,
        password: undefined
      },
      credentials: {
        email: 'hola@gmail.com',
        password: 'HolaChau@123'
      },
      isPasswordVisible: false,
    }
  },
  methods: {
    ...mapActions("notify", ["doSetNotify"]),
    onSubmit(){
      if(this.$refs.refVForm){
        const validate = this.$refs.refVForm.validate()
        if(validate){
          const userFind = users.find(el => el.email === this.credentials.email && el.password === this.credentials.password)
          if(userFind){
            localStorage.setItem('token', userFind.email)
            window.location = '/'
            this.doSetNotify({
              type: "success",
              message: 'Logeado con éxito',
            });
          }else {
            //TODO: agregar toastify
            this.doSetNotify({
              type: "error",
              message: 'Error usuario no encontrado',
            });
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form-container{
  max-width: 388px;
}
</style>
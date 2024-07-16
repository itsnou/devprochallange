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
              class="text-primary ms-2 mb-1 link"
              :to="{ name: 'recuperacion' }"
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
        email: '',
        password: ''
      },
      isPasswordVisible: false,
      refVForm: undefined
    }
  }
}
</script>

<style scoped lang="scss">
.form-container{
  max-width: 388px;
}
</style>
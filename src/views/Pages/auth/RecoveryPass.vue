<template>
  <auth-layout>
    <v-card-text>
      <h2>
        Recupera tu contraseña
      </h2>
    </v-card-text>
    <VCardText>
      <VForm
        ref="refVForm"
        class="form-container"
        @submit.prevent="onSubmit"
      >
        <VRow cols="12">
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
          </VCol>
          <!-- repeat-password -->
          <VCol cols="12">
            <v-text-field
              v-model="credentials.confirmPassword"
              label="Confirmar contraseña"
              placeholder="············"
              autocomplete="false"
              :type="isPasswordVisible ? 'text' : 'password'"
              :rules="[rules.requiredValidator, rules.passwordValidator, rules.confirmedValidator(credentials.confirmPassword, credentials.password)]"
              :error-messages="errors.password"
              :append-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="isPasswordVisible = !isPasswordVisible"
            />
          </VCol>
          <VCol cols="12">
            <VBtn
              class="btn mt-5"
              block
              type="submit"
            >
              Recuperar contraseña
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
    <VCardText class="mx-auto text-center">
      Ya tienes cuenta?
      <router-link :to="{name: 'auth-login'}" class="text-verde">
        Logeate
      </router-link>
    </VCardText>
  </auth-layout>
</template>

<script>
import authLayout from '@/layouts/Auth.vue'
import { requiredValidator, emailValidator, passwordValidator, confirmedValidator } from '@/utils/validators';
import { mapActions } from 'vuex';

export default {
  name: 'auth-recovery',
  components: {
    authLayout
  },
  data() {
    return {
      rules: {
        requiredValidator,
        emailValidator,
        passwordValidator,
        confirmedValidator
      },
      errors: {
        email: undefined,
        password: undefined
      },
      credentials: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      isPasswordVisible: false,
    }
  },
  methods: {
    ...mapActions("notify", ["doSetNotify"]),
    ...mapActions("auth", ['doUpdatePassword']),
    onSubmit(){
      if(this.$refs.refVForm){
        const validate = this.$refs.refVForm.validate()
        if(validate){
          try{
            this.doUpdatePassword(this.credentials)
            this.$router.push('/login')
          } catch(error) {
            this.doSetNotify({
              type: "error",
              message: 'Error el usuario no existe',
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
<template>
  <auth-layout>
    <v-card-text>
      <h2>
        Registrate para poder acceder al sistema  
      </h2>
    </v-card-text>
    <VCardText>
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
              Registrarse
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
import { requiredValidator, emailValidator, passwordValidator } from '@/utils/validators';
import { mapActions } from 'vuex';

export default {
  name: 'auth-register',
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
        email: 'nuevoUsuario@gmail.com',
        password: 'Contraseña@123'
      },
      isPasswordVisible: false,
    }
  },
  methods: {
    ...mapActions("notify", ["doSetNotify"]),
    ...mapActions("auth", ['doAddNewUser']),
    onSubmit(){
      if(this.$refs.refVForm){
        const validate = this.$refs.refVForm.validate()
        if(validate){
          try{
            this.doAddNewUser(this.credentials)
          } catch(error) {
            this.doSetNotify({
              type: "error",
              message: 'Error el usuario ya existe!',
            });
          }finally{
            this.$router.push('/login')
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
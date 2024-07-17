<script>
export default {
    name: 'auth-layout'
}
</script>

<template>
  <VRow
    no-gutters
    class="login-container"
  >
    <VCol
      lg="4"
      class="side-content d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="618"
        class="w-100 h-100 content auth-card-v2 px-5"
      >
      <div class="h-100 w-100 content">
        <div class="container-title">
          <div class="align-content-center align-self-center d-flex">
            <img src="@/assets/logo.png" />
            <span class="title">PetCare.</span>
          </div>
        </div>
        <slot />
      </div>
        <!-- <Spinner v-show="globalStore.getLoading" /> -->
      </VCard>
    </VCol>
    <VCol
      lg="8"
      cols="0"
      md="0"
      class="d-none d-lg-flex"
    >
    </VCol>
  </VRow>
</template>

<style scoped>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
.content{
  align-content: center;
}


.auth-card-v2{
  background: white;
}

.login-container{
  background-image: url('@/assets/image-login.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100% !important;
  width: 100%;
}
.side-content{
  background-color: white;
  opacity: 90%;
}

.container-title{
  width: fit-content;
  margin: 0 auto;
}
</style>
  
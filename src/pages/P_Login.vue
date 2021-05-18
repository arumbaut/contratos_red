<template>
  <q-page class=" window-height window-width img row justify-center items-center"
          :style="{'background-image': 'url(' + require('assets/bg.jpg') + ')', 'height':64+'px'} ">
    <div class="column ">
      <div class="row flex-center">
        <h4 class="text-weight-light text-white q-my-md">Have an account?</h4>
      </div>
      <q-form class="q-gutter-md q-mt-md">
        <q-input color="grey-3" rounded outlined label-color="white" v-model="email" type="email"
                 label="Email"/>
        <q-input color="grey-3" rounded outlined borderless label-color="white" v-model="password"
                 :type="isPwd ? 'password' : 'text'" label="Password">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              color="white"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn unelevated rounded color="orange-2" text-color="black" size="lg" class="full-width" label="Sing In"/>
      </q-form>

    </div>

  </q-page>
</template>

<script>
export default {
  name: 'P_Login',
  data() {
    return {
      email: '',
      password: '',
      isPwd:false
    }
  }
}
</script>
<style>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

</style>

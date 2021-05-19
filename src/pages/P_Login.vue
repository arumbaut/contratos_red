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
      </q-form>
      <q-btn @click="autenticar" unelevated rounded color="orange-2" text-color="black" size="lg" class="full-width q-mt-md" label="Sing In"/>
      <q-btn @click="salvarUser" unelevated rounded color="orange-2" text-color="black" size="lg" class="full-width q-mt-md" label="Salvar"/>
    </div>

  </q-page>
</template>

<script>
import bcrypt from "bcryptjs"
let listaUser = [];
export default {
  name: 'P_Login',
  data() {
    return {
      email: '',
      password: '',
      isPwd:true
    }
  },
  methods: {
    salvarUser(){
      let user = {
        email:'',
        password:''
      }
      user.email = this.email
      user.password = this.password
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
          user.password = hash
        });
      });
      listaUser.push(user)
      console.log(listaUser)
    },
    autenticar(){
      let userS
      if(listaUser.length!=0){
        /*for (const user of listaUser) {
              if(user.email === this.email){
                userS = user
              }

        }*/
        //Forma mas escapaa
        userS= listaUser.find(({email})=>email===this.email)
        if(userS!=undefined){
          bcrypt.compare(this.password, userS.password, function(err, res) {
            if(res){
              console.log("El usuario esta autenticado")
            }
          });
        }else {
          console.log("El usuarioi no se encuentra")
        }


      }


    }
    },
}
</script>
<style>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

</style>

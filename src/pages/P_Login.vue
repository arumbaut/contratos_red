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
      <q-btn @click="singIn" unelevated rounded color="orange-2" text-color="black" size="lg" class="full-width q-mt-md" label="Sing In"/>
      <q-btn @click="salvarUser" unelevated rounded color="orange-2" text-color="black" size="lg" class="full-width q-mt-md" label="Salvar"/>
    </div>

  </q-page>
</template>

<script>
import bcrypt from "bcryptjs"
import {api} from 'boot/axios'
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


    },
    singIn(){
      /*let user=listUser.find(this.email)
      console.log(user)
      let datos = {
            email: this.email,
            pass : this.password
            }
      fetch('http://localhost:3000/users',{
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(datos),
            })           
            .then(resp =>{
                console.log(resp)
                this.$router.replace('/home')
            } )
              .catch(error => {
               console.log('tenemos errores'+error)
              });*/
              let datos = {
                  email: this.email,
                  pass : this.password
                  }
              api.post('/login',datos)
                .then((response) => {
                    let data = response.data
                    console.log(data)
                  })
                  .catch((e) => {
                    console.log(e.message)
                    let mensaje = (e.message=== "Network Error")?e.message:e.response.data.mensaje
                    this.$q.notify({
                      color: 'negative',
                      position: 'top',
                      //para coger los mensajes del error
                      message: mensaje,
                      icon: 'report_problem'
                    })
                  })
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

<template>
  <q-layout view="hhh lpR fff">

    <q-header reveal elevated class="bg-primary text-white">

      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"/>
          </q-avatar>
          Contratos
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right"  bordered>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item>
            <template v-slot:header>
              <q-item-section avatar >
                <q-icon name="description" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                Contratos
              </q-item-section>
            </template>
            <q-item clickable v-ripple
                   :active="link === 'contratos'"
                   @click="link = 'contratos'"
                   active-class="my-menu-link"
                   to="/contrato_colectivos"
            >
              <q-item-section avatar>
                <q-icon name="group"/>
              </q-item-section>

              <q-item-section>
                Contratos Colectivos
              </q-item-section>

            </q-item>
            <q-item clickable v-ripple
                  :active="link === 'trabajadores'"
                  @click="link = 'trabajadores'"
                  active-class="my-menu-link"
                  to="/contrato_trabajadores"
            >
              <q-item-section avatar>
                <q-icon name="person"/>
              </q-item-section>
              <q-item-section>
                Contratos Trabajadores
              </q-item-section>
            </q-item>
          </q-expansion-item>



          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star"/>
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send"/>
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts"/>
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top " src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <div class="row flex-center">
            <q-avatar size="70px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </div>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"/>
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>


export default {
  name: "MainLayout",
  // components: { EssentialLink },
  data() {
    return {
      right: true,
      link: ''
    };
  }
};
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #0066cc
</style>

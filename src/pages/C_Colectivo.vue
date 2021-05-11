<template>
  <q-page class="q-pa-md">
    <div class="col-12 " style="text-align: center">
      <h4 style="margin: auto;">Contrato colectivo de servicios de Red</h4>
    </div>
    <form action="">
      <div class="row q-col-gutter-sm q-mt-md">
        <div class="col-4">
          <div class="my-content">
            <q-select  dense v-model="select" :options="options" label="Área">
              <q-tooltip content-class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Administrador seleccione un área</q-tooltip>
            </q-select>
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense v-model="ano" label="Año" />
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense v-model="mes" label="Mes" />
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense type="number" v-model.number="conIndividual" label="Orden de contrato individual No:" />
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense type="number" v-model.number="conColectivos" label="Orden de contrato colectivo No:" />
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense type="number" v-model.number="ordInicial" label="Número de orden inicial" />
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense type="number" v-model.number="cUsers" label="Cantidad de usuarios" />
          </div>
        </div>
        <div class="col-4">
          <div class="my-content">
            <q-input dense v-model="text" label="Tipo de curso" />
          </div>
        </div>
      </div>
    </form>

  </q-page>
</template>

<script>
var fecha = new Date();
export default {
  name: "C_Colectivo",
  data(){
    return{
      cUsers:1,
      conColectivos: 1,
      conIndividual: 1,
      ordInicial: 1,
      ano: fecha.getFullYear(),
      mes : fecha.getMonth(),
      options : ['ASSETS','CRAI','CUMAB','CUMAG','CUMCC','CUMCF','CUMCY'],
      select: null


    }
  }
}
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px

</style>

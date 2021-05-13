<template>
  <q-page >
    <div class="row">
      <div class="col">Fecha Inicio:</div>
      <div class="col" v-for="(value,index) in fechaI" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="fechaI[index]" content-class="bg-blue-5 text-red">
          <q-input   type="date" dark color="white" v-model="fechaI[index]" dense autofocus counter>
          </q-input>
        </q-popup-edit>
      </div>
    </div>

    <div class="row">
      <div class="col">Fecha Fin:</div>
      <div class="col" v-for="(value,index) in fechaF" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="fechaF[index]" content-class="bg-blue-5 text-red">
          <q-input   type="date" dark color="white" v-model="fechaF[index]" dense autofocus counter>

          </q-input>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Servicio de Correo:</div>
      <div class="col" v-for="(value,index) in servCorreo" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="servCorreo[index]" content-class="bg-blue-5 text-red">
          <q-select :options=options  color="white" v-model="servCorreo[index]" dense  counter hint="Servicio"></q-select>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Cuota de Correo:</div>
      <div class="col" v-for="(value,index) in cuotaCorreo" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="cuotaCorreo[index]" content-class="bg-blue-5 text-red">
          <q-select :options=options  color="white" v-model="cuotaCorreo[index]" dense  counter></q-select>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Servicio de Internet:</div>
      <div class="col" v-for="(value,index) in servInternet" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="servInternet[index]" content-class="bg-blue-5 text-red">
          <q-select :options=options  color="white" v-model="servInternet[index]" dense  counter hint="Servicio"></q-select>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Cuota de Internet:</div>
      <div class="col" v-for="(value,index) in cuotaInternet" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="cuotaInternet[index]" content-class="bg-blue-5 text-red">
          <q-select :options=options  color="white" v-model="cuotaInternet[index]" dense  counter hint="Cuota"></q-select>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Número de Teléfono:</div>
      <div class="col" v-for="(value,index) in nunTelefono" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="nunTelefono[index]" content-class="bg-blue-5 text-red">
          <q-input type="tel" dark color="white" v-model="nunTelefono[index]" dense autofocus counter hint="Telephone number">
          </q-input>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Otros Servisio:</div>
      <div class="col" v-for="(value,index) in otrosServicios" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="otrosServicios[index]" content-class="bg-blue-5 text-red">
          <q-input dark color="white" v-model="otrosServicios[index]" dense autofocus counter hint="Servicio">

          </q-input>
        </q-popup-edit>
      </div>
    </div>
    <div class="row">
      <div class="col">Firma Jefe de Área:</div>
      <div class="col" v-for="(value,index) in firmajArea" :key="index">
        {{ value }}
        <q-popup-edit auto-save v-model="firmajArea[index]" content-class="bg-blue-5 text-red">
          <q-input dark color="white" v-model="firmajArea[index]" dense autofocus counter hint="Firma"></q-input>
        </q-popup-edit>
      </div>
    </div>
    {{fechaI}}
    {{fechaF}}
    {{servCorreo}}
    {{cuotaCorreo}}
    {{servInternet}}
    {{cuotaInternet}}
    {{nunTelefono}}
    {{otrosServicios}}
    {{firmajArea}}

  </q-page>
</template>

<script>
export default {
  data(){
    return{
      fechaI: new Array(8),
      fechaF: new Array(8),
      servCorreo: new Array(8),
      cuotaCorreo: new Array(8),
      servInternet: new Array(8),
      cuotaInternet: new Array(8),
      nunTelefono: new Array(8),
      otrosServicios: new Array(8),
      firmajArea: new Array(8),
      model: null,
      options: [
        'L-Local', 'R-Cuba', 'F-Libre'
      ]

    }
  }

}
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  border: 1px solid rgba(86,61,124,.2)


</style>

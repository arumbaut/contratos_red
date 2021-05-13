<template>
  <q-page class="q-pa-md">
    <div class="col-12 " style="text-align: center">
      <h4 style="margin: auto;">Contrato colectivo de servicios de Red</h4>
    </div>
    <form action="">
      <div class="row q-col-gutter-sm q-mt-md">
        <div class="col-12 col-sm-4">
          <div class="my-content">
            <q-select color="green-7" dense v-model="select" :options="options" label="Área">
              <q-tooltip content-class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">Administrador
                seleccione un área
              </q-tooltip>
            </q-select>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="my-content">
            <q-input color="green-7" dense v-model="ano" label="Año"/>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="my-content">
            <q-input color="green-7" dense v-model="mes" label="Mes"/>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="col">
            <div class="my-content">
              <q-input color="green-7" dense type="number" v-model.number="conIndividual" label="Orden de contrato individual No:"/>
            </div>
          </div>
          <div class="col">
            <div class="my-content">
              <q-input color="green-7" dense type="number" v-model.number="conColectivos" label="Orden de contrato colectivo No:"/>
            </div>
          </div>
          <div class="col">
            <div class="my-content">
              <q-input color="green-7" dense type="number" v-model.number="ordInicial" label="Número de orden inicial"/>
            </div>
          </div>

        </div>

       <div class="col-12 col-sm-8">
         <div class="col">
           <div class="my-content">
             <q-input color="green-7" dense type="number" v-model.number="cUsers" label="Contrato Colectivo No"/>
           </div>
         </div>

         <div class="col">
           <div class="my-content">
             <q-input color="green-7" dense type="number" v-model.number="cUsers" label="Cantidad de usuarios"/>
           </div>
         </div>
         <div class="col">
           <div class="my-content">
             <q-input  color="green-7" dense v-model="text" label="Tipo de curso"/>
           </div>
         </div>
       </div>
        <div class="col text-h4 text-weight-light text-center q-pt-lg text-green-7 " style="margin: auto">
          Servicios Autorizados:
          <div class="text-body2 text-justify text-black">
            La fecha final de cada actualización debe ser el 22 de septiembre del inicio del curso siguiente <br/>
            Correo -- [Seleccionar si correo local (L), solo Cuba (R) o Libre (F)] <br/>
            Internet -- [Seleccionar 1 si internet solo Cuba, 3 Est. Y Trab., 3 Profesor, 4 Autorizados x CD]
          </div>
        </div>
        <div class="col-12">
          <!--<q-markup-table
            separator="cell"
            flat bordered
          >
            <tbody>
              <tr v-for="(name,index) in tableValue" :key="index">
                <td class="text-left">{{ name.name }}</td>
                <td class="text-right">{{ index }}</td>
                <td class="text-right">{{ index }}</td>
                <td class="text-right">{{ index }}</td>
                <td class="text-right">{{ index }}</td>
                <td class="text-right">{{ index }}</td>
                <td class="text-right">{{ index }}</td>
                <td class="text-right">{{ index }}</td>
              </tr>
            </tbody>
          </q-markup-table>-->
          <P_Table />
        </div>
      </div>
    </form>

  </q-page>
</template>


<script>
import P_Table from "components/P_Table";
var fecha = new Date();
export default {
  name: "C_Colectivo",
  components:{P_Table},
  data() {
    return {
      cUsers: 1,
      conColectivos: 1,
      conIndividual: 1,
      ordInicial: 1,
      ano: fecha.getFullYear(),
      mes: fecha.getMonth(),
      options: ['ASSETS', 'CRAI', 'CUMAB', 'CUMAG', 'CUMCC', 'CUMCF', 'CUMCY'],
      select: null,
      tableValue: [ {name: 'Fecha Inicio:'},{name: 'Fecha Fin:'},{name: 'Servicio Correo:'},{name: 'Cuota Correo:'},{name: 'Servicio Internet:'},
        {name: 'Cuota Internet:'},{name: 'Nro teléfono:'},{name: 'Otros Servicios:'},{name: 'Firma Area'}
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px


</style>

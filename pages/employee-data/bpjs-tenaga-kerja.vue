<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-plus-circle" aria-hidden="true"></i> Labor Insurance
    </h3>
    <div class="box has-text-white has-background-danger">
      Employee's address
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Personal Number</label>
            <div class="control">
              <input name="personal_number" class="input " placeholder="e.g. S00215" type="text" v-model="personalNumber"
                v-bind:class="{ 'is-danger': errors.has('personal_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('personal_number')" class="help is-danger"> {{ errors.first('personal_number')
              }}</p>
          </div>
        </div>
        <div class="column is-8">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Budi Kurniawan">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Current Position</label>
            <div class="control">
              <input class="input" type="text" placeholder="Manager">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Current Unit</label>
            <div class="control">
              <input class="input" type="text" placeholder="DPCB">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box has-text-white has-background-danger">
      Form Labor Insurance
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Start Date</label>
            <div class="control">
              <input id="begin_date" data-display-mode="dialog" class="input" name="begin_date" type="date" placeholder="e.g 10-11-2018"
                v-model="startDate" data-vv-as="start date" v-bind:class="{ 'is-danger': errors.has('begin_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('begin_date')" class="help is-danger">{{ errors.first('begin_date') }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">End Date</label>
            <div class="control">
              <input id="end_date" data-display-mode="dialog" class="input" name="end_date" type="date" placeholder="e.g 10-11-2018"
                v-model="endDate" data-vv-as="End date" v-bind:class="{ 'is-danger': errors.has('end_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('end_date')" class="help is-danger">{{ errors.first('end_date') }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Labor Insurance Number</label>
            <div class="control">
              <input name="bpjs_number" class="input " placeholder="e.g. S00215" type="text" v-model="bpjsNumber"
                v-bind:class="{ 'is-danger': errors.has('bpjs_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('bpjs_number')" class="help is-danger"> {{ errors.first('bpjs_number')
              }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Insurance Date</label>
            <div class="control">
              <input id="bpjs_date" data-display-mode="dialog" class="input" name="bpjs_date" type="date" placeholder="e.g 10-11-2018"
                v-model="bpjsDate" data-vv-as="bpjs date" v-bind:class="{ 'is-danger': errors.has('bpjs_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('bpjs_date')" class="help is-danger">{{ errors.first('bpjs_date') }}</p>
          </div>
        </div>
        <div class="column is-4">
          <br>
          <label for="checkbox" class="checkbox">
              <input type="checkbox" id="recognition" v-model="flagMarried">
              Married Insurance Tax Purpose
          </label>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveBPJSTenagaKerja()">Save</a>
    <a class="button is-danger is-rounded">Reset</a>
    <a class="button is-link is-rounded">Back</a>
  </section>
</template>

<script>
  import Breadcrumb from '~/components/Breadcrumb';
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);
  import swal from 'sweetalert';

  export default {
    components: {
      Breadcrumb,
    },
    data() {
      return {
        nikAuth: this.$auth.user.nik,
        key: null,
        startDate: '',
        endDate: '',
        businessCode: '1000',
        personalNumber: '',
        bpjsNumber: '',
        bpjsDate: '',
        flagMarried: '',
        bpjsTenagaKerjas: [],

        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'BPJS Tenaga Kerja'
          },
        ]
      }
    },
    created() {

    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        //this.personalNumber = '';
        this.bpjsNumber = '';
        this.bpjsDate = '';
        this.flagMarried = '';
        this.$nextTick(() => this.$validator.reset())
      },
      saveBPJSTenagaKerja() {
        if (this.flagMarried == true) {
          this.flagMarried = 'y';
        } else {
          this.flagMarried = 'n';
        }

        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.bpjsTenagaKerjas[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              bpjsNumber: this.bpjsNumber,
              bpjsDate: this.bpjsDate,
              flagMarried: this.flagMarried,
              nikAuth: this.nikAuth
            }
          } else {
            await this.bpjsTenagaKerjas.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              bpjsNumber: this.bpjsNumber,
              bpjsDate: this.bpjsDate,
              flagMarried: this.flagMarried,
              nikAuth: this.nikAuth
            })
          }
          this.storeBPJSTenagaKerja();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved BPJS Tenaga Kerja.',
            'success'
          )
        });
      },
      async storeBPJSTenagaKerja() {
        let bpjsTenagaKerjas = await this.bpjsTenagaKerjas.map(bpjsTenagaKerja => {
          return {
            begin_date: bpjsTenagaKerja.startDate,
            end_date: bpjsTenagaKerja.endDate,
            business_code: bpjsTenagaKerja.businessCode,
            personal_number: bpjsTenagaKerja.personalNumber,
            bpjs_number: bpjsTenagaKerja.bpjsNumber,
            bpjs_date: bpjsTenagaKerja.bpjsDate,
            flag_married: bpjsTenagaKerja.flagMarried,
            change_user: bpjsTenagaKerja.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/bpjsketenagakerjaan/' + this.personalNumber, bpjsTenagaKerjas)
          .then(response => {
            this.bpjsTenagaKerjas = [];
            response.data.data.forEach((bpjsTenagaKerja, key) => {
              this.bpjsTenagaKerjas.push({
                key: key,
                startDate: bpjsTenagaKerja.begin_date,
                endDate: bpjsTenagaKerja.end_date,
                businessaCode: bpjsTenagaKerja.business_code,
                personalNumber: bpjsTenagaKerja.personal_number,
                bpjsNumber: bpjsTenagaKerja.bpjs_number,
                bpjsDate: bpjsTenagaKerja.bpjs_date,
                flagMarried: bpjsTenagaKerja.flag_married,
                nikAuth: bpjsTenagaKerja.change_user
              });
            });
          })
          .catch(e => {
            console.log(e);
          })
      },
    }
  }
</script>

<style>
  .has-background-danger {
    background-color: #6D6D6D !important;
  }

  .button.is-danger {
    background-color: #CE1000;
    border-color: transparent;
    color: #fff;
  }
</style>

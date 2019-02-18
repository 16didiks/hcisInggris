<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-address-card-o" aria-hidden="true"></i> Insurance
    </h3>
    <div class="box has-text-white has-background-danger">
      Employee Data
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
      Form Insurance
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Start Date</label>
            <div class="control">
              <input class="input" id="begin_date" type="date" placeholder="10-10-2017" name="begin_date" v-model="startDate"
                data-vv-as="start date" v-bind:class="{ 'is-danger': errors.has('begin_date')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('begin_date')" class="help is-danger">{{ errors.first('begin_date') }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">End Date</label>
            <div class="control">
              <input id="end_date" class="input" name="end_date" type="date" placeholder="10-10-2017" v-model="endDate"
                data-vv-as="End date" v-bind:class="{ 'is-danger': errors.has('end_date')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('end_date')" class="help is-danger">{{ errors.first('end_date') }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Insurance Type</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select name="insurance_type" v-model="insuranceType" v-validate="'required'">
                  <option disabled="disabled" selected>Choose</option>
                  <option v-for="(insuranceType, i) in insuranceTypes" :key="i" :value="insuranceType.object_id">
                    {{insuranceType.name}}
                  </option>

                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="column is-4">
          <div class="field">
            <label class="label">Insurance Serial Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="021255" name="insurance_serial_number" v-model="insuranceSerialNumber" v-bind:class="{ 'is-danger': errors.has('polis_number')}" v-validate="'required'">
            </div>
             <p v-show="errors.has('insurance_serial_number')" class="help is-danger"> {{ errors.first('insurance_serial_number')
                  }}</p>
          </div>
        </div> -->
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Polis Number</label>
            <div class="control">
              <input name="polis_number" class="input" type="text" placeholder="0001258" v-model="insuranceNumber"
                v-bind:class="{ 'is-danger': errors.has('polis_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('polis_number')" class="help is-danger"> {{ errors.first('polis_number')
              }}</p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Insurance Company</label>
            <div class="control">
              <input name="insurance_company" class="input" type="text" placeholder="BPJS" v-model="insuranceCompany"
                v-bind:class="{ 'is-danger': errors.has('insurance_company')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('insurance_company')" class="help is-danger"> {{ errors.first('insurance_company')
              }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Company payment portion (Rp)</label>
            <div class="control">
              <input name="company_payment_portion" class="input" type="text" placeholder="100.000.000" v-model="amountEmployer"
                v-bind:class="{ 'is-danger': errors.has('company_payment_portion')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('company_payment_portion')" class="help is-danger"> {{
              errors.first('company_payment_portion')
              }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Percentage (%) </label>
            <div class="control">
              <input name="percentage_cpp" class="input" type="text" placeholder="BPJS" v-model="percentEmployer"
                v-bind:class="{ 'is-danger': errors.has('percentage_cpp')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('percentage_cpp')" class="help is-danger"> {{ errors.first('percentage_cpp')
              }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Employee payment portion (Rp)</label>
            <div class="control">
              <input class="input" type="text" placeholder="100.000.000" name="employee_payment_portion" v-model="amountEmployee"
                v-bind:class="{ 'is-danger': errors.has('company_payment_portion')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('employee_payment_portion')" class="help is-danger">
              {{errors.first('employee_payment_portion')
              }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Percentage (%) </label>
            <div class="control">
              <input class="input" type="text" placeholder="BPJS" name="percentage_epp" v-model="percentEmployee"
                v-bind:class="{ 'is-danger': errors.has('company_payment_portion')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('percentage_epp')" class="help is-danger"> {{errors.first('percentage_epp')
              }}</p>
          </div>
        </div>
      </div>

    </div>
    <a class="button is-success is-rounded" @click="saveInsurance()">Save</a>
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
        i: null,
        startDate: '',
        endDate: '',
        insuranceType: '',
        businessCode: '1000',
        insuranceTypes: [],
        // insuranceSerialNumber:'',
        insuranceNumber: '',
        insuranceCompany: '',
        percentEmployer: '',
        amountEmployer: '',
        personalNumber: '',
        percentEmployee: '',
        amountEmployee: '',
        insurances: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Insurance'
          },
        ]
      }
    },
    created() {
      this.getInsuranceTypes();
    },
    methods: {
      resetForm() {
        this.i = null;
        this.startDate = '';
        this.endDate = '';
        this.insuranceType = '';
        // this.insuranceSerialNumber = '';
        this.polisNumber = '';
        this.personalNumber = '';
        this.insuranceCompany = '',
          this.companyPaymentPortion = '',
          this.percentageCpp = '',
          this.employeePaymentPortion = '',
          this.insuranceType = '',
          this.percentageEpp = '',
          this.$nextTick(() => this.$validator.reset())
      },
      getInsuranceTypes() {
        this.$axios.get('/objects/insurancetype')
          .then(response => {
            this.insuranceTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveInsurance() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.i != null) {
            this.insurances[this.key] = {
              i: this.i,
              startDate: this.startDate,
              endDate: this.endDate,
              insuranceType: this.insuranceType,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              insuranceType: this.insuranceType,
              insuranceNumber: this.insuranceNumber,
              insuranceCompany: this.insuranceCompany,
              percentEmployer: this.percentEmployer,
              amountEmployer: this.amountEmployer,
              percentEmployee: this.percentEmployee,
              amountEmployee: this.amountEmployee,
              nikAuth: this.nikAuth
            }
          } else {
            await this.insurances.push({
              i: this.i,
              startDate: this.startDate,
              endDate: this.endDate,
              insuranceType: this.insuranceType,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              insuranceType: this.insuranceType,
              insuranceNumber: this.insuranceNumber,
              insuranceCompany: this.insuranceCompany,
              percentEmployer: this.percentEmployer,
              amountEmployer: this.amountEmployer,
              percentEmployee: this.percentEmployee,
              amountEmployee: this.amountEmployee,
              nikAuth: this.nikAuth
            })
          }
          this.storeInsurance();
          console.log(this.insurances)
          // this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Insurance.',
            'success'
          )
        });
      },
      async storeInsurance() {
        let insurances = await this.insurances.map(insurance => {
          return {
            begin_date: insurance.startDate,
            end_date: insurance.endDate,
            business_code: insurance.businessCode,
            personal_number: insurance.personalNumber,
            insurance_type: insurance.insuranceType,
            insurance_number: insurance.insuranceNumber,
            insurance_company: insurance.insuranceCompany,
            percent_employer: insurance.percentEmployer,
            amount_employer: insurance.amountEmployer,
            percent_employee: insurance.percentEmployee,
            amount_employee: insurance.amountEmployee,
            change_user: insurance.nikAuth,
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/insurance/' + this.personalNumber + '/type/' + this.insuranceType,
            insurances)
          .then(response => {
            this.insurances = [];
            response.data.data.forEach((insurance, key) => {
              this.insurances.push({
                key: key,
                startDate: insurance.begin_date,
                endDate: insurance.end_date,
                businessCode: insurance.business_code,
                personalNumber: insurance.personal_number,
                insuranceType: insurance.insurance_type,
                insuranceNumber: insurance.insurance_number,
                insuranceCompany: insurance.insurance_company,
                percentEmployer: insurance.percent_employer,
                amountEmployer: insurance.amount_employer,
                amountEmployee: insurance.amount_employee,
                percentEmployee: insurance.percent_employee,
                nikAuth: insurance.change_user
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

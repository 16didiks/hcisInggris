<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-usd" aria-hidden="true"></i> Tax
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
      Tax Form
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
        <div class="column">
          <div class="field">
            <label class="label">Text Number</label>
            <div class="control">
              <input name="npwp_number" class="input " placeholder="e.g. 00215" type="text" v-model="npwpNumber"
                v-bind:class="{ 'is-danger': errors.has('npwp_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('npwp_number')" class="help is-danger"> {{ errors.first('npwp_number')
              }}</p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Text Number Date</label>
            <div class="control">
              <input id="npwp_date" data-display-mode="dialog" class="input" name="npwp_date" type="date" placeholder="e.g 10-11-2018"
                v-model="npwpDate" data-vv-as="npwp date" v-bind:class="{ 'is-danger': errors.has('npwp_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('npwp_date')" class="help is-danger">{{ errors.first('npwp_date') }}</p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">PTKP</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="ptkp" name="ptkp">
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option value="0">Lajang</option>
                  <option value="1">K1</option>
                  <option value="2">K2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <label for="checkbox" class="checkbox">
            <input type="checkbox" id="married_tax_purpose" v-model="marriedTaxPurpose">
            Married For Tax Purpose
          </label>
        </div>
        <div class="column is-4">
          <label for="checkbox" class="checkbox">
            <input type="checkbox" id="spouse_benefit" v-model="spouseBenefit">
            Spouse Benefit
          </label>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveTax()">Save</a>
    <a class="button is-danger is-rounded">Reset</a>
    <a class="button is-link is-rounded">Back</a>
  </section>
</template>

<script>
  import Breadcrumb from '~/components/Breadcrumb';
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
        npwpNumber: '',
        npwpDate: '',
        marriedTaxPurpose: '',
        spouseBenefit: '',
        ptkp: '',
        taxs: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Tax'
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
        this.personalNumber = null;
        this.npwpNumber = '';
        this.npwpDate = '';
        this.marriedTaxPurpose = '';
        this.faculty = '';
        this.institution = '';
        this.certificate = '';
        this.spouseBenefit = '';
        this.ptkp = '';
        this.$nextTick(() => this.$validator.reset())
      },
      saveTax() {
        if (this.marriedTaxPurpose == true) {
          this.marriedTaxPurpose = 'y';
        } else {
          this.marriedTaxPurpose = 'n';
        }

        if (this.spouseBenefit == true) {
          this.spouseBenefit = 'y';
        } else {
          this.spouseBenefit = 'n';
        }
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.taxs[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              npwpNumber: this.npwpNumber,
              npwpDate: this.npwpDate,
              marriedTaxPurpose: this.marriedTaxPurpose,
              faculty: this.faculty,
              institution: this.institution,
              certificate: this.certificate,
              spouseBenefit: this.spouseBenefit,
              ptkp: this.ptkp,
              nikAuth: this.nikAuth
            }
          } else {
            await this.taxs.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              npwpNumber: this.npwpNumber,
              npwpDate: this.npwpDate,
              marriedTaxPurpose: this.marriedTaxPurpose,
              faculty: this.faculty,
              institution: this.institution,
              certificate: this.certificate,
              spouseBenefit: this.spouseBenefit,
              ptkp: this.ptkp,
              nikAuth: this.nikAuth
            })
          }
          this.storeTax();
          //this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Tax.',
            'success'
          )
        });
      },
      async storeTax() {
        let taxs = await this.taxs.map(tax => {
          return {
            begin_date: tax.startDate,
            end_date: tax.endDate,
            business_code: tax.businessCode,
            personal_number: tax.personalNumber,
            npwp_number: tax.npwpNumber,
            npwp_date: tax.npwpDate,
            married_tax_purpose: tax.marriedTaxPurpose,
            faculty: tax.faculty,
            institution: tax.institution,
            certificate: tax.certificate,
            spouse_benefit: tax.spouseBenefit,
            ptkp: tax.ptkp,
            change_user: tax.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/tax/' + this.personalNumber, taxs)
          .then(response => {
            this.taxs = [];
            response.data.data.forEach((tax, key) => {
              this.taxs.push({
                key: key,
                startDate: tax.begin_date,
                endDate: tax.end_date,
                businessaCode: tax.business_code,
                personalNumber: tax.personal_number,
                npwpNumber: tax.npwp_number,
                npwpDate: tax.npwp_date,
                marriedTaxPurpose: tax.married_taxPurpose,
                faculty: tax.faculty,
                institution: tax.institution,
                certificate: tax.certificate,
                spouseBenefit: tax.spouse_benefit,
                ptkp: tax.ptkp,
                nikAuth: tax.change_user
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

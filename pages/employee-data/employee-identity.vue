<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-id-card-o" aria-hidden="true"></i> Employee Identity
    </h3>
    <div class="box has-text-white has-background-danger">
      Personal
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-3">
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
        <div class="column">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="full name">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Current Position</label>
            <div class="control">
              <input class="input" type="text" placeholder="Manager">
            </div>
          </div>
        </div>
        <div class="column">
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
      Form Identity
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
            <label class="label">Identity Type</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('identity_type') }">
                <select name="identity_type" class="select" v-model="identificationType" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(identityType, key) in identityTypes" :key="key" :value="identityType.object_id">{{
                    identityType.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('identity_type')" class="help is-danger">{{errors.first('identity_type')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Identity Number</label>
            <div class="control">
              <input name="identity_number" class="input " placeholder="e.g. S00215" type="number" v-model="identificationNumber"
                v-bind:class="{ 'is-danger': errors.has('identity_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('identity_number')" class="help is-danger"> {{ errors.first('identity_number')
              }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <div class="field">
            <label class="label">Date Issue</label>
            <div class="control">
              <input id="date_issue" data-display-mode="dialog" class="input" name="date_issue" type="date" placeholder="e.g 10-11-2018"
                v-model="dateIssue" data-vv-as="Date Issue" v-bind:class="{ 'is-danger': errors.has('date_issue')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('date_issue')" class="help is-danger">{{ errors.first('date_issue') }}</p>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="label">Expired Date</label>
            <div class="control">
              <input id="ex" data-display-mode="dialog" class="input" name="expired_date" type="date" placeholder="e.g 10-11-2018"
                v-model="expireDate" data-vv-as="Expired Date" v-bind:class="{ 'is-danger': errors.has('expired_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('expired_date')" class="help is-danger">{{ errors.first('expired_date') }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <div class="field">
            <label class="label">Place Issue</label>
            <div class="control">
              <input name="place_issue" class="input" placeholder="e.g. S00215" type="text" v-model="placeIssue"
                v-bind:class="{ 'is-danger': errors.has('place_issue')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('place_issue')" class="help is-danger"> {{ errors.first('place_issue')
              }}</p>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveIdentity()">Save</a>
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
        identificationType: '',
        identificationNumber: '',
        dateIssue: '',
        expireDate: '',
        identityType: '',
        placeIssue: '',
        identityTypes: [],
        identities: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Employee Identity'
          },
        ]
      }
    },
    created() {
      this.getIdentificationTypes();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.identificationType ='';
        this.dateIssue ='';
        this.expireDate ='';
        this.placeIssue ='';
        this.$nextTick(() => this.$validator.reset())
      },
      getIdentificationTypes() {
        this.$axios.get('/objects/identificationtype')
          .then(response => {
            this.identityTypes = response.data.data;
          })
          .catch(e => {
            console.log(this.identityTypes)
            console.log(e)
          });
      },
      saveIdentity() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.identities[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              identificationType: this.identificationType,
              identificationNumber: this.identificationNumber,
              dateIssue: this.dateIssue,
              expireDate: this.expireDate,
              placeIssue: this.placeIssue,
              nikAuth: this.nikAuth
            }
          } else {
            await this.identities.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              identificationType: this.identificationType,
              identificationNumber: this.identificationNumber,
              dateIssue: this.dateIssue,
              expireDate: this.expireDate,
              placeIssue: this.placeIssue,
              nikAuth: this.nikAuth
            })
          }
          this.storeIdentity();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Employee Identity.',
            'success'
          )
        });
      },
      async storeIdentity() {
        let identities = await this.identities.map(identity => {
          return {
            begin_date: identity.startDate,
            end_date: identity.endDate,
            business_code: identity.businessCode,
            personal_number: identity.personalNumber,
            identification_type: identity.identificationType,
            identification_number: identity.identificationNumber,
            date_issue: identity.dateIssue,
            expire_date: identity.expireDate,
            place_issue: identity.placeIssue,
            change_user: identity.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/identification/' + this.personalNumber, identities)
          .then(response => {
            this.identities = [];
            response.data.data.forEach((identity, key) => {
              this.identities.push({
                key: key,
                startDate: identity.begin_date,
                endDate: identity.end_date,
                businessaCode: identity.business_code,
                personalNumber: identity.personal_number,
                identificationType: identity.identification_type,
                identificationNumber: identity.identification_number,
                dateIssue: identity.date_issue,
                expireDate: identity.expire_date,
                placeIssue: identity.place_issue,
                nikAuth: identity.change_user
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

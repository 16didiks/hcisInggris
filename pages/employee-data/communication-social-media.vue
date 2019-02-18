<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-phone" aria-hidden="true"></i> Communication / Social Media
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
              <input class="input" type="text" name="full_name" v-model="fullName" placeholder="Budi Kurniawan">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Current Position</label>
            <div class="control">
              <input class="input" type="text" name="current_position" v-model="currentPosition" placeholder="Manager">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Current Unit</label>
            <div class="control">
              <input class="input" type="text" name="current_unit" v-model="currentUnit" placeholder="DPCB">
            </div>
          </div>
        </div>
      </div>
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
            <label class="label">Communication Type</label>
            <div class="control">
              <div class="select " v-bind:class="{ 'is-danger': errors.has('communication_type') }">
                <select name="communication_type" class="select" v-model="communicationType" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(communicationType, key) in communicationTypes" :key="key" :value="communicationType.object_id">{{
                    communicationType.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('communication_type')" class="help is-danger">{{ errors.first('communication_type')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Serial Number</label>
            <div class="control">
              <input name="serial_number" class="input " placeholder="e.g.1" type="number" v-model="serialNumber"
                v-bind:class="{ 'is-danger': errors.has('serial_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('serial_number')" class="help is-danger"> {{ errors.first('serial_number') }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Communication Number</label>
            <div class="control">
              <input name="communication_number" class="input " placeholder="e.g.0857********" type="text" v-model="communicationNumber"
                v-bind:class="{ 'is-danger': errors.has('communication_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('communication_number')" class="help is-danger"> {{
              errors.first('communication_number') }}</p>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveCommunication()">Save</a>
    <a class="button is-danger is-rounded">Reset</a>
    <a class="button is-link is-rounded">Back</a>
  </section>
</template>

<script>
  import Breadcrumb from '~/components/Breadcrumb';
  import VeeValidate from 'vee-validate';
  import Vue from 'vue';
  import swal from 'sweetalert';

  Vue.use(VeeValidate);
  export default {
    components: {
      Breadcrumb,
    },
    created() {
      this.getCommunicationTypes();
      console.log(this.communicationTypes);
    },
    data() {
      return {
        nikAuth: this.$auth.user.nik,
        key: null,
        startDate: '',
        endDate: '',
        businessCode: '1000',
        personalNumber: '',
        communicationType: '',
        serialNumber: '',
        communicationNumber: '',
        communicationTypes: [],
        communications: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Communication / Social Media '
          },
        ]
      }
    },
    created() {
      this.getCommunicationTypes();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.communicationType = '';
        this.serialNumber = '';
        this.communicationNumber = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getCommunicationTypes() {
        this.$axios.get('/objects/communicationtype')
          .then(response => {
            this.communicationTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveCommunication() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.communications[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              communicationType: this.communicationType,
              serialNumber: this.serialNumber,
              communicationNumber: this.communicationNumber,
              nikAuth: this.nikAuth
            }
          } else {
            await this.communications.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              communicationType: this.communicationType,
              serialNumber: this.serialNumber,
              communicationNumber: this.communicationNumber,
              nikAuth: this.nikAuth
            })
          }
          this.storeCommunication();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Employee Communication / Social Media.',
            'success'
          )
        });
      },
      async storeCommunication() {
        let communications = await this.communications.map(communication => {
          return {
            begin_date: communication.startDate,
            end_date: communication.endDate,
            business_code: communication.businessCode,
            personal_number: communication.personalNumber,
            communication_type: communication.communicationType,
            serial_number: communication.serialNumber,
            communication_number: communication.communicationNumber,
            change_user: communication.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/communication/' + this.personalNumber, communications)
          .then(response => {
            this.communications = [];
            response.data.data.forEach((communication, key) => {
              this.communications.push({
                key: key,
                startDate: communication.begin_date,
                endDate: communication.end_date,
                businessaCode: communication.business_code,
                personalNumber: communication.personal_number,
                communicationType: communication.communication_type,
                serialNumber: communication.serial_number,
                communicationNumber: communication.communication_number,
                nikAuth: communication.change_user
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

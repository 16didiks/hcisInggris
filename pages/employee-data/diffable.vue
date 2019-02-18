<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-plus-circle" aria-hidden="true"></i> Disability
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
      Disability Data
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
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" placeholder="Lorem amet ipsun side nu" rows="4" v-model="description"></textarea>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="columns">
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Disability Type</label>
                <div class="control">
                  <div class="select" v-bind:class="{ 'is-danger': errors.has('disability_type') }">
                    <select name="disability_type" class="select" v-model="diffableType" v-validate="'required'">
                      <option disabled selected>Choose</option>
                      <option v-for="(diffableType, key) in diffableTypes" :key="key" :value="diffableType.object_id">{{
                        diffableType.name
                        }}</option>
                    </select>
                  </div>
                  <p v-show="errors.has('disability_type')" class="help is-danger">{{errors.first('disability_type')
                    }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveDiffable()">Save</a>
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
        diffableType: '',
        description: '',
        diffableTypes: [],
        diffables: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Difabel'
          },
        ]
      }
    },
    created() {
      this.getDiffableTypes();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.diffableType = '';
        this.description = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getDiffableTypes() {
        this.$axios.get('/objects/disabilitytype')
          .then(response => {
            this.diffableTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveDiffable() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.diffables[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              diffableType: this.diffableType,
              description: this.description,
              nikAuth: this.nikAuth
            }
          } else {
            await this.diffables.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              diffableType: this.diffableType,
              description: this.description,
              nikAuth: this.nikAuth
            })
          }
          this.storeDiffable();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved diffable.',
            'success'
          )
        });
      },
      async storeDiffable() {
        let diffables = await this.diffables.map(diffable => {
          return {
            begin_date: diffable.startDate,
            end_date: diffable.endDate,
            business_code: diffable.businessCode,
            personal_number: diffable.personalNumber,
            disability_type: diffable.diffableType,
            description: diffable.description,
            change_user: diffable.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/disability/' + this.personalNumber, diffables)
          .then(response => {
            this.diffables = [];
            response.data.data.forEach((diffable, key) => {
              this.diffables.push({
                key: key,
                startDate: diffable.begin_date,
                endDate: diffable.end_date,
                businessaCode: diffable.business_code,
                personalNumber: diffable.personal_number,
                diffableType: diffable.disability_type,
                description: diffable.description,
                nikAuth: diffable.change_user
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

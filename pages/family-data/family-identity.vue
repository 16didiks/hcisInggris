<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-users" aria-hidden="true"></i> Family Identity
    </h3>
    <div class="box has-text-white has-background-danger">
      Family Identity
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Personal Number</label>
            <div class="control">
              <input name="personal_number" v-model="personalNumber" class="input" type="text" placeholder="Nik"
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
              <input class="input" type="text" placeholder="Name">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Current Position</label>
            <div class="control">
              <input class="input" type="text" placeholder="Current Position">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Current Unit</label>
            <div class="control">
              <input class="input" type="text" placeholder="Current Unit">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box has-text-white has-background-danger">
      Form Family Identity </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Start Date</label>
            <div class="control">
              <input id="begin_date" data-display-mode="dialog" class="input" name="begin_date" type="date" placeholder="10-10-2017"
                v-model="startDate" data-vv-as="start date" v-bind:class="{'is-danger': errors.has ('begin_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('begin_date')" class="help is-danger">{{ errors.first('begin_date') }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">End Date</label>
            <div class="control">
              <input id="end_date" data-display-mode="dialog" name="end_date" class="input" type="date" placeholder="10-10-2017"
                v-model="endDate" data-vv-as="end date" v-bind:class="{'is-danger': errors.has ('end_date')}"
                v-validate="'required'">
            </div>
          </div>
          <p v-show="errors.has('end_date')" class="help is-danger">{{ errors.first('end_date') }}</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Family Type</label>
            <div class="control">
              <div class="select is-fullwidth" v-bind:class="{ 'is-danger': errors.has('disability_type') }">
                <select name="family_type" class="select" v-model="familyType" v-validate="'required'">
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option v-for="(familyType, key) in familyTypes" :key="key" :value="familyType.object_id">
                    {{familyType.name}}
                  </option>
                  <p v-show="errors.has('family_type')" class="help is-danger">{{errors.first('family_type') }}</p>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Family Number</label>
            <div class="control">
              <input name="family_number" v-model="familyNumber" class="input" type="text" placeholder="1"
                v-bind:class="{ 'is-danger': errors.has('family_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('family_number')" class="help is-danger"> {{ errors.first('family_number')
              }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Identity Type</label>
            <div class="control">
              <div class="select is-fullwidth" v-bind:class="{ 'is-danger': errors.has('disability_type') }">
                <select name="identity_type" class="select" v-model="identityType" v-validate="'required'">
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option v-for="(identityType, key) in identityTypes" :key="key" :value="identityType.object_id">
                    {{identityType.name}}
                  </option>
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
              <input name="identity_number" class="input" type="text" v-model="identityNumber" placeholder="Identity Number"
                v-bind:class="{'is-danger': errors.has('identity_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('identity_number')" class="help is-danger"> {{ errors.first('identity_number')
              }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Date Publish</label>
              <div class="control">
                <input id="date_publish" data-display-mode="dialog" name="date_publish" class="input" type="date"
                  placeholder="10-10-2017" v-model="datePublish" data-vv-as="date published" v-bind:class="{'is-danger':errors.has('begin_date')}"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('date_publish')" class="help is-danger">{{ errors.first('date_publish') }}</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Expired Date</label>
              <div class="control">
                <input id="expired" class="input" name="expired_date" v-model="expiredDate" data-vv-as="Expired date"
                  v-bind:class="{ 'is-danger': errors.has('expired_date')}" type="date" placeholder="10-10-2017"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('expired_date')" class="help is-danger">{{ errors.first('expired_date') }}</p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <div class="field">
              <label class="label">Publish Place Identity</label>
              <div class="control">
                <input name="publish_place_identity" class="input" type="text" placeholder="Position" v-model="publishPlaceIdentity"
                  data-vv-as="Identity Published Place" v-bind:class="{ 'is-danger': errors.has('publish_place_identity')}"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('publish_place_identity')" class="help is-danger"> {{
                errors.first('publish_place_identity')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveFamilyIdentity()">Save</a>
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
        familyType: '',
        familyNumber: '',
        familyTypes: [],
        identityType: '',
        identityTypes: [],
        identityNumber: '',
        datePublish: '',
        expiredDate: '',
        publishPlaceIdentity: '',
        familyIdentities: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Family Data'
          },
          {
            name: 'Family Identity'
          },
        ]
      }
    },
    created() {
      this.getIdentityTypes();
      this.getFamilyTypes();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessCode = '';
        this.personalNumber = null;
        this.familyType = '';
        this.identityType = '';
        this.identityNumber = '';
        this.datePublish = '';
        this.expiredDate = '';
        this.publishPlaceIdentity = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getIdentityTypes() {
        this.$axios.get('/objects/identificationtype')
          .then(response => {
            this.identityTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getFamilyTypes() {
        this.$axios.get('/objects/familytype')
          .then(response => {
            this.familyTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveFamilyIdentity() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.familyIdentities[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              familyType: this.familyType,
              familyNumber: this.familyNumber,
              identityType: this.identityType,
              identityNumber: this.identityNumber,
              datePublish: this.datePublish,
              expiredDate: this.expiredDate,
              publishPlaceIdentity: this.publishPlaceIdentity,
              nikAuth: this.nikAuth
            }
          } else {
            await this.familyIdentities.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              familyType: this.familyType,
              familyNumber: this.familyNumber,
              identityType: this.identityType,
              identityNumber: this.identityNumber,
              datePublish: this.datePublish,
              expiredDate: this.expiredDate,
              publishPlaceIdentity: this.publishPlaceIdentity,
              nikAuth: this.nikAuth
            })
          }
          this.storeFamilyIdentity();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Family Identity.',
            'success'
          )
        });
      },
      async storeFamilyIdentity() {
        let familyIdentities = await this.familyIdentities.map(familyIdentity => {
          return {
            begin_date: familyIdentity.startDate,
            end_date: familyIdentity.endDate,
            business_code: familyIdentity.businessCode,
            personal_number: familyIdentity.personalNumber,
            family_type: familyIdentity.familyType,
            family_number: familyIdentity.familyNumber,
            identification_type: familyIdentity.identityType,
            identification_number: familyIdentity.identityNumber,
            date_issue: familyIdentity.datePublish,
            expire_date: familyIdentity.expiredDate,
            place_issue: familyIdentity.publishPlaceIdentity,
            change_user: familyIdentity.nikAuth

          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/familyidentification/' + this.personalNumber, familyIdentities)
          .then(response => {
            this.familyIdentities = [];
            response.data.data.forEach((familyIdentity, key) => {
              this.familyIdentities.push({
                key: key,
                startDate: familyIdentity.begin_date,
                endDate: familyIdentity.end_date,
                businessaCode: familyIdentity.business_code,
                personalNumber: familyIdentity.personal_number,
                familyType: familyIdentity.family_type,
                familyNumber: familyIdentity.family_number,
                identityType: familyIdentity.identification_type,
                identityNumber: familyIdentity.identification_number,
                datePublish: familyIdentity.date_issue,
                expiredDate: familyIdentity.expire_date,
                publishPlaceIdentity: familyIdentity.place_issue,
                nikAuth: familyIdentity.change_user



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

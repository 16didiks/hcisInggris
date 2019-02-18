<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-users" aria-hidden="true"></i> Family
    </h3>
    <div class="box has-text-white has-background-danger">
      Family Data
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
      Form Family Data
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
            <label class="label">Family Type</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('family_type') }">
                <select name="family_type" class="select" v-model="familyType" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(familyType, key) in familyTypes" :key="key" :value="familyType.object_id">{{
                    familyType.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('family_type')" class="help is-danger">{{errors.first('family_type')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Family Number</label>
            <div class="control">
              <input name="family_number" class="input " placeholder="e.g. 1" type="text" v-model="familyNumber"
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
            <label class="label">Full Name</label>
            <div class="control">
              <input name="full_name" class="input " placeholder="e.g. Dino Perdana" type="text" v-model="fullName"
                v-bind:class="{ 'is-danger': errors.has('full_name')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('full_name')" class="help is-danger"> {{ errors.first('full_name')
              }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Nick Name</label>
            <div class="control">
              <input name="nickname" class="input " placeholder="e.g. Dino Perdana" type="text" v-model="nickName"
                v-bind:class="{ 'is-danger': errors.has('nickname')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('nickname')" class="help is-danger"> {{ errors.first('nickname')
              }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Birth Place</label>
              <div class="control">
                <input name="place_birth" class="input " placeholder="e.g. Dino Perdana" type="text" v-model="bornCity"
                  v-bind:class="{ 'is-danger': errors.has('place_birth')}" v-validate="'required'">
              </div>
              <p v-show="errors.has('place_birth')" class="help is-danger"> {{ errors.first('place_birth')
                }}</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Birth Date</label>
              <div class="control">
                <input id="birth_date" data-display-mode="dialog" class="input" name="birth_date" type="date"
                  placeholder="e.g 10-11-2018" v-model="bornDate" data-vv-as="birth date" v-bind:class="{ 'is-danger': errors.has('birth_date')}"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('birth_date')" class="help is-danger">{{ errors.first('birth_date') }}</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Gender</label>
              <div class="control">
                <label class="radio">
                  <input name="gender" type="radio" v-model="gender" value="L" v-validate="'required|included:L,P'">
                  Male
                </label>
                <label class="radio">
                  <input name="gender" type="radio" v-model="gender" value="P">
                  Female
                </label>
              </div>
              <p v-show="errors.has('gender')" class="help is-danger">{{ errors.first('gender') }}</p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Religion</label>
              <div class="control">
                <div class="select " v-bind:class="{ 'is-danger': errors.has('religion') }">
                  <select name="religion" class="select" v-model="religion" v-validate="'required|included:01,02,03,04,05,06'">
                    <option disabled selected>Choose</option>
                    <option v-for="(religion, key) in religions" :key="key" :value="religion.object_id">{{
                      religion.name
                      }}</option>
                  </select>
                </div>
                <p v-show="errors.has('religion')" class="help is-danger">{{ errors.first('religion') }}</p>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Family Status</label>
              <div class="control">
                <div class="select " v-bind:class="{ 'is-danger': errors.has('family_status') }">
                  <select name="family_status" class="select" v-model="familyStatus" v-validate="'required'">
                    <option disabled selected>Choose</option>
                    <option v-for="(familyStatus, key) in familiesStatus" :key="key" :value="familyStatus.object_id">{{
                      familyStatus.name
                      }}</option>
                  </select>
                </div>
                <p v-show="errors.has('family_status')" class="help is-danger">{{ errors.first('family_status') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Family Status Date</label>
              <div class="control">
                <input id="family_status_date" data-display-mode="dialog" class="input" name="family_status_date" type="date"
                  placeholder="e.g 10-11-2018" v-model="familyStatusDate" data-vv-as="family status date" v-bind:class="{ 'is-danger': errors.has('family_status_date')}"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('family_status_date')" class="help is-danger">{{ errors.first('family_status_date')
                }}</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Report Date</label>
              <div class="control">
                <input id="report_date" data-display-mode="dialog" class="input" name="report_date" type="date"
                  placeholder="e.g 10-11-2018" v-model="reportDate" data-vv-as="report date" v-bind:class="{ 'is-danger': errors.has('family_status_date')}"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('report_date')" class="help is-danger">{{ errors.first('report_date') }}</p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Position</label>
              <div class="control">
                <input name="position" class="input " placeholder="e.g. Manager " type="text" v-model="position"
                  v-bind:class="{ 'is-danger': errors.has('position')}" v-validate="'required'">
              </div>
              <p v-show="errors.has('position')" class="help is-danger"> {{ errors.first('position')
                }}</p>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Company Name</label>
              <div class="control">
                <input name="company_name" class="input " placeholder="e.g. Manager " type="text" v-model="companyName"
                  v-bind:class="{ 'is-danger': errors.has('company_name')}" v-validate="'required'">
              </div>
              <p v-show="errors.has('company_name')" class="help is-danger"> {{ errors.first('company_name')
                }}</p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Marital Status</label>
              <div class="control">
                <div class="select " v-bind:class="{ 'is-danger': errors.has('marital_status') }">
                  <select name="marital_status" class="select" v-model="maritalStatus" v-validate="'required'">
                    <option disabled selected>Choose</option>
                    <option v-for="(maritalStatus, key) in maritalsStatus" :key="key" :value="maritalStatus.object_id">{{
                      maritalStatus.name
                      }}</option>
                  </select>
                </div>
                <p v-show="errors.has('marital_status')" class="help is-danger">{{ errors.first('marital_status') }}</p>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Marital Date</label>
              <div class="control">
                <input id="marital_date" data-display-mode="dialog" class="input" name="marital date" type="date" placeholder="e.g 10-11-2018"
                  v-model="maritalDate" data-vv-as="Marital date" v-bind:class="{ 'is-danger': errors.has('marital_date')}"
                  v-validate="'required'">
              </div>
              <p v-show="errors.has('marital_date')" class="help is-danger">{{ errors.first('marital_date') }}</p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <label for="checkbox" class="checkbox">
              <input type="checkbox" id="recognition" v-model="taxFlag">
              Tax Liability
            </label>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <label for="checkbox" class="checkbox">
              <input type="checkbox" id="recognition" v-model="medicalFlag">
              Healty Insurance
            </label>
          </div>
        </div>
      </div>

    </div>
    <a class="button is-success is-rounded" @click="saveFamily()">Save</a>
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
        familyType: '',
        familyNumber: '',
        fullName: '',
        nickName: '',
        bornCity: '',
        bornDate: '',
        gender: '',
        religion: '',
        familyStatus: '',
        familyStatusDate: '',
        reportDate: '',
        position: '',
        companyName: '',
        taxFlag: '',
        medicalFlag: '',
        maritalStatus: '',
        maritalDate: '',
        familyTypes: [],
        religions: [],
        familiesStatus: [],
        maritalsStatus: [],
        families:[],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Family Data'
          },
          {
            name: 'Family'
          },
        ]
      }
    },
    created() {
      this.getfamilyTypes();
      this.getReligions();
      this.getFamilyStatus();
      this.getMaritalStatus();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.familyType = '';
        this.familyNumber = '';
        this.fullName = '';
        this.nickName = '';
        this.bornCity = '';
        this.bornDate = '';
        this.gender = '';
        this.religion = '';
        this.familyStatus = '';
        this.familyStatusDate = '';
        this.reportDate = '';
        this.position = '';
        this.companyName = '';
        this.taxFlag = '';
        this.medicalFlag = '';
        this.maritalStatus = '';
        this.maritalDate = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getfamilyTypes() {
        this.$axios.get('/objects/familytype')
          .then(response => {
            this.familyTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getFamilyStatus() {
        this.$axios.get('/objects/familystatus')
          .then(response => {
            this.familiesStatus = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getReligions() {
        this.$axios.get('/objects/religion')
          .then(response => {
            this.religions = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getMaritalStatus() {
        this.$axios.get('/objects/marital_status')
          .then(response => {
            this.maritalsStatus = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveFamily() {
        if (this.taxFlag == true) {
          this.taxFlag = 'y';
        } else {
          this.taxFlag = 'n';
        }

        if (this.medicalFlag ==true) {
          this.medicalFlag = 'y';
        } else {
          this.medicalFlag = 'n';
        }
        
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.families[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              familyType: this.familyType,
              familyNumber: this.familyNumber,
              fullName: this.fullName,
              nickName: this.nickName,
              bornCity: this.bornCity,
              bornDate: this.bornDate,
              gender: this.gender,
              religion: this.religion,
              familyStatus: this.familyStatus,
              familyStatusDate: this.familyStatusDate,
              reportDate: this.reportDate,
              position: this.position,
              companyName: this.companyName,
              taxFlag: this.taxFlag,
              medicalFlag: this.medicalFlag,
              maritalStatus: this.maritalStatus,
              maritalDate: this.maritalDate,
              nikAuth: this.nikAuth
            }
          } else {
            await this.families.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              familyType: this.familyType,
              familyNumber: this.familyNumber,
              fullName: this.fullName,
              nickName: this.nickName,
              bornCity: this.bornCity,
              bornDate: this.bornDate,
              gender: this.gender,
              religion: this.religion,
              familyStatus: this.familyStatus,
              familyStatusDate: this.familyStatusDate,
              reportDate: this.reportDate,
              position: this.position,
              companyName: this.companyName,
              taxFlag: this.taxFlag,
              medicalFlag: this.medicalFlag,
              maritalStatus: this.maritalStatus,
              maritalDate: this.maritalDate,
              nikAuth: this.nikAuth
            })
          }
          this.storeFamily();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved familly.',
            'success'
          )          
        });
      },
      async storeFamily() {
        let families = await this.families.map(family => {
          return {
            begin_date: family.startDate,
            end_date: family.endDate,
            business_code: family.businessCode,
            personal_number: family.personalNumber,
            family_type: family.familyType,
            family_number: family.familyNumber,
            full_name: family.fullName,
            nickname: family.nickName,
            born_city: family.bornCity,
            born_date: family.bornDate,
            gender: family.gender,
            religion: family.religion,
            family_status: family.familyStatus,
            family_status_date: family.familyStatusDate,
            report_date: family.reportDate,
            position: family.position,
            company_name: family.companyName,
            tax_flag: family.taxFlag,
            medical_flag: family.medicalFlag,
            marital_status: family.maritalStatus,
            marital_date: family.maritalDate,
            change_user: family.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/datafamily/' + this.personalNumber, families)
          .then(response => {
            this.families = [];
            response.data.data.forEach((familly, key) => {
              this.families.push({
                key: key,
                startDate: family.begin_date,
                endDate: family.end_date,
                businessaCode: family.business_code,
                personalNumber: family.personal_number,
                familyType: family.family_type,
                familyNumber: family.family_number,
                fullName: family.full_name,
                nickName: family.nickname,
                bornCity: family.born_city,
                bornDate: family.born_date,
                gender: family.gender,
                religion: family.religion,
                familyStatus: family.family_status,
                familyStatusDate: family.family_status_date,
                reportDate: family.report_date,
                position: family.position,
                companyName: family.company_name,
                taxFlag: family.tax_flag,
                medicalFlag: family.medical_flag,
                maritalStatus: family.marital_status,
                maritalDate: family.marital_date,
                nikAuth: family.change_user
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

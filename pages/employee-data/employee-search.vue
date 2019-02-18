<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <div class="columns" >
      <div class="column">
        <div>
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>No.</th>
                <th>Personal Number</th>
                <th>Full Name</th>
                <th>Birth Place</th>
                <th>Action</th>
              </tr>
              <tr v-for="(employee, key) in employees" :key="key">
                <th> {{key+1}} </th>
                <th> {{employee.personalNumber}} </th>
                <th> {{employee.fullName}} </th>
                <th> {{employee.birthPlace}} </th>
                <th>
                  <a class="button is-success is-rounded" @click="editEmployee(employee.personalNumber)">Edit</a>
                  <a class="button is-danger is-rounded" @click="employee.personalNumber ? deleteEmployee(key, employee.personalNumber) : removeGroupSociometri(key)">Delete</a>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <div class="modal" id="modal-form" v-bind:class="{ 'is-active': isActiveForm }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Position History</p>
          <button @click="closeFormModal()" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Start Date</label>
                <div class="control">
                  <input id="begin_date" data-display-mode="dialog" class="input" name="begin_date" type="date"
                    placeholder="e.g 10-11-2018" v-model="startDate" data-vv-as="start date" v-bind:class="{ 'is-danger': errors.has('begin_date')}"
                    v-validate="'required'">
                </div>
                <p v-show="errors.has('begin_date')" class="help is-danger">{{ errors.first('begin_date') }}</p>
              </div>
            </div>
            <div class="column">
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
                <label class="label">Personal Number</label>
                <div class="control">
                  <input name="personal_number" class="input " placeholder="e.g. S00215" type="text" v-model="personalNumber"
                    v-bind:class="{ 'is-danger': errors.has('personal_number')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('personal_number')" class="help is-danger"> {{ errors.first('personal_number') }}</p>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Full Name</label>
                <div class="control">
                  <input name="full_name" class="input " placeholder="e.g. Adi Purnama" type="text" v-model="fullName"
                    v-bind:class="{ 'is-danger': errors.has('full_name')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('full_name')" class="help is-danger"> {{ errors.first('full_name') }}</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">Nick Name</label>
                <div class="control">
                  <input name="nickname" class="input " placeholder="e.g. Adi" type="text" v-model="nickName"
                    v-bind:class="{ 'is-danger': errors.has('nickname')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('nickname')" class="help is-danger"> {{ errors.first('nickname') }}</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Birth Place</label>
                <div class="control">
                  <input name="birth_place" class="input " placeholder="e.g. Depok" type="text" v-model="birthPlace"
                    v-bind:class="{ 'is-danger': errors.has('birth_place')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('birth_place')" class="help is-danger"> {{ errors.first('birth_place') }}</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Birth Date</label>
                <div class="control">
                  <input name="born_date" class="input " placeholder="e.g. 10-10-2018" type="date" v-model="birthDate"
                    v-bind:class="{ 'is-danger': errors.has('born_date')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('born_date')" class="help is-danger"> {{ errors.first('born_date') }}</p>
              </div>
            </div>
          </div>
          <div class="columns">
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
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">Language</label>
                <div class="control">
                  <div class="select " v-bind:class="{ 'is-danger': errors.has('language') }">
                    <select name="language" class="select" v-model="language" v-validate="'required'">
                      <option disabled selected>Choose</option>
                      <option v-for="(language, key) in languages" :key="key" :value="language.object_id">{{
                        language.name
                        }}</option>
                    </select>
                  </div>
                  <p v-show="errors.has('language')" class="help is-danger">{{ errors.first('language') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Nationality</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model="national" name="national" v-validate="'required'">
                      <option disabled="disabled" selected="selected">Choose</option>
                      <option value="WNI">WNI</option>
                      <option value="WNA">WNA</option>
                    </select>
                  </div>
                  <p v-show="errors.has('national')" class="help is-danger">{{ errors.first('national') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Tribe</label>
                <div class="control">
                  <div class="select " v-bind:class="{ 'is-danger': errors.has('tribe') }">
                    <select name="tribe" class="select" v-model="tribe" v-validate="'required'">
                      <option disabled selected>Choose</option>
                      <option v-for="(tribe, key) in tribes" :key="key" :value="tribe.object_id">{{
                        tribe.name
                        }}</option>
                    </select>
                  </div>
                  <p v-show="errors.has('tribe')" class="help is-danger">{{ errors.first('tribe') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">Blood Type</label>
                <div class="control">
                  <div class="select " v-bind:class="{ 'is-danger': errors.has('bloodType') }">
                    <select name="bloodType" class="select" v-model="bloodType" v-validate="'required'">
                      <option disabled selected>Choose</option>
                      <option v-for="(bloodType, key) in bloodTypes" :key="key" :value="bloodType.object_id">{{
                        bloodType.name
                        }}</option>
                    </select>
                  </div>
                  <p v-show="errors.has('bloodType')" class="help is-danger">{{ errors.first('bloodType') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Rhesus</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model="rhesus" name="rhesus" v-validate="'required'">
                      <option disabled="disabled" selected="selected">Choose</option>
                      <option value="+">+</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <p v-show="errors.has('rhesus')" class="help is-danger">{{ errors.first('rhesus') }}</p>
                </div>
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
                  <p v-show="errors.has('bloodType')" class="help is-danger">{{ errors.first('bloodType') }}</p>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Marital Date</label>
                <div class="control">
                  <input name="marital_date" class="input " placeholder="e.g. 10-10-2018" type="date" v-model="maritalDate"
                    v-bind:class="{ 'is-danger': errors.has('marital_date')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('marital_date')" class="help is-danger"> {{ errors.first('marital_date') }}</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">Personal Number Reference</label>
                <div class="control">
                  <input name="personal_number_reference" class="input " placeholder="e.g. 00000" type="text" v-model="personalNumberReference"
                    v-bind:class="{ 'is-danger': errors.has('personal_number_reference')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('personal_number_reference')" class="help is-danger"> {{
                  errors.first('personal_number_reference') }}</p>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Business Code</label>
                <div class="control">
                  <input name="business_code" class="input " placeholder="e.g. 1000" type="text" v-model="businessCode"
                    v-bind:class="{ 'is-danger': errors.has('business_code')}" v-validate="'required'">
                </div>
                <p v-show="errors.has('business_code')" class="help is-danger"> {{
                  errors.first('business_code') }}</p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="control">
            <button @click="saveEmployee()" class="button is-link">Save</button>
            <button class="button" @click="closeFormModal()">Cancel</button>
          </div>
        </footer>
      </div>
    </div>
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
        key: null,
        nikAuth: this.$auth.user.nik,
        startDate: '',
        endDate: '',
        personalNumber: '',
        fullName: '',
        nickName: '',
        birthPlace: '',
        birthDate: '',
        gender: null,
        religion: '',
        language: '',
        national: '',
        tribe: '',
        bloodType: '',
        maritalStatus: '',
        rhesus: '',
        maritalStatus: '',
        maritalDate: '',
        personalNumberReference: '-',
        businessCode: '',
        religions: [],
        languages: [],
        bloodTypes: [],
        tribes: [],
        maritalsStatus: [],
        employees: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Employee Search'
          }
        ],
        isActiveForm: false,
      }
    },
    created() {
      this.getEmployees();
      this.getReligions();
      this.getLanguages();
      this.getTribes();
      this.getBloodType();
      this.getMaritalStatus();
      console.log(this.$auth)
    },
    methods: {
      openFormModal() {
        this.isActiveForm = true;
      },
      closeFormModal() {
        this.isActiveForm = false;
        this.personalNumber = '';
        this.fullName = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getLanguages() {
        this.$axios.get('/objects/language')
          .then(response => {
            this.languages = response.data.data;
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
      getTribes() {
        this.$axios.get('/objects/tribe')
          .then(response => {
            this.tribes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getBloodType() {
        this.$axios.get('/objects/bloodtype')
          .then(response => {
            this.bloodTypes = response.data.data;
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
      getEmployees() {
        this.$axios.get('users/personal?per_page=20')
          .then(response => {
            this.employees = [];
            response.data.data.forEach(async (employee, key) => {
              await this.employees.push({
                startDate: employee.begin_date,
                endDate: employee.end_date,
                personalNumber: employee.personal_number,
                fullName: employee.full_name,
                nickName: employee.nickname,
                birthPlace: employee.born_city,
                birthDate: employee.born_date,
                gender: employee.gender[0].object_id,
                religion: employee.religion[0].object_id,
                language: employee.language[0].object_id,
                national: employee.national,
                tribe: employee.tribe[0].object_id,
                bloodType: employee.blood_type[0].object_id,
                rhesus: employee.rhesus,
                maritalStatus: employee.marital_status[0].object_id,
                maritalDate: employee.marital_date,
                personalNumberReference: employee.personal_number_reference,
                businessCode:employee.business_code,
              })
            });
          })
          .catch(e => {
            console.log(e);
          });
      },
      saveEmployee() {
        this.personalNumber ? this.updateEmployee(this.personalNumber) : this.storeEmployee();
      },
      updateEmployee() {
        this.$validator.validateAll('employee').then(async result => {
          if (!result) return;
          var res = this.maritalStatus.substring(1, 2);
          var chuser = this.$auth.user.nik;
          //alert(chuser)
          this.$axios.post('users/' + this.nikAuth + '/personal/' + this.personalNumber, {
              begin_date: this.startDate,
              end_date: this.endDate,
              personal_number: this.personalNumber,
              full_name: this.fullName,
              nickname: this.nickName,
              born_city: this.birthPlace,
              born_date: this.birthDate,
              gender: this.gender,
              religion: this.religion,
              language: this.language,
              national: this.national,
              tribe: this.tribe,
              blood_type: this.bloodType,
              rhesus: this.rhesus,
              marital_status: res,
              marital_date: this.maritalDate,
              personal_number_reference: this.personalNumberReference,
              change_user: '12345678',
              business_code: this.businessCode,
            })
            .then(response => {
              this.getEmployees();
              this.closeFormModal();
              swal(
                'Saved!',
                'Successfully saved employee.',
                'success'
              )
            })
            .catch(e => {
              console.log(e);
            });
        });
      },
      storeEmployee() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;
          var res = this.maritalStatus.substring(1, 2);
          var chuser = this.$auth.user.nik;
          this.$axios.post('users/' + this.nikAuth + '/personal/' + this.personalNumber, {
              begin_date: this.startDate,
              end_date: this.endDate,
              personal_number: this.personalNumber,
              full_name: this.fullName,
              nickname: this.nickName,
              born_city: this.birthPlace,
              born_date: this.birthDate,
              gender: this.gender,
              religion: this.religion,
              language: this.language,
              national: this.national,
              tribe: this.tribe,
              blood_type: this.bloodType,
              rhesus: this.rhesus,
              marital_status: res,
              marital_date: this.maritalDate,
              personal_number_reference: this.personalNumberReference,
              change_user: chuser,
              business_code: this.businessCode,
            })
            .then(response => {
              this.getEmployees();
              this.resetForm();
              swal(
                'Saved!',
                'Successfully saved Employee Data.',
                'success'
              )
            })
            .catch(e => {
              console.log(e);
            });
        });
      },
      editEmployee(personalNumber) {
        this.openFormModal();
        this.getEmployee(personalNumber);
      },
      async getEmployee(personalNumber) {
        let employee = await this.employees.find(employee => employee.personalNumber == personalNumber);
        this.startDate = employee.startDate;
        this.endDate = employee.endDate;
        this.personalNumber = employee.personalNumber;
        this.fullName = employee.fullName;
        this.nickName = employee.nickName;
        this.birthPlace = employee.birthPlace,
        this.birthDate = employee.birthDate,
        this.gender = employee.gender,
        this.religion = employee.religion,
        this.language = employee.language,
        this.national = employee.national,
        this.tribe = employee.tribe,
        this.bloodType = employee.bloodType,
        this.rhesus = employee.rhesus,
        this.maritalStatus = employee.maritalStatus,
        this.maritalDate = employee.maritalDate,
        this.personalNumberReference = employee.personalNumberReference,
        this.nikAuth = employee.nikAuth,
        this.businessCode = employee.businessCode
      },
      deleteEmployee(key, personalNumber) {
         swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            this.$axios.post('users/' + this.nikAuth + '/personal/' + personalNumber,{})
              .then(response => {
                $swal(
                  'Deleted!',
                  response.data.message,
                  'success'
                )
              })
              .catch(e => {
                console.log(e);
              })
              .then(() => {
                this.removeEmployee(key);
              })        
        });
      },
      removeEmployee(key) {
        this.employees.splice(key, 1);
      },
    },
  }
</script>

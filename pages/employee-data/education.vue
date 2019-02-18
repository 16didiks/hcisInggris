<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-fa-university" aria-hidden="true"></i> Employee Education
    </h3>
    <div class="box has-text-white has-background-danger">
      Employee Data
    </div>
    <div class="box">
      <div class="columns">
        <div class="column">
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
      Form Education
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
            <label class="label">Educational Level</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('education_level') }">
                <select name="education_level" class="select" v-model="educationLevel" data-vv-as="education level"
                  v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(educationLevel, key) in educationLevels" :key="key" :value="educationLevel.object_id">{{
                    educationLevel.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('education_level')" class="help is-danger">{{errors.first('education_level')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Faculty</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('faculty') }">
                <select name="faculty" class="select" v-model="faculty" data-vv-as="faculty" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(faculty, key) in faculties" :key="key" :value="faculty.object_id">{{
                    faculty.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('faculty')" class="help is-danger">{{errors.first('faculty')
                }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Major</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('major') }">
                <select name="major" class="select" v-model="major" data-vv-as="major" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(major, key) in majors" :key="key" :value="major.object_id">{{
                    major.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('major')" class="help is-danger">{{errors.first('major')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Sub Major</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('sub_major') }">
                <select name="sub_major" class="select" v-model="subMajor" data-vv-as="sub major" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(subMajor, key) in subMajors" :key="key" :value="subMajor.object_id">{{
                    subMajor.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('sub_major')" class="help is-danger">{{errors.first('sub_major')
                }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Institution</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('institution') }">
                <select name="institution" class="select" v-model="institution"  v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(institution, key) in institutions" :key="key" :value="institution.object_id">{{
                    institution.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('institution')" class="help is-danger">{{errors.first('institution')
                }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <label for="checkbox" class="checkbox">
            <input type="checkbox" id="certificate" v-model="certificate">
            Certificate
          </label>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">funding</label>
            <div class="control">
              <label class="radio">
                <input name="funding" type="radio" v-model="funding" value="p" v-validate="'required|included:p,a'">
                Personal
              </label>
              <label class="radio">
                <input name="funding" type="radio" v-model="funding" value="a">
                Agency
              </label>
            </div>
            <p v-show="errors.has('funding')" class="help is-danger">{{ errors.first('funding') }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <label for="checkbox" class="checkbox">
            <input type="checkbox" id="recognition" v-model="recognition">
            Recognition
          </label>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Recognition Date</label>
            <div class="control">
              <input id="recognition_date" data-display-mode="dialog" class="input" name="recognition_date" type="date" placeholder="e.g 10-11-2018"
                v-model="recognitionDate" data-vv-as="recognition date" v-bind:class="{ 'is-danger': errors.has('recognition_date')}"
                v-validate="'required'">
            </div>
            <p v-show="errors.has('recognition_date')" class="help is-danger">{{ errors.first('recognition_date') }}</p>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveEducation()">Save</a>
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
        educationLevel: '',
        major: '',
        subMajor: '',
        institution: '',
        certificate: '',
        funding: '',
        recognition: '',
        recognitionDate: '',
        faculty: '',
        major: '',
        subMajor: '',
        educationLevels: [],
        faculties: [],
        majors: [],
        subMajors: [],
        educations:[],
        institutions: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Competency'
          },
          {
            name: 'Education'
          },
        ]
      }
    },
    created() {
      this.getEducationLevels();
      this.getFaculty();
      this.getMajor();
      this.getSubMajor();
      this.getInstution();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.educationLevel= '';
        this.major= '';
        this.subMajor= '';
        this.faculty= '';
        this.institution= '';
        this.certificate= '';
        this.funding= '';
        this.recognition= '';
        this.recognitionDate= '';
        this.$nextTick(() => this.$validator.reset())
      },
      getEducationLevels() {
        this.$axios.get('/objects/educationallevel')
          .then(response => {
            this.educationLevels = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getFaculty() {
        this.$axios.get('/objects/educationfaculty')
          .then(response => {
            this.faculties = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getMajor() {
        this.$axios.get('/objects/educationmajor')
          .then(response => {
            this.majors = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getSubMajor() {
        this.$axios.get('/objects/educationsubmajor')
          .then(response => {
            this.subMajors = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getInstution() {
        this.$axios.get('/objects/educationinstitution')
          .then(response => {
            this.institutions = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveEducation() {
        if (this.certificate == true) {
          this.certificate = 'y';
        } else {
          this.certificate = 'n';
        }

        if (this.recognition == true) {
          this.recognition = 'y';
        } else {
          this.recognition = 'n';
        }
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.educations[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              educationLevel: this.educationLevel,
              major: this.major,
              subMajor: this.subMajor,
              faculty: this.faculty,
              institution: this.institution,
              certificate: this.certificate,
              funding: this.funding,
              recognition: this.recognition,
              recognitionDate: this.recognitionDate,
              nikAuth: this.nikAuth
            }
          } else {
            await this.educations.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              educationLevel: this.educationLevel,
              major: this.major,
              subMajor: this.subMajor,
              faculty: this.faculty,
              institution: this.institution,
              certificate: this.certificate,
              funding: this.funding,
              recognition: this.recognition,
              recognitionDate: this.recognitionDate,
              nikAuth: this.nikAuth
            })
          }
          this.storeEducation();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Education.',
            'success'
          )
        });
      },
      async storeEducation() {
        let educations = await this.educations.map(education => {
          return {
            begin_date: education.startDate,
            end_date: education.endDate,
            business_code: education.businessCode,
            personal_number: education.personalNumber,
            education_level: education.educationLevel,
            major: education.major,
            sub_major: education.subMajor,
            faculty: education.faculty,
            institution: education.institution,
            certificate: education.certificate,
            funding: education.funding,
            recognition: education.recognition,
            recognition_date: education.recognitionDate,
            change_user: education.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/education/' + this.personalNumber, educations)
          .then(response => {
            this.educations = [];
            response.data.data.forEach((education, key) => {
              this.educations.push({
                key: key,
                startDate: education.begin_date,
                endDate: education.end_date,
                businessaCode: education.business_code,
                personalNumber: education.personal_number,
                educationLevel: education.education_level,
                major: education.major,
                subMajor: education.sub_major,
                faculty: education.faculty,
                institution: education.institution,
                certificate: education.certificate,
                funding: education.funding,
                recognition: education.recognition,
                recognitionDate: education.recognition_date,
                nikAuth: education.change_user
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

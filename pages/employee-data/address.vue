<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-address-card-o" aria-hidden="true"></i> Address
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
      Form Address
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
            <label class="label">Address Type</label>
            <div class="control">
              <div class="select " v-bind:class="{ 'is-danger': errors.has('address_type') }">
                <select name="address_type" class="select" v-model="addressType" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(addressType, key) in addressTypes" :key="key" :value="addressType.object_id">{{
                    addressType.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('language')" class="help is-danger">{{ errors.first('language') }}</p>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Address Number</label>
            <div class="control">
              <input name="address_number" class="input " placeholder="e.g. S00215" type="number" v-model="addressNumber"
                v-bind:class="{ 'is-danger': errors.has('address_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('address_number')" class="help is-danger"> {{ errors.first('address_number')
              }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Address</label>
            <div class="control">
              <textarea name="street" class="textarea" placeholder="10 lines of textarea" rows="5" v-model="street" v-bind:class="{ 'is-danger': errors.has('street')}" v-validate="'required'"></textarea>
            </div>
            <p v-show="errors.has('street')" class="help is-danger"> {{ errors.first('street')}}</p>
          </div>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">State</label>
                <div class="control">
                  <div class="select " v-bind:class="{ 'is-danger': errors.has('province') }">
                    <select name="province" class="select" v-model="province" v-validate="'required'" @change="getCities()">
                      <option disabled selected>Choose</option>
                      <option v-for="(province, key) in provinces" :key="key" :value="province.id">{{
                        province.name
                        }}</option>
                    </select>
                  </div>
                  <p v-show="errors.has('province')" class="help is-danger">{{ errors.first('province') }}</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Postal Code</label>
                <div class="control">
                  <input class="input" name="postal_code" v-model="postalCode" type="text" placeholder="e.g. 60118"
                    v-bind:class="{ 'is-danger': errors.has('postal_code') }" data-vv-as="postal code" v-validate="'required|numeric'">
                </div>
                <p v-show="errors.has('postal_code')" class="help is-danger">{{ errors.first('postal_code') }}</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">City</label>
                <div class="control">
                  <div class="select " v-bind:class="{ 'is-danger': errors.has('city') }">
                    <select name="city" class="select" v-model="city" v-validate="'required'" @change="getDistricts()">
                      <option disabled selected>Choose</option>
                      <option v-for="(city, key) in cities" :key="key" :value="city.id">{{
                        city.name
                        }}</option>
                    </select>
                  </div>
                  <p v-show="errors.has('city')" class="help is-danger">{{ errors.first('city') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <input name="country" class="input" placeholder="e.g. Indonesia" type="text" v-model="country"
                v-bind:class="{ 'is-danger': errors.has('country')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('country')" class="help is-danger"> {{ errors.first('country') }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">District</label>
            <div class="control">
              <div class="select " v-bind:class="{ 'is-danger': errors.has('district') }">
                <select name="district" class="select" v-model="district" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(district, key) in districts" :key="key" :value="district.id">{{
                    district.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('district')" class="help is-danger">{{ errors.first('district') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a class="button is-success is-rounded" @click="saveEmployeeAdress()">Save</a>
    <a class="button is-danger is-rounded">Reset</a>
    <a class="button is-link is-rounded">Back</a>

  </section>
</template>

<script>
  import Breadcrumb from '~/components/Breadcrumb';
  import employeeVue from './employee.vue';
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
        personalNumber: null,
        addressType: '',
        addressNumber: '',
        street: '',
        postalCode: '',
        province: '',
        city: '',
        district: '',
        employeeAddress: '',
        country: '',
        provinces: [],
        cities: [],
        districts: [],
        addressTypes: [],
        employeesAddress: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Address'
          },
        ]
      }
    },
    created() {
      this.getAddressTypes();
      this.getProvinces();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.addressType = '';
        this.addressNumber = '';
        this.street = '';
        this.postalCode = '';
        this.city = '';
        this.province = '';
        this.country = '';
        this.district = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getAddressTypes() {
        this.$axios.get('/objects/addresstype')
          .then(response => {
            this.addressTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getProvinces() {
        this.provinces = [];
        this.$axios.get('/province/getall')
          .then(response => {
            this.provinces = response.data.data;
          })
          .catch(e => {
            console.log(e);
          });
      },
      getCities() {
        this.cities = [];
        this.$axios.get('/city/byProvince/' + this.province)
          .then(response => {
            this.cities = response.data.data;
          })
          .catch(e => {
            console.log(e);
          });
        //this.districts = [];
      },
      getDistricts() {
        this.districts = [];
        this.$axios.get('/district/byCity/' + this.city)
          .then(response => {
            this.districts = response.data.data;
          })
          .catch(e => {
            console.log(e);
          });;
      },
      saveEmployeeAdress() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.employeesAddress[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              addressType: this.addressType,
              addressNumber: this.addressNumber,
              street: this.street,
              postalCode: this.postalCode,
              city: this.city,
              province: this.province,
              country: this.country,
              district: this.district,
              nikAuth: this.nikAuth
            }
          } else {
            await this.employeesAddress.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              addressType: this.addressType,
              addressNumber: this.addressNumber,
              street: this.street,
              postalCode: this.postalCode,
              city: this.city,
              province: this.province,
              country: this.country,
              district: this.district,
              nikAuth: this.nikAuth
            })
          }
          this.storeEmployeeAddress();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Employee Address.',
            'success'
          )
        });
      },
      async storeEmployeeAddress() {
        let employeesAddress = await this.employeesAddress.map(employeeAddress => {
          return {
            begin_date: employeeAddress.startDate,
            end_date: employeeAddress.endDate,
            business_code: employeeAddress.businessCode,
            personal_number: employeeAddress.personalNumber,
            address_type: employeeAddress.addressType,
            address_number: employeeAddress.addressNumber,
            street: employeeAddress.street,
            postal_code: employeeAddress.postalCode,
            city: employeeAddress.city,
            province: employeeAddress.province,
            country: employeeAddress.country,
            district: employeeAddress.district,
            change_user: employeeAddress.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/empaddress/' + this.personalNumber, employeesAddress)
          .then(response => {
            this.employeesAddress = [];
            response.data.data.forEach((employeeAddress, key) => {
              this.employeesAddress.push({
                key: key,
                startDate: employeeAddress.begin_date,
                endDate: employeeAddress.end_date,
                businessaCode: employeeAddress.business_code,
                personalNumber: employeeAddress.personal_number,
                addressType: employeeAddress.address_type,
                addressNumber: employeeAddress.address_number,
                street: employeeAddress.street,
                postalCode: employeeAddress.postal_code,
                city: employeeAddress.city,
                province: employeeAddress.province,
                country: employeeAddress.country,
                district: employeeAddress.district,
                nikAuth: employeeAddress.change_user
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

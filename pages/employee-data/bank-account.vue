<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-fa-university" aria-hidden="true"></i> Employee Bank Account
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
      Form Bank Account
    </div>
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Account Type</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('account_type') }">
                <select name="account_type" class="select" v-model="bankType" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(accountType, key) in accountTypes" :key="key" :value="accountType.object_id">{{
                    accountType.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('account_type')" class="help is-danger">{{errors.first('account_type')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Account Name</label>
            <div class="control">
              <input name="account_name" class="input " placeholder="e.g. Didik Setiawan" type="text" data-vv-as="account name"
                v-model="fullName" v-bind:class="{ 'is-danger': errors.has('account_name')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('account_name')" class="help is-danger"> {{ errors.first('account_name')
              }}</p>
          </div>
        </div>
        <div class="column">
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
            <label class="label">Group Bank</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('group_bank') }">
                <select name="group_bank" class="select" v-model="bankGroup" v-validate="'required'" @change="getBankByGroup()">
                  <option disabled selected>Choose</option>
                  <option v-for="(bankGroup, key) in bankGroups" :key="key" :value="bankGroup.object_id">{{
                    bankGroup.name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('group_bank')" class="help is-danger">{{errors.first('group_bank')
                }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Bank Name</label>
            <div class="control">
              <div class="select" v-bind:class="{ 'is-danger': errors.has('bank_name') }">
                <select name="bank_name" class="select" v-model="bankCode" v-validate="'required'">
                  <option disabled selected>Choose</option>
                  <option v-for="(bankCode, key) in bankCodes" :key="key" :value="bankCode.bank_code">{{
                    bankCode.bank_name
                    }}</option>
                </select>
              </div>
              <p v-show="errors.has('bank_name')" class="help is-danger">{{errors.first('bank_name')
                }}</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Bank Address</label>
            <div class="control">
              <input class="input" type="text" placeholder="Jl. Budi Utomo 45">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input class="input disabled" type="text" placeholder="Jakarta">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Account Number</label>
            <div class="control">
              <input name="account_number" class="input " placeholder="e.g. 00215" type="text" v-model="accountNumber"
                v-bind:class="{ 'is-danger': errors.has('account_number')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('account_number')" class="help is-danger"> {{ errors.first('account_number')
              }}</p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Payment</label>
            <div class="control">
              <label class="radio">
                <input name="payment" type="radio" v-model="payment" value=0 v-validate="'required|included:0,1'">
                Cash
              </label>
              <label class="radio">
                <input name="payment" type="radio" v-model="payment" value=1>
                Transfer
              </label>
            </div>
            <p v-show="errors.has('payment')" class="help is-danger">{{ errors.first('payment') }}</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Amount</label>
            <div class="control">
              <input name="total" class="input " placeholder="e.g. 1.000.0000" type="number" v-model="nilai"
                v-bind:class="{ 'is-danger': errors.has('total')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('total')" class="help is-danger"> {{ errors.first('total')
              }}</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Percentage</label>
            <div class="control">
              <input name="percentage" class="input " placeholder="e.g. 50" type="percentage" v-model="percent  "
                v-bind:class="{ 'is-danger': errors.has('percentage')}" v-validate="'required'">
            </div>
            <p v-show="errors.has('percentage')" class="help is-danger"> {{ errors.first('percentage')
              }}</p>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded" @click="saveBankAccount()">Save</a>
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
        bankType: '',
        fullName: '',
        bankCode: '',
        accountNumber: '',
        payment: '',
        nilai: '',
        percent: '',
        accountType: '',
        bankGroup: '',
        accountTypes: [],
        bankAccounts: [],
        bankCodes: [],
        bankGroups: [],
        bankByCodes: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
          },
          {
            name: 'Bank Account'
          },
        ]
      }
    },
    created() {
      this.getBankType();
      this.getBankGroup();
    },
    methods: {
      resetForm() {
        this.key = null;
        this.startDate = '';
        this.endDate = '';
        this.businessaCode = '';
        this.personalNumber = null;
        this.bankType = '';
        this.fullName = '';
        this.bankCode = '';
        this.accountNumber = '';
        this.payment = '';
        this.nilai = '';
        this.percent = '';
        this.$nextTick(() => this.$validator.reset())
      },
      getBankType() {
        this.$axios.get('/objects/banktype')
          .then(response => {
            this.accountTypes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getBankGroup() {
        this.$axios.get('/objects/bankgroup')
          .then(response => {
            this.bankGroups = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      getBankByGroup() {
        this.$axios.get('/bank/getbyGroup/' + this.bankGroup)
          .then(response => {
            this.bankCodes = response.data.data;
          })
          .catch(e => {
            console.log(e)
          });
      },
      saveBankAccount() {
        this.$validator.validateAll().then(async result => {
          if (!result) return;

          if (this.key != null) {
            this.bankAccounts[this.key] = {
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              bankType: this.bankType,
              fullName: this.fullName,
              bankCode: this.bankCode,
              accountNumber: this.accountNumber,
              payment: this.payment,
              nilai: this.nilai,
              percent: this.percent,
              nikAuth: this.nikAuth
            }
          } else {
            await this.bankAccounts.push({
              key: this.key,
              startDate: this.startDate,
              endDate: this.endDate,
              businessCode: this.businessCode,
              personalNumber: this.personalNumber,
              bankType: this.bankType,
              fullName: this.fullName,
              bankCode: this.bankCode,
              accountNumber: this.accountNumber,
              payment: this.payment,
              nilai: this.nilai,
              percent: this.percent,
              nikAuth: this.nikAuth
            })
          }
          this.storeBankAccount();
          this.resetForm();
          swal(
            'Saved!',
            'Successfully saved Bank Account.',
            'success'
          )
        });
      },
      async storeBankAccount() {
        let bankAccounts = await this.bankAccounts.map(bankAccount => {
          return {
            begin_date: bankAccount.startDate,
            end_date: bankAccount.endDate,
            business_code: bankAccount.businessCode,
            personal_number: bankAccount.personalNumber,
            bank_type: bankAccount.bankType,
            full_name: bankAccount.fullName,
            bank_code: bankAccount.bankCode,
            account_number: bankAccount.accountNumber,
            payment: bankAccount.payment,
            nilai: bankAccount.nilai,
            percent: bankAccount.percent,
            change_user: bankAccount.nikAuth
          };
        });
        this.$axios.post('/users/' + this.nikAuth + '/bank/' + this.personalNumber, bankAccounts)
          .then(response => {
            this.bankAccounts = [];
            response.data.data.forEach((bankAccount, key) => {
              this.bankAccounts.push({
                key: key,
                startDate: bankAccount.begin_date,
                endDate: bankAccount.end_date,
                businessaCode: bankAccount.business_code,
                personalNumber: bankAccount.personal_number,
                bank_type: bankAccount.bank_type,
                full_name: bankAccount.full_name,
                bank_code: bankAccount.bank_code,
                account_number: bankAccount.account_number,
                payment: bankAccount.payment,
                nilai: bankAccount.nilai,
                percent: bankAccount.percent,
                nikAuth: bankAccount.change_user
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

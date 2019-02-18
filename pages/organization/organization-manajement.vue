<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      Management Organization
    </h3>
    <div class="box has-text-white has-background-danger">
      Organization Data
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-3">
          <div class="field">
            <label class="label">Start Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="label">End Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <div class="field">
            <label class="label">Position</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="field">
            <label class="label">Unit</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Job</label>
            <div class="control">
              <div class="select is-small" v-bind:class="{ 'is-danger': errors.has('job') }">
                <select name="job" class="select" v-model="job" v-validate="'required|included:01,02,03,04,05,06'">
                  <option disabled selected>Choose</option>
                  <option v-for="(job, key) in jobs" :key="key" :value="job.object_id">{{ job.name }}</option>
                </select>
              </div>
              <p v-show="errors.has('job')" class="help is-danger">{{ errors.first('job') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Business Area</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Personel Area</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Payroll Area</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Stream</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded">Save</a>
    <a class="button is-danger is-rounded">Reset</a>

  </section>
</template>

<script>
  import Breadcrumb from '~/components/Breadcrumb';
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  Vue.use(VeeValidate);

  export default {
    components: {
      Breadcrumb,
    },
    created() {
      console.log(this.jobs)
      this.getJobs();
    },
    data() {
      return {
        name: '',
        job:'',
        jobs: [],
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Organization'
          },
          {
            name: 'Manajement'
          },
        ]
      }
    },
    methods: {
      getJobs() {
        this.$axios.get('/objects/job')
          .then(response => {
            this.jobs = response.data.data;
          })
          .catch(e => {
            console.log(e);
          });
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

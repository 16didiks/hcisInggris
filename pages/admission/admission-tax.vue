<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-money" aria-hidden="true"></i> Tax
    </h3>
    <div class="box has-text-white has-background-danger">
        Tax Form
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Npwp Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="Npwp Number">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Npwp Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">PTKP</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Lajang</option>
                    <option>K1</option>
                    <option>K2</option>
                    <option>K3</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="columns">
          <div class="column is-4">
            <label for="checkbox" class="checkbox">
              <input type="checkbox" id="spouse_benefit" v-model="spouseBenefit">
              Married For Tax Purpose
            </label>
          </div>
          <div class="column is-4">
            <label for="checkbox" class="checkbox">
              <input type="checkbox" id="spouse_benefit" v-model="spouseBenefit">
              Spouse Benefit
            </label>
          </div>

        </div>
    </div>
    <!-- <a class="button is-success is-rounded">Save</a> -->
    <a class="button is-link is-rounded">Continue</a>
    <a class="button is-danger is-rounded">Back</a>

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
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Admission'
          },
          {
            name: 'Tax'
          },
        ]
      }
    },
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

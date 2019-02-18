<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-medkit" aria-hidden="true"></i> Bpjs
    </h3>
    <div class="box has-text-white has-background-danger">
        Bpjs Form
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Insurance type</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Asuransi Kesehatan</option>
                    <option>Asuransi Jiwa</option>
                    <option>Asuransi Kendaraan</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Insurance Number</label>
            <div class="control">
              <input class="input" type="number" placeholder="Insurance Number">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
          <div class="column is-4">
            <label class="label">Policy Number</label>
            <div class="control">
              <input class="input" type="number" placeholder="Policy Number">
            </div>
          </div>
          <div class="column is-8">
            <label class="label">Insurance company</label>
            <div class="control">
              <input class="input" type="number" placeholder="Insurance company">
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <label class="label">Company Payment (Rp.)</label>
            <div class="control">
              <input class="input" type="number" placeholder="Company Payment (Rp.)">
            </div>
          </div>
          <div class="column is-4">
            <label class="label">Percentage(%)</label>
            <div class="control">
              <input class="input" type="number" placeholder="Percentage(%)">
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <label class="label">Employee Payment (Rp.)</label>
            <div class="control">
              <input class="input" type="number" placeholder="Employee Payment (Rp.)">
            </div>
          </div>
          <div class="column is-4">
            <label class="label">Percentage(%)</label>
            <div class="control">
              <input class="input" type="number" placeholder="Percentage(%)">
            </div>
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
            name: 'Bpjs'
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

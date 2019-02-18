<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-money" aria-hidden="true"></i> Basic Pay
    </h3>
    <div class="box has-text-white has-background-danger">
        Basic Pay
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Component</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Gaji Dasar</option>
                    <option>Tani</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Value</label>
            <div class="control">
              <input class="input" type="number" placeholder="Value">
            </div>
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
            name: 'Basic Pay'
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

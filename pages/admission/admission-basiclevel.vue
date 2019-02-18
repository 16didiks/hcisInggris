<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-book" aria-hidden="true"></i> Basic Level
    </h3>
    <div class="box has-text-white has-background-danger">
        Basic Level
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Pay Scale Area</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Ambon</option>
                    <option>Ambawara</option>
                    <option>Amuntai</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Pay Scale Type</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Pay Scale Group</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Group 1</option>
                    <option>Group 2</option>
                    <option>Group 3</option>
                  </select>
                </div>
              </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Pay Scale Level</label>
            <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                  </select>
                </div>
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
            name: 'Basic Level'
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

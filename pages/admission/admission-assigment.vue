<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-sticky-note-o" aria-hidden="true"></i> Assigment
    </h3>
    <div class="box has-text-white has-background-danger">
        Employee Placement
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Posisiton</label>
            <div class="control">
              <input class="input" type="text" placeholder="Posisiton">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Unit</label>
            <div class="control">
              <input class="input" type="text" placeholder="Unit">
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Bussines Area</label>
            <div class="control">
              <input class="input" type="text" placeholder="Bussines Area">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="field">
            <label class="label">Company</label>
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
            <label class="label">Placement City</label>
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
            name: 'Assigment'
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

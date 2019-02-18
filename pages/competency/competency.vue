<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      COMPETENCY
    </h3>
    <div class="box has-text-white has-background-danger">
      Employee Data BUMN
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-3">
          <div class="field">
            <label class="label">Personal Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="S03343">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="full name">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Current Position</label>
            <div class="control">
              <input class="input" type="text" placeholder="Manager">
            </div>
          </div>
        </div>
        <div class="column">
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
      Competency Data
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
            <label class="label">Expired Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Competency</label>
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
        <div class="column">
          <div class="field">
            <label class="label">Value of Competency</label>
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
            name: 'Competency'
          },
          {
            name: 'Competence'
          }
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

<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs"/>
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-bar-chart" aria-hidden="true"></i> Basic Remuneration
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
              <input class="input" type="text" placeholder="S021557">
            </div>
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
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Start Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">End Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
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
        <div class="column is-4">
          <div class="field">
            <label class="label">Value</label>
            <div class="control">
              <input class="input" type="text" placeholder="8">
            </div>
          </div>
        </div>
        <div class="column">
          <br>
          <a class="button is-primary is-rounded">+</a>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"> 
            <thead>

              <tr>
                <th>Component Name</th>
                <th>Value</th>
                <th>Direct/Indirect</th>
              </tr>
              <tr>
                <th>Tani</th>
                <th>1</th>
                <th>Y</th>
              </tr>
              <tr>
                <th>Gaji Dasar</th>
                <th>2</th>
                <th>T</th>
              </tr>

            </thead>

          </table>
        </div>
      </div>
    </div>
    <a class="button is-success is-rounded">Save</a>
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
        breadcumbs: [{
            name: 'Home'
          },
          {
            name: 'Employee Data'
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

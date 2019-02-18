<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-users" aria-hidden="true"></i> Referance Data
    </h3>
    <div class="box has-text-white has-background-danger">
      Employee Data
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-3">
          <div class="field">
            <label class="label">Start Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>s
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
      Referance Data
    </div>
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Reference Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="S03343">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" placeholder="0215">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Number</label>
            <div class="control">
              <input class="input" type="number" placeholder="25879">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Reference Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Juli">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box has-text-white has-background-danger">
      Location of Employee Placement
    </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Company</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Terlkomsigma</option>
                  <option>Telkomsel</option>
                  <option>Telkom</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Personal Area</label>
            <div class="control">
              <input class="input" type="text" placeholder="076545">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Position</label>
            <div class="control">
              <input class="input" type="text" placeholder="Manager">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Bussines Area</label>
            <div class="control">
              <input class="input" type="text" placeholder="DPCP">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Unit</label>
            <div class="control">
              <input class="input" type="text" placeholder="Juli">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Placement City</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Jakarta</option>
                  <option>Palembang</option>
                  <option>Jambi</option>
                </select>
              </div>
            </div>
          </div>
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
            name: 'Organization Assignment'
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

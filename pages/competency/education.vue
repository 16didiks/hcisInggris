<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-fa-university" aria-hidden="true"></i> Employee Education
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
    <div class="box has-text-white has-background-danger">
      Form Education
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
            <label class="label">Education Level</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Faculty</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Kedokteran</option>
                  <option>Information System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Name of Educational Institution</label>
            <div class="control">
              <input class="input" type="text" placeholder="Telkom University">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <label class="checkbox">
            <input type="checkbox">
            Certified
          </label>
        </div>
        <div class="column is-4">
          <label class="label">Source of Funds</label>
          <div class="control">
            <label class="radio">
              <input type="radio" name="foobar">
              Peronal
            </label>
            <label class="radio">
              <input type="radio" name="foobar" checked>
              Agency
            </label>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <label class="checkbox">
            <input type="checkbox">
            Pengakuan
          </label>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Tanggal Pengakuan</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
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
            name: 'Competency'
          },
          {
            name: 'Education'
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
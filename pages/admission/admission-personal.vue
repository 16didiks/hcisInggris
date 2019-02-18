<template>
  <section class="section">
    <Breadcrumb :breadcumbs="breadcumbs" />
    <hr>
    <h3 class="subtitle is-3">
      <i class="fa fa-user" aria-hidden="true"></i> Personal
    </h3>
    <div class="box has-text-white has-background-danger">
      Personal
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
        <div class="column is-8">
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
            <label class="label">Nik</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nik">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box has-text-white has-background-danger">
        Employee Detail BUMN </div>
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <div class="field">
            <label class="label">Nick Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nick Name">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Place Birth</label>
            <div class="control">
              <input class="input" type="text" placeholder="Place Birth">
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="field">
            <label class="label">Date Birth</label>
            <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
              <label class="label">Gender</label>
              <div class="control">
                <label class="radio">
                  <input name="gender" type="radio" v-model="gender" value="L" v-validate="'required|included:L,P'">
                  Male
                </label>
                <label class="radio">
                  <input name="gender" type="radio" v-model="gender" value="P">
                  Female
                </label>
              </div>
              <p v-show="errors.has('gender')" class="help is-danger">{{ errors.first('gender') }}</p>
            </div>
        </div>
        <div class="column is-4">
          <div class="field">
              <label class="label">Religion</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Islam</option>
                    <option>Kristen</option>
                    <option>Katolik</option>
                    <option>Hindu</option>
                    <option>Budha</option>
                    <option>Kong Hu Chu</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <div class="field">
              <label class="label">Language</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Bahasa</option>
                    <option>English</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
        <div class="column is-4">
          <div class="field">
              <label class="label">Nationality</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Indonesian citizens</option>
                    <option>Foreign citizens</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Ethnic</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Jawa</option>
                    <option>Sunda</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Blood Type</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>O</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Rhesus</label>
              <div class="control">
              <input class="input" type="text" placeholder="Rhesus">
            </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="field">
              <label class="label">Marriage Status</label>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option disabled="disabled" selected="selected">Choose</option>
                    <option>Lajang</option>
                    <option>Menikah</option>
                    <option>Duda</option>
                    <option>Janda</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Marriage Date</label>
              <div class="control">
              <input class="input" type="date" placeholder="10-10-2017">
            </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <label class="label">Reference Nik</label>
              <div class="control">
                <input class="input" type="number" placeholder="Reference Nik">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box has-text-white has-background-danger">
      Diffable Data
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
        <div class="column is-4">
          <div class="field">
            <label class="label">Diffable Type</label>
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
        <div class="column is-12">
          <div class="field">
            <label class="label">Information</label>
            <div class="control">
              <input class="input" type="text" placeholder="Information">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <a class="button is-success is-rounded">Save</a>
    <a class="button is-danger is-rounded">Reset</a> -->
    <a class="button is-link is-rounded">Continue</a>

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
            name: 'Personal'
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

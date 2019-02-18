<template>
  <section class="section">
    <div class="">
      <div > 
        <div class="box has-text-white has-background-danger">
          Filter Search)
        </div>
        <div class="box">
          <div v-for="(form, key) in searchforms" :key="key">
            <div class="columns">
              <div class="column is-3">
                <div class="field">
                  <label class="label">Column</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="form.column">
                        <option>Personal Number</option>
                        <option>Full Name</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <div class="field">
                  <label class="label">Logic</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="form.logic">
                        <option>Is Equal To</option>
                        <option>Is Not Equal To</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <div class="field">
                  <label class="label">Filter</label>
                  <div class="control">
                    <input class="input" type="text" v-model="form.filter">
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field is-2">
                  <label class="label">Condition</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="form.condition">
                        <option>And</option>
                        <option>Or</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-">
                <br>
                <div v-if="key==0">
                <a class="button is-success is-rounded" @click="addNewFormSearch()" >+</a>
                </div>
                <div v-else>
                   <a class="button is-danger is-rounded" @click="deleteFormSearch(key)">-</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        key: '',
        searchforms: [{
          column: '',
          logic: '',
          filter: '',
          condition: ''
        }],
      }
    },    
    methods: {      
      addNewFormSearch() {
        this.searchforms.push({
            column: '',
            logic: '',
            filter: '',
            condition: ''
          })
      },
      deleteFormSearch(key) {
        this.searchforms.splice(key, 1)
      }
    }
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
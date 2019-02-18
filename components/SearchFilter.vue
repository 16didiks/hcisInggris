<template>
  <div>
    <div class="box has-text-white has-background-danger">
      Search Filter
    </div>
    <div class="box">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Column</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Name</option>
                  <option>Religion</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Logic</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>Name</option>
                  <option>Religion</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Filter</label>
            <div class="control">
              <input class="input" type="text" placeholder="1">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Condition</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option disabled="disabled" selected="selected">Choose</option>
                  <option>AND</option>
                  <option>OR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="button is-primary is-rounded">Search</a>
    <a class="button is-danger is-rounded">Delete</a>
    <a class="button is-link is-rounded">Add</a>
  </div>

</template>

<script>
  export default {
    name: "SearchFilter",
    components: {

    },
    props: [
      'SearchFilter'
    ],
    data() {
      return {

      }
    },
  }
</script>

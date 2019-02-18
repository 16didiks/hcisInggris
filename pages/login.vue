<template>
  <div class="" style="background-image:url(assets/bghcis.jpg')">
    <div class="columns center">
      <div class="column is-3">
        <h2 class="title is-2">H C I S</h2>
        <form method="post" class="box" @submit.prevent="login">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" v-bind:class="{ 'is-danger': errs.nik }" v-model="nik" placeholder="Nik">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </p>
            <p v-if="errs.nik" class="help is-danger">{{ errs.nik[0] }}</p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" v-bind:class="{ 'is-danger': errs.password }" v-model="password" placeholder="Password">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </p>
            <p v-if="errs.password" class="help is-danger">{{ errs.password[0] }}</p>
          </div>
          <div class="field">
            <p class="control has-text-centered">
              <button type="submit" class="button is-small is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    middleware: 'guest',
    data() {
      return {
        nik: '',
        password: '',
        errs: []
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              nik: this.nik,
              password: this.password
            }
          });

          this.$router.push('/index');
        } catch (error) {
          this.errs = error.response.data.errors
        }
      }
    }
  }
</script>

<style>
  .center {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

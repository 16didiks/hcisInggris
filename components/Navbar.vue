<template>
  <nav class="navbar nav-backround" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="/img/hcis-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start is-active-navbar-color">
        <nuxt-link to="/" class="navbar-item has-text-white">
          Home
        </nuxt-link>

        <!-- <nuxt-link to="/penerimaan" class="navbar-item">
          Acceptance
        </nuxt-link> -->

        <!-- <nuxt-link to="/mutasi" class="navbar-item">
          Mutation
        </nuxt-link> -->

        <div class="navbar-item has-dropdown is-hoverable dropdown-color">
          <a class="navbar-link has-text-white">
            Organizational
          </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/organization/organization-manajement" class="navbar-item ">
              Management
            </nuxt-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable ">
          <a class="navbar-link has-text-white">
            Employee Data
          </a>
          <div class="navbar-dropdown">
            <nuxt-link to="/employee-data/address" class="navbar-item">
              Address
            </nuxt-link>

            <nuxt-link to="/employee-data/bank-account" class="navbar-item">
              Bank Account
            </nuxt-link>

            <nuxt-link to="/employee-data/basic-pay" class="navbar-item">
              Basic Remuneration
            </nuxt-link>

            <nuxt-link to="/employee-data/communication-social-media" class="navbar-item">
              Communication & Social Media
            </nuxt-link>

            <nuxt-link to="/employee-data/diffable" class="navbar-item">
              Disability
            </nuxt-link>

            <nuxt-link to="/employee-data/education" class="navbar-item">
              Education
            </nuxt-link>
            <nuxt-link to="/employee-data/employee" class="navbar-item">
              Employee
            </nuxt-link>

            <nuxt-link to="/employee-data/employee-identity" class="navbar-item">
              Employee Identity
            </nuxt-link>

            <nuxt-link to="/employee-data/basic-level" class="navbar-item">
              Employee Level
            </nuxt-link>

            <nuxt-link to="/employee-data/bpjs-kesehatan" class="navbar-item">
              Health Insurance
            </nuxt-link>

            <nuxt-link to="/employee-data/insurance" class="navbar-item">
              Insurance
            </nuxt-link>

            <nuxt-link to="/employee-data/bpjs-tenaga-kerja" class="navbar-item">
              Labor Insurance
            </nuxt-link>

            <nuxt-link to="/employee-data/organizational-assignment" class="navbar-item">
              Reference Data
            </nuxt-link>

            <nuxt-link to="/employee-data/tax" class="navbar-item">
              Tax
            </nuxt-link>

















            <!-- <a class="navbar-item">
              Award
            </a>

            <a class="navbar-item">
              Punish
            </a> -->
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-white">
            Competency
          </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/competency/competency" class="navbar-item">
              Competence
            </nuxt-link>
            <nuxt-link to="/competency/certification" class="navbar-item">
              Certification
            </nuxt-link>
          </div>
        </div>


        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-white">
            Family Data
          </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/family-data/family" class="navbar-item">
              Family
            </nuxt-link>

            <nuxt-link to="/family-data/family-address" class="navbar-item">
              Family Address
            </nuxt-link>

            <nuxt-link to="/family-data/family-identity" class="navbar-item">
              Family Identity
            </nuxt-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-white">
            Report
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Pencarian Dinamis
            </a>

          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-white">
            Upload
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item ">
              Upload Data
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link has-text-white">
            Admission
          </a>

          <div class="navbar-dropdown">
            <nuxt-link to="/admission/admission-personal" class="navbar-item">
              Personal
            </nuxt-link>

            <nuxt-link to="/admission/admission-assigment" class="navbar-item">
              Assigment
            </nuxt-link>

            <nuxt-link to="/admission/admission-basiclevel" class="navbar-item">
              Basic Level
            </nuxt-link>
            <nuxt-link to="/admission/admission-basicpay" class="navbar-item">
              Basic Pay
            </nuxt-link>

            <nuxt-link to="/admission/admission-tax" class="navbar-item">
              Tax
            </nuxt-link>

            <nuxt-link to="/admission/admission-bpjs" class="navbar-item">
              Bpjs
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="navbar-item" style="padding: 0">
        <figure class="image is-32x32">
          <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-white">
          Admin
        </a>
        <div class="navbar-dropdown is-boxed">
          <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
          <a class="navbar-item" @click="logout">Logout</a>
        </div>
      </div>
      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Logout</strong>
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
  export default {
    components: {

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
    methods: {
      async logout() {
        await this.$auth.logout();
        this.$router.push('/login')
      },
    }
  }
</script>

<style>
  .nav-backround {
    background-color: #CE1000;
  }

  .is-active-navbar-color a:hover {
    background-color: #b01003;
  }

  .navbar-item.has-dropdown:hover .navbar-link,
  .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #b01003;
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: #fffefe;
    margin-top: -0.375em;
    right: 1.125em;
  }

  .button.is-primary {
    background-color: #b01003;
    border-color: transparent;
    color: #fffefe;
  }
</style>

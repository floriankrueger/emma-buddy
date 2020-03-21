<template>
  <b-container fluid>
    <h1>Anmelden</h1>
    <p>Wenn du als Berater bei EMMA Buddy registriert bist, kannst du dich hier anmelden.</p>
    <p>
      <strong>Wichtig:</strong> Um unsere Berater kostenlos um Rat zu fragen, benötigst du bei uns keinen Account.
    </p>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-input-group prepend="E-Mail" class="mt-3">
          <b-form-input v-model="form.email"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Passwort" class="mt-3">
          <b-form-input type="password" v-model="form.password"></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Anmelden</b-button>
    </b-form>
  </b-container>
</template>
<script>
const fb = require("../firebaseConfig.js");
export default {
  name: "Login",
  data: () => {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      fb.auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(`login failed: ${errorCode} ${errorMessage}`)
        });
    }
  }
};
</script>


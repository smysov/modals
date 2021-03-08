<template>
  <modal @close="$emit('close')" title="Send form">
    <div slot="body">
      <form class="form" @submit.prevent="onSubmit">
        <div class="form__column" :class="{ errorInput: $v.name.$error }">
          <label for="name">Name:</label>
          <p class="errorText" v-if="!$v.name.required"> Filed is required!</p>
          <p class="errorText" v-if="!$v.name.minLength">
            Name must have at least {{ $v.name.$params.minLength.min }} !</p
          >
          <input
            id="name"
            v-model="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()"
          />
        </div>
        <div class="form__column" :class="{ errorInput: $v.email.$error }">
          <label for="email">Email:</label>
          <p class="errorText" v-if="!$v.email.required"> Filed is required!</p>
          <p class="errorText" v-if="!$v.email.email"> Email is not correct!</p>
          <input
            id="email"
            v-model="email"
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()"
          />
        </div>

        <div class="form__column" :class="{ errorInput: $v.password.$error }">
          <label for="password">Password:</label>
          <p class="errorText" v-if="!$v.password.required">Filed is required!</p>
          <p class="errorText" v-if="!$v.password.minLength">
            Password must have at least {{ $v.password.$params.minLength.min }} !</p
          >
          <input
            id="password"
            type="password"
            v-model="password"
            :class="{ error: $v.password.$error }"
            @change="$v.password.$touch()"
          />
        </div>

        <div class="form__column" :class="{ errorInput: $v.repeatPassword.$error }">
          <label for="repeatPassword">Confirm your password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword"
            >Passwords must be identical!</p
          >
          <input
            id="repeatPassword"
            type="password"
            v-model="repeatPassword"
            :class="{ error: $v.repeatPassword.$error }"
            @change="$v.repeatPassword.$touch()"
          />
        </div>
        <button class="form__button">Submit</button>
      </form>
    </div>
  </modal>
</template>

<script>
import {
  required,
  minLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators';
import modal from './UI/Modal.vue';

export default {
  components: { modal },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword,
        };
        console.log(user);
        this.name = '';
        this.email = '';
        this.password = '';
        this.repeatPassword = '';
        this.$v.$reset();
        this.$emit('close');
      }
    },
  },
};
</script>

<style lang="scss">
.form__column .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}

.form__column {
  &.errorInput .errorText {
    display: block;
  }
}

#name.error,
#email.error,
#password.error,
#repeatPassword.error {
  border-color: #de4040;
}
</style>

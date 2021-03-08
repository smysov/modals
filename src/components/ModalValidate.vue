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
        <button class="form__button">Submit</button>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
import modal from './UI/Modal.vue';

export default {
  components: { modal },
  data() {
    return {
      name: '',
      email: '',
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
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
        };
        console.log(user);
        this.name = '';
        this.email = '';
        this.$v.$reset();
        setTimeout(() => this.$emit('close'), 1000);
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
#email.error {
  border-color: #de4040;
}
</style>

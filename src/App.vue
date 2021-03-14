<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <div class="container">
        <section class="section">
          <!--first modal-->
          <button @click="showModal = !showModal" class="button">open first modal</button>
          <modal @close="showModal = false" v-show="showModal" title="First modal">
            <div slot="body">My first modal using a slot!</div>
          </modal>
          <!--first modal-->
          <button @click="modalForm.show = !modalForm.show" class="button"
            >open second modal</button
          >
          <modal
            @close="modalForm.show = false"
            v-show="modalForm.show"
            title="Send form"
          >
            <div slot="body">
              <form class="form" @submit.prevent="submitSecondForm">
                <div class="form__column">
                  <label for="name">Name:</label>
                  <input type="text" id="name" v-model="modalForm.name" />
                </div>
                <div class="form__column">
                  <label for="email">Email:</label>
                  <input type="text" id="email" v-model="modalForm.email" />
                </div>
                <button class="form__button">Submit</button>
              </form>
            </div>
          </modal>
          <button @click="modalValidate = !modalValidate" class="button"
            >open form validate modal</button
          >

          <transition name="modal">
            <modalValidate
              v-if="modalValidate"
              @close="modalValidate = false"
            ></modalValidate
          ></transition>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/components/UI/Modal.vue';
import modalValidate from '@/components/ModalValidate.vue';

export default {
  name: 'App',
  components: { modal, modalValidate },
  data() {
    return {
      showModal: false,
      modalForm: {
        show: false,
        name: '',
        email: '',
      },
      modalValidate: false,
    };
  },
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.showModal = false;
        this.modalForm.show = false;
      }
    });
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalForm.name,
        email: this.modalForm.email,
      });
      this.modalForm.name = '';
      this.modalForm.email = '';
      this.modalForm.show = false;
    },
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Georgia, 'Times New Roman', serif;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 700;
}

.button {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: transparent;
  border: 2px solid crimson;
  outline: none;
  border-radius: 15px;
  color: crimson;
  transition: 0.3s ease-in all;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    color: #9a1ee2;
    border-color: #9a1ee2;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
}

section,
.section {
  position: relative;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  padding: 20px 0;

  @media (min-width: 480px) {
    padding: 25px 0;
  }

  @media (min-width: 768px) {
    padding: 30px 0;
  }

  @media (min-width: 968px) {
    padding: 40px 0;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
}

.wrapper-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  flex: 0 0 auto;
  position: relative;
  max-width: 968px;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 480px) {
    max-width: 480px;
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 20px;
  }

  @media (min-width: 968px) {
    max-width: 968px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    row-gap: 18px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  &__button {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 3px 16px;
    align-self: center;
    color: #1e7c1e;
    background-color: transparent;
    border: 2px solid #1e7c1e;
    border-radius: 5px;
    outline: none;
    transition: 0.3s linear;
    cursor: pointer;

    &:focus {
      color: #74d874;
      border: 2px solid #74d874;
    }

    &:hover {
      color: #fff;
      border-color: #1e7c1e;
      background-color: #1e7c1e;
    }

    @media (min-width: 480px) {
      padding: 8px 20px;
    }
  }
}

label {
  font-size: 16px;
  color: #000;
}

input {
  font-size: 16px;
  font-weight: 500;
  padding: 5px 5px 5px 10px;
  border: 2px solid #d6d6d6;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #c7ebff;
  }

  &:hover {
    border-color: #c9c4ff;
  }

  @media (min-width: 480px) {
    font-size: 20px;
    padding: 7px 10px 7px;
  }

  @media (min-width: 768px) {
    padding: 10px;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: 0.3s all;
}
.modal-enter,
.modal-leave-to {
  transform: scale(1.3);
  opacity: 0;
}
</style>

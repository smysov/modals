<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <div class="container">
        <section class="section">
          <button @click="showModal = !showModal" class="button">open first modal</button>
          <modal @close="showModal = !showModal" v-if="showModal" :title="title"></modal>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/components/Modal.vue';

export default {
  name: 'App',
  components: { modal },
  data() {
    return {
      title: 'First modal',
      showModal: false,
    };
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
</style>

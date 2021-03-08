<template>
  <div class="modal" @click="$emit('close')">
    <div class="modal__content" @click.stop="">
      <h2 class="modal__title">{{ title }}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <button
        class="modal__close"
        aria-label="close modal"
        @click="$emit('close')"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => 'My modal',
    },
  },
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.$emit('close');
      }
    });
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 100;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    width: 80%;
    text-align: center;
    z-index: 101;
  }

  &__close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
    border: none;
    background-color: transparent;
    transition: 0.3s linear all;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    &:focus {
      outline-color: #ff2c5a;
    }

    &::before,
    &:after {
      content: '';
      position: absolute;
      top: 11px;
      right: 2px;
      width: 20px;
      height: 3px;
      background-color: crimson;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>

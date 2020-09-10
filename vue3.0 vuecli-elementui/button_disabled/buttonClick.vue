<template>
  <div>
    <button @click="eventBtn" :disabled="disabled">
      <slot name="buttonName"></slot>
    </button>
    disabled--{{disabled}}
  </div>
</template>

<script>
export default {
  props: {
    //类型
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      author: "Ellen",
    };
  },
  methods: {
    eventBtn() {
      console.log("disabled--", this.disabled);
      this.$emit("click", this.author);
    },
  },
};
</script>

<style >
</style>
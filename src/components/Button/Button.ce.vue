<template>
  <button type="button" :className="classes" @click="() => emit('click')" :style="{backgroundColor: props.backgroundColor}">{{ label }}</button>
</template>

<script lang="ts">
export default {
  name: 'wc-button',
};
</script>

<script setup lang="ts">import { ref } from 'vue';

const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
      default: 'medium'
    },
    backgroundColor: {
      type: String,
    },
  });
const emit = defineEmits(['click']);

const classes = ref(`storybook-button storybook-button--${props.primary ? "primary" : "secondary"} storybook-button--${props.size ?? "medium"}`);
</script>

<style scoped>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>

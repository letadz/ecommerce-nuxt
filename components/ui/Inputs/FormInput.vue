<script setup>
const props = defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});

const isNumber = (evt) => {
  if (props.type === "number") {
    evt = evt || window.event;
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      evt.preventDefault();
    } else {
      return true;
    }
  }
};

const onPaste = (evt) => {
  if (props.type === "number") {
    const data = evt.clipboardData.getData("Text");
    if (!isNaN(data)) {
      if (parseFloat(data) > 0) {
        return true;
      }
      return evt.preventDefault();
    }
    return evt.preventDefault();
  }
  return true;
};
</script>

<template>
  <input
    class="w-full px-3 py-2 border border-gray-300 rounded-md"
    :type="type"
    :value="modelValue"
    :name="name"
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    @paste="onPaste"
    @keypress="isNumber($event)"
  />
</template>

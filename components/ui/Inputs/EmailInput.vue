<script setup>
import FaIcon from "~/components/ui/FaIcon";

defineProps({
  value: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
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
    charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46
      ? evt.preventDefault()
      : true;
  }
};

const onPaste = (evt) => {
  if (props.type === "number") {
    const data = evt.clipboardData.getData("Text");
    if (!isNaN(data)) {
      parseFloat(data) > 0 || evt.preventDefault();
    }
    return evt.preventDefault();
  }
  return true;
};
</script>

<template>
  <div class="relative w-full">
    <input
      class="w-full border border-white bg-transparent rounded-md pr-8 py-2 px-4 text-sm focus:outline-none focus:outline-offset-0 focus:ring-0"
      v-bind="$attrs"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @paste="onPaste"
      @keypress="isNumber($event)"
    />

    <div role="button">
      <FaIcon
        icon="paper-plane"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4"
        spin
      />
    </div>
  </div>
</template>

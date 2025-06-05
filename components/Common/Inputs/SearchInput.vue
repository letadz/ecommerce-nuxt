<script setup>
import FaIcon from "~/components/Common/FaIcon";

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
  <div class="relative w-[16rem]">
    <input
      class="w-full pr-8 outline-none rounded-md py-2 px-4 bg-gray-100 text-sm focus:ring-2 focus:ring-gray-300"
      v-bind="$attrs"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      @paste="onPaste"
      @keypress="isNumber($event)"
    />
    <FaIcon
      icon="magnifying-glass"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4"
      spin
    />
  </div>
</template>

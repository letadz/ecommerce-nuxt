<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  inputIcon: {
    type: String,
    default: "",
  },
  isShowPassword: {
    type: Boolean,
    default: false,
  },
  inputIconClass: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  block: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const passwordIcon = ref("eye");
const inputType = ref("");

const isNumber = (evt) => {
  if (props.type !== "number") return;

  const charCode = evt.which || evt.keyCode;
  const isNumber = charCode >= 48 && charCode <= 57;
  const isDot = charCode === 46;
  const isControl = charCode <= 31;

  if (!isNumber && !isDot && !isControl) {
    evt.preventDefault();
  }
};

const onPaste = (evt) => {
  if (props.type !== "number") return;

  const pastedData = evt.clipboardData.getData("Text");
  const numericValue = parseFloat(pastedData);

  if (isNaN(numericValue) || numericValue <= 0) {
    evt.preventDefault();
  }
};

const showPassword = () => {
  const isHidden = passwordIcon.value === "eye";
  inputType.value = isHidden ? "text" : "password";
  passwordIcon.value = isHidden ? "eye-slash" : "eye";
};
</script>

<template>
  <div class="relative mt-1">
    <div class="flex items-center">
      <input
        class="w-full px-3 py-2 border border-gray-300 rounded-md"
        :class="[{ 'w-full': block }, { 'pr-10': isShowPassword }]"
        :type="inputType ? inputType : type"
        :value="modelValue"
        v-bind="$attrs"
        @paste="onPaste"
        @input="emit('update:modelValue', $event.target.value)"
        @keypress="isNumber"
      />
    </div>
    <div
      v-if="isShowPassword"
      class="flex absolute inset-y-0 right-0 items-center pr-2 cursor-pointer"
      @click="showPassword"
    >
      <CommonFaIcon
        :icon="passwordIcon"
        class="w-5 h-5 text-gray-500 dark:text-gray-400 mr-4"
        :class="inputIconClass"
      />
    </div>
  </div>
</template>

<!-- <style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style> -->

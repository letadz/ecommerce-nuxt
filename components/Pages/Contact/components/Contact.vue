<script setup>
import FormInput from "@/components/ui/Inputs/FormInput";
import Button from "@/components/ui/Button/ColoredButton";
</script>

<template>
  <div
    class="flex flex-col gap-4 md:gap-6 border shadow-lg rounded-lg p-6 bg-white w-full"
  >
    <div class="flex items-center gap-4">
      <FormInput type="text" name="name" placeholder="Enter your name" />
      <FormInput type="email" name="email" placeholder="Enter your email" />
      <FormInput
        type="text"
        name="phone"
        placeholder="Enter your phone number"
      />
    </div>

    <textarea
      name="message"
      placeholder="Enter your message"
      class="w-full h-32 p-2 border border-gray-300 rounded-md"
    />

    <Button variant="destructive" class="self-end"> Send Message </Button>
  </div>
</template>

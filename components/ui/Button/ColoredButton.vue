<script setup>
defineProps({
  variant: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 md:px-6 py-2 md:py-4',
      {
        'bg-primary text-white hover:bg-primary/90': variant === 'default',
        'bg-secondary text-black hover:bg-secondary/80':
          variant === 'secondary',
        'bg-destructive text-white hover:bg-destructive/90':
          variant === 'destructive',
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
          variant === 'outline',
      },
    ]"
  >
    <slot />
  </button>
</template>

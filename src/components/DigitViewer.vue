<template>

  <div class="rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="text-center font-bold text-9xl mb-2">{{ digit }}</div>
    </div> 
  </div>
 
</template>

<script>

export default {
  name: 'DigitViewer',
  props: {
    digit: String,
  }, 
}
</script>

<template>
  <div role="alert">
      <div class="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
        {{ header }}
      </div>
      <div class="border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
        <p>{{ message }}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ErrorPane',
  props: {
    header: String,
    message: String
  }
}
</script>

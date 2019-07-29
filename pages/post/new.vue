<template>
  <div>
    <p>new</p>
    <button
      type="button" 
      @click="start()" 
    >
      start!!
    </button>
    <button @click="stop()">
      stop!!
    </button>
    <audio v-if="audioData" controls :src="audioData" />
  </div>
</template>

<script>
import record from '~/utils/record'

export default {
  data: () => ({
    audioData: null
  }),
  methods: {
    start() {
      record.recStart()
    },
    async stop() {
      const res = await record.stopRecording()
      const url = URL.createObjectURL(res)
      this.audioData = url
    }
  }
}
</script>

<style>

</style>

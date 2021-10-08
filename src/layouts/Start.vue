<template>
  <div class="start bg-primary column justify-center items-center">
      <p class="text-h3 text-blue-1">Daily Covid-19 Status in Korea</p>
      <div class="btn-group">
          <q-btn class="bg-blue-1" color="primary" label="Get started" @click="start"/>
      </div>

  </div>
</template>

<script>

export default {
  name: 'Start',
  methods: {
    start () {
      this.$store.dispatch('getNationalCounter')
      setTimeout(() => {
        this.$router.push('/main')
      }, 2000)
    }
  }
}
</script>

<style>
.start {
    width: 100vw;
    height: 100vh;
}
</style>

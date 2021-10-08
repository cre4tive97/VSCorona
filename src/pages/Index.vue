<template>

  <div v-if="$store.state.sortedByCity.korea !== undefined" class="absolute-center column items-center">
    <div class="text-h3 text-weight-thin q-mb-lg">오늘 한국은...</div>
    <div>
      <div class="text-h5 text-weight-thin">신규 확진자 : {{ $store.state.sortedByKorea.newCase }}명</div>
      <div class="text-h5 text-weight-thin">전체 확진자 : {{ $store.state.sortedByKorea.totalCase }}명</div>
      <div class="text-h5 text-weight-thin">전체 완치자 : {{ $store.state.sortedByCity.korea.recovered }}명</div>
      <div class="text-h5 text-weight-thin">전체 사망자 : {{ $store.state.sortedByKorea.death }}명</div>
    </div>

</div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'PageIndex',
  setup () {
    const store = useStore()
    onMounted(() => {
      store.dispatch('getNationalCounter')
      store.dispatch('getSortedByCity')
    })

    return {
    }
  }
}

</script>
<style>
.container {
  height: 100%;
}
</style>

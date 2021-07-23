<template>
  <div class="position-fixed bottom-0 end-0 m-3 mb-4">
    <div id="mb" v-for="al in $store.state.alert" :key="al.id">
      <span class="alert alert-dismissible" :class="al.how">
        <strong>{{ al.strong }}</strong>
        <span>{{ al.msg }}</span>
        <button
          id="clsa"
          type="button"
          class="btn-close"
          @click="$store.commit(`deleteAlert`, al.id)"
        ></button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('newAlert', ['Привет,', 'ты на сайте Миши', 'success'])
  },
}
</script>

<style scoped>
#mb {
  margin-top: 40px;
  text-align: right;
  z-index: 5;
}
</style>

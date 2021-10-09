<template>
<h1>{{personalId}}</h1>
</template>

<script>
export default {
  name: "personal",
  data(){
    return{
      personalId : this.$route.params.id
    }

  }
}
</script>

<style scoped>

</style>

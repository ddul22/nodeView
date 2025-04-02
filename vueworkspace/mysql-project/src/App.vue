<template>
  <!-- Header Component-->
   <DefaultHeader/>
  <router-view/>
  <!-- Header Component-->
</template>
<script>
import DefaultHeader from './layouts/DefaultHeader.vue';

export default{
  components : {
    DefaultHeader,
  }
}
</script>


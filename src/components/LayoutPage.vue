<template>
  <div>
    {{blok.component}}
    <section v-for="item in blok.body" :key="item.id">
      <component :blok="item" :is="item.component"></component>
    </section>
  </div>
</template>

<script>
export default {
  name: "LayoutPage",
  props: {
    blok: {
      type: Object,
      default: ""
    }
  }
};
</script>

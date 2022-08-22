<template>
  <a-menu
    :style="{ width: '100%' }"
    :default-selected-keys="[openedMenu]"
    @menu-item-click="to"
  >
  <MenuItem v-for="route in routes" :key="route.path" :item="route" parent-path=""/>
  </a-menu>
</template>

<script>

import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue'
import MenuItem from './menu-item.vue'

export default {
  name: "nav-component",
  
  components: {
    MenuItem,
  },

  setup() {
    const $router = useRouter();
    // 路由
    const routes = computed(() =>  $router?.options?.routes.filter(i => !i.meta?.hidden));
    const to = key => $router.push(key);
    const fullPath = computed(() => (route, sub) => route.path + '/' + sub.path);

    const openedMenu = computed(() => $router.currentRoute.value.path);

    onMounted(() => {
      // setTimeout(() => {
      //   console.log($router.currentRoute.value.fullPath);
      // }, 2000)
    })
    return {
      routes,
      openedMenu,
      fullPath,
      to
    };
  },
};
</script>

<style>
</style>
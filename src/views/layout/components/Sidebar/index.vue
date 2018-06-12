<template>
  <sidebar-item :routes="permission_routers"></sidebar-item>
</template>

<script>
  import {mapGetters} from 'vuex';
  import SidebarItem from './SidebarItem';
  import ScrollBar from '@/components/ScrollBar';
  import {constantRouterMap} from '@/router';

  export default {
    data() {
      return {
        permission_routers: constantRouterMap
      };
    },
    components: {SidebarItem, ScrollBar},
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened;
      }
    }
  };
</script>

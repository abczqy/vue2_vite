<template>
  <div class="main_page">
    <div class="main_header">header</div>
    <div class="main_content">
      <div class="main_nav">
        <BasicNav />
      </div>
      <main class="main_container">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import BasicNav from './components/BasicNav.vue'

export default {
  name: 'BaseLayout',
  components: { BasicNav },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "@/styles/common.scss";
@import "@/styles/my-common.scss";
html,body{
  height:100%;
  width:100%;
  background-color: #fff;
}
</style>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.main_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  .main_header {
    height: 48px;
  }
  .main_content {
    flex: 1;
    max-height: calc(100% - 48px);
    display: flex;
    & > div {
      height: 100%;
    }
  }
  .main_nav {
    width: 80px;
  }
  .main_container {
    flex: 1;
  }
}
</style>

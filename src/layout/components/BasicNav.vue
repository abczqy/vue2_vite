<template>
  <div class="nav_container">
    <el-popover v-for="item in navList" :key="item.code" placement="right-start" trigger="hover" popper-class="main_nav_tooltip" :visible-arrow="false">
      <div class="nav_item_cont">
        <div v-for="nav in item.children" :key="nav.index" class="nav_item nav_item_inner" @click="go(nav.address)">{{ nav.name }}</div>
      </div>
      <div slot="reference" class="nav_item" :class="{ active: activeNav.indexOf(item.address) > -1 }">
        <div>{{ item.name }}</div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'BasicNav',
  data() {
    return {
      navList: [],
      activeNav: null
    }
  },
  mounted() {
    this.init()
    this.activeNav = this.$route.fullPath
  },
  methods: {
    init() {
      const navList = JSON.parse(sessionStorage.getItem('index_top_nav_list') || '[]')
      const res = sessionStorage.getItem('permission')
      const { applications } = JSON.parse(res)
      this.navList = navList.map((item) => {
        const { forms } = applications.find((ele) => ele.code === item.code)
        const choose = forms.filter((ele) => ele.isMenu === 1)
        const filterChildren = choose.map(({ formId, name, url, imgUrl, code }) => ({
          index: formId,
          icon: imgUrl,
          address: url.trim(),
          name,
          code
        }))
        item.children = filterChildren
        return item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_container {
  padding: 0 10px;
}
.nav_item {
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover,
  &.active {
    background: #f6f7f9;
  }
}
.nav_item_cont {
  overflow: hidden;
  width: 364px;
  padding: 4px 12px;
  display: flex;
  .nav_item_inner {
    width: 80px;
    height: 80px;
    float: left;
    &:hover,
    &.active {
      background: rgba(21, 101, 216, 0.1);
    }
  }
  &::after {
    content: '';
    clear: both;
  }
}
</style>

<style>
.main_nav_tooltip {
  transform: translate(-12px, 0);
}
</style>

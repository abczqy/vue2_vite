import Cookies from 'js-cookie'
import router from '@/router'
import { defineStore } from 'pinia'

export default defineStore({
  id: 'app',
  state: () => {
    return {
      sidebar: {
        opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : false,
        withoutAnimation: false
      },
      device: 'desktop',
      size: Cookies.get('size') || 'medium',
      // 首页页签
      worktab: {
        list: [], // 所有
        current: null // 当前
      },
      // 水系目录是否固定
      index_waltercatalogue_opened: Cookies.get('index_waltercatalogue_opened') ? !!+Cookies.get('index_waltercatalogue_opened') : false,
      // 控制站分类是否固定
      index_type_filter_opened: Cookies.get('index_type_filter_opened') ? !!+Cookies.get('index_type_filter_opened') : false
    }
  },
  actions: {
    toggleSideBar: () => {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false
      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
    },
    closeSideBar: ({ withoutAnimation }) => {
      Cookies.set('sidebarStatus', 0)
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    },
    toggleDevice: (device) => {
      this.device = device
    },
    setSize: (size) => {
      this.size = size
      Cookies.set('size', size)
    },
    worktabremove: (p) => {
      const cur_view_datalist = this.worktab.list
      // let ind = this.worktab.list.findindex(s => s.name === p)

      // 只有一个时不能关闭
      // console.log(cur_view_datalist.length);
      if (cur_view_datalist.length === 1) {
        alert('只有一个时不能关闭')
        return
      }

      let ind = -1
      let cur_item_index = -1
      // 查询是否存在
      for (let n = 0; n < cur_view_datalist.length; n++) {
        const cur_item = cur_view_datalist[n]
        if (cur_item.name === p) {
          ind = 1
          cur_item_index = n
          break
        }
      }
      if (ind > -1) {
        this.worktab.list.splice(cur_item_index, 1)
        if (p === this.worktab.current.name) {
        // 是当前页
          let cur_selected_item = null
          if (cur_item_index > 0) {
            cur_selected_item = this.worktab.list[cur_item_index - 1]
          } else {
            cur_selected_item = this.worktab.list[0]
          }
          const curPath = cur_selected_item.path
          // console.log(curPath)
          // router.back()
          router.push(curPath)
        }
      }
    },
    worktabroute: (p) => {
      // 添加标签
      const cur_view_datalist = this.worktab.list
      // console.log(cur_view_datalist);
      // console.log(p.to);
      let ind = -1
      let cur_item_index = -1
      // 查询是否存在
      for (let n = 0; n < cur_view_datalist.length; n++) {
        const cur_item = cur_view_datalist[n]
        if (cur_item.name === p.to.name) {
          ind = 1
          cur_item_index = n
          break
        }
      }
      if (ind > -1) {
        // 标签已存在
        this.worktab.current = cur_view_datalist[cur_item_index]
      } else {
        // 标签不存在
        this.worktab.list.push(p.to)
        this.worktab.current = p.to
      }
    },
    worktabclear: () => {
      this.worktab.list = []
    },
    index_waltercatalogue_opened: () => {
      this.index_waltercatalogue_opened = !this.index_waltercatalogue_opened
      if (this.index_waltercatalogue_opened) {
        Cookies.set('index_waltercatalogue_opened', 1)
      } else {
        Cookies.set('index_waltercatalogue_opened', 0)
      }
    },
    index_type_filter_opened: () => {
      this.index_type_filter_opened = !this.index_type_filter_opened
      if (this.index_type_filter_opened) {
        Cookies.set('index_type_filter_opened', 1)
      } else {
        Cookies.set('index_type_filter_opened', 0)
      }
    }
  }
})

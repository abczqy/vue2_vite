const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  meta: state => state.meta.metaInfo,
  isControl: state => state.control.isOnControl,

  worktab: state => state.app.worktab, // 首页页签
  // 首页水系展开状态
  index_waltercatalogue_opened: state => state.app.index_waltercatalogue_opened,
  // 控制站分类是否固定
  index_type_filter_opened: state => state.app.index_type_filter_opened
}
export default getters

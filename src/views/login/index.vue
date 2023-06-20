<template>
  <div>
    <el-input v-model="form.account" />
    <el-input v-model="form.password" show-password />
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
import CryptoData from '@/utils/crypto'
import { login } from '@/api/user'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        account: null,
        password: null
      },
      login_status: false
    }
  },
  methods: {
    login() {
      const info = {
        account: this.form.account,
        password: CryptoData.encrypt(this.form.password)
      }
      login(info).then(res => {
        if (res.success) {
          this.login_status = false
          const userInfos = res.data
          if (userInfos.roleInfo.applications.length === 0) {
            this.$message({
              message: '其他人员，无法登录!',
              type: 'warning'
            })
          } else {
            // this.$emit('loginSuccess', res)
            this.loginSuccess(res)
            // this.$emit("loginSuccess");
          }
          // this.$store.dispatch("app/worktabclear")
          // this.$router.push('/IntegratedDispatch')
        } else {
          // this.isPassing2 = false
          // this.login_status = false
          // this.$refs.sliderValidate.reset()
          // if (res.code == '090913') {
          //   this.$message({
          //     message: '不存在该用户!',
          //     type: 'warning'
          //   })
          // } else if (res.code == '090909') {
          //   this.$message({
          //     message: '账号或密码错误!',
          //     type: 'warning'
          //   })
          // } else {
          //   this.$message({
          //     message: '未知错误，请联系管理员!',
          //     type: 'warning'
          //   })
          // }
        }
      })
    },
    loginSuccess(res) {
      sessionStorage.setItem('user_name', res.data.name)
      sessionStorage.setItem('platformName', res.data.platformName)
      sessionStorage.setItem('token', res.data.token)
      sessionStorage.setItem('userInfo', JSON.stringify({ uName: res.data.name, uId: res.data.id }))
      sessionStorage.setItem('permission', JSON.stringify(res.data.roleInfo))
      // sessionStorage.setItem('user_function_list',JSON.stringify(this.set_user_functionlist(res.data.roleInfo)))
      sessionStorage.setItem('user_function_list', JSON.stringify(res.data.codes))
      // this.isPassing2 = false
      // 清空tab
      document.title = res.data.platformName
      console.log(document.title)
      if (res.data.isUpPassword === '1') {
        this.$router.push('/updatePass')
      } else {
        // this.$store.dispatch('app/worktabclear')

        let gotoUrl = ''
        const getAppList = res.data.roleInfo.applications.map((ele) => ({
          index: ele.applicationId,
          // address: ele.url,
          address: ele.forms[0].url,
          name: ele.applicationName,
          code: ele.code
        }))
        console.log(getAppList)
        // 清空为空导航
        const showNavList = getAppList.filter(item => item.address.trim() !== '')
        //  console.log(showNavList);
        sessionStorage.setItem('index_top_nav_list', JSON.stringify(showNavList))
        // 查询是否包含 综合调度code=dispatch
        const findHomeItem = showNavList.find(s => s.code === 'dispatch')
        if (typeof findHomeItem !== 'undefined') {
          gotoUrl = findHomeItem.address
        } else {
          // 默认选中第一个页签
          gotoUrl = showNavList[0].address
        }
        this.$router.push(gotoUrl)
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

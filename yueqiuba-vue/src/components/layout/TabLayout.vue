<template>
  <el-container class="container">
    <!--    头部 -->
    <el-header>
      <div style="height: 100%">
        <img style="height: 80%;margin-left: 10px" src="../../assets/ball2.png">
        <span>约球吧</span>
        <el-menu class="el-menu-demo" mode="horizontal" router default-active="/nearTheBallIndex">
          <el-menu-item index="/nearTheBallIndex" key="1">附近约球</el-menu-item>
          <el-menu-item index="/teamCompetitionIndex" key="2">球队竞赛</el-menu-item>
          <el-menu-item index="/peripheralMallIndex" key="3">周边商城</el-menu-item>
        </el-menu>
      </div>
      <div>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
<!--        <i class="el-icon-bell" style="margin-left: 20px"></i>-->
        <i class="el-icon-message-solid" style="margin-left: 20px"></i>
      </div>
    </el-header>
    <!--    主体-->
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'TabLayout'
}
</script>

<style lang="less"  scoped>

.el-header{
  background-color: #FFF;
  color: #333;
  line-height: 60px;
  display:flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: black;
  font-size: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  > div{
    display: flex;
    align-items: center;
    span{
      margin-left: 15px;
    }
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.el-main {
  /*background-color: #E9EEF3;*/
  /*color: #333;*/
  text-align: center;
  line-height: calc(100vh - 130px);
  margin-top: 40px;
}

.container {
  height: 100%;
}

/*.el-footer {*/
/*  background-color: #E4F5EF;*/
/*}*/
</style>

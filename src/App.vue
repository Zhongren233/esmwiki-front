<template>
  <div id="app">
    <el-container>
      <el-header>
        <div></div>
        <div>
          <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#7EBEA4" router>
            <el-menu-item index="home">主页</el-menu-item>
            <el-menu-item index="cards">卡片查询</el-menu-item>
            <el-menu-item index="workCostume">工作衣装查询</el-menu-item>
            <el-menu-item index="character">角色查询</el-menu-item>
            <el-menu-item index="info">关于</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <div class="main">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
.el-header {
  display: flex;
  justify-content: space-around;
}

.main {
  border-radius: 2%;
  padding-top: 25px;
  padding-left: 5%;
}
</style>

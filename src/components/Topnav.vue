<template>
  <div class="topNav">
    <nav>
      <div class="logo">
        <img src="../images/logo.png" alt="">
      </div>
      <div class="navList">
        <a>我的空间</a>
        <a>公共安全</a>
        <a>经济发展</a>
        <a>交通状况</a>
        <a>社会民生</a>
        <a>人居环境</a>
        <a>政务建设</a>
        <a>系统管理</a>
      </div>
    </nav>
  </div>
</template>
<style>
  .topNav{
    width: 100%;
    font-size: 16px;
    line-height: 40px;
    display: flex;
  }
  .topNav nav{
    width: 100%;
    display: flex;
  }
  .logo{
    display: inline-flex;
    width: 25%;
  }
  .logo p{
    display: inline-block;
    margin: 0;
  }
  .topNav a{
    width: 6%;
    display: inline-block;
  }
  .navList{
    display: flex;
    width: 75%;

  }
  .navList a{
    flex-grow: 1;
    background-color: skyblue;
    border-radius: 8px;
    margin-right: 4px;
  }
</style>
<script>
  export default {

  }
</script>








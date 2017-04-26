<template>
  <div class="controlList">
    <ul id="leftList">
      <li v-for="address in addresses">
        {{address.properties.name}}
      </li>
      <li></li>
      <!--<li>我的仪表盘</li>
      <li>我的消息</li>
      <li>
        <div>指标库管理</div>
        <ul>
          <li>指标查询</li>
          <li>指标应用</li>
          <li>年度指标管理</li>
          <li>自定义指标管理</li>
          <li>指标库管理</li>
          <li>事件空间管理</li>
        </ul>
      </li>
      <li>我的待办事项</li>
      <li>我的大屏</li>
      <li>个人信息</li>-->
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    name: 'controlList',
    data(){
      return{
        addresses:''
      }
    },
    mounted:function () {
      //this.getData();
      //var that = this;
      axios.get('/static/china.json')
        .then( (res) => {
          //console.log(res.data.features);
          //console.log(this);
          this.addresses = res.data.features;
          //console.log(addresses);

        })
        .catch(function (error) {
          console.log(error);
        });
      //console.log(this);
      //console.log(addresses);
    },

  }
</script>

<style>
  .controlList {
    width: 25%;
    background-color: red;
    height: 600px;
    display: inline-block;
    float: left;
  }

  .controlList ul {
    width: 100%;
    margin: 0;
    -webkit-padding-start: 0;
  }

  .controlList ul li {
    list-style: none;
    text-align: left;
    line-height: 50px;
  }
</style>



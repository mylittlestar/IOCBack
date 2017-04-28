<template>
  <div class="controlList">
    <ul id="leftList">
      <li v-for="address in addresses" v-on:click="getName">
        {{address.properties.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapGetters, mapActions, mapState } from 'vuex'
  export default{
    name: 'controlList',
    data(){
      return{
        addresses:''
      }
    },

    methods: mapActions([
      'getName'
      ]),

    /*左侧省份名*/
    mounted:function () {
      //所有的生命周期钩子自动绑定 this 上下文到实例中
      //this.getData();
      //this.getName;
      //var that = this;
      axios.get('/static/china.json')
        .then( (res) => {
          this.addresses = res.data.features;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  }
</script>

<style>
  .controlList {
    width: 25%;
    height: 600px;
    display: inline-block;
    float: left;
    overflow-y: scroll;
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
    background-color: aquamarine;
    margin: 5px 0;
    padding-left: 10px;
  }
  .controlList ul li:nth-of-type(1){
    margin-top: 0;
  }
</style>



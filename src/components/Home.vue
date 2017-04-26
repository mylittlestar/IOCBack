<template>
  <div class="home">
    <Topnav></Topnav>
    <ControlList></ControlList>
    <showfield></showfield>
  </div>
</template>

<script>
  import Topnav from './Topnav.vue';
  import ControlList from './ControlList.vue';
  import Showfield from './Showfield.vue';

  export default {
    name:'home',
    components: {
      Topnav,
      ControlList,
      Showfield
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    min-width: 1070px;
  }
</style>








<!--<template>
  <div>
    <Nav></Nav>
    <ControlList></ControlList>
    <Show></Show>
  </div>
</template>


<style></style>

<script>
  import Nav from './Topnav.vue';
  import ControlList from './ControlList.vue';
  import Show from 'Show.vue';

  export default {
    components: {
      Nav,
      ControlList,
      Show
    }
  }

</script>-->














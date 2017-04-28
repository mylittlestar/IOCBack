<template>
  <div class="showfield">
    <div id="main"></div>
  </div>
</template>

<style>
  .showfield {
    display: flex;
    width: 75%;
    height: 600px;
    background-color: green;
  }

  #main {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import axios from 'axios';
  import { mapState, mapGetters } from 'vuex'

  export default{
    name: 'showfield',
    data(){
      return {
        mapDetail: [],
        mapCenter: []
      }
    },
    computed: {
      ...mapState({
        mapDetail: state => state.province,
        mapCenter: state => state.cp
      }),

      changeMap: function () {
        var option;
        var that = this;
        //console.log(1111);
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option = {
          bmap: {
            center: that.mapCenter,
            zoom: 6,
            roam: true,
            mapStyle: {
              styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                  'color': '#f3f3f3'
                }
              }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                  'color': '#fdfdfd'
                }
              }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#fefefe'
                }
              }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                  'color': '#fefefe'
                }
              }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                  'color': '#fefefe'
                }
              }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                  'color': '#999999'
                }
              }]
            }
          },
          series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            data: that.mapDetail,
            polyline: true,
            lineStyle: {
              normal: {
                color: 'purple',
                opacity: 0.6,
                width: 1
              }
            }
          }]
        });
      }
    },
    mounted: function () {
      this.$store.dispatch({
        type:'getName'
      });
      this.changeMap();
    }
  }
</script>

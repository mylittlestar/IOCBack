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
  export default{
    name: 'showfield',
    data(){
      return {
        mapDetail: ''
      }
    },
    mounted: function () {
      var that = this;
      var myChart = echarts.init(document.getElementById('main'));
      axios.get('/static/china.json')
        .then( function(res) {
          //console.log(res);

          that.mapDetail = res.data.features;
          var province = (that.mapDetail)[0].geometry.coordinates;
          //console.log(that.mapDetail);
          /*var lines = that.mapDetail.map(function (track) {
            //console.log(track);
            return {
              coords: track.map(function (seg, idx) {
                /!*最后返回坐标点*!/
                return seg.coord;
              })
            };
          });*/
          //console.log(lines[0]);

          var option;
          myChart.setOption(option = {
            bmap: {
              center: [87.615177,43.823823],
              zoom: 14,
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
              data: province,
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
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

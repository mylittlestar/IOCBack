/**
 * Created by gb on 2017/4/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  province:[],
  cp:[],
  proviceName:''
};

const mutations = {
  getName(state, payload){
    state.province = payload.resLine;
    state.cp = payload.resPoint;
    state.proviceName = payload.Name;
  }
};

const getters = {

};

const actions = {
  getName({commit, state}, payload){
    axios.get('/static/china.json')
      .then( function(res) {
        var proviceName = payload.target.innerHTML;
        var mapDetail = res.data.features;
        var lines = [];
        var centerPoint = [];
        for(var i=0;i<mapDetail.length;i++){
          if(mapDetail[i].properties.name = proviceName){
            mapDetail =  mapDetail[i];

            //console.log(mapDetail);
            lines = mapDetail.geometry.coordinates;
            centerPoint = mapDetail.properties.cp;
          }
        }
        commit({
          type:'getName',
          resLine: lines,
          resPoint: centerPoint,
          Name: proviceName
        });
      })
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})




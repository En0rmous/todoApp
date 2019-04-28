import Vue from 'vue';
import Vuex from 'vuex';
import mainData from './data';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		data : []
	},
	getters: {
		data: state => {
			return state.data;
		}
	},
	mutations: {
		'SET_DATA'(state, data) {
			state.data = data;
		},
		'CLICK_DATA'(state, data) {
			console.log(data.finished);
			state.data.finished = !data.finished;
		},
		'ADD_DATA'(state,data) {
			state.data.push(data);
		}
	},
	actions: {
		initData: ({commit}) => {
			commit('SET_DATA', mainData);
		},
		clickData: ({commit}, data) => {
			commit('CLICK_DATA', data);
		},
		pushData: ({commit}, data) => {
			commit('ADD_DATA', data);
		}
	}
});


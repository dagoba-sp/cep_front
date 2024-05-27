import { createStore } from 'vuex';

export default createStore({
  state: {
    address: null,
    cep: ''
  },
  mutations: {
    setAddress(state, address) {
      state.address = address;
    },
    setCep(state, cep) {
      state.cep = cep;
    }
  },
  actions: {
    async fetchAddress({ commit }, cep) {
      const response = await fetch(`http://localhost/app/index.php?cep=${cep}`);
      const data = await response.json();
      if (data.erro) {
        commit('setAddress', null);
        alert('CEP não encontrado');
      } else {
        commit('setAddress', data);
      }
    }
  },
  getters: {
    address: state => state.address,
    cep: state => state.cep
  }
});

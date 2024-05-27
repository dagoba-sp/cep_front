<template>
  <div class="search">
    <h1>Pesquisar CEP</h1>
    <input type="text" v-model="cep" placeholder="Digite o CEP" @input="formatCep" />
    <button @click="searchCep">Pesquisar</button>
    <div v-if="address">
      <p><strong>Endereço:</strong> {{ address.logradouro }}</p>
      <p><strong>Bairro:</strong> {{ address.bairro }}</p>
      <p><strong>Cidade:</strong> {{ address.localidade }}</p>
      <p><strong>Estado:</strong> {{ address.uf }}</p>
    </div>
    <router-link to="/">
      <button>Voltar</button>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['cep', 'address'])
  },
  methods: {
    ...mapActions(['fetchAddress']),
    formatCep() {
      this.$store.commit('setCep', this.cep.replace(/\D/g, '')); 
    },
    searchCep() {
      if (this.cep.length === 8) {
        this.fetchAddress(this.cep);
      } else {
        alert('Por favor, insira um CEP válido');
      }
    }
  }
};
</script>

<style scoped>
.search {
  text-align: center;
}
input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>

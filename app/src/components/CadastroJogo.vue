<template>
  <div class="container">
    <div class="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <form id="gameForm" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="gameName">Nome do jogo:</label>
        <input type="text" id="gameName" v-model="gameName">
      </div>
      <div class="form-group">
        <label for="gameDate">Data:</label>
        <input type="date" id="gameDate" v-model="gameDate">
      </div>
      <div class="form-group">
        <label for="gamePrice">Valor do jogo por rodada:</label>
        <input type="number" id="gamePrice" v-model="gamePrice">
      </div>
      <div class="form-group">
        <label for="gameWeight">Peso do valor do jogo:</label>
        <input type="number" id="gameWeight" v-model="gameWeight">
      </div>
      <div class="form-group">
        <label for="gameDescription">Descrição:</label>
        <textarea id="gameDescription" v-model="gameDescription"></textarea>
      </div>
      <button type="submit">Cadastrar Jogo</button>
    </form>
  </div>
</template>

<script>
import { cadastrarJogo } from '@/services/apiService';

export default {
  data() {
    return {
      gameName: '',
      gameDate: '',
      gamePrice: '',
      gameWeight: '',
      gameDescription: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await cadastrarJogo({
          nome_do_jogo: this.gameName,
          data: this.gameDate,
          valor_por_rodada: this.gamePrice,
          peso_do_valor: this.gameWeight,
          descricao: this.gameDescription,
        });
        console.log('Jogo cadastrado com sucesso!');
        // Lógica adicional após cadastro (redirecionamento, atualização da lista, etc.)
      } catch (error) {
        console.error('Erro ao cadastrar jogo:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */

/* Estilos de logo, form-group, etc. conforme necessário */
</style>

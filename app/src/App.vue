<template>
  <div id="app">
    <!-- Se você estiver usando Vue Router, inclua o componente principal aqui -->
    <!-- Exemplo: <router-view></router-view> -->
    
    <!-- Barra de navegação (opcional) -->
    <nav>
      <!-- Conteúdo da barra de navegação -->
    </nav>

    <!-- Conteúdo principal da aplicação -->
    <main>
      <!-- Componente de cadastro de jogo -->
      <CadastroJogo />

      <!-- Componente de grid de resultados -->
      <GridResultados :jogos="jogos" />
    </main>

    <!-- Rodapé (opcional) -->
    <footer>
      <!-- Conteúdo do rodapé -->
    </footer>
  </div>
</template>

<script>
import CadastroJogo from './components/CadastroJogo.vue';
import GridResultados from './components/GridResultados.vue';
import { getJogos } from '@/services/apiService';
export default {
  components: {
    CadastroJogo,
    GridResultados,
  },
  data() {
    return {
      jogos: []
    };
  },
  created() {
    this.carregarJogos();
  },
  methods: {
    async carregarJogos() {
      try {
        const response = await getJogos();
        this.jogos = response;
      } catch (error) {
        console.error('Erro ao carregar jogos:', error);
      }
    }
  }
};
</script>

<style>
</style>

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

export default {
  components: {
    CadastroJogo,
    GridResultados,
  },
  data() {
    return {
      // Dados de exemplo para o componente GridResultados
      jogos: [
      {
        "id": 3,
        "nome_do_jogo": "Jogo de tênis",
        "data": "2024-04-10T03:00:00.000Z",
        "valor_por_rodada": "12.00",
        "peso_do_valor": "0.7",
        "pontos_da_rodada_jogada": 180,
        "descricao": "Partida de tênis entre profissionais"
    },
    {
        "id": 4,
        "nome_do_jogo": "Jogo de quiz",
        "data": "2024-04-11T03:00:00.000Z",
        "valor_por_rodada": "5.00",
        "peso_do_valor": "0.2",
        "pontos_da_rodada_jogada": 40,
        "descricao": "Concurso de conhecimentos gerais"
    },
    {
        "id": 5,
        "nome_do_jogo": "Jogo de futebol",
        "data": "2024-04-05T03:00:00.000Z",
        "valor_por_rodada": "10.00",
        "peso_do_valor": "0.5",
        "pontos_da_rodada_jogada": 100,
        "descricao": "Partida de futebol amistosa"
    },
    {
        "id": 6,
        "nome_do_jogo": "Jogo de cartas",
        "data": "2024-04-06T03:00:00.000Z",
        "valor_por_rodada": "5.00",
        "peso_do_valor": "0.3",
        "pontos_da_rodada_jogada": 50,
        "descricao": "Partida de cartas entre amigos"
    },
    {
        "id": 7,
        "nome_do_jogo": "Jogo de videogame",
        "data": "2024-04-07T03:00:00.000Z",
        "valor_por_rodada": "15.00",
        "peso_do_valor": "0.8",
        "pontos_da_rodada_jogada": 200,
        "descricao": "Competição de videogame entre equipes"
    },
    {
        "id": 1,
        "nome_do_jogo": "Jogo de Counter Strike Zero",
        "data": "2024-04-07T03:00:00.000Z",
        "valor_por_rodada": "15.00",
        "peso_do_valor": "0.8",
        "pontos_da_rodada_jogada": 0,
        "descricao": "Competição de Counter Strike Zero"
    },
    {
        "id": 8,
        "nome_do_jogo": "Jogo de Counter Strick",
        "data": "2024-04-07T03:00:00.000Z",
        "valor_por_rodada": "15.00",
        "peso_do_valor": "0.8",
        "pontos_da_rodada_jogada": 0,
        "descricao": "Competição de videogame entre equipes"
    }
      ],
    };
  },
};
</script>

<style>
</style>

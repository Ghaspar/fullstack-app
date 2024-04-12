<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Nome do jogo</th>
          <th>Codigo jogo</th>
          <th>Data</th>
          <th>Valor por rodada</th>
          <th>Peso do valor</th>
          <th>Pontos por rodada</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="jogo in jogos" :key="jogo.id">
          <td>{{ jogo.nome_do_jogo }}</td>
          <td>{{ jogo.id }}</td>
          <td>{{ jogo.data }}</td>
          <td>{{ jogo.valor_por_rodada }}</td>
          <td>{{ jogo.peso_do_valor }}</td>
          <td>{{ jogo.pontos_da_rodada_jogada }}</td>
          <td>{{ jogo.descricao }}</td>
          <td class="action-buttons">
            <button @click="editarJogo(jogo)">Editar</button>
            <button @click="excluirJogo(jogo.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getJogos, excluirJogo } from '@/services/apiService';

export default {
  props: ['jogos'],
  created() {
    this.carregarJogos();
  },
  methods: {
    async carregarJogos() {
      try {
        const response = await getJogos();
        this.$emit('atualizarJogos', response.data);
      } catch (error) {
        console.error('Erro ao carregar jogos:', error);
      }
    },
    editarJogo(jogo) {
      console.log('Editar jogo:', jogo);
      // Lógica de edição (abrir modal, redirecionar para página de edição, etc.)
    },
    async excluirJogo(id) {
      try {
        // Lógica para confirmar exclusão (modal, alerta, etc.)
        const confirmacao = confirm('Tem certeza que deseja excluir este jogo?');
        if (confirmacao) {
          // Chamar API para excluir jogo
          const response = await excluirJogo(id);
          console.log('Excluir jogo de código:', id);
          // Atualizar lista de jogos após exclusão
          this.$emit('jogoExcluido', response.data);
        }
      } catch (error) {
        console.error('Erro ao excluir jogo:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */

/* Estilos de tabela, th, td, etc. conforme necessário */
</style>

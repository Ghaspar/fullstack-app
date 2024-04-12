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
          <td>{{ formatarData(jogo.data) }}</td>
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
    <EditarJogoModal
      :jogo="jogoSelecionado"
      :visible="isModalVisible"
      @update:jogo="handleAtualizacaoJogo"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
import { getJogos, excluirJogo, editarJogo } from '@/services/apiService';
import EditarJogoModal from './EditarJogoModal.vue';
export default {
  props: ['jogos'],
  data() {
    return {
      isModalVisible: false,
      jogoSelecionado: null
    };
  },
  components: {
    EditarJogoModal
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
      this.jogoSelecionado = jogo;
      this.isModalVisible = true;
    },
    normalizarFloat(valor) {
      // Substitui vírgulas por pontos e remove caracteres não numéricos exceto o ponto
      const normalizado = String(valor).replace(',', '.').replace(/[^0-9.-]/g, '');
      return parseFloat(normalizado) || 0; 
    },
    async handleAtualizacaoJogo(jogoAtualizado) {
      // remove não numericos e substitui virgula por ponto para tratar input
      const dadosParaAtualizar = {
        ...jogoAtualizado,
        valor_por_rodada: this.normalizarFloat(jogoAtualizado.valor_por_rodada),
        peso_do_valor: this.normalizarFloat(jogoAtualizado.peso_do_valor)
      };
      try {
        console.log('Jogo atualizado:', dadosParaAtualizar);
        await editarJogo(dadosParaAtualizar.id, dadosParaAtualizar);
      } catch (error) {
        console.error(error)
      }
     
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
    formatarData(dataIso) {
      const data = new Date(dataIso);
      const dia = data.getDate().toString().padStart(2, '0');
      const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // getMonth retorna 0-11
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */

/* Estilos de tabela, th, td, etc. conforme necessário */
</style>

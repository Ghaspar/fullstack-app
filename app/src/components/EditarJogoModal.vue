<template>
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <h2>Editar Jogo</h2>
        <form @submit.prevent="submit">
          <label for="nome">Nome do Jogo:</label>
          <input id="nome" v-model="jogoEditando.nome_do_jogo" type="text">
  
          <label for="valor">Valor por Rodada:</label>
          <input id="valor" v-model="jogoEditando.valor_por_rodada" type="number">
  
          <label for="descricao">Descrição:</label>
          <textarea id="descricao" v-model="jogoEditando.descricao"></textarea>
  
          <button type="submit">Salvar Alterações</button>
          <button @click="cancelar">Cancelar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    props: ['jogo', 'visible'],
    data() {
      return {
        jogoEditando: {}
      };
    },
    watch: {
      jogo: {
        handler(newVal) {
          this.jogoEditando = { ...newVal };
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      submit() {
        this.$emit('update:jogo', this.jogoEditando);
        this.$emit('close');
      },
      cancelar() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 5px;
    }
  </style>
  
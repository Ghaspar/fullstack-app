// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

async function getJogos() {
    try {
        const response = await axios.get(`${API_BASE_URL}/jogo`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        throw error;
    }
}

async function cadastrarJogo(jogoData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/jogo`, jogoData);
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar jogo:', error);
        throw error;
    }
}

async function editarJogo(id, jogoData) {
    try {
        const response = await axios.put(`${API_BASE_URL}/jogo/${id}`, jogoData);
        return response.data;
    } catch (error) {
        console.error('Erro ao editar jogo:', error);
        throw error;
    }
}

async function excluirJogo(id) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/jogo/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao excluir jogo:', error);
        throw error;
    }
}

export { getJogos, cadastrarJogo, editarJogo, excluirJogo };

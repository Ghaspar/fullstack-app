CREATE TABLE jogo (
    id SERIAL PRIMARY KEY,
    nome_do_jogo VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor_por_rodada NUMERIC NOT NULL,
    peso_do_valor NUMERIC NOT NULL,
    pontos_da_rodada_jogada INTEGER NOT NULL,
    descricao TEXT
);


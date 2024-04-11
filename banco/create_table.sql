CREATE TABLE jogo (
    id_jogo SERIAL PRIMARY KEY,
    nome_do_jogo VARCHAR(255),
    data DATE,
    valor_por_rodada NUMERIC,
    peso_do_valor NUMERIC,
    pontos_da_rodada_jogada INTEGER,
    descricao TEXT
);

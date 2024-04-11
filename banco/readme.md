# Projeto de Banco de Dados PostgreSQL no Docker

Este projeto contém scripts e configurações para executar um banco de dados PostgreSQL em um contêiner Docker. Ele inclui a criação de uma tabela chamada "jogo" com alguns dados de exemplo.

## Pré-requisitos

Certifique-se de ter o Docker instalado no seu sistema antes de prosseguir.

## Instruções de Uso

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório onde os arquivos estão localizados.
3. Construa a imagem Docker usando o comando `docker build -t nome-da-sua-imagem-postgres .`.
4. Execute o container PostgreSQL usando o comando:

```bash
    docker run --name meu-postgres -p 5432:5432 -d nome-da-sua-imagem-postgres
```
Certifique-se de substituir `nome-da-sua-imagem-postgres` pelo nome da imagem que você construiu.
5. O PostgreSQL estará acessível na porta 5432 do seu localhost. Você pode usar uma ferramenta de administração de banco de dados, como o pgAdmin, para se conectar e gerenciar o banco de dados.

## Estrutura do Projeto

- `Dockerfile`: Define as instruções para construir a imagem Docker do PostgreSQL.
- `create_table.sql`: Contém o script SQL para criar a tabela "jogo" com algumas inserções de dados de exemplo.
- `README.md`: Este arquivo com instruções sobre como usar o projeto.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

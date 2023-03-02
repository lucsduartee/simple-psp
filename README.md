# Simple PSP
Este é um projeto base com [NestJS](https://nestjs.com/) e [Docker Compose](https://docs.docker.com/compose/) que permite subir uma aplicação em NestJS juntamente com um banco de dados PostgreSQL utilizando Docker Compose.
## Contexto
A ideia era construir uma versão super simplificada de um Payment Service Provider (PSP). Usei como inspiração um desafio técnico que pode ser encontrado [aqui](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend).

Em sua essência um PSP tem duas funções muito importantes:

- Permitir que nossos clientes processem transações ("cash-in").
- Efetuar os pagamentos dos recebíveis para os nossos clientes ("cash-out").

O serviço deveria ser criado com os seguintes requisitos:

1. Processar transações, recebendo as seguintes informações:
   - Valor da transação.
   - Descrição da transação.
   - Método de pagamento (debit_card ou credit_card)
   - Número do cartão
   - Nome do portador do cartão
   - Data de validade do cartão
   - Código de verificação do cartão (CVV)

2. Retornar uma lista das transações já criadas.

3. Armazenar e retornar os 4 últimos dígitos do cartão.

4. Criar os recebíveis do cliente (`payables`), com as seguintes regras:
   - Se a transação for feita com um cartão de débito:
      - O payable deve ser criado com status = `paid` (indicando que o cliente já recebeu esse valor).
      - O payable deve ser criado com a data de pagamento (payment_date) = data da criação da transação (D+0).
   - Se a transação for feita com um cartão de crédito:
      - O payable deve ser criado com status = `waiting_funds` (indicando que o cliente vai receber esse dinheiro no futuro).
      - O payable deve ser criado com a data de pagamento (payment_date) = data da criação da transação + 30 dias (D+30).

5. No momento de criação dos payables também deve ser descontado a taxa de processamento (que chamamos de `fee`) do cliente. Ex: se a taxa for 5% e o cliente processar uma transação de R$100,00, ele só receberá R$95,00. Considere as seguintes taxas:
   - 3% para transações feitas com um cartão de débito.
   - 5% para transações feitas com um cartão de crédito.

6. O serviço deve prover um meio de consulta para que o cliente visualize seu saldo com as seguintes informações:
   - Saldo `available` (disponível): tudo que o cliente já recebeu (payables `paid`)
   - Saldo `waiting_funds` (a receber): tudo que o cliente tem a receber (payables `waiting_funds`).
## Executando o projeto

Antes de começar, você precisa ter instalado em sua máquina:

### Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Após ter instalado os requisitos: 

1. Clone este repositório:

   ```bash
   git clone https://github.com/lucsduartee/simple-psp.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd simple-psp
   ```
3. Inicie a aplicação e o banco de dados com o Docker Compose:
   ```bash
   docker-compose up
   ```

A aplicação pode ser acessada em http://localhost:3000/api.

Quando terminar de usar a aplicação, pare e remova os containers do Docker Compose:
   ```bash
   docker-compose down
   ```

## Variáveis de ambiente
Este projeto utiliza variáveis de ambiente para configurar a conexão com o banco de dados. Você pode configurar as variáveis de ambiente no arquivo `.env`, que deve ser criado na raiz do projeto.

Exemplo de arquivo `.env`:

```bash
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_HOST=
DATABASE=
DATABASE_URL="postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE}"
PORT=
```

As variáveis DATABASE_HOST e DATABASE_PORT referem-se ao endereço e porta do banco de dados. As variáveis DATABASE_USER, DATABASE_PASSWORD e DATABASE são usadas para autenticar e selecionar o banco de dados.
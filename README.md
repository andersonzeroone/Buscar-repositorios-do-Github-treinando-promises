## Buscar repositorios do Github - treinando promises

O projeto foi criado com o intuito de ver na prática o funcionamento das promises e async. O projeto consiste no consumo da api do GitHub para buscar os repositórios do usuário informado assim como outras informações como: imagem, nome e cidade. Além disso, permite visitar os repositórios ou pagina do usuário através de um link.

### Execução:

Para executar o projeto basta inicializar o arquivo "index.hmtl".


### o que foi utilizado utilizado :

* Promises;
* XMLhttpRequest(Ajax);
* Api do Github.


Fonte:


### Promises
 A promise surgiu desde o 2015 no ES6, a promise é ulrilizada pelas principais requisições http como, axios,APiFetch entre outras. Facilemnte identificada pelas callback .then e .catch, o .then retorna sucesso na requisição e receber o resolve como parâmetro e o .catch para erros recebe o reject como parâmetro.

 ##  Estados de uma Promise

Uma promise pode pode assumir quatro estados principais:

* Pending: O estado inicial da Promise, ela foi iniciada mas ainda não foi realizada nem rejeitada;

* Fulfilled: Sucesso da operação, é o que chamamos de uma Promise realizada (ou, em inglês, resolved) — eu, pessoalmente, prefiro o termo resolvida;

* Rejected: Falha da operação, é o que chamamos de uma Promise rejeitada (em inglês, rejected);

* Settled: É o estado final da Promise, quando ela já sabe se foi resolved ou rejected.


![img](https://media.prod.mdn.mozit.cloud/attachments/2014/09/18/8633/51a934a714e191f53e588bff719bc321/promises.png)


## XMLhttpRequest

## Api do Github
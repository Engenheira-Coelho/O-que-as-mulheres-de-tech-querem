## Como está organizada a arquitetura do projeto

### Estrutura das pastas 

```shell
  O-QUE-AS-MULHERES-DE-TECH-QUEREM
  .
  ├── public
  ├── README.md
  ├── src
      ├── App.js
      ├── components
      └── general
          ├── images
          └── style
```

O projeto possui no primeiro nível de estrutura as pastas public, src e o arquivo README.md

* O código que você precisará modificar está na pasta `/src`. 
* Quando você enviar um novo PR que for aprovado, crie um PR para ser contribuidora no `README.md`.

```shell
  O-QUE-AS-MULHERES-DE-TECH-QUEREM
  .
  ├── public
  ├── README.md
  └── src
```


### Estrutura do código

Dentro da pasta `/src` é possível verificar a estrutura do código:  
  

**Diretório components**  

* Na pasta components estão os componentes react do projeto:. 
  * `header` é o cabeçalho.
  * `card` é cada um dos desenhos no corpo da página. 
  * `footer` é o rodapé.

```shell
  O-QUE-AS-MULHERES-DE-TECH-QUEREM
  .
  ├── src
      ├── App.js
      ├── components
      │   ├── card
      │   ├── footer
      │   └── header
      └── general
```

**Diretório general**  

* Na pasta general estão os componentes do projeto:
  * `images` contém as imagens que serão utilizadas para os cards.
  * `style` contém os estilos genéricos que serão usados em todo o projeto. É importante manter os estilos aqui pois o projeto está mudando constantemente e isso facilitará as mudanças futuras e implementações que ainda iremos realizar. 
  * `situations.json` é onde teremos as situações que serão descritas como sendo aquelas que as mulheres desejam que aconteça no mercado de trabalho. Confira o guia de como escrever as situações.

```shell
  O-QUE-AS-MULHERES-DE-TECH-QUEREM
  .
  ├── src
      ├── App.js
      ├── components
      └── general
          ├── images
          ├── style
          └── situations.json
```

**Arquivo principal**  

O arquivo `App.js` contém a execução principal do projeto, é onde são chamados os componentes que foram criados e estão na pasta:

```shell
  O-QUE-AS-MULHERES-DE-TECH-QUEREM
  .
  ├── src
      ├── App.js
      ├── components
      └── general
```

A lógica nessa página consiste em realizar a leitura do array de json que está no arquivo `/src/situations.json` e renderizar o componente `card` passando cada uma das situações. Assim, no final da execução haverá o número de componentes `card` será proporcional ao tamanho do array de situações. 

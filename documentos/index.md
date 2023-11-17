# <a href= "https://www.inteli.edu.br/"><img src="../imagens/logointeli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a> Instituto de Tecnologia e Liderança

# Nexus

## Pipeli

## :student: Integrantes

- <a href="https://www.linkedin.com/in/brunomleao/">Bruno Leão</a>
- <a href="https://www.linkedin.com/in/emely-tavares-3575ba24a/">Emely Tavares</a>
- <a href="https://www.linkedin.com/in/felipe-martins-moura-1bbb27157/">Felipe Moura</a>
- <a href="https://www.linkedin.com/in/marcelo-saadi-pessini-003212209/">Marcelo Saad</a>
- <a href="https://www.linkedin.com/in/vitor-santos-851408196/">Vitor Rodrigues</a>
- <a href="https://www.linkedin.com/in/yago-araújo-do-vale-moreira-461816247/">Yago Araújo</a>

## :teacher: Professores

### Orientador(a)

- <a href="https://www.linkedin.com/in/vanunes/">Vanessa Nunes</a>

### Instrutores

- <a href="https://www.linkedin.com/in/jose-romualdo/">Programação - José Romualdo</a>
- <a href="https://www.linkedin.com/in/seulogin/">Matemática e Física - Geraldo Vasconcelos</a>
- <a href="https://www.linkedin.com/in/seulogin/">Negócios - Lisane Valdo</a>
- <a href="https://www.linkedin.com/in/seulogin/">Design - Guilherme Henrique de Oliveira Cestari</a>
- <a href="https://www.linkedin.com/in/seulogin/">Liderança - Filipe Gonçalves</a>

## Conteúdo

**[1. Visão Geral do Projeto](#1-visão-geral-do-projeto)**

- [1.1. Parceiro de Negócios](#11-parceiro-de-negócios)
  - [1.1.1. Partes Interessadas](#111-partes-interessadas)
  - [1.1.2. Análise da Indústria](#112-análise-da-indústria)
  - [1.1.2.1. 5 Forças de Porter](#1121-5-forças-de-porter)
- [1.2. Problema](#12-problema)
  - [1.2.1. Análise do Problema](#121-análise-do-problema)
  - [1.2.2 Análise do cenário: Matriz SWOT](#122-análise-do-cenário-matriz-swot)
- [1.3. Descritivo da Solução](#13-descritivo-da-solução)
  - [1.3.1. Objetivos](#131-objetivos)
  - [1.3.2. Proposta de Valor: Value Proposition Canvas](#132-proposta-de-valor-value-proposition-canvas)
  - [1.3.3. Matriz de Risco](#133-matriz-de-risco)
- [1.4. Proposta Tecnológica e Benefícios](#14-proposta-tecnológica-e-benefícios)
  - [1.4.1. Tipo de arquitetura de nuvem escolhida](#141-tipo-de-arquitetura-de-nuvem-escolhida)
  - [1.4.2. Arquitetura de nuvem escolhida](#142-arquitetura-de-nuvem-escolhida)
  - [1.4.3. Benefícios trazidos pela arquitetura de nuvem proposta](#143-benefícios-trazidos-pela-arquitetura-de-nuvem-proposta)

**[2. Entendimento da Experiência do Usuário](#2-entendimento-da-experiência-do-usuário)**

- [2.1. Perfis de Usuários](#21-perfis-de-usuários)
  - [2.1.1. Personas](#211-personas)
- [2.2. Mapa de Jornada do Usuário](#22-mapa-de-jornada-do-usuário)
- [2.3. Wireframes](#23-wireframes)
- [2.3.1. Design System](#231-design-system)
- [2.3.2. Projeto e Implementação UX e UI](#232-projeto-e-implementação-ux-e-ui)
- [2.3.2.1 Design e Funcionalidade da Aplicação](#2321-design-e-funcionalidade-da-aplicação)
- [2.3.2.2 Wireframe e Design Inicial](#2322-wireframe-e-design-inicial)
- [2.3.2.3 Desenvolvimento Frontend](#2323-desenvolvimento-frontend)

**[3. Requisitos](#3-requisitos)**

- [3.1. Requisitos Funcionais](#31-requisitos-funcionais)
  - [3.1.1. Casos de Uso](#311-casos-de-uso)
  - [3.1.2. User Stories](#312-user-stories)
- [3.2. Requisitos não Funcionais](#32-requisitos-não-funcionais)

**[4.Tecnologias e Ferramentas Utilizadas](#4-tecnologias-e-ferramentas-utilizadas)**

- [4.1. Frontend](#41-frontend)
- [4.1.2 HTML](#412-html)
  - [4.1.3. CSS](#413-css)
  - [4.1.4 Typescript (Lado do Cliente)](#414-typescript-lado-do-cliente)
  - [4.1.5 React](#415-react)
  - [4.1.6 Vite](#416-vite)
- [4.2 Backend](#42-backend)
  - [4.2.1 Nest.JS](#421-nestjs)
  - [4.2.2 Typescript (Lado do Servidor)](#422-typescript-lado-do-servidor)
- [4.3 DevOps e Cloud](#43-devops-e-cloud)
  - [4.3.1 Docker](#431-docker)
  - [4.3.2 Amazon AWS](#432-amazon-aws)
  - [4.3.3 Amazon EC2](#433-amazon-ec2)
  - [4.3.4 Amazon RDS](#434-amazon-rds)
  - [4.3.5 GitHub](#435-github)

**[5.  Banco de Dados (SGBD, ORM, CRUD e Modelos)](#5-banco-de-dados-sgbd-orm-crud-e-modelos)**

  - [5.1 Sistem De Gerenciamento de Banco de Dados (SGBD)](#51-sistem-de-gerenciamento-de-banco-de-dados-sgbd)
  - [5.2 Object Relational Mapping (ORM)](#52-object-relational-mapping-orm)
  - [5.3 Create, Read, Update and Delete (CRUD)](#53-create-read-update-and-delete-crud)
  - [5.4 Modelo Conceitual](#54-modelo-conceitual)
    - [5.4.1 Entidades e suas respectivas descrições:](#541-entidades-e-suas-respectivas-descrições)
  - [5.5 Modelo Lógico](#55-modelo-lógico)
    - [5.5.1 Tabelas e suas respectivas descrições:](#551-tabelas-e-suas-respectivas-descrições)
  - [5.6 Comparação (Modelo Conceitual x Modelo Lógico)](#56-comparação-modelo-conceitual-x-modelo-lógico)
    - [5.6.1 Nível de abstração](#561-nível-de-abstração)
    - [5.6.2 Notação](#562-notação)
    - [5.6.3 Chaves Primárias](#563-chaves-primárias)
    - [5.6.4 Relações](#564-relações)
  - [5.7 Criação das Tabelas](#57-criação-das-tabelas)
  
**[6. Demonstração de Integração](#6-demonstração-de-integração)**

**[7. Arquitetura do Sistema](#7-arquitetura-do-sistema)**

  - [7.1 Diagrama de Implantação](#71-diagrama-de-implantação)
  - [7.2 Diagrama de Sequência](#72-diagrama-de-sequência)
  - [7.2.1 Alocar Iniciativas em um projeto:](#721-alocar-iniciativas-em-um-projeto)
  - [7.2.2 Login do Analista de Projeto:](#722-login-do-analista-de-projeto)
  - [7.2.3 Acessando Análise de Projetos:](#723-acessando-análise-de-projetos)
  - [7.2.4 Selecionando a Turma de Interesse:](#724-selecionando-a-turma-de-interesse)
  - [7.2.5 Alocando a Turma:](#725-alocando-a-turma)
  - [7.2.6 Cadastro de Iniciativas:](#726-cadastro-de-iniciativas)
  - [7.2.7 Login do Parceiro:](#727-login-do-parceiro)
  - [7.2.8 Preenchimento de Informações:](#728-preenchimento-de-informações)
  - [7.2.9 Cadastrando a Iniciativa:](#729-cadastrando-a-iniciativa)
  - [7.2.10 Cadastro de Parceiro:](#7210-cadastro-de-parceiro)
  - [7.2.11 Acessando o Cadastro:](#7211-acessando-o-cadastro)
  - [7.2.12 Preenchimento de Informações:](#7212-preenchimento-de-informações)
  - [7.2.13 Envio de Informações para Cadastro:](#7213-envio-de-informações-para-cadastro)


**[8. Testes De Integração](#8-testes-de-integração)**

  - [8.1 Teste de Integração - Cadastro de Parceiro](#81-teste-de-integração---cadastro-de-parceiro)
  - [8.2 Teste de Integração - Cadastro de Analista](#82-teste-de-integração---cadastro-de-analista)
  - [8.3 Teste de Integração - Cadastro de Iniciativa](#83-teste-de-integração---cadastro-de-iniciativa)


**[9. Testes de Requisitos Não Funcionais e Refatoração de Testes](#9-testes-de-requisitos-não-funcionais-e-refatoração-de-testes)**

  - [9.1 Requisito Não Funcional (rastreabilidade): Segurança dos dados sensíveis (ISO25010)](#91-requisito-não-funcional-rastreabilidade-segurança-dos-dados-sensíveis-iso25010)
  - [9.2 Requisito Não Funcional (tempo de resposta): Segurança dos dados sensíveis (ISO25010)](#92-requisito-não-funcional-tempo-de-resposta-segurança-dos-dados-sensíveis-iso25010)
  - [9.3 Requisito Não Funcional (rastreabilidade): Usabilidade para o público alvo (ISO25010)](#93-requisito-não-funcional-rastreabilidade-usabilidade-para-o-público-alvo-iso25010)
  - [9.4 Requisito Não Funcional (tempo de resposta): Endpoint "Alocation" Caso 1](#94-requisito-não-funcional-tempo-de-resposta-endpoint-alocation-caso-1)
  - [9.5 Requisito Não Funcional (tempo de resposta): Endpoint "Alocation" Caso 2](#95-requisito-não-funcional-tempo-de-resposta-endpoint-alocation-caso-2)


**[10. Processo de deploy (Descrição)](#10-processo-de-deploy-descrição)**

**[11. Procedimento de Deploy na AWS](#11-parceiro-de-negócios)**


**[12. Documentação da API](#12-documentação-da-api)**

**[Referências](#referências)**

**[Apêndice](#apêndice)**

# 1. Visão Geral do Projeto

## 1.1 Parceiro de Negócios

O INTELI é uma empresa de médio porte, com uma equipe multidisciplinar de profissionais altamente qualificados nas áreas de tecnologia, design, negócios e inovação. Atuando como uma instituição de ensino superior, tem como missão oferecer uma educação inovadora e voltada para o desenvolvimento de líderes e profissionais altamente qualificados. Sua abordagem pedagógica inclui a Aprendizagem Baseada em Projetos (PBL), visando proporcionar aos estudantes uma experiência de aprendizado prático e aplicado. No mercado de ensino superior e formação profissional, o INTELI se destaca por sua ênfase na inovação e na colaboração, preparando os estudantes para os desafios do mundo real. Seu posicionamento sólido é evidenciado por sua capacidade de formar profissionais capazes de contribuir efetivamente para as transformações no mercado de trabalho, destacando-se como uma instituição inovadora e diferenciada no campo educacional.

### 1.1.1 Partes Interessadas

Analistas do Escritório de Projetos (INTELI):

São responsáveis por gerenciar a plataforma, revisar as propostas de projetos, analisar a compatibilidade com os módulos e alocar as empresas aos projetos. Monitoram o progresso e garantem que os objetivos sejam alcançados.

Empresas Parceiras:

Propõem projetos colaborativos, interagem com os analistas de projetos para aprovação e alocação, colaboram com os estudantes durante as etapas do projeto e avaliam o desempenho e os resultados.

INTELI:

Fornecerá o contexto acadêmico, curricular e tecnológico necessário para a implementação da plataforma. Vai integrar a plataforma às práticas de aprendizado e coordenar a colaboração entre estudantes e empresas.

### 1.1.2 Análise da Indústria

O INTELI (Instituto de Tecnologia e Liderança), empresa fundada em 2020, é uma instituição de ensino superior sem fins lucrativos que utiliza um método de ensino baseado em projetos. A instituição foi fundada depois de uma doação de 200 milhões da família André Esteves junto ao BTG Pactual com o objetivo de formar jovens extremamente qualificados e resolver a questão da falta de mão de obra especializada em tecnologia no Brasil.

A indústria na qual o INTELI está inserido é a educação e a inovação tecnológica. Nesse cenário, a instituição de ensino tem a responsabilidade de preparar os estudantes para os desafios do mercado de trabalho em constante evolução, enquanto as empresas buscam novas maneiras de incorporar inovações e tecnologias avançadas em seus processos e produtos.

Como concorrentes não podemos citar nenhuma faculdade de tecnologia que aplique o modelo PBL (Project Based Learning), entretanto podemos citar a Link School Of Business, que utiliza o modelo PBL mas é uma faculdade focada em empreendedorismo. Como faculdades de tecnologia que não utilizam PBL podemos citar o INSPER (Instituto de Ensino e Pesquisa), Ensino Einsten, IME USP, FIAP (Faculdade de Informática e Administração Paulista)

### 1.1.2.1 5 Forças de Porter

As Cinco Forças de Porter, criadas por Michael E. Porter, servem como uma ferramenta crucial para analisar a dinâmica competitiva dentro de uma indústria. Esse modelo se baseia em cinco elementos: a rivalidade entre concorrentes, a ameaça de novos entrantes, o poder de barganha dos fornecedores, o poder de barganha dos clientes, e a ameaça de substitutos. Aplicando esse quadro ao Inteli, observamos um cenário promissor.

#### Rivalidade entre Concorrentes:
Inteli se distingue em um nicho específico, evidenciado pela falta de concorrentes diretos que integram negócios, tecnologia e liderança no âmbito do PBL (Problem-Based Learning). Concorrentes indiretos, como Einsten, Insper e FIAP, mantêm seu foco em tecnologia, enquanto a Link se destaca no empreendedorismo, sinalizando uma rivalidade limitada.

#### Poder de Negociação dos Fornecedores:
Os fornecedores cruciais para o Inteli, incluindo docentes e funcionários, empresas tecnológicas e doadores, exercem um poder de barganha moderado. A remuneração atrativa no setor educacional é contraposta pela atratividade do setor tecnológico para os profissionais. Além disso, enquanto as empresas de tecnologia veem valor nos graduados do Inteli, a escala de compras da instituição limita seu poder de influência.

#### Poder de Negociação dos Compradores:
Os alunos potenciais enfrentam um poder de barganha limitado devido à oferta restrita e à demanda elevada pelos programas de qualidade superior do Inteli.

#### Ameaça de Substitutos:
Cursos online e programas PBL focados em áreas diversas representam uma ameaça limitada, visto que a demanda pelo currículo especializado do Inteli supera amplamente a oferta existente.

#### Ameaça de Novos Concorrentes:
A barreira de entrada é elevada devido à reputação estabelecida do Inteli, seu currículo inovador e a demanda não atendida, desencorajando a entrada de novos concorrentes.

Essa análise detalhada das Cinco Forças de Porter revela que o Inteli está bem posicionado em um mercado caracterizado pela demanda robusta e oferta limitada, com barreiras significativas à entrada para potenciais concorrentes.


## 1.2 Problema

O desafio está na ausência de uma plataforma dedicada à gestão de parcerias entre empresas e estudantes para projetos colaborativos no formato PBL. Essa lacuna dificulta a coordenação, o monitoramento das propostas e a alocação dos projetos sugeridos aos módulos abertos do trimestre, considerando a ampla variedade de disciplinas e o aumento das turmas participantes. Atualmente, esses processos são conduzidos manualmente, utilizando planilhas.

**Oportunidade de Negócio:**

A oportunidade reside na criação de uma plataforma web de gestão de parcerias dedicada aos projetos PBL no INTELI. Essa plataforma tem o potencial de transformar a maneira como empresas e estudantes colaboram, permitindo uma seleção e alocação mais eficaz de projetos, monitoramento em tempo real do progresso e avaliação de resultados. Ao automatizar e otimizar esses processos, a plataforma pode oferecer um ambiente mais propício à inovação, promovendo o alinhamento entre os objetivos das empresas e os objetivos educacionais do INTELI.

Ao abordar esse problema e aproveitar a oportunidade de negócio, a plataforma de gestão de parcerias pode trazer benefícios significativos para ambas as partes envolvidas. As empresas terão acesso a projetos alinhados com suas áreas de interesse, permitindo colaborações mais produtivas e uma experiência de aprendizado realista para os estudantes. O INTELI, por sua vez, poderá oferecer uma educação mais prática e alinhada com as necessidades da indústria, reforçando sua reputação como uma instituição inovadora e proporcionando um diferencial competitivo.

### 1.2.1 Análise do Problema

Descreva os problemas identificados e as necessidades do usuário, bem como uma avaliação da situação atual e as possíveis soluções para cada questão. Além disso, identifique os obstáculos e limitações do projeto, a fim de assegurar que todas as preocupações sejam abordadas antes do início da implementação. A Análise do Problema é essencial para garantir que a solução do software seja eficaz e atenda às necessidades dos usuários. É importante que seja realizada uma pesquisa exaustiva e que todas as perspectivas sejam consideradas para garantir que a solução seja bem-sucedida.

### 1.2.2 Análise do cenário: Matriz SWOT

(figura 2: Matriz SWOT)

![Circle Infographic Diagram SWOT Analysis](https://github.com/2023M5T06-Inteli/Grupo-02/assets/110630427/3dfe29b8-2995-45db-b737-45e48e697dc9)

**fonte:** elaboração dos autores

Por meio da matriz SWOT podemos entender o cenário competitivo do mercado, auxiliando na tomada de decisões e planejamentos estratégicos.

## 1.3 Descritivo da Solução

**Problema a ser Resolvido**

Desde do início da operação, o escritório de projetos do INTELI utiliza de ferramentas artesanais para fazer o controle avançado de relacionamento com parceiros de mercado e também a seleção de iniciativas para a inserção no ano letivo. Um dos principais mecanismos utilizados é o Excel e email , que, após a expansão crescente da faculdade, não está sendo mais eficiente. A organização agora conta com mais de 100 parceiros e a alocação de cada um, por meio da planilha, fica inviável.

### 1.3.1 Objetivos

**Objetivo Geral:**

Desenvolver e implementar uma plataforma web em nuvem que otimize o gerenciamento centralizado das parcerias de projetos do escritório, aprimorando a colaboração entre empresas e estudantes, simplificando a aprovação de parceiros, facilitando a análise de compatibilidade dos projetos com os módulos e melhorando a gestão das etapas de seleção de parceiros. A plataforma deve garantir o cumprimento de prazos e objetivos, oferecendo uma visão abrangente de todas as partes envolvidas e proporcionando uma visão clara de cada parceria proposta em relação aos módulos disponíveis.

**Objetivos Específicos:**

- Desenvolver a Plataforma Web em Cloud:
Criar a infraestrutura técnica e a interface da plataforma web em um ambiente de nuvem, garantindo acessibilidade e escalabilidade.

- Otimizar o Gerenciamento Centralizado:
Implementar recursos que permitam aos analistas de projetos e coordenadores gerenciar as parcerias de forma centralizada, simplificando a administração.

- Facilitar a Aprovação de Parceiros:
Desenvolver um processo de aprovação de parceiros integrado à plataforma, agilizando a revisão e aprovação das propostas.

- Analisar a Compatibilidade com Módulos:
Criar algoritmos que analisem automaticamente a compatibilidade dos projetos propostos com os módulos abertos, facilitando a seleção.

- Gerir Etapas de Seleção de Parceiros:
Desenvolver um fluxo de trabalho que permita a gestão eficaz das etapas de seleção de parceiros, desde a submissão até a alocação.

- Oferecer Visão Clara das Partes Envolvidas:
Criar perfis de empresas e analistas de projetos, proporcionando uma visão clara das partes envolvidas em cada projeto.

- Proporcionar Panorama das Parcerias Propostas:
Desenvolver um painel de controle que mostre de forma visual as parcerias propostas em relação aos módulos disponíveis.

- Garantir Segurança de Dados e Privacidade:
Implementar medidas rigorosas de segurança para proteger os dados dos usuários e garantir a privacidade das informações.

### 1.3.2 Proposta de Valor: Value Proposition Canvas

(figura 4: Value Proposition Canvas)

<img src = "../imagens/VPC.jpg">

**fonte:** elaboração dos autores

Este Value Proposition Canvas destaca os principais elementos do projeto, incluindo os segmentos de cliente, as tarefas e necessidades dos clientes, a proposta de valor, os benefícios esperados para os parceiros e os principais entregáveis do projeto. Ele fornece uma visão clara das características e funcionalidades que a plataforma de gestão de projetos oferecerá para atender às necessidades dos clientes e atingir os objetivos do projeto.

### 1.3.3  Matriz de Risco

(figura 5: Matriz de Risco)

<img src = "../imagens/matriz-de-risco.png">

**fonte:** elaboração dos autores

Para garantir o sucesso de um projeto, é importante identificar e mitigar todos os riscos envolvidos no processo. No caso do projeto em questão, foram identificados alguns riscos. Abaixo, apresentamos maneiras de mitigar riscos mapeados:

- Risco 1: Obter com o parceiro(Escritório de Projetos) uma lista detalhada de requisitos de relatórios, especificando os dados necessários que deverão estar presentes em cada documento gerado.

- Risco 2: Escalar adequadamente os recursos de infraestrutura para lidar com picos de demanda e monitorar constantemente o desempenho da plataforma e realizar ajustes conforme necessário.

- Risco 3: Estabelecer critérios claros e objetivos para cada componente do ranqueamento e criar um processo de revisão para validar e ajustar os critérios de ranqueamento. Além disso, buscar obter com o parceiro(Escritório de Projetos) uma orientação detalhada sobre como atribuir valores e ponderações aos critérios de ranqueamento de potenciais empresas parceiras.

- Risco 4: Fornecer um guia claro e abrangente para o preenchimento do cadastro de metaprojetos, com exemplos e explicações. Realizar validações e verificações para garantir que as perguntas sejam claras e relevantes.

- Risco 5: Definir critérios claros e mensuráveis para avaliar o status de completude do projeto e implementar um sistema automatizado para coletar e calcular as informações necessárias para determinar o status.

## 1.4 Proposta Tecnológica e Benefícios

Esta seção aborda a descrição da arquitetura de nuvem escolhida para o projeto, os motivos que levaram à sua escolha e os benefícios que essa arquitetura trará para o projeto. Nesta seção, você encontrará informações sobre a arquitetura de nuvem adotada, sua justificativa e como ela se alinha com os requisitos do projeto, além dos benefícios específicos que essa arquitetura proporcionará, como segurança, alta disponibilidade, desempenho e flexibilidade.

### 1.4.1 Tipo de arquitetura de nuvem escolhida

A arquitetura de nuvem proposta para o projeto na AWS pode ser descrita como uma arquitetura de nuvem multicamadas com foco em segurança, alta disponibilidade e performance. Não há um único termo ou tipo específico que a descreva de forma exclusiva, pois essa arquitetura combina vários elementos e serviços da AWS para atender aos requisitos do nosso projeto.

No entanto, alguns termos que podem ser usados para descrever aspectos dessa arquitetura incluem:

1. **Arquitetura de Nuvem Multicamadas**: A arquitetura inclui várias camadas, como a camada de Load Balancer, as instâncias EC2, o armazenamento no S3 e o uso de uma VPC para isolamento. Essas camadas trabalham em conjunto para fornecer funcionalidades específicas.
2. **Arquitetura de Alta Disponibilidade**: O uso de Load Balancer e instâncias EC2 distribuídas em várias zonas de disponibilidade garante alta disponibilidade e redundância.
3. **Arquitetura Centrada em Segurança**: A ênfase na segurança, com o uso da VPC, grupos de segurança e controle de acesso, reflete uma arquitetura orientada para a segurança.
4. **Arquitetura Escalável**: A capacidade de escalabilidade é alcançada por meio da criação de instâncias EC2 que podem ser autoescaladas conforme a demanda.
5. **Arquitetura de Armazenamento Distribuído**: A utilização do Amazon S3 e do Amazon EBS para armazenamento de dados estáticos e dinâmicos contribui para a eficiência do armazenamento.

No geral, essa arquitetura combina elementos de várias abordagens para atender aos requisitos específicos do projeto, sendo uma arquitetura personalizada que incorpora as melhores práticas da AWS para segurança, alta disponibilidade e desempenho. Portanto, não há um único rótulo ou tipo que a defina completamente.

### 1.4.2 Arquitetura de nuvem escolhida

Para essa aplicação, utilizaremos a seguinte arquitetura AWS:

(figura 3: arquitetura AWS)

<img src ="../imagens/arq-nuvem.png">

**fonte:** elaboração dos autores

**Justificativa**

A arquitetura acima deve ser utilizada, pois garante que os pontos críticos da aplicação sejam cumpridos. São eles: segurança e performance.

- 1 - Segurança: com o uso da VPC (Virtual Private Cloud), a aplicação estará em uma nuvem privada que impedirá o acesso a dados sensíveis da aplicação, como: contatos e identificadores dos parceiros de mercado.

- 2 - Performance: A criação de duas instâncias EC2 (Elastic Compute Cloud), as quais podem ser auto escaladas conforme demanda, intensifica a performance da aplicação caso haja o uso intenso de persistência de dados.

**Como a Arquitetura Deve Ser Utilizada**

Para garantir o máximo proveito da arquitetura falada, os seguintes passos devem ser seguidos:

- 1. Criar uma Virtual Private Cloud (VPC) na AWS para isolar e gerenciar a infraestrutura da aplicação.

- 2. Configurar o Load Balancer para distribuir o tráfego de entrada entre as duas instâncias EC2, garantindo alta disponibilidade.

- 3. Criar duas instâncias EC2, conectadas à VPC, para hospedar a aplicação.

- 4. Conectar cada instância EC2 a um bucket no S3 para armazenar dados estáticos, como imagens e outros arquivos.

- 5. Conectar cada instância EC2 a um volume EBS para armazenar dados dinâmicos e bancos de dados necessários para o funcionamento da aplicação.

- 6. Implementar medidas de segurança, como grupos de segurança e controle de acesso, para proteger a VPC e os recursos.

### 1.4.3 Benefícios trazidos pela arquitetura de nuvem proposta

A utilização dessa modelagem garante que os requisitos do projeto sejam cumpridos, como: disponibilidade, performance, e segurança. Assim, podemos definir cada benefício desse alinhado com os componentes da arquitetura dessa seguinte forma:

- Alta Disponibilidade: Com o Load Balancer distribuindo o tráfego entre as instâncias EC2 e a redundância proporcionada pelo uso de múltiplas zonas de disponibilidade, a arquitetura garante alta disponibilidade do aplicativo. Caso uma instância apresente falha, o Load Balancer redirecionará as solicitações para instâncias saudáveis.
- Performance: A utilização de instâncias EC2 conectadas a um EBS e S3 permite armazenar e acessar dados de forma eficiente, resultando em uma melhora significativa no desempenho do aplicativo.
- Segurança: A configuração adequada de grupos de segurança e controle de acesso aos recursos da VPC garantem a segurança do ambiente. Além disso, a AWS oferece recursos de criptografia de dados em trânsito e em repouso para proteger os dados sensíveis.
- Flexibilidade: A arquitetura baseada na nuvem permite ajustar a infraestrutura conforme necessário, adicionando ou removendo instâncias EC2 e aumentando ou diminuindo o tamanho do EBS conforme a demanda do aplicativo.

# 2. Entendimento da Experiência do Usuário

Nesta seção, você encontrará informações detalhadas sobre os perfis de usuário (descrições dos diferentes tipos de usuários), suas respectivas personas (representações fictícias desses usuários), o mapa de jornada do usuário (uma representação visual da jornada completa do usuário ao interagir com o produto) e os wireframes (esboços da interface do produto) do projeto.

## 2.1. Perfis de Usuários

### 2.1.1 Personas

(figura 6: Persona - Analista)

<img src = "../imagens/Persona - Analista.png">

**fonte:** elaboração dos autores

(figura 7: Persona - Empresa)

<img src = "../imagens/Persona - Empresa (1).png">

**fonte:** elaboração dos autores

## 2.2 Mapa de Jornada do Usuário

(figura 8: Mapa de Jornada do Usuário - Analista)

<img src = "../imagens/jornada-usuario1.png">

**fonte:** elaboração dos autores

(figura 9: Mapa de Jornada do Usuário - Empresa)

<img src = "../imagens/jornada-usuario2.png">


**fonte:** elaboração dos autores

<a href='https://www.canva.com/design/DAFq-Ha7Z_4/wtaZ58aAHrYeqvZdP_j_og/edit?utm_content=DAFq-Ha7Z_4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'> Link para visualização no Canvas  </a>

## 2.3 Wireframes

Wireframes são esboços básicos que mostram a estrutura e layout de uma interface de usuário. São representações visuais simples, sem detalhes elaborados, criadas para traduzir requisitos e casos de uso em uma forma gráfica que destaca a disposição dos elementos e a navegação em um software. Essenciais para validar o arranjo dos elementos da interface de forma rápida e eficaz.

**Tela de cadastro de parceiros**

<img src = "../imagens/wireframe-cadastro-empresa.png">

Nessa tela teremos um formulário de cadastro para as empresas que querem se tornar parceiras.

**Tela inicial e cadastro de projetos**

<img src = "../imagens/wireframe-cad-iniciativa.png">

Seguindo o fluxo, após a confirmação de cadastro o parceiro consegue acessar a tela principal onde terá uma mensagem de boas-vindas mais uma solicitação para que cadastre seu primeiro projeto. Clicando em "Cadastrar Projeto" o parceiro vai para uma área destinada a essa funcionalidade. O dashboard comporta uma sidebar onde possui as áreas de navegação, além de uma área, na parte superior e canto direito, destinada as notificações e perfil do usuário, onde poderá fazer alterações:

**Tela de perfil**

<img src = "../imagens/wireframe-profile-empresa.png">

**Tela de visualização de projetos**

<img src = "../imagens/wireframe-projetos-empresa.png">

Após o cadastro do projeto ele ficará numa área específica chamada "Meus projetos", onde o parceiro conseguirá acompanhar seu status de análise, se foi aprovado ou não e o desenvolvimento, além de ter um campo para que possa deixar seu feedback ao final do projeto. 

**Tela de login e Tela inicial do analista**

<img src = "../imagens/wareframe-analist.png">

O Analista começa na tela de login para acessar sua conta e seguindo a sequência (de cima para baixo e esquerda para direita), temos o dashboard na tela principal que será composta por gráficos para uma melhor visualizção de todos os processos dentro da plataforma, podendo ser eles: o número de iniciativas para análise, a quantidade de módulos por ano, quantidade de turma e alunos por projeto, quantidade de parceiros com iniciativas ativas ou não. Na terceira tela temos uma ramificação com todos os cursos (Engenharia de Software, Ciências da Computação, Sistemas da Informação e Engenharia da computação) mais o primeiro ano, onde o analista pode ver os módulos existentes para cada curso, além de conter um filtro capaz de separar por turma, módulo ou ramo do projeto. A terceira tela é uma visualização de um módulo aberto. Todas as telas são compostar por uma sidebar que contém as ramificações do dashboard. Além disso, na parte superior e canto direito possui uma área destinada as notificações e perfil do usuário, onde poderá fazer alterações:

**Tela de perfil do analista**

<img src = "../imagens/wireframe-perfil-analist.png">

**Tela para análise de iniciativas**

![Alt text](../imagens/wireframe-proj-analist.png)

Seguindo para a parte de projetos, teremos uma tela própria para a visualização e análise das iniciativas enviadas pelos parceiros. Para analisar algum projeto basta clicar em cima dele e uma nova tela surgirá com todas as informaçoes e documentações, tanto da empresa quanto da iniciativa.

**Tela para visualização e criação de módulos**

![Alt text](../imagens/wireframe-create-modulos.png)

Na parte dos módulos temos uma visualização parecida com a de projetos, onde o analista consegue abrir o card e ver suas informações. Além disso ele tem a funcionalidade de criar um novo módulo clicando em "Novo Módulo", que o levará para uma parte de casdastro.


### 2.3.1 Design System

Um Design System pode ser definido como um repositório vivo, que contém uma coleção de componentes reutilizáveis e padronizados para um produto específico. Tem o objetivo de unificar a linguagem do produto, diminuir o retrabalho dos desenvolvedores e designers, até melhorar a padronização dos produtos, além de aprimorar a experiência de interação do usuário. Nesse projeto vamos desenvolver um estudo inicial de implementação de design system, com diretrizes claras e padronizadas, respeitando a marca do nosso parceiro e garantindo uma utilização flexível em diversos contextos. Baseado nisso segue nossa abordagem:

Clareza e Padronização das Telas e Informações: 

Cada tela foi projetada com um objetivo específico em mente. De forma que quando um usuário atinge aquela página ele saiba o que pode ser feito nela, como por exemplo no wireframe "cadastro de projetos" o parceiro vai saber que essa página é para fazer o cadastro de projetos.
Utilizaremos componentes consistentes com o dia-a-dia dos usuários para garantir o alinhamento dos elementos visuais em todas as páginas. Isto com o objetivo de melhorar facilitar a usabilidade da e eficiência da interação do usuário.

Mobilização e Incentivo à Colaboração através de Elementos Visuais:

Os botões de ação são destacados com cores vibrantes, guiando o usuário através de funções essenciais, como enviar propostas, recusar/aceitar projetos ou revisar o status do projeto.
Utilizamos ícones intuitivos ao lado das principais funções para facilitar o reconhecimento e acelerar a navegação.

Flexibilidade e adaptabilidade:
Com a necessidade de atender diferentes dispositivos de celulares, tablets e computadores, vamos criar páginas com layouts que se ajustam automaticamente a diferentes tamanhos de tela.
Elementos como menus suspensos e listas expansíveis foram implementados para otimizar o espaço na tela e adaptar-se a diferentes volumes de conteúdo.


Consistência com a marca do Parceiro:

Em cada elemento visual buscamos refletir a identidade da marca do nosso parceiro.
As cores escolhidas não só estão alinhadas com a marca do parceiro, mas também garantem legibilidade e acessibilidade. Além de ter sido escolhida a identidade visual já utilizada pelo parceiro que é o sistema de cards no site "Adalove".


### 2.3.2 Projeto e Implementação UX e UI


#### 2.3.2.1 Design e Funcionalidade da Aplicação

Com base no design inicial, o desenvolvimento frontend concentrou-se em trazer à vida as funcionalidades e características planejadas.

1. Botões e Menus Interativos: Os botões foram estilizados de acordo com o Design System, com feedback visual ao passar o cursor sobre eles. Menus suspensos foram implementados de forma a exibir as opções de maneira organizada e agradável.

2. Interação com Ícones: Ícones foram incorporados nos fluxos de forma a auxiliar na identificação rápida das ações. Ao clicar em uma iniciativa que tem um ícone de "Aprovado", por exemplo, uma tela é apresentada com um design coeso.

3. Responsividade e Acessibilidade: O desenvolvimento frontend garantiu que a aplicação se adaptasse perfeitamente a diferentes dispositivos e resoluções. A atenção à acessibilidade resultou em tamanhos de fonte legíveis, alto contraste e feedback de uso do sistema.

4. Passos para Tarefas: Os fluxos mapeados durante o design foram implementados, com passos claros apresentados de forma sequencial. Em um fluxo de inscrição, por exemplo, os usuários inserem dados em etapas distintas antes de finalizar o processo.

5. Validação e Feedback: A interface foi projetada para fornecer feedback imediato aos usuários. Se um campo obrigatório não for preenchido, uma mensagem de validação é exibida ao lado, orientando o usuário sobre o que é necessário.

6. Perfis de Usuário Diversificados: Considerando a variedade de usuários, como aqueles com habilidades limitadas, recursos diferentes ou necessidades especiais, foram implementadas alterações de layout que visam a acessibilidade, como alteração da disposição dos itens em telas diferentes ou quando o zoom for aumentado e diminuído.

A aplicação foi projetada e desenvolvida com uma abordagem centrada no usuário, tendo em mente a clareza, a acessibilidade e a facilidade de uso. Desde a concepção do wireframe até o desenvolvimento frontend, a intenção foi criar uma interface que atendesse às necessidades variadas dos usuários, proporcionando uma experiência consistente, intuitiva e agradável.
#### 2.3.2.2 Wireframe e Design Inicial:

Durante a fase de desenho do wireframe, o foco principal foi criar uma estrutura que fosse fácil de usar e intuitiva para os usuários. Cada elemento da interface foi cuidadosamente planejado para promover uma experiência positiva. Os principais princípios de design que orientaram essa fase foram a clareza, consistência e simplicidade.

**1. Navegação Simplificada:**
Foram delineados os principais fluxos de navegação, com menus bem definidos e categorizados. A barra de navegação lateral concentra-se nas áreas essenciais do sistema, com rótulos claros para indicar a função de cada seção.

**2. Ícones Intuitivos:**
Os ícones foram escolhidos com base em sua capacidade de serem facilmente compreendidos pelos usuários. Ícones padronizados do Design System foram usados para manter a consistência visual e facilitar o reconhecimento.

**3. Layout Responsivo:**
Desde o início, a preocupação com a acessibilidade foi incorporada ao design. O layout foi planejado para se adaptar a diferentes dispositivos e tamanhos de tela, garantindo uma experiência consistente em todos os contextos.

**4. Fluxos de Tarefas:**
Os fluxos de tarefas mais comuns foram mapeados para garantir que a jornada do usuário fosse otimizada. Os menus, elementos de input e cartões de formulário por exemplo, foram preenchidos com textos autoexplicativos que focam na garantia de compreensão de uso do sistema por parte dos usuários.

#### 2.3.2.3 Desenvolvimento Frontend

**No desenvolvimento do frontend da plataforma, foram utilizadas as seguintes tecnologias: React, Typescript, Tailwind CSS, CSS e HTML.**

**Telas Desenvolvidas e Fluxo de Navegação:**

1. **Tela de Login:**
   - Opções para inserir e-mail e senha para efetuar o login.
   - Opção de cadastro para novos usuários.
   - Fluxo de navegação: Tela de login -> Visão Geral (após autenticação).

2. **Tela de Cadastro:**
   - Formulário para preencher informações de novo usuário.
   - Opção para criar uma conta após preencher os campos.
   - Fluxo de navegação: Tela de Cadastro -> Tela de Login (após o cadastro ser bem-sucedido).

3. **Tela de Visão Geral:**
   - Visão geral das atividades e projetos do usuário.
   - Fluxo de navegação: Visão Geral -> Tela de Cursos (clicando em um curso).

4. **Tela de Cursos:**
   - Lista de projetos alocados em cursos específicos.
   - Botão para visualizar os detalhes do projeto alocado.
   - Fluxo de navegação: Tela de Cursos -> Tela de Detalhes do Projeto (clicando em um projeto).

5. **Tela de Detalhes do Projeto:**
   - Detalhes completos de um projeto específico.
   - Informações sobre o projeto, suas partes envolvidas e status.
   - Fluxo de navegação: Tela de Detalhes do Projeto -> Tela de Cursos (botão de retorno).

6. **Tela de Iniciativas:**
   - Conjunto de iniciativas com status de Aprovado, Para Análise ou Negado.
   - Fluxo de navegação: Tela de Iniciativas -> Tela de Detalhes da Iniciativa (clicando em uma iniciativa).

7. **Tela de Detalhes da Iniciativa:**
   - Detalhes da iniciativa enviada pelo parceiro que será analisada.
   - Informações sobre a iniciativa, envolvidos e status.
   - Fluxo de navegação: Tela de Detalhes da Iniciativa -> Tela de Iniciativas (botão de retorno).

8. **Tela de Alocação:**
   - Tela onde os analistas de projetos podem alocar iniciativas aprovadas.
   - Lista de iniciativas alocadas e opção para confirmar alocação.
   - Fluxo de navegação: Tela de Alocação -> Tela de Detalhes da Iniciativa (clicando em uma iniciativa alocada).

**Observações sobre a Implementação:**

- Para melhorar a usabilidade, a tela de Cadastro foi projetada de forma a orientar os usuários passo a passo, destacando os campos obrigatórios e fornecendo feedback imediato em caso de erro.
- As telas de Detalhes do Projeto e Detalhes da Iniciativa foram enriquecidas com seções adicionais para exibir mais informações relevantes.
- Em relação ao protótipo de baixa fidelidade, foi necessária uma reorganização dos elementos nas telas de Cursos e Iniciativas para tornar a informação mais visível, especialmente quando há muitos itens.
- Na tela de Alocação, um sistema de arrastar e soltar foi implementado para facilitar a alocação de iniciativas aos projetos.
- A tela de Alocação também inclui botões de ação claros para confirmar alocação ou cancelar ação.

**Resumo:**

O fluxo de navegação conecta todas as telas de forma coesa, permitindo aos usuários explorar projetos, iniciativas, detalhes e fazer alocações conforme necessário. Mudanças e ajustes foram feitos durante a implementação para melhorar a usabilidade e a visibilidade das informações. A atenção às interações do usuário e às diferentes etapas do processo resultou em uma experiência consistente e intuitiva, que atende às necessidades do projeto e dos usuários. O design das telas reflete o design inicial e mantém os princípios de usabilidade e acessibilidade em foco.

# 3. Requisitos

Os requisitos são a base que define o que o software deve fazer e como ele deve funcionar, tanto em termos de funcionalidades específicas quanto de características gerais. Eles são essenciais para orientar o desenvolvimento e garantir que o software atenda às necessidades e expectativas dos usuários finais. Nesta seção serão encontrados:

- Requisitos Funcionais que descrevem o que o software deve fazer, como criar, editar e visualizar projetos de parceria, entre outras funcionalidades específicas na solução proposta.
- Requisitos Não Funcionais que definem qualidades importantes, como rapidez de resposta, facilidade de uso, segurança dos dados e capacidade de lidar com muitos usuários simultaneamente, garantindo uma boa experiência para os usuários finais. Estes requisitos não estão diretamente relacionados às funcionalidades, mas são cruciais para o desempenho e qualidade do sistema.
- Casos de Uso que ajudam a entender como o sistema será usado na prática, auxiliando no projeto, desenvolvimento e teste do software.

## 3.1 Requisitos Funcionais

**Requisito Funcional 1:** Cadastro de iniciativas

Descrição:

A funcionalidade para cadastrar iniciativas permite que os parceiros proponham uma iniciativa, a ser avaliada pelo Analista de Projeto. Este decidirá se ela será implementada para uma turma específica.


Descrição de Testes:

Pré-condição:

- O parceiro deve estar cadastrado e logado na plataforma.
- Conexão com o banco de dados ativa.

Procedimento de teste:

  1. Acessar o diretório raiz do sistema.
  2. Realizar login com credenciais de parceiro; se não estiver registrado, selecione “Cadastrar-se como parceiro”.
  3. Após o login, o parceiro é redirecionado para home.
  4. O parceiro clica em “Enviar Ideia de Iniciativa”.
  5. O parceiro preenche o formulário na página de registro e clica em "Cadastrar Iniciativa".


Resultado esperado:

  - Os dados do formulário são processados e validados.
  - A iniciativa é registrada no banco de dados ou, se houver erro, mensagens específicas serão exibidas.


Pós-condição:

  - As informações da iniciativa são armazenadas para análise.
  - Os administradores podem revisar e modificar as informações conforme necessário.

**Requisito Funcional 2:** Alocação de iniciativas para um módulo
​​Descrição:

A funcionalidade se refere à criação de uma tela especializada, que seria uma lista em formatos de card de iniciativas , dentro da interface principal do sistema. Esta tela é projetada especificamente para possibilitar a alocação eficaz de iniciativas a um módulo em particular. A alocação é realizada com base em critérios de compatibilidade entre as informações da iniciativa e o escopo do módulo, assegurando que apenas iniciativas compatíveis sejam vinculadas aos módulos correspondentes. A verificação de compatibilidade é realizada ao comparar detalhadamente o escopo da iniciativa fornecido pelo parceiro com os requisitos e especificidades de cada módulo.


Descrição de Testes:

Pré-condição:

  - O analista de projetos deve estar cadastrado e logado na plataforma.
  - Conexão com o banco de dados ativa.

Procedimento de teste:

Acesse o dashboard de alocação de parceiros.

1. Acesse o dashboard principal e navegue até o painel de iniciativas.
2. Observe a lista de módulos disponíveis para alocação.
3. Selecione uma iniciativa específica que você deseja alocar.
4. Analise minuciosamente as informações da iniciativa, considerando aspectos como escopo e segmento de atuação, para determinar a compatibilidade com o módulo selecionado.
5. Clique no botão "Atualizar".


Resultado esperado:

- A tela deve ser carregada sem quaisquer erros ou interrupções.
- Feedback visual sobre o sucesso da tarefa
- O módulo selecionado para alocação deve ser atualizado com as informações pertinentes da iniciativa e dos detalhes do parceiro associado.

Pós-condição:

- O sistema registra a alocação no projeto selecionado.
- O módulo alvo foi atualizado com sucesso, refletindo as informações da iniciativa escolhida e dos detalhes do parceiro.

**Requisito Funcional 3:** Atribuição de Rating para Iniciativas

​Descrição:

Esta funcionalidade introduz uma tela para atribuir ratings às iniciativas, baseando-se nos critérios estabelecidos pelo escritório de projetos. As notas vão de 0 (Indicativo Zero) a 5 (Impacto Alto), facilitando a análise do ajuste da iniciativa ao módulo pertinente.

Descrição de Testes:

Pré-condição:

- Iniciativas cadastradas associadas a um módulo.
- Conexão com banco de dados ativa.

Procedimento de teste:

  1. Realizar login como “Analista de Projetos” ou se registrar, se necessário.
  2. Clicar em “Iniciativas” para visualizar todas as propostas.
  3. Selecionar uma iniciativa e analisar as informações detalhadas.
  4. Atribuir um rating baseado nos critérios estabelecidos.
  5. Clicar em “Atualizar Iniciativas”.

Resultado esperado:

 - Uma mensagem pop-up confirma a atualização bem-sucedida.
 - A requisição PATH retorna o status 200.
 - As informações da iniciativa são atualizadas com sucesso no banco de dados.


Pós-condição:

 - O rating da iniciativa é registrado e armazenado.
- O sistema continua operando de maneira eficiente e eficaz.


### 3.1.1 Casos de Uso

### Casos de Uso com Atores

(figura 10: Casos de uso)

![Alt text](../imagens/caso-uml2.jpeg)

**fonte:** elaboração dos autores


Nesses casos de uso, todos os balões fazem referência aos requisitos funcionais que estão em contato com os atores do sistema, sendo eles:

**Cadastrar Novo Módulo:**

Descrição: Um analista de projetos pode cadastrar um novo módulo na plataforma, inserindo informações como título, descrição, requisitos, atividades e objetivos.

Entradas de Dados: Informações do módulo.

Ações do Usuário: O analista preenche os campos do formulário de cadastro.

Resultados Esperados: O módulo é registrado na plataforma com todas as informações inseridas.

Critérios de Aceitação: O módulo é exibido na lista de módulo cadastrados com os detalhes corretos.

**Cadastrar Empresa:**

Descrição: Empresas interessadas em participar de projetos podem se cadastrar na plataforma, fornecendo informações relevantes.

Entradas de Dados: Dados da empresa (nome, setor, área de atuação, etc.).

Ações do Usuário: Representante da empresa preenche o formulário de cadastro.

Resultados Esperados: A empresa é registrada na plataforma com as informações fornecidas.

Critérios de Aceitação: A empresa é exibida na lista de empresas cadastradas com os detalhes corretos.

**Cadastrar Novo Projeto:**

Descrição: Uma empresa parceira pode cadastrar uma nova iniciativa na plataforma, inserindo informações como título, descrição, requisitos e objetivos.

Entradas de Dados: Informações da iniciativa.

Ações do Usuário: A empresa preenche os campos do formulário de cadastro.

Resultados Esperados: A iniciativa é registrada na plataforma com todas as informações inseridas.

Critérios de Aceitação: A iniciativa é exibido na lista de iniciativas cadastradas com os detalhes corretos.

**Aprovar Proposta de Projeto:**

Descrição: Um analista de projetos recebe propostas de empresas e pode revisar e aprovar ou rejeitar cada proposta.

Entradas de Dados: Proposta de projeto.

Ações do Usuário: O analista avalia a proposta, podendo aprovar ou rejeitar com feedback.

Resultados Esperados: A proposta é marcada como aprovada ou rejeitada, com feedback se aplicável.

Critérios de Aceitação: A proposta é atualizada com o status correto e o feedback é registrado se rejeitada.

**Alocar Empresa a Projeto:**

Descrição: O analista de projetos alocará uma empresa a um projeto compatível com suas áreas de interesse.

Entradas de Dados: Projeto selecionado, empresa selecionada.

Ações do Usuário: O analista seleciona a empresa e o projeto, realiza a alocação.

Resultados Esperados: A empresa é alocada ao projeto e as informações são atualizadas na plataforma.

Critérios de Aceitação: A empresa é vinculada ao projeto escolhido e a alocação é feita corretamente.

**Acompanhar Progresso do Projeto:**

Descrição: Empresas e analistas podem acompanhar o progresso do projeto, visualizando etapas concluídas e pendentes.

Entradas de Dados: Projeto selecionado.

Ações do Usuário: O usuário acessa o painel de controle do projeto.

Resultados Esperados: O progresso do projeto é exibido com clareza, mostrando as etapas concluídas e as pendentes.

Critérios de Aceitação: As etapas são mostradas de forma precisa e o progresso é atualizado conforme as atividades são realizadas.

**Avaliar Desempenho do Projeto:**

Descrição: Empresas podem avaliar o desempenho do projeto ao final, fornecendo feedback e avaliações.

Entradas de Dados: Avaliação do projeto.

Ações do Usuário: A empresa fornece feedback e avaliações em diferentes critérios.

Resultados Esperados: A avaliação é registrada e pode ser visualizada pelo analista e pela instituição.

Critérios de Aceitação: A avaliação é registrada e as informações estão disponíveis para análise.


### Casos de Uso Independentes 

(figura 11: Casos de uso)

![Alt text](../imagens/caso-uso-indep.png)

**fonte:** elaboração dos autores


Nesse esquema, há somente os requisitos não funcionais que aconteceram sem a necessidade de atuação dos atores.


### 3.1.2 User Stories
As User Stories são uma técnica essencial no desenvolvimento de software ágil, projetada para capturar os requisitos e as funcionalidades do ponto de vista do usuário. Elas são uma maneira eficaz de comunicar as necessidades e expectativas dos usuários em relação a um produto ou projeto de forma simples e compreensível. Uma 'User Story' é uma breve declaração que descreve uma funcionalidade específica desejada pelo usuário, seguindo uma estrutura simples e centrada no usuário. Essa abordagem ajuda as equipes de desenvolvimento a manter o foco nas necessidades reais dos usuários e a priorizar o trabalho de acordo com o valor percebido pelo cliente. A seguir, apresentaremos as User Stories de nossa aplicação, detalhando as funcionalidades e requisitos que foram identificados para melhor atender às necessidades de nossos usuários.

Cadastrar Novo Módulo:

User Story: Eu, como analista de projetos, devo poder cadastrar um novo módulo na plataforma. Isso me permitirá inserir informações cruciais, como título, descrição, requisitos, atividades e objetivos, para efetivamente realizar a gestão e controle dos entregáveis do projeto.

Cadastrar Empresa:

User Story: Eu, como representante de uma empresa interessada em projetos, devo poder me cadastrar na plataforma. Ao fornecer informações relevantes, como nome, setor e área de atuação, poderei efetivamente participar de projetos disponíveis.

Cadastrar Novo Projeto:

User Story: Eu, como uma empresa parceira, devo ser capaz de cadastrar uma nova iniciativa na plataforma. Inserindo informações cruciais, como título, descrição, requisitos e objetivos, serei capaz de iniciar e gerenciar projetos de forma eficaz.

Aprovar Proposta de Projeto:

User Story: Eu, como analista de projetos, devo receber propostas de empresas e ter a capacidade de revisar e aprovar ou rejeitar cada proposta. Isso me permitirá tomar decisões informadas sobre quais projetos merecem ser aprovados, fornecendo feedback, se necessário.

Alocar Empresa a Projeto:

User Story: Eu, como analista de projetos, devo ser capaz de alocar uma empresa a um projeto compatível com suas áreas de interesse. Isso me permitirá criar equipes eficazes e direcionar recursos de maneira adequada.

Acompanhar Progresso do Projeto:

User Story: Eu, como usuário (empresa ou analista), devo poder acompanhar o progresso do projeto na plataforma. Isso inclui visualizar as etapas concluídas e pendentes, fornecendo uma visão clara do estado atual do projeto.

Avaliar Desempenho do Projeto:

User Story: Eu, como uma empresa que participou de um projeto, devo poder avaliar seu desempenho ao final do projeto. Isso me permitirá fornecer feedback e avaliações sobre diferentes critérios, contribuindo para a melhoria contínua dos projetos.



## 3.2 Requisitos não funcionais

**Requisito Não Funcional 1:** Performance 

Descrição: 

Descrição (ISO25010 - Eficiência de Performance):
O sistema deve ser capaz de carregar o dashboard de iniciativas em até 3 segundos.

Descrição de Testes:

Pré-condição:

O sistema está operacional e o usuário tenta acessar o dashboard de iniciativas.

Procedimento de teste: 

 1. O usuário clica para abrir o dashboard de iniciativas.
 2. O tempo de carregamento da página é medido.

Resultado esperado:

O dashboard de iniciativas é carregado em até 3 segundos.

Pós-condição:

O usuário pode interagir com o dashboard e visualizar as informações carregadas.

Critério de Aceitação:  
Se o dashboard carregar em até 3 segundos, a performance é considerada aceitável.

**Requisito Não Funcional 2:** Escalabilidade 

Descrição: 

Descrição (ISO25010 - Capacidade de Escalabilidade): 
O sistema deve ser capaz de suportar até 500 usuários simultâneos sem degradação significativa na performance.

Descrição de Testes: 

Pré Condição: 

500 usuários tentam acessar o sistema simultaneamente. 

Procedimento de teste:

1. Monitorar a performance do sistema, como tempo de resposta e usabilidade, enquanto 500 usuários estão ativos.
2. Avaliar se há degradação na performance.


Resultado esperado:

-O sistema mantém a performance aceitável, com tempos de resposta consistentes. 

Pós Condição:

- Os usuários podem realizar suas operações normalmente, sem interrupções ou atrasos significativos.

Critérios de Aceitação:

-Se o sistema mantém a performance aceitável com 500 usuários simultâneos, a capacidade de escalabilidade é considerada satisfatória.

**Requisito Não Funcional 3:** Usabilidade para o público alvo (ISO25010) 

Descrição: 

A plataforma deve ter uma interface acessível aos mais variados grupos, que seja de fácil utilização e entendimento sendo apropriado às necessidades do cliente, tendo atributos que facilitam seu uso e protegendo o usuário do erro.

Descrição de Testes: 

Conforme item teste de usabilidade, localizado no item: 

## 4. Tecnologias e Ferramentas Utilizadas
Neste projeto, foi utilizada uma combinação de tecnologias e ferramentas para alcançar a máxima eficiência e funcionalidades de desenvolvimento. Criamos a estrutura inspirada na teoria de arquitetura limpa, metodologia proposta por Robert C. Martin que promove a separação de preocupações e a desacoplação das regras de negócio da infraestrutura e da interface do usuário.

## 4.1 Frontend

### 4.1.2 HTML
- **Descrição**: O HTML (HyperText Markup Language) é a linguagem padrão para criar e projetar páginas web. Ele define a estrutura e o conteúdo de uma página, como cabeçalhos, parágrafos, imagens e links.
- **Utilização no Projeto**: Utilizamos HTML como base para estruturar todos os componentes visuais da nossa aplicação web. Ele define a espinha dorsal da interface, sobre a qual estilos e comportamentos são aplicados.

### 4.1.3 CSS
- **Descrição**: O CSS (Cascading Style Sheets) é uma linguagem utilizada para descrever a apresentação de documentos escritos em HTML. Ele é responsável por estilizar a página, definindo propriedades como cores, espaçamentos, fontes e animações.
- **Utilização no Projeto**: Usamos CSS para estilizar e personalizar a aparência da nossa aplicação. Garantindo uma estética mais agradável e responsiva.
### 4.1.4 Typescript (Lado do Cliente)
- **Descrição**: TypeScript é uma linguagem de programação de código aberto que amplia o JavaScript, fornecendo recursos avançados de tipagem estática. Ela é especialmente adequada para o desenvolvimento de aplicações frontend, oferecendo uma maneira mais robusta de gerenciar o código e prevenir erros comuns.

- **Utilização no Frontend**: O TypeScript desempenhou um papel essencial na melhoria da qualidade do código e na prevenção de erros, graças à sua tipagem estática. Isso tornou o desenvolvimento mais seguro e eficiente, evitando a criação de componentes não renderizáveis.

### 4.1.5 React
- **Descrição**: Biblioteca JavaScript para construir interfaces de usuário. Ele permite criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficaz.
- **Utilização no Projeto**: Usamos o React para desenvolver a interface de usuário do nosso serviço. Com ele, criamos uma UI responsiva e interativa que se comunica com nosso backend.

### 4.1.6 Vite
- **Descrição**: Ferramenta de desenvolvimento rápida para criação de aplicações web modernas com JavaScript e TypeScript. Ele foi criado para ser um "bundler" (empacotador) e "dev server" (servidor de desenvolvimento) extremamente rápido e eficiente, otimizado para o desenvolvimento de aplicativos modernos na web.
- **Utilização no Projeto**: Foi utilizado com o intuito de acelerar o processo de desenvolvimento em TypeScript do nosso projeto.

## 4.2 Backend

### 4.2.1 Nest.JS
- **Descrição**: O Nest.JS é um framework para construção de aplicações pelo lado do servidor em Node.js eficientes e escaláveis. Ele utiliza TypeScript, que é um superconjunto de JavaScript, e combina elementos de OOP (Programação Orientada a Objetos), FP (Programação Funcional) e FRP (Programação Reativa Funcional).
- **Utilização no Projeto**: No nosso projeto, o Nest.JS foi empregado para ajudar na estruturação da arquiterura limpa no backend, fornecendo uma base sólida e escalável para criação de endpoints e regras de negócios.

### 4.2.2 Typescript (Lado do Servidor)
- **Descrição**: TypeScript também é amplamente utilizado no desenvolvimento de aplicações no lado do servidor. Ele oferece a mesma tipagem estática e recursos avançados que tornam o código mais confiável e escalável, tornando-o uma escolha sólida para o desenvolvimento backend.
- **Utilização no  Backend**: No nosso projeto backend, TypeScript foi a linguagem principal escolhida para o desenvolvimento, proporcionando a segurança da tipagem estática e a capacidade de criar uma base sólida para a lógica de negócios e a interação com o banco de dados PostgreSQL. Isso resultou em um backend robusto.

### Postman
- **Descrição**: O Postman é uma plataforma para testar, documentar e monitorar APIs.
- **Utilização no Projeto**: Utilizamos o Postman para testar os endpoints do nosso backend. Ele nos permitiu rapidamente verificar a corretude das respostas do nosso serviço, simular diferentes cenários de entrada e garantir que todas as funcionalidades estavam operando conforme especificado.


## 4.3 DevOps e Cloud

### 4.3.1 Docker
- **Descrição**: O Docker é uma plataforma que permite desenvolvedores criar, executar e empacotar aplicações dentro de contêineres. Estes contêineres são ambientes leves, isolados e consistentes, facilitando o desenvolvimento.
- **Utilização no Projeto**: Utilizamos Docker para encapsular nossa aplicação e suas dependências em um contêiner. Isso simplificou o processo de deploy, assegurou consistência entre ambientes de desenvolvimento, teste e produção e facilitou a escalabilidade e distribuição do nosso serviço.

###  4.3.2 Amazon AWS
- **Descrição**: A Amazon Web Services (AWS) é uma plataforma de serviços em nuvem que oferece uma variedade de infraestruturas, como computação, armazenamento e até mesmo soluções de aprendizado de máquina.
- **Utilização no Projeto**: Utilizamos a AWS como plataforma de infraestrutura para hospedar e gerenciar os serviços e recursos associados ao nosso projeto, no caso o Amazon EC2.
### 4.3.3 Amazon EC2
- **Descrição**: Amazon EC2 (Elastic Compute Cloud) é um serviço web que oferece capacidade computacional escalável na nuvem. Ele permite executar instâncias e gerenciar servidores de forma eficiente.
- **Utilização no Projeto**: Para garantir que nosso serviço seja facilmente acessível, nós o implantamos no Amazon EC2. Com isso, garantimos escalabilidade e alta disponibilidade para os usuários.
### 4.3.4 Amazon RDS
- **Descrição**: O Amazon Relational Database Service (Amazon RDS) é um serviço de banco de dados relacional totalmente gerenciado oferecido pela Amazon Web Services (AWS). Ele foi projetado para facilitar a implantação, gerenciamento e escalabilidade de bancos de dados relacionais na nuvem. O Amazon RDS suporta vários motores de banco de dados populares, incluindo: MySQL, PostgreSQL, Oracle, Microsoft SQL Server, MariaDB e Amazon Aurora.
- **Utilização no projeto**: Foi necessário para funcionar como o nosso banco de dados em nuvem, ou seja, os dados serão guardados e gerenciados pelo RDS que estará configurado para trabalhar dentro de uma instância do EC2.
###  4.3.5 GitHub
- **Descrição**: O GitHub é uma plataforma de desenvolvimento colaborativo. Ele fornece hospedagem para software de controle de versão usando git.
- **Utilização no Projeto**: Usamos o GitHub para versionamento e hospedagem do código-fonte do projeto.

## 5. Banco de Dados (SGBD, ORM, CRUD e Modelos)
Neste seção, exploraremos conceitos relacionados a Bancos de Dados, incluindo SGBD (Sistema de Gerenciamento de Banco de Dados), ORM (Mapeamento Objeto-Relacional), CRUD (Create, Read, Update, Delete - operações básicas de manipulação de dados) e Modelos de Dados. Você encontrará informações sobre como os dados são armazenados, acessados e gerenciados na aplicação, bem como as estruturas e tecnologias envolvidas nesse processo.

### 5.1 Sistem De Gerenciamento de Banco de Dados (SGBD) 

#### PostgreSQL
- **Descrição**: O PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto altamente confiável e poderoso. Ele oferece recursos avançados de armazenamento e consulta, sendo uma escolha popular para aplicações que requerem segurança e escalabilidade de dados.
- **Utilização no Projeto**: No nosso projeto, o PostgreSQL foi adotado como o sistema de gerenciamento de banco de dados principal, desempenhando um papel crucial na armazenagem e recuperação de dados, garantindo assim a robustez e escalabilidade necessárias para o sucesso do projeto.

### 5.2 Object Relational Mapping (ORM)

#### Prisma
- **Descrição**: A ferramenta de banco de dados ORM (Object-Relational Mapping) que simplifica a interação com bancos de dados e gerenciamento de versões.
- **Utilização no projeto**: O Prisma foi definido como a tecnologia que foi utilizada para estabelecer a conexão com o banco de dados, através da string de conexão disponibilizada pelo ORM. 

### 5.3 Create, Read, Update and Delete (CRUD)

- As seguintes operações CRUD que foram implementadas:

#### Create

1. **Analista de Projetos (Analyst)**

```
  findAll: Prisma.sql`
    SELECT * FROM "Analyst"
    WHERE "isActive" = true;
    `,
    create: (analystDto: AnalystDto): Sql => Prisma.sql`
    INSERT INTO "Analyst" (
        "id",
        "name",
        "password",
        "email",
        "role",
        "isActive",
        "updatedAt"
    )
    VALUES (
        ${uuid.v4()},
        ${analystDto.name},
        ${analystDto.password},
        ${analystDto.email},
        ${analystDto.role},
        ${true},
        ${new Date()}
    )
    RETURNING *;
    `,

```
  
2. **Iniciativa (Initiative)**

```
  findAllInitiativesAndModules: Prisma.sql`
    SELECT
    module.moduleName AS module_name,
    initiative.initiativeName AS initiative_name,
    module.status AS module_status
  FROM
    Module AS module
  INNER JOIN
    Initiative AS initiative ON module.id = initiative.module_id;
    `,

  create: (iniativeDto: InitiativeDto): Sql => Prisma.sql`
    INSERT INTO "Initiative" (
      "id",
      "initiativeName",
      "scope",
      "partnerId",
      "moduleId",
      "courseId,
      "isActive",
      "updatedAt"
  )
  VALUES (
      ${uuid.v4()},
      ${iniativeDto.initiativeName},
      ${iniativeDto.scope},
      ${iniativeDto.partnerId},
      ${iniativeDto.moduleId},
      ${iniativeDto.courseId},
      ${true},
      ${new Date()}
  )
  RETURNING *; `,

  findAll: Prisma.sql`
  SELECT * FROM "Initiative"
  WHERE "isActive" = true 
  `

```
3. **Modulo (Module)**

```
    create: (moduleDto: ModuleDto): Sql => Prisma.sql
        INSERT INTO "Module" ("id", "courseCode", "moduleName", "beginData", "isActive", "createdAt", "updatedAt", "status")
        VALUES (
            ${uuid.v4()},
            ${moduleDto.courseCode},
            ${moduleDto.moduleName},
            ${new Date()},
            ${moduleDto.isActive},
            ${new Date()},
            ${new Date()},
            ${moduleDto.status}
        )
        RETURNING *;
    `,
```

4. **Parceiro (Partner)**
```
  findAll: Prisma.sql`
    SELECT * FROM "Partner"
    WHERE "isActive" = true;
  `,
  create: (partnerDto: PartnerDto): Sql => Prisma.sql`
  INSERT INTO "Partner" ("id", "partnerName", "sector", "contactEmail", "contactPhone","branch", "representativeJob", "isActive", "responsibleName", "password", "updatedAt")
  VALUES (
    ${uuid.v4()}, 
    ${partnerDto.partnerName}, 
    ${partnerDto.sector}, 
    ${partnerDto.contactEmail}, 
    ${partnerDto.contactPhone}, 
    ${partnerDto.branch}, 
    ${partnerDto.representativeJob},
    ${true},
    ${partnerDto.responsibleName},
    ${partnerDto.password},
    ${new Date()}
  )
  RETURNING *;

```

####  Read

1. **Parceiro (Partner)**
   - Buscar parceiro por ID. Usapa vizualisar as informações de um parceiro
  ```
   SELECT * FROM Partner WHERE id = ...;
  ```

2. **Iniciativa (Initiative)**
  - Buscar iniciativa por ID.
```
  SELECT * FROM Initiative WHERE id = ...;
```
  - Buscar iniciativas assossiadas a um parceiro específico.
```
  SELECT * FROM Initiative WHERE partnerId = ...;
```
  - Listar iniciativas ativas.
```
  SELECT * FROM Initiative WHERE isActive = TRUE;
```
3. **Módulo (Module)**
  - Buscar módulo por ID.
  ```
  SELECT * FROM Module WHERE id = ...;
  ```

  - Buscar módulos associados a um curso específico.

  ```
  SELECT * FROM Module WHERE courseId = ...;
  ```
  - Listar módulos ativos
  ```
  SELECT * FROM Module WHERE isActive = TRUE;
  ```

#### Update

1. **Parceiro (Partner)**
  - Atualizar nome do parceiro por ID.
  ```
  UPDATE Partner SET partnerName = '...' WHERE id = ...;
  ```

2. **Iniciativa (Initiative)**
  - Atualizar nome da iniciativa por ID.
  ```
  UPDATE Initiative SET initiativeName = '...' WHERE id = ...
  ```

3. **Módulo (Module)**
  - Atualizar nome do módulo por ID.
  ```
  UPDATE Module SET moduleName = '...' WHERE id = ...;
  ```

#### Delete



1. **Iniciativa (Initiative)**
  - Deletar iniciativa por ID.
  ```
  DELETE FROM Initiative WHERE id = ...;
  ```



### 5.4 Modelo Conceitual

Aqui, haverá toda a descrição das entidades e a imagem referente ao modelo conceitual

<img src = "./modelo-conceitual-db.drawio.png" >

### 5.4.1 Entidades e suas respectivas descrições:

#### Parceiro (Partner)
**Conceito:** Representa as empresas ou indivíduos que estão propondo projetos para serem realizados em colaboração com os estudantes.

**Atributos:** ID, Nome do Parceiro, Setor, E-mail de Contato, Telefone de Contato, Taxa pelo Projeto, Ramo, Cargo do Representante, Está Ativo?, Data de Criação, Data de Atualização, Nome do Responsável, Senha.

**Identificação:** ID.

**Associações:** Pode propor várias Iniciativas; pode estar associado a vários Módulos.

#### Curso (Course)
**Conceito:** Representa os diferentes cursos ou programas acadêmicos disponíveis.

**Atributos:** ID, Tipo de Curso, Diretor, Está Ativo?, Data de Criação, Data de Atualização.

**Identificação:** ID.

**Associações:** Composto por vários Módulos; composto por várias Turmas.

#### Módulo (Module)
**Conceito:** Representa as diferentes unidades ou temas dentro de um curso.

**Atributos:** ID, Código do Curso, Nome do Módulo, Data de Início, ID do Parceiro, ID do Curso, Está Ativo?, Data de Criação, Data de Atualização, Status.

**Identificação:** ID.

**Associações:** Associado a um Curso; pode ter várias Iniciativas associadas; pode ter um Parceiro associado.

#### Turma (Class)
**Conceito:** Representa um grupo específico de estudantes inscritos em um curso.

**Atributos:** ID, Nome do Cliente, Ano de Início, ID do Curso, Está Ativo?, Data de Criação, Data de Atualização.

**Identificação:** ID.

**Associações:** Pertence a um Curso.

#### Iniciativa (Initiative)
**Conceito:** Representa propostas específicas de projetos feitas pelos Parceiros.

**Atributos:** ID, ID do Parceiro, ID do Módulo, ID do Curso, Está Ativo?, Data de Criação, Data de Atualização, Nome da Iniciativa, Escopo.

**Identificação:** ID.

**Associações:** Proposta por um Parceiro; associada a um Módulo; associada a um Curso.

#### Analista (Analyst)
**Conceito:** Representa os indivíduos encarregados de avaliar e monitorar as iniciativas e parcerias.

**Atributos:** ID, Nome, Senha, Cargo, Está Ativo?, Data de Criação, Data de Atualização, E-mail.

**Identificação:** ID.

### 5.5 Modelo Lógico

Aqui, haverá toda a descrição das entidades e a imagem referente ao modelo conceitual

<img src = "../imagens/modelo-logico-db.drawio.png">

### 5.5.1 Tabelas e suas respectivas descrições:

#### Parceiro (Partner)
**Campos:** id, partnerName, sector, contactEmail, contactPhone, rateForProject (pode ser nulo), branch, representativeJob, isActive, createdAt, updatedAt, responsibleName, password.

**Chaves Primárias:** id.

**Relações:** Partner -> Initiative (Um para Muitos); Partner -> Module (Um para Muitos).

#### Curso (Course)
**Campos:** id, courseType, director, isActive, createdAt, updatedAt.

**Chaves Primárias:** id.

**Relações:** Course -> Module (Um para Muitos); Course -> Class (Um para Muitos); Course -> Initiative (Um para Muitos).

#### Módulo (Module)
**Campos:** id, courseCode, moduleName, beginData, partnerId (FK), courseId (FK), isActive, createdAt, updatedAt, status.

**Chaves Primárias:** id.

**Relações:** Module -> Course (Muitos para Um); Module -> Partner (Muitos para Um); Module -> Initiative (Um para Muitos).

#### Turma (Class)
**Campos:** id, customerName, startYear, courseId (FK), isActive, createdAt, updatedAt.

**Chaves Primárias:** id.

**Relações:** Class -> Course (Muitos para Um).

#### Iniciativa (Initiative)
**Campos:** id, partnerId (FK), moduleId (FK), courseId (FK), isActive, createdAt, updatedAt, initiativeName, scope.

**Chaves Primárias:** id.

**Relações:** Initiative -> Partner (Muitos para Um); Initiative -> Module (Muitos para Um); Initiative -> Course (Muitos para Um).

#### Analista (Analyst)
**Campos:** id, name, password, role, isActive, createdAt, updatedAt, email.

**Chaves Primárias:** id.

#### 5.5.2 Regras de Negócio e Restrições:
- Um Parceiro pode ter múltiplas Iniciativas, mas uma Iniciativa é específica de um Parceiro.
- Um Curso pode ter vários Módulos, mas um Módulo é específico de um Curso.
- Uma Iniciativa está associada a um Curso e um Módulo específicos.
- A senha dos Parceiros e dos Analistas deve ser única.
- A taxa pelo Projeto (rateForProject) na tabela Partner pode ser nula.

### 5.6 Comparação (Modelo Conceitual x Modelo Lógico)

#### 5.6.1 Nível de abstração 
- O Modelo Conceitual descreve as entidades e relacionamentos de forma conceitual, sem se preocupar com detalhes de implementação específicos, como tipos de dados e chaves primárias.
- O Modelo Lógico representa as tabelas e campos de banco de dados, incluindo tipos de dados e chaves primárias, o que o torna mais próximo da implementação real.

#### 5.6.2 Notação
- O Modelo Conceitual usa uma notação mais descritiva, incluindo atributos e associações.
- O Modelo Lógico usa uma notação mais técnica, listando campos de tabelas e suas relações.

#### 5.6.3 Chaves Primárias 
- O Modelo Conceitual menciona a identificação de cada entidade, mas não especifica detalhes sobre as chaves primárias.
- O Modelo Lógico define as chaves primárias para cada tabela (por exemplo, "id" em "Parceiro").

#### 5.6.4 Relações 
- O Modelo Conceitual descreve as associações entre as entidades de forma conceitual.
- O Modelo Lógico define relações entre as tabelas usando chaves estrangeiras.


### 5.7 Criação das Tabelas
- Para a criação das tabelas, é necessário estabelecer uma conexão do prisma com o banco postgreSQL no RDS. 
- Dessa forma, precisa-se atribuir à variável de ambiente ```DATABASE_URL```, localizada no arquivo  ```.env``` 
- Dentro da pasta ```src/nexus-api``` o endpoint fornecido pelo RDS após a criação do banco, nesse formato:
 ```DATABASE_URL = "postgresql://seu_usuario:senha@endpoint:porta/nome_do_banco"```
- . Com esse valor estabelecido, basta executar o seguinte comando no terminal, dentro da pasta ```nexus-api```, ```npx prisma generate```


## 6. Demonstração de Integração

- Link para o vídeo de demonstração de integração entre backend mock e o frontend:
https://drive.google.com/file/d/1QqprpwinmxsQpFNSYl0Sayd1gYtI2R2Y/view?usp=drive_link

- Link para o vídeo de demonstração de integração mostrando testes de integração entre o backend mock e o frontend:
https://drive.google.com/file/d/1bSLa4tZPu6ho0WWHazfECfDzpLOByzLv/view?usp=drive_link



## 7. Arquitetura do Sistema

Nessa seção, será encontrada todas as diagramações da arquitetura do sistema: Implantação e Sequência

### 7.1. Diagrama de Implantação 

(figura 12: Implantação UML)

![Alt text](../imagens/implanta%C3%A7%C3%A3o-uml.png)

**fonte:** elaboração dos autores

O diagrama de implantação UML ilustra uma comunicação tradicional entre o backend, servidor e frontend. Nele, é possível observar que a interface da aplicação estará no browser do usuário e será feita com React.js. Além disso, o código que rodará no servidor será feito com Nest.js, o framework do Node.js. Ambas as partes se comunicaram pelo protocolo HTTPS na porta 443. Em seguida, o código do servidor se comunicará pelo banco de dados relacional escolhido, o postgreSQL. Nele, a comunicação se dará por meio dos drivers do banco. Essas ferramentas foram escolhidas pois suportam todos os requisitos não funcionais do sistema. No Backend, o Nest.js consegue assegurar a segurança das informações sensíveis por meio da biblioteca bcrypt.js que usará criptografia avançada para proteção. Outrossim, por ser um framework de alta performance que faz o uso fiel de arquitetura limpa, ele consegue assegurar o bom funcionamento do algoritmo de matching. Por fim, a usabilidade será garantida pelo React.js com typescript, pois ele utilizará de componentes já prontos e validados pela empresa que mantém a biblioteca. Isso será feito por meio do material UI, que possui as interfaces para exportação e uso deliberado.

### 7.2 Diagrama de Sequência 

#### 7.2.1 Alocar Iniciativas em um projeto:
O diagrama de sequência se inicia com um "Analista de Projeto", que é um ator neste cenário, e deseja alocar uma turma específica em uma iniciativa. As principais entidades e componentes envolvidos são: Interface (frontend em React), entidades de Módulo, Iniciativa e Turma, e um EC2 AWS que funciona como servidor e simula o backend.

![Alt text](<../imagens/alocar-Diagrama de sequência básico (1).png>)

**fonte:** elaboração dos autores

#### 7.2.2 Login do Analista de Projeto:
- O Analista de Projeto começa digitando sua senha e clicando para fazer login.
- A Interface (React) faz uma requisição POST (HTTP) para autenticar o usuário.
- O EC2 AWS (Backend Mock) processa a requisição e responde com um status de autenticação.
- Dependendo da resposta do servidor, a Interface apresentará uma mensagem indicando se o acesso foi "Liberado" ou "Negado".
#### 7.2.3 Acessando Análise de Projetos:
- Após o login bem-sucedido, o Analista de Projeto clica na opção "análise de projetos".
- A Interface realiza uma requisição GET (HTTP) para obter informações da entidade "turma".
- O EC2 AWS (Backend Mock) responde retornando todas as turmas disponíveis.
- A Interface atualiza e mostra todas as turmas para o Analista de Projeto.
#### 7.2.4 Selecionando a Turma de Interesse:
- O Analista de Projeto seleciona uma turma específica de seu interesse.
- A Interface faz uma requisição GET (HTTP) referente à turma escolhida. Esta turma tem um ID associado à entidade "módulo", que, por sua vez, está ligado a várias linhas da entidade "iniciativa".
- O EC2 AWS (Backend Mock) responde retornando informações da turma, do módulo associado e das possíveis iniciativas vinculadas.
- A Interface atualiza e mostra todas as informações relevantes para o Analista de Projeto.
#### 7.2.5 Alocando a Turma:
- O Analista de Projeto opta por "Alocar Turma" à iniciativa.
- A Interface executa uma requisição UPDATE (HTTP) para que aquela turma específica seja vinculada a uma linha da entidade "iniciativa".
- O EC2 AWS (Backend Mock) processa essa atualização e confirma a mudança nas entidades envolvidas.
- A Interface mostra uma mensagem ao Analista de Projeto informando "Turma Alocada com Sucesso".
- Finalmente, a Interface retorna à página principal da turma.

#### 7.2.6 Cadastro de Iniciativas:
O diagrama de sequência descreve o processo pelo qual um "Parceiro" deseja enviar uma iniciativa para um módulo específico. Os principais elementos envolvidos neste cenário são: Interface (frontend em React), e as entidades de Módulo, Iniciativa e Turma. O EC2 AWS serve como mock do backend.

![Alt text](<../imagens/cad-iniciativas-Diagrama de sequência básico (2).png>)

**fonte:** elaboração dos autores


#### 7.2.7 Login do Parceiro:
- O Parceiro começa digitando sua senha e clicando para fazer login.
- A Interface (React) faz uma requisição POST (HTTP) para autenticar o Parceiro.
- O EC2 AWS (Backend Mock) processa a requisição e responde com um status de autenticação.
- Dependendo da resposta do servidor, a Interface apresentará uma mensagem informando se o acesso foi "Liberado" ou "Negado".
#### 7.2.8 Preenchimento de Informações:
- Após autenticação bem-sucedida, a Interface é atualizada para permitir que o Parceiro preencha os detalhes da iniciativa.
- O Parceiro completa todas as informações necessárias no formulário e, em seguida, clica em "Cadastrar".
#### 7.2.9 Cadastrando a Iniciativa:
- A Interface realiza uma requisição POST (HTTP) para criar uma nova entrada na entidade "iniciativa".
- O EC2 AWS (Backend Mock) processa a requisição, criando um novo registro na entidade Iniciativa.
- A Interface é atualizada, direcionando o Parceiro de volta ao seu feed.

#### 7.2.10 Cadastro de Parceiro:
Este diagrama de sequência descreve o processo de cadastro de um novo "Parceiro" na plataforma. Os principais elementos envolvidos são: Interface (frontend em React) e a Parceiro. O EC2 AWS funciona como mock do backend.

![Alt text](<../imagens/cad-árceiros-Diagrama de sequência básico (3).png>)

**fonte:** elaboração dos autores

#### 7.2.11 Acessando o Cadastro:
- O Parceiro acessa a página de cadastro na plataforma.
- A Interface (React) apresenta o formulário para inserção das informações do Parceiro.
#### 7.2.12 Preenchimento de Informações:
- O Parceiro preenche as informações necessárias, como nome, email, senha, entre outras.
- Após preencher, o Parceiro clica em "Cadastrar".
#### 7.2.13 Envio de Informações para Cadastro:
- A Interface envia os dados preenchidos através de uma requisição POST (HTTP) para registrar o novo Parceiro.
- O EC2 AWS (Backend Mock) processa a requisição e registra o novo Parceiro na base de dados.
- O EC2 AWS (Backend Mock) envia uma resposta de sucesso ou falha de acordo com o resultado do registro.
- A Interface exibe a mensagem correspondente ao status do registro, podendo ser "Cadastro realizado com sucesso" ou "Erro ao realizar cadastro".

Segue link para acesso ao lucid app com diagrama UML: https://lucid.app/lucidchart/6cd5d5b6-c768-45dc-9e35-2b38e7474fc9/edit?viewport_l[…]Ldq~84CkD7&invitationId=inv_c2b03551-d0f6-4a26-8bba-816ba2b8be7d


## 8. Testes De Integração 

Nesta seção encontraremos os Testes de Integração que são avaliações feitas durante o desenvolvimento de um software para garantir que diferentes partes (módulos, componentes) se integrem de maneira adequada. Eles focam na interação entre essas partes e ajudam a identificar problemas quando são combinadas. 

### 8.1 Teste de Integração - Cadastro de Parceiro
#### Pré-condição
- A aplicação está implantada na AWS.
- As máquinas do frontend e do backend estão em execução.
- O banco de dados está acessível e vazio.
#### Procedimento de Teste
1. Acessar o console da AWS e iniciar as máquinas do frontend e do backend.
2. Abrir a aplicação no navegador e ir para a página de registro.
3. Preencher o formulário de registro com dados válidos.
4. Clicar no botão "Cadastrar".
5. Observar as requisições no backend para confirmar o registro:
   - Verificar as entradas no registro de requisições no backend.
   - Certificar de que os dados enviados do frontend para o backend estão corretos.
6. Verificar se os dados do usuário foram inseridos corretamente no banco de dados:
   - Consultar o banco para confirmar a presença do novo usuário.
#### Pós-condição
- Um novo parceiro deve ser registrado com sucesso no sistema.
- Os dados do novo parceiro devem estar armazenados corretamente no banco de dados.
#### Resultados Esperados
- A consulta ao banco de dados deve retornar os detalhes do novo usuário.

### 8.2 Teste de Integração - Cadastro de Analista
#### Pré-condição
 - A aplicação está implantada na AWS.
 - As máquinas do frontend e do backend estão em execução.
 - O banco de dados está acessível e vazio.
#### Procedimento de Teste
1. Acesse o console da AWS e inicie as máquinas do frontend e do backend.
2. Abra a aplicação no navegador e vá para a página de cadastro de analista.
3. Preencha o formulário de cadastro com informações válidas de um novo analista.
4. Clique no botão "Cadastrar".
5. Observe as requisições no backend para confirmar o cadastro:
 - Verifique as entradas no registro de requisições no backend.
 - Certifique que os dados enviados do frontend para o backend estão corretos.
6. Verifique se os dados do novo analista são inseridos corretamente no banco de dados:
- Consulte o banco de dados para confirmar a presença do novo analista.
#### Pós-condição
 Um novo analista deve ser cadastrado com sucesso no sistema.
- Os dados do novo analista devem estar armazenados corretamente no banco de dados.
#### Resultados Esperados - O cadastro deve retornar uma mensagem de sucesso no frontend.
 - A consulta ao banco de dados deve retornar os detalhes do novo analista.

### 8.3 Teste de Integração - Cadastro de Iniciativa
#### Pré-condição
- A aplicação está implantada e em execução na nuvem da AWS.
- O servidor backend está ativo.
- O banco de dados local está acessível e vazio.
#### Procedimento de Teste
1. Preencha o formulário de cadastro de iniciativa com informações válidas.
 - Preencha os campos obrigatórios (colocar tudo que é  necessário para cadastrar uma nova iniciativa).
2. Clique no botão "Cadastrar Iniciativa" na página.
3. Observe as requisições HTTP feitas para o servidor backend:
- Abra o inspecionar no navegador
- Vá para a guia "Network" (Rede).
- Verifique se as entradas de solicitação e resposta para a requisição de registro da iniciativa estão de acordo. Certifique-se de que os dados são enviados corretamente.
(isso também é válido para os outros registros)
5. Verifique se a resposta da requisição do servidor é bem-sucedida:
(se o registro for bem-sucedido deve vir um status HTTP 200 ou uma resposta JSON de confirmação.)
#### Pós-condição
- Uma nova iniciativa deve ser cadastrada com sucesso no sistema.
- Os dados iniciativa devem estar armazenados corretamente no banco de dados.
#### Resultados Esperados - O cadastro deve retornar uma mensagem de sucesso no frontend.
 - A consulta ao banco de dados deve retornar os detalhes do novo analista.


## 9. Testes de Requisitos Não Funcionais e Refatoração de Testes

Nesta seção, discutiremos os Testes de Requisitos Não Funcionais e a Refatoração de Testes. Os primeiros avaliam aspectos vitais como desempenho, usabilidade e segurança, enquanto a Refatoração foca na melhoria contínua dos testes, garantindo sua eficácia ao longo do ciclo de vida do software.

### 9.1 Requisito Não Funcional (rastreabilidade): Segurança dos dados sensíveis (ISO25010)

#### Pré-Condição
  - O parceiro não pode estar cadastrado no banco antes de executar o teste.

#### Procedimento de Teste
  - Inserir os dados utilizados para criar um parceiro no postman.
  - Inserir a URL para o endpoint que irá fazer essa requisição.

#### Pós-Condição 
  - Os dados estão presentes no banco para ser utilizado no futuro.

#### Resultados Esperados 
  - O postman retorna o parceiro criado com sucesso
  - Código HTTP retornado é o 201

#### Resultados Obtidos
  - Durante os testes automatizados, todos os resultados esperados foram obtidos, indicando que a funcionalidade do sistema está operando conforme o planejado. No entanto, foi identificada uma falha no requisito não funcional relacionado à segurança dos dados. Na requisição de criação de um parceiro, a senha estava sendo retornada como parte da resposta. Isso representava uma vulnerabilidade de segurança, pois expunha informações sensíveis.

<img src = "../imagens/tests-images/seguranca-dados-sensiveis-erro.png">

  - Para resolver esse problema, foi realizada uma correção no código da aplicação, garantindo que a senha não seja mais retornada na resposta após a criação de um parceiro. Tecnicamente, a mudança feita foi refatorar a query SQL que executava essa ação para que, no retorno, ela não trouxesse a senha no corpo da resposta.

<img src = "../imagens/tests-images/seguranca-dados-sensiveis-erro.png">

### 9.2 Requisito Não Funcional (tempo de resposta): Segurança dos dados sensíveis (ISO25010) 

#### Pré-Condição
  - O backend deve estar configurado corretamente.

#### Procedimento de Teste
  - Inserir a URL para o endpoint que irá fazer essa requisição.

#### Pós-Condição 
  - A partir da segunda chamada, o tempo de resposta irá diminuir.

#### Resultados Esperados 
  - O postman retorna o parceiro encontrado com sucesso em um tempo menor que 600 ms.
  - Código HTTP retornado é o 200.

#### Resultados Obtidos
  - Durante os testes com o Postman, foi observado que a resposta da aplicação para a primeira chamada de um parceiro estava dentro dos limites aceitáveis de tempo de resposta (que seria até 500ms). No entanto, foi identificado que o tempo de resposta para a segunda chamada estava acima de 500ms, o que não atendia ao desempenho esperado.

  <img src = "../imagens/tests-images/requisito-nao-funcional-tmp-lento.png">

 - Para solucionar esse problema, foi necessário otimizar o código da aplicação. A otimização foi realizada através da redução da complexidade da função responsável por realizar a segunda chamada. Com essa melhoria, a aplicação passou a trazer os dados de forma muito mais rápida a partir da segunda requisição e com tempo inferior a 500ms.

 <img src ="../imagens/tests-images/requisito-nao-funcional-tmp-acerto.png">

### 9.3 Requisito Não Funcional (rastreabilidade): Usabilidade para o público alvo (ISO25010)

#### Pré-Condição
  - O parceiro não pode ter tido contato com a interface do sistema antes.

#### Procedimento de Teste
  - Navegar pelas principais tela até chegar na listagem dos módulos
  - Fazer uma série de perguntas para o possível usuário sobre a interface.

#### Pós-Condição 
  - Os criadores do sistema captaram um feedback necessário para evoluir a IU da aplicação.

#### Resultados Esperados 
  - O usuário diz se a interface ficou intuititva ou não

#### Resultados Obtidos
  - O usuário falou que a interface não estava aceitável. 

  
<img src = "../imagens/tests-images/rnf03-erro.png">

  - Após corrigir o layout, o sistema mostra a disponização dos elementos de forma harmoniosa.

<img src = "../imagens/tests-images/rnf-3-acerto.png">


### 9.4 Requisito Não Funcional (tempo de resposta): Endpoint "Alocation" Caso 1

#### Pré-condição:
- O sistema está em estado inicial, sem outras operações ocorrendo simultaneamente.

#### Procedimento de teste:
1. Acessar o endpoint "Alocation" através de uma requisição HTTP GET.
2. Medir o tempo que o sistema leva para retornar uma resposta.

#### Pós-condição:
- Resposta recebida com os dados da entidade "Modulo".

#### Resultados esperados:
- O sistema deve responder em menos de 500ms em condições de carga zero.

#### Resultados obtidos:

Com carga zero, o sistema retorna status 200 OK, em um período de 1291ms e um size de 2.43kb conforme captura de tela abaixo:

<img src = "../imagens/tests-images/rnf-test-alocation-1.png">

Com isso chegamos a conclusão de que nosso sistema durante carga zero não atende por 700ms. 

Com base nesse resultado chegamos a conclusão de que nossa API não está em conformidade com nossos testes e acreditamos que isso possa estar ocorrendo por estarmos fazendo mais de uma requisição ao mesmo tempo 

### 9.5 Requisito Não Funcional (tempo de resposta): Endpoint "Alocation" Caso 2

#### Pré-condição:
-A máquina está conectada ao 3G do celular, introduzindo latência.
-O ambiente de teste da API e do banco de dados está funcionando corretamente sob condições normais (sem latência).

#### Procedimento de teste:
1. Garanta que a conexão da máquina esteja usando exclusivamente o 3G do celular.
2. Acessar o endpoint "Alocation" através de uma requisição HTTP GET.
3. Medir o tempo que o sistema leva para retornar uma resposta.

#### Pós-condição:
- Resposta recebida com os dados da entidade "Modulo" ou erro relevante.

#### Resultados esperados:
Devido à latência da conexão 3G, é possível que o sistema leve mais tempo para responder. No entanto, o sistema deve eventualmente fornecer uma resposta, seja com os dados corretos ou com uma mensagem de erro relacionada à latência ou perda de sincronismo.

#### Resultados obtidos:
Através da requisição percebemos que o banco de dados conseguiu fazer a requisição, conforme imagens abaixo. Os dados do teste foram Status: 200 OK, Time: 2.81s e Size: 2.43kb.

<img src = "../imagens/tests-images/rnf-test-alocation-3.png">

Com isso chegamos a conclusão que nossa API enfrentou mais dificuldade na entrega dos dados, devido ao aumento da aumento da latência que aumentou o tempo de transmissão entre os dados, mas conseguiu com sucesso.

## 10. Processo de deploy (Descrição)

Foi realizado o deploy utilizando a aws por meio de um serviço chamado ec2 (elastic computing cloud), nela será adicionado primeiro uma API que se conecta com a interface de usuário e em outra máquina ec2 haverá a inserção do frontend.
Além da AWS, foi utilizado o Docker, que é uma plataforma para empacotar, distribuir e executar aplicativos em contêineres, garantindo isolamento, portabilidade e consistência. Agilizando o desenvolvimento, implantação e gerenciamento da aplicação.
cada parte do sistema (frontend e backend) está em um container, onde ao invés de subir a aplicação espalhada sobe-se apenas os containers. <br>

Passo a passo para o deploy: <br>
1. Conexão SSH via private key localizado na pasta keys <br>
2. Clonar o repositório que possui a aplicação nexus <br>
3. Navegar até o respectivo arquivo frontend ou backend <br>
4. instalar as dependências do node, utilizando o comando ```npm i``` <br>
6. Para rodar a aplicação utilizando o comando ```npm run dev``` caso seja o frontend ou ```npm run start: dev``` caso seja a API <br>

## 11. Procedimento de Deploy na AWS  

### Setup da Instância EC2 na AWS

1. Acesse a AWS Management Console e vá até o serviço EC2.
2. Clique no botão `Launch Instance` para criar uma nova instância.
3. Selecione a Amazon Machine Image (AMI) desejada, como por exemplo, "Linux".
4. Escolha o tipo de instância, no nosso caso foi `t2.micro`.
5. Configuração dos detalhes da instância, adicionando ao security group uma regra para permitir o tráfego na porta 80 (HTTP) e 443 (HTTPS), bem como quaisquer outras portas que forem necessárias.
6. Inicie a instância e anote o endereço IP público ou o nome de domínio público.

### Setup do banco de dados na AWS

1. Selecione a opção "Criar banco de dados"
2. Na página Criar banco de dados, escolha Criação padrão.
3. Para opções de mecanismo, escolha PostgreSQL.
4. Para Modelos, escolha Nível gratuito.
5. Na seção Disponibilidade e durabilidade, mantenha os padrões.
6. Na seção Configurações, defina estes valores:
    Identificador de instância de banco de dados – digite tutorial-db-instance.
    Nome de usuário mestre – digite tutorial_user.
    Gerar senha automaticamente – Deixe a opção desativada.
    Senha mestra – Digite uma senha.
    Confirmar senha – Digite novamente a senha.
7. Na seção Configuração da instância, defina estes valores:
    Classes expansíveis (inclui classes t)
    db.t3.micro
8. Na seção Armazenamento, mantenha os padrões.
9. Na seção Conectividade, defina estes valores e mantenha os outros valores como padrão:
    Em Recurso de computação, escolha Conectar-se a um recurso de computação do EC2.
    Para instância EC2, escolha a instância EC2 que você criou anteriormente, como tutorial-ec2-instance-web-server.
10. Na seção Autenticação de banco de dados, certifique-se de que Autenticação por senha esteja selecionada.
11. Abra a seção Configuração adicional e insira amostra para Nome inicial do banco de dados. Mantenha as configurações padrão para as outras opções.
12. Para criar sua instância de banco de dados PostgreSQL, escolha Criar banco de dados.

### Iniciando deploy

1. Iniciar uma instância EC2 com o comando:
    
    ssh -i nomechave  ec2-user@Public IPv4 DNS

2. Instalando Git com o seguinte comando:
    
    sudo apt install git -y

3. Instalando Docker:

    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt update
    sudo apt install docker-ce -y

4. Instalando Docker Compose:

    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

5. Clonando seu repositório Git

    git clone url
    cd your-repository-name/

6. Buildar imagem para o backend na raiz do backend, no nosso caso 'nexus-api'
    docker build -t nexus-backend-image .

7. Rodar container 

    docker run -p 8080:8080 nexus-backend-image

8. Buildar imagem para o frontend na raiz do projeto, no nosso caso 'frontend'
    docker build -t nexus-frontend-image .

9. Rodar container 

    docker run -p 8080:8080 nexus-frontend-image


## 12. Documentação da API

O Swagger é uma ferramenta popular para documentar APIs de forma padronizada e interativa. Ele permite que os desenvolvedores criem documentações detalhadas para suas APIs de maneira automatizada, facilitando a compreensão e o uso da API por outros desenvolvedores. Nesse sentido, utilizamos o swagger para documentar toda nossa API.

<img src = "./img/swagger1.png">
<img src = "./img/swagger2.png">

Para acessar essa tela, basta acessar a pasta nexus-api e rodar o comando
```npm run start: dev``` para iniciar a API. Após isso, deve-se ir ao navegador e colocar a URL do backend, no caso "localhost:8080" e adicionar "/swagger", como pode ser visto na URL da imagem. Após isso, a tela do swagger com a descrição de todos os endpoints será carregada.

## Referências

Lucidchart. (Acessado em [07/10/2023]). Diagramming, Data Visualization and Real-Time Collaboration | Lucidchart. 
URL: https://www.lucidchart.com/pages/product

Docker. (Acessado em [07/10/2023]). Get Started | Docker. 
URL: https://www.docker.com/get-started/

Docker Compose Releases. (Acessado em [07/10/2023]). Release 1.29.2 · docker/compose. 
URL: https://github.com/docker/compose/releases/tag/1.29.2

AWS - Amazon Web Services. (Acessado em [07/10/2023]). Serviços de computação em nuvem - Amazon Web Services (AWS). 
URL: https://aws.amazon.com/pt/

AWS EC2 - Amazon Elastic Compute Cloud. (Acessado em [07/10/2023]). Elastic Compute Cloud - Amazon EC2 - AWS. 
URL: https://aws.amazon.com/pt/ec2/?nc2=h_ql_prod_fs_ec2

AWS RDS - Amazon Relational Database Service. (Acessado em [07/10/2023]). AWS RDS (Relational Database Service) - Amazon Web Services. 
URL: https://aws.amazon.com/pt/rds/?nc2=h_ql_prod_fs_rds

Swagger. (Acessado em [07/10/2023]). API Documentation Tools | Swagger. 
URL: https://swagger.io/solutions/api-documentation/

## Apêndice

Os apêndices representam informações adicionais que não caberiam no documento exposto acima, mas que são importantes por alguma razão específica do projeto.

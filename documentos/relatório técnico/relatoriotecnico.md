Relatório Técnico Científico

1. Introdução

O parceiro enfrenta um desafio significativo relacionado à inexistência de uma plataforma eficiente para a gestão de parcerias entre empresas e estudantes para projetos conjuntos no modelo PBL. A coordenação, o acompanhamento das propostas e a distribuição dos projetos se tornam complexos e ineficientes devido ao aumento das turmas envolvidas e à diversidade de matérias. Atualmente, o controle é realizado através de planilhas, uma solução que não escala nem oferece a flexibilidade e a visibilidade necessárias para otimizar o processo. Para resolver esse problema, propomos o desenvolvimento de uma plataforma web em cloud, dedicada a aprimorar a gestão centralizada das parcerias de projetos, facilitando não apenas a coordenação, mas também a análise e aprovação de propostas.

Para essa aplicação, nos procuramos perfomance e segurança e por isso utilizaremos a seguinte arquitetura AWS:

Figura 1: Arquitetura AWS

![image](https://github.com/2023M5T06-Inteli/Grupo-02/assets/110630427/70912960-d645-4e97-a1bf-68fc0b1e5f08)

Fonte: elaboração dos autores

2. Definição de Requisitos

Focamos em detalhar a estrutura e os requisitos da plataforma para assegurar que ela atenda às necessidades específicas do parceiro e dos usuários. Os requisitos funcionais, incluindo o cadastro de iniciativas, a alocação de iniciativas a um módulo específico e a atribuição de ratings para iniciativas, foram claramente delineados e documentados.

Para garantir que a plataforma não apenas atenda aos requisitos funcionais, mas também ofereça uma experiência de usuário, estabelecemos requisitos não funcionais focados na performance, escalabilidade e usabilidade. Esses critérios garantirão que a plataforma opere de maneira eficiente, seja capaz de se adaptar ao crescimento e mudanças e seja intuitiva e acessível para todos os usuários.

3. Compreensão do Usuário

A criação de personas foi um passo para entender melhor as necessidades e expectativas dos usuários finais. Combinado com o mapa da jornada do usuário, conseguimos visualizar a experiência do usuário do início ao fim, o que é crucial para identificar oportunidades de otimização e garantir que a plataforma seja intuitiva e eficaz.

Desenvolvemos duas personas distintas para representar os principais grupos de interesse:

Figura 2 - Analista do Escritório de Projetos do Inteli:

![image](https://github.com/2023M5T06-Inteli/Grupo-02/assets/110630427/ac0bd591-19f3-4cd5-8b11-2d46953efe08)
Fonte: elaboração dos autores

Figura 3 - Potencial Parceiro Empresarial:

![image](https://github.com/2023M5T06-Inteli/Grupo-02/assets/110630427/69f7b8b3-e516-409b-bd84-2c7315d4ab49)
Fonte: elaboração dos autores

4. Design da Interface do Usuário

O design da interface do usuário era uma parte crucial do projeto. Começamos com wireframes de baixa fidelidade para esboçar a estrutura da plataforma e, em seguida, refinamos a interface com base no feedback da equipe e dos stakeholders. A abordagem Material UI foi adotada para garantir uma experiência moderna e consistente.

5. Análise de Negócios e Alinhamento Estratégico

Para garantir que a plataforma se alinhasse com as metas estratégicas do parceiro, realizamos uma análise de negócios aprofundada. Isso incluiu uma análise SWOT para avaliar forças, fraquezas, oportunidades e ameaças, além de um Canvas de Proposta de Valor. Essas análises forneceram informações valiosas para orientar o desenvolvimento e garantir que a plataforma entregasse valor sustentável.

Figura 2: Matriz Swot
![Circle Infographic Diagram SWOT Analysis](https://github.com/2023M5T06-Inteli/Grupo-02/assets/110630427/c802591f-38b6-4a52-839d-5fb2487a509b)
Fonte: elaboração dos autores

Figura 3: Value Proposition Canvas
![image](https://github.com/2023M5T06-Inteli/Grupo-02/assets/110630427/ded96d3a-0880-4689-aafb-51d61623e114)
Fonte: elaboração dos autores

6. Tecnologias Utilizadas

Durante o desenvolvimento, adotamos tecnologias de ponta:

Front-end: Utilizamos o React.js para criar uma interface de usuário responsiva e interativa que atende às necessidades dos usuários.

Back-end: O servidor foi desenvolvido com o Nest.js, proporcionando desempenho sólido e escalabilidade.

Banco de Dados: Armazenamos com segurança os dados no PostgreSQL hospedado em instâncias Amazon RDS.

Hospedagem da Aplicação: Optamos por instâncias Amazon EC2 para hospedar a aplicação web, garantindo escalabilidade e confiabilidade.

Design: Adotamos a abordagem Material UI para criar uma interface coesa e moderna, além de usar o Design System do próprio inteli.

7. Testes de usabilidade

Nessa etapa, para ter certeza da eficácia da plataforma, foram realizados testes de usabilidade com possiveis usuários do sistema. Aqui obtemos feedbacks tanto positivos quanto negativos que nos auxiliaram a moldar a aplicação de forma otimizada para os usuários, atendendo suas verdadeiras demandas que eventualmente não eram expressadas de forma formal e verbalizada.

8. Resultados e Discussão

Nesta fase, solidificamos a base para o desenvolvimento da plataforma. Os requisitos foram claramente definidos, e a interface do usuário foi cuidadosamente projetada para proporcionar uma experiência positiva. A análise de negócios alinhou a plataforma com a estratégia do parceiro, e a escolha da AWS fortaleceu a infraestrutura.

9. Conclusão

O projeto, agora finalizado, alcançou seu objetivo central de simplificar a coordenação, acompanhamento e análise de propostas de projetos no modelo PBL. A plataforma resultante é uma ferramenta poderosa que otimiza esse processo, proporcionando eficiência, escalabilidade e uma experiência aprimorada para todas as partes interessadas. Com base na sólida estrutura de requisitos, compreensão do usuário e escolha tecnológica, estamos confiantes de que a plataforma continuará a fornecer valor duradouro para o parceiro e seus usuários.

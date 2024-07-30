# Tela de Andamento de Leitura

## Descrição
A Tela de Andamento de Leitura permite ao usuário visualizar e gerenciar o progresso de leitura dos livros em sua biblioteca. Inclui a exibição do status de leitura de cada livro e a atualização do progresso.

## Componentes Principais
- **Lista de Livros em Progresso:** Exibição dos livros que o usuário está lendo atualmente, com detalhes do progresso.
- **Campo de Página Atual:** Campo para registrar e atualizar a página atual de cada livro.
- **Botão de Atualizar Progresso:** Botão para salvar as atualizações do progresso de leitura.
- **Botão de Adicionar Livro:** Botão para adicionar novos livros à lista de andamento de leitura.

## Layout
- **Área Superior:** Título da tela e resumo dos livros em andamento.
- **Área Central:** Lista detalhada dos livros em progresso, incluindo campos para atualizar a página atual.
- **Área Inferior:** Botões para atualizar o progresso e adicionar novos livros.

## Fluxo de Navegação
- **Entrada:** O usuário acessa a Tela de Andamento de Leitura a partir da Tela Home ou da Tela de Biblioteca.
- **Saída:**
  - **Tela de Biblioteca:** Após atualizar o progresso ou adicionar um novo livro.
  - **Tela de Detalhes do Livro:** Após clicar em um livro para visualizar detalhes ou atualizar o progresso.

## Interações do Usuário
- **Lista de Livros em Progresso:** O usuário visualiza os livros que está lendo, incluindo detalhes do progresso.
- **Campo de Página Atual:** O usuário insere ou atualiza a página atual em que parou a leitura.
- **Botão de Atualizar Progresso:** O usuário clica para salvar as atualizações de progresso feitas nos livros.
- **Botão de Adicionar Livro:** O usuário clica para adicionar novos livros à lista de andamento de leitura.

## Requisitos de Dados
- **Entrada de Dados:** Informações sobre o progresso de leitura de cada livro (página atual, status).
- **Saída de Dados:** Atualizações salvas sobre o progresso de leitura dos livros.

## Validações
- **Campo de Página Atual:** Verificar que a entrada da página atual é válida e corresponde a um número positivo.
- **Botão de Atualizar Progresso:** Garantir que as atualizações do progresso são salvas corretamente.

## Exemplos Visuais
- **Imagem 1:** ![Exemplo de Tela de Andamento de Leitura](link_para_imagem_de_andamento_de_leitura)

## Considerações de Acessibilidade
- **Contraste de Cores:** Garantir que todos os textos e botões tenham contraste suficiente com o fundo para facilitar a leitura e interação.
- **Navegação por Teclado:** Assegurar que todos os campos e botões sejam acessíveis via teclado e que a navegação seja intuitiva.

## Notificações
- **Confirmação de Atualização:** Mensagem de confirmação quando o progresso de leitura é atualizado com sucesso.
- **Erro ao Atualizar:** Mensagem de erro se ocorrer um problema ao salvar as atualizações de progresso.

## Testes
- **Teste 1:** Verificar se a lista de livros em progresso é exibida corretamente e inclui todas as informações necessárias.
- **Teste 2:** Testar a funcionalidade do campo de página atual para garantir que as atualizações sejam salvas corretamente.
- **Teste 3:** Verificar a funcionalidade dos botões de atualizar progresso e adicionar livro para garantir que funcionam conforme o esperado.

## Comentários
- A Tela de Andamento de Leitura deve proporcionar uma visão clara e organizada do progresso de leitura dos livros.
- Deve ser garantida a responsividade da tela para exibir corretamente em diferentes tamanhos de dispositivos.

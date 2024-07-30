# Tela de Adicionar/Editar Livro

## Descrição
A Tela de Adicionar/Editar Livro permite ao usuário adicionar um novo livro à sua biblioteca ou editar informações de um livro existente. Inclui campos para inserir detalhes do livro e opções para salvar ou cancelar as alterações.

## Componentes Principais
- **Campo de Título:** Campo de entrada para o título do livro.
- **Campo de Autor:** Campo de entrada para o nome do autor do livro.
- **Campo de Data de Publicação:** Campo de entrada para a data de publicação do livro.
- **Campo de Descrição:** Campo de entrada para a descrição ou sinopse do livro.
- **Campo de Notas:** Campo para o usuário inserir notas sobre o livro (opcional).
- **Botão de Salvar:** Botão para salvar as informações inseridas ou modificadas.
- **Botão de Cancelar:** Botão para cancelar a edição ou adição e retornar à tela anterior.

## Layout
- **Área Superior:** Título da tela e campos de entrada para os detalhes do livro.
- **Área Central:** Campos para inserir título, autor, data de publicação, descrição e notas.
- **Área Inferior:** Botões para salvar ou cancelar as alterações.

## Fluxo de Navegação
- **Entrada:** O usuário acessa a Tela de Adicionar/Editar Livro a partir da Tela de Biblioteca (para adicionar um novo livro) ou da Tela de Detalhes do Livro (para editar um livro existente).
- **Saída:**
  - **Tela de Biblioteca:** Após salvar as alterações ou adicionar um novo livro.
  - **Tela de Detalhes do Livro:** Após editar e salvar as informações de um livro existente.

## Interações do Usuário
- **Campo de Título:** O usuário insere o título do livro.
- **Campo de Autor:** O usuário insere o nome do autor do livro.
- **Campo de Data de Publicação:** O usuário insere a data de publicação do livro.
- **Campo de Descrição:** O usuário insere uma descrição ou sinopse do livro.
- **Campo de Notas:** O usuário insere notas sobre o livro (opcional).
- **Botão de Salvar:** O usuário clica para salvar as informações inseridas ou modificadas. As alterações são salvas e o usuário é redirecionado para a Tela de Biblioteca ou Tela de Detalhes do Livro.
- **Botão de Cancelar:** O usuário clica para cancelar a adição ou edição e retornar à tela anterior sem salvar alterações.

## Requisitos de Dados
- **Entrada de Dados:** Informações do livro (título, autor, data de publicação, descrição, notas).
- **Saída de Dados:** Adição ou atualização de informações do livro na biblioteca.

## Validações
- **Título:** Verificar que o campo de título não esteja vazio.
- **Autor:** Verificar que o campo de autor não esteja vazio.
- **Data de Publicação:** Validar o formato da data de publicação.
- **Descrição:** Garantir que a descrição seja salva corretamente, mesmo que seja opcional.

## Exemplos Visuais
- **Imagem 1:** ![Exemplo de Tela de Adicionar Livro](link_para_imagem_de_adicionar_livro)
- **Imagem 2:** ![Exemplo de Tela de Editar Livro](link_para_imagem_de_editar_livro)

## Considerações de Acessibilidade
- **Contraste de Cores:** Garantir que os campos de entrada e botões tenham contraste suficiente com o fundo para fácil leitura e interação.
- **Navegação por Teclado:** Assegurar que todos os campos e botões sejam acessíveis via teclado e que a navegação seja intuitiva.

## Notificações
- **Confirmação de Salvamento:** Mensagem de confirmação quando as informações são salvas com sucesso.
- **Erro ao Salvar:** Mensagem de erro se ocorrer um problema ao salvar as informações.

## Testes
- **Teste 1:** Verificar se os campos de entrada aceitam e validam informações corretamente.
- **Teste 2:** Testar a funcionalidade do botão de salvar para garantir que as informações sejam armazenadas corretamente.
- **Teste 3:** Verificar a funcionalidade do botão de cancelar para garantir que ele retorna à tela anterior sem salvar alterações.

## Comentários
- A Tela de Adicionar/Editar Livro deve ser clara e fácil de usar, proporcionando uma experiência intuitiva para adicionar ou modificar informações de livros.
- Deve ser garantida a responsividade da tela para exibir corretamente em diferentes tamanhos de dispositivos.

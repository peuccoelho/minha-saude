# Minha Saúde - App de Login

Este é um aplicativo React Native que implementa uma tela de login com design moderno e limpo, baseado na imagem fornecida.

## Características

- Design fiel à imagem original com fundo azul vibrante
- Ícone personalizado de cartão de saúde
- Campos de entrada para login e senha
- Botões de ação (Entrar, Registre-se aqui)
- Link para recuperação de senha
- Botão de ajuda no canto inferior direito
- Interface responsiva e moderna

## Tecnologias Utilizadas

- React Native
- Expo
- Expo Vector Icons
- React Native Vector Icons

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Use o Expo Go no seu dispositivo móvel para visualizar o app, ou execute em um emulador:

```bash
npm run android  # Para Android
npm run ios      # Para iOS
```

## Estrutura do Projeto

```
minha-saude/
├── App.js                 # Componente principal
├── src/
│   └── screens/
│       └── LoginScreen.js # Tela de login
├── package.json
├── app.json
└── babel.config.js
```

## Funcionalidades Implementadas

- Validação básica de campos obrigatórios
- Alertas informativos para ações dos botões
- Design responsivo
- Ícones personalizados
- Estilização fiel ao design original

## Próximos Passos

- Implementar navegação entre telas
- Adicionar autenticação real
- Criar tela de registro
- Implementar recuperação de senha
- Adicionar validações mais robustas

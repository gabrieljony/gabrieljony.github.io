# 📚 Documentação da Estrutura de Componentes

## 📂 Nova Estrutura de Diretórios

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── header.js       # ✅ Melhorado com navigation centralizada
│   ├── layout.js       # ✅ Melhorado com acessibilidade
│   ├── layout.css      
│   ├── SocialLinks/
│   │   ├── SocialLinks.js  # ✅ Melhorado com keys dinâmicas
│   │   ├── styled.js       # ✅ Melhorado com tema centralizado
│   │   ├── content.js
│   │   ├── Icons.js
│   │   └── index.js
│   ├── seo.js
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── index.js        # ✅ Melhorado
│   └── ...
├── constants/          # ✨ NOVO - Constantes globais
│   ├── navigation.js   # Items de navegação
│   └── theme.js        # Variáveis de tema
├── hooks/              # ✨ NOVO - Custom hooks
│   ├── useSocialLinks.js
│   ├── useTheme.js
│   └── index.js
├── utils/              # ✨ NOVO - Funções utilitárias
│   ├── validation.js   # Validação de dados
│   ├── formatting.js   # Formatação de strings/datas
│   └── index.js
├── context/            # ✨ NOVO - Context API (para futuros usos)
└── styles/             # ✨ NOVO - Estilos globais (para futuros usos)
```

## ✨ Principais Melhorias Implementadas

### 1. **Remoção de Keys Numéricas**
- ❌ Antes: `key={i}`
- ✅ Depois: `key={product-${label}}`
- 📌 Evita bugs quando lista é reordenada

### 2. **Memoização de Componentes**
- ✅ `export default memo(SocialLinks)`
- 📌 Evita re-renders desnecessários

### 3. **Acessibilidade (A11y)**
- ✅ Atributos `aria-label`, `aria-hidden`, `role`
- ✅ Estrutura semântica com `<nav>`, `<main>`, `<footer>`
- ✅ Outline de focus para navegação via teclado

### 4. **Centralização de Constantes**
```javascript
// Antes: valores espalhados pelo código
<div className="menus">
  <li><Link to="/about">About</Link></li>
  // ...
</div>

// Depois: constante centralizada
import { NAV_ITEMS } from "../constants/navigation"
{NAV_ITEMS.map((item) => ...)}
```

### 5. **Custom Hooks Reutilizáveis**
- `useSocialLinks()` - Gerencia links sociais
- `useTheme()` - Gerencia tema da aplicação
- 📌 Fácil de testar e manter

### 6. **Utilities e Helpers**
- `validation.js` - Funções de validação
- `formatting.js` - Formatação de dados
- 📌 Código DRY (Don't Repeat Yourself)

### 7. **PropTypes em Todos os Componentes**
```javascript
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: "",
}
```

### 8. **Documentação JSDoc**
```javascript
/**
 * Componente de links para redes sociais
 * @component
 * @returns {JSX.Element} Renderiza lista de links sociais
 */
```

### 9. **ESLint Configurado**
- Scripts: `npm run lint` e `npm run lint:fix`
- Regras: React, a11y, hooks

### 10. **Tema Centralizado**
```javascript
const THEME = {
  colors: { ... },
  spacing: { ... },
  transitions: { ... },
  breakpoints: { ... },
}
```

## 🚀 Como Usar as Novas Features

### Usar Custom Hook
```javascript
import { useSocialLinks } from "../hooks"

function MyComponent() {
  const links = useSocialLinks()
  return links.map(link => ...)
}
```

### Usar Utilities
```javascript
import { formatDate, isValidURL } from "../utils"

const formattedDate = formatDate(new Date())
const valid = isValidURL("https://example.com")
```

### Usar Constantes
```javascript
import { NAV_ITEMS, THEME } from "../constants"

// Adicionar novo item de navegação:
// Apenas adicione em src/constants/navigation.js
```

## 📋 Scripts Disponíveis

```bash
npm run develop      # Desenvolvimento
npm run build        # Build de produção
npm run lint         # Verificar erros
npm run lint:fix     # Corrigir erros automaticamente
npm run format       # Formatar código
npm run clean        # Limpar cache
npm run deploy       # Deploy para gh-pages
```

## 🔄 Próximas Melhorias Sugeridas

- [ ] Adicionar testes com Jest/Testing Library
- [ ] Implementar dark mode com useTheme hook
- [ ] Adicionar TypeScript gradualmente
- [ ] Criar Storybook para componentes
- [ ] Adicionar CI/CD com GitHub Actions
- [ ] Melhorar performance com lazy loading
- [ ] Adicionar analytics com Plausible/Fathom
- [ ] Cache strategy com service workers

---

**Versão**: 1.0 | **Última atualização**: 19/05/2026

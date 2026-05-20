# 📋 Guia de Migração - Como Atualizar Componentes Antigos

Este guia mostra como refatorar componentes antigos para seguir os novos padrões.

## 🔄 Passo a Passo - Exemplo Real

### ❌ ANTES: Componente antigo com problemas

```javascript
// src/components/OldComponent.js
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 12px;
  color: var(--texts);
`

const OldComponent = ({ items, onItemClick }) => {
  return (
    <Wrapper>
      <ul>
        {items.map((item, i) => (           // ❌ Key numérica!
          <li key={i} onClick={() => onItemClick(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default OldComponent               // ❌ Sem memo!
```

### ✅ DEPOIS: Componente refatorado

```javascript
// src/components/OldComponent/OldComponent.js
import React, { memo, useCallback } from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

/**
 * Componente lista de items
 * 
 * @component
 * @param {Object} props - Propriedades
 * @param {Array} props.items - Items para renderizar
 * @param {function} props.onItemClick - Callback ao clicar
 * @returns {JSX.Element} Lista renderizada
 */
const OldComponent = ({ items = [], onItemClick }) => {
  const handleClick = useCallback(
    (item) => {
      onItemClick(item)
    },
    [onItemClick]
  )

  if (!Array.isArray(items) || items.length === 0) {
    return <p>Nenhum item disponível</p>
  }

  return (
    <S.Wrapper role="list">
      <ul>
        {items.map((item) => (               // ✅ Key dinâmica!
          <li
            key={`item-${item.id}`}          // ✅ ID único
            onClick={() => handleClick(item)}
            role="listitem"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </S.Wrapper>
  )
}

OldComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
    })
  ),
  onItemClick: PropTypes.func,
}

OldComponent.defaultProps = {
  items: [],
  onItemClick: () => {},
}

OldComponent.displayName = "OldComponent"

export default memo(OldComponent)          // ✅ Memoizado!
```

```javascript
// src/components/OldComponent/styled.js
import styled from "styled-components"
import { THEME } from "../../constants/theme"

export const Wrapper = styled.div`
  padding: ${THEME.spacing.md};            // ✅ Usando THEME
  color: ${THEME.colors.text};             // ✅ Usando THEME

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: ${THEME.spacing.sm};
    cursor: pointer;
    transition: background-color ${THEME.transitions.fast};
    border-radius: 4px;

    &:hover {
      background-color: ${THEME.colors.highlight}22;
    }

    &:focus {
      outline: 2px solid ${THEME.colors.highlight};
      outline-offset: 2px;
    }
  }
`
```

---

## 🎯 Checklist de Migração

Para cada componente antigo, siga este checklist:

### Estrutura
- [ ] Criar pasta: `src/components/ComponentName/`
- [ ] Arquivo principal: `ComponentName.js`
- [ ] Arquivo estilos: `styled.js`
- [ ] Arquivo index: `index.js` (se necessário)

### Código - Imports
- [ ] Imports organizados (externos → internos → estilos)
- [ ] Remover imports não utilizados
- [ ] Usar destruturation onde apropriado

### Código - Componente
- [ ] Adicionar JSDoc com @component
- [ ] Substituir `key={i}` por `key={unique-id}`
- [ ] Adicionar `role` attributes
- [ ] Adicionar `aria-label` onde necessário

### Código - Propriedades
- [ ] Adicionar PropTypes
- [ ] Adicionar DefaultProps
- [ ] Documentar cada prop no JSDoc
- [ ] Remover props não utilizadas

### Código - Performance
- [ ] Envolver com `memo()`
- [ ] Usar `useCallback` para funções
- [ ] Usar `useMemo` para valores complexos

### Código - Estilos
- [ ] Renomear para `styled.js`
- [ ] Importar `THEME` de constants
- [ ] Substituir `var(--texts)` por `THEME.colors.text`
- [ ] Usar `THEME.spacing`, `THEME.transitions`

### Validação
- [ ] `npm run lint` - sem erros
- [ ] `npm run lint:fix` - corrigir erros
- [ ] `npm run format` - formatar código
- [ ] Testar no browser

---

## 📝 Exemplo Completo de Migração

### 1. Componente Antigo - Header

```javascript
// ❌ ANTES
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <h1><Link to="/">{siteTitle}</Link></h1>
    <nav>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/projects">Projects</a>
    </nav>
  </header>
)

export default Header
```

### 2. Criar Nova Pasta
```bash
mkdir src/components/Header
```

### 3. Refatorar - Arquivo Principal

```javascript
// ✅ DEPOIS - src/components/Header/Header.js
import React, { memo } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { NAV_ITEMS } from "../../constants/navigation"

/**
 * Componente Header da aplicação
 * 
 * @component
 * @param {Object} props - Propriedades
 * @param {string} props.siteTitle - Título do site
 * @returns {JSX.Element} Header renderizado
 */
const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav aria-label="Navegação principal">
      <ul role="navigation">
        {NAV_ITEMS.map((item) => (
          <li key={`nav-${item.path}`}>
            <Link to={item.path} activeClassName="active">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

Header.displayName = "Header"

export default memo(Header)
```

### 4. Criar Arquivo de Estilos

```javascript
// src/components/Header/styled.js
import styled from "styled-components"
import { THEME } from "../../constants/theme"

export const HeaderWrapper = styled.header`
  padding: ${THEME.spacing.lg};

  h1 {
    margin: 0;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: ${THEME.spacing.lg};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${THEME.colors.text};
    text-decoration: none;
    transition: color ${THEME.transitions.normal};

    &:hover,
    &.active {
      color: ${THEME.colors.highlight};
    }

    &:focus {
      outline: 2px solid ${THEME.colors.highlight};
      outline-offset: 2px;
    }
  }
`
```

### 5. Criar Index (opcional)

```javascript
// src/components/Header/index.js
export { default } from "./Header"
```

### 6. Atualizar Imports

```javascript
// Antes
import Header from "components/header"

// Depois
import Header from "../components/Header"
```

---

## 🔍 Padrões Comuns de Migração

### Pattern 1: Key em Loop
```diff
- {items.map((item, i) => <Item key={i} {...item} />)}
+ {items.map((item) => <Item key={`item-${item.id}`} {...item} />)}
```

### Pattern 2: Hardcoded Values
```diff
- <Button color="#FF0000" padding="12px">Clique</Button>
+ import { THEME } from "../constants/theme"
+ <Button color={THEME.colors.highlight} padding={THEME.spacing.md}>Clique</Button>
```

### Pattern 3: Sem PropTypes
```diff
- const MyComponent = ({ title }) => <h1>{title}</h1>
+ MyComponent.propTypes = { title: PropTypes.string.isRequired }
+ MyComponent.defaultProps = { title: "" }
```

### Pattern 4: Sem Memo
```diff
- export default MyComponent
+ export default memo(MyComponent)
```

### Pattern 5: Styled Inline
```diff
- <div style={{ padding: "12px", color: "var(--texts)" }}>
+ import * as S from "./styled"
+ <S.Wrapper>
```

### Pattern 6: Sem Acessibilidade
```diff
- <nav><a href="/about">About</a></nav>
+ <nav aria-label="Menu">
+   <Link to="/about" aria-label="Página sobre nós">About</Link>
+ </nav>
```

---

## 🚀 Ordem Recomendada de Migração

1. **Priority 1** (Mais usado)
   - [ ] `Header` - usado em todas as páginas
   - [ ] `Layout` - wrapper principal
   - [ ] `SocialLinks` - componente reutilizado

2. **Priority 2** (Core)
   - [ ] Componentes que recebem props dinâmicas
   - [ ] Componentes que fazem requisições
   - [ ] Componentes com lógica complexa

3. **Priority 3** (Nice to have)
   - [ ] Componentes simples/apresentacionais
   - [ ] Componentes raramente atualizados

---

## ✅ Validação Após Migração

```bash
# 1. Verificar lint
npm run lint

# 2. Corrigir automaticamente
npm run lint:fix

# 3. Formatar código
npm run format

# 4. Build de teste
npm run build

# 5. Testar em desenvolvimento
npm run develop
```

---

## 📚 Arquivos de Referência

Consulte quando não tiver certeza:
- 📘 `CODING_STANDARDS.md` - Padrões
- 📗 `COMPONENT_STRUCTURE.md` - Estrutura
- 📙 `PRACTICAL_EXAMPLES.md` - Exemplos
- 📕 `QUICK_START.md` - Rápido

---

**Dica Pro**: Faça uma migração por vez e teste antes de fazer push!

```bash
git checkout -b refactor/migrate-component-name
# Fazer mudanças
npm run lint:fix && npm run format
git add .
git commit -m "refactor: atualizar ComponentName para novos padrões"
git push origin refactor/migrate-component-name
```

---

**Versão**: 1.0.0 | **Data**: 19/05/2026

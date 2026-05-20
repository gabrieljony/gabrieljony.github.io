/**
 * PADRÕES DE CÓDIGO - Guia para contribuir ao projeto
 * Seguir estes padrões garante consistência no codebase
 */

// ============================================================================
// 1. IMPORTAÇÕES - Ordem recomendada
// ============================================================================

// Primeiro: React e bibliotecas externas
import React, { memo } from "react"
import PropTypes from "prop-types"

// Depois: Imports internos
import { NAV_ITEMS } from "../constants/navigation"
import { useSocialLinks } from "../hooks"
import { isValidURL } from "../utils"

// Por último: Estilos
import * as S from "./styled"

// ============================================================================
// 2. COMPONENTES - Estrutura padrão
// ============================================================================

/**
 * Breve descrição do componente
 * 
 * @component
 * @description Descrição mais detalhada do que o componente faz
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Descrição do prop
 * @param {function} props.onClick - Callback quando clicado
 * @returns {JSX.Element} O elemento renderizado
 * 
 * @example
 * return <MyComponent title="Exemplo" onClick={() => {}} />
 */
const MyComponent = ({ title, onClick }) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <button onClick={onClick}>Clique aqui</button>
    </S.Wrapper>
  )
}

// PropTypes SEMPRE
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

// DefaultProps para valores opcionais
MyComponent.defaultProps = {
  onClick: () => {},
}

// displayName para melhor debugging
MyComponent.displayName = "MyComponent"

// Memoizar se apropriado
export default memo(MyComponent)

// ============================================================================
// 3. STYLED COMPONENTS - Padrão de naming
// ============================================================================

import styled from "styled-components"
import { THEME } from "../constants/theme"

export const Wrapper = styled.div`
  padding: ${THEME.spacing.md};
  color: ${THEME.colors.text};
  transition: color ${THEME.transitions.normal};

  &:hover {
    color: ${THEME.colors.highlight};
  }
`

export const Title = styled.h1`
  font-size: 24px;
  margin: ${THEME.spacing.lg} 0;
`

// ============================================================================
// 4. CUSTOM HOOKS - Padrão
// ============================================================================

/**
 * Hook para gerenciar estado de exemplo
 * @param {string} initialValue - Valor inicial do estado
 * @returns {Object} Estado e função para atualizar
 */
const useCustomHook = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue)

  const update = React.useCallback((newValue) => {
    setValue(newValue)
  }, [])

  return { value, update }
}

// ============================================================================
// 5. UTILITIES - Funções puras
// ============================================================================

/**
 * Função utilitária bem documentada
 * @param {string} input - Descrição do parâmetro
 * @returns {string} Descrição do retorno
 */
export const myUtilityFunction = (input) => {
  // Implementação
  return result
}

// ============================================================================
// 6. CONSTANTES - Organização
// ============================================================================

// src/constants/myConstants.js
export const MY_CONSTANT = "valor"
export const DEFAULTS = {
  timeout: 3000,
  retries: 3,
}

// ============================================================================
// 7. ACESSIBILIDADE - Checklist
// ============================================================================

const AccessibleComponent = () => (
  <nav aria-label="Navegação principal">
    <ul role="navigation">
      <li key="item-1">
        <a
          href="/about"
          title="Sobre"
          aria-label="Página sobre nós"
        >
          Sobre
        </a>
      </li>
    </ul>
  </nav>
)

// Checklist:
// ✅ Usar tags semânticas: <nav>, <main>, <section>, <footer>
// ✅ Adicionar aria-label para elementos interativos
// ✅ Usar aria-hidden="true" para ícones decorativos
// ✅ Garantir contraste de cores (WCAG AA)
// ✅ Suportar navegação via teclado
// ✅ Usar role quando necessário

// ============================================================================
// 8. KEYS - Como gerar
// ============================================================================

// ❌ NUNCA use índice como key
items.map((item, i) => <Item key={i} />)

// ✅ Use ID único
items.map((item) => <Item key={`item-${item.id}`} />)

// ✅ Ou uma combinação de dados
items.map((item) => <Item key={`${item.category}-${item.name}`} />)

// ============================================================================
// 9. PERFORMANCE - Memoização
// ============================================================================

// Memoizar componentes que recebem mesmos props frequentemente
export default memo(MyComponent)

// Memoizar callbacks
const handleClick = useCallback(() => {
  // fazer algo
}, [dependency])

// Memoizar valores complexos
const data = useMemo(() => {
  return complexCalculation()
}, [dependency])

// ============================================================================
// 10. TRATAMENTO DE ERROS
// ============================================================================

const SafeComponent = ({ data }) => {
  if (!data) {
    return <p>Dados não disponíveis</p>
  }

  if (!Array.isArray(data)) {
    console.warn("Prop 'data' deveria ser um array")
    return null
  }

  return data.map((item) => <Item key={`item-${item.id}`} {...item} />)
}

// ============================================================================
// RESUMO DE BOAS PRÁTICAS
// ============================================================================

/*
1. LINTING
   - npm run lint    -> Verificar
   - npm run lint:fix -> Corrigir

2. FORMATAÇÃO
   - npm run format  -> Aplicar prettier

3. NAMING
   - Componentes: PascalCase (MyComponent)
   - Funções/Const: camelCase (myFunction)
   - Constantes: UPPER_SNAKE_CASE (MY_CONSTANT)
   - Styled: PascalCase (Wrapper, Title)

4. PASTA
   - Componente em: src/components/ComponentName/
   - Arquivo principal: ComponentName.js
   - Estilos: styled.js
   - Testes: ComponentName.test.js

5. DOCUMENTAÇÃO
   - Sempre use JSDoc em funções públicas
   - Comente lógica complexa
   - Mantenha README atualizado

6. COMMITS
   - feat: Nova feature
   - fix: Correção de bug
   - refactor: Refatoração
   - docs: Documentação
   - style: Formatação/lint

Exemplo: git commit -m "feat: adicionar novo componente Button"
*/

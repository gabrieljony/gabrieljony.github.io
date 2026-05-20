/**
 * EXEMPLOS PRÁTICOS - Como usar as novas features
 * Copie e adapte para seu caso de uso
 */

// ============================================================================
// EXEMPLO 1: Criar novo componente com todas as boas práticas
// ============================================================================

// Arquivo: src/components/Button/Button.js

import React, { memo } from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

/**
 * Componente Button reutilizável
 * 
 * @component
 * @description Botão com variantes de estilo e tamanho
 * @param {Object} props - Propriedades do componente
 * @param {string} props.label - Texto do botão
 * @param {"primary" | "secondary"} [props.variant] - Estilo do botão
 * @param {"small" | "medium" | "large"} [props.size] - Tamanho
 * @param {function} props.onClick - Callback ao clicar
 * @param {boolean} [props.disabled] - Desabilitar botão
 * @returns {JSX.Element} Botão renderizado
 * 
 * @example
 * <Button 
 *   label="Enviar" 
 *   variant="primary" 
 *   onClick={() => console.log('Clicado')} 
 * />
 */
const Button = ({ 
  label, 
  variant = "primary", 
  size = "medium", 
  onClick, 
  disabled = false 
}) => (
  <S.ButtonWrapper
    type="button"
    variant={variant}
    size={size}
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
  >
    {label}
  </S.ButtonWrapper>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  onClick: () => {},
  disabled: false,
}

Button.displayName = "Button"

export default memo(Button)

// Arquivo: src/components/Button/styled.js

import styled, { css } from "styled-components"
import { THEME } from "../../constants/theme"

const sizes = {
  small: css`
    padding: ${THEME.spacing.sm} ${THEME.spacing.md};
    font-size: 12px;
  `,
  medium: css`
    padding: ${THEME.spacing.md} ${THEME.spacing.lg};
    font-size: 14px;
  `,
  large: css`
    padding: ${THEME.spacing.lg} ${THEME.spacing.xl};
    font-size: 16px;
  `,
}

const variants = {
  primary: css`
    background-color: ${THEME.colors.highlight};
    color: white;

    &:hover {
      opacity: 0.9;
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${THEME.colors.text};
    border: 1px solid ${THEME.colors.border};

    &:hover {
      background-color: ${THEME.colors.highlight}22;
    }
  `,
}

export const ButtonWrapper = styled.button`
  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant]}
  
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all ${THEME.transitions.fast};
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid ${THEME.colors.highlight};
    outline-offset: 2px;
  }
`

// ============================================================================
// EXEMPLO 2: Criar novo custom hook
// ============================================================================

// Arquivo: src/hooks/useFetch.js

import { useState, useEffect, useCallback } from "react"

/**
 * Hook para fazer requisições HTTP
 * 
 * @param {string} url - URL para fazer requisição
 * @param {Object} [options] - Opções fetch
 * @returns {Object} Estado e funções de controle
 * @returns {*} data - Dados retornados
 * @returns {Error} error - Erro ocorrido
 * @returns {boolean} loading - Se está carregando
 * @returns {function} refetch - Função para recarregar
 * 
 * @example
 * const { data, loading, error, refetch } = useFetch('https://api.example.com/data')
 */
const useFetch = (url, options = {}) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })

  const fetch_data = useCallback(async () => {
    setState({ data: null, loading: true, error: null })

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setState({ data, loading: false, error: null })
    } catch (error) {
      setState({ data: null, loading: false, error })
      console.warn(`Erro ao buscar ${url}:`, error)
    }
  }, [url, options])

  useEffect(() => {
    fetch_data()
  }, [fetch_data])

  return { ...state, refetch: fetch_data }
}

export default useFetch

// ============================================================================
// EXEMPLO 3: Criar novas constantes
// ============================================================================

// Arquivo: src/constants/api.js

/**
 * Constantes de API
 */

export const API_BASE_URL = "https://api.example.com"

export const API_ENDPOINTS = {
  users: "/users",
  posts: "/posts",
  comments: "/comments",
}

export const API_TIMEOUTS = {
  default: 10000,
  upload: 30000,
  download: 60000,
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}

// ============================================================================
// EXEMPLO 4: Criar novas utilities
// ============================================================================

// Arquivo: src/utils/api.js

import { API_BASE_URL } from "../constants/api"

/**
 * Faz requisição para a API
 * @param {string} endpoint - Endpoint da API
 * @param {Object} options - Opções fetch
 * @returns {Promise<*>} Dados retornados
 */
export const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Erro ao chamar ${endpoint}:`, error)
    throw error
  }
}

/**
 * Cria URL de query string
 * @param {Object} params - Parâmetros
 * @returns {string} Query string
 */
export const buildQueryString = (params) => {
  const query = new URLSearchParams(params)
  return query.toString()
}

// ============================================================================
// EXEMPLO 5: Usar tudo junto - Componente Completo
// ============================================================================

// Arquivo: src/components/UserList/UserList.js

import React, { memo } from "react"
import PropTypes from "prop-types"

import { useFetch } from "../../hooks"
import { API_ENDPOINTS } from "../../constants/api"
import { formatDate } from "../../utils/formatting"
import Button from "../Button/Button"

import * as S from "./styled"

/**
 * Lista de usuários com dados da API
 * 
 * @component
 * @returns {JSX.Element} Lista renderizada
 */
const UserList = () => {
  const { 
    data: users, 
    loading, 
    error, 
    refetch 
  } = useFetch(API_ENDPOINTS.users)

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar usuários</p>
  if (!users?.length) return <p>Nenhum usuário encontrado</p>

  return (
    <S.Container>
      <S.Header>
        <h2>Usuários</h2>
        <Button 
          label="Recarregar" 
          onClick={refetch}
          size="small"
        />
      </S.Header>

      <S.UserGrid>
        {users.map((user) => (
          <S.UserCard key={`user-${user.id}`}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <small>
              Criado em: {formatDate(user.createdAt)}
            </small>
          </S.UserCard>
        ))}
      </S.UserGrid>
    </S.Container>
  )
}

UserList.propTypes = {}
UserList.displayName = "UserList"

export default memo(UserList)

// Arquivo: src/components/UserList/styled.js

import styled from "styled-components"
import { THEME } from "../../constants/theme"

export const Container = styled.div`
  padding: ${THEME.spacing.lg};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${THEME.spacing.lg};
`

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${THEME.spacing.lg};
`

export const UserCard = styled.div`
  padding: ${THEME.spacing.md};
  border: 1px solid ${THEME.colors.border};
  border-radius: 4px;
  transition: all ${THEME.transitions.normal};

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  h3 {
    margin: 0 0 ${THEME.spacing.sm} 0;
  }

  p {
    color: ${THEME.colors.text}99;
    margin: 0;
  }
`

// ============================================================================
// EXEMPLO 6: Uso em uma página
// ============================================================================

// Arquivo: src/pages/users.js

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserList from "../components/UserList/UserList"

const UsersPage = () => (
  <Layout>
    <SEO 
      title="Usuários" 
      description="Lista de usuários do sistema"
    />
    <UserList />
  </Layout>
)

export default UsersPage

// ============================================================================
// RESUMO: O que usar e quando
// ============================================================================

/*
QUANDO USAR CADA COISA:

1. Constants
   - Valores que não mudam: URLs, timeouts, defaults
   - Lógica que será reutilizada
   - Evita "magic numbers" e "magic strings"

2. Hooks
   - Lógica stateful reutilizável
   - Efeitos colaterais (API, localStorage, etc)
   - Simplifica componentes complexos

3. Utils
   - Funções puras sem estado
   - Transformação de dados
   - Validações e formatações

4. Styled Components
   - Estilos baseados em props
   - Temas dinamicamente
   - Evita conflitos de CSS

5. Componentes
   - Interface reutilizável
   - Sempre com PropTypes
   - Memoizar se apropriado

ESTRUTURA IDEAL:
Component (UI) → Hook (Lógica) → Utils (Funções) → Constants (Dados)
*/

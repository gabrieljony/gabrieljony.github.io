# 🆘 Troubleshooting & FAQ

## ❓ Perguntas Frequentes

### P: Como adiciono um novo item de navegação?
**R:** Edite `src/constants/navigation.js`:
```javascript
export const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Novo Item", path: "/novo-item" }, // ← Adicione aqui
]
```

### P: Como uso o tema em meus estilos?
**R:** Importe e use:
```javascript
import { THEME } from "../constants/theme"

export const Wrapper = styled.div`
  padding: ${THEME.spacing.md};
  color: ${THEME.colors.text};
`
```

### P: Como crio um novo custom hook?
**R:** Crie em `src/hooks/useMyHook.js`:
```javascript
const useMyHook = () => {
  const [state, setState] = useState(null)
  return { state, setState }
}
export default useMyHook
```

Depois exporte em `src/hooks/index.js`:
```javascript
export { default as useMyHook } from "./useMyHook"
```

### P: Por que estou vendo erro de lint?
**R:** Execute:
```bash
npm run lint:fix
npm run format
```

### P: Como memoizo um componente?
**R:** Use:
```javascript
import { memo } from "react"
export default memo(MyComponent)
```

### P: Por que meu componente re-renderiza muito?
**R:** Adicione `memo()` e use `useCallback`:
```javascript
const handleClick = useCallback(() => {
  // fazer algo
}, [dependency])

export default memo(MyComponent)
```

---

## 🐛 Problemas Comuns

### Problema: "Key is not a valid React prop"
```
❌ ERRADO:
{items.map((item, i) => <Item key={i} />)}

✅ CORRETO:
{items.map((item) => <Item key={`item-${item.id}`} />)}
```

### Problema: Console aviso sobre PropTypes
```
❌ ERRADO:
const MyComponent = ({ title }) => <h1>{title}</h1>
export default MyComponent

✅ CORRETO:
import PropTypes from "prop-types"

const MyComponent = ({ title }) => <h1>{title}</h1>
MyComponent.propTypes = { title: PropTypes.string }
export default MyComponent
```

### Problema: Componente não muda de cor no hover
```
❌ Verificar:
- Color está usando CSS variable correto?
- z-index não está bloqueando?

✅ Solução:
&:hover {
  color: ${THEME.colors.highlight};  // Use THEME
}
```

### Problema: Build falha com erro de lint
```bash
# Solução:
npm run lint:fix  # Corrige automaticamente
npm run format    # Formata o código
npm run build     # Tenta novamente
```

### Problema: Import relativo está quebrado
```
❌ ERRADO:
import Component from "components/MyComponent"

✅ CORRETO (da mesma pasta):
import Component from "./MyComponent"

✅ CORRETO (subir um nível):
import { THEME } from "../../constants/theme"
```

### Problema: Styled component não pega props
```
❌ ERRADO:
const Wrapper = styled.div`
  color: ${props => props.color};
`

✅ CORRETO:
const Wrapper = styled.div`
  color: ${(props) => props.color};
`

<Wrapper color={THEME.colors.text} />
```

---

## 🔧 Debug Tips

### Tip 1: Verificar se componente está memoizado
```javascript
// Adicione displayName para melhor debugging
MyComponent.displayName = "MyComponent"
```

### Tip 2: Verificar re-renders
```javascript
// Use este hook temporariamente
const useWhyDidYouUpdate = (name, props) => {
  const previousProps = React.useRef()
  
  React.useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      const changedProps = {}
      
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changedProps[key] = {
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })
      
      if (Object.keys(changedProps).length) {
        console.log("[why-did-you-update]", name, changedProps)
      }
    }
    
    previousProps.current = props
  }, [props, name])
}

// Use assim:
useWhyDidYouUpdate("MyComponent", { prop1, prop2 })
```

### Tip 3: Verificar PropTypes issues
```bash
# Erros de PropTypes aparecem no console
# Para ver melhor, use:
npm run develop 2>&1 | grep -i "proptype"
```

### Tip 4: Performance profiling
```javascript
// Use React DevTools
// 1. Instale a extensão do Chrome/Firefox
// 2. Abra DevTools > React
// 3. Vá em "Profiler"
// 4. Registre e analise re-renders
```

---

## 📊 Checklist de Performance

- [ ] Componentes estão memoizados?
- [ ] Callbacks usam `useCallback`?
- [ ] Valores complexos usam `useMemo`?
- [ ] Imports são específicos (não `import *`)?
- [ ] Keys são únicas (não índices)?
- [ ] Sem console.log em produção?
- [ ] Images otimizadas?
- [ ] Lazy loading ativado?

---

## 🚀 Performance Improvements

### Adicionar Lazy Loading
```javascript
import { lazy, Suspense } from "react"

const HeavyComponent = lazy(() => import("./HeavyComponent"))

export default () => (
  <Suspense fallback={<p>Carregando...</p>}>
    <HeavyComponent />
  </Suspense>
)
```

### Usar Code Splitting com Gatsby
```javascript
// Gatsby já faz automaticamente
// Cada página é um chunk diferente
```

### Otimizar Imagens
```javascript
// Usar gatsby-image (já configurado)
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const MyImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "my-image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Image fluid={data.file.childImageSharp.fluid} />
}
```

---

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [Gatsby Docs](https://www.gatsbyjs.org/docs/)
- [Styled Components Docs](https://styled-components.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💬 Como Pedir Ajuda

1. **Descreva o problema** - O que está acontecendo?
2. **Mostre o código** - Qual é o código problemático?
3. **Contexto** - Quando começou? O que mudou?
4. **Erros** - Há alguma mensagem de erro?
5. **Tentativas** - O que você já tentou?

**Exemplo de bom relatório:**
```
Problema: Componente UserList não re-renderiza quando items mudam
Código: src/components/UserList/UserList.js (linhas 42-50)
Contexto: Começou após adicionar memo()
Erro: Nenhuma mensagem de erro no console
Tentativas: Remover memo(), adicionar useEffect
```

---

## 🎓 Aprendizado Contínuo

### Tópicos para estudar:
- [ ] React Hooks avançados
- [ ] Context API
- [ ] Zustand/Redux (state management)
- [ ] TypeScript
- [ ] Testes (Jest, Testing Library)
- [ ] Acessibilidade (a11y)
- [ ] Web Performance

### Praticar:
- [ ] Criar novo componente toda semana
- [ ] Refatorar componente antigo
- [ ] Adicionar testes
- [ ] Otimizar performance
- [ ] Melhorar acessibilidade

---

## ✅ Checklist de Implantação

Antes de fazer deploy:
- [ ] `npm run lint:fix` - sem erros
- [ ] `npm run format` - código formatado
- [ ] `npm run build` - build bem-sucedido
- [ ] Teste em mobile/tablet
- [ ] Teste em navegadores diferentes
- [ ] Verificar links
- [ ] Testar formulários
- [ ] Performance OK (Lighthouse > 90)
- [ ] Acessibilidade OK (axe)

---

**Última atualização**: 19/05/2026
**Versão**: 1.0.0

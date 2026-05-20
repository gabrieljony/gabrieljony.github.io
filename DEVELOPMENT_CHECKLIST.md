# ✅ Checklist de Desenvolvimento

Use este checklist ao criar novos componentes ou features.

## 🏗️ Antes de Começar

- [ ] Issue/Task criada e atribuída
- [ ] Branch criada: `git checkout -b feat/meu-componente`
- [ ] Documentação do requisito clara

## 💻 Durante o Desenvolvimento

### Estrutura de Arquivos
- [ ] Novo componente em `src/components/ComponentName/`
- [ ] Arquivo principal: `ComponentName.js`
- [ ] Arquivo de estilos: `styled.js`
- [ ] Arquivo de index (se necessário): `index.js`

### Código
- [ ] Imports organizados (externos → internos → estilos)
- [ ] Componente com JSDoc
- [ ] PropTypes definidos
- [ ] DefaultProps configurados
- [ ] `displayName` adicionado
- [ ] Memoizado com `memo()` se apropriado
- [ ] Sem hardcoded values (usar constantes)
- [ ] Sem keys numéricas em listas

### Acessibilidade
- [ ] Tags semânticas: `<nav>`, `<main>`, `<button>`, etc
- [ ] `aria-label` em elementos interativos
- [ ] `aria-hidden="true"` em ícones decorativos
- [ ] Suporte a navegação por teclado
- [ ] Contraste de cores WCAG AA
- [ ] Labels em inputs

### Estilos
- [ ] Usar `THEME` do `constants/theme.js`
- [ ] Variáveis de espaçamento: `THEME.spacing`
- [ ] Cores: `THEME.colors`
- [ ] Transições: `THEME.transitions`
- [ ] Responsividade com `media` queries

### Performance
- [ ] Callbacks memoizados com `useCallback`
- [ ] Valores complexos com `useMemo`
- [ ] Imports dinâmicos para componentes pesados
- [ ] Sem re-renders desnecessários

## 🧪 Antes de Fazer Push

### Code Quality
- [ ] `npm run lint` - Sem erros
- [ ] `npm run lint:fix` - Automático se houver issues
- [ ] `npm run format` - Código formatado

### Testes
- [ ] Testes unitários criados (quando aplicável)
- [ ] Testes de integração passando
- [ ] Teste manual no browser

### Documentação
- [ ] README atualizado se necessário
- [ ] Componentes documentados com JSDoc
- [ ] `COMPONENT_STRUCTURE.md` atualizado se estrutura mudou
- [ ] Comentários em lógica complexa

## 📝 Commit

- [ ] Mensagem clara e descritiva
- [ ] Seguir padrão: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`
- [ ] Exemplo: `feat: adicionar componente Button com variantes`

```bash
git add .
npm run lint:fix
npm run format
git commit -m "feat: descrição clara da mudança"
git push origin feat/meu-componente
```

## 🔄 Pull Request

- [ ] PR title descritivo
- [ ] Descrição com contexto
- [ ] Screenshots/GIFs (se UI)
- [ ] Link para issue relacionada
- [ ] Checklist acima concluído
- [ ] Sem conflitos
- [ ] Esperando aprovação

### Template PR
```markdown
## Descrição
Breve descrição do que foi implementado

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Refatoração

## Checklist
- [ ] Code segue style guidelines
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Lint passing
- [ ] Sem console.log deixado

## Screenshots
(se aplicável)

## Como Testar
Passo a passo para testar a mudança
```

## 🚀 Após Aprovação

- [ ] Rebase na main (se houver conflitos)
- [ ] Squash commits (se necessário)
- [ ] Merge para main
- [ ] Delete branch local: `git branch -d feat/meu-componente`
- [ ] Delete branch remoto: `git push origin --delete feat/meu-componente`

## 📚 Referências Rápidas

```bash
# Verificar e corrigir lint
npm run lint:fix

# Formatar código
npm run format

# Rodar desenvolvimento
npm run develop

# Build para produção
npm run build

# Deploy
npm run deploy
```

## ⚠️ Coisas a NÃO Fazer

- ❌ Usar keys numéricas em listas
- ❌ Hardcoded strings/números
- ❌ Componentes sem PropTypes
- ❌ Importação com `*` (exceto styles)
- ❌ Deixar `console.log` em produção
- ❌ Modificar `package.json` sem avisar
- ❌ Commit diretamente na main
- ❌ Ignorar warnings de lint
- ❌ Componentes muito grandes (>200 linhas)
- ❌ Styles inline (usar styled-components)

## 🎯 Objetivos de Qualidade

- ✅ Coverage: > 80%
- ✅ Lighthouse: > 90
- ✅ Acessibilidade: WCAG AA
- ✅ Performance: < 3s FCP
- ✅ Zero console errors
- ✅ TypeScript: Pronto para migrar

---

**Last Updated**: 19/05/2026  
**Version**: 1.0.0

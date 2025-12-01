# WeatherHistoryCard — Storybook

## O que está aqui
Componente `WeatherHistoryCard` com:
- Estados: default, expanded, loading, error, empty
- Responsivo (mobile / desktop)
- Design tokens (src/components/WeatherHistoryCard/tokens.ts)
- Storybook stories para cada estado
- Usa `hist-clima.json` de exemplo em `src/data/`

## Como rodar localmente (recomendado)
1. `cd storybook`
2. `npm install`
3. Rodar o Storybook:
   - `npm run storybook`
4. Abrir `http://localhost:6006`

## Notas de implementação
- Estilo com TailwindCSS (configuração mínima incluída).
- Para deploy no GitHub Pages / Netlify, usar `npm run build-storybook`.
- `expanded` é controlado via prop `expanded` + `onToggle` callback.

## Props
```ts
export type Props = {
  data?: WeatherHistoryData | null;
  loading?: boolean;
  error?: string | null;
  expanded?: boolean;
  onToggle?: () => void;
  className?: string;
}
```

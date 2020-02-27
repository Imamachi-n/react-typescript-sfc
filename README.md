# Typescript & React で Single File Components

#### TypeScript & React のプロジェクトを作成

```bash
npx create-react-app react-typescript-sfc --template typescript
```

Adding TypeScript  
<https://create-react-app.dev/docs/adding-typescript/>

#### ESLint の導入

```bash
yarn add -D eslint \
eslint-plugin-react \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
@types/eslint
```

```bash
yarn add -D eslint-config-airbnb \
eslint-plugin-import \
eslint-plugin-jest \
eslint-plugin-jsx-a11y \
eslint-plugin-prefer-arrow \
eslint-plugin-react-hooks
```

```bash
yarn add -D prettier \
eslint-config-prettier \
eslint-plugin-prettier \
@types/prettier \
@types/eslint-plugin-prettier
```

```bash
yarn add -D stylelint \
prettier-stylelint \
stylelint-config-prettier \
stylelint-config-standard \
stylelint-order \
@types/stylelint
```

```bash
yarn add husky lint-staged
```

#### Redux を React に導入

```bash
yarn add redux react-redux @types/redux @types/react-redux
```

React Redux - Quick Start  
<https://react-redux.js.org/introduction/quick-start>

Redux - Configuring Your Store  
<https://redux-docs.netlify.com/recipes/configuring-your-store/>

#### React Router の導入

```bash
yarn add react-router-dom @types/react-router-dom
```

React Router - Quick Start  
<https://reacttraining.com/react-router/web/guides/quick-start>

#### React Router と Redux の統合

React Router - Redux Integration  
<https://reacttraining.com/react-router/web/guides/redux-integration>

#### Global CSS を指定する方法

createGlobalStyle  
<https://styled-components.com/docs/api#createglobalstyle>

#### 複数の reducer を結合する

Using `combineReducers`  
<https://redux-docs.netlify.com/recipes/structuring-reducers/using-combinereducers>

### 参考資料

- [経年劣化に耐える ReactComponent の書き方](https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a)
- [typescript-fsa に頼らない React × Redux](https://logmi.jp/tech/articles/320496)
- [『りあクト！ TypeScript で始めるつらくない React 開発 第 2 版』のサポートページ](https://github.com/oukayuka/ReactBeginnersBook-2.0)

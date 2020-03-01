# Typescript & React で Single File Components

経年劣化に耐える React のソフトウェア設計を考えるためのサンプルプロジェクト。参考資料で示した Qiita の記事を大いに参考にしました。

## 目次

<!-- TOC -->

- [Typescript & React で Single File Components](#typescript--react-%e3%81%a7-single-file-components)
  - [目次](#%e7%9b%ae%e6%ac%a1)
  - [詳細](#%e8%a9%b3%e7%b4%b0)
    - [TypeScript & React のプロジェクトを作成](#typescript--react-%e3%81%ae%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e3%82%92%e4%bd%9c%e6%88%90)
    - [ESLint & Prettier の導入](#eslint--prettier-%e3%81%ae%e5%b0%8e%e5%85%a5)
      - [eslint-config-airbnb](#eslint-config-airbnb)
      - [eslint-plugin-react](#eslint-plugin-react)
      - [eslint-plugin-react-hooks](#eslint-plugin-react-hooks)
      - [eslint-plugin-import](#eslint-plugin-import)
      - [eslint-plugin-jsx-a11y](#eslint-plugin-jsx-a11y)
      - [eslint-plugin-jest](#eslint-plugin-jest)
      - [eslint-plugin-prefer-arrow](#eslint-plugin-prefer-arrow)
      - [@typescript-eslint](#typescript-eslint)
      - [@typescript-eslint/parser](#typescript-eslintparser)
      - [@typescript-eslint/eslint-plugin](#typescript-eslinteslint-plugin)
      - [eslint-plugin-prettier](#eslint-plugin-prettier)
    - [Stylelint の導入（オプション）](#stylelint-%e3%81%ae%e5%b0%8e%e5%85%a5%e3%82%aa%e3%83%97%e3%82%b7%e3%83%a7%e3%83%b3)
      - [Styled-components](#styled-components)
      - [stylelint-config-prettier](#stylelint-config-prettier)
    - [husky & lint-staged の導入](#husky--lint-staged-%e3%81%ae%e5%b0%8e%e5%85%a5)
      - [lint-staged](#lint-staged)
      - [hasky](#hasky)
    - [Redux の導入](#redux-%e3%81%ae%e5%b0%8e%e5%85%a5)
      - [複数の reducer を結合する](#%e8%a4%87%e6%95%b0%e3%81%ae-reducer-%e3%82%92%e7%b5%90%e5%90%88%e3%81%99%e3%82%8b)
    - [React Router の導入](#react-router-%e3%81%ae%e5%b0%8e%e5%85%a5)
      - [React Router と Redux の統合](#react-router-%e3%81%a8-redux-%e3%81%ae%e7%b5%b1%e5%90%88)
    - [Styled-components の導入](#styled-components-%e3%81%ae%e5%b0%8e%e5%85%a5)
      - [Global CSS を指定する方法](#global-css-%e3%82%92%e6%8c%87%e5%ae%9a%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95)
    - [Material-UI の導入](#material-ui-%e3%81%ae%e5%b0%8e%e5%85%a5)
      - [Styled-components で定義したスタイルを優先する](#styled-components-%e3%81%a7%e5%ae%9a%e7%be%a9%e3%81%97%e3%81%9f%e3%82%b9%e3%82%bf%e3%82%a4%e3%83%ab%e3%82%92%e5%84%aa%e5%85%88%e3%81%99%e3%82%8b)
      - [テーマカラーを設定する](#%e3%83%86%e3%83%bc%e3%83%9e%e3%82%ab%e3%83%a9%e3%83%bc%e3%82%92%e8%a8%ad%e5%ae%9a%e3%81%99%e3%82%8b)
  - [VSCode の設定について](#vscode-%e3%81%ae%e8%a8%ad%e5%ae%9a%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6)
    - [拡張機能の管理](#%e6%8b%a1%e5%bc%b5%e6%a9%9f%e8%83%bd%e3%81%ae%e7%ae%a1%e7%90%86)
    - [VSCode の設定の管理](#vscode-%e3%81%ae%e8%a8%ad%e5%ae%9a%e3%81%ae%e7%ae%a1%e7%90%86)
  - [既存の React プロジェクトのアップデート](#%e6%97%a2%e5%ad%98%e3%81%ae-react-%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e3%81%ae%e3%82%a2%e3%83%83%e3%83%97%e3%83%87%e3%83%bc%e3%83%88)
    - [Create React App](#create-react-app)
    - [React などの他のパッケージのアップグレード](#react-%e3%81%aa%e3%81%a9%e3%81%ae%e4%bb%96%e3%81%ae%e3%83%91%e3%83%83%e3%82%b1%e3%83%bc%e3%82%b8%e3%81%ae%e3%82%a2%e3%83%83%e3%83%97%e3%82%b0%e3%83%ac%e3%83%bc%e3%83%89)
  - [参考資料](#%e5%8f%82%e8%80%83%e8%b3%87%e6%96%99)
  - [公式ドキュメント](#%e5%85%ac%e5%bc%8f%e3%83%89%e3%82%ad%e3%83%a5%e3%83%a1%e3%83%b3%e3%83%88)

<!-- /TOC -->

## 詳細

### TypeScript & React のプロジェクトを作成

```bash
npx create-react-app react-typescript-sfc --template typescript
```

Adding TypeScript  
<https://create-react-app.dev/docs/adding-typescript/>

### ESLint & Prettier の導入

まず、コーディングスタイルを統一するために、ESLint と Prettier の導入を行う。

```bash
yarn add -D \
eslint @types/eslint \
prettier @types/prettier \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint-config-airbnb \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-react \
eslint-plugin-react-hooks
eslint-plugin-jsx-a11y \
eslint-plugin-jest \
eslint-plugin-prefer-arrow \
eslint-plugin-prettier \
@types/eslint-plugin-prettier
```

#### eslint-config-airbnb

AirBnb が提供する ESLint の有名な共通設定を導入する。
`eslint-config-airbnb` を導入する際、以下のパッケージが必要になる。

- eslint
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- @typescript-eslint/parser

eslint-config-airbnb の導入  
<https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1>

#### eslint-plugin-react

`eslint-plugin-react` は React 固有の Linting の設定を追加するためのプラグイン。使用するために、`extends` と `plugins` に設定を追加する。

```js
extends: [
  'eslint:recommended',
  'plugin:react/recommended',
],

plugins: [
  'react'
],
```

また、React のバージョンを自動的に特定するために、`detect` の設定を行う（将来的に、`detect` がデフォルトになる予定なので、いずれ設定する必要がなくなる）。

```js
settings: {
  react: {
    version: 'detect',
  },
}
```

さらに、JSX のサポート（ESLint 2+）を追加するために、

```js
parserOptions: {
  ecmaFeatures: {
    jsx: true,
  },
},
```

eslint-plugin-react の設定  
<https://github.com/yannickcr/eslint-plugin-react#configuration>

#### eslint-plugin-react-hooks

`eslint-plugin-react-hooks`は、React Hook に対する linting を設定するためのプラグイン。マニュアル設定を適応する場合、以下のように設定する。

```js
plugins: [
  "react-hooks"
],

rules: {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
},
```

#### eslint-plugin-import

`eslint-plugin-import` は ES2015+ (ES6+) import/export syntax の linting に使われる。
デフォルトではすべてのルールが無効化されているので、`extends` 内でプラグインの設定を行うか、

```js
extends: [
  'eslint:recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
],
```

個別にルールを `rules` 内に書き込む必要がある（両方、設定することも可能）。

```js
plugins: [
    'import',
],

rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
}
```

また、TypeScript を使っている場合は、次の設定を追加する必要がある。このとき、`@typescript-eslint/parser` パッケージが依存パッケージに含める必要がある。

```js
extends: [
  'eslint:recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript', // 追加
],
```

eslint-plugin-import のインストール方法  
<https://github.com/benmosher/eslint-plugin-import#installation>

ルールを適応するファイルを以下のように指定する。`import/resolver` では、`src` ディレクトリ以下の `ts` や `tsx` などの拡張子を持つファイルのみを対象とする。

```js
settings: {
  'import/resolver': {
    node: {
      extensions: ['.js', 'jsx', '.ts', '.tsx'],
      paths: ['src'],
    },
  },
}
```

また、`import/parsers` を使うことで、対象のファイルに対して、指定した parser を使用することができる。以下では、`ts` や `tsx` の拡張子を持つファイルに対して、TypeScript 用の parser を使うように設定している。

```js
settings: {
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
}
```

eslint-plugin-import の設定  
<https://github.com/benmosher/eslint-plugin-import#settings>

#### eslint-plugin-jsx-a11y

`eslint-plugin-jsx-a11y` は Web アクセシビリティに関する linting を行うためのプラグイン。`plugins` で以下のように設定する。

```js
"plugins": [
  "jsx-a11y",
]
```

推奨設定を適応する場合、以下のように設定する。

```js
extends: [
  'plugin:jsx-a11y/recommended',
]
```

eslint-plugin-jsx-a11y の使い方  
<https://github.com/evcohen/eslint-plugin-jsx-a11y#usage>

#### eslint-plugin-jest

`eslint-plugin-jest` は Jest に対する linting を行うためのプラグイン。以下では、推奨設定とスタイルを強制する設定を示した。

```js
extends: [
  'plugin:jest/recommended',
  'plugin:jest/style',
],

plugins: [
  'jest',
],
```

また、Jest が提供するグローバル変数をホワイトリストに追加するために、以下のように設定を行う。

```js
env: {
  'jest/globals': true,
},
```

eslint-plugin-jest の使い方  
<https://github.com/jest-community/eslint-plugin-jest#usage>

#### eslint-plugin-prefer-arrow

`eslint-plugin-prefer-arrow` はアロー関数に関する linting を行うためのプラグイン。以下のように設定を行う。

```js
plugins: [
  'prefer-arrow',
],

rules: {
  'prefer-arrow/prefer-arrow-functions': [
    'error',
    {
      disallowPrototype: true,
      singleReturnOnly: true,
      classPropertiesAllowed: false,
    },
  ],
}
```

eslint-plugin-prefer-arrow の使い方  
<https://github.com/TristonJ/eslint-plugin-prefer-arrow#installations>

#### @typescript-eslint

#### @typescript-eslint/parser

TypeScript で型の情報を必要とする場合は、必須の設定。

```js
parserOptions: {
  project: './tsconfig.json',
}
```

@typescript-eslint/parser の使い方  
<https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject>

#### @typescript-eslint/eslint-plugin

`@typescript-eslint/eslint-plugin` は TypeScript の linting を行うためのプラグイン。`@typescript-eslint/parser` がインストールされていることが前提。推奨設定は以下のように設定を行う。

```js
extends: [
  'plugin:import/typescript',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
],

parser: '@typescript-eslint/parser',
plugins: [
  '@typescript-eslint',
],
rules: {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  indent: 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
}
```

@typescript-eslint/eslint-plugin の使い方  
<https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage>

#### eslint-plugin-prettier

`eslint-plugin-prettier` は Prettier と ESLint を連携させるためのプラグイン。推奨設定は以下のように設定を行う。また、他のプラグインと連携を行うことできる。

```js
extends: [
  'plugin:prettier/recommended',
  'prettier/react',
  'prettier/standard',
],
```

マニュアルで設定を変更する場合は、以下のように設定を行う。

```js
extends: [
  'prettier',
],

plugins: [
  'prettier',
],

rules: {
  'prettier/prettier': 'error',
}
```

eslint-plugin-prettier の使い方  
<https://github.com/prettier/eslint-plugin-prettier#recommended-configuration>  
連携できる ESLint プラグインの一覧  
<https://github.com/prettier/eslint-config-prettier/blob/master/README.md#installation>

### Stylelint の導入（オプション）

Styled-components に Stylelint と Prettier を導入する。ただし、Styled-components の場合、`--fix` オプションを使うことができないため、自動で修正することは不可能（問題箇所の検知のみ可能）。

```bash
yarn add -D \
stylelint \
@types/stylelint \
stylelint-processor-styled-components \
stylelint-config-styled-components \
stylelint-config-recommended \
stylelint-config-prettier
```

#### Styled-components

`.stylelintrc` ファイルを作成して、以下の Styled-components の設定を追加する。

```json
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ]
}
```

Styled-components tooling  
<https://styled-components.com/docs/tooling#stylelint>

#### stylelint-config-prettier

Prettier と競合するルールを排除する。

```json
{
  "extends": ["stylelint-config-prettier"]
}
```

stylelint-config-prettier の使い方  
<https://github.com/prettier/stylelint-config-prettier#installation>

### husky & lint-staged の導入

```bash
yarn add husky lint-staged
```

#### lint-staged

`lint-staged` を使うことで、staged git ファイルのみに対して linting をコマンドで実行することができる。

```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix", "git add"]
  }
}
```

lint-staged の使い方  
<https://github.com/okonet/lint-staged#configuration>

#### hasky

`husky` は git での commit・push の前に実行するコマンドを設定できる。ここでは、`lint-staged` と合わせて使用し、コミット時に lint が実行されるように設定する。`package.json` を以下のように設定する。

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

Husky の使い方  
<https://github.com/typicode/husky#install>

### Redux の導入

```bash
yarn add redux react-redux @types/redux @types/react-redux
```

React Redux - Quick Start  
<https://react-redux.js.org/introduction/quick-start>

Redux - Configuring Your Store  
<https://redux-docs.netlify.com/recipes/configuring-your-store/>

#### 複数の reducer を結合する

Using `combineReducers`  
<https://redux-docs.netlify.com/recipes/structuring-reducers/using-combinereducers>

### React Router の導入

```bash
yarn add react-router-dom @types/react-router-dom
```

React Router - Quick Start  
<https://reacttraining.com/react-router/web/guides/quick-start>

#### React Router と Redux の統合

React Router - Redux Integration  
<https://reacttraining.com/react-router/web/guides/redux-integration>

### Styled-components の導入

#### Global CSS を指定する方法

createGlobalStyle  
<https://styled-components.com/docs/api#createglobalstyle>

### Material-UI の導入

```bash
yarn add @material-ui/core @material-ui/icons
```

Material-UI のインストール  
<https://material-ui.com/getting-started/installation/>

#### Styled-components で定義したスタイルを優先する

CSS インジェクションの順番を、Styled-components が最も優先されるように指定する。

ルートコンポーネントをラップする形で、`StylesProvider` コンポーネントを使用し、プロパティに `injectFirst` を指定することで、Styled-components を最も優先するように設定できる。

```tsx
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>,
  document.getElementById('root'),
);
```

Controlling priority  
<https://material-ui.com/guides/interoperability/#controlling-priority-%EF%B8%8F-3>

injectFirst  
<https://material-ui.com/styles/advanced/#injectfirst>

#### テーマカラーを設定する

Material-UI の `ThemeProvider` を用いて、カスタムテーマを対象のコンポーネントに適応する。このとき、Styled-components でも、Material-UI のカスタムテーマを使うために、`ThemeProvider` を併用する。

モジュール名が同じため、以下のように、Material-UI の `ThemeProvider` を `MaterialThemeProvider`、Styled-components の `ThemeProvider` を `StyledThemeProvider` と定義する。

```tsx
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

ReactDOM.render(
  <MaterialThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      <App />
    </StyledThemeProvider>
  </MaterialThemeProvider>,
  document.getElementById('root'),
);
```

カスタムテーマを使用する場合は、以下のように `props` からアクセスできる。ただし、上記の設定のみだと、TypeScript の場合、theme の型が `any` になってしまう。

```tsx
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.palette.primary.main};
`;
```

そこで、Styled-components の TypeScript の型を拡張する。具体的には、Material-UI の Theme を継承した、`DefaultTheme` を新たに定義する。ファイル名は、`styled.d.ts` とする。

`DefaultTheme` は `props.theme` のインターフェースとして使用される。デフォルトでは、`DefaultTheme` は未定義なので、Material-UI の Theme を継承して、カスタムテーマの型を定義している。

```tsx
// import original module declarations
import 'styled-components';
import { Theme } from '@material-ui/core';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    // 追加でテーマを拡張する場合、この中に定義をかく。
    borderRadius: string;
  }
}
```

これにより、VSCode 上で補完が効くようになる。

Material-UI のテーマのカスタマイズ  
<https://material-ui.com/customization/palette/#customization>  
Material-UI のカスタムテーマをコンポーネントに適応する方法  
<https://material-ui.com/customization/theming/#theme-provider>  
How to use Material-UI theme with styled-components?  
<https://github.com/mui-org/material-ui/issues/10098>  
Styled-components で TypeScript の型定義ファイルを設定する  
<https://styled-components.com/docs/api#create-a-declarations-file>  
Material-UI と styled components のテーマの共通化  
<https://qiita.com/Ouvill/items/c6761c32d31ffb11e114#material-ui-%E3%81%A8-styled-components-%E3%81%AE%E3%83%86%E3%83%BC%E3%83%9E%E3%81%AE%E5%85%B1%E9%80%9A%E5%8C%96>

## VSCode の設定について

### 拡張機能の管理

1. VSCode 上で、`command + shift` でコマンドパレットを開く。
2. `Extensions: Configure Recommended Extensions (Workspace Folder)` を実行する。
3. `.vscode/extensions.json` ファイルが作成される。
4. 以下の図のように、拡張機能の略称をリストアップする。

![extensions](img/Extension_exmaple.png)

```json
"recommendations": [
  "equinusocio.vsc-material-theme",
],
```

VSCode - Workspace recommended extensions  
<https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions>

### VSCode の設定の管理

`.vscode/settings.json` 内に設定を書き込むことで、書き込んだ設定を対象のプロジェクトで使うことができる。

ファイルの保存を行ったときに、ESLint の修正が実行されるように設定する。

```json
{
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "editor.formatOnSave": true
}
```

## 既存の React プロジェクトのアップデート

### Create React App

Create React App をアップデートする場合、[Change Log](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md) に書かれているマイグレーション用のコマンドを実行すること。

Updating to New Releases  
<https://create-react-app.dev/docs/updating-to-new-releases/>

### React などの他のパッケージのアップグレード

以下のコマンドを実行することで、すべての依存パッケージのアップグレードを行うことができる。

```bash
yarn upgrade
```

Upgrade for Minor or Patch Releases  
<https://www.gatsbyjs.org/docs/upgrade-gatsby-and-dependencies/>

## 参考資料

- [経年劣化に耐える ReactComponent の書き方](https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a)
- [typescript-fsa に頼らない React × Redux](https://logmi.jp/tech/articles/320496)
- [『りあクト！ TypeScript で始めるつらくない React 開発 第 2 版』のサポートページ](https://github.com/oukayuka/ReactBeginnersBook-2.0)
- [material design palette](https://www.materialpalette.com/teal/teal)

## 公式ドキュメント

- [React](https://ja.reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Styled-components](https://styled-components.com/)

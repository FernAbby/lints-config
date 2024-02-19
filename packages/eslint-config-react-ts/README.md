# react-eslint-config
统一配置 react 技术栈 ESLint

## 安装

```bash
npm i @lint-config/eslint-config-react -D
```

## 使用
1、修改 `eslint` 配置文件，将 `extends` 配置成 `@lint-config/eslint-config-react`

```json
{
  "extends": ["@lint-config/eslint-config-react"]
}
```

2、添加 `prettier` 配置，如果存在则跳过。

3、添加 `tsconfig.json` 配置，如果存在则跳过。
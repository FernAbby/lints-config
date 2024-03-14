# eslint-config-react-ts
统一配置 react 技术栈 ESLint

## 安装

```bash
npm i @lints-config/eslint-config-react-ts -D
```

## 使用
1、修改 `eslint` 配置文件，将 `extends` 配置成 `@lints-config/eslint-config-react-ts`

```json
{
  "extends": ["@lints-config/eslint-config-react-ts"]
}
```

2、添加 `prettier` 配置，如果存在则跳过。

3、添加 `tsconfig.json` 配置，如果存在则跳过。
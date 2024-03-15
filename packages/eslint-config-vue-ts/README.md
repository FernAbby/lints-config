# eslint-config-vue-ts
统一配置 vue3 技术栈 ESLint

## 安装

```bash
npm i @lints-config/eslint-config-vue-ts -D
```

## 使用
1、修改 `eslint` 配置文件，将 `extends` 配置成 `@lints-config/eslint-config-vue-ts`

```json
{
  "extends": ["@lints-config/eslint-config-vue-ts"]
}
```

2、添加 `prettier` 配置，如果存在则跳过。

3、添加 `tsconfig.json` 配置，如果存在则跳过。
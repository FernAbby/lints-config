#lints-config

# 安装依赖

## 公共包安装
pnpm i typescript -w

## 子package安装
pnpm i @typescript-eslint -r --filter @lint-config/eslint-config-react-ts

## 内部依赖package安装
pnpm i @lint-config/vue-eslint-config -r --filter @lint-config/eslint-config-react-ts
(仅举例，不需要安装此依赖)

# 发布
```npm
   pnpm run relase
```
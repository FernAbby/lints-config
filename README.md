# lints-config

## 使用说明
### @lints-config/commitlint-config-common
commitlint 提交校验常用配置

#### 安装
```bash
npm i @lints-config/commitlint-config-common -D
```

#### 使用
修改 `.commitlintrc` 配置文件，将 `extends` 配置成 `@lints-config/commitlint-config-common`

```json
{
  "extends": ["@lints-config/commitlint-config-common"]
}
```

#### 提交类型
```bash
feat: 功能特性
fix: 修复bug
docs: 文档更新
style: 代码风格修改
refactor: 重构代码
perf: 性能优化
test: 测试用例
chore: 构建过程或辅助工具的变动
revert: 回滚某个提交
ci: 持续集成配置更改
build: 构建系统或外部依赖的更改
release: 发布版本
deploy: 部署应用
```

### @lints-config/eslint-config-react-ts
react + typescript 技术栈 ESLint 常用配置

#### 安装

```bash
npm i @lints-config/eslint-config-react-ts -D
```

#### 使用
1、修改 `eslint` 配置文件，将 `extends` 配置成 `@lints-config/eslint-config-react-ts`

```json
{
  "extends": ["@lints-config/eslint-config-react-ts"]
}
```

2、添加 `prettier` 配置，如果存在则跳过。

3、添加 `tsconfig.json` 配置，如果存在则跳过。

### @lints-config/eslint-config-vue-ts
vue3 + typescript 技术栈 ESLint 常用配置

#### 安装

```bash
npm i @lints-config/eslint-config-vue-ts -D
```

#### 使用
1、修改 `eslint` 配置文件，将 `extends` 配置成 `@lints-config/eslint-config-vue-ts`

```json
{
  "extends": ["@lints-config/eslint-config-vue-ts"]
}
```

2、添加 `prettier` 配置，如果存在则跳过。

3、添加 `tsconfig.json` 配置，如果存在则跳过。

### @lints-config/stylelint-config-scss

scss代码样式 Stylelint 常用配置

#### 安装

```bash
npm i @lints-config/stylelint-config-scss -D
```

#### 使用

修改 `.stylelintrc` 配置文件，将 `extends` 配置成 `@lints-config/stylelint-config-scss`

```json
{
  "extends": ["@lints-config/stylelint-config-scss"]
}
```

## 开发调试

### 公共包安装
pnpm i typescript -w

### 子package安装
pnpm i @typescript-eslint -r --filter @lint-config/eslint-config-react-ts

### 内部依赖package安装
pnpm i @lint-config/vue-eslint-config -r --filter @lint-config/eslint-config-react-ts
(仅举例，不需要安装此依赖)

## 发布
```npm
   pnpm run relase
```


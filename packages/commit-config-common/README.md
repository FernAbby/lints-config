# @lints-config/commitlint-config-common

统一 commitLint 配置

## 安装

```bash
npm i @lints-config/commitlint-config-common -D
```

## 使用

修改 `.commitlintrc` 配置文件，将 `extends` 配置成 `@lints-config/commitlint-config-common`

```json
{
  "extends": ["@lints-config/commitlint-config-common"]
}
```

## 类型
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
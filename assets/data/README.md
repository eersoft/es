# 赞赏记录数据管理

## 文件说明

- `donations.json`: 存储所有赞赏记录数据

## 数据结构

每个赞赏记录包含以下字段：
- `name`: 赞赏者姓名（建议使用**隐藏部分字符）
- `amount`: 赞赏金额（字符串格式，如"50.00"）
- `message`: 赞赏留言
- `date`: 赞赏日期（字符串格式，如"2024-01-15"）

## 分页配置

在 `assets/js/support.js` 文件中可以修改分页设置：

```javascript
pagination: {
    itemsPerPage: 20, // 每页显示条数，可以修改这个值（建议10-50之间）
    currentPage: 1,
    totalPages: 0,
    totalItems: 0
}
```

### 修改每页显示条数

1. 打开 `assets/js/support.js` 文件
2. 找到 `pagination` 配置对象
3. 修改 `itemsPerPage` 的值：
   - 10: 每页显示10条记录
   - 20: 每页显示20条记录（默认）
   - 30: 每页显示30条记录
   - 50: 每页显示50条记录

## 添加新的赞赏记录

1. 打开 `assets/data/donations.json` 文件
2. 在 `donations` 数组中添加新的记录对象
3. 确保JSON格式正确（注意逗号和括号）
4. 保存文件即可

## 注意事项

- 日期格式建议使用 "YYYY-MM-DD" 格式
- 金额格式建议使用 "XX.XX" 格式
- 修改数据后刷新页面即可看到效果
- 分页会自动按日期倒序排列（最新的在前面）

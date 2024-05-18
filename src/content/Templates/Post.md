---
draft: true
title: ""
aliases: 
  - 
description: ""
publishDate: {{date}}
updatedDate: {{date}}
image: https://files.zachshirow.ir/Posts/
tags:
  - بلاگ
  - فریلنسری
  - آموزش-زبان-انگلیسی
  - طراحی-گرافیک
  - برنامه-نویسی-فرانت-اند
  - بلینکیست-فارسی
  - مینیمالیسم
  - افزونه
  - محصول
  - خدمت
  - obsidian
  - nocodb
---




---

پشت‌وند‌ها

%% run start
```ts fold
let page = file.basename;

let results = dv.markdownList(dv.pages(`[[${page}]]`).map(page => page.file.link))

console.log(results)

return results

``` 
%%

%% run end %%
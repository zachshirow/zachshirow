---
draft: false
title: ویژگی تگ ها در ابسیدین
aliases:
  - ویژگی تگ ها در ابسیدین
description: تگ ها کلیدواژه ها یا موضوعاتی هستند که بهتون کمک می کنند که سریعتر یادداشت هاتون رو پیدا کنید.
publishDate: 2023-10-11
updatedDate: 2023-10-11
image: https://files.zachshirow.ir/Posts/obsidian-property-tags.jpg
tags:
  - بلاگ
  - obsidian
---

مثل شبکه های اجتماعی و وبسایت های مختلف که از تگ ها استفاده میکنند، ابسیدین هم این قابلیت رو داره که از تگ ها برای دسته بندی یادداشت ها استفاده کنه. 

توی این مقاله به صورت عمیق در مورد تگ ها صحبت میکنیم. 

## اضافه کردن تگ به یک یادداشت

برای اینکه یک تگ یا برچسب جدید به یادداشت هاتون اضافه کنید دو روش دارید: 

روش اول که ممکنه ساده تر باشه اینطوریه که یک علامت هشتگ `#` و سپس یک کلیدواژه رو تایپ میکنید تا یک تگ به یادداشت تون اضافه کنید. مثلا `#meeting`

روش دوم هم هست که میتونید یک [[obsidian-properties|ویژگی]] در یادداشت تون با عنوان `tags` ایجاد کنید و اونجا مقادیر تگ های یادداشت رو لیست کنید. 

```
---
tags:
  - recipe
  - cooking
---
```

## پیدا کردن یادداشت ها با استفاده از تگ ها

برای پیدا کردن یادداشت هایی که یک تگ خاص رو دارند میتونید از [[obsidian-search|افزونه جستجو]] با استفاده از اپراتور های جستجو استفاده کنید. مثلا میتونید بنویسید: `tag:#meeting`

همینطور میتونید یادداشت هایی با یک تگ خاص رو پیدا کنید اینه که روی اون تگ کلیک کنید. با این کار عبارت جستجوی اون تگ در افزونه جستجو وارد میشه و همه یادداشت ها با این تگ لیست میشن. 

علاوه بر این با کمک افزونه **تگ ها** هم میتونید یادداشت هاتون رو پیدا کنید. برای شروع، کامند پالت رو با کلید `CTRL + P` باز کنید و عبارت "Tags:Show Tags" رو تایپ کنید و اینتر بزنید. سپس لیست تگ ها براتون نمایش داده میشوند که با کلیک روی هر کدوم از اونها میتونید یادداشت هایی که اون تگ رو دارند رو پیدا کنید. 

## تگ های تودرتو

با استفاده از تگ های تودرتو میتونید سلسله مراتب تگ هایی رو ایجاد کنید که بهتون کمک میکنه تگ های مرتبط رو سریعتر پیدا کنید. 

برای ایجاد تگ های تودرتو از اسلش (`/`) در عنوان تگ میتونید استفاده کنید. به عنوان مثال در سیستمی که برای مدیریت کلاس های زبان انگلیسی ام درست کردم تگ های `#english/students` و `#english/classes` رو دارم.  

هر دو افزونه جستجو و تگ ها از تگ های تودرتو پشتیبانی میکنند. 

## فرمت تگ ها

میتونید هر کدوم از کاراکتر های زیر رو در تگ هاتون استفاده کنید. 

- حروف الفبا
- عددها
- زیرخط (`_`)
- خط ربط (`-`)
- اسلش (`/`)

تگ ها باید حداقل یک حرف الفبا داشته باشند. به عنوان مثال تگ `#1984` درست نیست اما تگ `#y1984` درست هست. 

تگ ها نمیتونند در خودشون اسپیس داشته باشند. برای جداکردن کلمات مختلف در یک تگ میتونید از فرمت های زیر استفاده کنید.

- `#camelCase`
- `#PascalCase`
- `#snake_case`
- `#kebab-case`



---
پشت‌وند‌ها
- [[obsidian-properties|همه چیز در مورد properties یادداشت ها در ابسیدین]]
- [[obsidian]]
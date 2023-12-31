---
draft: false
title: همه چیز در مورد properties یادداشت ها در ابسیدین
aliases:
  - همه چیز در مورد properties یادداشت ها در ابسیدین
description: properties یا ویژگی های یادداشت ها در ابسیدین بهتون امکان میدهند که داده های خاصی رو به یادداشت هاتون اضافه کنید تا بهتر اونها رو مدیریت کنید.
publishDate: 2023-09-24
updatedDate: 2023-09-24
image: https://files.zachshirow.ir/Posts/obsidian-properties.jpg
tags:
  - بلاگ
  - obsidian
---


ویژگی ها یا properties بهتون کمک می کنند که اطلاعاتی در مورد یک یادداشت رو سازماندهی کنید. اضافه کردن ویژگی ها به یک یادداشت بهتون کمک میکنه که داده های دارای ساختار خاص مثل متن، لینک ها، تاریخ ها، و شماره ها رو مدیریت کنید. از ویژگی ها می تونید همراه با [[obsidian-plugins|افزونه های ابسیدین]] استفاده کنید تا کار های مفیدی انجام بدید.

## به یک یادداشت ویژگی اضافه کنید

چند راه وجود داره برای اینکه بتونید یه ویژگی به یه یادداشت اضافه کنید: 
- از کامند **Add file property** (با باز کردن command pallette) استفاده کنید. 
- از کلید میانبر **`Ctrl+;`** استفاده کنید.
- کلیک روی گزینه **Add file property** رو از منوی **More actions** (با کیک روی دکمه سه نقطه در بالا سمت راست زبانه، یا راست کلیک کردن روی زبانه فایل فعال.)
- تایپ کردن `---` در ابتدای یک فایل.

وقتی که یک ویژگی اضافه میکنید، یک ردیف در بالای فایل با دو فیلد نمایان خواهد شد: _نام_ ویژگی و _مقدار_ ویژگی.

برای نام، هر چیزی که دوست دارید می تونید بنویسید. توجه کنید که ابسیدین چند تا ویژگی پیش‌فرض رو برای یادداشت ها در نظر گرفته: `tags`و `cssclasss` و `aliases`.

وقتی که یک نام برای ویژگی نوشتید، می تونید برای اون یک مقدار هم بنویسید.

## انواع مختلف ویژگی

علاوه بر نام و مقدار، ویژگی ها همچنین انواع مختلفی دارند. یک _نوع ویژگی_ یا _تایپ ویژگی_، نوع مقادیری که میشه در این ویژگی ذخیره کرد رو توصیف می کنه. برای تغییر نوع یک ویژگی، روی آیکون ویژگی کلیک کنید یا از دستور **Edit file property** استفاده کنید. 

ابسیدین از انواع ویژگی هایی که در ادامه لیست شده اند پشتیبانی می کنه. 

- **متن یا Text**
- **لیست یا List**
- **عدد یا Number**
- **چک باکس یا Checkbox**
- **تاریخ یا Date**
- **تاریخ و زمان یا Date and Time**

زمانی که یک نوع به یک ویژگی اختصاص داده شد، همه ویژگی ها با این نام فرض می شوند که این نوع ویژگی را دارند. 

## استفاده پیشرفته

**لینک ها**

نوع های **Text** و **List** ویژگی ها می توانند URL ها و [[obsidian-internal-links|لینک های داخلی]] با قاعده ی `[[link]]` را ذخیره کنند. 

**جستجوی ویژگی ها**

ویژگی ها [[obsidian-search|قاعده جستجوی خودشون]] رو دارند که می تونید از اونها به همراه عبارت های جستجو و اپراتور های جستجو استفاده کنید.

**قالب ها**

می تونید به [[obsidian-templates|قالب هاتون]] ویژگی هایی اضافه کنید. وقتی که یک قالب رو به یادداشت فعال وارد می کنید، همه ویژگی های قالب به این یادداشت اضافه خواهند شد. ابسیدین همینطور همه ویژگی هایی که از قبل داخل این یادداشت وجود داشت را با ویژگی های قالب ادغام می کند.

**حالت های نمایش**

میتونید حالتی که ویژگی های یادداشت ها نمایش داده می دهند رو تغییر بدهید. برای این کار به قسمت **Settings → Editor → Properties in document** در تنظیمات برید. گزینه هایی که وجود دارند: 

- **Visible** (پیش‌فرض) — ویژگی ها رو در بالای یادداشت نشون میده، اگه ویژگی ای وجود داشته باشه.
- **Hidden** — ویژگی ها رو نمایش نمیده، اما باز هم میشه اونها رو در نوار کناری به وسیله افزونه Properties View مشاهده کرد.
- **Source** — ویژگی ها رو به صورت متنی ساده با فرمت YAML نمایش میده.

**این موارد پشتیبانی نمی شوند**

بعضی از خصوصیات زیر در مورد ویژگی ها در ابسیدین پشتیبانی نمی شوند:

- **ویژگی های تو در تو** — برای نمایش این نوع فیلد ها توصیه می کنیم که از حالت Source استفاده کنید.
- **ویرایش انبوه ویژگی ها** — این کار رو می تونید با ابزار هایی که توسط انجمن ابسیدین درست شده اند انجام بدید، مثل اسکریپت های پایتون.
- **مارکداون در ویژگی ها** — این یک محدودیت عمدی هست از اونجایی که ویژگی ها برای تکه اطلاعات کوچک و اتمی ساخته شده اند و مخصوص این هستند که هم برای انسان و هم برای ماشین قابل خواندن باشند.

## کلید های میانبر

**اضافه کردن یک ویژگی**

| عملیات                | کلید میانبر |
| --------------------- | ----------- |
| اضافه کردن ویژگی جدید | `Cmd + ;`   |

**حرکت بین ویژگی ها**

زمانی که یک ویژگی در حالت تمرکز هست:

| عملیات               | کلید میانبر               |
| -------------------- | ------------------------- |
| تمرکز روی ویژگی بعدی | `Down arrow` or `Tab`     |
| تمرکز روی ویژگی قبلی | `Up arrow` or `Shift+Tab` |
| پریدن به ویرایشگر    | `Alt+Down arrow`          |

**انتخاب ویژگی ها**

| عملیات                    | کلید میانبر        |
| ------------------------- | ------------------ |
| توسعه انتخاب به سمت بالا  | `Shift+Up arrow`   |
| توسعه انتخاب به سمت پایین | `Shift+Down arrow` |
| انتخاب همه                | `Cmd+A`            |

**ویرایش ویژگی ها**

| عملیات                        | کلید میانبر                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| ویرایش نام ویژگی              | `Left arrow`                                                                                   |
| ویرایش مقدار ویژگی            | `Right arrow`                                                                                  |
| تمرکز روی ویژگی               | `Escape`                                                                                       |
| حذف ویژگی                     | `Cmd+Backspace` </p> اگر هر یک از ویژگی ها انتخاب شود، به جای آن متن انتخاب شده را حذف می کند. |
| لغو آخرین تغییر               | `Cmd+Z`                                                                                        |
| انجام دادن دوباره آخرین تغییر | `Cmd+Shift+Z`                                                                                  |

**ویرایشگر Vim (پیشرفته)**


| عملیات                              | کلید میانبر |
| ----------------------------------- | ----------- |
| حرکت به پایین                       | `j`         |
| حرکت به بالا                        | `k`         |
| تمرکز روی نام                       | `h`         |
| تمرکز روی مقدار                     | `l`         |
| تمرکز روی مقدار (مکان نما در انتها) | `A`         |
| تمرکز روی مقدار (مکان نما در ابتدا) | `i`         |
| ایجاد ویژگی جدید                    | `o`         |

## فرمت ویژگی

ویژگی ها در فرمت یا قالب [YAML](https://yaml.org/) در بالای فایل نگهداری می شوند. YAML یک فرمتی هست که به طور گسترده استفاده می شود و قابل خواندن هم برای انسان ها و هم برای ماشین هاست.

نام های ویژگی ها با مقادیرشان با یک علامت دونقطه و یک فاصله بعد از آن از یکدیگر جدا میشوند:

```yaml
---
name: value
---
```

با اینکه ترتیب این جفت های نام-مقدار مهم نیست، هر نام باید درون هر یادداشت منحصر به فرد باشد. برای مثال نمی توانید بیش از یک ویژگی با نام `tags` داخل هر یادداشت داشته باشید.

مقادیر می تونند متن، عدد، true یا false، یا حتی مجموعه ای از مقادیر (آرایه ها) باشند.

```yaml
---
title: A New Hope
year: 1977
favorite: true
cast:
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
---
```

لینک های داخلی که در ویژگی های **Text** و **List** ذخیره می شوند باید با نقل قول `""` احاطه شوند. زمانی که این لینک ها رو داخل مقادیر ویژگی ها ایجاد می کنید ابسیدین به صورت اتوماتیک این نقل قول ها رو اضافه می کنه، اما وقتی که دارید از افزونه های قالب بندی استفاده می کنید حواستون به این موضوع باشه.

```yaml
---
link: "[[Link]]" 
linklist: 
  - "[[Link]]" 
  - "[[Link2]]"
---
```

**تاریخ** و **تاریخ و زمان** به صورت زیر ذخیره می شوند: 

```yaml
---
date: 2020-08-21
datetime: 2020-08-21T10:30:00
---
```

انتخاب کننده تاریخ از فرمت تاریخ و زمان پیش‌فرض سیستم تون پیروی میکنه. می تونید این رو توی تنظیمات سیستم تون ویرایش کنید.

**ویژگی ها با فرمت JSON**

توصیه مون این هست که از فرمت YAML برای تعریف کردن ویژگی ها استفاده کنید، اما میتونید این کار رو با فرمت [JSON](https://www.json.org/) هم انجام بدید.

```json
---
{
  "tags": "journal",
  "publish": false
}
---
```

فقط این نکته یادتون باشه که بلوک های JSON به عنوان فرمت YAML خوانده میشن و ذخیره میشن.

## ویژگی های پیش‌فرض

ابسیدین با یه سری از ویژگی های پیش‌فرض همراه هست:

| ویژگی        | توضیحات                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `tags`       | ببینید [[obsidian-property-tags\|tags]].                                                    |
| `aliases`    | ببینید [[obsidian-property-aliases\|aliases]].                                             |
| `cssclasses` | به شما امکان می دهد با استفاده از تکّه‌کد‌‌های سی اس اس به یادداشت ها استایل دهید. </p> ببینید [[obsidian-css-snippets\|obsidian css snippets]]. |


**ویژگی های منسوخ شده**

این ویژگی ها در ورژن ۱.۴ ابسیدین منسوخ شده اند. لطفاً دیگه از اینها استفاده نکنید.

| ویژگی      | توضیحات                            |
| ---------- | ---------------------------------- |
| `tag`      | ویژگی منسوخ شده برای `tags`.       |
| `alias`    | ویژگی منسوخ شده برای `aliases`.    |
| `cssclass` | ویژگی منسوخ شده برای `cssclasses`. |

**ویژگی ها برای ابسیدین پابلیش**

ویژگی های زیر در افزونه [[obsidian-publish|ابسیدین پابلیش]] استفاده می شوند. 

|ویژگی|توضیحات|
|---|---|
|`publish`|ببینید [Publish and unpublish notes > Automatically select notes to publish](https://help.obsidian.md/Obsidian+Publish/Publish+and+unpublish+notes#Automatically%20select%20notes%20to%20publish).|
|`permalink`|ببینید [Publish and unpublish notes > Permalinks](https://help.obsidian.md/Obsidian+Publish/Publish+and+unpublish+notes#Permalinks).|
|`description`|ببینید [Social media link previews > Description](https://help.obsidian.md/Obsidian+Publish/Social+media+link+previews#Description).|
|`image`|ببینید [Social media link previews > Image](https://help.obsidian.md/Obsidian+Publish/Social+media+link+previews#Image).|
|`cover`|ببینید [Social media link previews > Image](https://help.obsidian.md/Obsidian+Publish/Social+media+link+previews#Image).|



---
پشت‌وند‌ها
- [[obsidian-autonotemover|افزونه auto note mover در ابسیدین]]
- [[obsidian-css-snippets|تکّه‌کد‌های سی‌اس‌اس در ابسیدین]]
- [[obsidian-dataview|معرفی افزونه dataview در ابسیدین و روش استفاده از اون]]
- [[obsidian-property-aliases|ویژگی ابسیدین aliases نام های مستعار]]
- [[obsidian-property-tags|ویژگی تگ ها در ابسیدین]]
- [[obsidian]]
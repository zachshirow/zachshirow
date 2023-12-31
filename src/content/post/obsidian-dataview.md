---
draft: false
title: معرفی افزونه dataview در ابسیدین و روش استفاده از اون
aliases:
  - معرفی افزونه dataview در ابسیدین و روش استفاده از اون
description: توی این مقاله بهتون یاد میدم تا چجوری از dataview در ابسیدین تون استفاده کنید تا لیست ها و جدول های داینامیک از یادداشت هاتون ایجاد کنید.
publishDate: 2023-09-27
updatedDate: 2023-10-05
image: https://files.zachshirow.ir/Posts/obsidian-dataview.jpg
tags:
  - بلاگ
  - obsidian
  - افزونه
---


## مقدمه کلی به Dataview

ابسیدین (Obsidian) یه برنامه یادداشت برداری عالی هستش. ویژگی هایی که با خود این نرم افزار میان شگفت انگیزند و برای یادداشت برداری پایه خیلی خوب جواب میدهند. اما اگه میخواید که استفاده بیشتری از ابسیدین داشته باشید، می تونید یه سری افزونه های شخصِ ثالث رو در ابسیدین تون نصب کنید. یکی از افزونه های خیلی باحالی که برای ابسیدین توسعه داده شده Dataview هست. 

دیتا ویو یا Dataview بهتون اجازه میده از اطلاعات فراداده یادداشت های خزانه تون پرس و جو (یا کوئری query) کنید. کوئری به این معنا هستش که اطلاعاتی که در این یادداشت ها استخراج میکنید رو به صورتی که دوست دارید نمایش بدید. مستندات انگلیسی رسمی این افزونه در صفحه زیر در دسترس هستند. 

https://blacksmithgu.github.io/obsidian-dataview/

این افزونه به من کمک می کنه که بعضی از قسمت های یادداشت برداریم در ابسیدین رو اتوماتیک کنم. مثلا کمک میکنه که لیستی از همه یادداشت هام در مورد یک موضوع که تگ خاصی دارند رو لیست کنم. همین باعث میشه که خزانه مرتب تری داشته باشم. بعضی از استفاده هایی که از این افزونه دارم به این صورت هستش: 

- همه کار هایی که باید امروز انجامشون بدم رو لیست کنم
- پروژه هایی که باید در روز های آینده انجامشون بدم رو به صورت جدول نمایش میدم. 
- لیستی از کتاب هایی که میخوام اونها رو بخونم نمایش می دم. 
- لیست دوره هایی که میخوام اونها رو ببینم نمایش می دم. 
- و خیلی موارد دیگه. 

اگه می خواید یاد بگیرید که چطوری خزانه خودتون رو با استفاده از dataview اتومات کنید با من توی این مقاله همراه باشید. 

## مبانی دیتاویو (dataview)

شروع کار کردن با دیتاویو ممکنه براتون مشکل باشه. اما اگه یک مخزن ابسیدین آماده داشته باشید همه چیزی که نیاز دارید رو در اختیار دارید. اگه مخزن ابسیدین ندارید می تونید مال من رو دانلود کنید. 

[دانلود ساختار پوشه های ابسیدین من](https://baserow.io/form/TsY97I4xLpxlbJIDxXnGAP0wRMuo7FRwz8satYEFSyw?hide_فایل&prefill_فایل=obsidian-folderstructure)

سپس افزونه dataview رو در قسمت تنظیمات/افزونه های شخص ثالث جستجو و نصب کنید. 

میتونید سورس کد این افزونه رو در گیتهاب ببینید: 
https://github.com/blacksmithgu/obsidian-dataview

این مهمه که بدونید دیتاویو بهتون کمک می کنه که داده هاتون رو فقط ببینید و اجازه نمیده که اونها رو ویرایش کنید. یه پرس و جوی دیتاویو یادداشت های داخل خزانه تون رو میگیره و اطلاعاتشون رو نمایش میده. دیتاویو نمیتونه این داده های داخل یادداشت هاتون رو تغییر بده برای همین نیازی نیست از اینکه ممکنه داده هاتون از بین بروند بترسید. 

> نکته:  یه نسخه جدید از دیتاویو به نام [Datacore](https://github.com/blacksmithgu/datacore) داره توسط همان برنامه نویس دیتاویو توسعه پیدا می کنه. با دیتاکور میتونید بهتر از دیتاویو به داده های داخل یادداشت هاتون دسترسی پیدا کنید و اونها رو ویرایش کنید. البته این افزونه هنوز قابل بهره برداری نیست. هر وقت که منتشر شد در مورد اون خواهم نوشت. 


## انواع کوئری 

در دیتاویو 4 نوع اصلی کوئری وجود داره که با استفاده از اونها می تونید داده هاتون رو نمایش بدید: 

- TABLE یا جدول
- LIST یا لیست
- TASK یا کار
- CALENDAR یا تقویم

حالا اگه با استفاده از هر کدوم از این فرمت ها پرس و جو بنویسیم، نتایج با همدیگه فرق دارند. ما داده یکسانی داریم اما دیتاویو طبق این فرمت ها اون داده ها رو به صورت های مختلفی نمایش میده. 

شما معمولا از فرمت های نمایش کوئری LIST یا TABLE استفاده خواهید کرد و از TASK و CALENDAR در مواقع خیلی نادر. 

فرمت کوئری، تنها دستور اجباری در دیتاویو هست که حتما باید اون رو نوشته باشید. 

اولین کوئری دیتاویو شما میتونه به سادگی کوئری زیر باشه: 

````
```dataview
LIST 
```
````

کاری که کوئری بالا انجام میده این هست که یک لیست از همه یادداشت هایی که در خزانه شما هستند رو نمایش میده. 

برای انواع کوئری دیگه هم میشه اینجوری نوشت: 

````
```dataview
TABLE
```
````

````
```dataview
TASK
```
````

````
```dataview
CALENDAR
```
````

میتونید کد این کوئری ها رو داخل یک یادداشت در خزانه خودتون جای گذاری کنید تا این لیست رو ببینید. البته اگه شما یک خزانه بزرگ داشته باشید این کوئری کند خواهد بود و نمیتونید به خوبی ازش استفاده کنید. برای حل این مشکل معمولا باید کوئری خودتون رو به یک پوشه یا تگ خاص محدود کنید. در مورد این موضوع در قسمت بعدی صحبت میکنیم.

## منابع کوئری ها

معمولا شما لازم ندارید که *همه* یادداشت هاتون رو داخل یک کوئری دیتاویو ببینید. شما میخواید که *محدوده ای برای کوئری هاتون* با استفاده از *منبع مشخص* محدود کنید. توی دیتاویو میتونید یادداشت هاتون رو به پوشه ها یا تگ های خاصی محدود کنید. 

**پوشه به عنوان منبع**

اضافه کردن یک منبع به کوئری تون این کمک رو به دیتاویو میکنه که دنبال چه گروهی از یادداشت هاتون بره تا داده هاشون رو استخراج کنه و نمایش بده. آسون ترین منبع "پوشه" هستش و شما می تونید که، با استفاده از قاعده زیر، کوئری خودتون رو به یک پوشه محدود کنید. 

````
```dataview
LIST
FROM "A Folder"
```
````

حواستون به نقل قول هایی که دور `A Folder` هستند باشه. این نقل قول ها به دیتاویو میگن که دنبال یک فایل یا پوشه بگرده. شما همینطور میتونید کوئری تون رو به تک فایل ها یا پوشه های داخلی با استفاده از قاعده استاندارد فایل محدود کنید. برای مثال: 

- `FROM "A Folder/Subfolder/"`
- `FROM "A Folder/Subfolder/file.md"`

**تگ به عنوان منبع**

یه راه دیگه برای محدود کردن نتایج دیتاویو، استفاده از تگ هاست. در ابسیدین می تونید برای اضافه کردن تگ یا برچسب به هر فایلی، از نماد هشتگ `#` استفاده کنید. مثلا: `#tag` سپس می تونید فایل هایی که این تگ رو دارند با استفاده از دیتاویو نمایش بدید. 

````
```dataview
LIST
FROM #tag
```
````

> نکته: شما میتونید این جستجو و نمایش فایل ها با تگ خاص رو با افزونه‌ی جستجو که همراه خود ابسیدین هم میاد انجام بدید. اگه هنوز برای استفاده از دیتاویو آمادگی ندارید، [[obsidian-search#جاسازی نتایج جستجو داخل یک یادداشت|میتونید نگاهی به جستجوهای جاسازی شده بندازید]].

**ترکیب کردن منابع**

پوشه ها و تگ ها دوتا از راه های اصلی هستند که با اونها منابع داده رو در دیتاویو مشخص میکنیم. اما شما می تونید این دوتا منبع رو با همدیگه *ترکیب کنید* تا کوئری های پیچیده تری درست کنید. میتونید این کار رو با استفاده از اپراتور های `AND` و `OR` انجام بدید. میتونید از پارانتزها برای مشخص کردن ترتیب منطقی این بیانیه ها استفاده کنید (هر چیزی که داخل پارانتز باشه زودتر پردازش میشه): 


````
```dataview
LIST
FROM "Projects" AND (#project/active OR #project/soon) 
```
````

کوئری دیتاویو بالا اون فایل هایی رو نمایش میده که اولا دارای تگ `#project/soon` یا تگ `#project/active` و سپس همینطور داخل پوشه `"Projects"` قرار گرفته باشند. 

**جا انداختن منابع**

شاید براتون پیش بیاد که موقع ساختن کوئری بگید یادداشت های یک منبعی باشند اما یه منبع دیگه اصلا نباشند. فکر کنید من میخوام همه یادداشت ها با تگ `#project` رو لیست کنم اما این یادداشت ها داخل دوتا پوشه هستند: external و internal. میخوام فقط پروژه هایی که داخل پوشه external هستند نمایش داده بشوند. اینطوری میتونم دوتا استراتژی داشته باشم: 

استراتژی اول: 


````
```dataview
LIST
FROM #project AND "external"
```
````

استراتژی دوم: 


````
```dataview
LIST
FROM #project AND -"internal"
```
````

دیدید که قبل از "internal" یدونه علامت منفی `-` تایپ کردم. این به دیتاویو میگه که همه یادداشت ها با تگ project رو لیست کن اما اونهایی که داخل پوشه "internal" هستند رو جا بنداز. این شاید توی مواقعی براتون کارساز باشه که تعداد منابعی که باید جا انداخته بشن کمتر از اونهایی هستند که باید اونهارو جستجو کنید. 

یه مثلا دیگه: من میخوام همه یادداشت ها داخل همه پوشه هام به جز پوشه "templates" برام لیست بشه: 


````
```dataview
LIST
FROM -"templates"
```
````

## انواع داده در دیتاویو

اول باید در مورد انواع مختلف داده در دیتاویو صحبت کنیم. 

یه چیزی هست که توی دیتاویو نمیتونید اون رو کوئری کنید: محتوای یادداشت هاتون. برای اینکه دیتاویو سریعتر کار کنه، نمی تونید محتوای اصلی یادداشت هاتون رو با ابسیدین جستجو کنید. این شاید مثل یه محدودیت بزرگ به نظر بیاد، اما با یکم فکر کردن و توجه میتونید به این برسید که اونطور که به نظر میرسه شاید محدود کننده نباشه. اگه میخواید که محتوا تون هم نمایش داده بشه [[obsidian-search#جاسازی نتایج جستجو داخل یک یادداشت|میتونید از افزونه جستجوی اصلی ابسیدین استفاده کنید]]. 

کاری که دیتاویو انجام میده اینه که تعدادی از فراداده های از پیش ساخته شده برای همه یادداشت هاتون رو قابل دسترسی کرده. اینطوری میتونید یادداشت هاتون رو بر اساس این فراداده ها جستجو کنید و نمایش بدید. همینطور در صورت نیازتون میتونید فراداده های خودتون رو به یادداشت هاتون اضافه کنید. 


> **فراداده (Metadata)**: فراداده اطلاعات _اضافه ای_ هست که یا در اصل همراه با داده شما هستند یا اینکه خودتان این اطلاعات را به داده تان اضافه کرده اید. 

برای مثال اگه هر عکسی رو توی گالری گوشی یا سیستم تون باز کنید علاوه بر خود عکس می تونید اطلاعات زیر رو هم در جزئیات اون عکس بخونید: 

- تاریخ و زمانی که عکس ثبت شده
- مکانی که در اونجا عکس ثبت شده
- افرادی که در تصویر حضور دارند 

به این اطلاعات اضافی که همراه تصویر میان میگن فراداده. 

توی فایل های یادداشت در ابسیدین هم یک سری فراداده های از پیش ایجاد شده وجود دارند و همینطور میتونیم اطلاعاتی رو خودمون به این فایل ها اضافه کنیم. 

**داده های تلویحی (built-in)**

فراداده بهتون کنترل زیادی روی یه سری از فراداده های از پیش ساخته شده برای همه یادداشت هاتون میده. همین که افزونه دیتاویو رو فعال کنید این افزونه کارهایی رو به صورت خودکار برای درست کردن این داده ها انجام میده. در واقع از فایل هاتون ایندکس تهیه میکنه. اینجا لیستی از همه داده هایی که دیتاویو برای هر کدوم از یادداشت هاتون ایجاد میکنه رو لیست کرده ام که [از مستندات خود دیتاویو دریافت کردم](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/). 

|Field Name|Description|
|---|---|
|`file.name`|نام فایل|
|`file.folder`|مسیر پوشه ای که این فایل در اون قرار داره|
|`file.path`|مسیر کلی فایل که شامل نام و اکستنشن فایل هم میشه|
|`file.ext`|اکستنشن فایل که معمولا `.md` هست|
|`file.link`|یک لینک به فایل|
|`file.size`|سایز فایل (به صورت بایت)|
|`file.ctime`| تاریخی که این فایل ایجاد شده. همراه با زمان.|
|`file.cday`|تاریخی که این فایل ایجاد شده.|
|`file.mtime`| تاریخی که این فایل آخرین بار ویرایش شده. همراه با زمان.|
|`file.mday`|تاریخی که این فایل آخرین بار ویرایش شده.|
|`file.tags`|لیستی از همه تگ های یکتا در فایل. تگ های زیرین در هر سطح شکسته می شوند، پس `#Tag/1/A` به صورت آرایه `[#Tag, #Tag/1, #Tag/1/A]` ذخیره می شود.|
|`file.etags`|لیستی از تگ های آشکار در فایل; برخلاف `file.tags`, تگ های زیرین رو به تگ های جداگانه نمیشکنه, مثلا: `[#Tag/1/A]`|
|`file.inlinks`|لیستی از همه لینک های ورودی به این فایل، یعنی همه فایل هایی که در محتوای خودشون به این فایل لینک کرده اند. |
|`file.outlinks`|لیستی از همه لینک های خروجی از این فایل، یعنی همه لینک هایی که این فایل در خودش داره.|
|`file.aliases`|لیستی از همه نام های مستعاری که در [[obsidian-properties\|YAML Frontmatter]] تعریف شده.|
|`file.tasks`|لیستی از همه کار ها (مثلا، `\|[ ] یک کار یا تسک`)  در این فایل|
|`file.lists`|لیستی از همه المنت های لیست در فایل (شامل تسک ها هم میشه); این المنت ها در واقع تسک هستند و میشه اونها رو در نمای TASK نمایش داد.|
|`file.frontmatter`|مقادیر خام همه فیلد های frontmatter رو در قالب جفت های `key \|value` به صورت متنی در خودش جای داده.|
|`file.day`|تنها وقتی که فایل یک مقدار تاریخ در عنوان خود داره (در فرمت `yyyy-mm-dd` یا `yyyymmdd`), یا وقتی که یک فیلد `Date` در frontmatter یا محتوای فایل داشته باشد میشه ازش استفاده کر.|
|`file.starred`|مقدار true یا false رو بر اساس اینکه این فایل ستاره دار شده یا نه نمایش میده|

ایده خوبیه که جدول بالا رو به عنوان یک مرجع در یک یادداشت توی ابسیدین تون ذخیره کنید. وقتی میخواید با ابسیدین کار کنید خیلی به کارتون خواهد اومد. 

هر کدوم از داده های بالا رو میتونید در کوئری های دیتاویو استفاده کنید. به عنوان مثال، میتونیم جدولی از همه یادداشت هایی که ستاره دار شده اند با کوئری زیر ایجاد کنیم: 

````
```dataview
TABLE file.starred AS "⭐"
WHERE file.starred = true
```
````

> نکته: توجه کنید که میتونید سربرگ جدول ها رو با استفاده از کلیدواژه `AS` تغییر بدید. در مثال بالا نام جدول به جای مقدار پیش فرض "file.starred"، یک ستاره خواهد بود. 

**داده های سفارشی (custom)**

علاوه بر داده هایی که بالا معرفی شون کردم، میتونید داده های سفارشی خودتون رو به هر یادداشتی اضافه کنید. میتونید این رو برای هر چیزی که فکرش رو بکنید استفاده کنید. برای اضافه کردن داده های سفارشی، شما میتونید یک *ویژگی* به فایل اضافه کنید یا اینکه از سینتاکس دونقطه استفاده کنید. 

برای اضافه کردن فراداده در فایل های markdown به این شکل عمل میکنیم. 

1. در **بالای** یادداشت، سه تا خط منفی تایپ کنید، به این شکل `---`
2. زیر اون، میتونید جفت های کلید-مقدار با حالت `کلید: مقدار` اضافه کنید.
3. برای تکمیل این بلوک فراداده، در پایین جفت های کلید-مقدار سه تا خط منفی دیگه اضافه کنید، به صورت `---` 

روش های دیگه ای رو هم برای اضافه کردن ویژگی ها در یادداشتت های ابسیدین تون رو داخل مقاله [[obsidian-properties|همه چیز در مورد properties یادداشت ها در ابسیدین]] توضیح داده ام. 

البته یک روش دیگه هم وجود داره که مختص استفاده در دیتاویو هست و اون هم استفاده از فراداده های inline یا درون‌خطی هستش. در حالی که فرداده های frontmatter رو فقط میتونید در بالای یادداشتتون اضافه کنید، فراداده های inline رو میشه در هر جایی از متن استفاده کرد. مثلا: 

```markdown

سلام این یک پاراگراف است. و اینها فیلدها یا فراداده های درون خطی هستند: 

date:: 2023-10-05
name:: زکریا
surname:: شیرمحمدلی
aliases:: ["zachshirow", "zacharyshirmohammadli"]
type:: human
job:: "معلم زبان انگلیسی"

```



توجه کنید که برای تعیین فیلدهای درون خطی باید از دوتا دونقطه برای جدا کردن نام و مقدار فیلد ها استفاده کنید.

در نهایت هر دو نوع فراداده در frontmatter و فراداده به صورت inline رو میشه توسط دیتاویو از یادداشت ها استخراج کرد. 

````
```dataview
LIST
WHERE type = "human"
```
````


## محدود کردن نتایج کوئری ها

دوتا کوئری بالا از WHERE که هنوز درباره اش صحبت نکردیم استفاده می کنند. WHERE یکی از راه هایی هست که میشه با استفاده از اون بعضی نتایج رو از یک کوئری حذف کرد.

جا انداختن نتایج باعث میشه که بتونید کوئری هایی درست کنید که خیلی کارتون رو راه بندازند. لیست کردن یادداشت ها با استفاده از پوشه و تگ هاشون تا یه جایی خوب هست، اما نمیتونید کار زیادی با اینها انجام بدید. فیلتر کردن نتایج بر اساس داده هایی که در دسترس دارید چیزیه که کم داشتید. 

**فیلتر کردن نتایج**

فیلتر کردن یکی از پیچیده ترین (اما انعطاف پذیر ترین) راه ها برای جا انداختن نتایج در کوئری دیتاویو تان هستش. فیلتر کردن بهتون اجازه میده که یادداشت ها رو بر اساس داده هایی که در خودشون دارند جا بندازید. مثل مثالی که قبل تر گفتیم میتونید کوئری بنویسید که فقط یادداشت هایی که ستاره دار شده اند رو لیست کنه: 

````
```dataview
LIST
WHERE file.starred = true
```
````

میتونید یادداشت ها رو بر اساس اینکه آخرین بار کی ویرایش شده اند لیست کنید. یه کوئری که به نظرم کارایی خوبی داره یادداشت هایی رو نشون میده که در هفته اخیر اونها رو ویرایش کرده ام: 

````
```dataview
LIST
WHERE file.mtime >= date(today) - dur(1 week)
```
````

این کوئری ممکنه یکم پیچیده باشه اما خیلی کارآمده. کوئری بالا داره فیلد mtime (آخرین باری که این فایل ویرایش شده) رو بررسی میکنه و اون رو با تاریخ یک هفته گذشته مقایسه میکنه. اگه فایل در هفته گذشته ویرایش نشده باشه اون رو از لیست جا میندازه. 

عبارت WHERE میتونه هر داده ای رو در هر فایلی بررسی کنه که شامل داده های از پیش تعیین شده و داده های سفارشی که بعدا اضافه میکنید میشه. اگه میخواید که یادداشت ها رو بر اساس داده هایی که داخلشون هست جا بندازید، از عبارت WHERE استفاده کنید. 

> نکته: بیشتر وقت هایی که از WHERE استفاده می کنید نیازی به استفاده از FROM ندارید. اما محدود کردن کوئری تون به یک تگ یا پوشه خاص میتونه باعث سریعتر شدن نمایش نتایج بشه. 

**مرتب کردن نتایج**

بعضی وقتها نیاز دارید که نتایج طبق یک ترتیب خاصی نمایش داده بشوند. در این موارد شما نیاز هست که از عبارت SORT استفاده کنید. میتونید طبق هر فیلدی فایل ها رو مرتب کنید و میشه از هر کدوم از گزینه های مرتب سازی ASC (صعودی) یا DESC (نزولی) رو انتخاب کنید. 

````
```dataview
LIST
FROM #tag
SORT file.name DESC
```
````

این کوئری لیستی از فایل ها با تگ `#tag` رو به صورت نزولی نمایش میده. 

**محدود کردن نتایج**

شما همینطور میتونید نتایج هر کوئری رو به تعداد خاصی محدود کنید. شاید کوئری تون 1000 تا فایل رو بخواد نمایش بده اما شما فقط به 10 تای اولی نیاز داشته باشید. در این موارد استفاده از عبارت LIMIT میتونه بهتون کمک کنه. استفاده ازش راحته و میتونید بعد از نوشتن LIMIT هر عدد صحیحی که دوست داشتید به اون تعداد فایل نمایش داده بشه بنویسید: 

````
```dataview
LIST
FROM #tag
LIMIT 10
```
````

این کوئری تنها 10 فایل از همه فایل هایی که تگ `#tag` دارند رو به صورت لیست نمایش میده.

## مثال ها

اگه جزئیات کار کردن با دیتاویو براتون جالب نیست اینجا براتون چند تا مثال خوب آوردم تا کارتون رو باهاش هرچه سریعتر شروع کنید. 

قبل از این که شروع کنید البته مطمئن بشید که دیتاویو رو نصب و فعال کرده اید. میتونید این افزونه رو در قسمت community plugins تنظیمات ابسیدین جستجو و پیدا کنید. 

**لیست همه فایل هایی که در هفته گذشته ویرایش شده اند**

````
```dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
```
````

**لیست همه یادداشت هایی که تگ `#tag` را دارند به ترتیب آخرین ویرایش شان**

````
```dataview
LIST FROM #tag
SORT file.mtime DESC
```
````

**لیست فایل های لینک نشده**

````
```dataview
list from [[]] and !outgoing([[]])
```
````

این کوئری همه فایل هایی که به فایل حاضر لینک دارند اما از این فایل به آن فایل ها لینک نشده رو نمایش می ده. 

**جدول عادت های روزانه**

برای این جدول باید افزونه daily notes یا periodic notes رو نصب داشته باشید. اینطوری توی قالب یادداشت های روزانه تون میتونید برای هر عادت روزانه یک فیلد ایجاد کنید و روزانه وقتی اون عادت ها رو انجام میدید تیک شون رو بزنید. 

پس در ویژگی ها میشه این عادت ها رو اضافه کرد: 

```YAML
exercise: true
breakfast: true
reading: true
``` 

سپس میشه از این کوئری استفاده کرد که نتایج دو هفته اخیر رو نشون میده:

````
```dataview
TABLE exercise, breakfast, reading
FROM "/Journal/Daily"
SORT file.ctime DESC
LIMIT 14
```
````

**نمایش تسک های انجام نشده**

````
```dataview
TASK
WHERE !completed
LIMIT 10
GROUP BY file.link
SORT rows.file.ctime ASC
```
````

این کوئری 10 تا از قدیمی ترین کارهایی که باید انجام بدید رو نمایش میده. 

## نتیجه گیری

دیتاویو یکی از قدرتمند ترین و کارآمد ترین افزونه های ابسیدین هست که بهتون امکانات فراوانی برای استخراج و نمایش داده های یادداشت هاتون میده. اگه هنوز امتحانش نکردید امیدوارم که این مقاله بهتون کمک کنه شروع کنید. 

اگه به مشکل برخوردید و نمیدونستید چیکار کنید میتونید توی قسمت کامنت های پایین از من بپرسید یا [برام ایمیل بفرستید](mailto:zachshirow@gmail.com). اینا هم چند تا منبع خیلی خوب هستند که میتونید به اونها مراجعه کنید: 

- [مستندات dataview](https://blacksmithgu.github.io/obsidian-dataview/)
- [خزانه مثال های dataview](https://s-blu.github.io/obsidian_dataview_example_vault/)
- [کوئری ساز ساده دیتاویو](https://s-blu.github.io/basic-dataview-query-builder/)



---
پشت‌وند‌ها
- [[must-have-obsidian-plugins|حیاتی ترین افزونه های ابسیدین]]
- [[obsidian-properties|همه چیز در مورد properties یادداشت ها در ابسیدین]]
- [[obsidian-search|قابلیت جستجو در ابسیدین]]
- [[obsidian]]

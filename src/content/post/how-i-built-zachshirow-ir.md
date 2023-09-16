---
draft: false
title: چجوری سایتم رو با astro و Obsidian ساختم
aliases:
  - چجوری سایتم رو با astro و Obsidian ساختم
description: توی این پست می خوام داستان اینکه چجوری وبسایتی که دارید مشاهده می کنید رو ساختم رو بهتون بگم.
publishDate: 2023-09-12
updatedDate: 2023-09-12
image: http://files.zachshirow.ir/Posts/how-i-built-zachshirow-ir.jpg
tags:
  - بلاگ
  - برنامه-نویسی-فرانت-اند
  - obsidian
---


## داستان شروع برنامه نویسی من

اولین باری که با برنامه نویسی آشنا شدم اواخر سال دوم دانشگاهم ۱۳۹۸ بود. در این مقطع از زندگیم داشتم تحضیلات کارشناسی آموزش زبان انگلیسیم رو میگذروندم و در کنارش با دفتر بین الملل دانشگاه همکاری میکردم. 

در اون زمان مسئولیت شبکه های اجتماعی این دفتر رو یه عهده داشتم و همینطور مطالبی رو در وبسایتشون می نوشتم و منتشر میکردم. بعد قرار بر این شده بود که یک قالب جدید که برای وبسایت طراحی شده بود رو اعمال کنیم. اما این قالب جدید کلی مشکلات داشت و من خیلی احساس بدی داشتم وقتی که می دیدم نمیتونم کاری کنم. 

برای همین عزمم رو جزم کردم تا هرچیزی که لازمه برای برنامه نویسی وبسایت ها بدونم رو یاد بگیرم. چون زبان انگلیسی بلد بودم شروع کردم به دانلود کردن و دیدن دوره های برنامه نویسی مختلف. از زمین خاکی دوره های html و css شروع کردم تا اینکه رسیدم به یادگیری جاوا اسکریپت و مجموعه کتابخانه ها و فریم ورک هایی که داره و همواره در حال زیاد شدنه. ری اکت یکی از کتابخونه هایی بود که خیلی یادگیری اون رو دوست داشتم. 

در انتها رفتم سمت سرور و اس کیو ال و نود جی اس رو هم حدودی یاد گرفتم. با دانشی که کسب کرده بودم تونستم مشکلات قالب جدید وبسایت رو حل کنم و شکل و شمایل خوبی به وبسایت دفتر بین الملل دانشگاه بدم. 

## در جستجوی جایی برای نوشتن در اینترنت

از اون زمان که برنامه نویسی رو شروع کردم ۴ سال میگذره و در این مدت همیشه میخواستم برای خودم یه وبسایت داشته باشم. وبسایتی که با استفاده از اون بتونم ایده هام رو به گوش کسایی که ممکنه علاقمند باشند و براشون مفید باشه برسونم. 

ابزار ها و سرویس های مختلفی رو امتحان کردم تا ببینم آیا برای من مناسبند یا نه. در کنار این هم گاهی اوقات مقالاتی رو داخل سرویس های وبلاگ نویسی ویرگول و مدیوم منتشر می کردم. بازدید زیادی از این مطالب نمی شد اما همین که می‌دیدم با جستجوی اسمم یه سری نتایج داخل گوگل پیدا شون میشه خیلی هیجان زده می شدم. 

در نهایت اما به یه سری مشکل توی استفاده از ویرگول برخوردم که من رو مصمم کرد دنبال ساختن یه وبسایت بلاگ شخصی برای خودم باشم. 

## چرا بیخیال ویرگول شدم

دوتا مشکل اصلی توی استفاده از ویرگول داشتم. اول اینکه پروسه نوشتن مقاله و لینک کردن مقاله ها زمان بر بود. مثلا باید اول یه مقاله رو می نوشتم و منتشر می کردم تا می تونستم بهش توی یه مقاله دیگه لینک کنم. کلا هم نوشتن توی اینترنت به نظرم سخت اومد. چند وقتی بود که از [[obsidian-sharpen-your-thinking|ابسیدین]] برای نوشتن استفاده می کردم و تجربه لینک کردن یادداشت ها توی ابسیدین واقعا چشمام رو به اینکه چه چیزهایی ممکنه باز کرده بود. 

مشکل دوم ام در استفاده از ویرگول که خیلی جدی تر بود این بود که خواننده ها وقتی روی یه لینکی توی مقاله ام کلیک کنند اول باید یه تبلیغ از ویرگول ببینند و بعد به مقصد لینک هدایت میشن. فعلا تبلیغاتی به جز برای خود ویرگول نمایش داده نمیشه اما فکر میکنم بعد ها تبلیغات بیشتری نمایش بدن و به نظرم خوب نیست که اینطوری باشه. این کار همه رو سخت می کنه و من اصلا خوشم نیومد. البته می فهمم که چرا این کار رو می کنند بالاخره باید یه نونی از وبسایت در بیارن یا نه. 

تنها نتیجه ای که از این دوتا مشکل گرفتم این بود که راهم رو از ویرگول جدا کنم و وبسایت شخصی خودم رو داشته باشم. 

## در جستجوی بهترین ابزار برای ساختن وبسایتم

حالا که تصمیم ام رو برای سایت خودم گرفته بودم باید در مورد اینکه چجوری بسازمش تحقیق می کردم. البته این تحقیقات خیلی قبل تر از وبلاگ نوشتنم توی ویرگول شروع شده بود. ولی خب بعضی وقت ها روش کار می کردم و به طور مستمر نبودش. هر چند وقت یه بار با یه ابزار خوبی آشنا می شدم ولی هر کدوم یه سری مشکلاتی داشتند که یا نیاز به دانش خیلی بیشتری بود و یا هزینه بر بود و یا زمان بر. بعضی وقت ها هم اصلا این ابزار ها با نیاز هایی که داشتم هم خوانی نداشتند. بیایم یه سری از این ابزار ها رو ببینیم چیا بودند.

### وردپرس

طبق روال بازار وبسایت ها اول [وردپرس رو چک کردم](https://docs.liara.ir/wp-plus/install/)، اما زیادی سنگین بود و دوست نداشتمش. به هر حال درسته بیشتر وبسایت های ایران و جهان از وردپرس قدرت میگیره. اما من دوست نداشتم باهاش کار کنم و یه چیز سبک و تر و تمیز تر میخواستم که هر طور خواستم تغییرش بدم. وردپرس با پی اچ پی نوشته شده که من بلد نیستم. در عوض جاوا اسکریپت بلدم پس باید می رفتم دنبال ابزار هایی که با این زبان نوشته شده اند. 

### استرپی و نکست جی اس (Strapi and NextJs)

استرپی و نکست جی اس رو هم امتحان کردم و باهاشون وبسایت های آزمایشی ساختم اما اینا هم برای من زیادی سنگین بودند. یعنی فقط قسمت کمی از قابلیت های اونها برای من که میخواستم فقط یه وبلاگ داشته باشم مورد نیاز بود. من اگه میخواستم یه سایت داینامیک با قابلیت هایی مثل ورود و ثبت نام و داده های سمت کاربر و... داشته باشم قطعا استرپی و نکست جی اس گزینه خوبی برام می بود. من فقط می خواستم که یه وبلاگ داشته باشم که ایده هایی که دارم رو اونجا منتشر کنم. بحث هاستینگ این ها هم بود و حساب که کردم دیدم برای اول کار ممکنه خیلی خرج روی دستم بذاره. 

### گوست سی ام اس

بعد رفتم سراغ یه ابزار دیگه که اسمش [Ghost cms](https://docs.liara.ir/one-click-apps/about/) هست و در واقع میشه گفت نسخه به روز تر وردپرس هست و با نود جی اس نوشته شده. این سی ام اس رو هم توی لیارا تست کردم اما اینم برام مناسب نبود. بعضی چیزاشو نمیتونستم به آسونس تغییر بدم و این خوب نبود. 

### تولید کننده های سایت استاتیک

بعد با خودم گفتم من از وبسایتم چی میخوام و چه انتظاراتی می تونم ازش داشته باشم؟ بعد دیدم من که فقط میخوام یه وبلاگ داشته باشم که ایده هام رو توی اینترنت منتشر کنم. نیازی هم نیست که سایت داینامیک باشه چون با داده هایی که تغییر می کنند کار نمی کنم و من تنها کسی هستم که سایت رو تغییر میده. پس کلا ایده هایی که جلوم بود رو تغییر دادم. دیدم من کارم با یه سایت استاتیک html css هم راه میوفته. اما عاقلانه نیست که بدون هیچ ابزاری بشینم و با اچ تی ام ال دست و پنجه نرم کنم. راه حلم رو پیش ابزار های تولید کننده سایت های استاتیک پیدا کردم. این ها ابزار هایی هستند که با اونها میشه داده ها رو از سرور های مختلف یا اینکه فایل های مارک داون گرفت و طبق یه قالبی به صفحه های html استاتیک تبدیل کرد. 

چندتا از این ابزار های استاتیک از قدیم هستند و کارشون درسته. 

- [ایلونتی Eleventy (11ty)](https://docs.liara.ir/instructions/eleventy/)
- [گتسبی Gataby](https://docs.liara.ir/instructions/gatsbyjs/)
- [هوگو Hugo](https://docs.liara.ir/instructions/hugo/)

### ایلونتی

من به این ابزار ها نگاه انداختم و دیدم که ایلونتی برای من مناسب ترین گزینه هستش. همین که با جاوا اسکریپت نوشته شده نکته خیلی مثبتی برام بود. شروع کردم به یاد گرفتن قابلیت های مختلف ایلونتی و باهاش یه سایت تستی طراحی کردم و حتی توی لیارا استقرارش هم دادم. ویدیو های زیادی در مورد اینکه چجوری از این ابزار استفاده کنم توی یوتیوب و توی سایت https://git.ir دیدم. 

در نهایت اما وقتی داشتم توی یوتیوب می گشتم دیدم که یه ابزار دیگه ای هست که خیلی جدیدتر از ایلونتی هستش و قابلیت های بهتری نسبت به اون داره. این ابزار جدید اسمش بود استرو جی اس (Astro Js). 

### استرو (Astro)

استرو هم مثل ابزار های بالا در حقیقت یک استاتیک سایت جنریتور (Static Site Generator | SSG) هست با این تفاوت که خیلی راحت تره کار کردن باهاش و اینکه جدیدا درست شده و کلی آدم دارن باهاش وبسایت های باحالی درست می کنند. علاوه بر این دیدم که خیلی هم سایتی که میشه باهاش درست کرد سبکه و اینکه می تونم با [[obsidian-sharpen-your-thinking|ابسیدین]] محتواش رو بنویسم و آماده کنم. 

برای استرو هم اول رفتم به مستنداتش و همینطور دنبال یه قالب استارتر (Starter Template) خوب گشتم تا نقطه شروع خوبی داشته باشم. زمانی که داشتم این سایت رو درست می کردم توی [[teacher-training-in-mashhad|دوره فرهنگیان در مشهد بودم]] و وقت کافی نداشتم برای همین رفتم دنبال قالب تا خیلی سریع سایتم رو آنلاین کنم. گفتم بعدا تغییرات استایل رو می تونم اعمال کنم. فقط هرچه سریعتر می خواستم سایتم رو بسازم و منتشر اش کنم. 

قالبی که انتخاب کردم سایتم شبیه به اون باشه [قالب استرو کاکتوس](https://astro-theme-cactus.netlify.app/) بود. این یه قالب با استایل مینیمال بود که دقیقا چیز های پایه ای رو داشت که می خواستم برای وبسایت مقاله نویسیم داشته باشم. از تگ ها پشتیبانی می کرد و مقاله ها هم خیلی شیک و ساده توی صفحه اصلی لیست می شدند. البته نیاز بود تا یه تغییراتی توی قالب بدم تا برای مقاله نویسی با زبان فارسی مناسب بشه. 

**تغییراتی که به قالب کاکتوس استرو دادم**

بعد از این دست به کار شدم و با راهنمایی مستندات استرو نشستم و تغییرات لازم رو توی قالب استرو کاکتوس انجام دادم. مثلا سایت رو راستچین کردم و همینطور متن های انگلیسی که توی قالب بود رو فارسی نوشتم. یه سری قسمت هایی هم بود که باید میرفتم توی افزونه هایی که نصب شده و اونجا ترجمه رو انجام بدم. یه خورده سخت بود اما تونستم بعد از کلی امتحان و خطا انجامش بدم. 

**ویرایش مقاله ها با استفاده از ابسیدین**

ویرایش مقاله ها و لینک کردن بین اونها رو با استفاده از [[obsidian-sharpen-your-thinking|ابسیدین]] انجام می دادم. وقتی بیشتر قالب سایت رو درست کرده بودم تصمیم گرفتم که فعلا کافیه و نشستم محتوایی که قبلا توی ویرگول منتشر کرده بودم رو به پوشه content وبسایت جدیدم انتقال دادم. یه محفظه جدید توی پوشه content ایجاد کرده بودم و مقاله ها رو یکی پس از دیگری به اینجا انتقال می دادم. وقتی که داشتم مقاله هام رو به وبسایتم منتقل می کردم هم یه سری تغییرات استایل دیگه توی قالب ها دادم تا کار نوشتن برام راحت تر بشه.  

> اگه نمی دونستید، ابسیدین (Obsidian) یک نرم افزار یادداشت برداری هست که یادداشت هاتون رو به صورت آفلاین توی درایو تون ذخیره می کنه و می تونید خیلی راحت باهاش کار هاتون رو مدیریت کنید. 
> [[obsidian-sharpen-your-thinking|اطلاعات بیشتر]]

**لینک کردن مقاله ها به همدیگه با ویکیلینک**

برای لینک کردن به مقاله های دیگه توی ابسیدین اینطوری هست که به روش ویکیلینک لینک ها رو ایجاد می کنی. این علامت `[[` رو تایپ می کنی و بعدش می تونی صفحه ای که می خوای بهش لینک کنی رو انتخاب کنی. توی این مقاله بیشتر در موردش نوشتم [[obsidian-internal-links|لینک های داخلی در ابسیدین]] اما اینطوری فکر نمی کردم که توی استرو هم به اون صفحه ای که می خوام لینک کنه. یه جستجو توی گوگل کردم تا ببینم آیا افزونه های برای استرو هست که این قابلیت ویکی لینک کردن رو بهش بده یا نه. اینطوری بود که به افزونه [Remark Wikilink](https://github.com/datopian/portaljs/tree/main/packages/remark-wiki-link) رسیدم. نصبش کردم و تنظیماتش رو هم انجام دادم. بعد از این لینک کردن به مقاله های دیگه مثل آب خوردن بود برام. 

**آپلود عکس ها و فایل ها تو سرور ذخیره سازی ابری لیارا**

یه مشکل دیگه ای هم که بهش بر خوردم این بود که چون سایت استاتیک بود باید حواسم به عکس ها هم جمع میشد. توی سایت های استاتیک اگه عکس ها رو توی پوشه کد به صورت آفلاین داشته باشی همه این ها موقع ساخته شدن نسخه استاتیک کپی میشن و از اول باید همه داده ها رو به سرور آپلود کنی. 

اوایل کار این شاید به نظر آسون بیاد اما هرچی تعداد فایل ها و مقاله ها بیشتر میشه این پروسه آپلودشون به سرور هم کند تر میشه. چون هر دفعه باید کل مقاله ها و عکس ها رو دوباره به سرور آپلود کنی. 

راه چاره ام هم این بود که از [ذخیره ساز ابری لیارا](https://liara.ir/products/object-storage/) برای این کار استفاده کنم. عکس ها و فایل هام رو توی این سرور ذخیره ساز ابری لیارا آپلود می کنم و هر وقت بخوام لینکشون رو داخل مقالاتم میذارم. خیلی آسونه. مشکل آپلود فایل ها هر بار که بخوام سایتم رو استقرارش کنم هم دیگه ندارم. 

**تجربه ام از ساختن وبسایتم با استرو**

در کل خیلی تجربه خوبی در ساختن وبسایتم با استرو داشتم. صفحه گیتهاب این سایت رو می تونید با کلیک روی لینک زیر ببینید: 

https://github.com/zachshirow/zachshirow
 
اگه می خواستید که وبسایتی رو با این ابزار بسازید می تونید یه سر به وبسایت استرو https://astro.build بزنید. اگر هم نیاز به راهنمایی داشتید می تونید از طریق ایمیل با خودم تماس بگیرید. 

zachshirow@gmail.com
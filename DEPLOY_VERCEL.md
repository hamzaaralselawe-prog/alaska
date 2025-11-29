# خطوات نشر تطبيق ألاسكا على Vercel (الطريقة المضمونة)

لقد تم حل مشكلة `npm error` وضبط الإعدادات لتعمل فوراً.

### 1. رفع الكود إلى GitHub
1. تأكد من أن جميع ملفات المشروع (خاصة `package.json`, `vite.config.ts`, `vercel.json`) موجودة في مستودعك على GitHub.

### 2. الذهاب إلى Vercel
1. سجل دخولك في [Vercel.com](https://vercel.com) بحساب GitHub.
2. اضغط **Add New** > **Project**.
3. اختر مستودع "Alaska" واضغط **Import**.

### 3. إعداد مفتاح API (خطوة حاسمة)
في صفحة الإعداد (Configure Project)، ابحث عن قسم **Environment Variables**:
1. في خانة **Key** اكتب: `API_KEY`
2. في خانة **Value** الصق مفتاح Gemini API الخاص بك (يبدأ بـ `AIza...`).
3. اضغط زر **Add**.

### 4. النشر
1. اضغط **Deploy**.
2. انتظر دقيقة حتى ينتهي البناء.
3. مبروك! التطبيق سيعمل الآن بدون أخطاء.

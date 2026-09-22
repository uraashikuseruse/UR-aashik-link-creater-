# 🚀 সেটআপ গাইড - UR AASHIK LINK CREATER

এই গাইডটি অনুসরণ করে আপনি সহজেই GitHub এ কোড আপলোড করে Vercel এ লাইভ করতে পারবেন।

## ধাপ ১: GitHub এ Repository তৈরি করুন

### 1.1 GitHub একাউন্ট তৈরি করুন (যদি না থাকে)
- www.github.com যান
- সাইন আপ করুন
- ইমেইল ভেরিফাই করুন

### 1.2 নতুন Repository তৈরি করুন
1. GitHub এ লগইন করুন
2. টপ-রাইট কোণে **"+"** ক্লিক করুন
3. **"New repository"** নির্বাচন করুন
4. রিপোজিটরি নাম: `ur-aashik-link-creater` লিখুন
5. ডেসক্রিপশন: `Create shareable links for ZIP files instantly` লিখুন
6. **"Public"** নির্বাচন করুন
7. **"Create repository"** ক্লিক করুন

## ধাপ ২: কোড GitHub এ আপলোড করুন

### অপশন A: Git কমান্ড লাইন ব্যবহার করে (সুপারিশকৃত)

**আপনার কম্পিউটারে Git ইনস্টল করুন:**
- Windows: https://git-scm.com/download/win থেকে ডাউনলোড করুন
- Mac: `brew install git` টার্মিনালে লিখুন
- Linux: `sudo apt-get install git` টার্মিনালে লিখুন

**সব ফাইল একটি ফোল্ডারে রাখুন:**
```
ur-aashik-link-creater/
  ├── index.html
  ├── manifest.json
  ├── sw.js
  ├── README.md
  ├── SETUP_GUIDE_BN.md
  ├── vercel.json
  └── .gitignore
```

**টার্মিনালে এই কমান্ড চালান:**

```bash
# ফোল্ডারে যান
cd ur-aashik-link-creater

# Git শুরু করুন
git init

# সব ফাইল যোগ করুন
git add .

# প্রথম কমিট করুন
git commit -m "Initial commit: UR AASHIK LINK CREATER"

# আপনার ইউজারনেম এবং ইমেইল সেট করুন (প্রথমবার শুধু)
git config --global user.name "আপনার নাম"
git config --global user.email "আপনার ইমেইল@example.com"

# আবার কমিট করুন
git commit -m "Initial commit: UR AASHIK LINK CREATER"

# GitHub রিপোজিটরি যুক্ত করুন (নিজের USERNAME ব্যবহার করুন)
git remote add origin https://github.com/আপনার-USERNAME/ur-aashik-link-creater.git

# Main branch এ পুশ করুন
git branch -M main
git push -u origin main
```

### অপশন B: ওয়েব ইন্টারফেস ব্যবহার করে

1. GitHub এ আপনার রিপোজিটরি খুলুন
2. **"Add file"** → **"Create new file"** ক্লিক করুন
3. **Filename** এ `index.html` লিখুন
4. index.html এর সম্পূর্ণ কোড কপি-পেস্ট করুন
5. **"Commit new file"** ক্লিক করুন
6. একই ভাবে বাকি ফাইলগুলি যোগ করুন

## ধাপ ৩: Vercel এ Deploy করুন

### 3.1 Vercel একাউন্ট তৈরি করুন
1. www.vercel.com যান
2. **"Sign Up"** ক্লিক করুন
3. **"Continue with GitHub"** নির্বাচন করুন
4. GitHub এ অনুমতি দিন
5. অ্যাপ ইনস্টল করার সময় সব রিপোজিটরি সিলেক্ট করুন

### 3.2 প্রজেক্ট Import করুন
1. Vercel ড্যাশবোর্ডে যান
2. **"New Project"** ক্লিক করুন
3. **"Import GitHub Project"** নির্বাচন করুন
4. আপনার `ur-aashik-link-creater` রিপোজিটরি খুঁজুন এবং নির্বাচন করুন
5. **"Import"** ক্লিক করুন

### 3.3 সেটিংস কনফিগার করুন
- **Framework**: None নির্বাচন করুন
- **Root Directory**: `./` রাখুন
- **Build Command**: খালি রাখুন
- **Output Directory**: খালি রাখুন
- **Environment Variables**: কিছু যোগ করার প্রয়োজন নেই

### 3.4 Deploy করুন
1. **"Deploy"** ক্লিক করুন
2. অপেক্ষা করুন (১-২ মিনিট)
3. Deploy সম্পন্ন হলে একটি লিংক পাবেন

## ধাপ ৪: আপনার লাইভ ওয়েবসাইট চেক করুন

Deploy সম্পন্ন হওয়ার পরে:
1. Vercel দ্বারা দেওয়া লিংক খুলুন
2. অ্যাপ চেক করুন
3. ZIP ফাইল আপলোড করে টেস্ট করুন

## ধাপ ৫: Chrome এ ইনস্টল করুন (মোবাইল অ্যাপ হিসেবে)

### মোবাইলে:
1. আপনার Vercel লিংক খুলুন
2. Browser মেনু (3 ডট) খুলুন
3. **"Install app"** বা **"Add to Home screen"** ক্লিক করুন
4. অ্যাপটি আপনার হোম স্ক্রিনে ইনস্টল হবে

### ডেস্কটপে:
1. আপনার Vercel লিংক খুলুন
2. Address bar এর ডান দিকে **"Install"** বাটন দেখুন
3. **"Install"** ক্লিক করুন
4. অ্যাপ একটি নতুন উইন্ডোতে খুলবে

## সমস্যা সমাধান

### GitHub Push করতে পারছি না?
```bash
# Git config চেক করুন
git config --list

# Token ব্যবহার করার দরকার হতে পারে
# Personal Access Token তৈরি করুন:
# Settings → Developer settings → Personal access tokens
# Push এর সময় password এ token পেস্ট করুন
```

### Vercel এ Deploy হচ্ছে না?
1. Vercel dashboard এ Logs দেখুন
2. সব ফাইল GitHub এ আছে কিনা চেক করুন
3. Vercel থেকে রিডিপ্লয় করুন

### অ্যাপ কাজ করছে না?
1. Browser এর Developer Tools খুলুন (F12)
2. Console ট্যাবে কোন error আছে কিনা দেখুন
3. Service Worker registered আছে কিনা চেক করুন
4. Browser cache পরিষ্কার করুন

## পরবর্তী ধাপ

একবার লাইভ হওয়ার পরে:
- **বন্ধুদের সাথে শেয়ার করুন** - আপনার Vercel লিংক সবাইকে দিন
- **কাস্টমাইজ করুন** - রঙ এবং ডিজাইন পরিবর্তন করুন
- **উন্নতি করুন** - নতুন ফিচার যোগ করুন
- **ব্যাকআপ রাখুন** - নিয়মিত GitHub pull করুন

## ফাইল স্ট্রাকচার রেফারেন্স

```
ur-aashik-link-creater/
│
├── index.html          # মেইন অ্যাপ্লিকেশন
│   - সব HTML, CSS এবং JavaScript কন্টেইন করে
│   - ZIP আপলোড, লিংক জেনারেশন
│   - সুন্দর অ্যানিমেশন এবং UI
│
├── manifest.json       # PWA ম্যানিফেস্ট
│   - অ্যাপ নাম, আইকন এবং সেটিংস
│   - Chrome এ ইনস্টল করার জন্য প্রয়োজন
│
├── sw.js              # Service Worker
│   - অফলাইন সাপোর্ট
│   - ফাইল ক্যাশিং
│
├── README.md          # ইংরেজি গাইড
├── SETUP_GUIDE_BN.md  # বাংলা গাইড (এটি)
├── .gitignore         # Git ignore ফাইল
├── vercel.json        # Vercel কনফিগ
│
└── [এই সব ফাইল Vercel এ আপলোড করুন]
```

## দ্রুত চেকলিস্ট

- [ ] GitHub একাউন্ট তৈরি
- [ ] Repository তৈরি
- [ ] সব ফাইল GitHub এ আপলোড
- [ ] Vercel একাউন্ট তৈরি
- [ ] Project Vercel এ Import করা
- [ ] Deploy সম্পন্ন
- [ ] Vercel লিংক টেস্ট করা
- [ ] Chrome এ অ্যাপ ইনস্টল করা
- [ ] ZIP ফাইল আপলোড টেস্ট করা

## সাহায্য প্রয়োজন?

- GitHub Issues: আপনার রিপোজিটরি এ Issue তৈরি করুন
- Vercel Support: https://vercel.com/support
- Stack Overflow: GitHub/Vercel সম্পর্কিত প্রশ্ন করুন

---

**আপনার UR AASHIK LINK CREATER এখন লাইভ এবং সবার জন্য উপলব্ধ!** 🎉

লিংক শেয়ার করুন এবং মানুষকে সহজে ফাইল শেয়ার করতে সাহায্য করুন! ✨

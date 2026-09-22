# ✨ UR AASHIK LINK CREATER

A professional, animated web application to create shareable links for your ZIP files instantly. Install as a mobile app on your device and manage file sharing with ease!

## 🌟 Features

✅ **Upload ZIP Files** - Upload your ZIP files with a single click or drag-and-drop  
✅ **Generate Shareable Links** - Automatic unique links for each uploaded file  
✅ **Download Anywhere** - Share links and download files from any device  
✅ **Beautiful UI** - Modern, animated, and professional design  
✅ **PWA Support** - Install as a mobile app on Chrome, Edge, and other browsers  
✅ **Offline Support** - Works offline with service worker caching  
✅ **No Server Required** - All data stored locally in your browser (IndexedDB)  
✅ **100% Private** - Your files stay on your device, no cloud uploads  
✅ **Easy to Use** - Simple, intuitive interface  
✅ **Live Animations** - Smooth transitions and animated gradients  

## 🚀 Quick Start

### Online (Vercel)
Visit: `https://your-vercel-domain.vercel.app`

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Start uploading ZIP files!

## 📱 Installation as App

### On Mobile (Chrome)
1. Visit the website
2. Tap the menu (3 dots)
3. Tap "Install app" or "Add to Home screen"
4. The app will be installed on your device

### On Desktop (Chrome)
1. Visit the website
2. Click the install icon (usually in address bar)
3. Or use Menu → "Install app"
4. App opens in standalone window

## 📁 Project Structure

```
.
├── index.html          # Main application file
├── manifest.json       # PWA manifest for app installation
├── sw.js              # Service worker for offline support
└── README.md          # This file
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: IndexedDB for local file storage
- **PWA**: Service Worker, Web App Manifest
- **Animation**: CSS Animations & Gradients
- **No External Dependencies**: Pure vanilla JavaScript!

## 📊 How It Works

1. **Upload**: Select or drag a ZIP file
2. **Generate**: Unique ID and shareable URL are created
3. **Store**: File is stored in browser's IndexedDB
4. **Share**: Copy the link and share with others
5. **Download**: Anyone with the link can download the file

## 🔒 Privacy & Security

- **Local Storage**: All files are stored locally in your browser
- **No Upload**: Files never leave your device
- **No Server**: No backend server, no logs, no tracking
- **Unique Links**: Each file gets a unique, randomized ID
- **Private by Default**: Only you can access your links

## 📱 Browser Support

✅ Chrome 67+  
✅ Firefox 55+  
✅ Safari 12+  
✅ Edge 17+  
✅ Samsung Internet  
✅ Opera  

## 📈 Storage Limits

- **File Size**: Up to 100MB per file
- **Total Storage**: Depends on browser (usually 50GB+)
- **Browser**: Works best on modern browsers

## 🎨 Customization

The app uses CSS variables for easy theming:

```css
--primary: #6366f1         /* Main brand color */
--accent: #ec4899          /* Accent color */
--success: #10b981         /* Success color */
--bg-dark: #0f172a         /* Dark background */
```

Edit these in `index.html` to customize colors!

## 🐛 Troubleshooting

### App won't install?
- Use a modern browser (Chrome 67+)
- Ensure HTTPS connection
- Check if service worker is registered

### Files not saving?
- Check browser's storage quota
- Clear cache and try again
- Use incognito mode to test

### Links not working?
- Ensure you're using the same browser
- Check if files are still in storage
- Browser data wasn't cleared

## 📲 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel at `vercel.com`
3. Deploy with one click
4. Get instant PWA hosting

### GitHub Pages
1. Push to repository
2. Enable GitHub Pages in settings
3. Website automatically deployed

### Traditional Hosting
Upload all files (index.html, manifest.json, sw.js) to any web server with HTTPS.

## 🎯 Future Enhancements

- [ ] File encryption
- [ ] Expiring links
- [ ] Link passwords
- [ ] Multiple file support
- [ ] Cloud backup option
- [ ] File preview

## 📝 License

MIT License - Free to use and modify

## 🤝 Support

For issues or feature requests, create an issue on GitHub.

## 👨‍💻 Made with ❤️

Created as a fast, efficient file sharing solution.

---

**⭐ Star this repository if you find it useful!**

### Quick Links
- 🌐 [Live Demo](https://your-vercel-domain.vercel.app)
- 📖 [GitHub](https://github.com/yourusername/ur-aashik-link-creater)
- 🐛 [Report Bug](https://github.com/yourusername/ur-aashik-link-creater/issues)

---

Enjoy creating shareable links! ✨

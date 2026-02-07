# Shikhar Anand - Portfolio Website

A modern, responsive, and dynamic portfolio website built with React.js, showcasing skills, projects, education, and contact information.

## 🎯 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Interactive UI** - Smooth animations and hover effects
- **Dynamic Content** - Real-time typing effect, skill bars, and interactive forms
- **Modern Gradient Design** - Eye-catching purple gradient theme
- **Single Page Application** - Smooth scrolling navigation
- **Professional Layout** - Clean sections for About, Skills, Projects, Education, and Contact

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── app.js             # React application with all components
├── profile.jpg        # Your profile picture
└── README.md          # This file
```

## 🚀 How to Download and Run

### Method 1: Download from Claude (Recommended)

1. All files will be available for download
2. Click on each file to download
3. Save all files in a single folder on your computer

### Method 2: Manual Setup

1. Create a new folder called "portfolio" on your desktop
2. Download all the files (index.html, app.js, profile.jpg, README.md)
3. Place all files in the "portfolio" folder

## 💻 Running the Portfolio

### Option 1: Direct Browser Opening (Easiest)
1. Navigate to your portfolio folder
2. Double-click on `index.html`
3. The portfolio will open in your default web browser
4. That's it! 🎉

### Option 2: Using Live Server (Recommended for Development)
1. Install VS Code if you haven't already
2. Install the "Live Server" extension in VS Code
3. Open the portfolio folder in VS Code
4. Right-click on `index.html`
5. Select "Open with Live Server"
6. The portfolio will open with live reload functionality

### Option 3: Using Python (If you have Python installed)
1. Open terminal/command prompt
2. Navigate to the portfolio folder:
   ```bash
   cd path/to/portfolio
   ```
3. Run Python server:
   ```bash
   # For Python 3
   python -m http.server 8000
   
   # For Python 2
   python -m SimpleHTTPServer 8000
   ```
4. Open browser and go to: `http://localhost:8000`

## 🎨 Customization Guide

### Updating Your Information

1. **Profile Picture**: Replace `profile.jpg` with your own image (keep the same filename)

2. **Contact Links**: In `app.js`, find these lines and update with your actual URLs:
   ```javascript
   <a href="https://github.com">  // Replace with your GitHub URL
   <a href="https://linkedin.com"> // Replace with your LinkedIn URL
   ```

3. **Email & Phone**: Already populated with your details from resume

4. **Projects**: Add more projects by editing the `projects` array in the Projects component

5. **Skills**: Modify skill levels by changing the percentage values in the Skills component

### Changing Colors

The main gradient colors can be changed in multiple places:
- Primary gradient: `#667eea` to `#764ba2`
- To change, search for these hex codes in `app.js` and replace with your preferred colors

## 📱 Sections Included

1. **Home/Hero** - Introduction with profile picture and call-to-action buttons
2. **About** - Personal description and quick facts
3. **Skills** - Technical skills with proficiency levels (Languages, Frameworks, Databases, Core Competencies)
4. **Projects** - Featured projects with descriptions and tech stack
5. **Education** - Academic background and achievements
6. **Contact** - Contact form and social media links

## 🔧 Tech Stack

- **React.js** - Frontend framework
- **Vanilla CSS** - Styling (inline styles for simplicity)
- **HTML5** - Structure
- **JavaScript ES6+** - Logic and interactivity

## 📦 Deployment Options

### GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload all portfolio files
3. Go to Settings → Pages
4. Select main branch and root folder
5. Your portfolio will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Create account on Netlify
2. Drag and drop your portfolio folder
3. Get instant live URL

### Vercel (Free)
1. Create account on Vercel
2. Import your portfolio
3. Deploy with one click

## ✨ Features Breakdown

### Animations
- Smooth fade-in effects on load
- Typing animation for profession title
- Hover effects on buttons and cards
- Skill bar animations

### Interactive Elements
- Smooth scroll navigation
- Contact form with validation
- Responsive navbar with scroll effect
- Project cards with hover states

### Responsive Design
- Mobile-first approach
- Breakpoints for different screen sizes
- Flexible grid layouts
- Adaptive typography

## 🎓 Perfect for Internships

This portfolio is specifically designed to showcase:
- ✅ Full-stack development skills (MERN)
- ✅ Modern React.js knowledge
- ✅ Responsive design capabilities
- ✅ Clean, professional code
- ✅ Project experience
- ✅ Problem-solving skills (LeetCode achievements)

## 📝 Tips for Internship Applications

1. **Update Projects**: Add any new projects you complete
2. **Keep Skills Current**: Update proficiency levels as you learn
3. **LinkedIn/GitHub**: Make sure your links are active and profiles are updated
4. **Profile Picture**: Use a professional photo
5. **Test Thoroughly**: Check all links and test on different devices
6. **Get Feedback**: Share with friends/mentors for suggestions

## 🐛 Troubleshooting

**Portfolio not loading?**
- Make sure all three files (index.html, app.js, profile.jpg) are in the same folder
- Check browser console for errors (F12)

**Images not showing?**
- Ensure profile.jpg is in the same folder as index.html
- Check image filename matches exactly (case-sensitive)

**Styling looks broken?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Try a different browser

## 📞 Support

If you encounter any issues:
1. Check this README carefully
2. Verify all files are in the correct location
3. Test in different browsers
4. Check browser console for error messages

## 🎉 You're All Set!

Your professional portfolio is ready to impress recruiters! Good luck with your internship applications! 🚀

---

**Built with ❤️ for Shikhar Anand**
**Last Updated: February 2026**

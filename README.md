# EduTrack - Student Academic Progress Tracker

A comprehensive web application for students to track their academic progress, manage subjects, calculate grades, and maintain study notes. Built progressively using HTML, CSS, JavaScript, and Vue.js as part of a professional training program.

## Overview

EduTrack is a multi-page academic tracking system that helps students:
- Record and manage their subjects
- Track grade performance with weighted averages and GPA calculations
- Monitor academic progress through an intuitive dashboard
- Maintain organized study notes with persistent storage
- Visualize performance metrics with interactive charts and progress bars

The application is built completely client-side with no backend server, storing all data in the browser using localStorage for persistence across sessions.

## Project Structure

```
edutrack/
├── index.html              Main home/dashboard page
├── subjects.html           Subject listing and management page
├── calculator.html         Grade calculation and breakdown page
├── notes.html              Study notes management page
├── package.json            Node.js dependencies configuration
├── .gitignore              Git ignore rules
├── README.md               This file
├── css/
│   └── style.css           Global stylesheet with variables and responsive design
├── js/
│   ├── app.js              Application initialization and utilities
│   ├── data.js             Subject data structure
│   ├── subjects.js         Subject management logic
│   ├── calculator.js       Grade calculation functions
│   └── notes.js            Study notes handling
├── src/
│   ├── main.js             Vue.js entry point
│   ├── App.vue             Root Vue component with layout
│   ├── assets/
│   │   └── style.css       Global Vue styles
│   ├── router/
│   │   └── index.js        Vue Router configuration
│   ├── stores/
│   │   └── grades.js       Pinia state management store
│   ├── components/
│   │   ├── NavBar.vue      Navigation bar component
│   │   ├── SubjectCard.vue Reusable subject card component
│   │   └── GradeBar.vue    Animated progress bar component
│   └── views/
│       ├── HomeView.vue    Dashboard with statistics
│       ├── SubjectsView.vue Subject list with CRUD operations
│       ├── CalculatorView.vue Grade breakdown and analysis
│       └── NotesView.vue   Study notes management
└── training_schedule.html  Complete 3-week training curriculum
```

## Technology Stack

- **Frontend Framework**: Vue.js 3 (Composition API)
- **State Management**: Pinia
- **Routing**: Vue Router
- **Build Tool**: Vite
- **Language**: JavaScript ES6+
- **Styling**: CSS3 with Flexbox and CSS Grid
- **Markup**: HTML5
- **Version Control**: Git and GitHub
- **Deployment**: Netlify
- **Data Storage**: Browser localStorage

## Features

### Dashboard (Home Page)
- Display student information and academic overview
- Real-time statistics including total subjects, weighted average, GPA, and total credits
- Quick navigation links to other sections
- Responsive card-based layout

### Subject Management
- View all subjects in a card-based grid layout
- Add new subjects with name, code, grade, and credits
- Edit existing subject information
- Delete subjects from the tracker
- Search and filter subjects by name or code
- Dynamic grade badges with color coding (A-F scale)
- Real-time average and GPA recalculation

### Grade Calculator
- Detailed grade breakdown table showing all subjects
- Weighted average calculation based on credit hours
- GPA conversion on a 4.0 scale
- Animated progress bar showing overall performance
- Grade distribution visualization
- Live updates when grades change

### Study Notes
- Create and edit unlimited study notes
- Organize notes with timestamps
- Search and sort notes by date
- Auto-save functionality
- Persistent storage using localStorage
- Delete notes when no longer needed

### Technical Features
- Responsive design for desktop, tablet, and mobile devices
- CSS custom properties for consistent theming
- Form validation for data integrity
- Event-driven architecture for interactive elements
- Component-based Vue architecture for maintainability
- Global state management with Pinia for cross-component communication
- Client-side routing for SPA navigation
- Automatic localStorage synchronization

## Installation and Setup

### Prerequisites
- Node.js 14+ and npm installed
- Git installed
- GitHub account (optional, for version control)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Bahatisteven/edu-track-prod.git
   cd edu-track-prod
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. The production-ready files will be in the `dist/` directory

3. Preview the production build:
   ```bash
   npm run preview
   ```

## Usage Guide

### Adding a Subject

1. Navigate to the Subjects page
2. Click the "Add Subject" button
3. Fill in the subject details:
   - Subject Name (e.g., "JavaScript Fundamentals")
   - Subject Code (e.g., "SWDJF301")
   - Grade (0-100 percentage)
   - Credits (number of credit hours)
4. Click "Save" to add the subject
5. The average and GPA will automatically recalculate

### Calculating Grades

1. Go to the Calculator page
2. View the weighted average calculation
3. See the GPA conversion based on your average
4. Check the progress bar showing overall performance
5. View the detailed breakdown table of all subjects

### Managing Notes

1. Navigate to the Notes page
2. Click "New Note" to create a note
3. Type your study notes in the textarea
4. Notes auto-save as you type
5. Delete notes using the delete button
6. Notes persist even after closing the browser

### Using the Dashboard

1. Start on the Home page to see your academic overview
2. Check key statistics: total subjects, average grade, GPA, and credits
3. Use quick navigation buttons to jump to other pages
4. All statistics update in real-time as you make changes

## Curriculum and Learning Outcomes

This project is part of Rwanda TVET Board Level 3 training covering:

### Week 1: HTML, CSS, and Git Fundamentals
- HTML5 semantic structure
- CSS3 styling with variables and Grid
- Responsive design with media queries
- Version control with Git
- GitHub repository management

### Week 2: JavaScript Interactivity
- JavaScript ES6+ fundamentals (variables, functions, arrays, objects)
- DOM manipulation and event handling
- Array methods (map, filter, reduce)
- Form validation and error handling
- Browser localStorage API
- Search and filter functionality

### Week 3: Vue.js and Modern Development
- Vue 3 Composition API
- Component-based architecture
- Reactive data binding and computed properties
- Vue Router for SPA navigation
- Pinia state management
- Production deployment

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Lightweight client-side only application (no server requests)
- Optimized CSS with variables for faster rendering
- Efficient component rendering with Vue 3
- localStorage for instant data persistence
- No external API calls required

## Code Quality

- Clean, readable code with meaningful variable names
- Consistent code formatting and structure
- Semantic HTML for accessibility
- Modular component architecture
- Separation of concerns between data, logic, and presentation

## Development Standards

- Git commits follow conventional commit format (feat:, fix:, style:, etc.)
- Meaningful commit messages describing changes
- Branch-based development for features
- Code reviews before merging to main branch

## Troubleshooting

### Data Not Persisting
- Check if browser localStorage is enabled
- Clear browser cache and try again
- Ensure you're not in private/incognito mode

### Page Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for error messages (F12)

### Responsive Design Issues
- Try resizing the browser window
- Use browser DevTools device emulation (F12)
- Check if you're using a supported browser

### Grade Calculation Issues
- Verify all subjects have grades between 0-100
- Ensure credit hours are positive numbers
- Check the calculator page for detailed breakdown

## Deployment

The application is deployed on Netlify. To deploy your own version:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

For SPA routing to work correctly on Netlify, ensure the `_redirects` file is in the public directory with the content:
```
/*    /index.html    200
```

## Future Enhancements

- User authentication and profiles
- Database backend for persistent storage
- Subject recommendations based on performance
- Grade prediction analytics
- Export reports as PDF
- Dark mode theme
- Integration with institutional grade systems
- Collaborative features for study groups
- Mobile app version
- Real-time grade updates from institutions

## License

This project is part of the Rwanda TVET Board Level 3 Software Development training program. All rights reserved.

## Author

Developed as part of the EduTrack Internship Training Program (2026)

For questions or support, please contact the training instructor or refer to the training documentation.

## Git History

The complete development history can be viewed on GitHub:
https://github.com/Bahatisteven/edu-track-prod

Key commits include:
- Initial project setup and HTML structure
- CSS styling and responsive design
- JavaScript interactivity implementation
- Vue.js migration and modernization
- State management with Pinia
- Production deployment and optimization

## Additional Resources

- Training Schedule: See training_schedule.html for detailed curriculum
- Vue.js Documentation: https://vuejs.org
- Pinia Documentation: https://pinia.vuejs.org
- Vue Router Documentation: https://router.vuejs.org
- MDN Web Docs: https://developer.mozilla.org

---

Last Updated: May 2026

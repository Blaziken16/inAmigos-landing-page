import './style.css';

// Layouts
import { CustomCursor } from './layouts/CustomCursor.js';
import { Navbar } from './layouts/Navbar.js';
import { MobileMenu } from './layouts/MobileMenu.js';
import { Footer } from './layouts/Footer.js';

// Screens
import { HomePage } from './screens/HomePage.js';
import { AboutPage } from './screens/AboutPage.js';
import { GalleryPage } from './screens/GalleryPage.js';
import { VolunteersPage } from './screens/VolunteersPage.js';

// Logic
import { initRouter } from './router/router.js';
import { initCursor } from './animations/cursor.js';
import { initCounters } from './animations/counter.js';
import { initGallery } from './animations/gallery.js';
import { initMisc } from './animations/misc.js';

// 1. Mount App
const app = document.getElementById('app');

app.innerHTML = `
  <div class="global-bg">
    <div class="mesh-gradient"></div>
    <div class="glass-sphere sphere-1"></div>
    <div class="glass-sphere sphere-2"></div>
    <div class="glass-sphere sphere-3"></div>
  </div>

  ${CustomCursor()}
  ${Navbar()}
  ${MobileMenu()}
  
  ${HomePage()}
  ${AboutPage()}
  ${GalleryPage()}
  ${VolunteersPage()}

  ${Footer()}
`;

// 2. Initialize JS Logic
initRouter();
initCursor();
initCounters();
initGallery();
initMisc();

Maggie Kelly Designs — static site
===================================

HOW TO PUBLISH
--------------
1. Unzip this folder.
2. Upload the entire contents (index.html, teaching.html, resume.html,
   contact.html, the css/ and js/ folders) to your web host's public
   folder (often called public_html, www, or the site root).
3. Your homepage is index.html.

CONTACT FORM (IMPORTANT)
------------------------
The contact form uses Formspree (free, no server needed).
1. Sign up at https://formspree.io and create a new form.
2. Copy your form endpoint — it looks like:  https://formspree.io/f/abc123xyz
3. Open contact.html and find:  action="https://formspree.io/f/YOUR_FORM_ID"
4. Replace YOUR_FORM_ID with your real endpoint. Save & re-upload.
That's it — submissions will be emailed to you.

IMAGES
------
Project photos and the resume image currently load from your existing
maggiekellydesigns.com URLs, so they work as soon as you upload.
To make the site fully self-contained (recommended):
1. Save each image into the images/ folder using these names:
     images/maggie-profile.jpeg
     images/photon-rainbow.png
     images/michael-thomas-coffee.png
     images/stone-age.png
     images/indian-pueblo-kitchen.png
     images/helix.png
     images/itality.png
     images/maggie-kelly-resume-2025.png
2. In index.html and resume.html, replace the long https://maggiekellydesigns.com/...
   image URLs with the matching local path (e.g. images/photon-rainbow.png).

FONTS
-----
Fonts (Cormorant Garamond + Instrument Sans) load from Google Fonts and
require an internet connection to display exactly as designed.

© 2026 Maggie Kelly Designs

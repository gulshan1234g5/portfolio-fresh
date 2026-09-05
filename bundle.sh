#!/bin/bash
# Bundle the React app into a single HTML file

set -e

echo "Building production bundle..."
npm run build

echo "Creating single HTML artifact..."

# Create bundle directory
mkdir -p dist-bundle

# Copy the built files
cp dist/index.html dist-bundle/
cp -r dist/assets dist-bundle/

# Create a single HTML file with inlined CSS and JS
cat > dist-bundle/bundle.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#020617" />
    <meta name="description" content="Gulshan Toppo — Creative Developer, Automation Builder, Trading Systems Explorer. Building digital experiences that feel alive with React, Three.js, and modern web technologies." />
    <meta name="keywords" content="Gulshan Toppo, Creative Developer, Automation, Trading Systems, Three.js, React, Full-Stack Developer, TypeScript, Algorithmic Trading" />
    <meta name="author" content="Gulshan Toppo" />
    
    <!-- DNS Prefetch & Preconnect for critical third-party origins -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Gulshan Toppo — Creative Developer & Automation Builder" />
    <meta property="og:description" content="Building digital experiences that feel alive. Trading systems, automation, 3D web experiences." />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:url" content="https://gulshan1234g5.github.io/portfolio-fresh/" />
    <meta property="og:site_name" content="Gulshan Toppo Portfolio" />
    <meta property="og:locale" content="en_US" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Gulshan Toppo — Creative Developer & Automation Builder" />
    <meta name="twitter:description" content="Building digital experiences that feel alive. Trading systems, automation, 3D web experiences." />
    <meta name="twitter:image" content="/og-image.png" />
    <meta name="twitter:creator" content="@gulshan1234g5" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://gulshan1234g5.github.io/portfolio-fresh/" />
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#person",
          "name": "Gulshan Toppo",
          "jobTitle": "Creative Developer & Automation Builder",
          "url": "https://gulshan1234g5.github.io/portfolio-fresh/",
          "image": "https://gulshan1234g5.github.io/portfolio-fresh/profile.jpg",
          "description": "Creative Developer, Automation Builder, Trading Systems Explorer. Building digital experiences that feel alive with React, Three.js, and modern web technologies.",
          "sameAs": [
            "https://github.com/gulshan1234g5",
            "https://linkedin.com/in/gulshan1234g5",
            "https://twitter.com/gulshan1234g5"
          ],
          "knowsAbout": [
            "React",
            "TypeScript",
            "Three.js",
            "React Three Fiber",
            "Framer Motion",
            "GSAP",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "Trading Systems",
            "Automation",
            "WebGL",
            "3D Web Development",
            "Full-Stack Development"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "email": "mailto:gulshan1234g5@gmail.com"
        },
        {
          "@type": "WebSite",
          "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#website",
          "url": "https://gulshan1234g5.github.io/portfolio-fresh/",
          "name": "Gulshan Toppo Portfolio",
          "description": "Portfolio of Gulshan Toppo — Creative Developer, Automation Builder, Trading Systems Explorer",
          "publisher": {
            "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#person"
          },
          "inLanguage": "en",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://gulshan1234g5.github.io/portfolio-fresh/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#webpage",
          "url": "https://gulshan1234g5.github.io/portfolio-fresh/",
          "name": "Gulshan Toppo - Portfolio Home",
          "isPartOf": {
            "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#website"
          },
          "about": {
            "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#person"
          },
          "description": "Creative Developer, Automation Builder, Trading Systems Explorer portfolio featuring 3D interactive experiences, projects, and services."
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#services",
          "name": "Gulshan Toppo Development Services",
          "provider": {
            "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#person"
          },
          "serviceType": [
            "Web Development",
            "3D Web Experiences",
            "Automation Development",
            "Trading Systems Development",
            "Full-Stack Development",
            "React & TypeScript Consulting"
          ],
          "areaServed": "Worldwide",
          "description": "Custom web development, 3D interactive experiences, automation solutions, and trading systems development using modern technologies.",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://gulshan1234g5.github.io/portfolio-fresh/#contact"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://gulshan1234g5.github.io/portfolio-fresh/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What technologies does Gulshan Toppo specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gulshan Toppo specializes in React, TypeScript, Three.js, React Three Fiber, Framer Motion, GSAP, Tailwind CSS, Node.js, Python, and building trading systems and automation solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Is Gulshan Toppo available for freelance work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Gulshan Toppo is available for freelance and consulting projects. Contact via the contact form or email at gulshan1234g5@gmail.com."
              }
            },
            {
              "@type": "Question",
              "name": "What type of projects does Gulshan Toppo build?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gulshan builds creative web experiences, 3D interactive websites, automation tools, trading systems, full-stack applications, and custom React/TypeScript solutions."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact Gulshan Toppo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact Gulshan Toppo through the contact form on this portfolio, via email at gulshan1234g5@gmail.com, or through LinkedIn and GitHub profiles linked in the footer."
              }
            }
          ]
        }
      ]
    </script>
    
    <title>Gulshan Toppo — Creative Developer & Automation Builder</title>
EOF

# Append the built CSS and JS
CSS_FILE=$(ls dist/assets/index-*.css | head -1)
JS_FILE=$(ls dist/assets/index-*.js | head -1)

echo "  <style>" >> dist-bundle/bundle.html
cat "$CSS_FILE" >> dist-bundle/bundle.html
echo "  </style>" >> dist-bundle/bundle.html

echo "  </head>" >> dist-bundle/bundle.html
echo "  <body>" >> dist-bundle/bundle.html

# Add noscript fallback
cat >> dist-bundle/bundle.html << 'EOF'
    <noscript>
      <div style="padding: 2rem; text-align: center; background: #020617; color: #fafafa; font-family: system-ui, sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: clamp(2rem, 5vw, 4rem); margin-bottom: 1rem; font-weight: 700;">Gulshan Toppo</h1>
        <p style="font-size: clamp(1rem, 2vw, 1.5rem); color: #a0a0a0; max-width: 600px; margin-bottom: 2rem;">Creative Developer, Automation Builder, Trading Systems Explorer</p>
        <p style="color: #666; max-width: 500px; margin-bottom: 2rem;">This portfolio features interactive experiences that require JavaScript. Please enable JavaScript to view the full portfolio.</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <a href="https://github.com/gulshan1234g5" target="_blank" rel="noopener" style="color: #00cdf5; text-decoration: none;">GitHub</a>
          <a href="https://linkedin.com/in/gulshan1234g5" target="_blank" rel="noopener" style="color: #00cdf5; text-decoration: none;">LinkedIn</a>
          <a href="mailto:gulshan1234g5@gmail.com" style="color: #00cdf5; text-decoration: none;">Email</a>
        </div>
      </div>
    </noscript>
    <div id="root"></div>
EOF

echo "  <script>" >> dist-bundle/bundle.html
cat "$JS_FILE" >> dist-bundle/bundle.html
echo "  </script>" >> dist-bundle/bundle.html

echo "  </body>" >> dist-bundle/bundle.html
echo "</html>" >> dist-bundle/bundle.html

echo "Bundle created at dist-bundle/bundle.html"
ls -la dist-bundle/
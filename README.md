# CV generator from jinja Python

## Organisation

```
.
├── data.json
├── dico.py
├── environment.yml
├── file.txt
├── generator.py
├── index.html
├── opencv
│   └── cv.yaml
├── __pycache__
│   ├── dico.cpython-310.pyc
│   ├── dico.cpython-313.pyc
│   └── generator.cpython-310.pyc
├── README.md
├── static
│   ├── javascripts
│   │   ├── html2pdf.v0.9.3.bundle.min.js
│   │   └── main.js
│   ├── pictures
│   │   ├── favicon
│   │   │   ├── android-chrome-192x192.png
│   │   │   ├── android-chrome-512x512.png
│   │   │   ├── apple-touch-icon.png
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   ├── favicon.ico
│   │   │   ├── network.png
│   │   │   └── site.webmanifest
│   │   ├── profile.jpeg
│   │   ├── profile.png
│   │   ├── profile.txt
│   │   └── results
│   │       └── myResumeCV-light.png
│   └── stylesheets
│       └── layout.css
└── templates
    └── index-jinja-render.html

```

## Install

`` mamba env create -f environment.yml ``

`` python generator.py  ``
# CV generator from jinja Python

## Organisation

```

├── data.json                                   # CV data
├── environment.yml                             # Environment configuration file
├── generator.py                                # API to generate the CV
├── index.html                                  # CV in HTML format
├── LICENSE                                     # Project license
├── opencv                                      # Data for the RenderCV library
│   └── cv.yaml                                 # CV configuration file for RenderCV
├── README.md                                   # Project description file
├── static                                      # Static files for the project
│   ├── javascripts                             # Folder for JavaScript files
│   │   ├── html2pdf.v0.9.3.bundle.min.js       # Package to download the HTML CV as a PDF
│   │   └── main.js                             # Script to handle PDF conversion through a button
│   ├── pictures                                # Folder for CV images
│   │   ├── network.png                         # Network icon
│   │   └── profile.jpeg                        # Profile picture
│   └── stylesheets                             # Folder for CSS stylesheets
│       └── layout.css                          # CSS style for CV layout
└── templates                                   # HTML templates
    └── index-jinja-render.html                 # HTML template auto-generated with Jinja

```

## Install

`` mamba env create -f environment.yml ``

`` python generator.py  ``
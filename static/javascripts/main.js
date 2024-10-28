
/* Link PDF Download on Mobile screen depending of the light/dark mode */

// const downloadButton = document.getElementById('resume-button');

// downloadButton.addEventListener('click', () => {
//         downloadButton.href = "assets/pdf/myResumeCV-light.pdf";
// });

/* Reduce the size and print on an A4 sheet */

function addScaleCV() {
    document.body.classList.add("scale-cv");
}

/* Remote the size when the CV is downloaded */

function removeScaleCV() {
    document.body.classList.remove("scale-cv");
}

/* Generate PDF */

// PDF generated area
let areaCV = document.getElementById('area-cv');

// Button
let resumeButton = document.getElementById("resume-button");

// Generate PDF with html2pdf.js
function generateResume() {
    const element = document.getElementById("area-cv");

    let options = {
        margin: 0,
        filename: 'myResumeCV-light.pdf',
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}

// Action executed by clicking on the button => generation of the final PDF CV CV
resumeButton.addEventListener("click", () => {
    // Adapt the area of the PDF
    // addScaleCV();
    // Generate the PDF
    generateResume();
    // Remove adaptation after 1 second (you can choose to set more than 1 second if your PDF download time is long)
    // setTimeout(removeScaleCV, 1000);
});
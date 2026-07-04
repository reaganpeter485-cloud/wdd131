// Dynamically get the current year and populate the copyright span
const currentYearSpan = document.getElementById("currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Dynamically get the document's last modified date and populate the paragraph
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.innerHTML = `Last Modification: ${document.lastModified}`;

// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else {
    return "";
  }

}
// function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "- [License](#license)";
    // } else if (license === "MIT") {
    //   return "[![License: MIT](https://opensource.org/licenses/MIT)]";
    // } else if (license === "Boost") {
    //   return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    return "";
  }
}

// function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (`License`);
  } else {
    return "";
  }
}

// function to generate markdown for README
// the data is pulled from the questions asked when node index is run
// table of contents links to the other sections of the readme (scrolls down)
// license info wont populate if "None" is chosen when asked which license was    used
function generateMarkdown(data) {
  const file =
    `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## ${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}
## Tests
${data.tests}

## Questions
Reach me with additional questions here: [Email](${data.email}) or check out my other projects here: [Github](${data.github})
`


  return file;
}

export default generateMarkdown;


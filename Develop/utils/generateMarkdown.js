// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "[![License](https://opensource.org/licenses/Apache-2.0)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://opensource.org/licenses/MIT)]";
  } else if (license === "Boost") {
    return "[![License](https://www.boost.org/LICENSE_1_0.txt)]";
  } else {
    return "";
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license.licenseSection
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const file = 
    `
      # ${data.title}
      ## ${data.description}
      ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
      ## ${data.installation}
      ## ${data.usage}
      ## ${data.credits}
      ## ${data.license}
      ## ${data.badges}
      ## ${data.tests}
      ## Questions
      [Github](https://github.com/bmurfield).
      Reach me with addition questions here: [Email](https://bmurfield@gmail.com)
        
    `
  
  return file;
}

export default generateMarkdown;


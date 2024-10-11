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


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license)
  const licenseBadge = renderLicenseBadge(data.license)

  const file =
`
# ${data.title}
## ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
## ${data.credits}
## License
- ${data.license} 
${licenseLink, licenseBadge}
## Tests
${data.tests}

## Questions
Reach me with additional questions here: [Email](https://bmurfield@gmail.com) or check out my other projects here: [Github](https://github.com/bmurfield)
`


  return file;
}

export default generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badgeMap = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "IBM": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "Eclipse": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
}

const licenseMap = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache": "https://opensource.org/licenses/Apache-2.0",
    "GNU": "https://www.gnu.org/licenses/gpl-3.0",
    "IBM": "https://opensource.org/licenses/IPL-1.0",
    "Eclipse": "https://opensource.org/licenses/EPL-1.0"
}

function renderLicenseBadge(license) {
    return badgeMap[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return licenseMap[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `### ** License **
    This project is licensed under the [${data.license}](${renderLicenseLink[data.license]}) license.`
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# **${data.title}**

## ${renderLicenseBadge(data.license)}

## **${data.description}**


>## Table of contents

- Installation
- Usage
- Contributing
- Testing
- License
- Questions

### **Installation**

To install this aplication on your device, please fllow these instructions:

${data.instalation}
### **Usage**
${data.usage}


${renderLicenseSection(data.license)}

### **Contributing**
${data.contributing}
### **Tests**

The following tests have been run on this application:
${data.testing}
### **Questions**

If you have any questions regarding this repo, feel free to reachout on [github](${data.username}) or via [email](${data.email}).


`;
}

module.exports = generateMarkdown;
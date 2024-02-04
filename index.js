#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const readline = require('readline-sync');


const copyTemplateFiles = async (sourceDir, targetDir, projectName) => {
  try {
    await fs.copy(sourceDir, targetDir);

    // Read the original package.json content
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJsonObject = JSON.parse(packageJsonContent);
    // Update the name field with the provided project name
    packageJsonObject.name = projectName;

    // Write the modified content back to package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonObject, null, 2));
  } catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
  }
};
const createNextApp = projectName => {
  const targetDir = path.resolve(process.cwd(), projectName);

  if (projectName === '.' || projectName === './') {
    // Set the project name to the name of the parent folder
    projectName = path.basename(path.resolve(targetDir, '..'));
  }

  // Copy template files to the target directory
  copyTemplateFiles(path.join(__dirname, 'nextv14-mui-mini-kit'), targetDir, projectName)
    .then(() => {
      console.log(`Nextjs app named: ${projectName} created`);
    })
    .catch(err => {
      console.error('Error creating app:', err);
      process.exit(1);
    });
};

const getProjectName = () => {
  let projectName = process.argv[2];

  if (!projectName) {
    projectName = readline.question('Please provide a project name: ');
  }

  return projectName;
};


// Get the project name from the command line arguments
const projectName = getProjectName();

if (!projectName) {
  console.error('\x1b[31mProject terminated as no project name provided.\x1b[0m');
  process.exit(1);
}

createNextApp(projectName);

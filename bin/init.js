#!/usr/bin/env node

const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');

const repoUrl = 'https://github.com/joaoalbertocsjunior/react-s.git';
const destinationPath = process.cwd() + '/react-s-starter';  // Where the project will be created

console.log('Cloning repository...');

simpleGit()
  .clone(repoUrl, destinationPath)
  .then(() => {
    console.log(`Repository cloned to ${destinationPath}`);
    console.log('Installing dependencies...');

    // Change the working directory to the newly cloned repository
    process.chdir(destinationPath);

    // Run npm install or yarn install
    const exec = require('child_process').exec;
    exec('npm install', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log('Setup complete!');
    });
  })
  .catch((err) => {
    console.error('Error cloning the repository:', err);
  });

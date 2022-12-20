pipeline {
  //  agent { docker { image 'mcr.microsoft.com/playwright:v1.29.0-focal' } }
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            bat 'npm install'
            bat 'npx playwright test'
         }
      }
   }
}
pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/dimitur2204/curriculum-app.git', branch: 'dev')
      }
    }

    stage('List dirs') {
      steps {
        sh 'ls -la'
      }
    }

  }
}
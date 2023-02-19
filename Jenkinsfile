pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/dimitur2204/curriculum-app.git', branch: 'dev')
      }
    }

    stage('Front End Unit Tests') {
      steps {
        sh 'cd curriculum-front && npm install && npm run test:unit'
      }
    }

  }
}
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

    stage('Build Docker') {
      steps {
        sh 'docker build -f curriculum-front/Dockerfile .'
      }
    }

    stage('Log in to Dockerhub') {
      environment {
        DOCKERHUB_USER = 'dimitar2204'
        DOCKERHUB_PASSWORD = 'cfEvBx8y^W83b6#&RCGP'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

  }
}
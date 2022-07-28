pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
               docker {
                    image 'node:latest'
                    args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh 'node src/mycontent.js'
            }
        }
    }
}


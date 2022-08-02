pipeline {
    agent any

    stages {
        stage('Fetch Downstream') {
            steps {
                sh '''
                    mkdir ProjectB
                    cd ProjectB
                    git clone https://github.com/ddsharpe/projectB.git
                '''
            }
        }
        stage('Push') {
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


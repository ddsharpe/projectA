pipeline {
    agent any

    stages {
        stage('Downstream') {
            agent {
               docker {
                    image 'node:latest'
                    args '-u root -v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh '''
                    rm -rf downstream
                    mkdir downstream
                    cd downstream
                    git clone https://github.com/ddsharpe/projectB.git
                    cd ..
                    cd downstream/projectB
                    git checkout -b from-projectA
                    node ../../src/mycontent.js
                    git commit -m 'update from projectA'
                    git push origin
                '''
            }
        }
    }
}


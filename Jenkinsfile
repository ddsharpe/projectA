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
                    mkdir downstream
                    cd downstream
                    git clone https://github.com/ddsharpe/projectB.git
                    cd ..
                    // might be simpler to replace this javascript with sed/awk
                    node src/mycontent.js
                    cd downstream/projectB
                    git checkout -b from-projectA
                    git commit -m 'update from projectA'
                    git push origin
                '''
            }
        }
    }
}


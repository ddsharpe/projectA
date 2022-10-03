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
                withCredentials([gitUsernamePassword(credentialsId: 'ecnj_github', gitToolName: 'git-tool')]) {
                sh '''
                    git config --global user.email "ecnj@oracle.com"
                    git config --global user.name "ECNJ BOT"
                    rm -rf downstream
                    mkdir downstream
                    cd downstream
                    git clone https://github.com/ddsharpe/projectB.git
                    cd ..
                    cd downstream/projectB
                    git checkout from-projectA-release/v1 || git checkout -b from-projectA-release/v1
                    node ../../src/mycontent.js
                    git add folder/bom.json
                    git commit -m 'update from projectA'
                    git push origin from-projectA
                '''
                }
            }
        }
    }
}


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
                    git config --global user.email "you@example.com"
                    git config --global user.name "Your Name"
                    rm -rf downstream
                    mkdir downstream
                    cd downstream
                    git clone https://github.com/ddsharpe/projectB.git
                    cd ..
                    cd downstream/projectB
                    git checkout -b from-projectA
                    node ../../src/mycontent.js
                    git add folder/bom.json
                    git commit -m 'update from projectA'
                    git push origin
                '''
               withCredentials([usernamePassword(credentialsId: 'DerekGitHub',
                                usernameVariable: 'username',
                                passwordVariable: 'password')]){
                   sh("git push http://$username:$password@git.corp.mycompany.com/repo")
               }
            }
        }
    }
}


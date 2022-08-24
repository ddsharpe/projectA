pipeline {
    agent any

    stages {
        stage('Call Downstream Job') {
            steps {
                build job: "derek-test2/no-slashes", propagate: false
            }
        }
    }
}


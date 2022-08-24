pipeline {
    agent any

    stages {
        stage('Call Downstream Job') {
            when { changeset "*" }
            steps {
                build job: "derek/derek-test2/bfs%2Fv1", propagate: false
            }
        }
    }
}


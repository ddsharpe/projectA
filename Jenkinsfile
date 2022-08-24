pipeline {
    agent any

    stages {
        stage('Call Downstream Job') {
            when {
                allOf {
                    branch "oracle/release/*"
                    triggeredBy 'TimerTrigger'
                }
            }
            steps {
                build job: "derek-test2/no-slashes", propagate: false, parameters []
            }
        }
    }
}


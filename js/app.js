initializeSession();

// Handling all of our errors here by alerting them

function handleError(error) {
    if (error) {
        //      alert(error.message);
    }
}

function initializeSession() {
    OT.setLogLevel(5);
    //    var session = OT.initSession(apiKey, sessionId);

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '50%',
            height: '50%'
        }, handleError);
}

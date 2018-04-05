var apiKey = "43024972";
var sessionId = "1_MX40MzAyNDk3Mn5-MTUyMjg4MTQxODg3Nn44RmkyR0d0QzFaamJ4eElJMlpCYmRjM3F-UH4";
var token = "T1==cGFydG5lcl9pZD00MzAyNDk3MiZzaWc9YmJhYjMxYjU1NTE1OTJhZDdlMTA3ZmVlYjExMjI0NDI5OWJkMmM1NDpzZXNzaW9uX2lkPTFfTVg0ME16QXlORGszTW41LU1UVXlNamc0TVRReE9EZzNObjQ0Um1reVIwZDBRekZhYW1KNGVFbEpNbHBDWW1Sak0zRi1VSDQmY3JlYXRlX3RpbWU9MTUyMjg4MTQ2NCZub25jZT0wLjMyODc5MjMwNTg0OTI5MzQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMzQ4NjI2NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

initializeSession();

// Handling all of our errors here by alerting them                                                                      

function handleError(error) {
    if (error) {
        //      alert(error.message);                                                                                    
    }
}

function initializeSession() {
    OT.setLogLevel(5);
    var session = OT.initSession(apiKey, sessionId);

    // Create a publisher                                                                                                
    var publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '50%',
            height: '50%'
        }, handleError);

    // Connect to the session                                                                                            
    session.connect(token, function(error) {
            // If the connection is successful, publish to the session                                                   
            if (error) {
                handleError(error);
            } else {
                session.publish(publisher, handleError);
            }
        });
}
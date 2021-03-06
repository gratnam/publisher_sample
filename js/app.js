var apiKey = "45778292";
var sessionId = "2_MX40NTc3ODI5Mn5-MTUyMjk2MDI2MzIzOX5kRjdtVmoyZGZsZ2Jab2tqb0NFQXFNckx-fg";
var token = "T1==cGFydG5lcl9pZD00NTc3ODI5MiZzaWc9YzE2NzU4ZmE2YmI1M2VkMDYwZjU5MGNmZDZkNzgxYWZkZGM2OWQ4YTpzZXNzaW9uX2lkPTJfTVg0ME5UYzNPREk1TW41LU1UVXlNamsyTURJMk16SXpPWDVrUmpkdFZtb3laR1pzWjJKYWIydHFiME5GUVhGTmNreC1mZyZjcmVhdGVfdGltZT0xNTIyOTYwMjg2Jm5vbmNlPTAuNjIwMTc2NDc0MTA0Mzk2MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI1NTUyMjg2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
initializeSession();

// Handling all of our errors here by alerting them                                                                      

// function handleError(error) {
//         session.disconnect();
//         //
//         initializeSession();
//     if (error) {

//         //disconnect from session
//         session.disconnect();
//         //
//         initializeSession();
//     }
// }

function initializeSession() {

    function handleError(error) {
        if (error) {
            console.log(error);
            session.disconnect();
            initializeSession();
        }
    }

    OT.setLogLevel(5);
    var session = OT.initSession(apiKey, sessionId);

    // Connect to the session                                                                                            
    session.connect(token, function(error) {
            // If the connection is successful, publish to the session                                                   
            if (error) {
                handleError(error);
            } else {
                console.log('1. connected to session')
                setTimeout(function(){ 
                    // Create a publisher
                    console.log('2. initialized a pub with no A/V')                                                                                                
                    var publisher = OT.initPublisher('publisher', {
                            insertMode: 'append',
                            width: '50%',
                            height: '50%',
                            publishVideo:false,
                            publishAudio:false
                        }, handleError)
                    
                    setTimeout(function(){ 
                        session.publish(publisher, handleError)
                        .on('streamCreated', function (event) {
                            console.log('3. published with no A/V')                                                                                                
                            setTimeout(function(){ 
                                console.log('4. published audio')                                                                                                
                                publisher.publishAudio(true); 
                                publisher.publishVideo(true); 

                            }, 3000); 
                            setTimeout(function(){ 
                                console.log('5. published video')                                                                                                

                            }, 6000);    
                        });


                    }, 3000);
              
                }, 3000);

                
            }
        });
}

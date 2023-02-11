//CALLBACK HELL AND PYRAMID OF DOOM
//(callback under callback .............)---> BAD PRACTICE

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  
    //for show in console
    script.onload = () => {
      console.log("script is loaded with src : " + src);
      callback(null, src);
    }
    script.onerror = () => {
      console.log('Error with src : ' + src);
      callback(new Error('src got some error'));
    }
  }
  
  
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
    if (error) {
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",function hello(error, src) {
        if (error) {
            console.log(error);
            sendEmergencyMessageToCeo();
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
            if (error) {
                console.log(error);
                sendEmergencyMessageToCeo();
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function hello(error, src){})
        })
    })
})
  
  
  
  
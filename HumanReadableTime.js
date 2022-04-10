function humanReadable (seconds) {
    let hour
    let mins
    let sec
    
    hour = Math.floor(seconds/3600)
    mins = Math.floor((seconds - (Math.floor(hour*3600))) / 60)
    sec = Math.floor(Math.floor((seconds - (Math.floor(hour*3600)))-(mins*60)))

    if(hour.toString().length == 1) hour = String('0'+hour)
    else hour = String(hour)
    if(mins.toString().length == 1) mins = String('0'+mins)
    else mins = String(mins)
    if(sec.toString().length == 1) sec = String('0'+sec)
    else sec = String(sec)

    
    return hour+mins+sec;
  }

  humanReadable(59)

function humanReadable(seconds) {
var pad = function(x) { return (x < 10) ? "0"+x : x; }
return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

function humanReadable(seconds) {
    var hours = parseInt( seconds / 3600 ) ;
    var minutes = parseInt( seconds / 60 ) % 60;
    var seconds = seconds % 60;
    
    var pad = function(val){
      return val < 10 ?"0"+val:val;
    }
    
    return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
    }
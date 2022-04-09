function rgb(r, g, b){
    // complete this function
    let hexR
    let hexG
    let hexB
    if(r>9 && r<=255) hexR = (r).toString(16)
    else if(r>255) hexR = (255).toString(16)
    else if(r<=9 && r>=0) hexR = '0'+r
    else if(r<0) hexR = '00'
    if(g>9 && g<=255) hexG = (g).toString(16)
    else if(g>255) hexG = (255).toString(16)
    else if(g<=9 && g>=0) hexG = '0'+g
    else if(g<0) hexG = '00'
    if(b>9 && b<=255) hexB = (b).toString(16)
    else if(b>255) hexB = (255).toString(16)
    else if(b<=9 && b>=0) hexB = '0'+b
    else if(b<0) hexB = '00'
    
    if(hexR.length == 1) hexR = '0'+hexR
    if(hexG.length == 1) hexG = '0'+hexG
    if(hexB.length == 1) hexB = '0'+hexB

    return(hexR+hexG+hexB).toUpperCase()
}

function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function rgb(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }
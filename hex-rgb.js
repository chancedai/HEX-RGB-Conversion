(function(b){b.toRGB=function(a){a=parseInt(a,16);return[a>>16,a>>8&255,a&255]};b.toHex=function(a,b,c){a=(c|b<<8|a<<16).toString(16);return"000000".substr(0,6-a.length)+a}})(this);
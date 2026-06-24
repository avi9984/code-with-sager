
var x= 2;
var y= 3;
var z= 5;

if(x>y && x>z){
    var grestest=x;
}else if(y>x && y>z){
    var grestest=y;
}else{
    var grestest=z;
}

while(true){
    if(grestest % x===0 && grestest % y===0 && grestest % z===0){
        console.log("LCM", grestest);
        break;
    }else{
        grestest=grestest+1;
    }

}
function factory(a,b,c){
    return function(){
        console.log(a,b,c);
    }
}

var temp=factory(100,200,300);
var temp2=factory("apple","banana","curry");

temp();
temp2();
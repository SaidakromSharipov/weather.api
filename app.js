"use strict";

const book=true;


const bookShop=new Promise((resolve,reject)=>{

setTimeout(()=>{

  if(book){const grammarWay={
name:"grammarway",
part:"1",
author:"Jenny Dooley",
}
resolve(grammarWay);
}else{

const err=new Error("I'm sorry bro");
reject(err);

}

},3000)


});

bookShop

.then(msg=>console.log(msg))
.catch(error=>console.log(error));

































///////////////////////String/////////////////////
////replace///
////replaceAll///

/////////at///////
String.prototype.at2=function(index){
    if(index<0){
        index=this.length+index 
    }
    return this[index]

}
////////charAt/////
String.prototype.charAt2=function(index){
    if(index>=this.length || index<0){
        return " "
    }
    return this[index]
}
///////concat///////////
String.prototype.concat2=function(){
    let res=this 
    for(let i=0;i<arguments.length;i++){
        res+=arguments[i]
    }
    return res
}
let str="hello"
console.log(str.at2(-3))
let res=str.concat2("world")
////////endsWith//////
String.prototype.endsWith2=function(sym,pos){
    if(pos){
        pos=this.length 
    }
    if(this[pos-1]==sym){
        return true 
    }
    return false 
}
let a="hello world"
console.log(a.endsWith2("world"))
///////includes/////
String.prototype.includes2=function(sym,pos){
    if(pos){
        for(let i=pos;i<this.length;i++){
            if(this[i]==sym){
                return true 
            }
        }
        return false
    }
    for(let i=0;i<this.length;i++){
        if(this[i]==sym){
            return true 
        }
    }
    return false


}
//////////indexOf///////
String.prototype.indexOf2=function(sym,pos){
    if(pos){
        if(pos>this.length){
            return -1
        }
        if(pos<0){
            pos=0
        }
        for(let i=0;i<this.length;i++){
            if(this[i]==sym){
                if (i<pos){
                    return -1
                }
                return i
            }
        }
    }

}

//////////lastIndexOf////////
String.prototype.lastIndexOf2=function(sym,pos){
    if(pos<0){
        pos=0

    }
    for(let i=this.length-1;i>=0;i--){
        if(this[i]==sym){
            return i 
        }
    }
}

//////localecompare///
String.prototype.localeCompare1 = function (str) {
    if (this < str){
         return -1
    }
    if (this > str){
         return 1
    }
    return 0
}

//////match////
String.prototype.match1=function(regexpr){
    if (!(regexpr instanceof RegExp)) {
        regexpr = new RegExp(regexpr)
    }
    return RegExp.prototype[Symbol.match].call(regexpr, this)
}

/////matchall/////
String.prototype.matchAll1 = function (regexpr) {
    if (!(regexpr instanceof RegExp) ) {
        throw new TypeError("error");
    }
}///kisat

/////padend////
String.prototype.padEnd1 = function (targetLength, padString = " ") {
    let str=this 
    while (str.length < targetLength) {
        str += padString
    }
    return str
}

/////padstart////
String.prototype.padStart1= function (targetLength, padString = " ") {
    let str=this
    while(str.length<targetLength){
        str=padString+str
    }
    return str
}

////repeat////
String.prototype.repeat1=function(count){

    if(count<0){
        RangeError("error")
    }
    if(count==0){
        return " "
    }
    let str=""
    for(let i=0;i<count;i++){
        str+=this 
    }
    return str 

}


/////slice////
String.prototype.slice1=function(start,end){
    let str=this
    if(start>=str.length || end<=start){
        return ""
    }
    if(start<0){
        start=start+str.length
    }
    return str.substring(start,end)
    
    
}

////split/////
String.prototype.split2=function(element){
    const result=[]
    let start=0
    for(let i=0;i<this.length;++i){
        if(this[i]==element[0]){
            let temp=this.slice(i,i+element.length) 
            if(temp==element){ 
                result.push(this.slice(start,i))
                start=i+element.length
                i=i+element.length 
            }
        
        }
    }
    result.push(this.slice(start))
    return result
        
 }



////lowercase////
String.prototype.toLowerCase1=function(){
    let str=""
    for(let i=0;i<this.length;i++){
        let temp=this.charCodeAt(i)
        if(temp>="65" && temp<="90"){
           str+=String.fromCharCode(temp+32)
        }
        else{
            str+=String.fromCharCode(temp)
        }
    }

    return str 
}

////uppercase///
String.prototype.toUpperCase1=function(){
    let str=""
    for(let i=0;i<this.length;i++){
        let temp=this.charCodeAt(i)
        if(temp>="97" && temp<="122"){
           str+=String.fromCharCode(temp-32)
        }
        else{
            str+=String.fromCharCode(temp)
        }
    }

    return str 


}

///trim///
String.prototype.trim1=function(){
    let str=this 
    let first=0
    let last=str.length-1
    while(str[first]==" " ){
        first++

    }
    while(str[last]==" " ){
        last--

    }
    return str.slice(first,last+1)
}

////rimend//
String.prototype.trimEnd1=function(){
    let str=this 
    let last=str.length-1
    while(str[last]==" " ){
        last--

    }
    return str.slice(0,last+1)
}
/////trimstart////
String.prototype.trimStart1=function(){
    let str=this 
    let first=0
    while(str[first]==" " ){
        first++

    }
    return str.slice(first,str.length-1)
}


/////tostring///
String.prototype.toString1 = function () {
    return this.valueOf();
}

/////startswith///
String.prototype.startsWith1 = function (search, position = 0) {
    if (position >= this.length) {
        return false
    }
    return this.indexOf(search, position) === position
}



  /////////////////////Array////////////////////////////

////copyWithin//////
/////entries////
////keys////

//////////at//////////
Array.prototype.at2=function(index){
    if(index<this.length || index>=this.length){
        return undefined
    }
    return this[index]
}

/////////concat///////
Array.prototype.concat2=function(){
    let  arr=[]
    for(let i=0;i<this.length;i++){
        arr.push(this[i])
    }
    for(let i=0;i<arguments.length;i++){
        if(Array.isArray(arguments[i])){
            for(let j=0;j<arguments[i].length;i++){
                arr.push(arguments[i][j])
            }
        }
        else{
            arr.push(argumets[i])
        }
    }
    return arr
}

/////flatmap///
Array.prototype.flatMap1=function(cb){
    let res = []
    for (let i = 0; i < this.length; i++) {
      let result = callback(this[i], i, this)
      if (Array.isArray(result)) {
        res.push(...result)
      } else {
        res.push(result)
      }
    }
    return res 
}


////every//////
Array.prototype.every1=function(cb){
    if(typeof cb!="function"){
        return
    }
    for(let i=0;i<this.length;i++){
        if(!cb(this[i])){
            return false
        }
    }
    return true

}


////////fill/////////
Array.prototype.fill1=function(value,start=0,end=this.length){
    if(start<0 || end<0){
        start+=this.length
        end+=this.length
    }
    if(end<=start){
        return this 
    }
    if(start>=this.length){
        return this 
    }
    if(start && end){
        for(let i=start;i<end;i++){
            this[i]=value
        }
    }
    return this
}

//////filter//////
Array.prototype.filter2=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    let arr=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i)){
            arr[i]=this[i]
        }
    }
    return arr
}

///////find//////
Array.prototype.find1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i)){
            return this[i]
        }
    }
    return undefined

}


///////findindex/////
Array.prototype.findIndex1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i)){
            return i
        }
    }
    return -1

}

////////findlast///////
Array.prototype.find1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    for(let i=this.length-1;i>=0;i--){
        if(cb(this[i],i)){
            return this[i]
        }
    }
    return undefined

}
//////findLastIndex////
Array.prototype.find1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    for(let i=this.length-1;i>=0;i--){
        if(cb(this[i],i)){
            return i 
        }
    }
    return -1

}

/////forEach/////
Array.prototype.forEach1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    for(let i=0;i<this.length;i++){
        cb(this[i],i)
    }

}
////////flat/////
Array.prototype.flat1=function(){
    let result=[]
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...item)
            
        }
        else{
            result.push(item)
        }
        return result
    }
}

/////includes//////
Array.prototype.includes1=function(elm,index=0){
    if(index>this.length){
        return false 
    }
    if(index<=0){
        index=index+this.length 


    }
    for(let i=index;i<this.length;i++){
        if(this[i]==elm || (Number.isNaN(this[i]) && Number.isNaN(elm))){
            return true
        }
    }
    return  false

}

/////indexof//////
Array.prototype.indexOf1=function(elm,index=0){
    if(index>this.length){
        return false 
    }
    if(index<=0){
        index=index+this.length 
    }
    for(let i=index;i<this.length;i++){
        if(this[i]==elm ){
            return true
        }
    }
    return  false

}

//////join///////
Array.prototype.join1=function(sep){
    if (this.length==0){
        return " "
    }
    let arr=""
    for(let i=0;i<this.length;i++){
        arr+=sep
        arr+=this[i]

    }
    return arr 
}

/////lastindexof/////
Array.prototype.lastIndexOf1=function(elm,index){
    if(index<0){
        index=index+this.length 
    }
    if(index>=this.length){
        return -1
    }
    for(let i=0;i<this.length;i++){
        if(elm==this[i]){
            return i
        }
    }
    return -1
}

///map////
Array.prototype.map1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    let arr=[]
    for(let i=0;i<this.length;i++){
        arr[i]=cb(this[i],i)
    }
    return arr
}

/////pop//////
Array.prototype.pop1=function(){
    if(this.length==0){
        return undefined 
    }
    let last=this[this.length-1]
    this.length=this.length-1
    return last
}

///push////
Array.prototype.push1=function(...args){
    for(let i=0;i<this.length;i++){
        this[this.length+i]=args[i]
        this.length+=1
    }
    return this.length 
}

/////reduce/////
Array.prototype.reduce1=function(cb, init){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    let acc=init
    let index=0

    
    if(!init){
         acc=this[0]
         index=1
        
    }
    for(let i=index;i<this.length;i++){
        acc+=cb(acc,this[i],i)
        
    }
    return acc
}

/////reverse///
Array.prototype.reverse1=function(){
    let start=0
    let end=this.length-1
    while(start<end){
        let temp=this[start]
        this[start]=this[end]
        this[end]=temp
        start++
        end--
    }
    return this
}

/////shift/////
Array.prototype.shift1=function(){
    if(this.length==0){
        return undefined
    }
    let removed=this[0]
    for(let i=0;i<this.length;i++){
        this[i]=this[i+1]
    }
    this.length-=1
    return removed 
}

//////slice/////
Array.prototype.slice1=function(start=0,end=this.length-1){
    if(start<0){
        start+=this.length
    }
    if(start>=this.length || start>end){
        return []
    }
    if(end<0){
        end+=this.length 
    }
    let arr=[]
    for(let i=start;i<end;i++){
        arr[i]=this[i]

    }
}

////some////
Array.prototype.some1=function(cb){
    if(typeof cb!="function"){
        throw new Error("error")
    }
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i)){
            return true 
        }
    }
    return false 
}

/////sort////
Array.prototype.sort1=function(fn){
    if(typeof fn!="function"){
     fn=function(a,b){
        if(a>b){
            return 1
        }
        else if(a<b){
            return -1
        }
        return 0
    }
}
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length-1-i;j++)
        if(fn(this[j],this[j+1])>0){
            let temp=this[j]
            this[j]=this[j+1]
            this[j+1]=temp 
        }
        else{

        }
    }
    return this 

}


/////splice/////
Array.prototype.splice1=function (start,count,...args){
    if(start<0){
        start+=this.length 
    }
    let arr=this.slice(start,start+count)
    for(let i=start+count;i<this.length;i++){
        this[i-count]=this[i]
    }
    this.length-=count 
    for(let i=this.length-1;i>=start;i--){
        this[i+args.length]=this[i]
    }
    for(let i=0;i<args.length;i++){
        this[i+start]=args[i]
    }

    return arr
}


///////toreversed/////
Array.prototype.toReversed1=function(){
    let res=[...this]
    
    return res.reverse()
}


/////tosorted/////
Array.prototype.toSorted1=function(fn){
    let arr=[...this]
    return arr.sort(fn)

}

////tospliced////
Array.prototype.toSpliced1=function(start,count,...args){
    let arr=[...this]
    return arr.splice(start,count,...args)
}



/////tostring////
Array.prototype.toString1=function(){
    return this.join(',')
}

//////unshift/////
Array.prototype.unshift1=function(...args){
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + args.length] = this[i]
    }
    for(let i=0;i<args.length;i++){
        this[i]=args[i]
    }
    return this.length
}
 
/////with////
Array.prototype.with1=function(index,val){
    if(index<0){
        index+=this.length 
    }
    if(index>=this.length){
        throw new RangeError("error")
    }
    let arr=[...this]
    arr[index]=val
    return arr
}

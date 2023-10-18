// function percentage(real,check){
//     if(real == check){
//         return 100
//     }
//     let percentageList =[]
//     for(let i in Math.max(check,real)+''){
//          real =  str(real);check = str(check)
//         percentageList.push(check[i] == real[i])
//         }
//     let calc = count(percentageList,true)
//     if(calc == percentageList.length-1){
//         return 100
//     }
//     let v = takelent((calc/len(percentageList)),4)
//     if(str(v*100).replaceAll(' ','') == 'NaN'){
//         //throw new Error(calc/len(percentageList))
//     }
//     return v*100
// }
// let x = [] 
// while(x.length <500){
//     let v = ''
//     while(v.length < 15){
//         v +=1/(Math.sin(Math.abs((Math.random()**(Math.random()/Math.random())*Math.random()**(Math.random()/Math.random()))-Math.random()**(Math.random()/Math.random())))**5)
//     }
//     x.push(v)
// }
// let p=0
// for(let test of x){
//    p +=(percentage(eval(priority.reduceFraction(test)),test))
// }
// let f = x.length*100
// print(1+((takelent(p/f,3))*100))
// /*
//  k/(v)

//  const major = rcount(disslove,'/')
//             for(let fractbytes of major){
//                 let [num,deno] = [Restructure(getFracSide(disslove,fractbytes,'bw')),Restructure(getFracSide(disslove,fractbytes,'fw'))]
//                 disslove = wrapFract(num,deno)
//                 if((count(disslove,'/')>1)){
//                     disslove =  Restructure(disslove)
//                 }
//                 //throw disslove
//                 restruct.push(new Fraction('').destruct(disslove))
//             }
//             unction getFracSide(expr,index,side = 'bw'){
//         let copy = '',reject = false
//         while(side=='bw'?index!==-1:index<expr.length){
//             copy+=expr[index]
//             if(copy == '/'){copy =''}
//             if(reject||(isBalanced(copy)&&'-+'.includes(expr[index+(side=='bw'?-1:+1)])&&expr!='^')){
//                 if(side!='bw'){
//                     return reverse(copy)
//                 }
               
//                 if('(-+'.includes(expr[index])&&!'-+'.includes(expr[index-1])){
//                     return reverse(copy)}
//                 reject = true
//              }
//              if(side=='bw'&&!isBalanced(copy)){

//              }
//             side=='bw'?index--:index++;
//         }
//         throw [index]
//         return side=='bw'?reverse(copy):copy
//     }
// function getvars(num,deno = false,check = false){
//             let abs = true
//             print(num,deno)
//             if(deno&&((priority.toPureState(num)/priority.toPureState(deno))+'').includes('.')){
//                 abs = false;
//             }
//             num = Object.keys(new Struct(Object.keys(new Expr(num).struct)[0].split(','),{strict:true}).struct)
//             if(deno){
//                 if(check){
//                     deno = getvars(deno).map((element)=>num.some((elements)=>elements==element)).some((_element)=>_element==true)
//                     return deno&&abs
//                 }
//                 return [num,getvars(deno)]
//             }
//             return num
//         } 
//         let  [Numvars,Denovars] = [Refrex(num), Refrex(deno)];let reminder = Denovars;let Quoatient = []
//         let index  = 0,count =-1
//         while(Numvars.length){
//             print('ced',count);count++
//             let rage = 0
//             let _deep = Numvars[0]
//             while(!getvars(_deep,Denovars[index],true)){
//                 //let assume_deep = Numvars[0]
//                 index++
//                 if(index==Denovars.length){
//                    break
//                 }

//             }
//             let div_ = Div(wrapFract(_deep,Denovars[index]))
//             print('div....1..',div_)
//             if(div_.includes('/')){
//                 div_ =  this.destruct(div_)
//             }
//             if(count == 1.2){
//               throw   [div_,Numvars,Quoatient,wrapFract(_deep,Denovars[index])]
//             }
//             print(div_,'div.....Numvars')
//             Numvars = RIssex(new Expr(`-${div_}(${reminder.join('')})`).Simp().add(Numvars.join('')).OrderExpr().format())
//             //throw new Error(print('numvars',Numvars))
//             Quoatient.push(div_)
//             if(count ==0){
//              return [div_,Numvars,Quoatient,Denovars[index]]
//             }
//         }
//         return Quoatient

//     }
//     export function pairedElements(list_1,list_2,req){
//     //throw [lists,list2]
//     let second = false
//     function getRange(list,list2 ,shortProps){
//         print('doning,',list,list2)
//         if(shortProps.command){
//             if(IsNumeric(shortProps.command)||(shortProps.command[0]=='{'&&last(shortProps.command)=='}',second =true)){
//                 if(second&&shortProps.function){
//                     return shortProps.function(list,list2)
//                 }
//                 else{
//                     if(shortProps.defaultOperation){
//                         let checkType = shortProps.defaultOperation(shortProps.command,list2)
//                         if(checkType instanceof Boolean){
//                             return checkType
//                         }
//                         //throw new check 
//                         print(list,list2,checkType,shortProps.defaultOperation,fallback_operator(shortProps.command?shortProps.command:list,list2,checkType))
//                         return fallback_operator(shortProps.command?shortProps.command:list,list2,checkType)
//                         if(true){
//                             print('testing',shortProps.command?shortProps.command:list,list2,checkType,fallback_operator(shortProps.command?shortProps.command:list,list2,checkType))
//                         }
//                     }
//                     print(list2,shortProps.command,'acrio')
//                     return list2==shortProps.command
//                 }
//             }
//             let cased = fallback_operator(list,list2,shortProps.command)
//             if(cased == '-uncased-'){
//                 throw TypeError(`Range must Number Type or oprator command  !<,!=,!>,>=&&!<=`)
//             }
//             else{
//                return cased
//             }
//         }
//        return false
//     }

//     let pairedList = [];index = 0;let justpassed = false
//     let [lists, list2] = render(Struct ,{strict:true},'struct',Copy(list_1)[0].split(','),Copy(list_2)[0].split(','))
//     delete lists['#'],delete list2['#']
//     //throw [View([lists,list2,list_1,list_2])]
//     //flitering by req.accuracy
//     if(req.accuracy.single){
//         if(equals(list(lists),list(list2))&&equals(Object.keys(lists),Object.keys(list2))){
//             //throw lists
//             if(req.accuracy.range.command){
//                 let pheels = []
//                 for(let read in lists){
//                     pheels.push(getRange(lists[read],list2[read],req.accuracy.range))
//                 }
//                 if(req.accuracy.predict)
//                     return pheels
//                 if(req.accuracy.range.every)
//                     return pheels.every(e=>e==true)
//                 return pheels.some(e=>e==true)
//             }
//             if(req.accuracy.predict)
//                 return [true]
//             return true
//         }
//         print(equals(list(lists),list(list2)),equals(Object.keys(lists),Object.keys(list2)))
//         if(req.accuracy.predict)
//             return [false]
//         return false
//     }
//     else if(req.accuracy.onlyRange){
//         let pheels = []
//         for(let read in list2){
//             pheels.push(getRange(lists[read],list2[read],req.accuracy.range))
//         }
//         if(req.accuracy.predict)
//             return pheels
//         if(req.accuracy.range.every)
//             return pheels.every(e=>e==true)
//         return pheels.some(e=>e==true)
//     }
//     //throw guessKey
//     for(let guessKey in list2){
//         if(!lists[guessKey]){
//             if(req.accuracy.range.selectAllElement){
//                 if(req.accuracy.predict)
//                     return [false]
//                 return false
//             }
//             pairedList.push(false);continue
//         }
//         else{
//             if(req.accuracy.range.command){
//                 var pheels = []
//                 if(req.accuracy.range.command)
//                     pairedList.push(getRange(lists[guessKey],list2[guessKey],req.accuracy.range))
//                 else{print('loggggg....',list2[guessKey],guessKey,lists,list2)
//                     pairedList.push(false)
//                 }
//                 //print(lists[read],list2[read])
//                 //print(pheels,'destiny',(req.accuracy.range.every)?pheels.every(e=>e==true):pheels.some(e=>e==true))
//                 //pairedList.push((req.accuracy.range.every)?pheels.every(e=>e==true):pheels.some(e=>e==true))
//             }
//             else{
//                //throw lists[guessKey],list_1
//                 pairedList.push(list_1[guessKey]==list_2[guessKey])
//             }
//         }
//     }
//     print(pairedList,lists,list2)
//     print(pairedList,'fdestiney',pheels)
//     if(req.accuracy.predict)
//         return pairedList
//     if(req.accuracy.range.every)
//         return pairedList.every(selectAllElement=>selectAllElement==true)
//     return pairedList.some(e=>e==true)
// }   
// export function LikeTerms(expr,_termsby={},predicts=false){
//     let predictVar = []
//     let defalutop = (left,right,operator = '==')=>{
//         return fallback_operator(left,right,operator)
//     }
//     const DefalutTerms = {
//         fliterby:'',
//         accuracy:{
//             predict:predicts,
//             strict:true,
//             single:false,
//             onlyRange:false,
//             auto:{Coeff:()=>{return ''}},
//             range:{
//                 command:'',every:true,on:'',limits:0,function:None,selectAllElement:true,variableEquality:true,
//                 defaultOperation:defalutop
//             }
//             }
//         }
//     const control = Trackprops(DefalutTerms,_termsby,[Function]);let [pairedStruct,unpairedStruct] = [{},{}]
//     //throw [control.accuracy.range.defaultOperation,'tree']
//     /*LikeTerms rotines:
//     --
//       |
//       |
//       |
//         ----Like Variables&&Orderable Coefficent ---- 
//         ----Power base progression ---- 
//             | Power base is been control by accuracy.onlyRange and accuracy.range
//             |Range is use to control the flows and litms of expression, bu using function to select merit expresion
//             |For example:
//             |   f(x) = 5xy-3xyt^2-15xy-7y
//             |   Assuming we want to get all expression that has y element:
//             |   let septre = LikeTerms('5xy-3xyt^2-15xy-7y',{accuracy:{fliterby:'x'}}})
//             |   this return {'y,1',-7}, beacuse this only element that absolute flitration for this exprssion
//             |   see Manual more on:
//             |     set-function:
//             |     limit-range:
//             |     control expression flow ant etc 
//             |          
//             |and  we can use OnlyRange
//             | accuracy.onlyRange:
//             |                   this is turn off by default, it only recommended to be turn on by user,
//             |                    if they want to select only dependent variables,like example shown above
//             |                    assuming we made a slight modification of the expression:
//             |                    Note:<--that onlyRange will work with range(see Manual),but it will be dominating and leading over any other function before it return it-->
//             |                    where we have:
//             |                         let expr = f(x) = '6xy-2zy-6x^6y-xy
//             |                         in this case where have mutiple xy but we can fliter by:
//             |                             ----defining a range for the expression:
//             |                                  setting accuracy.command to define Operators or in OverloadingOperatorClass(see Manual)
//             |                                   using limit,every,selectAllElement to constraint some unwanted prediction etc(see Manual)
//             | 
//             |         
//             |
//             |
//             |
//             |
//             |
//             |
//             |
//             |
//             |
//             |
//         ----Unserilaize alphaNumeric Power progression----
//         ----
//     *
//         if(control.fliterby){
//             let termsby = new Expr(control.fliterby)
//             expr = new Expr(expr)
//             for(let origin of termsby){
//                 let [key,value] = origin
//                 for(let orderable of expr){
//                     if(predicts){
//                         if(control.accuracy.auto.Coeff() != '')
//                             predictVar.push(control.accuracy.auto.Coeff(orderable[1]))
//                         else
//                            predictVar =  predictVar.concat(pairedElements(key,orderable[0],control))
//                     }
//                     if(control.accuracy.auto.Coeff() != ''){
//                         if(control.accuracy.auto.Coeff(orderable[1])){
//                             if(orderable[1]==-7)
//                             throw print('docl',[control.accuracy.auto.Coeff(orderable[1]),orderable[0]])
//                             if(pairedElements(key,orderable[0],control))
//                                 pairedStruct[orderable[0]] = orderable[1]
//                             else
//                                 unpairedStruct[orderable[0]] = orderable[1]
//                         }
//                         else
//                             unpairedStruct[orderable[0]] = orderable[1]
//                     }
//                     else{
//                         if(pairedElements(key,orderable[0],control))
//                             pairedStruct[orderable[0]] = orderable[1]
//                         else
//                             unpairedStruct[orderable[0]] = orderable[1]
//                     } 
//                 }
//             }
//             expr.struct = pairedStruct;let paired = new Expr('');paired.struct = unpairedStruct
//             if(predicts)
//                 return predictVar
//             return [expr.OrderExpr().format(),'strript',paired.OrderExpr().format()]  
//         }
//     }
// */




// export function fallback_operators(x,operation){
//     simplify = (expr)=>{
//         let propbs = new Expr(expr).Simp();let probsVars = vars(expr);let values = []
//         for(let unknow_vars of probsVars){
//             values[unknow_vars] = last(str(Math.random(4)))
//         }
//         return calc(propbs,values)
//     }
//     return fallback_operator(simplify(x),simplify(y),operationS)
// }

// }
// let r = new Factorize((purify(scroll.join('+')))).SimpleFt(true)
// print('rororor0000',r)
//     if(r[0]){
//         for(let suck in scroll){
//         let ch = new Fraction('').div(scroll[suck],r[0],true)
//      //   throw suck
//             if(ch[0]){
//                 splits[suck] = ch[1].join()
//             }   
//             else throw index_[suck]                       
//         }
//         for(let replace_ in index_){
//             let simp = index_[replace_]
//             if(!Serializable(replace_)){
//                 index_[replace_] = rmvspec(splits[replace_]) + simp.replace(simp.split('(',1)[0],'')
//             }
//             else{
//                 index_[replace_] = simp
//             }
//         }
//     }
//     else{
//         print(purify(index_.join('+')))
//         return purify(index_.join('+'))
//     }

//    return FactorBrack(outer)






//    let factor_ = (scroll,index_)=>{
//     let r = new Factorize((purify(scroll.join('+')))).SimpleFt(true)
//     //print('rororor0000',r)
//         if(r[0]){
//             for(let suck in scroll){
//                 let ch = new Fraction('').div(scroll[suck],r[0],true)
//             //   throw suck
//                 if(ch[0]){
//                     splits[suck] = ch[1].join()
//                 }   
//                 else throw index_[suck]                       
//             }
//             for(let replace_ in index_){
//                 let simp = index_[replace_]
//                 if(!Serializable(replace_)){
//                     index_[replace_] = rmvspec(splits[replace_]) + simp.replace(simp.split('(',1)[0],'')
//                 }
//                 else{
//                     index_[replace_] = simp
//                 }
//             }
//         }
//         else{
//             print(purify(index_.join('+')))
//             return purify(index_.join('+'))
//         }
// }
// let review = (expr)=>{
// if(expr instanceof Array){
//    return expr[0]
// }
// let outside,y = Refrex(expr)
// print(y[0].includes('('),expr,y,'hh')
// if(!expr.startsWith('(')&&y[0].includes('(')){

//     outside = y[0].split('(')[0]
//     let vars_= FactorBrack(expr.replace(outside,''));
//     var index_ = RIssex(vars_)
//     let scroll = []
//     for(let check in index_){
//         if(!Serializable(index_[check])){ 
//             let tresh = FactorBrack(index_[check]) 
//             index_[check] = tresh
//             scroll.push(tresh.split('(')[0]?tresh.split('(')[0]:"1");continue
//         }
//         scroll.push(index_[check])
//     print('hard',scroll)
// let r = new Factorize((purify(scroll.join('+')))).SimpleFt(true)
// if(r[0])
//     return factor_(scroll,index_)
// else{
//    let  x = purify(index_.join('+')).split('(')
//     if(x[0]&&x.length> 1){
//         return outside + (purify(index_.join('+')))
//     }
//     return (outside??'')+engulf(purify(index_.join('+')))
// }}
// if(expr.startsWith('(')){
//     let complex = [],clone = []
//     let _clone = getScopeContext(expr)
//     for(let series of _clone){
//         clone.push(curl(series))  }
//     return clone
// }
// return outside??expr
// }
// function Thread(x){
//     if(typeof x == 'string'){
//         return x
//     }
//     print(x)
//     let simple = [],threadObj = {}
//     for(let complex of x){
//         if(Serializable(complex)){
//             simple.push(complex)
//         }
//         else{
//             if(complex.startsWith('(')){
//                 let _nseassion = RIssex(curl(complex))
//                 let peak_pick = [];let cross = false
//                 for(let random in _nseassion){
//                     if(!Serializable(_nseassion[random])){ 
//                         let save_peak_pick = FactorBrack(_nseassion[random])
//                         _nseassion[random] = save_peak_pick
//                         if(save_peak_pick.startsWith('(')&&!cross){
//                             peak_pick.push(save_peak_pick.split('(')[0])   
//                         }
//                     }
//                     let pickFactor = factorize(purify(peak_pick.join('')))
//                     let final  = ''
//                     for(let remit of _nseassion){
//                         let rgt = remit.split('(')[0]
//                         final = remit.replaceAll(rgt,div(rgt,pickFactor))
//                     }
//                     return [final,undefined]                   
//                 }
//             }
//             else{
//                 let outer = complex.split('(')
//                 let sign  = last(outer[0])
//                 let splits = Refrex(expr)
//                 if(sign.includes(sign)){
//                     outer = outer = complex.split(last(outer)+'(')
//                 }
//                 throw outer
//                 for(let index in outer){
//                     var index_ = RIssex(outer[index])
//                     //throw index_
//                     let scroll = []
//                     for(let check in index_){
//                         if(!Serializable(index_[check])){ 
//                             let tresh = FactorBrack(index_[check]) 
//                             print('treshhhhhhh',tresh)
//                             index_[check] = tresh
//                             let rand = str(Date.now())
//                             do{
//                             var substitue = priority.special[rand[takelent(Math.random(),rand.length)[5]]]
//                             }
//                                 while(scroll.join('').includes(substitue))
                            
//                             scroll.push((tresh.split('(')[0]?tresh.split('(')[0]:"1") + substitue);continue
//                         }
//                         scroll.push(index_[check])
//                         throw scroll
//                         let getData = factor_(scroll, index_)
//                         if(getData){
//                             return getData
//                         }
//                 }
//             }
//         }
//     }
//     }
//     if(simple.length)
//         return reduceScope(engulf(factorize(simple[0])),false,true)
//     else{
//         return 
//     }
// }        
// return review(expr)
// }''



// do{var div_ = this.div(x,_x,true)
//     print(x)
//     if(div_== 1){
//         break
//     }
//     if(!div_[1)break
//     highest.push(_x);x = div_[1].join('+')
// } while(div_ instanceof Array? div_[0] == true : div_ == true&&x)
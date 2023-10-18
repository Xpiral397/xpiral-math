import { ImproperExnapasionDetected, ImprorperDestructuringCompilationTimeError, NotImplementedError, ParenthesisMismatchError, TrackPropsError } from '../controller/exceptions.js';
import { cb,degree,div,eq,expo,Length, ms,notation,None,ob,ps,pw,spec,Symbols,tm,null_ } from './symbols.js'
import { View, Struct, Fraction, simplifyFraction, Factorize, Expr}  from '../tools/index.js'
import {Implement} from '../fundermentals/primary.js'
import { json } from 'node:stream/consumers';
import { ExprFraction } from '../tools/expression/expr.js';
 

let priority = new Implement()

function aRange(v, range, list = null) {
    let i = 1;
    let value = ""
    while (!(i > +range)) {
        value += (v + ((i == range) ? "" : list ? '!' : '')); i++;
    }
    return !list ? value : value.split('!');
}


function index(alpha) {
    return priority.alpha.indexOf(alpha);
}


function max(x,d = false) {
    let highest;
    let lowest = []; index = 0;
    for (let bi in x) {
        if (!highest) {
            highest = x[bi]
        }
        highest = d?d(highest,x[bi]):highest > x[bi] ? highest : x[bi]
    }
    return highest;
}


function simpleKey(x,real=true){
    let collect = [],n = 0;
    if(real){
        x = x.split(',')
    }
    while(n<x.length-1){
        collect.push(x[n]);n+=2
    }
    return collect
}



function For(x,excute){
    if(x instanceof Array) {
        for(let index in x){
            x[index] = excute(x[index],index);
        }
    }
    return x
}


function exportExprKey(list,join,lent = false){
    let on  = false
    for(let risk of list){
        if(on){
            list[list.indexOf(risk)] = reduceScope(risk); 
        }
       on=!on
    }
    const key = {};key[list] = '1'
    let fx = new Expr('');fx['struct'] = key
    return fx.format()
}



function wrapFract(num,deno){
    return `${cull(num)}/${cull(deno)}`
}




function limit(expr,limts){
    let searchVar = '',realVar=''
    for(let search of expr){
        realVar += search;searchVar += expr
        if(rcount(expr,searchVar)>2)[]
    }
}




function min(...x) {
    x = x.length==1?x[0]:x
    let lowest;
    for (let value of x) {
        if (!lowest){
            lowest = value
        }
        lowest = lowest < value ? lowest : value
    }
    return lowest;
}


function _keys(clear){
    let x = toObject(clear),ordered = {}
    //throw x
    let ascertain = order(list(x,true))
    for(let certainity of ascertain){
        ordered[certainity] = x[certainity]
    }
    throw x
    //print(tolist(ordered))
    return tolist(ordered)
}




function order(nx,accending = false,step =false) {
    let x = []
    if(step){
        for(let v of nx){
            if(IsNumeric(v)){
                x.push(+v)}
            else
                x.push(v)
        }
    }
    else{
        x = nx
    }
    let newlist = []; index = 0; var copy = [...x];let step_ = []
    while (!(x.length == newlist.length)) {
        newlist.push(max(copy)); step_.push(copy.indexOf(max(copy))); delete copy[copy.indexOf(max(copy))]
    }
    if (step) {
        return accending ? [newlist.reverse(),step_.reverse()] :[newlist,step_];
    }
    return accending ? newlist.reverse() : newlist;
}





function  any(x) {
        for (let i in x) {
            if (x[i] == false) {
                return false;
            }
        }
        return true;
}



function calc(expr,targets,strict = false){
     expr = new Expr(expr).Simp();
    //  throw expr+""
     let newExpr = []
    if(!strict){
        for(let target in targets){
            targets[target] = new Expr(targets[target]).Simp().format()
            expr = expr.replaceAll(target,engulf(targets[target]))
        }
     // throw expr+""
    //  print('alal',new Expr(expr).Simp()+'',expr)
     return new Expr(expr)+''
    }
    for(let target in targets){
            targets[target] = new Expr(targets[target]).Simp().format()
        }
    for(let _expr_ of expr){
        let key = new Struct(_expr_[0].split(','),{strict:true}).struct,structKey = new Expr('1')
        for(let _chech_target in key){
            if(_chech_target == '#')continue
            if(checkAlpha(key[_chech_target])){
                key[_chech_target] = cull(calc(key[_chech_target],targets))
            }
            if(targets[_chech_target]){
                let x = engulf(engulf(targets[_chech_target]) + '^' + engulf(key[_chech_target]))
                structKey.mul(x.replaceAll(' ','')).Simp()
                // print(structKey.struct,x,'lolp')
            }
            else{
                structKey.mul(_chech_target + '^' + engulf(key[_chech_target])).Simp()
            }
        }

        ///throw keymap((values=>{return new Expr(values).Simp().format()})
        if(_expr_[1]){
            if(structKey.format().replaceAll(' ',''))
                structKey.mul(str(_expr_[1]))
            else newExpr.push(str(_expr_[1]))
        }
        ;newExpr.push(structKey.format())
    }
   
    return new Expr(purify(newExpr.join('+'))).format()
}


function engulf(expr,num = 1) {
    return ('('.repeat(num) + expr + ')'.repeat(num)).replaceAll('()','');
}

function ExprssionSpliter(innerExpr, rendinering = false) {
  
    if (rendinering && innerExpr.endsWith('^')) {
        innerExpr = reverse(innerExpr); let on = false; let brack = ''; let onalpha = false;
        for (let read of innerExpr) {
            if (read == ')') {
                on = true
            }
            if (on) {
                brack += read
                if (isBalanced(brack)) {
                    return reverse(brack) + '^'
                }; continue
            }
            //print(read,'complete')
            if (IsAlpha(read)) {
                return read + '^'
            }
        }
    }
    else if(rendinering){return innerExpr}
    else {
        let x = []; let y = true; let result = ''
        if(innerExpr.includes('(')){
            let x_ = priority.toPureState(innerExpr.replaceAll(' ',''),'(')
            let y_ = priority.toNumState(innerExpr.replaceAll(' ',''),true,'(')
            if(x_&&!'+-'.includes(x_)){
                //throw new Error([x_,innerExpr])
                return x_
            }
            if(y_.length>1){
                return y_[0]+y_[1]
            }
            return innerExpr
        }
        if (priority.toPureState(innerExpr) && !'-+'.includes(priority.toPureState(innerExpr))) {
            return priority.toPureState(innerExpr)
        }
        for (let r of innerExpr) {
            result += r;
            if (IsAlpha(r)) {
               // print(r,'golbe')
                //throw new TypeError(r)
                if (result.includes('+') || result.includes('^') || result.includes('(') || result.includes(')') || result.includes('-')) {
                    return engulf(result);
                }
                return result
            }
        }
        return result
    }
}


function replace(strbj,nwobj,indx,x){
    if(x && strbj.length < indx){
        return strbj
    }
    return x = list(strbj),x[indx] = nwobj, x.join('')
}

function exportFraction(x,y){

    x = priority.reduceFraction(x);
    y = priority.reduceFraction(y);

    let Operation = priority.getSign(y,'+-/*')
    y = y.replace(Operation,'')
    
    switch(Operation){
        case ps:
            return new ExprFraction(x).add(y).format()
        case ms:
            return new ExprFraction(x).sub(y).format()
        case div:
            return new ExprFraction(x).div(y).format()
        case tm:
            return new ExprFraction(x).mul(y).format()
        default:
            throw new ImprorperDestructuringCompilationTimeError()
    }
    
    
}
function exports(value, value_2) {
   
    value = value ? value : '1';value_2 = value_2?value_2:'1'
    value = pos(value);value_2 = pos(value_2)
     if(value.includes('.')){
       return exportFraction(value,value_2) 
    }
    if (Issex(value,true) || Issex(value_2,true)) {
        if (value_2.startsWith('-')||value_2.startsWith('+')) {
            return engulf(value + value_2)
        }
        return engulf(value + "+" + value_2)
    }
    try {
        value_2 = value_2.replace(' ', '')
        if('*'.includes(value_2)){value_2 = value_2.replace('*','*1')} else if('*-'.includes(value_2)){value_2 = value_2.replace('*-','*-1')} else if('*+'.includes(value_2)){value_2 = value_2.replace('*+','*1')} 
        //print(value, value_2, 'yyyyyyyyyyyyyyyyyyyyyyyyyy')

      //  print('nerd',eval(`${value.replace(' ','')}${value_2.replace(' ','').startsWith('*')||value_2.replace(' ','').startsWith('+')?'':'+'}${value_2.replace(' ','')}`))
        let x = eval(`${value.replace(' ', '')}${value_2.replace(' ', '').startsWith('*') || value_2.replace(' ', '').startsWith('+') ? '' : '+'}${value_2.replace(' ', '')}`.replaceAll('+*','*'))
        if (str(x).includes('e')) {
            x = BigInt(x).toString()
        }
        return x
    }
    catch (e) {
         if (value_2.startsWith('-')||value_2.startsWith('+')) {
            return value + value_2
        }
        return value + "+" + value_2
    }
}


function zindex(value) {
    value = flex(value)[0]
    return IsAlpha(value) ? 'alpha' : IsNumeric(value) ? 'numeric' : value
}



function space(expr){
    return purify(expr).replaceAll('-',' - ').replaceAll('+',' + ').replaceAll('- (','-(').replaceAll('+ (','+(').replaceAll('(','( ').replaceAll(')',' )')
}



function IsNeg(x){
    return priority.IsNeg(x)
}



function neg(value, pos) {
    if (pos && !(value instanceof Array)) {
        return ('' + value).replaceAll(' ', '').startsWith('-') ? neg(value) : value
    }
    if (value instanceof Array) {
        value = array.map(element => {
            if (pos) {
                return ('' + element).replaceAll(' ', '').startsWith('-') ? neg(element) : element
            }
            return (element instanceof Number||-value != NaN) ? -element : '-' + element
        }
        )
    }
    return  (value instanceof Number||-value != NaN)?-value:'-'+value
}

function flex(x) {
    return purify(x)
}
function takelent(object,lent){
    object = str(object)
    let season = ''
    for (var key in object){
        season += object[key]
        if(key == lent)return season;
    }
    return season
}
function Serializable(expr, Fract = true) {
    if (Fract && ( !expr||expr.includes('/'))) {
        return false
    }
    //print(expr)
    if(expr.startsWith('(')||expr.startsWith('((')){
       // throw new Error()
        return false
    }
    let vacate = '',onpower = false,avoid='', increase = 0
    
    while (increase < expr.length) {
        if (expr[increase] == '(' && expr[increase - 1] == '^') {
            onpower = true;
        }
        if (onpower) {
            avoid += expr[increase];
            if (isBalanced(avoid)) {
                onpower = false
            }; increase++; continue
        }
    //print('QUADRIZs',expr,expr[increase-1] !='^',expr[increase] == '(')
        if(expr[increase-1] !='^' && expr[increase] == '(' ){
            return false
        }
        increase++;
    }
    return true;
}
function pos(value, leisure ,ensure) {
    value +=' '
    if (value.startsWith("-") || value.startsWith("+")) {
        if (value.length == 1) {
            return value + 1
        }                                                                                                                                 
        return value
    }
    return value
}
function remove(value,...i){
    let ic = [];
    for( let values in value ){
        values = +values
        if(!i.includes(values)){
            ic.push(value[values])
        }
    }
    return ic.join('')
}

function rematch(expression, careful = false) {
    expression= ''+expression
    if (careful&&!expression.includes('+')  && ' '.includes(expression)) {
        return expression = ("+ " + expression)
    }
    return expression.replace('+0','+').replace('+1',"+").replace('-1',"-").replace('-0',"-")
}

/**
 * 
 @deprecated
 */
function compare(value, compares, props = false,x =false) {
    if(x){
       // print('checking................',value,'new',compares)
    }
    if(props){
        value = props(list(value)); compares = props(list(compares));
    }
    value = order(list(value)); compares = order(list(compares));
    return value.toString() == compares.toString()
}

function DeleteIndex(x, index) {
    let v = []; let every_ = []
    for (var inn in x) {
        delete x[inn][x[inn].indexOf(index)]
    }
    for (var every in x) {
        for (var real in x[every]) {
            if (x[every][real]) {
                every_.push(x[every][real])
            }
        }
        v.push(every_); every_ = []
    }
    return v
}
function IntAll(x,split =false) {
        if (typeof(x)  == 'string') {
            x = x.split(split?split:",")
        }
        for (let v in x) {
            x[v] = +x[v]
        }
        return x
}
///operation
function opposite(value) {
    opposite = []
    if (value instanceof Array) {
        return neg(value)
    }
    return neg(value)
}
function all(x) {
    for (let i of x) {
        if (!i) {
            return false;
        }
    }
    return true;
}
function purify(expr, purify_ = false) {
    expr = expr + ''
   
    if (purify_) {
        let x = []; for(let rec of expr+'') {if(rec&&rec!='undefined') {x.push(rec)}}
        expr = x
    }
    expr = expr.replaceAll(' ','').replaceAll("--","+").replaceAll('-+','-').replaceAll('+-','-').replaceAll('++','+').replaceAll('/+','/').replaceAll('(+','(').replaceAll('/ +','/')
    // expr = expr[0] == '+'?expr.slice(1):expr
    return expr
}
function print(...expr) {
    console.log(expr)
}
function list(strings,array=false) {
    let x  =[]
    if(array){
        for(const keys in strings){
            x.push(keys)
    } ; return x}
    for (let pairvalue in strings) {
        x.push(strings[pairvalue])
    }
    return x
}
function contain(task1, task2) {
        if (task1 instanceof value && task1 instanceof value) {
            let u = false;
            priority.Sort(task1,task2).forEach(element => {
                priority.sort(task1,task2).forEach((element_) => {
                    if (element == element_) {
                        u = true;
                    }
                })
            });
            return u;
        }
        let task = priority.Sort(task1, task2);
        let _task2 = priority.sort(task1, task2);
        for (let x in task){
            for (let y in _task2) {
                if (task[x] == _task2[y]) {
                    return true
                }
            }
        }
        return false;
}
function reverse(value, defalut = false) {
    return defalut?Reverse(list(value)):Reverse(list(value)).join('');
}
function SyncExpr(_object, Objects, split = null, retExpr = true, _defalut) {
    let [object,coeff,factor]  = [[],[],false]
    if (_defalut) {
        if (object.includes(')^(')) {
            return true
        }
        return false
    }
    //throw new Error(_object)
    for (let income of _object) {
        if (income.includes(Symbols)) {
           // print('arayayayay',income)
            coeff.push(income.replaceAll(Symbols,''))
            
        }
        else {
            object.push(income);
        }
    }
    object = reverse(object, true); let singleExpr = RIssex(getScopeContext(object.pop())[0]), powersHandlers = []; let head = singleExpr.pop();
  //  print(head,'head',singleExpr)
    for (let syncObjectList of object) {
       // print(syncObjectList,'wufoihfoido',curl(syncObjectList.replace(syncObjectList.startsWith('^')?'^':'','')))
        let [real,complex] = getScope(curl(syncObjectList.replace(syncObjectList.startsWith('^')?'^':'','')),Objects,true)
    powersHandlers.push(real)}
    // print('dip-hole',powersHandlers)
    //mutilplying linear power number with non-variable expression
    let rangeLists = [], attempt = '1';
    //print(powersHandlers,'consreuwuh')
    for (let reconsider of powersHandlers) {
        if (vars(reconsider).length<2) {
           // print('cmole', reconsider, attempt, new Objects('1').mul('+2') + '')
            attempt = new Objects(attempt).mul(reconsider) + ''
        }
        else {
            if (attempt == '1') {
                rangeLists.push(reconsider);continue
            }
            rangeLists.push(attempt, reconsider); attempt = '1'
        }
    }
    if (attempt&&attempt!=1) {
        rangeLists.push(attempt)
    }
    if (factor) {
        throw new NotImplementedError('powersHandlers   Factorizaion Not Implement try attaching a factor debuger in your setting.xpr file')
    }
    //print(rangeLists, 'fff', new Objects(rangeLists).Simp().format())
    // print(rangeLists,'ffff',head)
    let _render = new Objects(rangeLists,{toPureStateOnArraysObject:false}).Simp().format();
    if (IsNumeric(_render) && str(flex(_render))[0] == '-'){
        _render = priority.toPureState((-flex(_render)).toString())
        return `1/${getScope(head.repeat(_render),Objects)}`;
    }
    if (IsNumeric(_render)) {
        return getScope(engulf(new Expr(coeff).Simp().format())+head.repeat(_render.replaceAll('+','')),Objects);
    }
    // throw new Error([head,new Factorize(new Objects(rangeLists).Simp().format(),Objects).getLocalFactoriztion()])
    return [`${head}${split ?? '^'}(${_render})`, coeff,]
    
}
function str(obj){
    return obj+''
}
function Reverse(list) {
    let i  = list.length-1,script = []
    while (i != -1) {
        script.push(list[i]) , i--;
    }
    return script
}

function render(className,Props,getProps,...values){
    const caps =[]
    for(let renders of values){
        if(Props){
            caps.push(!getProps?new className(renders,Props):new className(renders,Props)[getProps]);continue
        }
        caps.push(className(renders))
    }
    return caps
}
function IsIntable(value) {
        return !priority.contain(value,`${priority.alpha}(-+\%*^)`);
}
function IsAlpha(value) {
    return priority.IsAlpha(value)
}
function IsNumeric(value) {
    return priority.IsNumeric((value+'').replace(' ',''))
}
function Runimp(x,strict){
    //filtering out all Unimportant decorators 
    x = x.replaceAll(' ','')
    let result = '';
    for(let catch_ of x){
        if(IsAlpha(catch_)){break;}
        result += catch_
    }
    if(result.length == 2 && x.replace(result,'')){
       let _x = result.replace('-1','- ').replace('+1','+ ') ;
        let text = _x + x.replace(result,'').replace(' ','');
        return (text.startsWith('+') + text.startsWith('-'))?text.replace('+','+ ').replace('-','- '):text
    }
    let text = x
    //text and x  == text
   // print('switch,',text)
    return '-+'.includes(x)&&strict?"":(text.startsWith('+') + text.startsWith('-'))?text.replace('+','+ ').replace('-','- '):text
}
function flit(x){
    //print(x,'roug')
    let copy = x;x = alent(copy);//x.replace('-','').replace('+','').replace(' ','')  
    if(IsNumeric(copy)){
       // print(copy,'i say')
        return copy
    }
    if(priority.toPureState(copy)&&x){
        while(reduceScope(copy,true)){
           // print(reduceScope(copy,true))
            copy = reduceScope(copy)
        }
        return engulf(copy)
    }
    if(alent(copy)>2){
        return engulf(copy)
    }
    else{
        return copy
    }
}
function curl(expression,check) {
    if(check && reduceScope(expression) == expression)
        return expression
    if (!(expression.startsWith('(')&&expression.endsWith(')'))) {
        return expression
    }
    return ('$' + expression + '$').replace('$(','').replace(')$','')
}
function count(x, y) {
    if(x instanceof  Array){
        let counter = 0
    while (x.includes(y)) {
        delete x[x.indexOf(y)];counter++;
    }
    return counter 
    }
    let counter = 0
    while (x.includes(y)) {
        x = x.replace(y, '');counter++;
    }
    return counter
}
function rcount(x, y) {
    let counter = 0,lcst= []
    while (x.includes(y)) {
        lcst.push(x.indexOf(y)); x = x.replace(y, '');counter++;
    }
    return lcst
}


function getScopeContext(x, vars) {
    let sets = vars ? [vars] : [], race = -1, scan = '';
        while (race < x.length) {
            race++;
            scan += x[race]
            if ((scan.includes('(') && isBalanced(scan))||(isBalanced(scan)&&(scan.startsWith('^(')))) {
               // print('cornnnnect',scan,sets,x)
                if (')(' == scan) {
                    scan = '';continue;
                }
                sets.push(scan);scan=''
            }
    }
   //throw new Error([sets,'7',scan])
    return sets
}
function filter(x) {
    try {
        return purify(x).replace('-(', '-1(').replace('+(', '+1(')
    }
    catch (e) {throw new Error(x)}
} 
function equals(a, b) { 
    if (a == b) {
        return true
    }
    else if (a.length != b.length) {
        return false
    }
    if (a instanceof Array) {
        for (let kind in b) {
            if (typeof b[kind] == typeof a[kind] && (b[kind] != a[kind])) {
                if (a[kind] instanceof Array && b[kind] instanceof Array) {
                    if (!equals(a[kind], b[kind])) {
                        return false
                    }
                }
                else {
                    return false
                }
            }
        }
    }
    return true
}
function flatExpr(x) {
    let newList = []
    for (let split of x) {
        for (let brokenExpr of RIssex(split)) {
            newList.push(brokenExpr)
        }
    }
    //print(x,'agama',newList)
    return newList
}
function getScope(trriger, method, sketech = false) {
    trriger = CompileExpr(filter(trriger)), VerifyExpression(trriger);
    //throw new Error(trriger)
    let [EventTargets, EventTargeter,Eventrriger] = [[], {},[]]; let lavage = false, cast = true;
    if (getScopeContext(trriger).length == 1) {
        lavage = true
    }
    for (let x of RIssex(lavage ? curl(trriger) : trriger)) {
       //throw new Error([x,!Serializable(x), [';;;;;;',lavage ? curl(trriger) : trriger]])
        if (!Serializable(x)) {
            let starter = '', index = 0
            while (x.length > index && !x.startsWith('(')) {
                starter += x[index];
                if (x[index + 1] == ob && x[index] != pw && !(starter.includes('^(') && !isBalanced(starter))) {
                    break;
                }
                index++
            }
            x = x.replace(starter, '')
            if (x.startsWith('(')) {
                //throw x
                if (getScopeContext(x).length == 1) {
                    x = curl(x)
                }
                //  print('june', x, method)
                if (RIssex(x).length == 1) {
                    var [one, trigerrAll] = [false, getScopeContext(x)];
                }
                else {
                    var [one, trigerrAll] = [false, getScopeContext(RIssex(x))];
                }
                let level = new Expr(starter ?? (one = true, '1')); let all = trigerrAll.every(
                    (current) => {
                        if (current.startsWith('(')) {
                            return true
                        }
                        else if(!'-+'.includes(current.replaceAll(' ','')[0])){
                            return true
                        }
                        return false
                    }
                )
                let Merge = [], unknownIndexObject = [], __cache__ = [];let filter = []
                //throw new Error([all,)
                for (unknownIndexObject in trigerrAll) {
                    if (trigerrAll[unknownIndexObject].startsWith('^(')) {
                        // print('recovery',Merge,"__",__cache__)
                        Merge.push(__cache__.pop(), trigerrAll[unknownIndexObject])
                        if (!'-+'.includes(Merge[Merge.length-2])) {
                            for (let coeff of reverse(__cache__, true)) {
                                if ("+-".includes(coeff[0])) {
                                    Merge.push(__cache__.pop()+Symbols); break;
                                }
                                Merge.push(__cache__.pop()+Symbols)
                            }
                        }  
                        // print('recovery2:::',Merge,'__',__cache__)
                    }
                    else {
                        if (Merge.length) {
                            //throw new Error(Merge)
                            let scammer = SyncExpr(Merge, method, ':'), scopeCoeff = scammer[0].split(':')
                            if (typeof scammer == 'string') {
                                //print('recovery', scammer)
                                __cache__.push(scammer)
                            }
                            else {
                                EventTargeter["deno"] = scopeCoeff[0] + '^' + engulf((new method(scopeCoeff[1]).neg().Simp().format()))
                                EventTargeter["num"] = '1'
                                EventTargeter["coeff"] = new Expr(EventTargeter).Simp().format()
                                Eventrriger.push(scammer[1]), EventTargeter = {}, Merge = []
                            }
                        }
                            __cache__.push(trigerrAll[unknownIndexObject])
                    }
                }
                //   throw print(trigerrAll,'tsting',filter,Merge)
                // print(__cache__,'comitment')

                if (Merge.length) {
                    // print(Merge,'2by4')
                    let scammer = SyncExpr(Merge.map((e) => { if (e.startsWith('^')) { return e.replace('^', '') }; return e }), method, ':'), scopeCoeff = scammer[0].split(':')
                    // throw [scammer,Merge,scopeCoeff]
                    if (scopeCoeff.length == 1) { __cache__.push(scammer, '') } 
                    else {
                        EventTargeter["deno"] = scopeCoeff[0] + '^' + engulf((new method(scopeCoeff[1]).neg().Simp().format()))
                        EventTargeter["num"] = '1'
                        EventTargeter["coeff"] = new Expr(scammer[1]).Simp().format()
                        Merge = []; Eventrriger.push(EventTargeter); EventTargeter = {}
                        throw new Error(View(Eventrriger))
                    }
                }
                for (const Eventrrigers of Eventrriger) {
                    throw ''
                    Eventrriger[Eventrriger.indexOf(Eventrrigers)] = new UnifySyncExpr(new Struct(Eventrrigers,{mode:'Fraction'}), method)
                }
                trigerrAll = __cache__
                // print('out of recovery',trigerrAll,Eventrriger,x,Merge)
                // throw trigerrAll
                //if(Eventrriger.length)throw new Error(View([Eventrriger]))
                let concurent  = [], handler = (trigerrAll.length < 2&&!x.includes(')^(') ? (all = false, RIssex(x)) : trigerrAll).map((types) => {
                    if (equals(trigerrAll, RIssex(x))) {
                        all = false;
                    }
                    while (!Serializable(types)) {
                        // print('yeeewowo',types)
                        if (types == '') { break }
                        if(types.includes('/')){
                            // throw types
                            types = destruct(Div(types))
                        }
                        if (types.includes(')^(')) {
                            /*  throw new Error([types,View(Eventrriger)])
                            let [_types, _events] = getScope(types, method,sketech = true);
                            types = _types; Eventrriger.concat(_events)
                            throw new Error([types, _events])*/

                        }
                        //print(types, 'sec2', starter), 'ggggdear'
                        let [_types, newEvents] = getScope(types, method, true)
                        if (newEvents.length) {
                            
                        }
                        types = _types; Eventrriger = (newEvents.length ? Eventrriger.concat(newEvents) : Eventrriger)
                        for (let _conc_ of concurent) {
                            for (let _index in Eventrriger) {
                                Eventrriger[_index] = Eventrriger[_index].mul(_conc_)
                            }
                        };
                        if (Eventrriger.length) {
                            concurent = []
                        }
                    };
                    concurent.push(types)
                     //print('claim',types,concurent)
                    return (types == 1 && one ? '' : types) 
                })
                if (handler == 0) {
                    //throw new Error([handler,Eventrriger])
                    //for (const events in Eventrriger) {
                       // print('RANGE',events,trigerrAll)
                       // Eventrriger[events] = Eventrriger[events].mul(getScope(trigerrAll,method))
                    //}
                    //throw new Error([trigerrAll,handler,View(Eventrriger)])
                };let _do = true;
                for (let types of handler) {
                     //print('untrusable',handler, types, starter, all, level + '', handler) //4cx^9- 4y+78x- 10x^2y^2- 6y- 34v- 4x^(v-2)
                    if(!types){continue;}
                    if (all) {
                        if(types.includes('/')){
                            level = Expr(simplifyFraction(level.format(), types))
                        }
                        else{
                            level = level.mul(types)
                        }
                        continue
                    }
                    else {
                        //print(types,'cocncrete',starter)
                        let mayskip = types.includes('/') ? simplifyFraction(level.format(), types) : (level.mul(types) + '');
                        mayskip = !types && ['+1', '1'].includes(mayskip) ? '' : mayskip
                        EventTargets.push(mayskip); level = new Expr(starter); cast = false
                    }
                }
                for (const events in Eventrriger) {
                    //print(Eventrriger[events].Data.struct,starter,'cloqw')
                        Eventrriger[events] = Eventrriger[events].mul(starter)
                    }
                let roam = (level + '') == '1' && one ? '' : level.format();
                if (roam && cast) {
                    if (!handler.length) { roam = '' }
                    else { EventTargets.push(roam)   }
                }
            }
            else{
                if(!x&&starter){
                    EventTargets.push(starter)
                }
                else{
                     EventTargets.push(x)
                }
               
            }
        }
        else {
            EventTargets.push(x)
        }
    }
    //print(EventTargets,'led',Eventrriger[0] ? Eventrriger[0] : '');
    if (sketech) 
        return [outlet(EventTargets).join(''), Eventrriger]
   // zprint('ben10',EventTargets.join(''))
    return outlet(EventTargets).join('')
}
function ordersKey(keys){
    keys = keys instanceof Array ?keys:keys.split(",") ; 
        let zip, on,zipmapper; on = true;var key_ = [];zip = [],zipmapper=[]
        for (let read in keys) {
            if (on) {key_.push(keys[read]);on = false;     }
            else {zip.push(keys[read]);on = true; }}
        let _key = order(key_, true, true);
        for (let mapper in _key[1]) {
            zipmapper.push(zip[_key[1][mapper]]);
        }
        
    return [_key[0],zipmapper]
    }
function format(x  = false){
    let collections = ''; let mapper = ''; let precollection = ''; let not = -1;;let examine=[]
     for (let decorator in x) {
        not++;
        let decorators = new Struct(decorator.split(','), {strict: 'strict', Functions: (left, right) => { let rest = exports(left, right);if ((''+rest).includes('(')) {let fx = new Expr(rest).Simp() + '';return engulf(fx)} else { return rest}} });decorators = decorators.doForValue((_expr) => { _expr = _expr + '';if(RIssex(curl(_expr,true)).length<2){return flit(_expr)}; _expr = _expr.includes('(') ? (new Expr(_expr).Simp() + '') : _expr;let level = (RIssex(_expr).length>1?engulf(_expr):_expr);return level}).Domerit((key, value) => {return value == 0||value == '(0)'||false}).destruct();decorators = ordersKey(decorators);not++
        for (let mappers in decorators[0]) {
            if ("@#".includes(decorators[0][mappers])) {
                continue
            }
            let wreck = (decorators[1][mappers] == '1') ? "" : (decorators[1][mappers]?'^'+decorators[1][mappers]:'')
            mapper += decorators[0][mappers] + wreck
        }
        precollection = (" " + (['-1', '+1', "+0", "-0"].includes(x) ? rematch(x) : x[decorator]));precollection = mapper&&precollection.replaceAll(' ','')=='1'?'':precollection 
        if(!'-+'.includes(precollection.replaceAll(' ','')[0])&&not!=0){
            precollection = '+'  + precollection
        }
        examine.push(precollection+mapper)
        //print(precollection,'preValueprsenttin',mapper)
        if (mapper == '') {
            collections += ("-+".includes(collections.replaceAll(' ','')[0])?'':'+')+precollection + ''; precollection = '';mapper=''
        }
        else if ('+-'.includes(mapper.replaceAll(' ','')[0]) && !collections.replaceAll(' ', '')[collections.replaceAll(' ', '').length- 1] == '@') {
            collections += ("-+".includes(collections.replaceAll(' ','')[0])?'':'+') + precollection.replace('+','') + mapper ; precollection = '';mapper=''
        }
        else {
            precollection = precollection==' '?' +':precollection
            collections +=  ("-+".includes(collections.replaceAll(' ','').replaceAll('~','')[collections.length-1])?'':'+') + precollection + mapper ; precollection = '';mapper=''
         } 
    collections = collections.replace('^-1',"&")     
    //print(collections,'redflag')
    }
    collections = (collections).replaceAll('+ -','-').replaceAll(',','').replaceAll('-'," - ").replaceAll('+'," + ").replaceAll('((',"( (").replaceAll('))',") )").replaceAll(')'," )").replaceAll('(',"( ")

    if (collections.replaceAll(' ', '').startsWith('-')) {
        collections = collections.replace(' - ','-')
    }
    else if (collections.replaceAll(' ', '').startsWith('+')) {
        collections = collections.replace(' + ','')
        
    }
     return (RIssex(collections, true).join(' ').replaceAll('&',"^-1").replaceAll('^ -','^-').replaceAll('^ +','^') ).replaceAll('^ ','^')
}
function termType(expr) {
    const Type = [], CommonTyped = []
    for (let rise of (expr instanceof Array)?expr:RIssex(expr)) {
        if (!Serializable(rise))
            Type.push(rise)
        else
            CommonTyped.push(rise)
    }
    return [CommonTyped,Type]
}
function zip(a, b, strict = true) {
    const dict = {}
    if(a&b && strict?a.length == b.length:true){
        for(let united in a){
            dict[a[united]] = b[united]
        }
    }
    return dict
}
function contany(x,y){
    let seen  = 0; let index = 0
    while(x.includes(y)){
        seen ++;x = x.replace(y);
    }
    return seen;
}
function  len(object){
    if(object){
        return object.length
    }
return 0
}
function checkAlpha(expr){
    for(let righeous of expr){
        if(IsAlpha(righeous)){
            return true
        }
    }
    return false
}
function dynamics(concept){
        return IsAlpha(concept)||IsNumeric(concept)||'+-*'.includes(concept)
}
function int2(x){
    x= str(x).replaceAll('+','').replaceAll(' ','')
    if(+x == NaN){
        return x.length
    } 
    return x
}
function SortObject(x,func,key){
    if(typeof x  == 'object'){
        let new_object = {};key = list(x,true)
        while(list(new_object,true).length != list(x,true).length){
            let locate  = func?func(key):max(key)
            new_object[locate] = x[locate]
            delete key[key.indexOf(locate)]
        } 
    return new_object
    }
}
function Exprs(x){
    return new Expr(x)
}
function flatNumberList(x,modelRange =[]){
    let occurrences = {}
    let assembleList = []
    for(let codeOcuurence of x){
        if(occurrences[codeOcuurence]){
            occurrences[codeOcuurence] = occurrences[codeOcuurence] + 1;
            continue;
        }
        occurrences[codeOcuurence] = 1
    }
    //throw occurrences
    for(let anode in occurrences){
        for(let i = 1; i <= occurrences[anode];i++){
            if(i == 0){continue}
            assembleList.push(anode**i)
        }
    }
    let probsPermutate = []
    for(let reason_type in assembleList){
        for(let curiouse_subset in assembleList){
            if(reason_type == curiouse_subset){
                if(!probsPermutate.includes(assembleList[reason_type]))
                    probsPermutate.push(assembleList[reason_type])
                continue
            }
            let regulate = assembleList[reason_type] * assembleList[curiouse_subset]
            if(regulate <= modelRange[1]){
                if(!probsPermutate.includes(regulate))
                    probsPermutate.push(regulate)
            }
        }
    }
    // print(probsPermutate,'draw')
    return probsPermutate
}
function toObject(x_,t = null){
    x_= t?t.split(t):x_
    // print(x_,'qqq')
    let x = {};let recent = '',on = false
    for(let _x of x_){
        //print(_x,'change')
        if(on){
            if(x[recent]){
                x[recent] = (x[recent].replace(_x,'') + '___' + _x )  ;
                recent = 'empty';
            }
            else{
                x[recent] = _x ;
                recent = 'empty';
            }
        }
        recent = _x;
        on = !on
    }
    if(on && recent != 'empty'){
        x[recent] = ''
    }
    return x
}
function getvars(exploit,cost){
    exploit = new Expr(exploit);let vars ='',on = true,save = ''
    for(let rig of exploit){
        rig = rig[0].split(',')
        for(let rigs of rig){
            if(on){
                vars +=cost?cost(rigs,save):rigs
            }
            else save = rigs

            on = !on
        }
    return vars
    }
}
function vars(expr){
    //print(expr)
    const ContainerVars = [];let onvars=false,reading = 0 , last;
    for(const _vars of expr){
        last = Object.assign(_vars)
        if(_vars == '(' && last == '^'){
            onvars = true
        }
        if(_vars == '('){
            reading ++;
        }
        else if(_vars == ')'){reading--;}
        if(reading == 0){onvars = false}
        if(!onvars && IsAlpha(_vars) && !ContainerVars.includes(_vars)){
            ContainerVars.push(_vars)
        }
    }
    return ContainerVars
}
function toExprObject(x){
    let output = new Expr('');
    output.struct = x
    // print(x,'fork')
    return output.format()
}
function maxByValue(obj){
    let newObj = {};let resist = [],values = Object.values(obj)
    while(list(newObj,true).length != values.length){
        for(let x in obj){
            let max_ = max(values)
            if(obj[x] == max_){
                newObj[x] = max_
                delete obj[x];delete values[values.indexOf(max_)]
            }
        }
    }
    return newObj
}
function maxByalpha(values,ascend=false,vite = false){
    //print(list(values,true))
    let range = order(list(values,true), ascend,vite),reoder = {}
    if(vite){
        range = range[0]
    }
    for(let createInput of range){
        reoder[createInput  ] = values[createInput] 
    }
    return reoder
}
function cvars(func,...expr){
    if(expr[0] instanceof  Array){expr = expr[0]}
    const ContainerVars = []
    for(const _vars of expr){
        ContainerVars.push(vars(_vars).length)
    }
    return expr.indexOf(expr[ContainerVars.indexOf(func(ContainerVars))])
}
function fallback_operators(_x,_y,operation,t){
     let [x,y] = [new Expr(_y).Simp(),new Expr(_x).Simp()];let probsVars = vars(x+'').concat(vars(y+''));let values = {}
    for(let unknow_vars of probsVars){
        values[unknow_vars] = last(str(Math.random(4)))
    }
    if(t)
        return [calc(x,values),calc(y,values),operation]
    x = calc(x,values),y= calc(y,values)
    print(x,'fork',y,values,_x,_y)
    return x ==y
}
function _(__){
    return !'+-'.includes((''+__).replace(' ','')[0])?'+'+__:__
}
function outlet(x) {
    if (x instanceof Array) {
        return x.map(element => outlet(element))
    }
    if (!'-+'.includes(x.replaceAll(' ', '')[0])){
        return '+' + x
    }
    return x
}
function gbracHandler(expr,func){
    expr = unzip(expr)   
   // print('cassssssy::::',expr)
    var lense = '';let index = 0; let arise = false
    for(let rise in expr){
        if(expr[rise] == ob &&!func?true:expr[rise-1]=='^'){
            index = rise;lense = expr[index]
            while((expr.length > index)&&!isBalanced(lense)){
               // print('teck')
                index++;lense +=expr[index] ; 
            }
          //  print('corlelectae: ',lense)
            return lense ;}
    }
    return expr;
}
function checkExit(x){
    let peak = max(Object.values(new Expr(x).peaks))
    if(peak>2){
        return '-poly'
    }
    if(peak == 2){
        let ExprLent = RIssex(x).length
        if(ExprLent < 5)
            if(ExprLent == 3)
                return '-Quads'
            else if(ExprLent == 2)
                return '--IncompQuads'
            else if(ExprLent > 3){
                return 'setQuadratic'
            }
        return '-sets'
    }
    else{
        return '-sets'
    }
}
function Issex(value, concept = false) {
   // if (count(value, '(') == 2 && value[0] == '(') {
     //   value = value.replaceAll('(',"").replace('')
    ///}
    let braketVariable = 0; let powerVariable = 0; let slake = false;let test = false
    let onpower = false; let onpowerbar = false; let onpowervar = ''; let powercount = -1;
    let counter = 0; let _countervalue = 0; value = value.replaceAll(' ', '').replaceAll("--", "+").replaceAll('-+', '-').replaceAll('+-', '-')
    value = value.replace('-', ""); value = value.replace('+', "").replace('-', ""); value = value.replace('++',"").replaceAll('++',"+").replace('^+','');
    while (counter <= value.length - 1) {
        let value_ = value[counter]
           // print(onpower,onpowervar,value)
        if (onpower && counter == value.length - 1) {
            if (!"+-(".includes(value_)) {
                onpower = false; onpowerbar = false; break;
            }
        }
        if (onpower && !onpowerbar) {
            powercount++
            if (IsAlpha(value[counter + 1])) {
                counter += 1; onpower = false; counter++; powercount = -1; onpowervar = ""; continue;
            }
            if (value[counter + 1] == '(') {
                onpowerbar = true; counter++; onpowervar = ''; powercount = -1; continue;
            }
            if (powercount != 0 && "+-*".includes(value_)) {
                //print(powercount)
                onpowerbar = false; counter++; powercount = -1; onpowervar = "";
                return false
            }
        } onpowervar = ''; powercount = -1
        if (onpower && value_ == '(') {
                onpowerbar = true; slake = false;test = concept?true:false
            }
            if (value_ == '(') {
                //8-9c(5x-5y)
                if (counter != 0 && "-+".includes(value_[counter - 1])){
                    return concept?true:false;
                }
                onpowerbar = true;
                if (concept && !onpower) {
                    slake = true;
                }
            }
            if ( !onpowerbar && priority.IsAlpha(value_) && counter < (value.length - 1) && '-.*'.includes(value[counter + 1])) {
                return false;

        }
             if (onpower && !onpowerbar && (counter+1 !=value.length-1)&&"-+".includes(value[counter+1])&& "-+".includes(value_) && value[counter - 1] != "^")
            {
                 return false;
                }
            if (onpowerbar) {
                if (value_ == "(") {
                    braketVariable++;
                }
                else if (value_ == ")") {

                    braketVariable--;
                }
               // if (value[counter + 1] == '(') {
                 //   braketVariable++;counter++;continue;
               // }
                if (braketVariable == 0) {
                    onpower = false;
                    if (value[counter + 1] == '(' && concept) {
                        return true;
                    }
                    if (!(counter == value.length - 1) && "-+".includes(value[counter + 1])) {
                        if (test && concept) {
                            onpower = false; onpowerbar = false; test = false; slake = false; counter++; continue;
                        }
                        return slake?true:false;
                    }
                    else if (counter == value.length - 1) {
                        return test?false:true;
                    }
                    else {
                        onpower = false; onpowerbar = false;slake = false;
                    }
                }
        }
            if (("-+*^".includes(value_) || priority.IsNumeric(value_) || priority.IsAlpha(value_)) && !onpower &&!onpowerbar) {
                if (value_ == '^' && (counter + 1) <= (value.length - 1) && value[counter + 1] == '(') {
                    test = concept ? true : false;
                    onpowerbar = true; counter++;;; continue;
                }
                else if (value_ == '^') {
                    test = concept ? true : false
                    onpower = true; counter++;    continue
                }
               // print(value_)
                 if ((IsAlpha(value_)||IsNumeric(value_)) && counter != 0 && ("-+".includes(value[counter - 1]))&&!concept) {
                    return false
                }
            }
            counter++;
    }
    if (test) {
        return false
    }
  //  throw new Error([onpower,!onpowerbar])
    let x = any([!onpower, !onpowerbar])
    if (onpower && !onpowerbar) {
        return true 
    }
        return x ? concept?false:true:false
}
function splitLimit(expr, x, limit){
    let alt = expr.split(x)
    let pop = [], pop2 = [], onPop = true
    for(let index in alt){
        if(index <= limit && onPop){
            pop.push(alt[index])
        }
        else{
            onPop = false
            pop2.push(alt[index])
            
        }
    }
     pop2 = pop2.join(x)
    pop2?pop.push():''
    return pop
}
function Crocktage(x){
    return 
}
function matchChanges(x,changes){
    const y  = x  
    for(let _changes of changes){
       x =  x.replaceAll(_changes[0],_changes[1])
    }
    return  y != x
}
function CompileExpr(x,y=false) {
    let newex = '',unique=0;
    x = x.replaceAll(')b',')~~~b').replaceAll(')c',')~~~c').replaceAll(')e',')~~~e')
    .replaceAll(')f',')~~~f').replaceAll(')g',')~~~g')
    .replaceAll(')h',')~~~h').replaceAll(')i',')~~~i').replaceAll(')j',')~~~j')
    .replaceAll(')k',')~~~k').replaceAll(')l',')~~~l').replaceAll(')m',')~~~m')
    .replaceAll(')n',')~~~n').replaceAll(')o',')~~~o').replaceAll(')p',')~~~p')
    .replaceAll(')r',')~~~r').replaceAll(')s',')~~~s').replaceAll(')t',')~~~t')
    .replaceAll(')u',')~~~u').replaceAll(')v',')~~~v').replaceAll(')w',')~~~w')
    .replaceAll(')x',')~~~x').replaceAll(')y',')~~~y').replaceAll(')1',')~~~1') 
    .replaceAll(')z',')~~~z').replaceAll(')5',')~~~5').replaceAll(')2',')~~~2')
    .replaceAll(')3',')~~~3').replaceAll(')6',')~~~6').replaceAll(')4',')~~~4')
    .replaceAll(')7',')~~~7').replaceAll(')8',')~~~8').replaceAll(')9',')~~~9')
    .replaceAll(')0',')~~~0').replaceAll(')q',')~~~q').replaceAll(')a',')~~~a')
    // print(x,'woowowowowo')
    function Local(x){ 
         var _compile = ''
        for(let next of rcount(x,')^')){
            var revstr= '';next+=2+(_compile.length?_compile.length-1:0)
          //  print(revstr,'acknowledge',_compile,next)
            while(next!=0&&x[next+1]!='('){
              //  print(revstr,'resemble',next,rcount(x,')^'),x[next]);
                revstr+=x[next]
                if(!x[next+1]){
                    x = x.replaceAll(')^'+revstr,')^'+rengulf(revstr));break
                }
                if((('-+)('.includes(x[next+1])||IsAlpha(x[next+1]))&&isBalanced(revstr))||isBalanced(revstr)){
                    _compile = ')^'+rengulf(revstr)
                let replace = x.replaceAll(')^'+revstr,')^'+rengulf(revstr))
                if(isBalanced(replace)){
                    x = replace;break;
                }
                else{
                    setTimeout(()=>console.table({[next]:[x,`':::RealTimeCompilationError:at:${next}->${x[next]}`]}),['Object','ErrorCode'])
                    x = x.replaceAll(')^'+revstr,'^'+rengulf(revstr));break
                }
                    
                };next++;
            }
        }
    //while(x.includes(')^')){
      //  x = Local(x)
    //}
    return x
    }
    function compiler(x){
        //while(reduceScope(x)){

        //}
        let unique = 0;
        for(let next of rcount(x,'~~~')){
            let _compile = '';let reveIndex = next;let revstr= '';next+=3;
            while(reveIndex!=0&&IsAlpha(x[next])){
                //print(reverse(revstr))
                if((isBalanced(revstr)&&revstr.includes(')'))){
                    break;}
                    revstr += x[reveIndex];reveIndex--;
            }
           // print(reverse(revstr),reveIndex,'gogdd',x[reveIndex])
            if(x[reveIndex] == '^'){
                let z = splitLimit(x,'~~~',1)
                x = engulf(z[0]) + engulf(z[1])
                // x = x.replace(`~~~${z[1]}`, engulf(z[1])).replace('~~~','');
                //  throw x;
                continue
            }
            if(x[next]==')'){
                next+=1
            }
            while(next<x.length){
                _compile+=x[next]
                if(next+1 == x.length)
                    x = x.replaceAll('~~~'+_compile,engulf(_compile.replace('~~~','')))
              //  print(_compile)
                if('-+()'.includes(x[next+1]) && isBalanced(_compile)&&x[next]!='^'){
                    x = x.replaceAll('~~~'+_compile,engulf(_compile.replace('~~~','')));
                  //  print('change',_compile,x);break
                }
                if('~'.includes(x[next+1]) && isBalanced(_compile)&&x[next]!='^'){
                    x = x.replaceAll('~~~'+_compile,engulf(_compile.replace('~~~','')));
                   // print('change',_compile,x);break
                }
                next++;
            }
        }
        return Local(x)
    }
    function singleCompiler(x){
        let unique = 0,newex = ''
        while(unique<x.length){
            if(IsAlpha(x[unique-1])&&IsNumeric(x[unique])&&!'-+'.includes(x[unique])){
                let _compile=''
                while(unique<x.length){
                    _compile+=x[unique]
                  //  print(_compile,unique,'inxscope',x)
                    if('-+()'.includes(x[unique+1]) && isBalanced(_compile)&&x[unique]!='^'){
                        let save = singleCompiler(_compile)
                     //   print('liialai',save)
                        newex+=engulf(save);unique++;break
                    }unique++;
                }  
            }
            //print(unique,'outside',newex)
            if(x[unique]){
                newex+=x[unique];unique++;}
            else{
              //  print(engulf(newex,true)+(x.replace(newex,'')),'glortuutu')
                return CompileExpr(engulf(newex,true)+(x.replace(newex,'')))
            }
        }
        return newex
    }
    while(x.includes('~')){
        x = singleCompiler(compiler(x))
    }

    x =  singleCompiler(Local(x))
    if(matchChanges(x,  [[ ')1', ')~~~1' ], [ ')2', ')~~~2' ], [ ')3', ')~~~3' ],
    [ ')4', ')~~~4' ], [ ')5', ')~~~5' ], [ ')6', ')~~~6' ],
    [ ')7', ')~~~7' ], [ ')8', ')~~~8' ], [ ')9', ')~~~9' ],
    [ ')0', ')~~~0' ], [ ')1', ')~~~1' ], [ ')2', ')~~~2' ],
    [ ')3', ')~~~3' ], [ ')4', ')~~~4' ], [ ')5', ')~~~5' ],
    [ ')6', ')~~~6' ], [ ')7', ')~~~7' ], [ ')8', ')~~~8' ],
    [ ')9', ')~~~9' ], [ ')0', ')~~~0' ], [ ')A', ')~~~A' ],
    [ ')B', ')~~~B' ], [ ')C', ')~~~C' ], [ ')D', ')~~~D' ],
    [ ')E', ')~~~E' ], [ ')F', ')~~~F' ], [ ')G', ')~~~G' ],
    [ ')H', ')~~~H' ], [ ')I', ')~~~I' ], [ ')J', ')~~~J' ],
    [ ')K', ')~~~K' ], [ ')L', ')~~~L' ], [ ')M', ')~~~M' ],
    [ ')N', ')~~~N' ], [ ')O', ')~~~O' ], [ ')P', ')~~~P' ],
    [ ')Q', ')~~~Q' ], [ ')R', ')~~~R' ], [ ')S', ')~~~S' ],
    [ ')T', ')~~~T' ], [ ')U', ')~~~U' ], [ ')V', ')~~~V' ],
    [ ')W', ')~~~W' ], [ ')X', ')~~~X' ], [ ')Y', ')~~~Y' ],
    [ ')Z', ')~~~Z' ], [ ')a', ')~~~a' ], [ ')b', ')~~~b' ],
    [ ')c', ')~~~c' ], [ ')d', ')~~~d' ], [ ')e', ')~~~e' ],
    [ ')f', ')~~~f' ], [ ')g', ')~~~g' ], [ ')h', ')~~~h' ],
    [ ')i', ')~~~i' ], [ ')j', ')~~~j' ], [ ')k', ')~~~k' ],
    [ ')l', ')~~~l' ], [ ')m', ')~~~m' ], [ ')n', ')~~~n' ],
    [ ')o', ')~~~o' ], [ ')p', ')~~~p' ], [ ')q', ')~~~q' ],
    [ ')r', ')~~~r' ], [ ')s', ')~~~s' ], [ ')t', ')~~~t' ],
    [ ')u', ')~~~u' ], [ ')v', ')~~~v' ], [ ')w', ')~~~w' ],
    [ ')x', ')~~~x' ], [ ')y', ')~~~y' ]]))
    return CompileExpr(x)
    return x
    //print('Compiling expression')
}
//  const LCM = (...expression)=>{
//     const coeffCollectors = expression.map(e=>priority.toPureState(e)),denoSects = [];
//     const varsCollectors = expression.map(e=>getScopeContext(priority.toNumState(e)))
//     varsCollectors.map(e=>denoSects.push(...e))
    
// } 

function getDomDeno(expr){
    let possible_denominator = getExprDenos(expr).map(
        (expr)=>{
            if(RIssex(expr).length > 12){
                return expr
            }
            else{
                return getScopeContext(factorize(expr))
            }
        }
    )
    return 
}
function reduceScope(curl_expr,falsy,loop){
    if(loop){
        let [last_,now ,current] =['',curl_expr,'']
        while(now.startsWith(ob)&&now.endsWith(cb)){
            now = reduceScope(now)
            if(last_ == now ){
                return now 
            }
            last_ = now 
        }
        return now 
    }
    curl_expr = curl_expr.replaceAll(' ','')
    if(!curl_expr){
        return ''
    }
    //print(curl_expr)
     let [index,Toturn] = [0,'']
     while(curl_expr[0].startsWith(ob)&&index<curl_expr.length){
        Toturn +=curl_expr[index];
        if(isBalanced(Toturn)&&index < curl_expr.length-1){
            return falsy?false:curl_expr
        }
        if((index+1)>=curl_expr.length&&(isBalanced(Toturn))){
            return falsy?true:curl(curl_expr)
        }
    index++;
     }
    return falsy?false:curl_expr
}
function Trackprops(props,object){
    let indexProps ={}
    //print(object)
    for(let key in object){
        if(object[key] instanceof Function&&object[key])
           props[key] =  object[key]
        if(object[key]!=undefined&&typeof object[key] == typeof props[key]){
            if(object[key]  instanceof Array ){
                let props1 = Object.assign(props[key]),props2 = Object.assign(object[key])
                for(let unknowList in props2){
                    if(typeof props2[unknowList] == typeof props1[unknowList]){
                        if(props1 instanceof  Array){
                            props1[unknowList] = props2[unknowList]
                          //  print(props1,props2[unknowList])
                        }
                        else if(props1 instanceof  Object){
                            props1[unknowList] = Trackprops(props1[unknowList],props2[unknowList])
                        }
                        else{
                           // print(props2,'dat')
                            props1[unknowList] = props2[unknowList]
                        }
                        //throw props2
                    }
                    else{
                        throw new TrackPropsError(`-----------The require props ${View(props)} does not meet the give ${View(props2)} at:::/n
                                    index -> ${unknowList}-------=>::$${View(props2[unknowList])} must be Type of ${View(props1[unknowList])}:`)
                    }
                }
                props[key] = props1
            }
            else if (object[key]  instanceof Object){
                props[key] = Trackprops(props[key],object[key])
            }
            else{
                props[key] = object[key]
            }
        }
        else{
            if(props[key])
               try{
                    throw new TrackPropsError(`Unepxected Value for keyword:${list(props)[0]}`)
                }
                catch(e){
                    throw new TrackPropsError(`Unepxected Key::Unexpected key to recieve this value:${props[key]} <------------->  ${object[key]}`)
                }
            else
                throw new TrackPropsError(`Unepxected Value for ${View(props[key])}-->${props[key]} of ${View(object)}`)
        }
    }
    return props
}
function fallback_operator(argument_1,argument_2,possibleOperation){
    argument_1 = +argument_1!=NaN?+argument_1:argument_1
    argument_2 = +argument_2!=NaN?+argument_2:argument_2
    switch(possibleOperation){
        case '>':
            return argument_1>argument_2
        case '<':
            return argument_1<argument_2
        case '!>':
            return !(argument_1>argument_2)
        case '!<':
            return !(argument_1<argument_2)
        case '==':
            return argument_1==argument_2
        case '>=':
            return (argument_1>=argument_2)
        case '<=':
            return argument_1 <= argument_2
        case '!>=':
            return !(argument_1>=argument_2)
        case '!<=':
            return !(argument_1<=argument_2)
        case '!=':
            return argument_1!=argument_2
    }
    throw [possibleOperation,'lll']
    return '-uncased-'
}
function Divs(x,y){
    return new Fraction(x).div(x,y)
}
function Copy(...list){
    let CopyObject = [];list.map((element)=>CopyObject.push(element))
    return CopyObject
}
function pairedElements(list_1,list_2,req){
    //throw [lists,list2]
    if(list_2 == '#,1'){
        return false
    }
    let second = false
    function getRange(list,list2 ,shortProps){
        //print('doning,',list,list2)
        if(shortProps.command){
            if(IsNumeric(shortProps.command)||(shortProps.command[0]=='{'&&last(shortProps.command)=='}',second =true)){
                if(second&&shortProps.function){
                    return shortProps.function(list,list2)
                }
                else{
                    if(shortProps.defaultOperation){
                        let checkType = shortProps.defaultOperation(shortProps.command,list2)
                        if(typeof checkType  == 'boolean'){
                            return checkType
                        }
                      //  print(list,list2,checkType,shortProps.defaultOperation,fallback_operator(shortProps.command?shortProps.command:list,list2,checkType))
                        return fallback_operator(shortProps.command.startsWith('{')?shortProps.command:list,list2,checkType)
                        if(true){
                            print('testing',shortProps.command?shortProps.command:list,list2,checkType,fallback_operator(shortProps.command?shortProps.command:list,list2,checkType))
                        }
                    }
                    //print(list2,shortProps.command,'acrio')
                    return list2==shortProps.command
                }
            }
            let cased = fallback_operator(list,list2,shortProps.command)
            if(cased == '-uncased-'){
                throw TypeError(`Range must Number Type or oprator command  !<,!=,!>,>=&&!<=`)
            }
            else{
               return cased
            }
        }
       return false
    }
    let pairedList = [];index = 0;let justpassed = false
    let [lists, list2] = render(Struct ,{strict:true},'struct',Copy(list_1)[0].split(','),Copy(list_2)[0].split(','))
    delete lists['#'],delete list2['#']
    //throw [View([lists,list2,list_1,list_2])]
    //flitering by req.accuracy
    if(req.accuracy.single){
        if(equals(list(lists),list(list2))&&equals(Object.keys(lists),Object.keys(list2))){
            //throw lists
            if(req.accuracy.range.command){
                let pheels = []
                for(let read in lists){
                    pheels.push(getRange(lists[read],list2[read],req.accuracy.range))
                }
                if(req.accuracy.range.every)
                    return pheels.every(e=>e==true)
                return pheels.some(e=>e==true)
            }
            return true
        }
        print(equals(list(lists),list(list2)),equals(Object.keys(lists),Object.keys(list2)))
        return false
    }
    else if(req.accuracy.onlyRange){
        let pheels = []
        for(let read in list2){
            pheels.push(getRange(lists[read],list2[read],req.accuracy.range))
        }
        if(req.accuracy.range.every)
            return pheels.every(e=>e==true)
        return pheels.some(e=>e==true)
    }
    //throw 'guessKey'
    if(req.selectAllElement){
        //throw req
        for(let read in lists){
            if(!list2[read]){
                return  false
            }
        }   
    }
    let _Get= {}
    if(req.accuracy.range.selectElement.all){
       
        for(let guessKey in lists){
            if(!list2[guessKey]){
                //print([lists,list2],'trushing')
                return false
            }
        } 
    let secrete = Copy(list2)[0];
    if(req.accuracy.range.every&&req.limits){
        for(let read in secrete){
                if(!lists[read]){
                delete list2[read]
                }
            }
    }
    }
    for(let guessKey in list2){
        //print(guessKey,lists)
        if(!lists[guessKey]){
            if(req.selectAllElement)
                return false
            if(req.accuracy.range.selectElement.any){
                pairedList.push(true);continue
            }
            pairedList.push(false);continue
        }
        else{
            if(req.accuracy.range.command){
                var pheels = []
                let tresh = (getRange(lists[guessKey],list2[guessKey],req.accuracy.range))
                pairedList.push(tresh)
                }
                //print(lists[read],list2[read])
                //print(pheels,'destiny',(req.accuracy.range.every)?pheels.every(e=>e==true):pheels.some(e=>e==true))
                //pairedList.push((req.accuracy.range.every)?pheels.every(e=>e==true):pheels.some(e=>e==true))

            else{
                //throw [equals(list(lists,true),list(list2,true))]
                if(req.selectAllElement){
                    return equals(list(lists,true),list(list2,true))
                }
                if(req.directFx){
                    if(req.directFx)
                        return true
                }
                pairedList.push(req.accuracy.range.defaultOperation(lists[guessKey],list2[guessKey]))
            }
        }
    }
    //print(pairedList,lists,list2)
    //print(pairedList,'fdestiney',pheels)
    if(req.accuracy.range.every)
        return pairedList.every(selectAllElement=>selectAllElement==true)
    return pairedList.some(e=>e==true)
}   
function LikeTerms(expr,_termsby={}){
    let defalutop = (left,right,operator = '==')=>{
        return fallback_operator(left,right,operator)
    }
    const DefalutTerms = {
        fliterby:'',
        selectAllElement:false,
        signature:'',
        limits:true,
        directFx:false,
        accuracy:{
            strict:true,
            single:false,
            onlyRange:false,
            auto:{Coeff:null_},
            range:{
                command:'',
                every:true,on:'',
                limits:0,
                function:None,
                selectElement:{any:false,all:false},
                variableEquality:true,
                defaultOperation:defalutop
            }
            }
        }
    const control = Trackprops(DefalutTerms,_termsby,[Function]);let [pairedStruct,unpairedStruct] = [{},{}]
    //throw [control.accuracy.range.defaultOperation,'tree']
    /*LikeTerms rotines:
    --
      |
      |
      |
        ----Like Variables&&Orderable Coefficent ---- 
        ----Power base progression ---- 
            | Power base is been control by accuracy.onlyRange and accuracy.range
            |Range is use to control the flows and litms of expression, bu using function to select merit expresion
            |For example:
            |   f(x) = 5xy-3xyt^2-15xy-7y
            |   Assuming we want to get all expression that has y element:
            |   let septre = LikeTerms('5xy-3xyt^2-15xy-7y',{accuracy:{fliterby:'x'}}})
            |   this return {'y,1',-7}, beacuse this only element that absolute flitration for this exprssion
            |   see Manual more on:
            |     set-function:
            |     limit-range:
            |     control expression flow ant etc 
            |          
            |and  we can use OnlyRange
            | accuracy.onlyRange:
            |                   this is turn off by default, it only recommended to be turn on by user,
            |                    if they want to select only dependent variables,like example shown above
            |                    assuming we made a slight modification of the expression:
            |                    Note:<--that onlyRange will work with range(see Manual),but it will be dominating and leading over any other function before it return it-->
            |                    where we have:
            |                         let expr = f(x) = '6xy-2zy-6x^6y-xy
            |                         in this case where have mutiple xy but we can fliter by:
            |                             ----defining a range for the expression:
            |                                  setting accuracy.command to define Operators or in OverloadingOperatorClass(see Manual)
            |                                   using limit,every,selectAllElement to constraint some unwanted prediction etc(see Manual)
            | 
            |         
            |
            |
            |
            |
            |
            |
            |
            |
            |
            |
        ----Unserilaize alphaNumeric Power progression----
        ----
    */
    if(control.fliterby){
        let termsby = new Expr(control.fliterby)
        expr = new Expr(expr)
        for(let origin of termsby){
            let [key,value] = origin
            for(let orderable of expr){
                if(control.accuracy.auto.Coeff.name != 'null_'){
                    if(control.accuracy.auto.Coeff(value,orderable[1])){
                        if(pairedElements(key,orderable[0],control))
                            pairedStruct[orderable[0]] = orderable[1]
                        else
                            unpairedStruct[orderable[0]] = orderable[1]
                    }
                    else
                        unpairedStruct[orderable[0]] = orderable[1]
                }
                else{
                    if(pairedElements(key,orderable[0],control))
                        pairedStruct[orderable[0]] = orderable[1]
                    else
                    //throw [key,orderable[0]]
                        unpairedStruct[orderable[0]] = orderable[1]
                } 
            }
        }
        expr.struct = pairedStruct;let paired = new Expr('');paired.struct = unpairedStruct 
        return [expr.format(),paired.format()]  
    }
}

function nestedlikeTerms(x,...props){
    let done = []
    for(let allowance of props){
        let _do = LikeTerms(x,allowance);
        if(_do[0]){done.push(_do[0])}
        if(_do[1]){
            x = _do[1]
        }
        else{return done}

    }
    return [done,x]
}
function int(x){
   return +x == NaN?x:+x
}
function flex2 (x){
    x = x instanceof Array ? x.join('+') : x
    return purify(x).replaceAll('+',' + ').replaceAll('-', ' - ') 
    console.log()
}
function wrapFact(x,y){
    return `${x}(${y})`
}
function wrapFacts(x,y){
    if(x == y)
        return `(${x})^2`
    return  `(${x})(${y})`
}
function isBalanced(expr){
    if(count(expr,cb) == count(expr,ob)){return true}
    return false
}
function alent(str){
    let alphaLength = 0;
    return list(str).map((obj)=>{if(IsAlpha(obj)){alphaLength++;}}),alphaLength
}
function  VerifyExpression(expr){
    if(count(expr,cb) != count(expr,ob)){
        throw new ParenthesisMismatchError(expr)
    }
}
function unzip(LockedExpr){
    LockedExpr = LockedExpr.replaceAll('(1(','((')
    if(LockedExpr.startsWith('1(')){LockedExpr=LockedExpr.replace('1(','(').replaceAll('+1(','(')}
    if(isBalanced(LockedExpr)&&LockedExpr.startsWith(ob)&&LockedExpr.endsWith(cb)){
        return curl(LockedExpr)
    }
    return LockedExpr
}
function RIssex(expr,normalize = false,scope = ''){
   // print(expr,'')
    let singleExpr= [];let _expr='';scope = ( scope  + cb + ms + ps )
    for (let index in expr) {
        _expr += expr[index];
        if (expr[index]!='^'&&Issex(_expr) && scope.includes(expr[+index + 1])&&isBalanced(_expr)) {
            _expr  = _expr.startsWith('  ')?_expr.replace('  ',''):_expr
            if(!'-+'.includes(_expr)&&_expr!=' '){
                singleExpr.push(normalize?Runimp(_expr,normalize):_expr); _expr = ""
            }
        }
    }
    if(!'+-'.includes(_expr)&&_expr!=' '){
        singleExpr.push(normalize?Runimp(_expr,normalize):_expr); 
    }
    
    return singleExpr
}
function rengulf(expr){
    if(reduceScope(expr)==expr){
        return engulf(expr)
    }
    return expr
}
function cull(expr){
    if(RIssex(expr).length>1){
        return engulf(expr)
    }
    return expr
}
function last(list){
    if(!list){
        return ''
    }
    return list[list.length-1]
}
function Refrex(expr){
    let x = []
    for(let split_pair of RIssex(expr,false,'')){
        if(x.length&&x[x.length-1][x[x.length-1].length-1] == '/'){
            x.push(x.pop() + split_pair)
            continue
        }
        x.push(split_pair)
    }
    return x
}
function Maximize(x,range){
    let n = 1
    if(x>=range){
         n ++;x  = (x ^ range/(n)) - x ^ n
    }
    else if (x<=range){
        n ++;x  /= (x^ range/(n)) + n
    }
    x = Math.ceil(x*range)
   while(range < (str(x)[0]=='-'?-x:x)){
        x = (Math.floor(x/range))
    }
    return x

}
function id(hostage,num = false, alphaNumeric = true){
   
}
function tolist(x){
    let _x = []
    for(let xx in x){
        if(xx)
            _x.push(xx,x[xx]?x[xx]:'1')
    }
    return _x
}
function destruct(expression,toFraction){
    // print(expression)
    function Numler(expr){
        if(!expr||['-','+'].includes(expr)){
            return expr + '1'
        }
        return expr
    }
    if(count(expression,'/')<2){
        let [num,deno] = expression.replaceAll(' ','').split('/');
        if( RIssex(reduceScope(deno)).length>1){
            return `${num}/(${deno})^(-1)`
        }
        let [coeff,vars]=[priority.toPureState(num),num.replace(priority.toPureState(num),'')]
        let [coeff_2,vars_2]=[priority.toPureState(deno),deno.replace(priority.toPureState(deno),'')]
        // print(num,'esay',expression,coeff_2)
        let [Coeff,Vars] = [(Numler(coeff))/Numler(coeff_2),[Object.keys(new Expr(num).struct)[0].split(','),Object.keys(new Expr(deno).struct)[0].split(',')]]
        let [numv,denov] = [Vars[0],For(Vars[1],(element,index)=>{
            if(index%2 == 1){
                return '(-'+element+')'
            }
            return element
        })]
        //print([coeff,coeff_2,'visible',Coeff,numv,denov],exportExprKey(numv.concat(denov),false,true))
        let _numv = new Expr(exportExprKey(numv.concat(denov),false,true)).mul(''+(Coeff?Coeff:'1')).Simp();
        return _numv+''
    }
}
function rmvspec(x){
    x = priority.toNumState(x);let x_ = ''
    for(let t of x){
        if(priority.special.includes(t))
            continue
        x_ +=t
    }
    return x_
}
function zipKey(x){
    
    let [_x,y,map] = [Object.keys(x),Object.values(x),'']
    for(let assign in _x){
        if(_x[assign]=='#'){continue}
        map +=_x[assign]  + cull(['',0,'1',1].includes(y[assign])?'':'^' + y[assign])
    }
    return map
}
function OrderExpr(num,deno,factor=false){
    //Ordering the denominator
    const coeff_ = (num,num2)=>{
        return num2%num == 0
    }
    let _key = {accuracy:{onlyRange:false,auto:{Coeff:coeff_},range:{command:'<',every:true,selectElement:{all:true},defaultOperation:()=>{return '<='}}}}
    deno=deno.map((element)=>{return [getvars(element),element]});let _deno = Object.assign(deno),_deno_ = [],keppros = {};
    for(let order of _deno){
        let _order_max= max(_deno,(h,e)=>{if(!h)return h ;else return h.length > e[0].length?h:e})
        //print(_order_max,'treason')
        _deno_.push(_order_max[1]);
        delete _deno[_deno.indexOf(_order_max)]
    }
    let r=false
    for(var _gcd_ of _deno_){
        var fliterVar = LikeTerms(num,{fliterby:_gcd_,accuracy:_key.accuracy})
        if(fliterVar[0]){
            if(!factor){
                return  _gcd_
            }
             return [[fliterVar],_gcd_]
        } 
        r = true
    }
   
}
function getFirstPhase(x){ 
    let phase_1 = '', index = -1
    while(index < x.length-1){
        index++;
        phase_1+=x[index]
        if(x[index+1] == '('&& last(phase_1)!='^'){
            break;
        }
    }
    return phase_1
}



function ChinesRandom(already){
    let rand = ()=>{
        let random  = str(Date.now())
        return priority.special[random[takelent(Math.random(),random.length)[5]]]}
    let random = rand()
    while(already && already.join().includes(random)){
        random = rand()
    }
    return random
}
function reduceBrackScope(x){
    if(x.startsWith('(')){
        return FactorBrack(x)
    }
    else{
        // getting out outer parenthesis function 
        // removing the embraced Bracket
        let phase_1 = getFirstPhase(x)
        let phase_2 = x.replace(phase_1,'')
        // checking if is joint bracke i.e 9(9x-1)(8x-3)
        let context = getScopeContext(phase_2)
        /*if true then return recursively next loop; i.e (9x-9x(9x-6y)) ->
         [(9x-(9x(9x-6yx)))] -> [3x(3-(3x(3-2y)))]
        else then context.length will be equal to 1
        */
       // print(context,phase_2,x)
        if(context.length > 1){
            let break_ = FactorBrack(curl(phase_2))
            let pfx = getFirstPhase(break_)
            if(pfx){
                return new Expr(pfx).mul(phase_1?phase_1:'') + break_.replace(pfx,'')
            }
        }
        else{
            let phase_3 = [];let mainValue = []
            for(let context_ of context){
                let diffs =  FactorBrack(context_);
                if(getScopeContext(diffs).length>1){
                
                    diffs = FactorBrack(purify(diffs),true)
                    //throw diffs
                }
                 let first_pahse = getFirstPhase(diffs)
                mainValue.push(diffs.replace(first_pahse,''));phase_3.push(first_pahse?first_pahse:'1')
            // print(diffs,'we',context_,mainValue)
            }

            // /throw [phase_2,phase_1,phase_3]
            for(let re_index in mainValue){
                let acces = getScopeContext(mainValue[re_index])
                if(acces.length>1){
                    // print(FactorBrack(mainValue),'control')
                    mainValue[re_index]  = engulf(mainValue)
            }}
            return Exprs(phase_3.concat(phase_1)) + mainValue 
        }
    }

}

const resloveFraction = (expr)=>{
    return simplifyFraction(expr)
}

function EliminateSideFraction(left,right){

}


function ClearFRactionByFactorization(expr){

}

function getDeno(frexpr){
    frexpr = resloveFraction(frexpr)
    return [frexpr, frexpr.split('/')[1]]
}
function reduceFractionLevel(expr,exceptions){
    let FractionReducer = getScopeContext(get_lcm(expr));
    for( let bitFraction of FractionReducer ){
        if(exceptions.includes(bitFraction))
            continue
        else{

        }    
    }
}
function combination(x,y){
    return factorial(x) / ( factorial(x- y) * factorial(y) )
}
function factorial (x){
    let i =0, y =1
    while(i < x){
        i ++;
        y *=i
    }
    return  y
}

function filterSign(x,y){
    x = x + ''; y = y + ''
    let xs = priority.getSign(x+'')
    let ys = priority.getSign(y+'')
    return  purify( xs + ys + x.replace(xs,'') + y.replace(ys,''))
}
async function isFactor(expression , variableCcomponent, NumberCombination){
    
    async function permutate(x,y){
        const permutateVar = [];
        for(let combineX of x){
            for(let combineY of y){
                if(priority.toNumState(combineX) == priority.toNumState(combineY))continue
                    permutateVar.push([combineX+combineY,[priority.toNumState(combineX),eval(purify(`-${priority.toPureState(combineY) + '/' + priority.toPureState(combineX)}`)) + priority.toNumState(combineY)]])
                }
                        
        }
        return permutateVar
    }

    function combine(VComponent, Nset){
        let merginPoint = [];let clone = []
        for(let possibleValues of Nset){
            clone = []
           for(let Vccomp of VComponent)
                merginPoint.push(filterSign(possibleValues,Vccomp))
           
        }
        return merginPoint
    }

    async function IsAfunction(expression, model){
        async function  calc_(expression, model,p){
            
            if(p) model[1][1] = '-'+model[1][1]
            return  calc(expression, toObject(model[1]), true).replace(' ','')}
        let x  = await calc_(expression, model)
        let y = await calc_(expression,model,true)
        if(model[0] == '-9x+5g')throw [x,y]
        if( !x || !y  || x == '' || y == '' || x == '0' || y == 0){
            return !x
        }
        return false
    }

    variableCcomponent = RIssex(variableCcomponent);

    const Xcomponent = combine(variableCcomponent,NumberCombination[0]);
    const Ycomponent = combine(variableCcomponent,NumberCombination[1]);
    // const X2component = combine(variableCcomponent,NumberCombination[1]);
    // const Y2omponent = combine(variableCcomponent,NumberCombination[0]);
    var factorList = []

    //  factorList.push(... await permutate(Xcomponent,Ycomponent))
     factorList.push(...await permutate(Xcomponent,Ycomponent))
    
   
     const facotors = []

    //  throw [factorList,factorList.length]
    for(let each of factorList){
          print(each)
        let isfactor = await IsAfunction(expression, each)
        if(isfactor){
            facotors.push(each[0])
        }
      
    } return facotors 


    if(NumberCombination.length != variableCcomponent.length)
        throw ImprorperDestructuringCompilationTimeError(`${expression} is not a in the same factor combination with  ${variableCcomponent} over range of ${NumberCombination} `)
    
}
async function test(){
    isFactor(2000,'x-y');
    isFactor(3000,'x+y')
    print('x-y')
}
function get_lcm(expr){
    let denos = get_deno(expr)
    const booked = []
    const factorize  = priority.bestfit(denos,false)
    let lcm = denos
    .map( (element) => {
        return element = element.filter(
                innerElement=>!factorize
                .includes(innerElement)
            ).join('')
        
        }
    )
    lcm = lcm.filter(e=>{
        let countBooked = count(lcm,e);
        if(countBooked > 1 && booked.includes(e)){
            return false
        }        
        else if(countBooked > 1){
           booked.push(e)
           return true
        }
        else if(countBooked > 1 && !booked.includes(e)){
            throw new Error('AmbiguousError: Expr is inconsistent')
        }
        else{
            return true
        }
    })  
    .map(
        (k) => {
            return rengulf(k)
        }
    )
    .join('')
    return lcm.length?lcm:factorize.map(e=>rengulf(e)).join('')
}
function IsPrefixedExpr(expr,returnIndentExpr) {
    expr = purify(expr).replaceAll(' ','')
    if(expr[0] === '('){
        return false
    }
    return getFirstPhase(expr).length > 0
}
function get_deno(expr){
    expr = Refrex(expr); let get = []
    for(let input of expr){
        print(expr,'get')
        get.push(getScopeContext(getDeno(input)[1]));
    }
    return get.filter(e=>e!='1')
}
function ExpandThrough(expr){
    var Outer = ''
    let prefix  = IsPrefixedExpr(expr)
    if(prefix[0]){
        Outer = prefix[1];
        expr = NormalizeScope(Outer)
    }
}
function NormalizeScope(expr,recall, process = [], list = true){
    process = [...process,expr]
    if(process.length > 3){
        process = [expr]
    }
    if(process.length > 2 && process.every(e=> e == process[0])){
       return [expr]
    }
    if(recall){
        expr = reduceScope(expr)
    }
    // print(process)
    let other  = getScopeContext(expr), normalize = []
    for(let trend of other){
        if(trend.includes(')(')){
            normalize = normalize.concat(NormalizeScope(trend, true, process,false))
        }
        else
            normalize.push(trend)
    }
    return purify(!list?normalize.map(e=>rengulf(e)):normalize.map(e=>rengulf(e)).join(''))
}
function FactorBrack(expr,callback){
    expr = reduceScope(purify(expr))
    print(expr,'sattrt')
    let curve_exprs = RIssex(expr);
    // if(curve_exprs.some(e=>getScopeContext(e).length)){
    //     print(expr)
    //     return LexicalPhising(expr)
    // }
    let [Serializables,Unserilaizeables,serialFactor] = [[],[],[]]
    for(let curve_expr of curve_exprs){
        if(Serializable(curve_expr)){
            Serializables.push(curve_expr);continue
        }
        else{
            Unserilaizeables.push(curve_expr)
        }
    }
    for(let _render_index in Unserilaizeables){
        let FutureCosmic =  Unserilaizeables[_render_index]
        if(!callback)
             FutureCosmic =  reduceBrackScope(Unserilaizeables[_render_index])
        let chines_pass = getFirstPhase(FutureCosmic)+ChinesRandom(serialFactor)
        serialFactor.push(chines_pass)
       Unserilaizeables[_render_index]  = FutureCosmic
    }let constFactor = (new Factorize(purify(serialFactor.join(''))).SimpleFt(true))
    if(callback&&serialFactor.length>1){
        for(let reduce_freq in Unserilaizeables){
            let frex = Unserilaizeables[reduce_freq]
            var get_first = getFirstPhase(curl(frex));let condition_2 = Divs(get_first,constFactor[0])
            if(get_first&&condition_2){
                frex = frex.replace(get_first,condition_2)
            }
            else{
                throw [get_first,constFactor,serialFactor,Unserilaizeables]
            }
            Unserilaizeables[reduce_freq] = frex
        }
    }
    else{
        constFactor  = false
    }
    // print('chapter',Unserilaizeables,constFactor,serialFactor)
    let y_
    constFactor = constFactor[0]?(constFactor[0]+'').replaceAll('+','').replaceAll('-','').replaceAll(' ',''):''
    if(priority.special.includes(constFactor)){
        constFactor = false
    }
    // print(constFactor,'pigheaded')  
    constFactor = constFactor?constFactor[0] == 1?'':constFactor:constFactor
    if(constFactor){
         y_ =  str(factorize(Serializables.join(''))).replace(NaN,'') + (constFactor[0]?constFactor[0]:'')+engulf(Unserilaizeables.length? '+' + Unserilaizeables.join('+'):'')
    print(y_,'VORICELO;',(constFactor[0]?constFactor[0]:''))}else{
        y_ = factorize(Serializables.join('')) + (Unserilaizeables.length? '+' + Unserilaizeables.join('+'):'')
    }
    print('full_control',purify(y_),get_first,constFactor[0])
    return purify(y_).replaceAll('(-1)','-').replaceAll('(+1)','').replaceAll('(1)','').replaceAll('-1(','-(').replaceAll('+1(','+ (')
    }

function factorize(x){
    let y = x, factorized = []
    x = getScopeContext(x);
    if(!x.length){
        return purify(reduceScope(new Factorize(purify(y)).defineSet(),false,true))
    }
    for(let possibleFactor of x){
       factorized.push(purify(reduceScope(new Factorize(purify(reduceScope(possibleFactor))).defineSet(),false,true)))
    }
    return factorized.map(e=>engulf(e)).join('')

}
function getbrack(lx){
    let index  = 0; let set = [];let clargy = false,_svars ='',real = ''
    while(index < lx.length-1){
        index++;
        if(lx[index] == '('){
            real+='~'
            clargy = true
        }
        if(clargy){
            _svars+=lx[index]
            if(isBalanced(_svars)){clargy = false;set.push(_svars),_svars='s'}
        }
        else(
            real+=lx[index]
        )
    }
    return [real,set]
}
function modernLCM(lists){
    let xNum = Copy(lists)[0].map((e)=>{
         e = priority.toPureState(e)
        return purify(e)?e:'1'
    })
    let yVar = xNum.map((value,index)=>{
        let return_ =  lists[index].replace(value,'')
        return return_?cull(return_):''
    })
    let creed = purify(new Expr(yVar.join('')).format())   
    return (priority.LCM(xNum))+ (creed[0] == '+'? creed.replace('+',''):creed)
}
function Div(expressions){
    // print(expressions,'done')
    if(typeof expressions == 'string'){
        if(!expressions.includes('/')){
            return expressions
        }
        else{
            expressions = [expressions]
        }
    }
    let restruct = [],norms = [];
    function amplify(expr,clasified = false, norm =true){
        // print(expr,'drug')
        function MergeUp(list){
            return RIssex(list.join('/'))
        }
        function balance_expr(expr){
            if(!expr){
                false
            }
            if(!(expr instanceof Array)){
                expr = getScope(simplifyFraction(expr),Expr)
            }
            for(let bridge of expr){
                if(bridge == ''){continue}
                if(!bridge||!isBalanced(bridge)){
                    return false
                }
            }
        return true
        }
        // Solving For all fraction expression that is in form of Expr Object and thta are Serializable Object
        // let selfClone = new Expr(expr),newStruct = {}, listKey = toObject(selfClone.Struct.destruct()[0].split(','))
        // Object.keys(listKey).map(e=>{
        //  throw Div(listKey[e])
        //  print(listKey[e],1205)
        // });
        // // selfClone.Struct = newStruct;expr = selfClone
        // throw expr
        if(norm&&balance_expr(expr)){
            // print('wowowowo-101010')
            let trialSplitMethod = typeof expr == 'string'?expr.split('/'):expr
            let head = trialSplitMethod[0];delete trialSplitMethod[0]
            let mutiple_fract = Refrex(expr);
            // print('claw', mutiple_fract,head,expr)
            if(mutiple_fract.length > 1){
                let fract = [],simple = []
                for(let range_index in mutiple_fract){
                    let classic= Div(mutiple_fract[range_index])
                    if(classic.includes('/')){
                        fract.push(classic)
                    }
                    else{
                        simple.push(clasified)
                    }

                }

                
            }
        //  print(new Expr(trialSplitMethod).Simp().format(),'alagara',head)
            return wrapFract(head,cull(new Expr(trialSplitMethod).Simp().format()))
        }
        if(clasified){
            // print('wowo')
            let classic =typeof expr =='string' ?expr.split('/'):expr;let set = [];let outType = []
            for(let eachType of  classic) {
                if(isBalanced(set.join('/'))&&set.length){
                    outType.push(set);set = []
                }
                //print(set)
                if(eachType){
                      set.push(eachType)
                }
              
            }
            if(isBalanced(set.join('/'))&&set.length){
                outType.push(set);set = []
            }
           // throw outType
            let retyped = [];let x
            for(let curiouse of outType){
                if(curiouse[0].startsWith('(')&&last(curiouse).endsWith(')')){
                    curiouse[0] = curiouse[0].slice(1);
                    curiouse[len(curiouse)-1] = ( x = last(curiouse).split(')'),x.pop(),x.join(')'))
                }
                retyped.push(curiouse)
            }
            let disslove = []
            for(const dissolveFract of retyped) {
                if(dissolveFract.length == '1'){
                    disslove.push(dissolveFract[0]);continue
                }
                if(dissolveFract.length > 2){
                    var _amp =[]
                     _amp = Object.assign(_amp, dissolveFract)
                    //print('1analyzing',amplify(_amp,true),retyped);let runAny =false
                    _amp = amplify(_amp,true)                   
                   //print('analyzing2',dissolveFract,_amp,retyped)
                   disslove.push(destruct(_amp))
                //    print(disslove,'sid383j')
                }
                else{
                    if(dissolveFract.length){
                       // throw dissolveFract
                    //  print('corss',wrapFract(reduceScope(dissolveFract[0]),reduceScope(dissolveFract[1])))
                   disslove.push(getScope(wrapFract(reduceScope(dissolveFract[0]),reduceScope(dissolveFract[1])),Expr))
                }}
            }
            //throw ([outType,retyped,disslove,expr])
        while(disslove instanceof Array && balance_expr(disslove) ) {
           // print('american',disslove)
            disslove = amplify(disslove)
            //print('asiamanericcan',disslove)//rint(disslove)
        }
        //print(disslove,'sense')
        let _disslove = disslove.split('/')
        if(_disslove.length > 1){
            return wrapFract(cull(_disslove[0]),cull(_disslove[1]))
        }
        return disslove 
        }
    }
    function getFracSide(expr,index,side = 'bw'){
        let copy = '',reject = false
        while(side=='bw'?index!==-1:index<expr.length){
            copy+=expr[index]
            if(copy == '/'){copy =''}
            if(reject||(isBalanced(copy)&&'-+'.includes(expr[index+(side=='bw'?-1:+1)])&&expr!='^')){
                if(side!='bw'){
                    return reverse(copy)
                }
               
                if('(-+'.includes(expr[index])&&!'-+'.includes(expr[index-1])){
                    return reverse(copy)}
                reject = true
             }
             if(side=='bw'&&!isBalanced(copy)){

             }
            side=='bw'?index--:index++;
        }
        throw [index]
        return side=='bw'?reverse(copy):copy
    }
    for(let _disslove of expressions){
        // print(_disslove,'serai')
        let redeem_sing = Refrex(_disslove)
        for(let disslove of redeem_sing){
            if(!disslove.includes('/')){
                norms.push(disslove);continue
            }
            restruct.push(amplify(reduceScope(disslove),true))
        }
    }

    let renders = ''
    if(norms.length)
        renders +='+'+norms.join('+')
    if(restruct.length)
        renders +='+'+restruct.join('+')
        // print('done')
    return purify(renders)
}    








export {
                                                                                // DATA VARIABLES
    cb, degree, div, eq, expo, Length,  ms, notation, None, ob, ps,  pw, spec, Symbols,tm,
                                                                                       // Class Objects
    priority,
                                                                                
                                                                                        //A
    aRange, alent, all, any, 
                                                                                        //C
    calc, checkAlpha, checkExit, compare, contain, contany, count, cull, curl, cvars,ChinesRandom,ClearFRactionByFactorization,CompileExpr,Copy,Crocktage,combination,
                                                                                        //D
    destruct,dynamics,DeleteIndex,Div,Divs,
                                                                                        //E
    engulf,ExpandThrough,ExprssionSpliter,EliminateSideFraction,Exprs,exportExprKey,exports,equals,
                                                                                         //F
    factorize,fallback_operator, format,flit,fallback_operators, filter, flatExpr,flatNumberList,flex,flex2,FactorBrack,For,factorial,
                                                                                        //G
    gbracHandler,getDeno,getDomDeno,get_lcm, getFirstPhase,getScope,getScopeContext,get_deno,getbrack,getvars,
                                                                                        //I
    id,index,int,int2,isBalanced,IsIntable, IntAll,IsAlpha,IsNeg,IsNumeric,IsPrefixedExpr,Issex, isFactor,
                                                                                        //L
    last,len,limit,list,LikeTerms,
                                                                                        //M
    max,maxByValue,maxByalpha,Maximize,min,modernLCM,
                                                                                        //N
    neg,nestedlikeTerms,NormalizeScope,
                                                                                         //O
    opposite,order,ordersKey,OrderExpr,outlet,
                                                                                        //P
    pairedElements,pos,print,purify,
                                                                                        //R
    rcount,reduceBrackScope,reduceFractionLevel,reduceScope,rematch,remove,render,rengulf,replace,resloveFraction,reverse,rmvspec,RIssex,Refrex,Reverse,Runimp,
                                                                                        //S
    simpleKey,space,str,Serializable,SortObject,SyncExpr,
                                                                                         //T
    takelent,termType,toExprObject,toObject,tolist,Trackprops,test,
                                                                                         //U 
    unzip,
                                                                                        //V
    vars,VerifyExpression,
                                                                                         //W
    wrapFact,wrapFacts,wrapFract,
                                                                                        //Z
    zindex,zip,zipKey
}




//print(order(['b','a','x','g','h','p'],true,true))
//print(curl('(6xy-17y)'))
//print(deduce('V^(X-y)(n^(x-ty)(6y))','',reside))
//print(cvars(max,['5x-3y','4x-3y']))//
//print(cull('3x^(2y-5x)(5x-y)'))
//print(gbracHandler('(x^((x^(2(x^((x^(2(x-y))(y)))(v^((y)(v)))(x^((x^(2(x-y))(y)))(v^((y)(v)))(x-y))(y(x^((x^(2(x-y))(y)))(v^((y)(v))))))(v^((y)(v)))'))
//print(Crocktage('(7x^(9c-vx)(x-y^(x-56y)))(7x^(9c-vx)(x-y^(x-56y)))'))//(7x^(9c-vx)(x-y^(x-56y))-3sin(x-5y))(7x^(9c-vx)(x-y^(x-56y))-3sin(x-5y))'))//^((v-u)tt)y^(vmui)ytr(u^(5x(u)(v-u)q))'));//7x(x^(v-u)ytr)mx^(x-y)(x-y)(k-y)y^(kox(v-u^(y^(kox(v-u)y(v-7)x)))y)'))
//x^((v-u)t)ytr
///print(Serializable('v^(5xv-5y^(9x-2y))',true))
////print(unlocked('7y(7y(((((((x-v)))))))-9v)-9c'))
//print(unzip(gbracHandler('y^7(x(b-v^(x-y))-y)')))
//let v = '(x^((x^(2(x-y))(y)))(v^((y)(v)))'
//print(GetCurrentScope('6m^(x-56y)(v-9)9'))
//const trends = '('
//print(count(trends, '(') , count(trends, ')'))
//print(castle('6x-5y'))
//print(equals(['1','2','3','4','5'],['1','2','3','4','5']))
//print(termType('9x-5y-(x-v)'))

//print(CompileExpr('(((x((g)3)u)n)v)'),priority.toPureState('+x'))

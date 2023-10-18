import { len, str, equals} from '../essential/index.js'
import { lang } from '../Utilities/lang/index.js'

export function print(...expr) {
    console.log(expr)
}
export class Implement extends lang{
    toPureState(value,limit ='') {
        let x = ''
        for (let indeed of value) {
            if (this.IsAlpha(indeed)||limit.includes(indeed)) {
                break;
            }
            x +=indeed
        }
        return x
    }
    getSign(x,y){
        x = x.replaceAll(' ','')
        for(let char of x){
            if(!(y?y:'+-').includes(char)){
            return y
        }
         y+=char
        }
    return y
    }
    toNumState(value,settle = false,limit) {
        let out = []
        if(value instanceof Array){
            return value.map((element)=>{if(this.IsAlpha(element)){return element}})
        }
        if(!settle)
            return  value.replace(this.toPureState(value),'')
        for(let sub of value){
            if((this.IsNumeric(sub)&&!'-+'.includes(sub))||limit.includes(sub))
                break
            out.push(sub)
        }
        return out
    }
    neg(value) {
        if(value instanceof Array) {
            value  = array.forEach(element => -element);
        }
        return -value
    }
    purify(expr) {
        return expr.replaceAll(' ','').replaceAll("--","+").replaceAll('-+','-').replaceAll('+-','-')
    }
    pos(value) {
        if (!this.Ispositive(value)) {
            return this.neg(value);
        }
    }
    compare(value, compare) {
        let reserve = []
        for (var x in value) {
            reserve.push(value[x].includes(compare) ? true : false);
        }
        return this.any(reserve)
        
    }
    any(x) {
        for (let i in x) {
            if (x[i] == false) {
                return false;
            }
        }
        return true;
    }
    Allcheckers(all, list) {
        let booolian = []
        for (let test in list) {
            console.log(all,list[test])
            booolian.push(this.isPrimeFactor(all, list[test]))
        }
        console.log('MY Value List :',all, "       list:      ",list,"Output:  ",this.any(booolian))
        return any(booolian)
    }
    GetAll(data) {
       let  v = []
        for (let indate in data) {
            let log = Object.keys(data[indate])
            for (let indates in log) {
                if (!v.includes(log[indates])) {
                    v.push(log[indates])                
                }
            }
        }
    return v
    }
    GroupData(x) {
        let _x = {}; let all = [];
        for (let x_ in x) {
            for (let v in x[x_]) {
                if (_x[x[x_][v]] !== undefined) {
                    _x[x[x_][v]] = _x[x[x_][v]] + 1
                }
                else {
                    _x[x[x_][v]] = 1
                }
            }
            all.push(_x); _x = {}
        }
        let alldata = this.GetAll(all); let rem = []; let treeData = []; let allDataVar = {}
        for (let index in alldata) { 
            allDataVar[alldata[index]] = 0;
        } let read = -1;
        while (read < alldata.length) {
            read++;
            var _examine = alldata[read]
            for (let runtru in all) {
                if (allDataVar[_examine] < all[runtru][_examine]) {
                    allDataVar[_examine] = all[runtru][_examine]
                }
            }
        }
        print(allDataVar,'coe')
        return allDataVar
    }
    aRange(v, range,list=null) {
        let i = 1;
        let value=""
        while (!(i > +range)) {
            value += (v + ( (i==range)?"":list?'!':'')); i++;
        }
        return !list?value:value.split('!');
    }
    LCM(x) {
        x = x.map(e => (this.PrimeFactors(e)));
        let reload = this.GroupData(x);
        let key = Object.keys(reload); let new_var = [];
        for (let factors in reload) {    
            new_var =new_var.concat(this.aRange(factors, reload[factors], true))
            console.log(new_var)
        }
        return this.eval(new_var,'*');
    }
    facorize(x) {
        let inVar = []
        let Y = x.map(e => (this.PrimeFactors(e))); let V_ = x.map(e => (this.PrimeFactors(e)));
        let V = x.map(e => (this.PrimeFactors(e))); Object.assign(Y, V);Object.assign(Y,V_)
        console.log(x)
        for (var c in V[0]) {
            for (var f in Y) {
                let check = this.compare(Y, V[0][c])
               console.log(check,V,V[c][0] )
                if (check) {
                    V_  =this.DeleteIndex(V_, V[0][c])
                }
                 console.log("fds'",V_ )
            }
            Y = V_
        }
    return Y}
    reduceFraction(expr,limits = 6,regulate = true){
        //print(expr,'clutch')
        expr = str(expr)
        if(!expr.includes('.')){
            return expr
        }
        if(expr.length > 14){
            expr =expr.slice(0,15)
            if(expr[15] > '4'){
                expr+=1
            }
        }
        let [num,deno] = (expr.replace('.','')+'/'+'1'+('0'.repeat(len(expr.split('.')[1])))).split('/')
    do{
        var x = this.limit(num,deno,limits)
        limits-=1
        x = this.limit(num,deno,limits)
        if(limits==1){
            return x
        }
    }while(x == num+'/'+deno&&regulate)
    return x
    }
    limit(num,deno,max_denominator){
        max_denominator = 10 ** max_denominator
       // print(num,deno,max_denominator)
        if(max_denominator<1){
            throw new Error("max_denominator should be at least 1")}
        if(deno < max_denominator){
            return num+'/'+deno
        }
        let [pascal, parser, switchSate, assemble] = [0, 1, 1, 0]
        let [n, d, k] = [num, deno]
        while(true){
            //print(n,d)
            let a = Math.floor(n/d);let flow = parser+a*assemble;
            if(flow > max_denominator)
                break
            [pascal, parser, switchSate, assemble] = [switchSate, assemble,pascal+a*switchSate, flow]
            const [v,b] = [n,d]
            n = b;d =  v-a*b;
        }
        k = Math.floor((max_denominator-parser)/assemble)
        let bound1 =(pascal+k*switchSate)/(parser+k*assemble)
        let bound2 = (switchSate)/(assemble)
        if(Math.abs(bound2 - (num/deno)) <= Math.abs(bound1 - (num/deno)))
            return ((switchSate) + '/' + (assemble))
        else
            return (pascal+k*switchSate) + '/' + (parser+k*assemble)
    }
    eval(list, mode,real) {
        let x = 0;
        if (mode == '+') {
            for (let index = 0; index < list.length; index++) {
                if (real && x == list.length - 2) {
                    break
                }
                x += +(list[index]);
            } return x
        }
        else if (mode == '*') {
            let x = 1;
            for (let index = 0; index < list.length; index++) {
                if (real && index == list.length ) {
                    break
                }
                x *= +(list[index]);
            } return x
        }
        else if (mode == '/') {
            for (let index = 0; index < list.length; index++) {
                if (real && x == list.length ) {
                    break
                } return x
                x /= +(list[index]);
            }
        }
    }
    PrimeFactors(value){
        
        if(str(+value)  == 'NaN'){
            // throw str(value)
           value = this.purify(value)
           value = +("+-".includes(value)?value+'1':value)
           if(str(value) == 'NaN'){return []}
        }
        //print(+value)
        let v = []; let num = 1;
        if(str(value).startsWith('-')){
            v.push(-1);value = -value
        }
        while (num < value) {
            num++;
            while(value%num == 0){
                value /=num
                v.push(num);
            }
            
        }
        if(value!=1){
            v.push(value);
        }
        return v
    }
    Divisors(last){
        let _last_prime = [], last_div = last;let i =0;let average = last/2;let bridge = false
        if(str(last)[0])bridge = true
        while(bridge?(i>average):(i < average)){
            last_div = last
            bridge ? i--:i++
            last_div = last_div/i
            if(last%i == 0)_last_prime.push(i) 
        }
        return _last_prime
    }
    bestfit(group,regroup = false,ObjectDidFit = null) {
        if(equals(group,[]))return []
       //print(group,'jj')
        let clasified = regroup ? group.map(element => {return this.PrimeFactors(element)}):group, best_fit = []; let treshlod = [],length = group.length-1
      //  print(clasified,'rude....i')
        for (let unknown of clasified[0]) {
           // print('hi')
            for (let index = 1; index < clasified.length; index++) {
               if(ObjectDidFit){
                if(clasified[index].some(e=>new ObjectDidFit(unknown).Simp().OrderExpr().format() == new ObjectDidFit(e).Simp().OrderExpr().format())){
                    best_fit.push(true);continue
                    }
                    best_fit = [];break;
                }

               else{
                 if (clasified[index].includes(unknown)||clasified[index].includes(-unknown)) {
                    best_fit.push(true);continue;
                    }
                    best_fit = []; break
               }
            }
            //print(clasified)
            if (best_fit.length && best_fit.every(e => e == true)) {
                clasified.map(e=>{delete e[e.indexOf(unknown)];return e})
                treshlod.push((unknown))
            }
        }
    return treshlod
    }
}

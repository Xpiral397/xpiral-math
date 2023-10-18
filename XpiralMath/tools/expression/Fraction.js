import {Struct,View} from './types/types.js'
import { Expr, ExprFraction } from './expr.js'

import 
{ 
    print, IsNumeric, purify, flex, reverse,
    engulf, RIssex, isBalanced, None,priority,
    ob,cb,spec, reduceScope,  wrapFract, cull,
    rcount, Refrex, Div, OrderExpr, destruct,
    rengulf, equals, last, toObject,
}
 from '../../essential/functions.js'


 function comp(in_,flag){
    let copier = [];
    
    let _flag = '/-' 
    if(flag == '+'){
        _flag = '/+'
    }
    if(!in_.includes(_flag)){return ['']}
    let indexes = rcount(in_,_flag)
    //print(indexes,_flag,in_)
    for(let erase of indexes){
        erase+=1;let append = '';let dom = erase;let all_ = ''
        while(dom<in_.length){
            if('-/+'.includes(in_[erase+1])&&isBalanced(in_[dom])&&in_[dom]!='^'){
                break}
            all_+=in_[dom];dom++;    
        }
        copier.push(['/'+all_,'/'+engulf(all_)])
            erase++;
    }
    return copier
}

 function doJob(job){
    let copier = []
    for(let lists of (comp(job,'-'))){
        if(lists.length)
            job = job.replaceAll(lists[0],lists[1])
    }
    for(let lists of (comp(job,'+'))){
        if(lists.length)
            job = job.replaceAll(lists[0],lists[1])
    }
    return job
}
export class Fraction{
    constructor(object){
        this.expr = flex(object + ''); this.transformer = []; let index = 0; var character = '';let redo,checkout,onbracket,off;[off,redo,checkout]= [false, false,false]
        var current = { deno: "", num: '', coeff: '' }; this.ExprObject = [],this.Struct = new Struct(None, { mode: Fraction.name, initial: true })
        this.copy = Object.assign(this.Struct)
        while(this.expr.includes('/-')||this.expr.includes('/+')){
           this.expr =  doJob(this.expr).replaceAll('-/','/').replaceAll('+/','/')        }
        while(index <this.expr.length) {
            const innerexpr = this.expr[index]
            if (redo) {
                let exploit = ''
                while ((index < this.expr.length && (((isBalanced(exploit)&&exploit == ob)) || (!isBalanced(exploit)||exploit != ob||exploit != cb))) || onbracket){
                  //  print('vvv', index,exploit
                   // )
                    onbracket = false;
                    exploit += this.expr[index];index++
                    if (isBalanced(exploit) && '+-'.includes(this.expr[index])) { off = true; break};;
                    if(isBalanced(exploit)&&'/^'.includes(this.expr[index])){onbracket=true;}
                }
                current['coeff'] = exploit;;exploit=''
                if (off) {
                   // throw new Error(View(current))
                    this.Struct.put(current,{mode:Fraction.name,state:true});current={}
                }; redo = false;checkout = false;
                //this.Struct.push(current);
            }
            if (innerexpr == '/'&&isBalanced(character)) {
                current['num'] = character;character = ''
                checkout = true; index++; continue;
            }
            if (checkout == true) {
               // print(current,'jjjjjjjj')
                if (this.expr[index] == '('){
                    let exploit = '('; index++;
                    while (index < this.expr.length && ((!isBalanced(exploit)) || onbracket)) {
                        if (onbracket && '-+'.includes(this.expr[index])) {
                              onbracket = false;                  
                        }
                      
                        exploit += this.expr[index]; index++;
                        
                        if (isBalanced(exploit) && '/^'.includes(this.expr[index])) { onbracket = true; }
                    }
                   //  print(current.deno,'ggdenedfseo','hhh')
                    exploit = exploit == ob?'':exploit
                    current['deno'] = (!(spec.includes(exploit)) ? exploit : '') + (current['deno'] ? current['deno'] : '');exploit = ''
                   // print(current.deno,'ggdenedfseo','6666')
                    if (!'+-'.includes(this.expr[index])) {
                        redo = true; checkout = false; continue;   
                    }
                    else {
                        this.Struct.put(current); current={}; index++;
                        continue
                    }

                }
                else {
                    var deno = ''
                    while (index < this.expr.length) {
                        const subcont = this.expr[index]
                        if (deno&&'-+'.includes(subcont) && isBalanced(deno)) {
                            break
                            }
                        if (deno&&isBalanced(deno) && this.expr[index] == '('&& deno[deno.length-1]!='/') {
                            if(deno.replaceAll('+','').replaceAll('-','')){
                                break
                            }
                        }
                        deno += subcont; index++;
                    }
                    current['deno'] = (!(spec.includes(deno))?deno:'') //+ (current['deno'] ? current['deno'] : '');
                    //print(current.deno,'ggdejkkno',this.expr[index])
                    if (!'+-'.includes(this.expr[index])) {
                       // print(deno,'ggdfdffdeno','6666')
                        redo = true; index; continue
                    }
                    else {
                        redo = false; checkout = false;
                        this.Struct.put(current,{functions:(x,y)=>{return engulf(x + '+' + y)}}); index;current = {}
                        continue
                    }

                }
            };checkout = false
            if ('-+'.includes(this.expr[index])) {
                this.Struct.put(current);current = {}
            }
            character += this.expr[index]; index++
            if (isBalanced(character) && '-+'.includes(this.expr[index]) && this.expr[index - 2] != '^') {
                this.ExprObject.push(character);character=''
            }
              // print(character,'ggdenedfseo',this.expr[index+1])
        }          // throw new Error(this.Struct.get(0,0))
          this.Struct.put(current);this.ExprObject.push(character);character=''
        //print(this.Struct.get(0,0),'hhhh')
      
         //throw new Error(this.Struct.get(0,0))
    }
    mul(expr){
        if(expr instanceof Object){
        struct = this.Struct
        }
        if(expr.includes('/')){
            const other = new Fractions(expr).mul(this)
        }
    }
    toFraction(expr){
        let vars,transpiles = '';
        expr = new Expr(expr)
        vars = toObject(expr.at(0)[0].split(','))
        // throw vars
        for (let keys in vars){
            if(vars[keys].length == 0){
            }
            print(vars[[keys][0]],'double',transpiles)
            if(vars[keys][0] == '-'){
                if(transpiles.length || transpiles instanceof Object){
                    transpiles = new ExprFraction(transpiles).mul(`1/${keys}^${cull(vars[keys].slice(1))}`)
                }
                else{ 
                    transpiles = `1/${keys}^${cull(vars[keys].slice(1))}`
                }
            }
            else{
                if(transpiles.length || transpiles instanceof Object){
                    transpiles = new ExprFraction(transpiles).mul(`${keys}^${vars[keys]}`)
                }
                else
                    transpiles = `${keys}^${vars[keys]}`
            }
        }

        return new ExprFraction(transpiles).mul(priority.reduceFraction(expr.at(0)[1])).format()

    }
    destruct(expression,toFraction){
        return destruct(expression,toFraction)
    }
    linearlize(expression){
        const List = RIssex(expression)
        const [ trainData, domainTrain ] = [[],[]] 
        for(let node of List){
            let sequencePoint = rcount(node,'/')
            for(const point of sequencePath){
                let dataSplit = [reverse(point.substring(0,point))`  `, point.substring(point + 1)]
                let index = 0, tempData = '';
                while((index < dataSplit.length) && ( ( tempData.includes('(') || tempData.includes('(')) ? ( !isBalanced(tempData) || !'(+-'.includes(dataSplit[0][index+1]))  : dataSplit[0][index+1].includes('-+') )){
                    tempData += dataSplit[0][index];index++; 
                }
            }
        }
    }
    chaninFraction(chainfrac){
        chainfrac = reduceScope(purify(chainfrac))
    }
    div(_num,_deno,check = false,sin=0){
        // print(_num,_deno)
        if(_num.includes('undefined')){
            throw Error(_num)
        }
        if(_deno == undefined){
            return _num
        }
       // print(_num,_deno,'_denooooooooooooooooooooooooo')
        let [num,deno] = [new Expr(_num).Simp()+'',new Expr(_deno).Simp()+'']
        let [Numvars,Denovars,divs,deep,count] = [Refrex(num).map((e)=>{return e.includes('/')?destruct(Div(e)):e}), Refrex(deno).map((e)=>{return e.includes('/')?Div(e):e}),[],'',0];let reminder = Denovars;let Quoatient = []
        let race =  OrderExpr(Numvars.join('+'),Denovars,true);;let deeps = []
        try{
            Numvars = RIssex(purify(race[0][0].join('+')));deep = race[1]
            //print(Numvars,'specialllllllllllllllllllllllll')
        }
        catch(e){
            return 
        }
        let chronic = []
        let p = false
        while(Numvars.length){
            deeps.push(deep)
            chronic.push(Numvars)
            if(chronic.length == 4){
               // throw [equals(chronic[1], chronic[3])]
                if(equals(chronic[0],chronic[2])&&equals(chronic[1],chronic[3])){
                    return check?[false,wrapFract(cull(_num+''),cull(Denovars.join('')))]:wrapFract(cull(_num+''),cull(Denovars.join('')))
                }
                chronic = []
            }
            //print(Numvars,Denovars,divs,'trends')
            if(Numvars.length == 1 && p ){
                return check?divs.length:[divs,Numvars]
            }
            if(Numvars.length == 1){
                p = true
            }
            count++ 
            let div = destruct(Div(wrapFract(Numvars[0],deep)))
            divs.push(div)
             if(count == 100000){
               throw [Numvars,deep,'giv',div,divs,Denovars]
            }
            //print('glass',divs,Numvars)
            Numvars = Refrex(new Expr(new Expr(div).mul(purify(Denovars.join('+'))).Simp().mul('-1').add(Numvars.join('+'))+'').format())
            if(!Numvars.length)break
            let Numl = OrderExpr(Numvars.join('+'),Denovars,true);
            if(!Numl||!Numl[0]){
                if(Numvars.length)
                  return check?[Numvars.length>0?false:true,divs]:Numvars
            }
           // print(Numl,Numvars,'wisome')
            Numvars = RIssex(purify(Numl[0][0].join('+')));deep = Numl[1]
            if(deeps.includes(deep)&&last(deeps) != deep){
                return check?[Numvars.length>0?false:true,divs]:Numvars
            }
            if(IsNumeric(deep)&&!sin)return check?false:purify(`${divs.join('+')}+${Numvars.join('+')}`)
            if(count==100000){
                throw [Numvars,deep,div,deno,'wow']
            }//throw [Numvars,div,deep]
        }
        //print('louee',check?[true,divs]:divs)
        //print(Numvars,divs,'hhhhh')
        return check?[true,divs]:divs
    }

        
}

function MutipleFraction(num){
    let m = '';
     num.map(e =>{
         m+=e[0]=='/'?e.replace('/',''):e
        }
    )
    return rengulf(purify(new ExprFraction(m).format()))
}

 export function simplifyFraction(expr,whole){
    if(!expr.includes('/')){
        return expr
    }
    expr = reduceScope(expr);let spread = Refrex(expr)
    if(spread.length > 1){

        for( let nodes in spread){
            spread[nodes] = simplifyFraction(spread[nodes])
        }
        expr = spread
    }
    const ObjectMapper = []
    let index = -1, values = ''
    while(index < expr.length){
        index++; 
        if(isBalanced(values) && "+-".includes(expr[index+1])){
            values = ''
        }
        else if(isBalanced(values) && expr[index] == '/'){
            // throw (values)
            const Left = values;values = ''
            let Node = []
            while(index < expr.length){
                // print(values)
                if(isBalanced(values) && expr[index+1] == '/'){
                    Node.push(values);values = '';
                }
                index++;
                values += expr[index]?expr[index]:''
            }
            // print(values,values?[...Node,values]:Node)
                ObjectMapper.push(Left,MutipleFraction( values?[...Node,values]:Node));  
        }
        values += expr[index]?expr[index]:'';

    }
    // print(ObjectMapper,'222')
    return purify(wrapFract(ObjectMapper[0], rengulf(new Expr(ObjectMapper[1]).Simp().format())))
}
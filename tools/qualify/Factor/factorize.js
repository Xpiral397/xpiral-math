import { calc, checkExit, Copy, cull, Divs, engulf, equals, factorize, flatNumberList, flex2, format, getvars,  IsNeg, LikeTerms, list,  maxByValue, min, priority, purify, Refrex,  RIssex,  space, str, tolist, toObject, vars, wrapFact, wrapFacts } from "../../../essential/functions.js";
import { print } from "../../../essential/functions.js";
import { Expr } from "../../expression/expr.js";
import { Fraction } from "../../expression/Fraction.js";
export class Factorize{
    constructor (expr,objects) {
        this.local = new Expr(expr);
        this.expr = expr;
        this.factor = []
        this.vars = list(this.local.peaks,true)
        this.brokenExpr = RIssex(expr)
        this.flag = {range:{every:true,selectElement:{all:true}}}


    }
    self_call(expr){
        return new Factorize(expr)
    }
    div(x,y,is,sin){
        return new Fraction('').div(x,y,is,sin)
    }
    WrtAsumDiff(LinearExpression,precedingExpr,nextExpreSeries){
        let [cramp1,cramp2,div_,constPreced] = [priority.toPureState(precedingExpr),priority.toPureState(nextExpreSeries)]
        let [preceding_var,nextExpreSeriesVar ]= [precedingExpr.replace(cramp1,''),nextExpreSeries.replace(cramp2,'')]
        if(cramp2[0] == '-'){
            cramp1 = str(cramp1 * -1)
        }
        let precedingExprDivsors = priority.Divisors(+(cramp1.replace('+').replaceAll(' ','')))
        for(let testingGround of precedingExprDivsors){
           // throw precedingExpr + '+' +testingGround
            constPreced = this.self_call(purify(precedingExpr + '+' + testingGround)).SimpleFt(true,true)
            div_ = this.div(LinearExpression,constPreced[1],true)
            if(!div_||div_[0]){
                constPreced = this.self_call(purify(precedingExpr + '+' + (eval(testingGround+cramp1)))).SimpleFt(true,true)
                div_ = this.div(LinearExpression,constPreced[1],true)
            }
            if(div_&&div_[0]){
                throw div_
            }
            // print(constPreced)
        }        
    return [priority.Divisors(+cramp1)]  
    }
    SimpleFt(brief = false,sign = false){
       // print(this.expr)
        let req = this.expr 
        if(req.includes('undefined')){
            throw new Error(req)
        }
        let [_vars, includes,spices, requiredVar, valueList, reqExpr] = [vars(req+''), [], Refrex(req+''), [], [], Object.assign(this.local)]
        for(let check of _vars){
            if(spices.every((element)=>element.includes(check))){
                for(let element of reqExpr){
                    let destructkey = element[0].split(',');valueList.push(+element[1])
                    requiredVar.push(+destructkey[destructkey.indexOf(check)+1])
                }
                includes.push(check,min(requiredVar));requiredVar = []
            }
        }
         //hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhlet format = LikeTerms(req,{fliterby:check})
        this.Setpeak = Object.assign(includes);let crops = ''
        let [x,map] = [{},new Expr('')];x[includes] = valueList.length?eval(`${priority.bestfit(valueList,true).join('*')}`)??'':'';map.struct = x;map=map+''
        //throw valueList
        let crab = false
   
        try{
        map  = map?map:eval((crab=true,priority.bestfit((this.brokenExpr).map(e=>priority.toPureState(e)),true).join('*')))}
        catch(e){throw (crab=true,priority.bestfit((this.brokenExpr).map(e=>priority.toPureState(e)),true).join('*'))}
        if(IsNeg(map)&&sign){
            map = +str(map).replace('-','')
        }
        if(brief)
        //throw [valueList,includes,map]
            return [map, flex2(new Fraction('').div(req, map,false,crab??map))]
        
        return wrapFact(map, flex2(new Fraction('').div(req, map,false,crab??map)))
    }
    selectRange(x,mutiples){
        delete mutiples[mutiples.indexOf('undefined')]
        function detRange(x,y,self){
            x = (x+'').replaceAll(' ','');y = y + ''.replaceAll(' ','');
            let fix = new Factorize(purify(x+'+'+y)).SimpleFt(true,true);
            fix[0] = str(fix[0]) === str(NaN) ? '':str(fix[0])
          //  print([x,y]),sign
            let [config,obj] = [(fix[0]??'').replaceAll('+','').replaceAll(' ','').replaceAll('undefined','').length,fix[0].replaceAll('undefined','')]
            return [[(`${fix[1]}`)],[config,obj]]
            }

        let rate = [],trend = []
        for(let beginTest of mutiples){
            if(!beginTest){continue}
            let reduce_freq =  detRange(x,beginTest,this)
            if(reduce_freq[0]&&![undefined,'undefined'].includes(beginTest)){
                rate  = rate.concat(reduce_freq[1])
                trend.push(reduce_freq[0])}
        }
    let process = Object.values(toObject(rate))
    return [process.join('').split('___').length>2,trend]       
    }
    quadratic(expr,filter = false){
        let outlet = this.self_call(expr).SimpleFt(true)
        expr = outlet[1]
        let scramp = RIssex(expr),channel = {};let n = 1
        let _rest = scramp.map(element=>priority.toNumState(element))
        //expr = purify(_a+_b+_c)
        for(let xvars of _rest){
            if(!xvars){channel[3] = scramp[_rest.indexOf(xvars)];continue}
            let mapChannel = LikeTerms(scramp[_rest.indexOf(xvars)],{fliterby:xvars,accuracy:{range:{every:true,command:'2',defaultOperation:(x,y)=>{return x == y}}}})
            if(mapChannel[0]){
                channel[n] = scramp[_rest.indexOf(xvars)]; n = n+2
            }
            else{
                channel[2] = scramp[_rest.indexOf(xvars)]
            }
        }//throw  channel
        if((equals(list(channel,true),['1','2','3']))){
            expr = purify(channel[1]+'+'+channel[2]+'+'+channel[3])
            let scramp = RIssex(expr)
            let [a,b,c] = scramp.map((element)=>
                {
                    let v = priority.toPureState(element);
                     v = v ?'-+'.includes(v)?v+'1':v:'1'
                    //print(v)
                     return v                   
            })
            let root = (b**2 - 4*(a*c))
            if(str(root)[0] == '-'){
                root = -root
            }
            var deno = priority.reduceFraction(((-b) + Math.sqrt(root))/(2 * a))
            var _deno = priority.reduceFraction(( (-b) - Math.sqrt(root))/(2 * a))
            //throw [expr,(-b+Math.sqrt( (b**2 - 4*(a*c)))) /(2 * a)]
            let [_a_,_b_,_c_] = scramp.map(element=>priority.toNumState(element))
            let [x_1,_x_2] = [this.self_call(_a_+'+'+_b_).SimpleFt(true),this.self_call((_c_==''?'1':_c_)+'+'+_b_).SimpleFt(true)]
            if(!new Expr(x_1[1]).sub(_x_2[1]).format()){
                if(!_deno.includes('/'))
                    _deno = _deno + '/'
                if(!deno.includes('/'))
                  deno = deno + '/'
                let xp = RIssex(x_1[1]).map(element=>priority.toNumState(element))
                let xp_2 = [x_1[0]??'1',_x_2[0]??'1'].map(element=>priority.toNumState(element))
                let custom_1 = purify(deno.split('/')[1]+xp[0] + '+' +(-deno.split('/')[0])+(xp[1]??''))
                let custom_2 = purify(_deno.split('/')[1]+xp_2[0] + '+' +(-_deno.split('/')[0])+(xp_2[1]??''))
                return  purify(outlet[0]  +  wrapFacts(custom_1,custom_2)).replaceAll('undefined','')//,[deno,_deno]//,[a,b,c]
                let custom = `(${'x'} + ${deno})(${'x'} + ${_deno})`.replaceAll(' ','').replaceAll('(+','(').replaceAll('-',' - ').replaceAll('+',' + ')
            }
           
        } else{
                let a = {};a[tolist(new Expr(expr).peaks)] = '1'
               return format(a),expr
            } 
        return channel
    }
    createModel(x,varMode = false){
        print(x)
        let save = Copy(x)
        let  fx = new Factorize(x).SimpleFt(true,true), range = '', frquency = [],amplitude = {}, thread = [],clash= RIssex(x);let concert = Copy(clash)[0]
        x = fx[1]
        for(let cek of clash){
            if(range.length){
                return frquency
            }let peace = Copy(concert)[0]
            delete peace[peace.indexOf(cek)]
            let testValue =  this.selectRange(cek,peace)
            //print(testValue[0])
            frquency.push(testValue[1])
            if(!testValue[0]){thread.push(cek);delete clash[clash.indexOf(cek)]; delete concert[concert.indexOf(cek)];continue}
        }

        let done = false
        for(let peaks of frquency){
            if(!done){
                done =true;continue
            }
        }
        let factor  = {}
        // throw frquency
        for(let _fast_check of  frquency){
            // print(factor,'gamer')
            for(let _fast of frquency){
                for(let fast_check of _fast_check){
                    for(let fast of _fast){
                        if(equals(fast,fast_check)||equals(fast.reverse(),fast_check)){
                            if(factor[fast_check]||factor[fast_check.reverse()]){
                                factor[fast_check] = factor[fast_check] + 1 ;continue
                            }
                            factor[fast_check] = 1
                        }
                    }
                }                   
              
            }
        }
        let highest = [], crest= [], c = Copy(factor)[0], h = Copy(x), zero = false

        factor = maxByValue(factor)
        
        if(varMode){
            return factor
        }

        for(let _x in factor){
            if(!x|| +(x.replaceAll(' ','')) == 1){
                break
            }
            do{var div_ = this.div(x,_x,true)
                if(!div_||div_== 1){
                    break
                }
                if(!div_[0]){break}
                highest.push(_x);x = div_[1].join('+')
            } while(div_ instanceof Array? div_[0] == true : div_ == true&&x)
        }
          
    if(!highest.length && fx[0]){
        return purify(fx[0])+engulf(x)
    }
    fx = (fx[0]??'') + highest.map((e)=>{return engulf(e)}).join('')
    return (purify(fx).replace('+(','(') ) +( RIssex(x).length > 1?  engulf(factorize(new Expr(x).format())):'')
}   
    tertiaryFactor(){
       // let props = {gvalue:LikeTerms(this.expr,{})}
    }
polylineSetFactor(getNumOnly = false){
        //Factora Instance Variants 
        let  expr = this.local.OrderExpr({order:true}).format().replaceAll(' ','')
        const NormalFactor = []
        // IsinstanceModel()
        const fx= (expression, input)=>{
            let y=  new Expr(calc(expression, {...input},true)).Simp().format()
            return y
        }
        let majorComponents = RIssex(expr)
        const [firstNode, secondNode] = [majorComponents[0], majorComponents[majorComponents.length-1]]
        
        const [variableNode, _variableNode] = [priority.toNumState(firstNode), priority.toNumState(secondNode)[0]??'1']
        const [value_1,value_2] = [priority.toPureState(firstNode),priority.toPureState(secondNode)]
               
        //Creating Models
        const [model,model2] = [flatNumberList(priority.PrimeFactors(value_1)),flatNumberList(priority.PrimeFactors(value_2))]
        if(getNumOnly) 
            return [model,model2]
        //Instance Variable
        const [varsInstances1,varsInstances2] = [vars(firstNode), vars(secondNode)]
        // throw [model,model2]
        if(varsInstances1.length<2 && varsInstances2.length==0){
            
            //accessing the model factors
            
            //Checking if the last constant(model_2) is constant model
            
            for(const jupiter of model2){
                print(jupiter)
                let keymap = {};keymap[varsInstances1[0]] = jupiter
                let clusterModel = fx(expr,keymap)
                print(clusterModel,keymap,'aaaaaaaaaaaaaaaaaaaaaaaa')
        
                while(clusterModel == 0 || !clusterModel){
                    NormalFactor.push(varsInstances1[0]  + '-' + jupiter)
                    expr = Divs(expr, NormalFactor[NormalFactor.length-1]).join(' ')
                    clusterModel = fx(expr,keymap)
                }
                keymap = {};keymap[varsInstances1[0]] = -jupiter   
                clusterModel = fx(expr,keymap)
                print(clusterModel,keymap,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
                while(clusterModel == 0 || !clusterModel){
                    NormalFactor.push(varsInstances1[0]  + '+' + jupiter)
                    expr = Divs(expr, NormalFactor[NormalFactor.length-1]).join('')
                    clusterModel = fx(expr,keymap)
                    if(clusterModel !=0){
                        break
                    }
                }
            }
            for(const jupiter of model){
                let keymap = {};keymap[varsInstances1[0]] = -jupiter
                let clusterModel = fx(expr,keymap)
                print(clusterModel,jupiter)

                if(clusterModel == 0 ||!clusterModel){
                    throw varsInstances1[0] + -jupiter
                    NormalFactor.push(varsInstances1[0] + -jupiter)
                    expr = Divs(expr, NormalFactor[NormalFactor.length-1])
                }
                else{
                
                    keymap = {};keymap[varsInstances1[0]] = -jupiter   
                    clusterModel = fx(expr,keymap)
                    print(clusterModel,jupiter,keymap)
                    if(clusterModel == 0 || !clusterModel){
                        throw varsInstances1[0] + -jupiter
                        NormalFactor.push(varsInstances1[0] + ' + ' + jupiter)
                        expr = Divs(expr, NormalFactor[NormalFactor.length-1])
                    }
                }
            }
            
        }
        return [NormalFactor,expr]
    }
  skeleton(expression){
        expression = expression || this.expr
         expression = RIssex(expression).map(
            (e)=>{
                return ('+-'.includes(e[0])?e[0]:'') + priority.toNumState(e)
            }
        ).join("+")

        return this.createModel(purify(expression), true)
        
    }
    fleshSkeleton(expression){
        return this.polylineSetFactor(true)
    }
    defineSet(){  
        let remain = this.expr
        let statusTrack = checkExit(this.expr)
        // print(statusTrack)
        if(statusTrack == "-Quads"){
            return (this.factor.length?this.factor.map((e)=>engulf(e)).join():'')+this.quadratic(this.expr)
        }
        if(statusTrack == '--IncompQuads'){
            return this.quadratic(remain)
        }
        if(statusTrack == 'setQuadratic'){
            let x = this.createModel(remain,true)
            remain = this.div(remain,new Expr(x)+'')
            this.factor = this.factor.concat(x)
            return this.factor.length?this.factor.map((e)=>engulf(e)).join():''
        }
        else if(statusTrack == '-sets'){
            let x = this.createModel(remain,true)
            remain = new Expr(x).sub(x).Simp()+''
            this.factor = this.factor.concat(x)
            return this.factor.length?this.factor.map((e)=>engulf(e)).join():''
        }
        else if(statusTrack == '-poly'){
            let x = this.createModel(remain,true)
           // throw x
            return x
            remain = this.div(remain,new Expr(x).Simp()+'')
            this.factor = this.factor.concat(x)
            if(remain instanceof Array? remain.join('') == '+ 1':remain =='+1')
            return (this.factor.length?this.factor.map((e)=>cull(e)).join(''):'')
            else{
                remain = remain instanceof Array? remain.join(''):remain
                if(!this.factor|| this.factor[0] == ' '){
                    let getVars = list(getvars(this.expr))
                    if(getVars.length == 2){
                        let pos = [getVars.join('+'),getVars.join('-')];
                        for(let try_ of pos ){
                            let disc = this.div(this.expr,try_,true)
                            if(disc instanceof Array ? disc[0]: disc != false){
                                throw Error([disc,try_])
                                remain = disc
                            }
                        }
                    }
                }
                return space((this.factor.length?this.factor.map((e)=>cull(e)).join(''):'') +(this.self_call(remain).defineSet()))
            }
        }
        print(statusTrack)
    return this.expr
}

}
//print(new Factorize('-153x^(y-1-x^2+0)xt-35x^(2-x)3y^2-372x^(2-x)').getLocalFactoriztion())
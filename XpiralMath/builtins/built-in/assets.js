// import * as d from 'crypto';
import {ImprorperDestructuringCompilationTimeError, ParenthesisMismatchError} from '../../controller/exceptions.js';
import * as func from '../../essential/index.js'

import {Expr, Factorize} from "../../tools/index.js";

const print=(...x) => console.log(x)
const {cb, ob, eq, div, ms, ps, pw, priority, curl, RIssex, equals, outlet}=func

class Expr2D {
    constructor (expr, config={}) {
        this.expr=expr;
        this.priority=func.priority;
        this.fullySimplified=(() => {const {fullySimplified}=config; return fullySimplified})();
        this.Expr=Expr;
        this.config=config
        this.localFunctions=func
    }
    aRange(range, list) {
        v=this.expr
        var _a;
        return (_a=this.operations)===null||_a===void 0? void 0:_a.aRange(v, range, list);
    }
    cv(x) {
        this.expr=x;
        this.last=lv
    }
    ucv(y) {
        if(this.last) this.expr=this.last
    }
    index() {
        alpha=this.index()
        return this.priority.alpha.indexof(alpha);
    }
    /**
 * @deprecated The expression is only used internally for identifying Expr Object or elements that are null after manipulation or processing; This has been fixed aleady in all function and method responsible for expression maniopulations
    */
    any(x) {
        x=this.expr
        for(let i of x) {
            if(!i) {
                return false;
            }
        }
        return true;
    }

    calc(expr, targets, strict=false) {
        expr=this.expr;
        expr=new Expr(expr).Simp();
        let newExpr=[]

        if(strict) {
            for(let target in targets) {
                targets[target]=new Expr(targets[target]).Simp().format()
                expr=expr.replaceAll(target, this.engulf(targets[target]))
            }
            return new Expr(expr)+''
        }
        for(let target in targets) {
            targets[target]=new Expr(targets[target]).Simp().format()
        }

        for(let _expr_ of expr) {
            let key=new Struct(_expr_[0].split(','), {strict: true}).struct, structKey=new Expr('1')
            for(let _chech_target in key) {
                if(_chech_target=='#')
                    continue
                if(this.checkAlpha(key[_chech_target])) {
                    key[_chech_target]=this.cull(this.cal(key[_chech_target], targets))
                }
                if(targets[_chech_target]) {
                    let x=this.engulf(this.engulf(targets[_chech_target])+'^'+this.engulf(key[_chech_target]))
                    structKey.mul(x.replaceAll(' ', '')).Simp()
                }
                else {
                    structKey.mul(_chech_target+'^'+this.engulf(key[_chech_target])).Simp()
                }
            }
            if(_expr_[1]) {
                if(structKey.format().replaceAll(' ', ''))
                    structKey.mul(str(_expr_[1]))
                else newExpr.push(str(_expr_[1]))
            }
            newExpr.push(structKey.format())
        }
        return new Expr(this.purify(newExpr.join('+'))).format()
    }

    checkAlpha(expr=false) {
        expr=expr? expr:this.expr
        for(let righeous of expr) {
            if(priority.IsAlpha(righeous)) {
                return true
            }
        }
        return false
    }

    checkExit(x=false) {
        x=x? x:this.expr
        let peak=this.max(Object.values(new Expr(x).peaks))
        if(peak>2) {
            return '-poly'
        }
        if(peak==2) {
            let ExprLent=this.RIssex(x).length
            if(ExprLent<5)
                if(ExprLent==3)
                    return '-Quads'
                else if(ExprLent==2)
                    return '--IncompQuads'
                else if(ExprLent>3) {
                    return 'setQuadratic'
                }
            return '-sets'
        }
        else {
            return '-sets'
        }
    }
    /** 
    @deprecated
    */
    compare() {}

    /** 
    @deprecated
    */
    /** 
     @deprecated
     */
    contain() {}
    /** 
        @deprecated
        */
    contany() {}

    count(x, y) {
        if(x instanceof Array) {
            let counter=0
            while(x.includes(y)) {
                delete x[x.indexOf(y)]; counter++;
            }
            return counter
        }
        let counter=0
        while(x.includes(y)) {
            x=x.replace(y, ''); counter++;
        }
        return counter
    }
    cull(x=false) {
        expr=x? x:this.expr
        if(this.RIssex(expr).length>1) {
            return this.engulf(expr)
        }
        return expr
    }
    curl(check, expression=false) {
        expression=expression||this.expr
        if(check&&this.reduceScope(expression)==expression)
            return expression
        if(!(expression.startsWith('(')&&expression.endsWith(')'))) {
            return expression
        }
        return ('$'+expression+'$').replace('$(', '').replace(')$', '')
    }
    cvars(func, ...expr) {
        if(expr[0] instanceof Array) {expr=expr[0]}
        const ContainerVars=[]
        for(const _vars of expr) {
            ContainerVars.push(this.vars(_vars).length)
        }
        return expr.indexOf(expr[ContainerVars.indexOf(func(ContainerVars))])
    }
    ChinesRandom(already) {
        let rand=() => {
            let random=str(Date.now())
            return priority.special[random[this.takelent(Math.random(), random.length)[5]]]
        }
        let random=rand()
        while(already&&already.join().includes(random)) {
            random=rand()
        }
        return random
    }
    ClearFRactionByFactorization() {}

    CompileExpr(x, y=false, loop=false) {
        if(loop) {
            throw ImprorperDestructuringCompilationTimeError(`${x} is very ambigiouse`)
        }
        x=x||this.expr
        let newex='', unique=0; x=x.replaceAll(')b', ')~~~b').replaceAll(')c', ')~~~c').replaceAll(')e', ')~~~e')
            .replaceAll(')f', ')~~~f').replaceAll(')g', ')~~~g')
            .replaceAll(')h', ')~~~h').replaceAll(')i', ')~~~i').replaceAll(')j', ')~~~j')
            .replaceAll(')k', ')~~~k').replaceAll(')l', ')~~~l').replaceAll(')m', ')~~~m')
            .replaceAll(')n', ')~~~n').replaceAll(')o', ')~~~o').replaceAll(')p', ')~~~p')
            .replaceAll(')r', ')~~~r').replaceAll(')s', ')~~~s').replaceAll(')t', ')~~~t')
            .replaceAll(')u', ')~~~u').replaceAll(')v', ')~~~v').replaceAll(')w', ')~~~w')
            .replaceAll(')x', ')~~~x').replaceAll(')y', ')~~~y').replaceAll(')1', ')~~~1')
            .replaceAll(')z', ')~~~z').replaceAll(')5', ')~~~5').replaceAll(')2', ')~~~2')
            .replaceAll(')3', ')~~~3').replaceAll(')6', ')~~~6').replaceAll(')4', ')~~~4')
            .replaceAll(')7', ')~~~7').replaceAll(')8', ')~~~8').replaceAll(')9', ')~~~9')
            .replaceAll(')0', ')~~~0').replaceAll(')q', ')~~~q').replaceAll(')a', ')~~~a')
        //print(x)
        function Localcompiler(x, self) {
            var _compile=''
            for(let next of func.rcount(x, ')^')) {
                var revstr=''; next+=2+(_compile.length? _compile.length-1:0)
                //  print(revstr,'acknowledge',_compile,next)
                while(next!=0&&x[next+1]!='(') {
                    //  print(revstr,'resemble',next,this.rcount(x,')^'),x[next]);
                    revstr+=x[next]
                    if(!x[next+1]) {
                        x=x.replaceAll(')^'+revstr, ')^'+this.rengulf(revstr)); break
                    }
                    if((('-+)('.includes(x[next+1])||self.IsAlpha(x[next+1]))&&self.isBalanced(revstr))||self.isBalanced(revstr)) {
                        _compile=')^'+this.rengulf(revstr)
                        let replace=x.replaceAll(')^'+revstr, ')^'+this.rengulf(revstr))
                        if(self.isBalanced(replace)) {
                            x=replace; break;
                        }
                        else {
                            setTimeout(() => console.table({[next]: [x, `':::RealTimeCompilationError:at:${next}->${x[next]}`]}), ['Object', 'ErrorCode'])
                            x=x.replaceAll(')^'+revstr, '^'+this.rengulf(revstr)); break
                        }

                    }; next++;
                }
            }
            //while(x.includes(')^')){
            //  x = Local(x)
            //}
            return x
        }
        function compiler(x) {
            //while(reduceScope(x)){

            //}
            let unique=0;
            for(let next of func.rcount(x, '~~~')) {
                let _compile=''; let reveIndex=next; let revstr=''; next+=3;
                while(reveIndex!=0&&func.IsAlpha(x[next])) {
                    //print(this.reverse(revstr))
                    if((self.isBalanced(revstr)&&revstr.includes(')'))) {
                        break;
                    }
                    revstr+=x[reveIndex]; reveIndex--;
                }
                // print(this.reverse(revstr),reveIndex,'gogdd',x[reveIndex])
                if(x[reveIndex]=='^') {
                    x=x.replace('~~~', ''); continue
                }
                if(x[next]==')') {
                    next+=1
                }
                while(next<x.length) {
                    _compile+=x[next]
                    if(next+1==x.length)
                        x=x.replaceAll('~~~'+_compile, func.engulf(_compile.replace('~~~', '')))
                    //  print(_compile)
                    if('-+()'.includes(x[next+1])&&func.isBalanced(_compile)&&x[next]!='^') {
                        x=x.replaceAll('~~~'+_compile, func.engulf(_compile.replace('~~~', '')));
                        //  print('change',_compile,x);break
                    }
                    if('~'.includes(x[next+1])&&func.isBalanced(_compile)&&x[next]!='^') {
                        x=x.replaceAll('~~~'+_compile, func.engulf(_compile.replace('~~~', '')));
                        // print('change',_compile,x);break
                    }
                    next++;
                }
            }
            return Localcompiler(x, this)
        }
        function singleCompiler(x, self) {
            let unique=0, newex=''
            while(unique<x.length) {
                if(self.IsAlpha(x[unique-1])&&self.IsNumeric(x[unique])&&!'-+'.includes(x[unique])) {
                    let _compile=''
                    while(unique<x.length) {
                        _compile+=x[unique]
                        //  print(_compile,unique,'inxscope',x)
                        if('-+()'.includes(x[unique+1])&&self.isBalanced(_compile)&&x[unique]!='^') {
                            let save=singleCompiler(_compile)
                            //   print('liialai',save)
                            newex+=self.engulf(save); unique++; break
                        } unique++;
                    }
                }
                if(x[unique]) {
                    newex+=x[unique]; unique++;
                }
                else {
                    //  print(this.engulf(newex,true)+(x.replace(newex,'')),'glortuutu')
                    return self.CompileExpr(self.engulf(newex, true)+(x.replace(newex, '')))
                }
            }
            return newex
        }
        while(x.includes('~')) {
            x=singleCompiler(compiler(x), func)
        }
        return singleCompiler(Localcompiler(x, this), func)
    }

    Copy(...list) {
        let CopyObject=[]; list.map((element) => CopyObject.push(element))
        return CopyObject
    }
    /** @deprecated   */
    Crocktage() {}

    destruct(e) {
        expression=e||this.expr
        // print(expression)
        function Numler(expr) {
            if(!expr||['-', '+'].includes(expr)) {
                return expr+'1'
            }
            return expr
        }
        if(this.count(expression, '/')<2) {
            let [num, deno]=expression.replaceAll(' ', '').split('/');
            if(this.RIssex(this.reduceScope(deno)).length>1) {
                return `${num}/(${deno})^(-1)`
            }
            let [coeff, vars]=[priority.toPureState(num), num.replace(priority.toPureState(num), '')]
            let [coeff_2, vars_2]=[priority.toPureState(deno), deno.replace(priority.toPureState(deno), '')]
            // print(num,'esay',expression,coeff_2)
            let [Coeff, Vars]=[(Numler(coeff))/Numler(coeff_2), [Object.keys(new Expr(num).struct)[0].split(','), Object.keys(new Expr(deno).struct)[0].split(',')]]
            let [numv, denov]=[Vars[0], this.For(Vars[1], (element, index) => {
                if(index%2==1) {
                    return '(-'+element+')'
                }
                return element
            })]
            //print([coeff,coeff_2,'visible',Coeff,numv,denov],exportExprKey(numv.concat(denov),false,true))
            let _numv=new Expr(exportExprKey(numv.concat(denov), false, true)).mul(''+(Coeff? Coeff:'1')).Simp();
            return _numv+''
        }
    }
    Div(expression) {
        expression=expression||this.expr
        function Div(expressions) {
            // print(expressions,'done')
            if(typeof expressions=='string') {
                if(!expressions.includes('/')) {
                    return expressions
                }
                else {
                    expressions=[expressions]
                }
            }
            let restruct=[], norms=[];
            function amplify(expr, clasified=false, norm=true) {
                // print(expr,'drug')
                function MergeUp(list) {
                    return this.RIssex(list.join('/'))
                }
                function balance_expr(expr) {
                    if(!expr) {
                        false
                    }
                    if(!(expr instanceof Array)) {
                        expr=this.getScope(this.simplifyFraction(expr), Expr)
                    }
                    for(let bridge of expr) {
                        if(bridge=='') {continue}
                        if(!bridge||!this.isBalanced(bridge)) {
                            return false
                        }
                    }
                    return true
                }
                // Solving For all fraction expression that is in form of Expr Object and thta are this.Serializable Object
                // let selfClone = new Expr(expr),newStruct = {}, listKey = toObject(selfClone.Struct.destruct()[0].split(','))
                // Object.keys(listKey).map(e=>{
                //  throw Div(listKey[e])
                //  print(listKey[e],1205)
                // });
                // // selfClone.Struct = newStruct;expr = selfClone
                // throw expr
                if(norm&&balance_expr(expr)) {
                    // print('wowowowo-101010')
                    let trialSplitMethod=typeof expr=='string'? expr.split('/'):expr
                    let head=trialSplitMethod[0]; delete trialSplitMethod[0]
                    let mutiple_fract=Refrex(expr);
                    // print('claw', mutiple_fract,head,expr)
                    if(mutiple_fract.length>1) {
                        let fract=[], simple=[]
                        for(let range_index in mutiple_fract) {
                            let classic=Div(mutiple_fract[range_index])
                            if(classic.includes('/')) {
                                fract.push(classic)
                            }
                            else {
                                simple.push(clasified)
                            }

                        }


                    }
                    //  print(new Expr(trialSplitMethod).Simp().format(),'alagara',head)
                    return this.wrapFract(head, this.cull(new Expr(trialSplitMethod).Simp().format()))
                }
                if(clasified) {
                    // print('wowo')
                    let classic=typeof expr=='string'? expr.split('/'):expr; let set=[]; let outType=[]
                    for(let eachType of classic) {
                        if(this.isBalanced(set.join('/'))&&set.length) {
                            outType.push(set); set=[]
                        }
                        //print(set)
                        if(eachType) {
                            set.push(eachType)
                        }

                    }
                    if(this.isBalanced(set.join('/'))&&set.length) {
                        outType.push(set); set=[]
                    }
                    // throw outType
                    let retyped=[]; let x
                    for(let curiouse of outType) {
                        if(curiouse[0].startsWith('(')&&this.last(curiouse).endsWith(')')) {
                            curiouse[0]=curiouse[0].slice(1);
                            curiouse[this.len(curiouse)-1]=(x=this.last(curiouse).split(')'), x.pop(), x.join(')'))
                        }
                        retyped.push(curiouse)
                    }
                    let disslove=[]
                    for(const dissolveFract of retyped) {
                        if(dissolveFract.length=='1') {
                            disslove.push(dissolveFract[0]); continue
                        }
                        if(dissolveFract.length>2) {
                            var _amp=[]
                            _amp=Object.assign(_amp, dissolveFract)
                            //print('1analyzing',amplify(_amp,true),retyped);let runAny =false
                            _amp=amplify(_amp, true)
                            //print('analyzing2',dissolveFract,_amp,retyped)
                            disslove.push(destruct(_amp))
                            //    print(disslove,'sid383j')
                        }
                        else {
                            if(dissolveFract.length) {
                                // throw dissolveFract
                                //  print('corss',this.wrapFract(this.reduceScope(dissolveFract[0]),this.reduceScope(dissolveFract[1])))
                                disslove.push(this.getScope(this.wrapFract(this.reduceScope(dissolveFract[0]), this.reduceScope(dissolveFract[1])), Expr))
                            }
                        }
                    }
                    //throw ([outType,retyped,disslove,expr])
                    while(disslove instanceof Array&&balance_expr(disslove)) {
                        // print('american',disslove)
                        disslove=amplify(disslove)
                        //print('asiamanericcan',disslove)//rint(disslove)
                    }
                    //print(disslove,'sense')
                    let _disslove=disslove.split('/')
                    if(_disslove.length>1) {
                        return this.wrapFract(this.cull(_disslove[0]), this.cull(_disslove[1]))
                    }
                    return disslove
                }
            }
        }
    }

    Divs(x, y) {
        return new Fraction(x).div(x, y)
    }

    engulf(expr, num=1) {
        return ('('.repeat(num)+expr+')'.repeat(num)).replaceAll('()', '');
    }

    ExpandThrough(expr) {
        var Outer=''
        let prefix=IsPrefixedExpr(expr)
        if(prefix[0]) {
            Outer=prefix[1];
            expr=NormalizeScope(Outer)
        }
    }
    equals(a, b) {
        if(a==b) {
            return true
        }
        else if(a.length!=b.length) {
            return false
        }
        if(a instanceof Array) {
            for(let kind in b) {
                if(typeof b[kind]==typeof a[kind]&&(b[kind]!=a[kind])) {
                    if(a[kind] instanceof Array&&b[kind] instanceof Array) {
                        if(!equals(a[kind], b[kind])) {
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
    exportExprKey(list, join, lent=false) {
        let on=false
        for(let risk of list) {
            if(on) {
                list[list.indexOf(risk)]=this.reduceScope(risk);
            }
            on=!on
        }
        const key={}; key[list]='1'
        let fx=new Expr(''); fx['struct']=key
        return fx.format()
    }
    /** @deprecated */
    Exprs() {}

    exports(value, value_2) {
        value=value? value:'1'; value_2=value_2? value_2:'1'
        value=pos(value); value_2=pos(value_2)
        if(this.Issex(value, true)||this.Issex(value_2, true)) {
            if(value_2.startsWith('-')||value_2.startsWith('+')) {
                return this.engulf(value+value_2)
            }
            return this.engulf(value+"+"+value_2)
        }
        try {
            value_2=value_2.replace(' ', '')
            if('*'.includes(value_2)) {value_2=value_2.replace('*', '*1')} else if('*-'.includes(value_2)) {value_2=value_2.replace('*-', '*-1')} else if('*+'.includes(value_2)) {value_2=value_2.replace('*+', '*1')}
            //print(value, value_2, 'yyyyyyyyyyyyyyyyyyyyyyyyyy')

            //  print('nerd',eval(`${value.replace(' ','')}${value_2.replace(' ','').startsWith('*')||value_2.replace(' ','').startsWith('+')?'':'+'}${value_2.replace(' ','')}`))
            let x=eval(`${value.replace(' ', '')}${value_2.replace(' ', '').startsWith('*')||value_2.replace(' ', '').startsWith('+')? '':'+'}${value_2.replace(' ', '')}`.replaceAll('+*', '*'))
            if(str(x).includes('e')) {
                x=BigInt(x).toString()
            }
            return x
        }
        catch(e) {
            if(value_2.startsWith('-')||value_2.startsWith('+')) {
                return value+value_2
            }
            return value+"+"+value_2
        }
    }

    ExprssionSpliter(innerExpr, rendinering=false) {

        if(rendinering&&innerExpr.endsWith('^')) {
            innerExpr=this.reverse(innerExpr); let on=false; let brack=''; let onalpha=false;
            for(let read of innerExpr) {
                if(read==')') {
                    on=true
                }
                if(on) {
                    brack+=read
                    if(this.isBalanced(brack)) {
                        return this.reverse(brack)+'^'
                    }; continue
                }
                //print(read,'complete')
                if(priority.IsAlpha(read)) {
                    return read+'^'
                }
            }
        }
        else if(rendinering) {return innerExpr}
        else {
            let x=[]; let y=true; let result=''
            if(innerExpr.includes('(')) {
                let x_=priority.toPureState(innerExpr.replaceAll(' ', ''), '(')
                let y_=priority.toNumState(innerExpr.replaceAll(' ', ''), true, '(')
                if(x_&&!'+-'.includes(x_)) {
                    //throw new Error([x_,innerExpr])
                    return x_
                }
                if(y_.length>1) {
                    return y_[0]+y_[1]
                }
                return innerExpr
            }
            if(priority.toPureState(innerExpr)&&!'-+'.includes(priority.toPureState(innerExpr))) {
                return priority.toPureState(innerExpr)
            }
            for(let r of innerExpr) {
                result+=r;
                if(priority.IsAlpha(r)) {
                    // print(r,'golbe')
                    //throw new TypeError(r)
                    if(result.includes('+')||result.includes('^')||result.includes('(')||result.includes(')')||result.includes('-')) {
                        return this.engulf(result);
                    }
                    return result
                }
            }
            return result
        }
    }
    EliminateSideFraction() {}


    factorize(x) {
        x=x||this.expr
        let y=x, factorized=[]
        x=this.getScopeContext(x);
        if(!x.length) {
            return this.purify(this.reduceScope(new Factorize(this.purify(y)).defineSet(), false, true))
        }
        for(let possibleFactor of x) {
            factorized.push(this.purify(this.reduceScope(new Factorize(this.purify(this.reduceScope(possibleFactor))).defineSet(), false, true)))
        }
        return factorized.map(e => this.engulf(e)).join('')

    }
    fallback_operator(argument_1, argument_2, possibleOperation) {
        argument_1=+argument_1!=NaN? +argument_1:argument_1
        argument_2=+argument_2!=NaN? +argument_2:argument_2
        switch(possibleOperation) {
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
                return argument_1<=argument_2
            case '!>=':
                return !(argument_1>=argument_2)
            case '!<=':
                return !(argument_1<=argument_2)
            case '!=':
                return argument_1!=argument_2
        }
        throw [possibleOperation, 'lll']
        return '-uncased-'
    }
    format(x=false) {
        let collections=''; let mapper=''; let precollection=''; let not=-1;; let examine=[]
        for(let decorator in x) {
            not++;
            let decorators=new Struct(decorator.split(','), {strict: 'strict', Functions: (left, right) => {let rest=exports(left, right); if((''+rest).includes('(')) {let fx=new Expr(rest).Simp()+''; return this.engulf(fx)} else {return rest} }}); decorators=decorators.doForValue((_expr) => {_expr=_expr+''; if(this.RIssex(curl(_expr, true)).length<2) {return flit(_expr)}; _expr=_expr.includes('(')? (new Expr(_expr).Simp()+''):_expr; let level=(this.RIssex(_expr).length>1? this.engulf(_expr):_expr); return level}).Domerit((key, value) => {return value==0||value=='(0)'||false}).destruct(); decorators=ordersKey(decorators); not++
            for(let mappers in decorators[0]) {
                if("@#".includes(decorators[0][mappers])) {
                    continue
                }
                let wreck=(decorators[1][mappers]=='1')? "":(decorators[1][mappers]? '^'+decorators[1][mappers]:'')
                mapper+=decorators[0][mappers]+wreck
            }
            precollection=(" "+(['-1', '+1', "+0", "-0"].includes(x)? rematch(x):x[decorator])); precollection=mapper&&precollection.replaceAll(' ', '')=='1'? '':precollection
            if(!'-+'.includes(precollection.replaceAll(' ', '')[0])&&not!=0) {
                precollection='+'+precollection
            }
            examine.push(precollection+mapper)
            //print(precollection,'preValueprsenttin',mapper)
            if(mapper=='') {
                collections+=("-+".includes(collections.replaceAll(' ', '')[0])? '':'+')+precollection+''; precollection=''; mapper=''
            }
            else if('+-'.includes(mapper.replaceAll(' ', '')[0])&&!collections.replaceAll(' ', '')[collections.replaceAll(' ', '').length-1]=='@') {
                collections+=("-+".includes(collections.replaceAll(' ', '')[0])? '':'+')+precollection.replace('+', '')+mapper; precollection=''; mapper=''
            }
            else {
                precollection=precollection==' '? ' +':precollection
                collections+=("-+".includes(collections.replaceAll(' ', '').replaceAll('~', '')[collections.length-1])? '':'+')+precollection+mapper; precollection=''; mapper=''
            }
            collections=collections.replace('^-1', "&")
            //print(collections,'redflag')
        }
        collections=(collections).replaceAll('+ -', '-').replaceAll(',', '').replaceAll('-', " - ").replaceAll('+', " + ").replaceAll('((', "( (").replaceAll('))', ") )").replaceAll(')', " )").replaceAll('(', "( ")

        if(collections.replaceAll(' ', '').startsWith('-')) {
            collections=collections.replace(' - ', '-')
        }
        else if(collections.replaceAll(' ', '').startsWith('+')) {
            collections=collections.replace(' + ', '')

        }
        return (this.RIssex(collections, true).join(' ').replaceAll('&', "^-1").replaceAll('^ -', '^-').replaceAll('^ +', '^')).replaceAll('^ ', '^')
    }
    flit(x) {
        x=x||this.expr
        let copy=x; x=alent(copy);//x.replace('-','').replace('+','').replace(' ','')  
        if(this.IsNumeric(copy)) {
            // print(copy,'i say')
            return copy
        }
        if(priority.toPureState(copy)&&x) {
            while(this.reduceScope(copy, true)) {
                // print(this.reduceScope(copy,true))
                copy=this.reduceScope(copy)
            }
            return this.engulf(copy)
        }
        if(alent(copy)>2) {
            return this.engulf(copy)
        }
        else {
            return copy
        }
    }

    filter(x) {
        try {
            return this.purify(x).replace('-(', '-1(').replace('+(', '+1(')
        }
        catch(e) {throw new Error([x, e])}
    }

    flatExpr(x) {
        let newList=[]
        for(let split of x) {
            for(let brokenExpr of this.RIssex(split)) {
                newList.push(brokenExpr)
            }
        }
        //print(x,'agama',newList)
        return newList
    }
    flatNumberList(x, modelRange=[]) {
        let occurrences={}
        let assembleList=[]
        for(let codeOcuurence of x) {
            if(occurrences[codeOcuurence]) {
                occurrences[codeOcuurence]=occurrences[codeOcuurence]+1;
                continue;
            }
            occurrences[codeOcuurence]=1
        }
        //throw occurrences
        for(let anode in occurrences) {
            for(let i=1; i<=occurrences[anode]; i++) {
                if(i==0) {continue}
                assembleList.push(anode**i)
            }
        }
        let probsPermutate=[]
        for(let reason_type in assembleList) {
            for(let curiouse_subset in assembleList) {
                if(reason_type==curiouse_subset) {
                    if(!probsPermutate.includes(assembleList[reason_type]))
                        probsPermutate.push(assembleList[reason_type])
                    continue
                }
                let regulate=assembleList[reason_type]*assembleList[curiouse_subset]
                if(regulate<=modelRange[1]) {
                    if(!probsPermutate.includes(regulate))
                        probsPermutate.push(regulate)
                }
            }
        }

        return probsPermutate
    }
    flex(x) {
        x=x||this.expr;
        return this.purify(x)

    }
    flex2(x) {
        x=x||this.expr
        x=x instanceof Array? x.join('+'):x
        return this.purify(x).replaceAll('+', ' + ').replaceAll('-', ' - ')
    }


    FactorBrack(expr, callback) {
        expr=this.reduceScope(this.purify(expr||this.expr))
        print(expr, 'sattrt')
        let curve_exprs=this.RIssex(expr);
        // if(curve_exprs.some(e=>getScopeContext(e).length)){
        //     print(expr)
        //     return LexicalPhising(expr)
        // }
        let [Serializables, Unserilaizeables, serialFactor]=[[], [], []]
        for(let curve_expr of curve_exprs) {
            if(this.Serializable(curve_expr)) {
                Serializables.push(curve_expr); continue
            }
            else {
                Unserilaizeables.push(curve_expr)
            }
        }
        for(let _render_index in Unserilaizeables) {
            let FutureCosmic=Unserilaizeables[_render_index]
            if(!callback)
                FutureCosmic=this.reduceBrackScope(Unserilaizeables[_render_index])
            let chines_pass=func.getFirstPhase(FutureCosmic)+ChinesRandom(serialFactor)
            serialFactor.push(chines_pass)
            Unserilaizeables[_render_index]=FutureCosmic
        } let constFactor=(new Factorize(this.purify(serialFactor.join(''))).SimpleFt(true))
        if(callback&&serialFactor.length>1) {
            for(let reduce_freq in Unserilaizeables) {
                let frex=Unserilaizeables[reduce_freq]
                var get_first=this.getFirstPhase(curl(frex)); let condition_2=Divs(get_first, constFactor[0])
                if(get_first&&condition_2) {
                    frex=frex.replace(get_first, condition_2)
                }
                else {
                    throw [get_first, constFactor, serialFactor, Unserilaizeables]
                }
                Unserilaizeables[reduce_freq]=frex
            }
        }
        else {
            constFactor=false
        }
        // print('chapter',Unserilaizeables,constFactor,serialFactor)
        let y_
        constFactor=constFactor[0]? (constFactor[0]+'').replaceAll('+', '').replaceAll('-', '').replaceAll(' ', ''):''
        if(priority.special.includes(constFactor)) {
            constFactor=false
        }
        // print(constFactor,'pigheaded')  
        constFactor=constFactor? constFactor[0]==1? '':constFactor:constFactor
        if(constFactor) {
            y_=str(this.factorize(Serializables.join(''))).replace(NaN, '')+(constFactor[0]? constFactor[0]:'')+this.engulf(Unserilaizeables.length? '+'+Unserilaizeables.join('+'):'')
            print(y_, 'VORICELO;', (constFactor[0]? constFactor[0]:''))
        } else {
            y_=this.factorize(Serializables.join(''))+(Unserilaizeables.length? '+'+Unserilaizeables.join('+'):'')
        }
        print('full_control', this.purify(y_), get_first, constFactor[0])
        return this.purify(y_).replaceAll('(-1)', '-').replaceAll('(+1)', '').replaceAll('(1)', '').replaceAll('-1(', '-(').replaceAll('+1(', '+ (')
    }
    For(x, excute) {
        if(x instanceof Array) {
            for(let index in x) {
                x[index]=excute(x[index], index);
            }
        }
        return x
    }
    /** @deprecated */
    gbracHandler() {}

    getDeno(frexpr) {
        frexpr=resloveFraction(frexpr)
        return [frexpr, frexpr.split('/')[1]]
    }

    getDomDeno(expr) {
        let possible_denominator=getExprDenos(expr).map(
            (expr) => {
                if(this.RIssex(expr).length>12) {
                    return expr
                }
                else {
                    return this.getScopeContext(this.factorize(expr))
                }
            }
        )
        return
    }

    get_lcm(expr) {
        let denos=get_deno(expr)
        const booked=[]
        const factorize=priority.bestfit(denos, false)
        let lcm=denos
            .map((element) => {
                return element=element.filter(
                    innerElement => !factorize
                        .includes(innerElement)
                ).join('')

            }
            )
        lcm=lcm.filter(e => {
            let countBooked=this.count(lcm, e);
            if(countBooked>1&&booked.includes(e)) {
                return false
            }
            else if(countBooked>1) {
                booked.push(e)
                return true
            }
            else if(countBooked>1&&!booked.includes(e)) {
                throw new Error('AmbiguousError: Expr is inconsistent')
            }
            else {
                return true
            }
        })
            .map(
                (k) => {
                    return this.this.rengulf(k)
                }
            )
            .join('')
        return lcm.length? lcm:factorize.map(e => this.rengulf(e)).join('')
    }

    getFirstPhase(x) {
        x=x||this.expr
        let phase_1='', index=-1
        while(index<x.length-1) {
            index++;
            phase_1+=x[index]
            if(x[index+1]=='('&&this.last(phase_1)!='^') {
                break;
            }
        }
        return phase_1
    }
    getScope(trriger, method, sketech=false) {
        print(trriger)
        trriger=trriger||this.expr
        trriger=this.CompileExpr(this.filter(trriger)), this.VerifyExpression(trriger);
        let [EventTargets, EventTargeter, Eventrriger]=[[], {}, []]; let lavage=false, cast=true;
        if(this.getScopeContext(trriger).length==1) {
            lavage=true
        }
        for(let x of this.RIssex(lavage? curl(trriger):trriger)) {
            if(!this.Serializable(x)) {
                let starter='', index=0
                while(x.length>index&&!x.startsWith('(')) {
                    starter+=x[index];
                    if(x[index+1]==ob&&x[index]!=pw&&!(starter.includes('^(')&&!this.isBalanced(starter))) {
                        break;
                    }
                    index++
                }
                x=x.replace(starter, '')
                if(x.startsWith('(')) {
                    if(this.getScopeContext(x).length==1) {
                        x=curl(x)
                    }
                    if(RIssex(x).length==1) {
                        var [one, trigerrAll]=[false, this.getScopeContext(x)];
                    }
                    else {
                        var [one, trigerrAll]=[false, this.getScopeContext(RIssex(x))];
                    }
                    let level=new Expr(starter??(one=true, '1')); let all=trigerrAll.every(
                        (current) => {
                            if(current.startsWith('(')) {
                                return true
                            }
                            else if(!'-+'.includes(current.replaceAll(' ', '')[0])) {
                                return true
                            }
                            return false
                        }
                    )
                    let Merge=[], unknownIndexObject=[], __cache__=[]; let filter=[]
                    for(unknownIndexObject in trigerrAll) {
                        if(trigerrAll[unknownIndexObject].startsWith('^(')) {
                            Merge.push(__cache__.pop(), trigerrAll[unknownIndexObject])
                            if(!'-+'.includes(Merge[Merge.length-2])) {
                                for(let coeff of this.reverse(__cache__, true)) {
                                    if("+-".includes(coeff[0])) {
                                        Merge.push(__cache__.pop()+Symbols); break;
                                    }
                                    Merge.push(__cache__.pop()+Symbols)
                                }
                            }
                        }
                        else {
                            if(Merge.length) {
                                let scammer=this.SyncExpr(Merge, method, ':'), scopeCoeff=scammer[0].split(':')
                                if(typeof scammer=='string') {
                                    __cache__.push(scammer)
                                }
                                else {
                                    EventTargeter["deno"]=scopeCoeff[0]+'^'+this.engulf((new method(scopeCoeff[1]).neg().Simp().format()))
                                    EventTargeter["num"]='1'
                                    EventTargeter["coeff"]=new Expr(EventTargeter).Simp().format()
                                    Eventrriger.push(scammer[1]), EventTargeter={}, Merge=[]
                                }
                            }
                            __cache__.push(trigerrAll[unknownIndexObject])
                        }
                    }
                    if(Merge.length) {
                        let scammer=this.SyncExpr(Merge.map((e) => {if(e.startsWith('^')) {return e.replace('^', '')}; return e}), method, ':'), scopeCoeff=scammer[0].split(':')
                        if(scopeCoeff.length==1) {__cache__.push(scammer, '')}
                        else {
                            EventTargeter["deno"]=scopeCoeff[0]+'^'+this.engulf((new method(scopeCoeff[1]).neg().Simp().format()))
                            EventTargeter["num"]='1'
                            EventTargeter["coeff"]=new Expr(scammer[1]).Simp().format()
                            Merge=[]; Eventrriger.push(EventTargeter); EventTargeter={}
                            throw new Error(View(Eventrriger))
                        }
                    }
                    for(const Eventrrigers of Eventrriger) {
                        throw ''
                        Eventrriger[Eventrriger.indexOf(Eventrrigers)]=new UnifySyncExpr(new Struct(Eventrrigers, {mode: 'Fraction'}), method)
                    }
                    trigerrAll=__cache__
                    let concurent=[], handler=(trigerrAll.length<2&&!x.includes(')^(')? (all=false, this.RIssex(x)):trigerrAll).map((types) => {
                        if(equals(trigerrAll, this.RIssex(x))) {
                            all=false;
                        }
                        while(!this.Serializable(types)) {
                            if(types=='') {break}
                            if(types.includes('/')) {
                                types=destruct(Div(types))
                            }
                            if(types.includes(')^(')) {
                            }
                            let [_types, newEvents]=this.getScope(types, method, true)
                            if(newEvents.length) {
                            }
                            types=_types; Eventrriger=(newEvents.length? Eventrriger.concat(newEvents):Eventrriger)
                            for(let _conc_ of concurent) {
                                for(let _index in Eventrriger) {
                                    Eventrriger[_index]=Eventrriger[_index].mul(_conc_)
                                }
                            };
                            if(Eventrriger.length) {
                                concurent=[]
                            }
                        };
                        concurent.push(types)
                        return (types==1&&one? '':types)
                    })
                    if(handler==0) {
                    }; let _do=true;
                    for(let types of handler) {
                        if(!types) {continue;}
                        if(all) {
                            if(types.includes('/')) {
                                level=Expr(this.simplifyFraction(level.format(), types))
                            }
                            else {
                                level=level.mul(types)
                            }
                            continue
                        }
                        else {
                            let mayskip=types.includes('/')? this.simplifyFraction(level.format(), types):(level.mul(types)+'');
                            mayskip=!types&&['+1', '1'].includes(mayskip)? '':mayskip
                            EventTargets.push(mayskip); level=new Expr(starter); cast=false
                        }
                    }
                    for(const events in Eventrriger) {
                        Eventrriger[events]=Eventrriger[events].mul(starter)
                    }
                    let roam=(level+'')=='1'&&one? '':level.format();
                    if(roam&&cast) {
                        if(!handler.length) {roam=''}
                        else {EventTargets.push(roam)}
                    }
                }
                else {
                    if(!x&&starter) {
                        EventTargets.push(starter)
                    }
                    else {
                        EventTargets.push(x)
                    }

                }
            }
            else {
                EventTargets.push(x)
            }
        }
        if(sketech)
            return [outlet(EventTargets).join(''), Eventrriger]
        return outlet(EventTargets).join('')
    }
    getScopeContext(x, vars) {
        let sets=vars? [vars]:[], race=-1, scan='';
        while(race<x.length) {
            race++;
            scan+=x[race]
            if((scan.includes('(')&&this.isBalanced(scan))||(this.isBalanced(scan)&&(scan.startsWith('^(')))) {
                // print('cornnnnect',scan,sets,x)
                if(')('==scan) {
                    scan=''; continue;
                }
                sets.push(scan); scan=''
            }
        }
        //throw new Error([sets,'7',scan])
        return sets
    }
    get_deno(expr) {
        expr=this.Refrex(expr); let get=[]
        for(let input of expr) {
            print(expr, 'get')
            get.push(this.getScopeContext(this.getDeno(input)[1]));
        }
        return get.filter(e => e!='1')
    }
    getvars(exploit, cost) {
        exploit=new Expr(exploit); let vars='', on=true, save=''
        for(let rig of exploit) {
            rig=rig[0].split(',')
            for(let rigs of rig) {
                if(on) {
                    vars+=cost? cost(rigs, save):rigs
                }
                else save=rigs

                on=!on
            }
            return vars
        }
    }
    isBalanced(expr) {
        expr=expr||this.expr
        if(this.count(expr, cb)==this.count(expr, ob)) {return true}
        return false
    }
    IsIntable(value) {
        value=value||this.value
        return !priority.contain(value, `${priority.alpha}(-+\%*^)`);
    }
    IsPrefixedExpr(expr, returnIndentExpr) {
        expr=expr||this.expr
        expr=this.purify(expr).replaceAll(' ', '')
        if(expr[0]==='(') {
            return false
        }
        return this.getFirstPhase(expr).length>0
    }
    Issex(value, concept=false) {
        let braketVariable=0; let powerVariable=0; let slake=false; let test=false
        let onpower=false; let onpowerbar=false; let onpowervar=''; let powercount=-1;
        let counter=0; let _countervalue=0; value=value.replaceAll(' ', '').replaceAll("--", "+").replaceAll('-+', '-').replaceAll('+-', '-')
        value=value.replace('-', ""); value=value.replace('+', "").replace('-', ""); value=value.replace('++', "").replaceAll('++', "+").replace('^+', '');
        while(counter<=value.length-1) {
            let value_=value[counter]
            // print(onpower,onpowervar,value)
            if(onpower&&counter==value.length-1) {
                if(!"+-(".includes(value_)) {
                    onpower=false; onpowerbar=false; break;
                }
            }
            if(onpower&&!onpowerbar) {
                powercount++
                if(priority.IsAlpha(value[counter+1])) {
                    counter+=1; onpower=false; counter++; powercount=-1; onpowervar=""; continue;
                }
                if(value[counter+1]=='(') {
                    onpowerbar=true; counter++; onpowervar=''; powercount=-1; continue;
                }
                if(powercount!=0&&"+-*".includes(value_)) {
                    //print(powercount)
                    onpowerbar=false; counter++; powercount=-1; onpowervar="";
                    return false
                }
            } onpowervar=''; powercount=-1
            if(onpower&&value_=='(') {
                onpowerbar=true; slake=false; test=concept? true:false
            }
            if(value_=='(') {
                //8-9c(5x-5y)
                if(counter!=0&&"-+".includes(value_[counter-1])) {
                    return concept? true:false;
                }
                onpowerbar=true;
                if(concept&&!onpower) {
                    slake=true;
                }
            }
            if(!onpowerbar&&priority.IsAlpha(value_)&&counter<(value.length-1)&&'-.*'.includes(value[counter+1])) {
                return false;

            }
            if(onpower&&!onpowerbar&&(counter+1!=value.length-1)&&"-+".includes(value[counter+1])&&"-+".includes(value_)&&value[counter-1]!="^") {
                return false;
            }
            if(onpowerbar) {
                if(value_=="(") {
                    braketVariable++;
                }
                else if(value_==")") {

                    braketVariable--;
                }
                // if (value[counter + 1] == '(') {
                //   braketVariable++;counter++;continue;
                // }
                if(braketVariable==0) {
                    onpower=false;
                    if(value[counter+1]=='('&&concept) {
                        return true;
                    }
                    if(!(counter==value.length-1)&&"-+".includes(value[counter+1])) {
                        if(test&&concept) {
                            onpower=false; onpowerbar=false; test=false; slake=false; counter++; continue;
                        }
                        return slake? true:false;
                    }
                    else if(counter==value.length-1) {
                        return test? false:true;
                    }
                    else {
                        onpower=false; onpowerbar=false; slake=false;
                    }
                }
            }
            if(("-+*^".includes(value_)||priority.IsNumeric(value_)||priority.IsAlpha(value_))&&!onpower&&!onpowerbar) {
                if(value_=='^'&&(counter+1)<=(value.length-1)&&value[counter+1]=='(') {
                    test=concept? true:false;
                    onpowerbar=true; counter++;;; continue;
                }
                else if(value_=='^') {
                    test=concept? true:false
                    onpower=true; counter++; continue
                }
                // print(value_)
                if((priority.IsAlpha(value_)||priority.IsNumeric(value_))&&counter!=0&&("-+".includes(value[counter-1]))&&!concept) {
                    return false
                }
            }
            counter++;
        }
        if(test) {
            return false
        }
        let x=this.any([!onpower, !onpowerbar])
        if(onpower&&!onpowerbar) {
            return true
        }
        return x? concept? false:true:false
    }

    last(list) {
        if(!list) {
            return ''
        }
        return list[list.length-1]
    }
    len() {}
    limit(expr, limits) {
        expr=expr||this.expr
        let searchVar='', realVar=''
        for(let search of expr) {
            realVar+=search; searchVar+=expr
            if(this.rcount(expr, searchVar)>2) []
        }
    }
    list(strings, array=false) {
        let x=[]
        if(array) {
            for(const keys in strings) {
                x.push(keys)
            }; return x
        }
        for(let pairvalue in strings) {
            x.push(strings[pairvalue])
        }
        return x
    }

    /**
     * LikeTerms rotines:
    --
        
        Like Variables&&Orderable Coefficent ---- 
        Power base progression ---- 
            Power base is been control by accuracy.onlyRange and accuracy.range
            Range is use to control the flows and litms of expression, bu using function to select merit expresion
            For example:
            *  ||  f(x) = 5xy-3xyt^2-15xy-7y:
            -----
            Assuming we want to get all expression that has y element:
            let septre = LikeTerms('5xy-3xyt^2-15xy-7y',{accuracy:{fliterby:'x'}}})
            this return {'y,1',-7}, beacuse this only element that absolute flitration for this exprssion
            see Manual more on:
                set-function:
                limit-range:
                control expression flow ant etc 
                    
            *  |and  we can use OnlyRange
            accuracy.onlyRange:
                            this is turn off by default, it only recommended to be turn on by user,
                                if they want to select only dependent variables,like example shown above
                                assuming we made a slight modification of the expression:
                                Note:<--that onlyRange will work with range(see Manual),but it will be dominating and leading over any other function before it return it-->
                                where we have:
                                -------
            *  ||                        let expr = f(x) = '6xy-2zy-6x^6y-xy
                                -------
            ||                        in this case where have mutiple xy but we can fliter by:
            ||                            ----defining a range for the expression:
            ||                                 setting accuracy.command to define Operators or in OverloadingOperatorClass(see Manual)
            ||                                  using limit,every,selectAllElement to constraint some unwanted prediction etc(see Manual)
            
        ----Unserilaize alphaNumeric Power progression----
        
    */
    LikeTerms(expr, _termsby={}) {
        let defalutop=(left, right, operator='==') => {
            return fallback_operator(left, right, operator)
        }
        const DefalutTerms={
            fliterby: '',
            selectAllElement: false,
            signature: '',
            limits: true,
            directFx: false,
            accuracy: {
                strict: true,
                single: false,
                onlyRange: false,
                auto: {Coeff: null_},
                range: {
                    command: '',
                    every: true, on: '',
                    limits: 0,
                    function: None,
                    selectElement: {any: false, all: false},
                    variableEquality: true,
                    defaultOperation: defalutop
                }
            }
        }
        const control=Trackprops(DefalutTerms, _termsby, [Function]); let [pairedStruct, unpairedStruct]=[{}, {}]

        if(control.fliterby) {
            let termsby=new Expr(control.fliterby)
            expr=new Expr(expr)
            for(let origin of termsby) {
                let [key, value]=origin
                for(let orderable of expr) {
                    if(control.accuracy.auto.Coeff.name!='null_') {
                        if(control.accuracy.auto.Coeff(value, orderable[1])) {
                            if(this.pairedElements(key, orderable[0], control))
                                pairedStruct[orderable[0]]=orderable[1]
                            else
                                unpairedStruct[orderable[0]]=orderable[1]
                        }
                        else
                            unpairedStruct[orderable[0]]=orderable[1]
                    }
                    else {
                        if(this.pairedElements(key, orderable[0], control))
                            pairedStruct[orderable[0]]=orderable[1]
                        else
                            //throw [key,orderable[0]]
                            unpairedStruct[orderable[0]]=orderable[1]
                    }
                }
            }
            expr.struct=pairedStruct; let paired=new Expr(''); paired.struct=unpairedStruct
            return [expr.format(), paired.format()]
        }
    }

    max(x, d=false) {
        let highest;
        let lowest=[]; index=0;
        for(let bi in x) {
            if(!highest) {
                highest=x[bi]
            }
            highest=d? d(highest, x[bi]):highest>x[bi]? highest:x[bi]
        }
        return highest;
    }

    maxByValue(obj) {
        let newObj={}; let resist=[], values=Object.values(obj)
        while(this.list(newObj, true).length!=values.length) {
            for(let x in obj) {
                let max_=this.max(values)
                if(obj[x]==max_) {
                    newObj[x]=max_
                    delete obj[x]; delete values[values.indexOf(max_)]
                }
            }
        }
        return newObj
    }

    maxByalpha(values, ascend=false, vite=false) {
        //print(this.list(values,true))
        let range=this.order(this.list(values, true), ascend, vite), reoder={}
        if(vite) {
            range=range[0]
        }
        for(let createInput of range) {
            reoder[createInput]=values[createInput]
        }
        return reoder
    }

    Maximize(x, range) {
        let n=1
        if(x>=range) {
            n++; x=(x^range/(n))-x^n
        }
        else if(x<=range) {
            n++; x/=(x^range/(n))+n
        }
        x=Math.ceil(x*range)
        while(range<(str(x)[0]=='-'? -x:x)) {
            x=(Math.floor(x/range))
        }
        return x

    }

    min(...x) {
        x=x.length==1? x[0]:x
        let lowest;
        for(let value of x) {
            if(!lowest) {
                lowest=value
            }
            lowest=lowest<value? lowest:value
        }
        return lowest;
    }

    modernLCM(lists) {
        let xNum=Copy(lists)[0].map((e) => {
            e=priority.toPureState(e)
            return this.purify(e)? e:'1'
        })
        let yVar=xNum.map((value, index) => {
            let return_=lists[index].replace(value, '')
            return return_? this.cull(return_):''
        })
        let creed=this.purify(new Expr(yVar.join('')).format())
        return (priority.LCM(xNum))+(creed[0]=='+'? creed.replace('+', ''):creed)
    }

    nestedlikeTerms(x, ...props) {
        let done=[]
        for(let allowance of props) {
            let _do=LikeTerms(x, allowance);
            if(_do[0]) {done.push(_do[0])}
            if(_do[1]) {
                x=_do[1]
            }
            else {return done}

        }
        return [done, x]
    }

    NormalizeScope(expr=this.expr, recall, process=[], list=true) {
        expr=this.reduceScope(expr)
        this.VerifyExpression(expr)
        process=[...process, expr]
        if(process.length>3) {
            process=[expr]
        }
        if(process.length>2&&process.every(e => e==process[0])) {
        }
        if(recall) {
            expr=this.reduceScope(expr)
            let clone=func.RIssex(expr)
            if(clone.length>1) {
                if(this.fullySimplified) {
                    return new Expr(clone.map(e => this.getScope(e)).join("+")).format()

                    // throw expr  
                }
                else {
                    return clone.map(e => !this.Serializable(e)&&!'()'.includes(e[0])? this.NormalizeScope(e):e).join("")

                }
            }
            // print(expr, clone)            
        }
        let other=this.getScopeContext(expr), normalize=[]
        for(let trend of other) {
            if('()'.includes(trend[0])&&(trend.includes(')(')||trend.includes('))'))) {
                normalize=normalize.concat(this.NormalizeScope(trend, true, process, false))
            }
            else
                normalize.push(trend)
        }
        return this.purify(!list? normalize.map(e => this.rengulf(e)).join(''):normalize.map(e => this.rengulf(e)).join(''))
    }

    order(nx, accending=false, step=false) {
        let x=[]
        if(step) {
            for(let v of nx) {
                if(this.IsNumeric(v)) {
                    x.push(+v)
                }
                else
                    x.push(v)
            }
        }
        else {
            x=nx
        }
        let newlist=[]; index=0; var copy=[...x]; let step_=[]
        while(!(x.length==newlist.length)) {
            newlist.push(this.max(copy)); step_.push(copy.indexOf(this.max(copy))); delete copy[copy.indexOf(this.max(copy))]
        }
        if(step) {
            return accending? [newlist.reverse(), step_.this.reverse()]:[newlist, step_];
        }
        return accending? newlist.this.reverse():newlist;
    }

    ordersKey(keys) {
        keys=keys instanceof Array? keys:keys.split(",");
        let zip, on, zipmapper; on=true; var key_=[]; zip=[], zipmapper=[]
        for(let read in keys) {
            if(on) {key_.push(keys[read]); on=false;}
            else {zip.push(keys[read]); on=true;}
        }
        let _key=this.order(key_, true, true);
        for(let mapper in _key[1]) {
            zipmapper.push(zip[_key[1][mapper]]);
        }

        return [_key[0], zipmapper]
    }

    OrderExpr(num, deno, factor=false) {
        //Ordering the denominator
        const coeff_=(num, num2) => {
            return num2%num==0
        }
        let _key={accuracy: {onlyRange: false, auto: {Coeff: coeff_}, range: {command: '<', every: true, selectElement: {all: true}, defaultOperation: () => {return '<='}}}}
        deno=deno.map((element) => {return [this.getvars(element), element]}); let _deno=Object.assign(deno), _deno_=[], keppros={};
        for(let order of _deno) {
            let _order_max=this.max(_deno, (h, e) => {if(!h) return h; else return h.length>e[0].length? h:e})
            //print(_order_max,'treason')
            _deno_.push(_order_max[1]);
            delete _deno[_deno.indexOf(_order_max)]
        }
        let r=false
        for(var _gcd_ of _deno_) {
            var fliterVar=LikeTerms(num, {fliterby: _gcd_, accuracy: _key.accuracy})
            if(fliterVar[0]) {
                if(!factor) {
                    return _gcd_
                }
                return [[fliterVar], _gcd_]
            }
            r=true
        }

    }

    outlet(x) {
        if(x instanceof Array) {
            return x.map(element => outlet(element))
        }
        if(!'-+'.includes(x.replaceAll(' ', '')[0])) {
            return '+'+x
        }
        return x
    }

    pairedElements(list_1, list_2, req) {
        //throw [lists,list2]
        if(list_2=='#,1') {
            return false
        }
        let second=false
        function getRange(list, list2, shortProps) {
            //print('doning,',list,list2)
            if(shortProps.command) {
                if(this.IsNumeric(shortProps.command)||(shortProps.command[0]=='{'&&this.last(shortProps.command)=='}', second=true)) {
                    if(second&&shortProps.function) {
                        return shortProps.function(list, list2)
                    }
                    else {
                        if(shortProps.defaultOperation) {
                            let checkType=shortProps.defaultOperation(shortProps.command, list2)
                            if(typeof checkType=='boolean') {
                                return checkType
                            }
                            //  print(list,list2,checkType,shortProps.defaultOperation,fallback_operator(shortProps.command?shortProps.command:list,list2,checkType))
                            return fallback_operator(shortProps.command.startsWith('{')? shortProps.command:list, list2, checkType)
                            if(true) {
                                print('testing', shortProps.command? shortProps.command:list, list2, checkType, fallback_operator(shortProps.command? shortProps.command:list, list2, checkType))
                            }
                        }
                        //print(list2,shortProps.command,'acrio')
                        return list2==shortProps.command
                    }
                }
                let cased=fallback_operator(list, list2, shortProps.command)
                if(cased=='-uncased-') {
                    throw TypeError(`Range must Number Type or oprator command  !<,!=,!>,>=&&!<=`)
                }
                else {
                    return cased
                }
            }
            return false
        }
        let pairedList=[]; index=0; let justpassed=false
        let [lists, list2]=render(Struct, {strict: true}, 'struct', Copy(list_1)[0].split(','), Copy(list_2)[0].split(','))
        delete lists['#'], delete list2['#']
        //throw [View([lists,list2,list_1,list_2])]
        //flitering by req.accuracy
        if(req.accuracy.single) {
            if(equals(this.list(lists), this.list(list2))&&equals(Object.keys(lists), Object.keys(list2))) {
                //throw lists
                if(req.accuracy.range.command) {
                    let pheels=[]
                    for(let read in lists) {
                        pheels.push(getRange(lists[read], list2[read], req.accuracy.range))
                    }
                    if(req.accuracy.range.every)
                        return pheels.every(e => e==true)
                    return pheels.some(e => e==true)
                }
                return true
            }
            print(equals(this.list(lists), this.list(list2)), equals(Object.keys(lists), Object.keys(list2)))
            return false
        }
        else if(req.accuracy.onlyRange) {
            let pheels=[]
            for(let read in list2) {
                pheels.push(getRange(lists[read], list2[read], req.accuracy.range))
            }
            if(req.accuracy.range.every)
                return pheels.every(e => e==true)
            return pheels.some(e => e==true)
        }
        //throw 'guessKey'
        if(req.selectAllElement) {
            //throw req
            for(let read in lists) {
                if(!list2[read]) {
                    return false
                }
            }
        }
        let _Get={}
        if(req.accuracy.range.selectElement.all) {

            for(let guessKey in lists) {
                if(!list2[guessKey]) {
                    //print([lists,list2],'trushing')
                    return false
                }
            }
            let secrete=Copy(list2)[0];
            if(req.accuracy.range.every&&req.limits) {
                for(let read in secrete) {
                    if(!lists[read]) {
                        delete list2[read]
                    }
                }
            }
        }
        for(let guessKey in list2) {
            //print(guessKey,lists)
            if(!lists[guessKey]) {
                if(req.selectAllElement)
                    return false
                if(req.accuracy.range.selectElement.any) {
                    pairedList.push(true); continue
                }
                pairedList.push(false); continue
            }
            else {
                if(req.accuracy.range.command) {
                    var pheels=[]
                    let tresh=(getRange(lists[guessKey], list2[guessKey], req.accuracy.range))
                    pairedList.push(tresh)
                }

                else {
                    if(req.selectAllElement) {
                        return equals(this.list(lists, true), this.list(list2, true))
                    }
                    if(req.directFx) {
                        if(req.directFx)
                            return true
                    }
                    pairedList.push(req.accuracy.range.defaultOperation(lists[guessKey], list2[guessKey]))
                }
            }
        }
        if(req.accuracy.range.every)
            return pairedList.every(selectAllElement => selectAllElement==true)
        return pairedList.some(e => e==true)
    }
    print(...x) {
        console.log(x)
    }
    purify(expr=this, purify_=false) {
        let local=false
        let x=expr instanceof Expr2D? (local=true, expr.expr):expr
        expr=expr+''

        if(purify_) {
            let x=[]; for(let rec of expr+'') {if(rec&&rec!='undefined') {x.push(rec)} }
            expr=x
        }
        expr=expr.replaceAll(' ', '').replaceAll("--", "+").replaceAll('-+', '-').replaceAll('+-', '-').replaceAll('++', '+').replaceAll('/+', '/').replaceAll('(+', '(').replaceAll('/ +', '/')
        if(local) {
            this.expr=expr
            return this
        }
        return expr
    }
    rcount(x, y) {
        let counter=0, lcst=[]
        while(x.includes(y)) {
            lcst.push(x.indexOf(y)); x=x.replace(y, ''); counter++;
        }
        return lcst
    }


    reduceBrackScope(x=this) {
        let local=false
        x=x instanceof Expr2D? (local=true, x.expr):x
        if(x.startsWith('(')) {
            return local? (this.expr=this.FactorBrack(x), this):this.FactorBrack(x)
        }
        else {
            // getting out outer parenthesis function  removing the embraced Bracket
            let phase_1=this.getFirstPhase(x)
            let phase_2=x.replace(phase_1, '')

            // checking if is joint bracket

            let context=this.getScopeContext(phase_2)
            if(context.length>1) {
                let break_=this.FactorBrack(curl(phase_2))
                let pfx=this.getFirstPhase(break_)
                if(pfx) {
                    let globe=this.expr=new Expr(pfx).mul(phase_1? phase_1:'')+break_.replace(pfx, '')
                    return local? (this.expr=globe, this):globe
                }
            }
            else {
                let phase_3=[]; let mainValue=[]
                for(let context_ of context) {
                    let diffs=this.FactorBrack(context_);
                    if(this.getScopeContext(diffs).length>1) {

                        diffs=this.FactorBrack(this.purify(diffs), true)
                    }
                    let first_pahse=getFirstPhase(diffs)
                    mainValue.push(diffs.replace(first_pahse, '')); phase_3.push(first_pahse? first_pahse:'1')
                }

                for(let re_index in mainValue) {
                    let acces=this.getScopeContext(mainValue[re_index])
                    if(acces.length>1) {
                        mainValue[re_index]=this.engulf(mainValue)
                    }
                }
                return local? (this.expr=Expr(phase_3.concat(phase_1))+mainValue, this):Expr(phase_3.concat(phase_1))+mainValue
            }
        }

    }
    reduceScope(curl_expr=this, falsy, loop) {
        let local
        curl_expr=curl_expr instanceof Expr2D? (local=true, curl_expr.expr):curl_expr
        if(loop) {
            let [last_, now, current]=['', curl_expr, '']
            while(now.startsWith(ob)&&now.endsWith(cb)) {
                now=this.reduceScope(now)
                if(last_==now) {
                    return now
                }
                last_=now
            }
            return now
        }
        curl_expr=curl_expr.replaceAll(' ', '')
        if(!curl_expr) {
            return ''
        }
        //print(curl_expr)
        let [index, Toturn]=[0, '']
        while(curl_expr[0].startsWith(ob)&&index<curl_expr.length) {
            Toturn+=curl_expr[index];
            if(this.isBalanced(Toturn)&&index<curl_expr.length-1) {
                return falsy? false:curl_expr
            }
            if((index+1)>=curl_expr.length&&(this.isBalanced(Toturn))) {
                return falsy? true:curl(curl_expr)
            }
            index++;
        }
        return falsy? false:local? (this.expr=curl_expr, this):curl_expr
    }
    reduceFractionLevel() {}

    rematch(expression, careful=false) {
        expression=expression||this.expr
        expression=''+expression
        if(careful&&!expression.includes('+')&&' '.includes(expression)) {
            return expression=("+ "+expression)
        }
        return expression.replace('+0', '+').replace('+1', "+").replace('-1', "-").replace('-0', "-")
    }


    render(className, Props, getProps, ...values) {
        const caps=[]
        for(let renders of values) {
            if(Props) {
                caps.push(!getProps? new className(renders, Props):new className(renders, Props)[getProps]); continue
            }
            caps.push(className(renders))
        }
        return caps
    }

    rengulf(expr) {
        if(this.reduceScope(expr)==expr) {
            return this.engulf(expr)
        }
        return expr
    }

    resolveFraction(expr) {
        expr=expr||this.expr
        return this.simplifyFraction()
    }

    reverse(value, defalut=false) {
        return defalut? this.Reverse(this.list(value)):this.Reverse(this.list(value)).join('');
    }

    RIssex(expr, normalize=false, scope='') {
        let singleExpr=[]; let _expr=''; scope=(scope+cb+ms+ps)
        for(let index in expr) {
            _expr+=expr[index];
            if(expr[index]!='^'&&this.Issex(_expr)&&scope.includes(expr[+index+1])&&this.isBalanced(_expr)) {
                _expr=_expr.startsWith('  ')? _expr.replace('  ', ''):_expr
                if(!'-+'.includes(_expr)&&_expr!=' ') {
                    singleExpr.push(normalize? this.Runimp(_expr, normalize):_expr); _expr=""
                }
            }
        }
        if(!'+-'.includes(_expr)&&_expr!=' ') {
            singleExpr.push(normalize? this.Runimp(_expr, normalize):_expr);
        }
        return singleExpr
    }
    Refrex(expr) {
        let x=[]
        for(let split_pair of this.RIssex(expr, false, '')) {
            if(x.length&&x[x.length-1][x[x.length-1].length-1]=='/') {
                x.push(x.pop()+split_pair)
                continue
            }
            x.push(split_pair)
        }
        return x
    }
    Reverse(list) {
        let i=list.length-1, script=[]
        while(i!=-1) {
            script.push(list[i]), i--;
        }
        return script
    }
    Runimp(x, strict) {

        //filtering out all Unimportant decorators 

        x=x.replaceAll(' ', '')
        let result='';
        for(let catch_ of x) {
            if(priority.IsAlpha(catch_)) {break;}
            result+=catch_
        }
        if(result.length==2&&x.replace(result, '')) {
            let _x=result.replace('-1', '- ').replace('+1', '+ ');
            let text=_x+x.replace(result, '').replace(' ', '');
            return (text.startsWith('+')+text.startsWith('-'))? text.replace('+', '+ ').replace('-', '- '):text
        }
        let text=x
        return '-+'.includes(x)&&strict? "":(text.startsWith('+')+text.startsWith('-'))? text.replace('+', '+ ').replace('-', '- '):text
    }
    simpleKey(x, real=true) {
        let collect=[], n=0;
        if(real) {
            x=x.split(',')
        }
        while(n<x.length-1) {
            collect.push(x[n]); n+=2
        }
        return collect
    }
    space(expr) {
        return this.purify(expr).replaceAll('-', ' - ').replaceAll('+', ' + ').replaceAll('- (', '-(').replaceAll('+ (', '+(').replaceAll('(', '( ').replaceAll(')', ' )')
    }
    str(obj) {
        return (obj|this.expr)+''
    }
    Serializable(expr, Fract=true) {
        expr=expr||this.expr
        if(Fract&&(!expr||expr.includes('/'))) {
            return false
        }
        if(expr.startsWith('(')||expr.startsWith('((')) {
            return false
        }
        let vacate='', onpower=false, avoid='', increase=0

        while(increase<expr.length) {
            if(expr[increase]=='('&&expr[increase-1]=='^') {
                onpower=true;
            }
            if(onpower) {
                avoid+=expr[increase];
                if(this.isBalanced(avoid)) {
                    onpower=false
                }; increase++; continue
            }
            if(expr[increase-1]!='^'&&expr[increase]=='(') {
                return false
            }
            increase++;
        }
        return true;
    }
    SortObject(x, func, key) {
        if(typeof x=='object') {
            let new_object={}; key=this.list(x, true)
            while(this.list(new_object, true).length!=this.list(x, true).length) {
                let locate=func? func(key):this.max(key)
                new_object[locate]=x[locate]
                delete key[key.indexOf(locate)]
            }
            return new_object
        }
    }
    SyncExpr(_object, Objects, split=null, retExpr=true, _defalut) {
        let [object, coeff, factor]=[[], [], false]
        if(_defalut) {
            if(object.includes(')^(')) {
                return true
            }
            return false
        }
        for(let income of _object) {
            if(income.includes(Symbols)) {
                coeff.push(income.replaceAll(Symbols, ''))

            }
            else {
                object.push(income);
            }
        }
        object=this.reverse(object, true); let singleExpr=this.RIssex(this.getScopeContext(object.pop())[0]), powersHandlers=[]; let head=singleExpr.pop();
        for(let syncObjectList of object) {
            let [real, complex]=this.getScope(curl(syncObjectList.replace(syncObjectList.startsWith('^')? '^':'', '')), Objects, true)
            powersHandlers.push(real)
        }
        let rangeLists=[], attempt='1';
        for(let reconsider of powersHandlers) {
            if(this.vars(reconsider).length<2) {
                attempt=new Objects(attempt).mul(reconsider)+''
            }
            else {
                if(attempt=='1') {
                    rangeLists.push(reconsider); continue
                }
                rangeLists.push(attempt, reconsider); attempt='1'
            }
        }
        if(attempt&&attempt!=1) {
            rangeLists.push(attempt)
        }
        if(factor) {
            throw new NotImplementedError('powersHandlers   Factorizaion Not Implement try attaching a factor debuger in your setting.xpr file')
        }
        let _render=new Objects(rangeLists, {toPureStateOnArraysObject: false}).Simp().format();
        if(this.IsNumeric(_render)&&str(this.flex(_render))[0]=='-') {
            _render=priority.toPureState((-this.flex(_render)).toString())
            return `1/${this.getScope(head.repeat(_render), Objects)}`;
        }
        if(this.IsNumeric(_render)) {
            return this.getScope(this.engulf(new Expr(coeff).Simp().format())+head.repeat(_render.replaceAll('+', '')), Objects);
        }
        return [`${head}${split??'^'}(${_render})`, coeff,]

    }

    takelent(object, lent) {
        object=str(object)
        let season=''
        for(var key in object) {
            season+=object[key]
            if(key==lent) return season;
        }
        return season
    }

    termType(expr) {
        const Type=[], CommonTyped=[]
        for(let rise of(expr instanceof Array)? expr:RIssex(expr)) {
            if(!this.Serializable(rise))
                Type.push(rise)
            else
                CommonTyped.push(rise)
        }
        return [CommonTyped, Type]
    }

    toExprObject(x) {
        let output=new Expr('');
        output.struct=x
        return output.format()
    }

    toObject(x_, t=null) {
        x_=t? t.split(t):x_
        let x={}; let recent='', on=false
        for(let _x of x_) {
            if(on) {
                if(x[recent]) {
                    x[recent]=(x[recent].replace(_x, '')+'___'+_x);
                    recent='empty';
                }
                else {
                    x[recent]=_x;
                    recent='empty';
                }
            }
            recent=_x;
            on=!on
        }
        if(on&&recent!='empty') {
            x[recent]=''
        }
        return x
    }
    tolist(x) {
        let _x=[]
        for(let xx in x) {
            if(xx)
                _x.push(xx, x[xx]? x[xx]:'1')
        }
        return _x
    }

    Trackprops(props, object) {
        let indexProps={}
        //print(object)
        for(let key in object) {
            if(object[key] instanceof Function&&object[key])
                props[key]=object[key]
            if(object[key]!=undefined&&typeof object[key]==typeof props[key]) {
                if(object[key] instanceof Array) {
                    let props1=Object.assign(props[key]), props2=Object.assign(object[key])
                    for(let unknowList in props2) {
                        if(typeof props2[unknowList]==typeof props1[unknowList]) {
                            if(props1 instanceof Array) {
                                props1[unknowList]=props2[unknowList]
                            }
                            else if(props1 instanceof Object) {
                                props1[unknowList]=Trackprops(props1[unknowList], props2[unknowList])
                            }
                            else {
                                props1[unknowList]=props2[unknowList]
                            }
                        }
                        else {
                            throw new TrackPropsError(`-----------The require props ${View(props)} does not meet the give ${View(props2)} at:::/n
                                        index -> ${unknowList}-------=>::$${View(props2[unknowList])} must be Type of ${View(props1[unknowList])}:`)
                        }
                    }
                    props[key]=props1
                }
                else if(object[key] instanceof Object) {
                    props[key]=Trackprops(props[key], object[key])
                }
                else {
                    props[key]=object[key]
                }
            }
            else {
                if(props[key])
                    try {
                        throw new TrackPropsError(`Unepxected Value for keyword:${this.list(props)[0]}`)
                    }
                    catch(e) {
                        throw new TrackPropsError(`Unepxected Key::Unexpected key to recieve this value:${props[key]} <------------->  ${object[key]}`)
                    }
                else
                    throw new TrackPropsError(`Unepxected Value for ${View(props[key])}-->${props[key]} of ${View(object)}`)
            }
        }
        return props
    }

    unzip(LockedExpr) {
        LockedExpr=LockedExpr.replaceAll('(1(', '((')
        if(LockedExpr.startsWith('1(')) {LockedExpr=LockedExpr.replace('1(', '(').replaceAll('+1(', '(')}
        if(this.isBalanced(LockedExpr)&&LockedExpr.startsWith(ob)&&LockedExpr.endsWith(cb)) {
            return curl(LockedExpr)
        }
        return LockedExpr
    }
    vars(expr) {
        expr=expr||this.expr
        const ContainerVars=[]; let onvars=false, reading=0, last;
        for(const _vars of expr) {
            last=Object.assign(_vars)
            if(_vars=='('&&last=='^') {
                onvars=true
            }
            if(_vars=='(') {
                reading++;
            }
            else if(_vars==')') {reading--;}
            if(reading==0) {onvars=false}
            if(!onvars&&priority.IsAlpha(_vars)&&!ContainerVars.includes(_vars)) {
                ContainerVars.push(_vars)
            }
        }
        return ContainerVars
    }
    VerifyExpression(expr) {
        if(this.count(expr, cb)!=this.count(expr, ob)) {
            throw new ParenthesisMismatchError(expr)
        }
    }
    wrapFract(num, deno) {
        return `${this.cull(num)}/${this.cull(deno)}`
    }

    wrapFacts(x, y) {
        if(x==y)
            return `(${x})^2`
        return `(${x})(${y})`
    }

    wrapFact(x, y) {

        return `${x}(${y})`
    }
    zindex(value) {
        value=this.flex(value)[0]
        return this.priority.IsAlpha(value)? 'alpha':this.IsNumeric(value)? 'numeric':value
    }
}

export default Expr2D

export {
    func
}



// print(new Expr2D('((((7x(9x-3)-1))))(((3x(-7y))))',{fullySimplified:true}).NormalizeScope(),func.NormalizeScope('((-(x-2))) (x-(i)) (9x(23x-6y)) (8(3x-4y)) (9x-8y)'))

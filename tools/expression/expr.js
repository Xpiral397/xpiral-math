import {
    rematch,
    order,
    print,
    list,
    IsAlpha,
    Issex,
    purify,
    flex,
    exports,
    max,
    curl,
    count,
    reverse,
    engulf,
    RIssex,
    vars,
    cvars,
    ob,
    cb,
    isBalanced,
    Serializable,
    ExprssionSpliter,
    getScope,
    termType,
    priority,
    neg,
    reduceScope,
    alent,
    str,
    flit,
    Trackprops,
    calc,
    last,
    int,
    equals,
    simpleKey,
    toObject,
    maxByValue,
    toExprObject,
    cull,
    
}

from '../../essential/functions.js'
import { Struct, View } from './types/types.js'
import { UnexpectableDataInput } from '../../controller/exceptions.js'
import { enumerate, lists } from '../../XFSSystem/constructives.js';
import { simplifyFraction } from './Fraction.js';


const resolveFraction = simplifyFraction
export class ExprFraction {
    constructor(expr, _kwargs){
        // print(typeof expr)
        if(expr instanceof ExprFraction){
            expr = expr.format()
        }
        else if (expr instanceof Array){
            const MultipleExpression = new ExprFraction('1')
            for( let fractions_expression  of expr ){
                MultipleExpression.mul(fractions_expression)
            }
        expr = MultipleExpression.format()
        }
        if(!expr.includes('/')){
            this.num = expr
            this.deno = '1'
        }
        else{
            expr  =  reduceScope(expr)
            if(expr.replace('/','').includes('/')){
                expr = resolveFraction(expr)
            }
            expr = expr.split('/') ;
            this.num = expr[0];this.deno = expr[1]
        }
         this.getScope = getScope
    }
    add(expr){
        let _expr = new ExprFraction(resolveFraction(expr))
        if(this.deno == _expr.deno){
            this.num = this.getScope(`(${this.num})(${_expr.deno}) + (${this.deno})(${_expr.num})`,Expr)
        }
        else{

        }
        return this
    }
    format(){
        let chrome = cull(getScope(this.deno))
        return purify(`${cull(getScope(this.num))}${chrome !='1'?('/'+chrome):''}`)
    }
    toString(){
        return this.format()
    }
    reduce(){
        zip = priority.reduceFraction(`${priority(this.num)}/${priority.toNumState(this.deno)}`)
    }
    mul(expr){
        if(expr == '1') return this ;
        else{
            print('olouwa',expr)
        let _expr = new ExprFraction(resolveFraction(expr))
        print(_expr)
        this.num = this.getScope(`(${this.num})(${_expr.num})`,Expr)
        this.deno = this.getScope(`(${this.deno})(${_expr.deno?_expr.deno:1})`,Expr)
        return this
        }

    return this
    }
    div(expr){
        let _expr = new ExprFraction(resolveFraction(expr))
        if(_expr.deno === this.num){
            this.num = _expr.num
        }
        else if (_expr.num === this.deno){
            this.deno = _expr.deno
        }
        else{
            this.deno = this.getScope(`${this.deno}${_expr.num}`,Expr)
            this.num = this.getScope(`${this.num}${_expr.deno}`,Expr)
        }
        return this
    }
}
export class Expr {
    /**
     * Only available if `-Complex` Algberic Function` is passed to the process.
     */
    constructor(expr, _kwargs) {
        this.kwargs = { formatCallback: true, callback: true, cleared: false, toPureStateOnArraysObject: false }
        for (let initials in _kwargs) {
            if (!Object.keys(this.kwargs).includes(initials)) {
                throw new UnexpectableDataInput(initials)
            }
            this.kwargs[initials] = _kwargs[initials]
        }
        let [cleared, callback] = [this.kwargs.cleared, this.kwargs.callback]
        //Purifying Expression
        if (expr == 'lib') {
            throw new SyntaxError()
        }
       
        if (expr instanceof Array) {
            let self_call = new Expr('1');
            for (let array of expr) {
                self_call.mul(this.kwargs.toPureStateOnArraysObject ? priority.toPureState(array) : purify(array) == '-' ? '-1' : array)
            }
            expr = self_call
        } 
        if (expr && expr.name == 'Expr') {
            Object.assign(this, expr);
        } else {
            expr = expr ? expr instanceof Function && purify(expr) || purify(expr + '') : '1'
            this.expr = expr + '';
            let _expr = "";
            this.peaks = {}
            this.struct = {};
            this.cleared = cleared;
            this.struct = {};
            this.singleExpr = []
            this.Unserialized = [];
            this.primary = []
            for (let index in expr) {
                _expr += expr[index];
                if (expr[index] != '^' && !IsAlpha(expr[+index + 1]) && Issex(_expr) && "+-)".includes(expr[+index + 1]) && isBalanced(_expr)) {
                    let resolved = ExprssionSpliter(_expr, true)
                    let _ex = reverse(reverse(_expr).replace(reverse(resolved), ''));
                    this.singleExpr.push(_ex ? _ex : _expr);
                    //print(this.singleExpr,_ex ? _ex : _expr,'sherrhh')
                    if (resolved != _expr) {
                        this.singleExpr.push(resolved);
                        _expr = ""
                    };
                    _expr = ''
                }
            }

            this.singleExpr.push(_expr);
            _expr = "";
            let restruct = []
                // throw new Error(this.singleExpr)
            for (let x of this.singleExpr) {
                if (restruct.length) {
                    let check = restruct[restruct.length - 1];
                    let truer = check[check.length - 1] == '^'
                    if (truer) {
                        // print(restruct, restruct.length - 1, x)
                        let xy = ExprssionSpliter(x);
                        x = x.replace(reduceScope(xy), '');
                        // print(x,'loudududud',xy)
                        restruct[restruct.length - 1] = restruct[restruct.length - 1] + '(' + xy + ')' + x;
                        continue
                        //throw print(restruct,restruct.length - 1,x)
                    }
                }
                if (![ob, cb].includes(x)) {
                    restruct.push(x)
                }

                //print(restruct,'w',x,expr)
            }
            //throw new Error([restruct])
            this.singleExpr = [];
            let start = true;
            for (let highlights of restruct) {
                if (start || '+(-'.includes(highlights[0]) || !Serializable(highlights)) {
                    this.singleExpr.push(highlights);
                    start = false;
                    continue;
                }
                if (!'+-'.includes(highlights[0])) {
                    this.singleExpr[this.singleExpr.length - 1] = this.singleExpr[this.singleExpr.length - 1] + highlights
                }
            }
            //throw new Error(this.singleExpr)
            //  this.singleExpr = restruct;
            //throw new Error(this.singleExpr)
            this.complex = {
                advocates: lists([]),
                FractLike: lists([]),
                Trigonos: lists([]),
                SyncExpr: []
            }
            this.serialized = 0
                // print('oncheck')
            this.serialize();
            this.length = this.Unserialized.length + this.primary.length
            this.NotchType = {
                locked: false,
                Linear: 'linear',
                Congrent: 'congrent',
                Simple: 'single',
                current: {
                    state: '',
                    complexNode: {
                        fract: this.complex.FractLike,
                        simp: this.complex.advocates,
                        trigonos: this.complex.Trigonos
                    },
                    CongrentAction: false,
                    fallback: false
                }
            }
            const fileOutNoneComplexTypesOfExprObject = [];
            for (let types of this.singleExpr) {
                if (types.includes(')^(')) {
                    this.complex.SyncExpr.push(types);
                } else {
                    fileOutNoneComplexTypesOfExprObject.push(types);
                }
            }
            // this.singleExpr = fileOutNoneComplexTypesOfExprObject
            this.NotchType.locked = (LockedExpr, notchType) => {
                this.NotchType.current.state = notchType;
                this.NotchType.current.fallback = true
            }
            this.self = Expr

            if (callback) {
                this.serial = new Expr(this.valueOf().replace(' ', ''), { callback: false }).singleExpr
            }
        Object.defineProperty(this,'Struct',{
        get:()=>{return new Struct(this.struct)},
        set:(values)=>{this.struct = values
        }
    })
        }
        this.cmv()
    } * [Symbol.iterator]() {
        for (let iters in this.struct) {
            yield [iters, this.struct[iters]]
        }
    }
    self(){
        for(let itersIndex = 0; itersIndex < this.length; itersIndex++) {
            return new Expr(this.at(itersIndex))
        }
    }
    valueOf() {
        return this.format()
    }
    toString() {
        return this.format()
    }
    cmv() {
        const mvar = {}
        this.cmvar = {}
        for (let consist in this.peaks) {
            var medianSet = []
            for (let insist of this) {
                let _insist = simpleKey(insist[0])
                medianSet.push(_insist.includes(consist))
                    // print(_insist,medianSet,consist,'loud')
            }
            //console.log(medianSet)

            if (medianSet && medianSet.length)
                mvar[consist] = count(medianSet, true)
        }
        for (const orders_ of order(list(mvar, true))) {
            this.cmvar[orders_] = mvar[orders_]
        }
        return this
    }
    OrderExpr() {
        this.cmv()
        let stable = maxByValue(this.cmvar),
            all_current = {},
            mainExpr = [],
            unaccpet = [],
            Ungrouped = '',
            accept = []
            //throw this.peaks
        for (let instant in stable) {
            for (let pair_oder of this) {
                if (mainExpr.includes(pair_oder)) continue;
                mainExpr.push(pair_oder)
                let excel = toObject(pair_oder[0].split(','))
                if (pair_oder[0][0] == '#') {
                    Ungrouped = (pair_oder[1]);
                    continue
                }
                if (!excel[instant]) { unaccpet.push(pair_oder); continue }
                accept.includes(pair_oder)
                let constant = instant + ',' + excel[instant]
                if (list(all_current, true).includes(constant)) {
                    all_current[constant] = [...all_current[constant], pair_oder]
                } else {
                    let crust = {};
                    crust[pair_oder]
                    all_current[constant] = [pair_oder]
                }
            }

        } //throw [mainExpr,all_current]
        // throw all_current   
        let orderModel = {},
            dore = []
        for (let stable of list(this.peaks, true)) {
            let store_list = {}
            for (let criuse of list(all_current, true)) {
                if (criuse[0] == stable[0]) {
                    store_list[-criuse.split(',')[1]] = all_current[criuse]
                }
            }
            store_list = maxByValue(store_list)
            dore[stable] = store_list

        }
        // throw dore
        for (let models in dore) {
            models = dore[models]
            for (let discrete_model in models) {
                //throw  orderModel[models[discrete_model]]
                for (let index_destruction of models[discrete_model]) {
                    orderModel[index_destruction[0]] = index_destruction[1]
                }

            }
        }
        let residual = []
        for (let mp of mainExpr) {
            if (!accept.includes(mp)) {
                residual.push(mp)
            }
        }
        // throw residual
        orderModel['#,1'] = Ungrouped
        this.struct = new Expr(toExprObject(orderModel), { formatCallback: false }).struct
        return this
    }
    at(get_index) {
        let current_scope, index = 0
        for (current_scope of this) {
            if (index == get_index)
                return current_scope
            index++
        }
        return ''
    }
    orders(keys) {
            keys = keys instanceof Array ? keys : keys.split(",");
            let zip, on, zipmapper;
            on = true;
            var key_ = [];
            zip = [], zipmapper = []
            for (let read in keys) {
                if (on) {
                    key_.push(keys[read]);
                    on = false;
                } else {
                    zip.push(keys[read]);
                    on = true;
                }
            }
            let _key = order(key_, true, true);
            for (let mapper in _key[1]) {
                zipmapper.push(zip[_key[1][mapper]]);
            }

            return [_key[0], zipmapper]
        }
        //compiler(x){
        //  x = x.replace(' ','');nth = 0
        //while (nth > x.length){
        //  if()

    //}
    //}
    div(x) {
        return this.mul(new Expr(x).Inverse().format())
    }
    neg() {
        for (let keys in this.struct) {
            this.struct[keys] = ('' + (this.struct[keys] ? this.struct[keys] : '1')).replace(' ', '') * -1;
        }
        this.complex.advocates.map((element) => {
            if (element.replaceAll(' ', '').startsWith('+')) {
                return element.replace('+', '-')
            } else if (element.replaceAll(' ', '').startsWith('-')) {
                return element.replace('-', '+')
            } else {
                return '-' + element
            }
        })
        return this
    }
    sub(expr) {

        this.expr += expr;
        let sub = new Expr(`-1(${expr})`).Simp().format()
        this.doPeak(sub)
        this.singleExpr = this.singleExpr.concat(RIssex(sub))
        this.serialize(null, true)
            //throw sub
        return this
    }
    doPeak(expr, v) {
        for (let x of expr) {
            x = x[0].split(',');
            let on = true
            for (let _peak_ of x) {
                if (on) {
                    if (this.peaks[_peak_]) {
                        this.peaks[_peak_] = max([int(this.peaks[_peak_]), int(x[x.indexOf(_peak_) + 1])])
                        if (Number.isNaN(this.peaks[_peak_])) {
                            let max = new Expr(this.peaks[_peak_]).__gt__(x[x.indexOf(_peak_) + 1])
                            if (!max) {
                                this.peaks[_peak_] = x[x.indexOf(_peak_) + 1]
                            }
                        }
                    } else {
                        this.peaks[_peak_] = int(x[x.indexOf(_peak_) + 1])
                        if (Number.isNaN(this.peaks[_peak_])) {
                            this.peaks[_peak_] = x[x.indexOf(_peak_) + 1]
                        }
                    }
                }
                on = !on
            }
        }
        delete this.peaks['']
    }
    add(expr, add = false) {
        expr = new Expr(expr)
        this.doPeak(expr)
        this.expr += add ? expr : ''
        this.singleExpr = this.singleExpr.concat(expr.singleExpr)
        for (let addStruct of expr) {
            if (this.struct[addStruct[0]]) {
                let treat = exports((addStruct[1]), this.struct[addStruct[0]])
                if (treat != 0)
                    this.struct[addStruct[0]] = treat
                else
                    delete this.struct[addStruct[0]]
                continue
            }
            this.struct[addStruct[0]] = addStruct[1]
        }
        return this
    }
    sq(expr, range) {
        let i = 0;
        x = new Expr(expr, )
        while (i <= range) {
            x.mul(expr)
        }
        throw new Error([x + '', expr])
        return this.SingleSimpify(x.join(''))
    }
    append(resideVar, value_, groundExpr = false, ) {
        if (groundExpr) {
            [resideVar, value_] = groundExpr
        }
        //Destructurizing the Elements
        //print(resideVar, value_)
        let keys = Object.keys(resideVar) + ',' + Object.keys(value_),
            element = exports(resideVar[Object.keys(resideVar)], '*' + value_[Object.keys(value_)])
            ///print('keelelelel',element)
        let Destruct = new Struct(keys.split(','), {
                strict: 'strict',
                Functions: (left, right) => {
                    let rest = exports(left, right);
                    if (('' + rest).includes('(')) {
                        let fx = new Expr(rest).Simp() + ''
                        return engulf(fx)
                    } else {
                        return rest
                    }
                }
            })
            //print(Destruct.destruct(),'ofin Karmazíin')
        let [reason_, _element] = [Destruct.doForValue((_expr) => {
            _expr = _expr + '';
            if (RIssex(curl(_expr, true)).length < 2) { return flit(_expr) }
            _expr = _expr.includes('(') ? (new Expr(_expr).Simp() + '') : _expr;
            let level = (RIssex(_expr).length > 1 ? engulf(_expr) : _expr);
            level = alent(level) > 1 ? level : curl(level);
            return level
        }).Domerit((key, value) => { return value == 0 || value == '(0)' || false }), element]

        for (let peaks of reason_) {
            if (this.peaks[peaks])
                this.peaks[peaks] = max([int(this.peaks), int(peaks)])

            else
                this.peaks[peaks] = peaks
        }
        return [reason_.destruct(), _element]
    }
    remove(reason) {
        let locaVar = new Struct(list(new Expr(reason).struct, true)[0], { strict: true });
        locaVar.Domerit((element) => {
            if (element == '#') {
                return false
            }
        }).destruct()
        for (let search of this) {
            if (equals(search, locaVar)) {
                delete this[search]
                break
            }
        }
        return this
    }
    replace(old, new_) {
        return this.format().replace(old, new_)
    }
    replaceAll(old, new_) {
        return this.format().replaceAll(old, new_)
    }
    getState = () => { return this.NotchType.current.state }
    Simp(expr) {
        const Threading = this.complex.advocates.object.copyWithin()
        this.simplify = ''
        for (var task of Threading) {
            if (task) {
                this.add(getScope(task, Expr));
            }
            this.complex.advocates.delete(task)
        }

        return this
    }
    nrd(req) {
        let nrd_list = []
        for (let rock of this) {
            const [key, value] = rock
            if (!simpleKey(key, false).some(e => IsAlpha(e))) {
                nrd_list.push(rock[1])
            }
        }
        return priority.PrimeFactors(nrd_list[0])
    }

    mul(_expr) {
        this.expr = `${_expr}(${this.expr})`
            //checking for SyncExpr Object

        //Mutilplying object with complex.advocates object
        for (let [index, renders] of enumerate(this.complex.advocates)) {
            if (!renders) {
                continue
            }
            if (!(renders.replaceAll(' ', '').endsWith('(') && renders.replaceAll(' ', '').endsWith(')'))) {
                renders = engulf(renders);
            }
            this.complex.advocates.makeChanges(index, engulf(_expr), (left, right) => { return left + right });
        }
        let [expr, FactorizedExpression] = termType(_expr);
        if (FactorizedExpression.length == 0) {
            expr = expr.join('');

        } 
        else {
            this.complex.advocates.append(engulf(_expr) + engulf(this.format(false)));
            this.struct = {}
            return this
        }
        let elements = new Expr(expr);
        const evaluation = {};
        let values, key;
        values = {};
        key = {};
        let _struct;
        //print('kola',View(elements),View(this)) 
        const legend = cvars(max, this.serial.join(), elements.serial.join());
        const legendList = [this, elements]
        const element = elements.serial.length > this.serial.length ? elements.struct : elements.serial.length == this.serial.length ? legendList[legend].struct : this.struct; //
        const self = elements.serial.length < this.serial.length ? elements.struct : elements.serial.length == this.serial.length ? legendList[legend > 0 ? legend - 1 : legend + 1].struct : this.struct; //
        // print(['legened',legend, Object.keys(element),'hhh',Object.keys(self),'  ',Object.keys(this.struct),'m ',Object.keys(elements.struct),[elements.serial.length , this.serial.length],cvars(min,this.serial.join(),elements.serial.join())])
        for (let varskeys in element) {
            values[varskeys] = element[varskeys];
            if (!Object.keys(values).length) { throw new Error(); continue; }
            for (let keygen in self) {
                key[keygen] = self[keygen];
                // print(this.struct, 'structing',key,values,_expr,this.sexpr,)
                let evaluate = this.append(false, false, [key, values], '*')
                    // print('lelelelelelel',key,values,evaluate)
                if (evaluate[0] in evaluation) {
                    evaluation[evaluate[0]] = exports(evaluation[evaluate[0]], evaluate[1]);
                    key = {}
                    continue;
                }
                evaluation[evaluate[0]] = evaluate[1], key = {}
            }
            values = {};
        }
        this.struct = Object.assign(evaluation)
        return this
    }
    format(reqFeatures = {}) {
        //let req = reqFeatures.length == 0 ? {order:false, FormatComplex:true,x:false,SetLimits:false} : reqFeatures 
        reqFeatures = Trackprops({ order: false, FormatComplex: true, x: false, SetLimits: false }, reqFeatures)

        if (reqFeatures.order)
            this.OrderExpr()
        let limits = { FormatComplex: reqFeatures.FormatComplex ? 'all' : false, fract: reqFeatures.fract, trigs: reqFeatures.trigs };
        let x = reqFeatures.x
        let collections = '';
        let mapper = '';
        let precollection = '';
        let not = -1;;
        let examine = []
        for (let decorator in this.struct) {
            not++;
            let decorators = new Struct(decorator.split(','), { strict: 'strict', Functions: (left, right) => { let rest = exports(left, right); if (('' + rest).includes('(')) { let fx = new Expr(rest).Simp() + ''; return engulf(fx) } else { return rest } } });
            decorators = decorators.doForValue((_expr) => {
                _expr = _expr + '';
                if (RIssex(curl(_expr, true)).length < 2) { return flit(_expr) };
                _expr = _expr.includes('(') ? (new Expr(_expr).Simp() + '') : _expr;
                let level = (RIssex(_expr).length > 1 ? engulf(_expr) : _expr);
                return level
            }).Domerit((key, value) => { return value == 0 || value == '(0)' || false }).destruct();
            decorators = this.orders(decorators);
            not++
            for (let mappers in decorators[0]) {
                if ("@#".includes(decorators[0][mappers])) {
                    continue
                }
                let wreck = (decorators[1][mappers] == '1') ? "" : (decorators[1][mappers] ? '^' + decorators[1][mappers] : '')
                mapper += decorators[0][mappers] + wreck
            }
            precollection = (" " + (['-1', '+1', "+0", "-0"].includes(x ? x : this.struct) ? rematch(x ? x : this.struct) : (x ? x : this.struct)[decorator]));
            precollection = mapper && precollection.replaceAll(' ', '') == '1' ? '' : precollection
            if (!'-+'.includes(precollection.replaceAll(' ', '')[0]) && not != 0) {
                precollection = '+' + precollection
            }
            examine.push(precollection + mapper)
                //print(precollection,'preValueprsenttin',mapper)
            if (mapper == '') {
                collections += ("-+".includes(collections.replaceAll(' ', '')[0]) ? '' : '+') + precollection + '';
                precollection = '';
                mapper = ''
            } else if ('+-'.includes(mapper.replaceAll(' ', '')[0]) && !collections.replaceAll(' ', '')[collections.replaceAll(' ', '').length - 1] == '@') {
                collections += ("-+".includes(collections.replaceAll(' ', '')[0]) ? '' : '+') + precollection.replace('+', '') + mapper;
                precollection = '';
                mapper = ''
            } else {
                precollection = precollection == ' ' ? ' +' : precollection
                collections += ("-+".includes(collections.replaceAll(' ', '').replaceAll('~', '')[collections.length - 1]) ? '' : '+') + precollection + mapper;
                precollection = '';
                mapper = ''
            }
            collections = collections.replace('^-1', "&")
                //print(collections,'redflag')
        }
        collections = (collections).replaceAll('+ -', '-').replaceAll(',', '').replaceAll('-', " - ").replaceAll('+', " + ").replaceAll('((', "( (").replaceAll('))', ") )").replaceAll(')', " )").replaceAll('(', "( ")

        if (collections.replaceAll(' ', '').startsWith('-')) {
            collections = collections.replace(' - ', '-')
        } else if (collections.replaceAll(' ', '').startsWith('+')) {
            collections = collections.replace(' + ', '')

        }
        this.examine = examine
        return (
           purify( (RIssex(collections, true).join(' ') +  
                (limits.FormatComplex == 'all' ?
                    (
                        this.complex.advocates.Aggregate((left, right) => {
                            if (right && !'+-'.includes(right.replace(' ', '')[0])) {
                                return '+' + right
                            }
                            return right ??  ''
                        })
                    ) : ''
                )).replaceAll('&', "^-1").replaceAll('^ -', '^-').replaceAll('^ +', '^')).replaceAll('^ ', '^'))
    }
    optimize(value) {
        return neg(value)
    }
    Inverse(object = null) {
        object = new Expr(object ?? this).Simp();
        let InverseStructure = {}
        if (object.length > 1) {
            return new Expr(engulf(RIssex(object).length > 1 ? engulf(object) : object) + '^-1')
        }
        for (let allElements of object) {
            allElements[0] = new Struct(allElements[0].split(','), { strict: true }).doForValue((element) => {
                    let c = new Expr(element).Simp().neg() + '';
                    return RIssex(c).length > 1 ? engulf(c) : c
                }).destruct()
                // throw new Error([allElements[0],View(object.struct)])
            InverseStructure[allElements[0]] = 1 / allElements[1]
        }
        this.struct = InverseStructure
        return this
    }
    __gt__(expr) {
        let propbs = new Expr(expr).Simp();
        let probsVars = vars(expr).concat(vars(this.Simp() + ''));
        let values = []
        for (let unknow_vars of probsVars) {
            values[unknow_vars] = last(str(Math.random(4)))
        }
        return [values, +calc(this.format(), values).replaceAll(' ', '') > +calc(propbs, values).replaceAll(' ', '')]
    }
    serialize(supplement = null, Recurssion = false) {
        let keyLists, values, imntValues, imntkey, index, powerdegree, powerVar, on, off, onpower;
        keyLists = [];
        values = "";
        off = on = false;
        powerVar = [];
        powerdegree = 0;
        onpower = false;
        let serialized = 0
        for (let mutiples of supplement ?? this.singleExpr) {
            if (Recurssion) {
                if (serialized < this.serialized) {
                    serialized++;
                    continue;
                }
            }
            serialized++, this.serialized++
                if (!Serializable(mutiples)) {
                    if (mutiples.includes('/.'))
                        this.complex.FractLike.append(mutiples)
                    else
                        this.complex.advocates.append(mutiples);
                    this.Unserialized.push(mutiples);
                    continue;
                }
            this.primary.push(mutiples);
            if (IsAlpha(mutiples[0])) {
                mutiples = (1 + mutiples)
            }
            let onflagExpression = false,
                Struct_ = new Struct({}, { functione: exports, strict: true }),
                index = 0;
            imntValues = '';
            imntkey = "";
            mutiples = flex(mutiples);
            let MainValue = priority.toPureState(mutiples);
            mutiples = mutiples.replace(MainValue, '');
            MainValue = MainValue ? ((MainValue.length == 1) && '+-'.includes(MainValue) ? MainValue + 1 : MainValue) : '1'
            if (MainValue == 0) {
                continue
            }
            if (!mutiples && MainValue) {
                this.struct[['#', '1']] = exports(MainValue, (this.struct[['#', '1']] ?? '0'));
                continue;
            }
            while (index < mutiples.length) {
                let current = mutiples[index]
                if (onflagExpression) {
                    imntValues += current
                    if (isBalanced(imntValues) && imntValues.includes('(')) {
                        //print(imntValues,imntkey)
                        if (imntValues != 0) {
                            if (this.peaks[imntkey]) {
                                this.peaks[imntkey] = max(int(imntValues), int(this.peaks[imntkey]))
                            } else { this.peaks[imntkey] = imntValues }
                            Struct_.put([imntkey, imntValues]);
                            imntValues = '', imntkey = '';
                            onflagExpression = false
                        }
                    } else if (!(mutiples > index + 1) && !(imntValues.includes('(')) && IsAlpha(mutiples[index + 1])) {
                        // print('yansh',imntValues)
                        if (this.peaks[imntkey]) {
                            this.peaks[imntkey] = max([int(imntValues), int(this.peaks[imntkey])])
                        } else { this.peaks[imntkey] = imntValues }
                        Struct_.put([imntkey, imntValues]);
                        imntValues = '', imntkey = '';
                        onflagExpression = false
                    }
                    index++;
                    continue
                }
                if (IsAlpha(current)) {
                    if (!this.peaks[imntkey]) {
                        this.peaks[imntkey] = imntValues
                    }
                    if (imntkey) {
                        Struct_.put([imntkey, 1]);
                        imntValues = '', imntkey = '';
                        onflagExpression = false
                    }
                    imntkey = current
                } else if (current == '^') {
                    onflagExpression = true
                }
                index++;
            }
            if (imntkey || imntValues) {
                //  print(imntkey,imntValues)
                if (this.peaks[imntkey]) {
                    this.peaks[imntkey] = max([int(imntValues), int(this.peaks[imntkey])])
                } else { this.peaks[imntkey] = imntValues }
                Struct_.put([imntkey, imntValues ? imntValues : '1'])
            }
            Struct_.sort();
            let inspect = Struct_.destruct()
            if (this.struct[inspect]) {
                this.struct[inspect] = exports(this.struct[inspect], MainValue)
            } else {
                this.struct[inspect] = MainValue
            }
        }
        let all = []
        for (let zero in this.struct) {
            if (this.struct[zero] == '0') {
                delete this.struct[zero]
                all.push(0)
            } else {
                all.push(false)
            }
        }
    }
}

// const f = new ExprFraction('x')
// print(new Fraction('(9x-6y)/(8x-7y) - 2x/(8x-7y)- 8ck(8x-7y)').Struct.struct)
// print(new Expr('+ (+ 2)^3 - 10(+ 2)^2  + 31(+ 2) - 31').Simp().format())                                     
//  print(new Factorize('138yx^2+48y^3-156xy^2-36x^3').defineSet())
//print( new ExprFraction(f.add('1/2')).format(),)
// print(new UnifySyncExpr('9/6x',Expr).mul(new Expr('9')))
// print(new Expr('(9/9x)').Simp().format())
// print(simplifyFraction('(x - 1/2)'))
//print(factorize('abkqx+bkmqx-akmqx+amxq^2-abxq^2-bmxq^2-kqxb^2+xb^2q^2+abqx+akmx+bmqx-abkx-amqx-bkmx+kxb^2-qxb^2+akmqy-abkqy-bkmqy+abyq^2+bmyq^2+kqyb^2-amyq^2-yb^2q^2+abky+amqy+bkmy-abqy-akmy-bmqy+qyb^2-kyb^2'))
// print(factorize('416x^3y^3-895x^2y^3+1726x^2y^2+618xy^3-2067xy^2-1620xy-36y^3x^4-135y^3+108y^2x^5-1104y^2x^4+1021y^2x^3+540y^2-432yx^5+4992yx^4-10740yx^3+7416yx^2'))
                                                                                                                                                  
// print(modernLCM(['(9x-3)','(2x-6)','(3x-2)']))
// 4x^3-38x^2+95xy+70x-10yx^2-175y)(9x-7y
//print(NormalizeScope(factorize('zq^2x^2-kqzx^2+9yzq^2-9kqyz-yq^2x^2+kqyx^2-9q^2y^2+9kqy^2-9xzq^2+9kqxz+9xyq^2-9kqxy-xyzq^2+kqxyz+xq^2y^2-kqxy^2')))
// print(FactorBrack('((12x-4y)(9x-5y) - (6y-7y)(9x-5y))'))

//print(priority.bestfit([['x-5','(x-2)','x-8'],['(+2+3x-6-2x+2)','x-8','15+x-5'],['x-3','x-2','x-6','x-8','x-14'],['x-2','x-8','12-14x+15x-4'],['1']],false,Expr))zzz

//print(get_lcm('5x/(2(9x-5y))- 1/2(9x-5y) -1/3x - 8x/2(9x-5y)- 3/9(x-2)'))


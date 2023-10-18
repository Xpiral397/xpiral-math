import { AssertError, ImproperExnapasionDetected, ImprorperDestructuringCompilationTimeError, NotImplementedError, UnexpectableDataInput } from "../../../controller/exceptions.js";
import {list, None } from "../../../essential/index.js";

var defaulte = 'xpiral.defalute'

export function View(Collections, view = false, tab = 4) {
    try{
    //print('init',tab,Collections)
        let Arrays = [''];
        if (view == None) {
            Arrays = [''];
        }
        const create = Object.keys(Collections).length; let length = 0; let Arrayq = false
        if (Collections instanceof Array) {
            for (const constructive of Collections) {
        //     print(tab)
                length++;
                if (length == 1) {
                    const regex = (length == create) ? '  ],'  :  '  [  '
                }
                const regex = (length == create) ? '  ],'  :  '  :[  '
            // print(constructive instanceof Array,constructive,'rrjiwauhtjicBSCqwdhehfuu')
                if (constructive instanceof Array) {
                    let copy = []
                    for (let unknown of constructive) {
                        if (unknown instanceof Object) {
                            let data;[data, tab] = View(unknown, None, tab)
                            tab += 4;
                            copy.push(`Array:[${data.replace('\n', "\n        ")}],`);
                            //copy.push(`Type of Arrays:{${data}`)
                        }
                        else {
                            copy.push(`${(typeof unknown).replace('string','str').replace('number','num').replace('boolean','bool')}:${unknown}`); 
                        }
                    }
                    Arrays.push(`Array:[${copy}],`);
                    //  throw new Error(``)
                }
                else if (constructive instanceof Object) {
                    let data;[data, tab] = View(constructive, None, tab = tab)
                //   print('questwrje',data)
                    Arrays.push(`Type of Object: ${data}`.replace('\n',''))
                    if (length == 1) {
                        const regex = (length == create) ? '  },' : ' : {  '
                    }
                    const regex = (length == create) ? '  },' : '  {  '
                    //  print(Arrays)
                }
                else {
                    Arrays.push(`${(typeof constructive).replace('string','str').replace('number','num').replace('boolean','bool')}:${constructive},  `);
                }
            }
        }
        else if (Collections instanceof Object) {
        // length++
            let seek = false
            for (let Collection in Collections) {
            //  length++;
                if (Collection instanceof Object) {
                    Collection = View(Collection);
                }
                if (Collections[Collection] instanceof Object) {
                    Arrays.push('{' + Collection,':','[' +View(Collections[Collection],Arrays.join('').length)+']},');
                }
                else {                //Avioding Recurssion Error
                    Arrays.push((!seek ? '{' : '') + Collection, '  :  ', Collections[Collection] + ','); seek = true;
                }
            };if(seek){Arrays[Arrays.length-1] = Arrays[Arrays.length-1]+'}'}
            if (view == true) {
            // console.log(Arrays.join(''))
            }
            if (view == None) {
                return [`${Arrays.join('')}`,tab]
            }
            return `${Arrays.join('')}`
        }
        if (view == true) {
        //   console.log(Arrays.join(''))
            }
        if (view == None) {
            return [`${Arrays.join('')}`,tab]
        }
        return `${Arrays.join('')}`
    }
    catch(e){
        return 'FATAL::::UNREADABLE INPUT'
    }
}
        

export class Struct {
    constructor (object, _kwargs) {
        let kwarg = {
            Functions: (x, y) => (x + y), functione: (x, y) => { x + y }, mode: defaulte, initial: false, strict: false, checkMerit: (key, value) => {
                if ((['0','+0','-0'].includes(('' + value).replace(' ', ''))) && key != '#') {
                    //print('Galary',value)
                    return true
                }
                else 
                    return false
        }}
        for (let _kwargs_ in _kwargs) {
            kwarg[_kwargs_] = _kwargs[_kwargs_]
        }
        let [Functions,mode,initial,strict] =[kwarg.Functions,kwarg.mode,kwarg.initial,kwarg.strict] 
        if (object instanceof Array) {
            if (strict) {
                let _object = {}, swift, i = 1
                //print(object)
                for (let arraysSubset of object) {
                    if (i == 2) {
                        if (_object[swift]) {
                       //  throw new Error(View(object))
                            _object[swift] = Functions(_object[swift], arraysSubset)
                        }
                        else {
                            _object[swift] = arraysSubset;
                        }
                        i = 1; continue
                    }
                    swift = arraysSubset; i++
                };object = _object
            }
            else
                throw new UnexpectableDataInput(`TypeList [${object}] Cannot be objectify ; Use strict method to convert to object`)
        } 
        if (!object&&!initial) {
            this.struct = object
        }
        else if (!object && initial) {
            this.struct = {}
        }
        else if (mode == 'Fraction') {
            const store = new Struct(object);let deno = store.Pop('deno')['deno'];
            this.struct = {}
            this.struct[deno] = store.struct
        }
        else if (mode == 'any') {
            if(object.includes('deno')){
                const store  = object['deno'];
                delete object['deno'];this.struct = {}
                this.struct[store]  = object 
            }
            else {
                throw new Error('w E')
                this.struct = object
            }
        }
        else {
            this.struct = object
        }
        [this.object, this.mode, this.kwargs,this.checkMerit] = [object, mode, kwarg,kwarg.checkMerit]
        Object.defineProperty(this, 'keys', {
            get:()=>{return this.request()},
            set:(value)=>{return this.set(value,true)}
        })
        Object.defineProperty(this, 'values',{
            get:()=>{return this.request(false)},
            set:(value)=>{return this.set(value,false)}
        })
    }
    NotImplement() {
        if (this.struct === null) {
            throw new NotImplementedError(`Cannot performe any action on null struct Data:${this.struct}`)
        }
    }
    *[Symbol.iterator]() {
        for (let iters in this.struct) {
            yield [iters,this.struct[iters]]
        }
    }
    Domerit(checkMerit) {
        checkMerit = checkMerit ?? this.checkMerit
        for (let demands in this.struct) {
            if (checkMerit(demands, this.struct[demands])) {
                // print('patrolingj/SRgsvjlafn ygasoiacuiydu uf vytfL;WEUF7ET898W',demands,this.struct[demands])
                delete this.struct[demands]
            }
        }
        return this
    }
     some(checkMerit) {
        checkMerit = checkMerit ?? this.checkMerit
        for (let demands in this.struct) {
            if (checkMerit(demands, this.struct[demands])) {
               // print('patrolingj/SRgsvjlafn ygasoiacuiydu uf vytfL;WEUF7ET898W',demands,this.struct[demands])
                return true
            }
        }
    return false
    }
    doForValue(functions) {
        let LastResult = '';
        for (let _call in this.keys) {
            let call = this.struct[this.keys[_call]]
           // print(call,'66',View(this.struct))
            this.struct[this.keys[_call]] = functions.length == 1 ? functions(call):functions.length == 2?functions(LastResult,call):functions(LastResult, call, _call);LastResult= this.struct[this.keys[_call]]
        }
    return this
    }
    view(nth) {
     //   print('ggggggggggggggggg',this.struct)
        if (!nth) {
            nth = this.keys.length;
        }
        const structureView = []; let length = 0
        while (nth > length) {
            let [object, obj, que] = [{}].concat(this.get(0, length))
            object[obj] =  que 
            structureView.push(View(object,true));length++;
        }
        return structureView.join('');
    }
    put(object, kwargs){
        var keyword = { mode: this.mode, state: false, strict:false, functions: this.kwargs.functions, functione: this.kwargs.functione };
        for (let parameters in kwargs) {
            if (parameters in keyword) {
                keyword[parameters] = kwargs[parameters];
            }
            else {
                throw new Error(`Unexpectable keyword: ${parameters}`);
            }
        }

       // throw new Error([this.mode,View(keyword),View(kwargs)])
        if (this.kwargs.strict||keyword.strict) {
            object = new Struct(object,{strict:true}).struct;
        }
        if (keyword.mode == 'Fraction') {
         //   throw new Error([this.mode,View(keyword),View(kwargs)])
            const data = new Struct(Object.create(object), { mode: keyword.mode });
            const pairs = data.get(0, 0);
            if (this.includes(pairs[0])) {
           //     throw new Error(View({ deno: '7v', num: '6', coeff: '6y' }))
                this.update(object, { reqArgument: { state: true,mode : keyword.mode } });
            }
            else {
                this.struct[pairs[0]] = pairs[1];
            }
        }
        else {
            this.update(object, { reqArgument: { state: keyword.state }, functions: keyword.functions, functione: keyword.functione });
        }
    }
    request(key = true) {
        if (key) {
            return Object.keys(this.struct);
        }
        return Object.values(this.struct);
    }
    append(key, values, type){
        this.struct[key] = values;
    }
    forValue(rest) {
        for (const key in this.struct) {
            this.struct[key] = rest(value)
        }
        return this
    }
    sort(key = true) {
        let Dict = {}, mapperElement = this.keys; mapperElement.sort(); //print(mapperElement,'gggg')
        for (let keys of mapperElement) {
            Dict[keys] = this.struct[keys]
        }
        this.struct = Dict
    return this
    }
    ammend(newKey, oldKey, regulate = false) {
        this.NotImplement();
        if (regulate) {
            let index = this.get(oldKey);
            let report =  this.remove(oldKey); let index_ = 0; let newObject = {};
            if (report) {
                for (const ascertain in this.struct) {
                    if (index_ == index[0]) {
                        newObject[newKey] = index[1];
                    }
                    newObject[ascertain] = this.struct[ascertain];
                    if (index_ < index[0]) {
                        index_++;
                    }
                }; this.struct = newObject;
            }
            else {
                return false;
            }
        }
        else {
            const copy = this.struct[oldKey];
            this.struct[newKey] = copy;
            let report = this.remove(oldKey);
            return this;
        }
    return 'OperationNotSuccessful'
    }
    set(value, context) {
        if (typeof value == 'array' || value.length > (context ? 2 : 3)) {
            throw AssertError(`not enough values to unpack (expected ${context ? 2 : 3},${context.length}got 2)`);
        }
        if (context) {
            this.ammend(value[0], value[1]);
        }
        else {
            if (value[3] || value[3] == 0) { var count = 0; }
            for (let key in this.struct) {
                if (this.get(key)[1] == value[0]) {
                    this.struct[key] = value[1];
                }
                if (value[3] || value[3] == 0) { count++; };
                if (count >= value[3] && value[3]) { break; }
            }
        }
    }
    includes(key){
        this.NotImplement();
        return this.keys.includes(key);
    }
    contain(values) {
        this.NotImplement();
        return this.values.includes(values);
    }
    destruct() {
        let DestructinVarable = [],i = 0
        while (i < this.keys.length) {
            DestructinVarable.push(this.keys[i]);DestructinVarable.push(this.values[i]);i++
        }
    return DestructinVarable
    }
    remove(key, index = false) {
        this.NotImplement();
        const object = {}
        if (key) {
            for (let it in this.struct) {
                if (it == key) {
                    continue
                }
                object[it] = this.struct[it]
            }
            this.struct = object
        }
        else if (index) {
            let index = 0;
            for (let it in this.struct) {
                if (index == key) {
                    continue
                }
                object[it] = this.struct[it]; index++;
            }
        }
    }
    update(objects, _argument) {
        if (objects instanceof Array) {
             throw new UnexpectableDataInput(`TypeList [${objects}] Cannot be objectify ; Use strict method to convert to object`)
        }
        let continue_ = true;
        try {
            this.keys
        }
        catch (e) {
            this.struct = objects; continue_ = false;
        }
        if(continue_) {
            const kwargs = { truncate: true, reqArgument: { state: true, mode: this.mode }, mode: defaulte, functione: (left, right, sep = ' ') => { return (left + sep + right); }, functions: (left, right, sep = ' ') => { return (left + sep + right); } };
            for (const argument in kwargs) {
                if (list(_argument, true).includes(argument)) {
                    if (argument) {
                        kwargs[argument] = _argument[argument];
                    }
                }
            }
            if (kwargs.reqArgument.state) {
                objects = new Struct(objects, { mode: kwargs.reqArgument.mode }).struct
             //   throw new Error(objects.view());//.struct;

            }
            if (typeof objects == 'object') {
              //  throw new Error(objects.view());
                for (const key in objects) {
                    if (this.includes(key)) {
                        if (typeof this.struct[key] == 'object') {
                            for (const LowerLevelObject in objects[key]) {
                                if (list(this.struct[key], true).includes(LowerLevelObject)) {
                                    if (kwargs.truncate && this.struct[key][LowerLevelObject] == 'object') {
                                        const complex_1 = new Struct(this.struct[key][LowerLevelObject], { functions: functions, mode: mode });
                                        const complex_2 = new Struct(objects[key][LowerLevelObject], { mode: kwargs[mode] }).struct;
                                        // complex_1.update(complex_2.struct)
                                      //  throw new Error(complex_1.struct);
                                        this.struct[key][LowerLevelObject] = complex_1;
                                    }
                                    else {
                                        //   throw new Error([this.struct[key][LowerLevelObject],'99',objects[key][LowerLevelObject]])
                                      //  throw new ImprorperDestructuringCompilationTimeError()
                                        this.struct[key][LowerLevelObject] = kwargs.functions(this.struct[key][LowerLevelObject], objects[key][LowerLevelObject]);
                                        //throw new Error(this.get(0,0)[1].num)
                                    }

                                }
                                else {
                                    this.struct[key][LowerLevelObject] = objects[key][LowerLevelObject];
                                }
                            }
                            //throw new Error(this.get(0, 0)[1].num)
                        }
                        else {
                            //    throw new Error(kwargs.functione)
                            this.struct[key] = kwargs.functione(objects[key], this.struct[key]);
                        }
                    }
                    else {
                        this.struct[key] = objects[key];
                    }
                }
            }
        }
    }
    pop(index = 0) {
        this.NotImplement();
        let x = Object.keys(this.struct);x = [index?index:x.length-1];
        if (x != -1) {
            const copy = this.struct[this.get(false, index)];
            this.remove[copy[0]];
            return copy;
        };
    }
    Pop(key) {
     //   throw new Error(View(this.struct))
        const connectValue = this.struct[key];this.remove([key]);
        let connectkey = {};
        connectkey[key] = connectValue;
        return connectkey
    } 
    get(key, index) {
        this.NotImplement();
        if (key) {

            return [Object.keys(this.struct).indexOf(key), this.struct[key]];
        }
        else if (index > -1) {
            const pairs = Object.keys(this.struct)[index];
            return [pairs, this.struct[pairs]];
        }
    }
}

//const replication = new Struct({deno:'7xy',num:'6xy',coeff:'17xy'}, {mode:'Fraction',functione: (left, right) => { return left * right } });//{ deno: { 'deno': '7y' }, num: '334', coeff: '22' })
/*replication.put({ 'h': ['6y', '8', 8,['6y', 'false', 8,[1,[true,true,false,NaN],2,3],]]} )


replication.put({ deno: '7v', num: '6', coeff: '6y' }
)
replication.put({ deno: '7Sv', num: '6', coeff: '6y' }
)S
r
replication.put({ deno: '7yv', num: '6', coeff:'7' })

)*/
//replication.put({ num: 'wqS7v', deno: '7v', coeff: '6y' }
//)
//console.log('hhh', replication.struct)
/* replication.put({ 'deno': '16' },{functione:(left,right)=>{return left + '+' + right}} )
replication.put(['x', 85],{strict:true})
replication.doForValue((x) => { let yy = x ** x; return yy})
//console.log(replication.sort().destruct())
 */
//print(',',replication.ammend('8x-5x^2y','8x-5xy').view())

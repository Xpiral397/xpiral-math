class Enumerate{
    constructor(x) {
        this.x = x
    }
    * [Symbol.iterator](){
        let _x = -1;
        for (let yield_ of this.x) {
            _x++;
            yield [_x, yield_]
        }
    }
}
export var enumerate = (x) => new Enumerate(x)
export class List extends Array {
    constructor(object)
    {
        super(object);
        if(object instanceof Array){
            this.object = object;
        }
        else if(typeof object == 'string'){
            let  cousin = []
            for(const xrobj of object){cousin.push(xrobj);}
            this.object = cousin
        }
        else {
            return this.object
            throw new Error(`Invalid constructive arrguments: ${object}`)
        }
        this.self = this.object
    }
    *[Symbol.iterator]() {
        for (let iters of this.object) {
            yield iters
        }
    }
    append(...values){
        for(const xrobj of values){this.object.push(xrobj)}
    }
    map(func) {
        this.object = this.object.map(func)
        this.self = this.object
    }
    displace = (start, end) => {
       let x =[]
       for ( ; start < end ; start++) {
        x.push(start)
    }
   // console.log(x)
       for(let indexes in this.object) {
       
          if(x.includes(+indexes)){
         //   console.log(indexes)
              delete this.object[indexes]
          }
        }
      /// console.log('recomemdedeede',this.object)
    }
    delete(x){
        delete this.object[this.object.indexOf(x)]
        this.self = this.object
    }
    clear(){
        this.self = this.object = []
    }
    concat(...values){
        values = values.length ==1?values[0]:values
        for(const xrobj of values){
            this.object.push(xrobj)
        }
    }
    sort(accendingOrder = true){
        this.object.sort();
        if(!accendingOrder){
            this.object.reverse()
        }
        this.self = this.object
        return this.object
    }
    remove(index){
        let x = Object.assign(this.object);this.object = []
        for(const xrobj in x){
            if(index == xrobj){continue}
            this.append(x[xrobj])
        }
        //throw new Error([this.self,this.object])
        this.self = this.object
    }
    join = (separator) => { return this.object.join(separator ? separator : '') }
    Aggregate(x) {
        let view ='';let t= true
        if (typeof x == 'function' ) {
            for (const rest of this.object) {
                if (!rest) { continue };
                if (t) {
                    view +=(rest).replace('+',' + ').replaceAll('-',' - '); t=false
                }
                else
                    view +=(x(this.object[this.object.indexOf(rest)-1], rest)).replace('+',' + ').replaceAll('-',' - ')
            }
        }
    return view
    }
    makeChanges(index, value,functions) {
        this.object[index] = functions(this.object[index], value);this.self = this.object
    }
    insert(index,values){
        values = values.length ==1?values[0]:values
        let xobj = Object.assign(this.object);this.object = []
        for(var xrobj in xobj)
        {
            this.object.push(xobj[xrobj])
           // console.log(xrobj==index,xrobj,index);
            if(+xrobj == index){
                this.concat(values)
            }
     
        }
        this.self= this.object
    }
    
}
export function lists(object) {
    return new List(object?object:[])
}

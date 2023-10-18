import { purify, str } from "../../essential/index.js";

export class lang{
    constructor() {
        this.lang = ['abcedfghijklmnopqrstuvwxyz␐']
        this.special = ['稂', '稃', '稄', '稅', '稆', '稇', '稈', '稉', '稊', '程', '稌', '稍', '税', '稏', '稐', '稑', '稒', '稓', '稔', '稕', '稖', '稗', '稘', '稙', '稚', '稛', '稜', '稝', '稞', '稟', '稠', '稡', '稢']
        this.Langformat = this.lang.map(e => [e.split(''), e.toUpperCase().split('')])
        this.alpha = this.Langformat[0][1] + this.Langformat[0][0]+ this.special
        this.num = '123+456-7890'
    }
    print(...expr) {
        console.log(expr)
    }
    alphas() {
        return this.alpha
}
    IsAlpha(instance, value = false) {
        if (instance && (value || instance.length > 1)){
            for (var _instance in instance) {
                if(! (this.Langformat[0][1].includes(instance[_instance]))) {
                    return false
                }
            }
        }
        return (this.alpha.includes(instance)?true:false)
    }
    
    Isdelegate(instance) {
        x = [];let num = 0;
        if (instance.length > 1) {
            for (var c in instance) {
                 if((! (this.Langformat[0][1].includes(instance[c])) || !(this.Langformat[0][0].includes(instance[c])))&&this.num.includes(instance[c])) {
                     if (num == 1) {
                         continue;
                     }
                     x.push(true);
                     num++;
                }
                else if( this.Langformat[0][1].includes(instance[c]) || this.Langformat[0][0].includes(instance[c])){
                     x.push(true);
                }
                if (x.length == 2) {
                    return true;
                }
            }
        }
        return (this.Langformat[0][1].includes(instance) || this.Langformat[0][0].includes(instance))?true:false
    }
    IsNumeric(value) {
        for (let c of (value+'')) {
            if (!this.num.includes(c)){
                return false;
            }
        }
    return true;
    }
    Odd(value) {
        return value%2 == 1? true: false;
    }
    Even(value) {
        return value%2 == 1? false:true;
    }
    isPrimeFactor(value, sample) {
        return ((+value / +sample).toString().split(".").length == 1)?value == 1?false:true:false;
    }
    isperfect(num) {
        if(str(num)[0]=='-'){
            num = -num
        }
        let store = num**0.5
        return !str(store).includes('.')
    }
    Ispositive(value) {
        switch (typeof(value)) {
            case 'string':
                return (value[0] != '-') ? true : false
            case 'number':
                return (value.toString()[0] != '-') ? true : false 
        }
        return value[0] == '+'?true:false;
    }
    IsNeg(value) {
        return purify(str(value))[0] == '-'
    }
    ISdirect(instance, value = false) {
        if (instance = 'any') {
            if (this.IsAlpha(value[0]) || this.IsNumeric(value[0]), "*+-".includes(value[0])) {
                return true
            }
        }
        
    }
    Issex(value) {
        let braketVariable = 0; let powerVariable = 0;
        let onpower = false; let onpowerbar = false;
        let counter = 0; let _countervalue = 0;value=value.replaceAll(' ','').replace("--","+").replace('-+','-').replace('+-','-')
        while (counter <= value.length - 1) {
            let value_ = value[counter]
            if (onpower && value_ == '(') {
                onpowerbar = true;
            }
            if (value_ == '(') {
                //8-9c(5x-5y)
                if (counter != 0 && "-+".includes(value_[counter - 1]) && (counter - 2 >= 0)){
                    return false;
                }
                else {
                    onpowerbar = true;
                }
                onpowerbar = true;
            }
            if ( !onpowerbar && this.IsAlpha(value_) && counter < (value.length - 1) && '-.*'.includes(value[counter + 1])) {
                return false;
                
            }
            if (onpower && !onpowerbar && "-+".includes(value_) && value[counter - 1] != "^")
            {
                 //  console.log(value_,value,counter,counter <= value.length-1)
                return false;
            }
             if (onpower && !onpowerbar && (counter+1 !=value.length-1)&&"-+".includes(value[counter+1])&& "-+".includes(value_) && value[counter - 1] != "^")
            {
                 return false,2;
                    console.log(counter,counter <= value.length-1)
                }
            if (onpowerbar) {
                if (value_ == "(") {
                    braketVariable++;
                }
                else if (value_ == ")") {
                    braketVariable--;
                }
                if (braketVariable == 0) {
                    if (!(counter == value.length - 1) && "-+".includes(value[counter + 1])) {
                        return false;
                    }
                    else {
                        onpower, onpowerbar = false;
                    }
                }
            }
            if ("-+*^".includes(value_) || this.IsNumeric(value_) || this.IsAlpha(value_)) {
                if (value_ == '^' && (counter + 1) > (value.length - 1) && value[counter + 1] == '(') {
                    onpowerbar = true;
                }
                 if (value_ == '^' ) {
                    onpower = true;
                }
                else if (this.IsAlpha(value_) && counter != 0 && ("-+".includes(value[counter - 1]))){
                    return false;
                }
            }
            counter++;    
        }
        return  true 
    };
    Sort(x, y) {
        return x.length > y.length ? x : y
    }
    sort(x, y) {
        return x.length < y.length ? x : y
    }
    remove(value, remove) {
        const element = []; let firsttime = 0;
        for (let index = 0; index < value.length; index++) {
            if (value[index] == remove && firsttime == 0) {
                firsttime++;
               // console.log('1')
                continue; 
            }
            element.push(value[index]);   
        }
    return element
    }
    DeleteIndex(x, index) {
        let v = [];let every_ = []
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
    //console.log('weWFWFW4',v)
    return v
    }
    context(task, stack) {
        const restruct = []
        for (let stacks in stack) {
            if (task.includes(stack[stacks])) {
                restruct.push(stack[stacks])
                task = this.remove(task, stack[stacks]);
            }
            
        }
        
    return restruct        
    }
    SortByLength(x) {
        let highest = {};g = []
        for (let index = 0; index < x.length; index++) {
            highest[x[index]] = x[index].length;
            g.push(x[index]);

        }
        

    }
    IntAll(x,split =false) {
        if (typeof(x)  == 'string') {
            x = x.split(split?split:",")
        }
        for (let v in x) {
            x[v] = +x[v]
        }
        return x
    }
    recontext(task, stack) {
        //console.log(this.IntAll((task + "," + stack).split(',')), 'ergergrerrgrw', this.context(task, stack));
        let relife = this.context(task, stack);let relife_2 = (task + ","+stack).split(',')
        for (let ontextTask in relife) {
            //console.group(this.IntAll(relife_2),"'ffefe'",relife[ontextTask],ontextTask,this.remove(this.IntAll(relife_2), relife[ontextTask]))
            relife_2 = this.remove(this.IntAll(relife_2), relife[ontextTask])
             //console.group(relife_2,"'ffefe'")
            
        }
         //  console.group(relife_2,"efwef'ffefe'")
        return relife;
           
    }
    contain(task1, task2) {
        if (task1 instanceof value && task1 instanceof value) {
            let u = false;
            this.Sort(task1,task2).forEach(element => {
                this.sort(task1,task2).forEach((element_) => {
                    if (element == element_) {
                        u = true;
                    }
                })
            });
            return u;
        }
        let task = this.Sort(task1, task2);
        let _task2 = this.sort(task1, task2);
        for (let x in task){
            for (let y in _task2) {
                if (task[x] == _task2[y]) {
                    return true
                }
            }
        }
        return false;
    }
    IsIntable(value) {
        return !this.contain(value,`${this.alpha}(-+\%*^)`);
    }
} 

//let x = new lang();
//console.log(x.Issex(' ---9x(8)x'));
//console.log(x.IsAlpha('-t'));


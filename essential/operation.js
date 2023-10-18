import { Expr } from '../tools/index.js'
import * as  operations from './functions.js'


export class _2DExpression extends Expr{
    constructor(expr,_kwargs){
    super(expr, {callback:false});
    this.expr  =  expr
    this.operations = operations
    this.notation  = operations.notation
    this.cb = operations.notation.cb 
    }
    valueOf(){
        this.format()
    }
    aRange(){
        operations.aRange()
     }

     aLent(){

    }

    all(){

    }

    any(){

    }  


   calc(){

   }
   checkAlpha(){

   }  
   
   checkExit(){}  

   compare(){}  

   contain(){}

   contany(){}  

   count(){} 
   
   cull(){}  
   
   curl(){}  
   
   cvars(){} 
   
   ChinesRandom(){} 
   
   ClearFRactionByFactorization(){} 
   
   CompileExpr(){} 
   
   Copy(){} 
   
   Crocktage(){} 

   degree(){} 
   
   destruct(){} 
   
   div(){} 
   
   dynamics(){} 
   
   DeleteIndex(){} 
   
   Div(){} 
   
   Divs(){} 

   engulf(){} 
   
   ExpandThrough(){} 
   
   eq(){} 
   
   equals(){} 
   
   exportExprKey(){} 
   
   Exprs(){} 
   
   exports(){} 
   
   ExprssionSpliter(){} 
   
   EliminateSideFraction(){}  
   
   expo(){} 
   
   factorize(){} 
   
   fallback_operator(){}  
   
   format(){} 
   
   flit(){} 
   
   fallback_operators(){}  
   
   filter(){}  
   
   flatExpr(){} 
   
   flatNumberList(){} 
   
   flex(){} 
   
   flex2(){} 
   
   FactorBrack(){} 
   
   For(){} 

   gbracHandler(){} 
   
   getDeno(){} 
   
   getDomDeno(){} 
   
   get_lcm(){}  
   
   getFirstPhase(){} 
   
   getScope(){} 
   
   getScopeContext(){} 
   
   get_deno(){} 
   
   getbrack(){} 
   
   getvars(){} 

   id(){} 
   
   index(){} 
   
   int(){} 
   
   int2(){} 
   
   isBalanced(){} 
   
   IsIntable(){}  
   
   IntAll(){} 
   
   IsAlpha(){} 
   
   IsNeg(){} 
   
   IsNumeric(){} 
   
   IsPrefixedExpr(){} 
   
   Issex(){} 

   last(){} 
   
   len(){} 
   
   limit(){} 
   
   list(){} 
   
   LikeTerms(){} 
   
   Length(){} 

   max(){} 
   
   maxByValue(){} 
   
   maxByalpha(){} 
   
   Maximize(){} 
   
   min(){} 
   
   modernLCM(){} 
   
   
   nestedlikeTerms(){} 
   
   notation(){} 
   

   NormalizeScope(){} 


  opposite(){} 
  
  order(){} 
  
  ordersKey(){} 
  
  OrderExpr(){} 
  
  outlet(){} 

   pairedElements(){} 
   
   print(){} 
   
   purify(){}  

   rcount(){} 
   
   reduceBrackScope(){} 
   
   reduceFractionLevel(){} 
   
   reduceScope(){} 
   
   rematch(){} 
   
   remove(){} 
   
   render(){} 
   
   rengulf(){} 
   
   replace(){} 
   
   resloveFraction(){} 
   
   reverse(){} 
   
   rmvspec(){} 
   
   RIssex(){} 
   
   Refrex(){} 
   
   Reverse(){} 
   
   Runimp(){} 

   //s
   simpleKey(){} 
   
   space(){} 
   
   spec(){} 
   
   str(){} 
   
   Serializable(){} 
   
   SortObject(){} 
   
   Symbols(){} 
   
   SyncExpr(){} 

   //t
   takelent(){} 
   
   termType(){}  
   
   toExprObject(){} 
   
   toObject(){} 
   
   tolist(){} 
   
   Trackprops(){} 

   //u 
   unzip(){} 

   //v
   vars(){} 
   
   VerifyExpression(){} 

   //w
   wrapFact(){} 
   
   wrapFacts(){} 
   
   wrapFract(){} 

   //z
   zindex(){} 
   
   zip(){} 
   


}

export class Expression extends _2DExpression{
    constructor(expr){
        super(expr)
        this.copy   =  expr
    }
}

var x = new Expression('3x-(9x-5)')

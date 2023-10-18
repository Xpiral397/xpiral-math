
export  class NotchTypeLockedError extends Error{
    constructor(msg = " can't currently access NotchType  :Error:-Notchtype-1:7:6 NotchType is either Locked or inaccessible state"){
        super(msg)
    }
}
export class ParenthesisMismatchError extends Error{
    constructor(msg = ''){
        super("ParenthesisMismatchError:" +msg);
    }
}
export class AssertError extends Error{
    constructor(msg = ''){
        super("AsserError:" +msg);
    }
}

export class NotImplementedError extends Error{
    constructor(msg = ''){
        super("NotImplementedErrror:" +msg);
    }
}
export class KeyError extends Error{
    constructor(msg = ''){
        super("NotImplementedErrror:" +msg);
    }
}export class UnexpectableDataInput extends Error{
    constructor(msg = ''){
        super(msg?msg:"SyntaxError: typeof OF none - key Object is undefined ");
    }
}

export class ImproperExnapasionDetected extends Error{
    constructor(msg = ''){
        super("Expanding this kind of expression my damage your project " +msg);
    }
}
export class TrackPropsError extends Error{
    constructor(msg = ''){
        super(msg)
    }
}
export class ImprorperDestructuringCompilationTimeError extends Error{
    constructor(msg = ''){
        super("Object with same key needs the parameters function or functione defined:::make sure that value with dictionary object with same key needs only functione to define how to add object with same key " +msg);
    }
}

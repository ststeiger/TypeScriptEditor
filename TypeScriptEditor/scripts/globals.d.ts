declare var require: any;
declare var $: any;

// Depends on ace
declare module "ace/ace" {
    export = ace;
}

declare module AceAjax{
    interface IEditSession{
        // Only present if a worker is being used
        $worker: any;
    }
}

declare module "ace/range" {
    var ace: {
        Range: typeof AceAjax.Range;
    };
    export = ace;
}

declare module "ace/lib/lang" {
    var ace: { deferredCall };
    export = ace;
}

declare module "ace/keyboard/hash_handler" {
    var foo: { HashHandler: any };
    export = foo;
}

declare module "ace/lib/event_emitter" {
    var foo: { EventEmitter: any };
    export = foo;
}

declare module "ace/lib/oop" {
    var oop:any;
    export = oop;
}

declare module "ace/worker/mirror" {
    var foo:{Mirror:any};
    export = foo;
}

declare module "ace/document" {
    var foo:{Document:any};
    export = foo;
}

// hopefully we wouldn't need this eventually. 
// But the files in the worker are really stingy about relative paths and we are forced to use full paths
declare var define:any;

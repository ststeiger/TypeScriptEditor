declare var require: any;
declare var $: any;

declare module "ace/ace" {
    var ace: any;
    export = ace;
}

declare module "ace/range" {
    var ace: {
        Range: any;
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

/**
 * Our code that need to be TSified
 */


declare module "EditorPosition" {
    var ace: { EditorPosition: any };
    export = ace;
}

declare module "ace/mode/typescript/typescriptServices" {
    var foo: { Services: any; TypeScript: any };
    export = foo;
}

declare module "ace/mode/typescript/lightHarness" {
    var foo: { TypeScriptLS: any };
    export = foo;
}
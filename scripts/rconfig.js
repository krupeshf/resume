require.config({
    "urlArgs": "v=0.0.1",
    "baseUrl": "/scripts/",
    "paths": {
        "lib": "../lib/",

        //utility library
        "lodash": "../lib/lodash/lodash.4.13.1.min",

        //for css and base for material design ui
        "bootstrap": "../lib/bootstrap/bootstrap.3.3.6.min",

        //not using latest 3.x version of jquery because bootstrap uses less than 3.0
        "jquery": "../lib/jquery/jquery.2.2.4.min",

        //if you want to require a file just as text
        "text": "../lib/require/text",

        //frame work libs
        "knockout": "../lib/knockout/knockout.3.4.0.min",
        "durandal": "../lib/durandal",
        "plugins": "../lib/durandal/plugins",
        "transitions": "../lib/durandal/transitions",
    }
});
console.debug("require config done");
/// <reference path="../lib/lodash/lodash.d.ts"/>
/// <reference path="../lib/jquery/jquery.d.ts"/>
/// <reference path="../lib/bootstrap/bootstrap.d.ts"/>
/// <reference path="../lib/durandal/durandal.d.ts"/>

declare var require: any;

//use import where the definitions are available
import u = require("lodash");
import $ = require("jquery");
import bootstrap = require("bootstrap");

import router = require("plugins/router");
import utils = require("utils");

//cannot use export class AppShell
//somehow export can only be used for the dependency calls - example is Utils
class AppShell {
    public viewUrl = "app_shell.html";
    public router = router;
    public activate() {
        console.debug("Setting routes for SPA");
        var routes: DurandalRouteConfiguration[] = [{
            route: "",
            moduleId: "home",
            title: "PageTitle",
        }
        ];
        router.map(routes);
        return router.activate();
    }

    public attached() {
        console.log(bootstrap);
        $('.dropdown-toggle').dropdown();
    }

    public compositionComplete() {
        $('.dropdown-toggle').dropdown();
    }

}

export = AppShell;
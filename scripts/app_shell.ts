declare var require: any;

import u = require("lodash");

import "plugins/router"
let router = require("plugins/router");

//cannot use export class AppShell
//somehow export can only be used for the dependency calls - to be confirmed
class AppShell {
    public viewUrl = "app_shell.html";
    public router = router;
    public activate() {
        console.debug("Setting routes for SPA");
        router.map([{
            route: "",
            moduleId: "home",
            title: "PageTitle",
        }]);
        return router.activate();
    };
}

export = AppShell;
define(["require", "exports", "jquery", "bootstrap"], function (require, exports, $, bootstrap) {
    "use strict";
    var router = require("plugins/router");
    //cannot use export class AppShell
    //somehow export can only be used for the dependency calls - example is Utils
    var AppShell = (function () {
        function AppShell() {
            this.viewUrl = "app_shell.html";
            this.router = router;
        }
        AppShell.prototype.activate = function () {
            console.debug("Setting routes for SPA");
            router.map([{
                    route: "",
                    moduleId: "home",
                    title: "PageTitle",
                }]);
            return router.activate();
        };
        AppShell.prototype.attached = function () {
            console.log(bootstrap);
            $('.dropdown-toggle').dropdown();
        };
        AppShell.prototype.compositionComplete = function () {
            $('.dropdown-toggle').dropdown();
        };
        return AppShell;
    }());
    return AppShell;
});

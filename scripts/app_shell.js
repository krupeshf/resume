define(function (require) {
    var router = require("plugins/router");

    function AppShell() {
        var self = this;
        self.viewUrl = "app_shell.html";
        self.router = router;

        self.activate = function () {
            console.debug("Setting routes for SPA");
            router.map([{
                route: "",
                moduleId: "home",
                title: "Krupesh",
            }]);
            return router.activate();
        };
        return self;
    }

    return new AppShell();
});

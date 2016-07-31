import router = require("plugins/router");

class SkillsShell {
    public viewUrl = "skills_shell.html";
    // variable name should be "router" - The root router will then detect the presence of the `router`
    // http://durandaljs.com/documentation/Using-The-Router.html
    public router = router.createChildRouter().makeRelative({ fromParent: true });
    public activate() {
        console.debug("Setting sub routes for Skills");
        let routes: DurandalRouteConfiguration[] = [
            {
                route: "web",
                moduleId: "skills/web",
                title: "Web Tech",
            },{
                route: "database",
                moduleId: "skills/database",
                title: "Databases",
            },{
                route: "language",
                moduleId: "skills/language",
                title: "Languages",
            },{
                route: "automation",
                moduleId: "skills/automation",
                title: "Automation",
            },{
                route: "platform",
                moduleId: "skills/platform",
                title: "Platforms",
            },{
                route: "tool",
                moduleId: "skills/tool",
                title: "Tools",
            },{
                route: "server",
                moduleId: "skills/server",
                title: "Servers",
            }
        ];
        this.router.map(routes);
        // need not activate router because its already been done by parent router
    }
}

export = SkillsShell;
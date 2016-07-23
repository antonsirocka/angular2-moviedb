System.register(['@angular/platform-browser-dynamic', './components/main.component', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, main_component_1, http_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent, http_1.HTTP_PROVIDERS);
        }
    }
});
//# sourceMappingURL=main.js.map
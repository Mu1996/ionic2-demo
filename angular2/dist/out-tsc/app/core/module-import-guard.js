// https://angular.io/styleguide#!#04-12
// https://angular.io/styleguide#!#04-12
export function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=/Users/muyonghui/ionic2-demo/angular2/src/app/core/module-import-guard.js.map
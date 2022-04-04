"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MiniRouteLoader {
    static loadRoutes(expressApp, routesConfig, controllerClass) {
        for (const route of routesConfig) {
            MiniRouteLoader.configureRoute(expressApp, route, controllerClass);
        }
    }
    static configureRoute(expressApp, route, controllerClass) {
        console.log('configuring route', route);
        if (route.length != 2) {
            throw 'Error: invalid route format';
        }
        const fullURI = route[0];
        const methodName = route[1];
        if (typeof fullURI != 'string' || typeof methodName != 'string') {
            throw 'Error: invalid route format';
        }
        let restAction = fullURI.split(' ')[0];
        const endpointURI = fullURI.split(' ')[1];
        if (typeof restAction != 'string' || typeof endpointURI != 'string') {
            throw 'Error: invalid route format';
        }
        restAction = restAction.toLowerCase();
        if (restAction == 'get') {
            expressApp.get(endpointURI, (req, res) => __awaiter(this, void 0, void 0, function* () {
                return yield controllerClass[methodName](req, res);
            }));
        }
        if (restAction == 'post') {
            expressApp.post(endpointURI, (req, res) => __awaiter(this, void 0, void 0, function* () {
                return yield controllerClass[methodName](req, res);
            }));
        }
    }
}
exports.default = MiniRouteLoader;
//# sourceMappingURL=index.js.map
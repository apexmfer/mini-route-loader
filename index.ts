


export type APICall = (req: any, res: any) => any

export default class MiniRouteLoader {

 

  static loadRoutes(expressApp: any, routesConfig: any, controllerClass: any) {
    for (const route of routesConfig) {
      MiniRouteLoader.configureRoute(expressApp, route, controllerClass)
    }
  }

  static configureRoute(expressApp: any, route: any, controllerClass: any) {
    console.log('configuring route', route)

    if (route.length != 2) {
      throw 'Error: invalid route format'
    }

    const fullURI: string = route[0]
    const methodName: string = route[1]

    if (typeof fullURI != 'string' || typeof methodName != 'string') {
      throw 'Error: invalid route format'
    }

    let restAction = fullURI.split(' ')[0]
    const endpointURI = fullURI.split(' ')[1]

    if (typeof restAction != 'string' || typeof endpointURI != 'string') {
      throw 'Error: invalid route format'
    }

    restAction = restAction.toLowerCase()

    if (restAction == 'get') {
      expressApp.get(endpointURI, async (req: any, res: any) => {
        return await controllerClass[methodName](req, res)
      })
    }

    if (restAction == 'post') {
      expressApp.post(endpointURI, async (req: any, res: any) => {
        return await controllerClass[methodName](req, res)
      })
    }
  }
}

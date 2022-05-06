#### Mini Route Loader

 Route file configuration for express 

 See the unit test for implementation instructions 


## In your express initialization code 



        import MiniRouteLoader from 'mini-route-loader'

        import APIController from '../controllers/APIController'

        const Routes = JSON.parse( fs.readFileSync('./server/routes/routes.json') )

        this.apiController=new APIController(  )
                



        const app = express()

        MiniRouteLoader.loadRoutes( app, Routes , this.apiController  )

        app.listen(apiPort, () => {
        console.log(`API Server listening at http://localhost:${apiPort}`)
        })




## Anatomy of a route 


#### Each route must have the following: 

Type: A string, either 'get' or 'post' for the type of REST request to expect 

uri: The uri onto which to expose the route with express 

method: The name of the controller method to call (the method must extend APICall

#### Each route may additionally specify the following optional attributes: 

controller: The name of the controller that has the methods for this route 

appendParams: An object that will be appended to 'req' just before it is passed to the method in the controller.  This will be appended at 'req.router.params'




## In routes.json 


  [ 
    {"type":"get","uri":"/api/ping","method":"ping","controller":"api"}
 
]


## In your controller class



        import { APICall } from "mini-route-loader"


        export default class APIController  {

            ping: APICall =  async (req: any, res: any) => {
                return res.status(200).send('Pong')
            }

        }




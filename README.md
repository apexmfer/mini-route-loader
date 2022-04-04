#### Mini Route Loader




## In your express initialization code 

`

import MiniRouteLoader from 'mini-route-loader'

import APIController from '../controllers/APIController'

const Routes = JSON.parse( fs.readFileSync('./server/routes/routes.json') )




this.apiController=new APIController(  )
        



const app = express()

MiniRouteLoader.loadRoutes( app, Routes , this.apiController  )

app.listen(apiPort, () => {
console.log(`API Server listening at http://localhost:${apiPort}`)
})



`

## In routes.json 

`
[
    ["get /api/ping", "ping"]

]
`

## In your controller class

`

import { APICall } from "mini-route-loader"


export default class APIController  {

    ping: APICall =  async (req: any, res: any) => {
         return res.status(200).send('Pong')
    }

}

`


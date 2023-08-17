import clientConfig from './clientConfig'
import process from "process"
import { ApolloClient, InMemoryCache, HttpLink , ApolloLink } from '@apollo/client'

const link = new HttpLink({
  uri: clientConfig.graphqlUrl,
  credentials: 'include'
})

// chaque requete passera par ce middleware , check si un token de session woocommerce est stocké dans le localStorage, et le rajoute dans l'header de la requete

const middleware = new ApolloLink((operation , forward) =>{
  const session = (process.browser) ? localStorage.getItem("woo-session") : null

  if (session){
    operation.setContext(({ headers = {} }) => ({
      headers : {
        "woocommerce-session" : `Session ${session}`
      }
    }))
  }

  return forward(operation)
})

// chaque reponse renvoyer par wp passera par ce middleware, check dans l'header de la reponse si il y un token de session woocommerce et le stock/maj dans le localStorage

const afterware = new ApolloLink((operation, forward) =>{
  return forward(operation).map(response =>{

    const context = operation.getContext()
    const { response : { headers } } = context
    const session = headers.get("woocommerce-session")

    if(session){

      // si la session dans le headers est a false => on supprime le token stocké dans le localStorage
      if("false" === session) {
        localStorage.removeItem("woo-session")

        //sinon on le met a jour 
      }else if (localStorage.getItem("woo-session") !== session){
        localStorage.setItem("woo-session" , headers.get("woocommerce-session"))
      }
    }

    return response 
  })
})

const client = new ApolloClient({
    link: middleware.concat(afterware.concat(link)),
    cache: new InMemoryCache(),
  });

  export default client

import { gql } from "@apollo/client"

// query 

export const PRODUCTS_QUERY = gql`query getProducts{
    products(first: 100) {
     nodes {
       ... on SimpleProduct {
         databaseId
         name
         regularPrice(format: RAW)
         productCategories {
           nodes {
             databaseId
           }
         }
         stockStatus
         image {
           sourceUrl
         }
       }
     }
   }
 }`

 export const CATEGORIES_QUERY = gql`query getCategories{
  productCategories(first: 100) {
    nodes {
      databaseId
      name
      image {
        sourceUrl
      }
      products(first: 100) {
        nodes {
          ... on SimpleProduct {
            name
            databaseId
            regularPrice(format: RAW)
            image {
              sourceUrl
            }
            stockStatus
            productCategories {
              nodes {
                databaseId
              }
            }
          }
        }
      }
    }
  }
} `

export const PAGE_QUERY = gql`query getPage($id: ID!){
    page(id: $id, idType: DATABASE_ID) {
    databaseId
    title
    heroSection {
      herosection {
        titre
        texte
        image {
          sourceUrl
        }
        cta {
          texte
          lien
        }
      }
    }
    promoActu {
      promoactu {
        titre
        texte
        image {
          sourceUrl
        }
        cta {
          texte
          lien
        }
      }
    }
  }
}`

export const GET_CART = gql`query getCart{
  cart {
    contents {
      nodes {
        key
        product {
          node {
            ... on SimpleProduct {
              name
              databaseId
            }
          }
        }
        quantity
        total(format: RAW)
      }
    }
    isEmpty
    total(format: RAW)
    appliedCoupons {
      code
    }
  }
}`



// mutation

export const ADD_TO_CART = gql`mutation addToCart($input: AddToCartInput!){
  addToCart(input: $input) {
    cart {
      contents {
        nodes {
          key
          product {
            node {
              ... on SimpleProduct {
                databaseId
              }
            }
          }
          quantity
          total(format: RAW)
        }
        productCount
      }
        isEmpty
      	total(format: RAW)
    }
  }
}`

export const UPDATE_CART = gql`mutation updateCart($input: UpdateItemQuantitiesInput!){
    updateItemQuantities(input: $input) {
    cart {
      contents {
        nodes {
          key
          product {
            node {
              ... on SimpleProduct {
                databaseId
              }
            }
          }
          quantity
          total(format: RAW)
        }
        productCount
      }
      isEmpty
      total(format: RAW)
    }
  }
}`

export const CHECKOUT = gql`mutation checkout($input: CheckoutInput!){
  checkout(input: $input){
    result
    order {
      id
      orderKey
      orderNumber
      total(format: RAW)
    }
  }
}`

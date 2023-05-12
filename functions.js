import process from "process"

export function addToCart(product, quantity, setCart){
    if(process.browser){
        let newCart = null
        let existingCart = localStorage.getItem('jaimetous-cart')
        
        if(existingCart){
            newCart = JSON.parse(existingCart)
            let alreadyAdded = newCart.products.find(productInCart => productInCart.id == product.id)

            if(alreadyAdded){
                if(quantity){
                    updateProductInCart(alreadyAdded, quantity)
                }else{
                    let index = newCart.products.indexOf(alreadyAdded)
                    newCart.products.splice(index, 1)
                }
            }else{
                    pushProductToCart(newCart, product, quantity)
            }

        }else{
                newCart = addFirstProduct(product, quantity)
        }
        
        newCart.totalProductsCount = newCart.products.length
        newCart.totalProductsPrice = updatedTotalPrice(newCart)

        localStorage.setItem('jaimetous-cart', JSON.stringify(newCart))
        setCart(newCart)

    }
}

/**add first product to cart*/
function addFirstProduct(product, quantity){
    let newCart = {
        products: [], 
        totalProductsCount: 0,
        totalProductsPrice: 0,
    }

    pushProductToCart(newCart, product, quantity)

    return newCart
}

function pushProductToCart(newCart, product, quantity){

    let newProduct = {...product, quantity: quantity, totalPrice: product.price*quantity}

    newCart.products.push(newProduct)
}

function updateProductInCart(product, quantity){
    product.quantity = quantity
    product.totalPrice = product.price*quantity
}

function updatedTotalPrice(newCart){

    let totalPrice = 0 

    newCart.products.forEach(product => {
        totalPrice += product.totalPrice
    });

    return totalPrice
}


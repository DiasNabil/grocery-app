export function formatCart(data){
    let formattedCart = {}
    Object.entries(data.cart).forEach(([key , value])=>{
        if(key === 'contents'){
            formattedCart.products = value.nodes
        }else{
            formattedCart = {...formattedCart, [key]: value}
        }

    })
    return formattedCart
}

export function findKey(product , cart){
    let products = cart.products
    let key = null
    products.find(prod =>{
        if(prod.product.node.databaseId == product.id){
            key = prod.key
        }
    }) 
    return key
}

export function updateQuantity(cart , key){
    let products = cart.products
    let quantity = 0
    products.find(prod=>{
        if(prod.key == key){
            quantity =  prod.quantity
        }
    })
    return quantity
}

export function getItemsInCart(products, cart){
    let arr = []

    if(products && cart){
        let items = cart.products

        items.forEach(item => {
            let id = item.product.node.databaseId
            products.forEach(product => {
                if(product.id == id) {
                    product.total = item.total
                    product.quantity = item.quantity
                    arr.push(product)
                }
            })
        })
    }

    return arr
}


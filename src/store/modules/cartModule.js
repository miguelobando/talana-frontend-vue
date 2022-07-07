export const state = {
    cart: []
}

export const mutations = {
    setCart(state, product){
       state.cart = [...product ]  
    }
}

export const actions = {
    addChunk({state, commit }, product ){
        let copy = [...state.cart]
        copy = copy.filter((e=>{
            e.code !== product.code
        }))
        const newChunk = {
            name: product.name,
            price: product.price,
            code: product.code,
            amount: product.amount
        }
        copy = [...copy, newChunk]
        commit('setCart',copy)        
    },
    addProduct({state, commit }, product ){
        let copy = [...state.cart]
    const productIndex = copy.findIndex(e=>  e.code === product.code )
        if(productIndex !== -1){
            copy[productIndex].amount += 1
            commit('setCart',copy)
        }else{
            const addedProduct = {
                name: product.name,
                price: product.price,
                code: product.code,
                amount: 1
            }
            copy =[...state.cart,addedProduct]
            commit('setCart', copy)
        }
    },
    removeProduct({state, commit }, product ){
        let copy = [...state.cart]
        const productIndex = copy.findIndex(e=> e.code === product.code ) 
        if(productIndex !== -1){
            if(copy[productIndex].amount === 1){
                const cartWithProductRemoved = copy.filter(e=>{
                 return e.code !== product.code
                })
                commit('setCart',cartWithProductRemoved)
            }else{
                copy[productIndex].amount -= 1
                commit('setCart',copy)
            }
            console.table(`From removeproduct ${state.cart}`)
        }
        
    }
}

export const getters = {
    getAmountOfProduct: (state) => (code) =>{
        const found = state.cart.find(e=> e.code === code )
        if(found){
            return found.amount
        }else{
            return 0
        }
    },
    getProductsFromCart: (state) =>{
        return state.cart
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
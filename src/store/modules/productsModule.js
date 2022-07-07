import productsApi from '../../services/productsApi'

export const state = {
    products: [],
    filters: [],
    filtersSelected: [],
}

export const mutations = {
   setProducts(state, products){
    state.products = [...products]
   }, 
   setFilters(state, filter){
    state.filters = [...filter]
   },
   setFiltersSelected(state,filter){
    const findFilter = state.filtersSelected.find(e=> e.name === filter.name)
    if(!findFilter){
        state.filtersSelected = [...state.filtersSelected, filter]
    }else{
        const filterRemoved = state.filtersSelected.filter(e=>{
            return e.name !== filter.name
        })
        state.filtersSelected = [...filterRemoved]
    }
}
}

export const actions = {
    getProducts({ commit }){
        productsApi.fetchProducts().then(resp=>{
            commit('setProducts',resp)
        })
    },
    getFilterTypes({commit}){
        productsApi.fetchProductCategory().then(resp=>{
            commit('setFilters', resp)
        })
    }
}

export const getters = {
    getFilteredProducts(state){
        if(state.filtersSelected.length === 0){
            return state.products
        }else{
            let selectedProducts = []
            state.filtersSelected.forEach(filter=>{
                let filtered = state.products.filter(product=>{
                   return product.category.name === filter.name
                })
                selectedProducts = [...selectedProducts ,...filtered]
            })
            return selectedProducts
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
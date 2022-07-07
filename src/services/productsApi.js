import axios from 'axios'
const PRODUCT_URL = 'http://sva.talana.com:8000/api/product/'
const CATEGORY_URL = 'http://sva.talana.com:8000/api/product-category/'

const fetchProducts = async () =>{
    let resp
    try {
        resp = (await axios.get(PRODUCT_URL)).data        
    } catch (e) {
        console.error(`${e.name} : ${e.message}`)
        resp = -1
    }     
    return resp
}  

const fetchProductCategory = async () =>{
    let resp
    try{
        resp = (await axios.get(CATEGORY_URL)).data
    } catch(e){
        console.error(`${e.name} : ${e.message}`)
        resp = -1
    }
    return resp
}

export default  {fetchProducts, fetchProductCategory} 


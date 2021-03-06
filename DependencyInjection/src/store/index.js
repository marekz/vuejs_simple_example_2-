import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500/products/";

export default new Vuex.Store({
    strict: true,
    state: {
        products: [],
        selectedProduct: null
    },
    mutations: {
        saveProducts(currentState, product) {
            let index = currentState.products.findIndex(p => p.id == product.id);
            if (index == -1) {
                currentState.products.push(product);
            } else {
                Vue.set(currentState.products, index, product);
            }
        },
        deleteProduct(currentState, product) {
            let index = currentState.products.findIndex(p => p.id === product.id);
            currentState.products.splice(index, 1);
        },
        selectProduct(currentState, product) {
            currentState.selectedProduct = product;
        }
    },
    getters: {
        orderProducts(state) {
            return state.products.concat().sort((p1, p2) => p2.price - p1.price);
        },
        filteredProducts(state, getters) {
            return (amount) => getters.orderProducts.filter(p => p.price > amount);
        }
    },
    actions: {
        async getProductsActions(context) {
            (await Axios.get(baseUrl)).data
                .forEach(p => context.commit("saveProducts", p));
        },
        async saveProductAction(context, product) {
            let index = context.state.products.findIndex(p => p.id === product.id);
            if (index === -1) {
                await Axios.post(baseUrl, product);
            } else {
                await Axios.put(`${baseUrl}${product.id}`, product);
            }
            context.commit("saveProducts", product);
        },
        async deleteProductAction(context, product) {
            await Axios.delete(`${baseUrl}${product.id}`);
            context.commit("deleteProduct", product);
        }
    }
})
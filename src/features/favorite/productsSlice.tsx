import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      title: "Полулярные",
      key: "Полулярные",
      data: [
        {
          key: "Полулярные",
          list: [
            {
              id: 1,
              title: 'Item 1',
              price: 10,
              imageUrl: 'https://via.placeholder.com/150',
              isFavorite: false
            },
            {
              id: 2,
              title: 'Item 2',
              price: 10,
              imageUrl: 'https://via.placeholder.com/150',
              isFavorite: false
            },
            {
              id: 3,
              title: 'Item 3',
              price: 10,
              imageUrl: 'https://via.placeholder.com/150',
              isFavorite: false
            },

          ],
        },
      ],
    },
    {
      title: "Последние",
      key: "Последние",
      data: [
        {
          key: 'Последние',
          list: [
            {
              id: 1,
              title: 'Item 1',
              price: 10,
              imageUrl: 'https://via.placeholder.com/150',
              isFavorite: false
            },
            {
              id: 2,
              title: 'Item 2',
              price: 20,
              imageUrl: 'https://via.placeholder.com/150',
              isFavorite: false
            },
            {
              id: 3,
              title: 'Item 3',
              price: 30,
              imageUrl: 'https://via.placeholder.com/150',
              isFavorite: false
            },

          ],
        },

      ],
    },
  ],
  cart: []
};



const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const { categoryId, productId } = action.payload;
      console.log(action.payload)
      const category = state.products.find(category => category.key === categoryId);

      if (category) {
        const product = category.data[0].list.find(product => product.id === productId);
        if (product) {
          product.isFavorite = !product.isFavorite;
        }
      }
    },

    addToCart: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.flatMap(category => category.data[0].list).find(product => product.id === productId);

      console.log('product', product)
      if (product) {
        state.cart.push(product);
      }
    },

    updateCartItemQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      console.log("lksdjf", id, newQuantity)
      const cartItemIndex = state.cart.findIndex(item => item.id === id);
      if (cartItemIndex !== -1) {
        console.log("lksdjf", state.cart)
        state.cart[cartItemIndex].quantity = newQuantity;
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter(item => item.id !== id);
    },

    searchProducts: (state, action) => {
      const { query } = action.payload;
      if (query === '') {
        // If the query is empty, reset the products list to show all items
        state.products = initialState.products;
      } else {
        // Filter products based on the search query
        state.products = initialState.products.map(category => ({
          ...category,
          data: category.data.map(categoryData => ({
            ...categoryData,
            list: categoryData.list.filter(product =>
              product.title.toLowerCase().includes(query.toLowerCase())
            )
          }))
        }));
      }
    }


  },
})





export const { toggleFavorite, addToCart, updateCartItemQuantity, removeFromCart, searchProducts } = productsSlice.actions

export default productsSlice.reducer
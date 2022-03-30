import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
async function fetchdata(){
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query Getmenu {
        
        products {
          data {
            id
            attributes {
              description
              name
              price
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
    
  })
  return data.products.data;
}
const product = fetchdata();
console.log(product);
export interface CounterState {
  
  products:any
  netprice:number
  basket:number

}

const initialState: CounterState = {
  
  products:product,
  netprice:0,
  basket:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.basket += 1
      state.netprice+=action.payload.price
    },
    decrement: (state,action) => {
      state.basket-= 1
      state.netprice -= action.payload.price
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
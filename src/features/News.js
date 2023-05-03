import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const apikey = import.meta.env.VITE_API_KEY;

const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&pageSize=10`;

export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async()=>{
        const res = await fetch(url);
        return res.json()
    }
)

export const fetchPublishers = createAsyncThunk(
    "publishers/fetchPublishers",
    async()=>{
        const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`)
        return resp.json();
    }
)

const newsSlice = createSlice({
    name: "news",
    initialState : {articles : [], publishers: []},
    reducers :  {

    },
    extraReducers: (builder)=> {
        builder.addCase(fetchArticles.fulfilled, (state, action)=>{
           state.articles = action.payload.articles;
        }),
        builder.addCase(fetchPublishers.fulfilled, (state, action)=>{
            state.publishers = action.payload.articles;
         }) 
    }
})


export default newsSlice.reducer;
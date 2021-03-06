import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction
} from '@reduxjs/toolkit';

// mock一个请求
const ajax = (url: string) => {
  return new Promise((resolve, reject) => {
    if (url === '/test') {
      setTimeout(() => {
        resolve({ data: 20 });
      }, 2000);
    } else if (url === '/yyy') {
      setTimeout(() => {
        resolve({ data: 999 });
      }, 2000);
    }
  });
};

export const asyncIncrement = createAsyncThunk('asyncIncrement', async (url: string) => {
  return await ajax(url) as { data: number };
});
export const asyncTest = createAsyncThunk('asyncTest', async (url: string) => {
  return await ajax(url) as { data: number };
});

// store的类型
export type CountStore = {
  num: number
}

// 创建一个store切片
const countStore = createSlice({
  name: 'counter',
  initialState() {
    return {
      num: 0
    } as CountStore;
  },
  reducers: {
    incremented(state: Draft<CountStore>, action: PayloadAction<number>) {
      state.num += action.payload;
    },
    decremented(state: Draft<CountStore>, action: PayloadAction<number>) {
      state.num -= action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncIncrement.fulfilled, (state, action) => {
      state.num = action.payload.data;
    });
    builder.addCase(asyncTest.fulfilled, (state, action) => {
      state.num = action.payload.data;
    });
  },
});

// actions
export const {
  incremented,
  decremented
} = countStore.actions;
export default countStore.reducer;




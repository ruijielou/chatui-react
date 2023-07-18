import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'conunt',
    initialState: 0,
    reducers: {
        add(state, actions) {
            console.log(state, actions, 'add');
            return state + 1
        },
        minus(state, actions) { //定义方法
            console.log(state, actions, 'add');
            return state == 0 ? 0 : state - 1
        },
    }
})

export const { add, minus } = countSlice.actions; // 把方法导出去在组件内调用

export default countSlice;
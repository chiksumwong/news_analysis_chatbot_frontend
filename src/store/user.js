import UserAPI from '@/api/User'
import {router} from '@/router'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        status:{
            isLogin:false
        },
        username:null,
        user_id:null
    },
    actions: {
        async login({ commit }, payload) {
            try{
                // user login via user login api
                const res = await UserAPI.login(payload);
                console.log('login success', res.data);

                // set local storage
                // localStorage.setItem('token', res.data.token);
                commit('loginSuccess', res.data);

                Vue.prototype.$notice.success({
                    title: 'Login Success',
                    description: 'Enjoy your shopping!'
                })

                router.push('/'); 
            }catch(e){
                console.log(e)
                Vue.prototype.$notice.error({
                    title: 'Login Failure',
                    description: 'Please Check Your Email and Password!'
                })
                commit('loginFailure');
            }
        },
        logout({ commit }) {
            // remove local storage
            // localStorage.removeItem('token');
            commit('logout');
            router.push('/');
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status = { isLogin: true };
            state.username = user.user_name;
            state.user_id = user.user_id;
        },
        loginFailure(state) {
            state.status = { isLogin: false };
            state.username = null;
            state.user_id = null;
        },
        logout(state) {
            state.status = { isLogin: false };
            state.username = null;
            state.user_id = null;
        }
    }
}

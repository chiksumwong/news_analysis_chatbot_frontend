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
        isAdmin:false
    },
    actions: {
        async login({ commit }, payload) {
            try{
                // user login via user login api
                const res = await UserAPI.login(payload);
                console.log('login success', res.data);

                // set local storage
                localStorage.setItem('token', res.data.access);
                let isAdmin = false
                if(payload.username === "admin"){
                    isAdmin = true
                }
                commit('loginSuccess', { "username":payload.username, "isAdmin": isAdmin});
                
                // notification
                Vue.prototype.$notice.success({
                    title: 'Login Success',
                    description: 'Welcome!'
                })

                // route to home page
                router.push('/'); 
            }catch(e){
                console.log(e)
                // notification
                Vue.prototype.$notice.error({
                    title: 'Login Failure',
                    description: 'Please Check Your Username and Password!'
                })
                commit('loginFailure');
            }
        },
        logout({ commit }) {
            //remove local storage
            localStorage.removeItem('token');
            commit('logout');
            router.push('/');
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status = { isLogin: true };
            state.username = user.username;
            state.isAdmin= user.isAdmin
        },
        loginFailure(state) {
            state.status = { isLogin: false };
            state.username = null;
            state.isAdmin= false;
        },
        logout(state) {
            state.status = { isLogin: false };
            state.username = null;
            state.isAdmin= false;
        }
    }
}

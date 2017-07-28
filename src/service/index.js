
import Vue from 'vue'
import VueResource from 'vue-resource'

import  * as config from './http-config'

Vue.use(VueResource)

export default {
    loadAjax: (state,option, success) => {
        Vue.http.interceptors.push((request, next) => {
        let loading = state.$layer.loading('加载中...')
            next((response) => {
                state.$layer.close(loading)
                if(!response.ok){
                    // alert('error');
                }
                return response
            });
        })
        Vue.http({
            url:config.DOMAIN,
            headers:{},
            params:option,
            method:config.METHOD,
            responseType:config.RESPONSETYPE,
            timeout:config.TIMEOUT,
        }).then( 
            response => {
                // response.status;
                // response.statusText;
                // response.headers.get('Expires');
                success(response);
            },
            error => {
                alert(JSON.stringify(error));
            }
        );
    }
}

// http://www.cnblogs.com/tujia/p/6513886.html
// https://github.com/vum-team/vum
// https://weui.io/#picker


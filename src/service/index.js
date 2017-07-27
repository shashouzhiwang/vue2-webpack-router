// import http from './http'
//
// export default {
//     http:http
// }


import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    loadAjax: (state, option) => {
        console.log(state);
        return Vue.http({
            url:'http://localhost:8089/guest/api/lang_en.php?lang=en',
            headers:{},
            params:option,
            method:"POST",
            responseType:"application/json",
            timeout:60000,

        }).then(
            response => {
                // response.status;
                // response.statusText;
                // response.headers.get('Expires');
                return response.body;
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


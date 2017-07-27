import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    loadAjax:(state, option) => {
        Vue.http.get('http://localhost:8089/guest/api/lang_en.php?lang=en', []).then(function(){}, function(){alert()});
    }
}
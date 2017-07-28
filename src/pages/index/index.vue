<style lang="sass" scoped>
	.login-msg {
		padding: 50px;
		text-align: center;
	}
	.msg {
		padding: 50px;
		text-align: center;
		font-size: 20px;
		color: red;
	}
</style>
<template>
	<div>
		<v-header title="返回">
			<router-link slot="title"  to="/home">我是主页</router-link>
		</v-header>
		<div class="login-msg" v-if="!user.id">
			<router-link to="/login">你还未登录，请先登录</router-link>
			<span class="fc-loading fc"></span>
			<img width="50" :src="logo" alt="" v-on:click="test"> <br>
			<div v-on:click="test">{{login}}</div>
		</div>
		<div class="msg" v-if="user.id"> 
			<img width="50" :src="logo" alt="" v-on:click="test"> <br>
			哈哈，恭喜你已经入坑Vue2

		</div>
		<v-footer></v-footer>
	</div>
</template>
<script>   
    import { mapState } from 'vuex'
	import common from '../../service/'
	import logo from './logo.png'
    export default {
		data() {
			return { 
				logo:logo,
				login:'999'
			}
		}, 
		methods : {
			test: function () {
//                this.$layer.loading('加载中...')
			    common.loadAjax(this,{},(response)=>{
			    	let data = JSON.parse(response.body)
			    	this.login = data.login
			    });
//                alert(JSON.stringify(x));
			  }
			
		},
        computed: mapState({ 
        	user: state => state.stateData
        })
    }
</script>
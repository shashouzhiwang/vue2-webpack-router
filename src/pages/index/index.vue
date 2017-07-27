<style lang="less" scoped>
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
<!-- state => state.stateDate  -->
	<div>
		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>
		<div class="login-msg" v-if="!user.id">
			<router-link to="/login">你还未登录，请先登录</router-link>
			<img width="50" :src="logo" alt="" v-on:click="test"> <br>
		</div>
		<div class="msg" v-if="user.id"> 
			<img width="50" :src="logo" alt="" v-on:click="test"> <br>
			哈哈，恭喜你已经入坑Vue2
		</div>
	</div>

</template>
<script>   
    import { mapState } from 'vuex'
	import common from '../../service/'
	import logo from './logo.png'
    export default {
		data() {
			return { 
				logo
			}
		}, 
		methods : {
			test: function () {
//                this.$layer.loading('加载中...')
			    common.loadAjax(this.$store.state);
//                alert(JSON.stringify(x));
			  }
			
		},
        computed: mapState({ 
        	user: state => state.stateData
        })
    }
</script>
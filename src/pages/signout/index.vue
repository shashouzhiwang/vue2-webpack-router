<style lang="less" scoped>
	.btn {
		padding: 50px;
		text-align: center;
		button {
			padding: 5px 10px;
		}
	}
</style>
<template>
	<div>
		<v-header title="退出">
			<router-link slot="left" to="/home">返回</router-link>
		</v-header>
		<div class="btn">
			<button v-on:click="submit">确认退出</button>
		</div>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions(['user_sign_out']),
            submit() { 
                this.user_sign_out()
				this.$router.replace({ path: '/login' })
            }
        }
    }
</script>
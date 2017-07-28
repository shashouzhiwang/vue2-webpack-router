<style lang="sass" scoped>
</style>
<template>
	<header class="bar bar-nav">
		<a class="button button-link button-nav pull-left" href="/" data-transition='slide-out'>
			<span class="icon icon-left"></span>
			返回
		</a>
		<h1 class="title"><slot name="title"></slot></h1>
	</header>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
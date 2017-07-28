<style lang="sass" scoped>
</style>
<template>
	<nav class="bar bar-tab">
	    <a class="tab-item active" href="#">
	      <span class="icon icon-home"></span>
	      <span class="tab-label">销售快报</span>
	    </a>
	    <a class="tab-item" href="#">
	      <span class="icon fc fc-loading"></span>
	      <span class="tab-label">提醒</span>
	    </a>
	  </nav>
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
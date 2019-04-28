<template>
	<div
		@click="changeInfo($event)" 
		class="alert "
		:class="{'alert-success' : todo.finished, 'alert-dark' : !todo.finished}"
		style="cursor:pointer">
		{{ todo.text }}
	</div>
</template>

<script>
	export default {
		props : ['todo'],
		methods : {
			changeInfo(el) {
				this.$store.dispatch('clickData', el.target);
			}
		}
	}
</script>


<style >
	.lined-through {
		text-decoration: line-through;
		color: #ccc;
		user-select: none;
	}
</style>
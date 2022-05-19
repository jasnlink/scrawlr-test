<template>
<div class="pool">
	<UpvoteButton v-for="i in this.$store.state.pool[index].items" :index="index" />
</div>
</template>

<script>
import UpvoteButton from './UpvoteButton.vue'
export default {
	name: 'Pool',
	components: {
		UpvoteButton,
	},
	props: {
		index: Number
	}
}
</script>

<style>
.pool {
  background-color: #ffffff;
  border: solid #dfe2e6 3px;
  border-radius: 24px;
  padding: 10px;
  margin: 84px 0;
  min-height: 156px;
  display: flex;
  flex-wrap: wrap;
}
</style>
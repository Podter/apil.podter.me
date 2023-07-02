<script lang="ts">
  export let text = "go back";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<button on:click={() => window.history.back()}><a>{text}</a></button>

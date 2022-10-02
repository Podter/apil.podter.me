<script lang="ts">
  import lawnbgm from "../../assets/lawnbgm.mp3";
</script>

<svelte:head>
  <title>audio</title>
</svelte:head>

<h1>audio test</h1>

<audio autoplay>
  <source src={lawnbgm} />
  <a href={lawnbgm}>audio</a>
</audio>
<!-- svelte-ignore a11y-missing-content -->
<h1 />

<h1>audio test 2</h1>
<audio controls>
  <source src={lawnbgm} />
  <a href={lawnbgm}>audio</a>
</audio>
<!-- svelte-ignore a11y-missing-content -->
<h1 />

<h1>audio test 3</h1>
<audio>
  <source src={lawnbgm} />
  <a href={lawnbgm}>audio</a>
</audio>

<button><a href="/sites">go back</a></button>

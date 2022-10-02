<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import Sites from "./routes/Sites.svelte";

  export let url: string = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/sites" component={Sites} />
</Router>

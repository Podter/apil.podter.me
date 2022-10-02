<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import Sites from "./routes/Sites.svelte";
  import RickRoll from "./routes/sites/RickRoll.svelte";

  export let url: string = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/sites" component={Sites} />
  <Route path="/sites/rickroll" component={RickRoll} />
</Router>

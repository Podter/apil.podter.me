<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import Sites from "./routes/Sites.svelte";
  import RickRoll from "./routes/sites/RickRoll.svelte";
  import Valve from "./routes/sites/Valve.svelte";
  import Daniel from "./routes/sites/Daniel.svelte";
  import Interst from "./routes/sites/Interst.svelte";
  import Memes from "./routes/sites/Memes.svelte";

  export let url: string = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="/sites" component={Sites} />
  <Route path="/sites/rickroll" component={RickRoll} />
  <Route path="/sites/valve" component={Valve} />
  <Route path="/sites/daniel" component={Daniel} />
  <Route path="/sites/interst" component={Interst} />
  <Route path="/sites/memes" component={Memes} />
</Router>

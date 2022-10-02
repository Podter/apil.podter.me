<script lang="ts">
  import { Link } from "svelte-routing";

  let attempts: number = -1;
  let randomNumber: number = Math.random();
  let input: string = "";
  let text: string = "";
  let textColor: string = "black";

  function onClick() {
    const numberInput: number = parseFloat(input);
    const currentAttempts: number = attempts;
    if (currentAttempts === -1) {
      console.clear();
      console.log(randomNumber);
      attempts++;
      return;
    } else if (numberInput) {
      if (numberInput === randomNumber) {
        textColor = "black";
        text = `Correct! The number is ${numberInput} Attempts: ${currentAttempts}`;
        attempts = 0;
        randomNumber = Math.random();
        console.clear();
        console.log(randomNumber);
        return;
      } else {
        textColor = "red";
        text = `Wrong! Try again!`;
        attempts++;
        return;
      }
    } else {
      textColor = "red";
      text = `Numbers only!`;
      return;
    }
  }
</script>

<svelte:head>
  <title>Gaem test</title>
</svelte:head>

<h1>test game</h1>

<center>
  <!-- svelte-ignore a11y-missing-attribute -->
  <button on:click={onClick}><a>press</a></button>
</center>

{#if attempts >= 0}
  <center><h1>Attempts: {attempts}</h1></center>
{:else}
  <center><h1>Total:</h1></center>
{/if}

{#if text}
  <center><h2 style={`color: ${textColor};`}>{text}</h2></center>
{/if}

{#if attempts >= 3}<center
    ><h3>
      tip 1: this is guess the number game, put any number in there
    </h3></center
  >{/if}
{#if attempts >= 10}<center
    ><h3>
      tip 2: the number is between 0-1 (like 0.009051650113018894)
    </h3></center
  >{/if}
{#if attempts >= 20}<center
    ><h3>
      tip 3: press ctrl + shift + i to open devtools, go to console tab and you
      will see the number! put that number in there
    </h3></center
  >{/if}

<center><textarea bind:value={input} /></center>

<button><Link to="/sites">go back</Link></button>

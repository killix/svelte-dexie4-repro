<script>
  import { liveQuery } from "dexie";
  import { db } from "../db";

  let todoLists = liveQuery(
    () => db.todoLists.toArray()
  );

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ul>
  {#if $todoLists}
    {#each $todoLists as todoList (todoList.id)}
      <li>{todoList.title}</li>
    {/each}
  {/if}
</ul>
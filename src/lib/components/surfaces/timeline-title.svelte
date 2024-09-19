<script lang="ts">
  import type { Snippet } from "svelte";

  interface TimelineTitleProps {
    children: Snippet;
  }

  const { children }: TimelineTitleProps = $props();
</script>

<h2
  class="text-xl md:text-2xl font-semibold mb-4 px-1 before:mt-3.5 before:block before:absolute before:-inset-0 before:bg-yellow-300 relative inline-block"
>
  <span class="relative text-purple-600">{@render children()}</span>
</h2>

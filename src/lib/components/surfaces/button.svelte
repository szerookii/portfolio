<script lang="ts">
  import type { Snippet } from "svelte";

  interface ButtonProps {
    children: Snippet;
    href?: string | null;
    class?: string | null;
  }

  const { children, href, class: className }: ButtonProps = $props();
</script>

{#if href}
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class={"bg-purple-500 text-white px-4 py-2 shadow-pixel-art shadow-purple-500 text-center flex items-center gap-2 hover:scale-90 transition-transform duration-150 " +
      className}
  >
    {@render children()}
  </a>
{:else}
  <h3
    class={"bg-purple-500 text-white px-4 py-2 shadow-pixel-art shadow-purple-500 text-center flex items-center gap-2 hover:scale-90 transition-transform duration-150 " +
      className}
  >
    {@render children()}
  </h3>
{/if}

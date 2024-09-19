<script lang="ts">
  import type { IconProps } from ".";
  const { size, color, class: className }: IconProps = $props();
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill={color}
  class={className}
>
  <path
    d="M0,0 L12,0 L12,4 L3,4 L3,24 L24,24 L24,16 L28,16 L28,28 L0,28 Z"
    transform="translate(0,4)"
  />
  <path
    d="M0,0 L16,0 L16,16 L12,16 L12,8 L8,8 L8,4 L0,4 Z"
    transform="translate(16,0)"
  />
  <path d="M0,0 L4,0 L4,4 L0,4 Z" transform="translate(8,20)" />
  <path d="M0,0 L4,0 L4,4 L0,4 Z" transform="translate(12,16)" />
  <path d="M0,0 L4,0 L4,4 L0,4 Z" transform="translate(16,12)" />
  <path d="M0,0 L4,0 L4,4 L0,4 Z" transform="translate(20,8)" />
</svg>

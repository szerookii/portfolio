<script lang="ts">
  import type { IconProps } from ".";
  const { size, color, class: className }: IconProps = $props();
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill={color}
  class={className}
>
  <path
    d="M0,0 L10,0 L10,1.25 L11.25,1.25 L11.25,2.5 L12.5,2.5 L12.5,13 L8,13 L8,5 L4.5,5 L4.5,13 L0,13 Z M1.25,1.25 V11.75 H3.25 V5 H4.5 V3.75 H8 V5 H9.25 V11.75 H11.25 V2.5 H10 V1.25 H4.5 V2.5 H3.25 V1.25 Z"
    transform="translate(9.5,8.5)"
  />
  <path
    d="M0,0 L5,0 L5,13 L0,13 Z M1.25,1.25 V11.75 H3.75 V1.25 Z"
    transform="translate(2.5,8.5)"
  />
  <path
    d="M0,0 L2.5,0 L2.5,1.25 L3.75,1.25 L3.75,3.75 L2.5,3.75 L2.5,5 L0,5 L0,3.75 L-1.25,3.75 L-1.25,1.25 L0,1.25 Z M0,1.25 V3.75 H2.5 V1.25 Z"
    transform="translate(3.75,2.5)"
  />
</svg>

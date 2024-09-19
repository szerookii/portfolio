<div class="flex flex-col items-center mb-8">
  <h2
    class="text-4xl font-extralight text-purple-600 transform -rotate-[26deg] bg-yellow-300 py-2 px-4 border border-purple-600 corner-squares"
  >
    <span class="relative inline-block w-full h-full"> a propos de moi </span>
  </h2>
</div>

<style>
  .corner-squares {
    @apply relative;
  }
  .corner-squares::before,
  .corner-squares::after,
  .corner-squares span::before,
  .corner-squares span::after {
    @apply absolute content-[''] bg-purple-600 border border-solid border-purple-600 h-2 w-2;
  }
  .corner-squares::before {
    top: -4px;
    left: -4px;
  }
  .corner-squares::after {
    top: -4px;
    right: -4px;
  }
  .corner-squares span::before {
    bottom: -12px;
    left: -20px;
  }
  .corner-squares span::after {
    bottom: -12px;
    right: -20px;
  }
</style>

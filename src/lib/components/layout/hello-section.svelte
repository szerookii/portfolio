<script lang="ts">
  import Portrait from "$lib/components/images/portrait.png?enhanced";
</script>

<section
  class="min-h-screen flex flex-col items-center justify-between relative"
>
  <div
    class="w-5/6 lg:w-3/4 mx-auto px-4 py-16 md:flex items-center justify-between flex-grow"
  >
    <div class="relative w-64 h-64 mx-auto md:mx-0 mb-8 md:mb-0">
      <enhanced:img
        src={Portrait}
        alt="avatar"
        class="absolute top-0 left-0 w-full h-full object-cover z-10 rounded-lg hover:scale-110 hover:rotate-12 transition-transform duration-300"
      />
      <div
        class="border-yellow-400 border-2 border-solid absolute top-0 left-0 w-44 h-44 rotate-12 z-0 transform -translate-x-8 -translate-y-8"
      ></div>
      <div
        class="border-yellow-400 border-2 border-solid absolute bottom-0 right-0 w-12 h-12 rotate-45 transform translate-x-3 translate-y-3"
      ></div>
    </div>

    <div class="md:w-1/2 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-light text-purple-600 mb-4">
        Salut,<br />moi c'est Mathis!
      </h1>
      <p class="text-gray-600 mb-6 leading-relaxed">
        Je suis un <span class="text-yellow-500">développeur</span> passionné
        par la programmation et le web. Développeur et reverse-engineer depuis
        2016, je travaille principalement avec
        <span class="text-yellow-500">C++ et Golang</span>. Je suis aussi
        intéressé par la <span class="text-yellow-500">rétro-ingénierie</span>.
        J'aime bien aussi trouver des bugs dans les
        <span class="text-yellow-500">jeux vidéos</span>
        et/ou des <span class="text-yellow-500">applications</span> pour faire
        des mods ou les améliorer. De plus, je participe à des projets open
        source, comme par exemple
        <a class="text-yellow-500" href="https://goscord.dev">Goscord</a>, une
        API Discord développée en Golang.
      </p>
    </div>
  </div>
</section>

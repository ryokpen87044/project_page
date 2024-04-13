<script setup></script>

<template>
  <header class="absolute w-screen z-20 p-3 bg-zinc-900 bg-opacity-80">
    <div class="flex flex-wrap justify-between font-Poppins text-white">
      <div>
        <h1 class="animate-nav-title-in font-bold text-3xl md:text-4xl pl-1">
          <router-link to="/">PPP Project2024</router-link>
        </h1>
      </div>
      <div class="ml-1 pt-3 md:pr-1">
        <ul class="flex flex-wrap font-light text-base">
          <li class="animate-nav-in1 pr-3 md:pr-5">
            <router-link to="/about" class="group transition">
              about
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in2 pr-3 md:pr-5">
            <router-link to="/member" class="group transition">
              member
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in3 pr-3 md:pr-5">
            <router-link to="/active" class="group transition">
              active
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in4 pr-3 md:pr-5">
            <router-link to="/content" class="group transition">
              content
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in5 pr-3 md:pr-5">
            <a href="#" target="_blank" rel="noreferrer" class="group transition">
              GitHub
              <span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in6">
            <a href="#" target="_blank" rel="noreferrer" class="group transition">
              Tumblr
              <span class="mov-li"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

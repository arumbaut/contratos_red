<template>
  <q-layout view="hhh lpR fff">
    
    <q-header reveal elevated class="bg-primary text-white">
     
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum
      veniam ipsa necessitatibus accusamus quam laudantium dolores, delectus
      tempora repudiandae aliquid rem cupiditate expedita labore officiis
      dignissimos reiciendis minima? Vero. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. In facere soluta nihil adipisci incidunt
      quisquam necessitatibus est enim nemo earum odio consectetur quos
      inventore aliquid voluptatibus nulla nisi, deleniti praesentium? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim
      impedit assumenda atque eius ab dignissimos? Distinctio, officiis dolore
      molestias explicabo debitis perspiciatis aut quo omnis inventore nesciunt
      ipsum cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ducimus quia quae consequatur? Ipsum voluptatum non laborum harum, neque
      culpa consectetur nam, qui sit corrupti, quae at architecto! Eligendi,
      provident eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officia eum veniam ipsa necessitatibus accusamus quam laudantium dolores,
      delectus tempora repudiandae aliquid rem cupiditate expedita labore
      officiis dignissimos reiciendis minima? Vero. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. In facere soluta nihil adipisci incidunt
      quisquam necessitatibus est enim nemo earum odio consectetur quos
      inventore aliquid voluptatibus nulla nisi, deleniti praesentium? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim
      impedit assumenda atque eius ab dignissimos? Distinctio, officiis dolore
      molestias explicabo debitis perspiciatis aut quo omnis inventore nesciunt
      ipsum cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ducimus quia quae consequatur? Ipsum voluptatum non laborum harum, neque
      culpa consectetur nam, qui sit corrupti, quae at architecto! Eligendi,
      provident eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officia eum veniam ipsa necessitatibus accusamus quam laudantium dolores,
      delectus tempora repudiandae aliquid rem cupiditate expedita labore
      officiis dignissimos reiciendis minima? Vero. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. In facere soluta nihil adipisci incidunt
      quisquam necessitatibus est enim nemo earum odio consectetur quos
      inventore aliquid voluptatibus nulla nisi, deleniti praesentium? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim
      impedit assumenda atque eius ab dignissimos? Distinctio, officiis dolore
      molestias explicabo debitis perspiciatis aut quo omnis inventore nesciunt
      ipsum cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ducimus quia quae consequatur? Ipsum voluptatum non laborum harum, neque
      culpa consectetur nam, qui sit corrupti, quae at architecto! Eligendi,
      provident eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officia eum veniam ipsa necessitatibus accusamus quam laudantium dolores,
      delectus tempora repudiandae aliquid rem cupiditate expedita labore
      officiis dignissimos reiciendis minima? Vero. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. In facere soluta nihil adipisci incidunt
      quisquam necessitatibus est enim nemo earum odio consectetur quos
      inventore aliquid voluptatibus nulla nisi, deleniti praesentium? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim
      impedit assumenda atque eius ab dignissimos? Distinctio, officiis dolore
      molestias explicabo debitis perspiciatis aut quo omnis inventore nesciunt
      ipsum cum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ducimus quia quae consequatur? Ipsum voluptatum non laborum harum, neque
      culpa consectetur nam, qui sit corrupti, quae at architecto! Eligendi,
      provident eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Officia eum veniam ipsa necessitatibus accusamus quam laudantium dolores,
      delectus tempora repudiandae aliquid rem cupiditate expedita labore
      officiis dignissimos reiciendis minima? Vero. Lorem ipsum dolor sit amet
      
      provident eius?
     
    </q-page-container>
  
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
//import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];

export default {
  name: "MainLayout",
  // components: { EssentialLink },
  data() {
    return {
      right: false
    };
  }
};
</script>

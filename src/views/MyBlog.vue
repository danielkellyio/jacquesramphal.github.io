<template>
  <PageWrapper>
    <!-- <HeroBanner
      style="background: var(--bg-darker)"
      title="🗂️ Documents"
      eyebrow=""
    /> -->
    <HeroBanner
      id="hero"
      style="background: var(--bg-darker)"
      title="🗂️ Documents"
      subtitle="A collection of ramblings and lessons learned. Design, Dev, Mindfulness"
      eyebrow=""
    />
    <!-- <ul class="container">
      <li v-for="blogPost in posts" v-bind:key="blogPost.sys.id">
        <p>{{ blogPost.category }}</p>
        <h4>{{ blogPost.title }}</h4>
        <p>{{ blogPost.description }}</p>
      </li>
    </ul> -->
<!-- <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard /> -->
    <BlogFeed :contentful="contentful" />
    
    <!--          <BlogPost :contentful="contentful"  />  -->
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/grid/PageWrapper.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import BlogFeed from "@/components/blog/BlogFeed.vue";
// import BlogCard from "@/components/card/BlogCard.vue";
// import BlogPost from "@/components/blog/BlogPost.vue";

// Mock data
// import fakeposts from "@/components/blog/data/posts.json";

export default {
  name: "MyBlog",
  components: {
    PageWrapper,
    HeroBanner,
    BlogFeed,
    // BlogCard,
},
  data() {
    return {
      contentful: [],
    };
  },
  async created() {
    this.contentful = await this.getContentful();
  },
  methods: {
    getContentful: async () => {
      const query = `{
       blogPostCollection {
         items {
           sys {
             id
           }
           category
           title
           description
           imgurl
           route
           label
           image {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
         }
       }
     }`;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        return response.data.blogPostCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
};
</script>

<style scoped lang="sass"></style>

<template>
  <HeaderLayout />
  <InformationsLayout v-if="artwork" v-bind:id="artwork.id" v-bind:category="artwork._embedded['wp:term'][0][0].name" v-bind:author="artwork._embedded['author'][0].name" v-bind:image="artwork._embedded['wp:featuredmedia'][0].source_url" v-bind:title="artwork.title.rendered" v-bind:content="artwork.content.rendered" v-bind:date="artwork.date" v-bind:key="artwork.title" />
  <GalleryLayoutTitle v-if="artwork" v-bind:categoryId="artwork._embedded['wp:term'][0][0].id" v-bind:category="artwork._embedded['wp:term'][0][0].name" />
  <FooterLayout />
</template>

<script>

    import HeaderLayout from '@/components/template/HeaderLayout.vue'
    import FooterLayout from '@/components/template/FooterLayout.vue'
    //import ConnexionFormLayout from '@/components/UserProfile/ConnexionFormLayout.vue'
    import InformationsLayout from '@/components/SingleArtwork/InformationsLayout.vue'
    import GalleryLayoutTitle from '@/components/SingleArtwork/GalleryLayoutTitle.vue'

    import ArtworksService from '@/services/ArtworksService.js';
    import ArtFormsService from '@/services/ArtFormsService.js';

export default {
    name: 'SingleArtwork',
    components: {
        HeaderLayout,
        FooterLayout,
        InformationsLayout,
        GalleryLayoutTitle
    },
    data() {
        return {
            artwork: null,
            artform: null,
        }
    },
    mounted() {
        ArtworksService.find(this.$route.params.id).then(
            // We are using the find functions with the id artwork in the url 
            // and recupering the artwork object to use it (display in other component)
            (response) => {
                console.log(response.data);
                this.artwork = response.data;
            }
        );
    },
    beforeRouteUpdate(to) {
        ArtworksService.find(to.params.id).then(
        // We are using the find functions with the id artwork in the url 
        // and recupering the artwork object to use it (display in other component)
            (response) => {
                console.log('Artwork', response.data);
                this.artwork = response.data;
            }
        );
        ArtFormsService.find(to.params.id).then(
            (response)=> {
                console.log('ArtForm-beforeRouteUpdate', response.data);
                this.artform = response.data;
            }
        );  
    }
}
</script>
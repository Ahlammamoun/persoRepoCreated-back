<template>
    <div class="artist-artwork">
        <div class="photos-titles">
            <router-link :to="{ name: 'SingleArtwork', params: { id: id }}">
                <img v-bind:src="image" v-bind:alt="title">
            </router-link>
            <div class="overlay-author-title">
                <p class="artwork-title" v-html="title"></p>
                <p class="artwork-author">{{ author }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArtworksListLayout',
        props: {
            title: String,
            image: String,
            author: String,
            id: Number
        },
    }
    
</script>

<style scoped>

/*     .artist-artwork {
        display: inline-flex;
        justify-content: space-around;
        margin: 1.5em 3em 0.2em 5em;
    }
    .artist-artwork .photos-titles{
       margin: 1em;
       
    }
    .artist-artwork .artwork-author {
        font-style: italic;
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
    
    .artist-artwork img {
        // margin: 0.2em;
        width: 12em;
        height: 12em;
        // border-radius: 1em;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
        -webkit-transition: all 0.2s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .artist-artwork img:hover{
        width:15em;
        height:15em;
        border : 2px solid #000000;
        box-shadow:8px 8px 10px 0 rgba(0,0,0,0.5);
        transform:scale(1.2);
        cursor: pointer;
    }

    .artist-artwork .artwork-title {
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    } */

    .artist-artwork {
        display: inline-flex;
        justify-content: space-around;
       /* margin: 1.5em 3em 0.2em 9em;*/
        gap: 7vw;
        height: 30vh;
        position: relative;
    }
    .artist-artwork .photos-titles{
       margin: 1em;
       
    }
    .artist-artwork .artwork-title,
    .artist-artwork .artwork-author {
        display: flex;
        margin-top: 0.2em;
        justify-content: center;
    }
    
    .artist-artwork img {
        width: 12vw;
        height: 75%;
        border-radius: 0.5vw;
        filter: drop-shadow(0 0 0.50rem black);
    }
    .overlay-author-title {
        position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 7vw;
            opacity: 0;
            top: 18%;
            left: 12%;
            z-index: 1;
            font-size: 1vw;
            font-weight: bold;
            padding: 1vw;
            text-align: center;
        
    }
    .artist-artwork:hover .overlay-author-title {
        cursor: pointer;
        opacity: 1;
    }
    @media (min-width: 320px) {
        .artist-artwork {
            position: relative;
            margin: 1.5em 0.5em 0.5em 1.9em;
            
        }
        .artist-artwork img {
            width: 30vw;
            height: 30vw;
            border-radius: 0.5vw;
            filter: drop-shadow(0 0 0.50rem black);
        }
        .overlay-author-title {
            position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 20vw;
            opacity: 0;
            top: 18%;
            left: 18%;
            z-index: 1;
            font-size: 3vw;
            font-weight: bold;
            padding: 10px;
            text-align: center;
        }
    }
    @media (min-width: 768px) {
        .artist-artwork {
            display: inline-flex;
            justify-content: space-around;
            margin: 1.5em 3em 0.2em 5.5em;
            gap: 7vw;
            height: 30vh;
            position: relative;
        }
         .artist-artwork img {
            width: 25vw;
            height: 25vw;
            border-radius: 0.5vw;
            filter: drop-shadow(0 0 0.50rem black);
        }
        .overlay-author-title {
            position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 20vw;
            opacity: 0;
            top: 18%;
            left: 12%;
            z-index: 1;
            font-size: 3vw;
            font-weight: bold;
            padding: 1vw;
            text-align: center;
        }
    }
        
    @media (min-width: 1200px) {
        .artist-artwork {
            display: inline-flex;
            justify-content: space-around;
            margin: 2em 3em 0.5em 11em;
            gap: 7vw;
            height: 30vh;
            position: relative;
        }
        .artist-artwork img {
            width: 10vw;
            height: 80%;
            border-radius: 0.5vw;
            filter: drop-shadow(0 0 0.50rem black);
        }
        .overlay-author-title {
            position: absolute;
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: .5s ease;
            width: 7vw;
            opacity: 0;
            top: 18%;
            left: 11%;
            z-index: 1;
            font-size: 1vw;
            font-weight: bold;
            padding: 1vw;
            text-align: center;
        }
    }
</style>
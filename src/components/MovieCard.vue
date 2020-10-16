    <template>
    <div >
        
        <div class="card"  style="width: 350px; margin-bottom: 30px;">
            <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
            <div class="card-body" :class="{'is-selected': isSelected}">
            <h5 class="card-title">{{movie.title}}</h5>
            </div>
            <ul class="list-group list-group-flush" >
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.genre}}</li>
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.duration}} min</li>
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.director}}</li>
            <li class="list-group-item" :class="{'is-selected':isSelected}">{{movie.releaseDate}}</li>
            </ul>
            <div class="card-body" :class="{'is-selected':isSelected}">
                <button type="button" @click="onClick" class="btn btn-success">Select</button>
                <button type="button" @click="deleteMovie(movie.id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
  </template>

  <script>
    import {mapActions} from 'vuex'

    export default {
    name: 'MovieCard',

    // data() {
    //     return {
    //         isSelected:false
    //     }
    // }
    props: {
        movie:Object,
        isSelected: Boolean
    },


    methods: {
       onClick() {
        //    this.isSelected = true;
           this.$emit('movie-selected', this.movie);
       },
        ...mapActions( [
            'deleteMovie'
        ])
    },

    updated() {
        console.log('movie updated', this.movie.title, this.isSelected);
        
    }
//     computed: {
//     selected() {
//       return this.selectedMoviesIds
//         .indexOf(this.movie.id) > -1;
//     }
//   },

    //   selectedMoviesIds: {
    //   type: Array,
    //   required: true,
    //   default: () => []
    // }
    // created() {
    //     console.log('movie card created', this.movie, { isUndefined: this.movie == undefined})
    // }


    }
  </script>

  <style scoped>
    img {
        height: 500px;
    }
    .is-selected {
        background-color: rgb(178, 224, 224)
    }
  </style>

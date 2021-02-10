    const app = {
        data() {
            return {
               members:[
                   {name:'RM',img:'images/rm.jpg',like:false},
                   {name:'JIN',img:'images/jin.jpg',like:false},
                   {name:'SUGA',img:'images/suga.jpg',like:false},
                   {name:'J-HOPE',img:'images/jhope.jpg',like:false},
                   {name:'JIMIN',img:'images/jimin.jpg',like:false},
                   {name:'V',img:'images/v.jpg',like:false},
                   {name:'JUNGKOOK',img:'images/jk.jpg',like:false}
               ]
            }
        },
        methods:{
            toggleLike(index){
                this.members[index].like = !this.members[index].like
            }
        },
        computed:{
            countLiked(){
                return this.members.filter( m => m.like).length
            }
        }

    }
Vue.createApp(app).mount('#app')

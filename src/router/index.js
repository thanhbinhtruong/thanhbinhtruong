import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import SignUp from '@/components/Wedding/SignUp'
import SignIn from '@/components/Wedding/SignIn'
import RSVP from '@/components/Wedding/RSVP'
// blog
// import layout from "@/components/blog/layout";
// import index from "@/components/blog/index";
// import page from "@/components/blog/page";
// import category from "@/components/blog/category";
// import contact from "@/components/blog/contact";
// import about from "@/components/blog/about";
 import note from "@/components/Blog/note";
// blog
import Cover from '@/components/Cover'
import Home from '../views/Home.vue'

// wedding desktop
import WeddingDesk from '@/components/WeddingDesk/WeddingDesk'
import WelcomeDesk from '@/components/WeddingDesk/WelcomeDesk'
import StoryDesk from '@/components/WeddingDesk/StoryDesk'
import EntourageDesk from '@/components/WeddingDesk/EntourageDesk'
import TravelDesk from '@/components/WeddingDesk/TravelDesk'
import GuestBookDesk from '@/components/WeddingDesk/GuestBookDesk'
import GalleryDesk from '@/components/WeddingDesk/GalleryDesk'
// wedding desktop

// wedding mobile
import WeddingMobile from '@/components/WeddingMobile/WeddingMobile'
import WelcomeMobile from '@/components/WeddingMobile/WelcomeMobile'
import StoryMobile from '@/components/WeddingMobile/StoryMobile'
import EntourageMobile from '@/components/WeddingMobile/EntourageMobile'
import TravelMobile from '@/components/WeddingMobile/TravelMobile'
import GuestBookMobile from '@/components/WeddingMobile/GuestBookMobile'
import GalleryMobile from '@/components/WeddingMobile/GalleryMobile'
// wedding mobile
import '@/js/myjs.js'
Vue.use(VueRouter)

  var Wedding = WeddingDesk; 
  var Welcome = WelcomeDesk; 
  var Story = StoryDesk; 
  var Entourage = EntourageDesk; 
  var Travel = TravelDesk; 
  var GuestBook = GuestBookDesk; 
  var Gallery = GalleryDesk; 
if(window.mobilecheck()){
	  Wedding = WeddingMobile; 
    Welcome = WelcomeMobile; 
    Story = StoryMobile; 
    Entourage = EntourageMobile; 
    Travel = TravelMobile; 
    GuestBook = GuestBookMobile; 
    Gallery = GalleryMobile; 
}
  const routes = [
   // {
    //   path: '',       
    //   component: layout,
    //   children: [
    //     {
    //       path: '/',
    //       component: index,
    //     },
    //     {
    //       path: '/index',
    //       component: index,
    //     },
    //     {
    //       path: '/page/:slug',
    //       component: page,
    //     },
    //     {
    //       path: '/category',
    //       component: category,
    //     },
    //     {
    //       path: '/contact',
    //       component: contact,
    //     },
    //     {
    //       path: '/about',
    //       component: about,
    //     },
    //   ]
    // },

    {
      path: '/note',      
      component: note
    },

    {
      path: '/Wedding/Cover',      
      component: Cover
    },
    {
      path: '/Wedding',      
      component: Wedding,
      children: [
        {
          path: '/',
          beforeEnter: (to, from, next) => {
            next({
              path: '/wedding/cover',
            })
          }
        },  
        {
          path: 'welcome',
          component: Welcome,
        }, 
        {
          path: 'story',
          component: Story,
        }, 
        {
          path: 'entourage',
          component: Entourage,
        }, 
        {
          path: 'travel',
          component: Travel,
        },
        {
          path: 'guestbook',
          component: GuestBook,
        }, 
        {
          path: 'gallery',
          component: Gallery,
        },
        {
          path: 'signUp',
          name: 'SignUp',
          component: SignUp
        },
    
        {
          path: 'signIn',
          name: 'SignIn',
          component: SignIn,
          beforeEnter: (to, from, next) => {
            firebase.auth().onAuthStateChanged(userAuth => {
              if(userAuth){
                next({
                  path: '/wedding',
                })
              }else{
                next();
                
              }
              
            }) 
          }
        },

        {
          path: 'rsvp',
          name: 'rsvp',
          component: RSVP,
          beforeEnter: (to, from, next) => {
            firebase.auth().onAuthStateChanged(userAuth => {
              if(userAuth){
                next();
              }else{
                next({
                  path: '/wedding/SignIn',
                })
              }
              
            }) 
          }
        },

      ]

    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

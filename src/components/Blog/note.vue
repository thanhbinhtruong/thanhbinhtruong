<template>
    <div class="container">
      <div style="text-align:center">
        <div>Your Cash</div>
        <div style="font-weight:bold">-335,000.00 đ</div>
      </div>
      <div style="text-align:center">
        <label>This Month</label>
      </div>

      <div class="container" style="border:1px solid green; border-radius:5px">
      <div class="row">
        <div class="col">First Balance</div>
        <div class="col" style="text-align:right">{{ formatMoney(firstBalance) }}đ</div>
      </div>
      <div class="row">
        <div class="col">Last Balance</div>
        <div class="col" style="text-align:right">- {{ formatMoney(lastBalance) }} đ</div>
      </div>
      <hr>
      <div class="row">
        <div class="col"></div>
        <div class="col" style="text-align:right">{{ balance }} đ</div>
      </div>
      <div style="text-align:center;"><a style="color:green"  href="#">Report of this month</a></div>
      </div>
      <br>



       

        
    
    <swipe-list
    ref="list"
    class="card"
    :disabled="!enabled"
    :items="notes"
    item-key="id"
    :threshold='3'
    @swipeout:click="itemClick"  
>
    <template v-slot="{ item, index, revealLeft, revealRight, close }">
         
        <div class="card-content" style="text-align:left">
            <p>{{formatTime(item.data().created_at) }}</p>
            <p><span style="font-weight:bold">Money:</span> {{ formatMoney(item.data().money) }} đ</p>
            <p><span style="font-weight:bold">Content:</span> {{ item.data().content }}</p>
            <p><span style="font-weight:bold">Category:</span> {{ item.data().category }}</p>
            <p v-show="false">{{ item.id }}</p>
            <p v-show="false">{{ index }}</p>
        </div>
    </template>
    <template v-slot:right="{ item }">
        <div class="swipeout-action blue" @click="getIdUpdate(item.id)" data-toggle="modal" data-target="#myModal">
            <i class="fa fa-edit"></i>
        </div>
        <div @click="del(item.id)" class="swipeout-action green">
            <i class="fa fa-trash"></i>
            
        </div>
    </template>
    

    <template v-slot:empty>
        <div>
            list is empty ( filtered or just empty )
        </div>
    </template>

</swipe-list>


<!-- The Modal -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Edit</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <div class="row">
        <div class="col-md-6">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Note: </label>
              <div class="col-sm-10">
                <textarea v-model="content" class="form-control"></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Money: </label>
              <div class="col-sm-10">
                <input placeholder ="Money...."  type="tel" disabled class="form-control" id="staticEmail" v-model="moneyDisplay">
              </div>
            </div>

            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Ctg: </label>
              <div class="col-sm-10">
                <input placeholder ="Category..." type="text" class="form-control" id="staticEmail" v-model="category">
              </div>
            </div> 


        </div>

        <div class="col-md-6" style="margin-bottom:10px; text-align: left">

        <div>
          <button @click="setMoney(0)" class="btn btn-outline-success" type="button" style="margin:2px">0</button> 
          <button @click="setMoney(1)" class="btn btn-outline-success" type="button" style="margin:2px">1</button> 
          <button @click="setMoney(2)" class="btn btn-outline-success" type="button" style="margin:2px">2</button>
          <button @click="setMoney(3)" class="btn btn-outline-success" type="button" style="margin:2px">3</button>
          <button @click="setMoney(4)" class="btn btn-outline-success" type="button" style="margin:2px">4</button>
          <button @click="clearMoney()" class="btn btn-outline-success" type="button" style="margin:2px">CLR</button>
        </div>

        <div>
          <button @click="setMoney(5)"  class="btn btn-outline-success" type="button" style="margin:2px">5</button>
          <button @click="setMoney(6)" class="btn btn-outline-success" type="button" style="margin:2px">6</button>
          <button @click="setMoney(7)" class="btn btn-outline-success" type="button" style="margin:2px">7</button>
          <button @click="setMoney(8)" class="btn btn-outline-success" type="button" style="margin:2px">8</button>
          <button @click="setMoney(9)" class="btn btn-outline-success" type="button" style="margin:2px">9</button>
          <button @click="deleteMoney()" class="btn btn-outline-success" type="button" style="margin:2px">DEL</button>
        </div>

        <div>
          <button @click="setCategory('Breakfast')" class="btn btn-outline-success" type="button" style="margin:2px">Breakfast</button> 
          <button @click="setCategory('Lunch')" class="btn btn-outline-success" type="button" style="margin:2px">Lunch</button>
          <button @click="setCategory('Dinner')" class="btn btn-outline-success" type="button" style="margin:2px">Dinner</button> 
          <button @click="setCategory('Market')" class="btn btn-outline-success" type="button" style="margin:2px">Market</button>
        </div>

        <div>
          <button @click="add()" class="btn btn-outline-success" type="button" style="margin:2px">Submit</button>
          <button @click="clear()" class="btn btn-outline-success" type="button" style="margin:2px">Clear</button>
        </div>

        </div>
      </div>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="upd(idUpdate)">Oke</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>


    </div>
</template>

<script>
import firebase from 'firebase';
import moment from 'moment'
import { SwipeList, SwipeOut } from 'vue-swipe-actions';
import 'vue-swipe-actions/dist/vue-swipe-actions.css';
export default {
  name: 'Note',
  components: {
    SwipeOut,
    SwipeList
  },
  data() {
    return {
          notes: [],
          content: '',
          enabled: true,
          contentUpdate: '',
          idUpdate: '',
          money:'',
          moneyDisplay: '',
          category: '',
          firstBalance: '10000000',
          lastBalance: '300000',
          balance: (this.firstBalance - this.lastBalance)
    }
  },

  created(){
    
        this.getNotes();
    },
    watch: {

    money: function (val) {
      if(0 < val.length){
      this.moneyDisplay = (parseInt(this.money)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
      }else{
        this.moneyDisplay = '';
      }
    },
    

  },
  methods : {
    formatTime(time){
      return moment.unix(time).format("YYYY/MM/DD HH:mm:ss");
    },

    formatMoney(money){
      if(0 < money.length){
      return (parseInt(money)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      }
    },
    clear : function(){
          this.content = '';
          this.contentUpdate = '';
          this.idUpdate = '';
          this.money = '';
          this.moneyDisplay = '';
          this.category = '';
    },
      setCategory :function(category){
        this.category = category.toString();
      },
      clearMoney : function(){
        this.money = '';
        this.moneyDisplay = '';
      },
      deleteMoney: function(){
        this.money = this.money.substr(0, this.money.length -1)
      },
      setMoney :function(num){
        this.money += num.toString();
        
      },
      getIdUpdate: function(id){
        this.idUpdate = id;
      },
      add: function(){
          this.addNote();
          this.getNotes();
          
      },
      del: function(id){
          this.deleteNote(id);
          this.getNotes();
      },
      upd: function(id){
          this.updateNote(id);
          this.getNotes();
          this.idUpdate = '';
          this.contentUpdate ='';
      },


	  	getNotes : function(){
        firebase.firestore().collection('notes').orderBy('created_at', 'desc').get().then((snapshot) => {
          const notesCollection = [];
          snapshot.forEach((doc) => {
            notesCollection.push(doc);
          });
          this.notes = notesCollection;
        }).catch((err) => {
            console.log('Error getting documents', err);
          });
	  	},

      addNote : function(){
        firebase.firestore().collection("notes").add({
            content: this.content,
            category: this.category,
            money: this.money,
            created_at: moment().unix()
          })
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });

	  	},

      deleteNote : function(id){
        firebase.firestore().collection("notes").doc(id).delete().then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
	  	},

      updateNote : function(id){
        firebase.firestore().collection("notes").doc(id).update({
            content: this.contentUpdate,
        }).then(function() {
              console.log("Document successfully updated!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
	  	},


      itemClick(e) {
      console.log(e.id, "item click");
    },  

  }
 
};

</script>

<style>

.swipeout-action {
  display: flex;
  align-items: center;
  padding: 0 3rem;
  cursor: pointer;
  left: 0;
}

.swipeout-action.blue {
    color: white;
    background-color: rgb(0, 122, 255);
}
.swipeout-action.blue:hover {
    background-color: darken(rgb(0, 122, 255), 5%);
}
.swipeout-action.purple {
    color: white;
    background-color: rgb(88, 86, 214);
}
.swipeout-action.purple:hover {
    background-color: darken(rgb(88, 86, 214), 5%);
}

.swipeout-action.red {
    color: white;
    background-color: rgb(255, 59, 48);
}
.swipeout-action.red:hover {
    background-color: darken(rgb(255, 59, 48), 5%);
}
.swipeout-action.green {
    color: white;
    background-color: rgb(76, 217, 100);
}
.swipeout-action.green:hover {
	background-color: darken(rgb(76, 217, 100), 5%);
}


.swipeout-list-item {
  flex: 1;
  border-bottom: 1px solid lightgray;
}

.swipeout-list-item:last-of-type {
    border-bottom: none;
}

.card {
  width: 100%;
  background-color: white;
  border-radius: 3px;
  box-shadow: none;
  border: 1px solid lightgray;
}
.card-content {
  padding: 1rem;
}
.transition-right {
	transform: translate3d(100%, 0 ,0) !important;
}
.transition-left {
	transform: translate3d(-100%, 0 ,0) !important;
}

.toolbar {
	display: flex;
	align-items: center;
}

.toolbar .toolbar-section {
	flex: 0 0 auto;
}

.toolbar .toolbar-section--center {
	flex: 1000 1 0%;
}
</style>
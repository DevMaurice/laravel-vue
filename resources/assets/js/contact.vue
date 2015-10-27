<style>
	
</style>

<template>
<div class="container">
  <div class="row">
  
    <h1>Contact Form</h1>
    
    <hr>
    
    <div class="col-sm-7"> 
  <form method="POST" role="form" v-on="submit:addMessage">
        <div class="row form-group">
          <div class="col-lg-10">
          <label for="name">Name</label>
            <input 
            type="text" 
            id="name"
            class="form-control"  
            v-model='info.name'>
          </div>
        </div>
        <div class="row form-group">
            <div class="col-lg-10">
            <label for="email">Email:</label>
            <input 
            id="email"
            type="email" 
            class="form-control" 
            v-model='info.email'>
            </div>
           
        </div>
        <div class="row form-group">
            <div class="col-lg-10">
            <label for="msg">Messsage: </label>
            <textarea name="message" id="msg" class="form-control" rows="10" required="required" placeholder="Message" v-model='info.message'></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-lg-3" v-show="showbtn">
              <button               
              class="btn btn-default pull-right"
              type="submit"
              v-attr="disabled:false"
              >                           
              Contact Us
              </button>              
            </div>
            <div class="col-lg-3" v-show="!showbtn">
              <button               
              class="btn btn-info pull-right"
              type="button"
              v-on="click:saveMessage(info)"
              >                           
              Save
              </button>
            </div>
        </div>  
    </form> 


    </div>
    <div class="col-sm-3">
      <div v-repeat="msg in messages">
        <article>
          <h6 color:blue>{{ msg.id }}</h6>
          <h6 color:blue>{{ msg.name }}</h6>    
          <h6 color:blue>{{ msg.email }}</h6>
          <div class="body"> {{ msg.message }}</div>
        </article>  
        <div class="btn-group" role="group" aria-label="Buttonsss">
            <button type="button" class="btn btn-success" v-on="click:editMessage(msg)">Edit</button>
            <button type="button" class="btn btn-danger" v-on="click:deleteMessage(msg)">Delete</button>
            <button type="button" class="btn btn-info">
               Votes <span class="badge">4</span>
            </button>
        </div>
        <hr>
      </div>  	
    </div>
    <div class="col-sm-2 pull-right">
  
        <address>
          <strong>Acme, LLC.</strong><br>
          700 Main St, Suite 600<br>
          Springfield, MA 94107<br>
          P: (123) 456-7890
        </address>
      
        <address>
          <strong>Email Us</strong><br>
          <a href="mailto:#">first.last@example.com</a>
        </address>          
    </div>
    
  </div><!--/row-->
</div><!--/container-->

</template>

<script>
module.exports={
	data:function(){
		return{
      showbtn:true,
      messages:[],
			info:{
				name:'Your name ',
				email:'myemail@gmail.com',
				message:'Your Message'
			},
		};
	},
	methods:{		
		addMessage:function(e){
			e.preventDefault();
			this.$http.post('/message',this.info)
				.success(function(response){
					alert('data inserted');
          info:{name='',email='', message=''}
				});
			},
      getMessages:function(){
        this.$http.get('/message',function(messages){
          this.$set('messages',messages);
        });

      },
      editMessage:function(msg){          
          this.$http.get('/message/'+msg.id,function(result){
            this.info=result;  
            this.showbtn=false;     
          });

      },
      saveMessage:function(msg){
           this.$http.put('/message/'+msg.id,this.info)
           .success(function(response){
            console.log(response);
            this.messages=response;
            this.info={name:'',email:'', message:''}; 
            this.showbtn=true;        
           });
      },
      deleteMessage:function(msg){
        this.$http.delete('/message/'+msg.id,this.info)
           .success(function(response){
             this.messages=response;
              console.log('done deleting');
           });
      },      
	},
  ready:function(){

    this.getMessages();
  },

 
}
</script>
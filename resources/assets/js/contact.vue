<style>
	
	.panel-body>textarea{
		padding-top: 2em;
	}
	.panel-body>email{
		padding-top: 2em;
	}
</style>

<template>
<div class="container">
  <div class="row">
  
    <h1>Contact Form</h1>
    
    <hr>
    
    <div class="col-sm-7">        
        <div class="row form-group">
          <div class="col-xs-10">
            <input 
            type="text" 
            class="form-control"  
            v-model='info.firstName'>
          </div>
        </div>
        <div class="row form-group">
            <div class="col-xs-10">
            <input 
            type="email" 
            class="form-control" 
            v-model='info.email'>
            </div>
           
        </div>
        <div class="row form-group">
            <div class="col-xs-10">
            <textarea name="message" id="input" class="form-control" rows="10" required="required" placeholder="Message" v-model='info.message'></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-xs-3">
              <button 
              class="btn btn-default pull-right"
              v-on="click:addMessage">
              Contact Us
              </button>
            </div>
        </div>      
    </div>
    <div class="col-sm-3">
      <div v-repeat="messages">
        <article>
          <h6 color:blue>{{ name }}</h6>    
          <h6 color:blue>{{ email }}</h6>
          <div class="body"> {{ message }}</div>
        </article>  
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
			info:{
				firstName:'Firstname',
				email:'myemail@gmail.com',
				message:'Message'
			},
		};
	},
	methods:{		
		addMessage:function(e){
			e.preventDefault();
			this.$http.post('/message',this.info)
				.success(function(response){
					alert('data inserted'+response);
				});
			},
      getMessages:function(){
        this.$http.get('/message',function(messages){
          this.$set('messages',messages);
        });

      }
	},
  ready:function(){

    this.getMessages();
  }
	
}
</script>
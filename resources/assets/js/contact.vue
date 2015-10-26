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
    
    <div class="col-sm-8">
        
        <div class="row form-group">
          <div class="col-xs-3">
            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" required="" v-model='firstname'>
          </div>
        </div>
        <div class="row form-group">
            <div class="col-xs-5">
            <input type="email" class="form-control" name="email" placeholder="Email" required=""
            v-model='email'>
            </div>
           
        </div>
        <div class="row form-group">
            <div class="col-xs-10">
            <textarea name="message" id="input" class="form-control" rows="10" required="required" placeholder="Message" v-model='message'></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-xs-10">
              <button 
              class="btn btn-default pull-right"
              v-on:click="addMessage">
              Contact Us
              </button>
            </div>
        </div>
      
    </div>
    <div class="col-sm-3 pull-right">
  
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
			firstName:'Firstname',
			email:'myemail@gmail.com',
			message:'Message'
		}
	},
	methods:{		
			addMessage:function(){
				alert('Data accepted');		
			}
	}

}
</script>
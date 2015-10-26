<style>
	.well{
		font-weight: bold;
		font-size: 17px;
	}
	
</style>

<template>
   <div class="row">
  
    <h1>About</h1>
        <hr>   
        <div class="row">
			<div class="col-sm-8 well">			
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
			<div class="col-sm-8 well"> 
				Company: {{ company }}
				</br>
				Owner:{{ owner }}
			</div>
		</div>
	</div>

</template>

<script>
module.exports={
	data:function(){
		return{
			company:'Laraconea Ltd',
			owner: 'DevMaurice'
		}
	}
}
</script>
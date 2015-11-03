<template>
<!-- Modal -->

<div class="modal fade" id="myModalNorm" tabindex="-1" role="dialog" 
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <button type="button" class="close" 
                   data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    Add new County
                </h4>
            </div>
            
            <!-- Modal Body -->
            <div class="modal-body">
                
                <form role="form">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                      <input type="text" class="form-control"
                      id="exampleInputEmail1" placeholder="Enter email"/>
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
                
                
            </div>
            
      </div>
    </div>
</div>
</template>

<style>
  
</style>

<script>
  module.exports ={
    data: function(){
        return {


        }

    }

  }

</script>
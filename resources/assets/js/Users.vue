<template>

	<div class="container">
		<div class="panel panel-success">
		    <div class="panel-heading clearfix">
			    <h4 class="panel-title pull-left" style="padding-top: 7.5px;">
			    	<a v-link="{path: '/user'}" 
			    	<i class="fa fa-list fa-lg"></i>  Users
			    	</a>
			    </h4>
			    <div class="btn-group pull-right">
			    	<a v-link="{path: 'user/add'}" class="btn btn-success btn-lg">
			    	<i class="fa fa-plus-circle fa-lg"></i> New
			    	</a>			      
			    </div>
			</div>
			<div class="panel-body">
					<table class="table table-hover">
						<thead>
							<tr>
								<th class="text-center">Name</th>
								<th class="text-center">Email</th>
								<th class="text-center">County</th>
								<th class="text-center">Position</th>
								<th class="pull-right">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in users">
								<td>{{ user.name }}</td>
								<td>{{ user.email }}</td>
								<td>{{ user.position }}</td>
								<td>{{ user.county }}</td>
								<td> 
									<div class="pull-right">
										<a v-link="{path: 'user/edit'}" class="btn btn-primary btn-sm">
											<i class="fa fa-plus-square-o"></i>  View
										</a>
										<a v-link="{path: 'user/delete'}" class="btn btn-success btn-sm">
											<i class="fa fa-pencil-square-o"></i>  Edit
										</a>
										<a v-link="{path: 'user/delete'}" class="btn btn-danger btn-sm">
											<i class="fa fa-trash-o"></i>  Delete
										</a>
										
									</div>
								</td>
							</tr>
						</tbody>
					</table>
			</div>
			<div class="panel-footer">
			<ul class = "pagination">
			   <li><a href = "#">&laquo;</a></li>
			   <li><a href = "#">1</a></li>
			   <li><a href = "#">2</a></li>
			   <li><a href = "#">3</a></li>
			   <li><a href = "#">4</a></li>
			   <li><a href = "#">5</a></li>
			   <li><a href = "#">&raquo;</a></li>
			</ul>
			</div>
		</div>
	</div>

</template>

<style>
.container{
	padding-top:20px;
}

</style>

<script>
	
module.exports = {
	data:function(){

		return{


		}
	}


}
</script>
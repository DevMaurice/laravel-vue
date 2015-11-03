<template>

	<div class="container">
		<div class="panel panel-success">
		    <div class="panel-heading clearfix">
			    <h4 class="panel-title pull-left" style="padding-top: 7.5px;">
			    	<a v-link="{path: '/county'}" 
			    	<i class="fa fa-list fa-lg"></i>  Counties
			    	</a>
			    </h4>
			    <div class="btn-group pull-right">
			    	<a v-link="{path: 'county/add'}" class="btn btn-success btn-lg">
			    	<i class="fa fa-plus-circle fa-lg"></i> New
			    	</a>			      
			    </div>
			</div>
			<div class="panel-body">
					<table class="table table-hover">
						<thead>
							<tr>
								<th class="text-center">ID</th>
								<th class="text-center">Name</th>
								<th class="text-center">Users</th>
								<th class="text-center">Position</th>
								<th class="pull-right">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="county in countys">
								<td>{{ county.id }}</td>
								<td>{{ county.name }}</td>
								<td>{{ county.users }}</td>
								<td>{{ county.positions}}</td>
								
								<td> 
									<div class="pull-right">
										<a v-link="{path: 'county/edit'}" class="btn btn-primary btn-sm">
											<i class="fa fa-plus-square-o"></i>  View
										</a>
										<a v-link="{path: 'county/delete'}" class="btn btn-success btn-sm">
											<i class="fa fa-pencil-square-o"></i>  Edit
										</a>
										<a v-link="{path: 'county/delete'}" class="btn btn-danger btn-sm">
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
			county: {
				id:1,
				name:'Kiambu',
				users : 20,
				positions:5
			}

		}
	}


}
</script>
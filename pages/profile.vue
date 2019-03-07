<template>	
	<div class="container">
		
		<div class="col-md-6 offset-md-3">
			<div class="card-header">
				<p>User Profile</p>
			</div>
			<div class="card-body">			

					<div class="form-group">
						<label v-text="user.name">Name</label>						
					</div>

					<div class="form-group">
						<label v-text="user.email">Email</label>						
					</div>
				
			</div>
		</div>

	</div>
</template>
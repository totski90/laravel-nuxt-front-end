<template>
	<div class="container">
		
		<div class="col-md-6 offset-md-3">
			<div class="card-header">
				<p>Register</p>
			</div>
			<div class="card-body">
				
				<form @submit.prevent="submit">					

					<div class="form-group">
						<label>Name</label>
						<input type="text" v-model.trim="form.name" class="form-control" autofocus placeholder="Name">
						<small class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</small>
					</div>

					<div class="form-group">
						<label>Email</label>
						<input type="email" v-model.trim="form.email" class="form-control" placeholder="Email">
						<small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
					</div>

					<div class="form-group">
						<label>Password</label>
						<input type="password" v-model.trim="form.password" class="form-control" placeholder="Password">
						<small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
					</div>					
					
					<div class="form-group">
						<input type="submit" value="Register" class="btn btn-primary" style="float: right;">
					</div>
				</form>
				
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			async submit() {
				this.$axios.$post('register', this.form)
				.then(data => {

					this.$auth.loginWith("local", {
						data: {
							email: this.form.email,
							password: this.form.password
						}
					});
					console.log(data);
				})
				.catch(err => {
					console.log(err);
				});
			}
		}
	}
</script>
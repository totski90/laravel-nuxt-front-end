export default function({$axios, store}) {
	$axios.onResponseError(error => {
		if (error.response.status === 422) {
			store.dispatch("validation/setErrors", error.response.data.errors);
		}

		return Promise.reject(error);
		// console.log(error.response.status);
	});

	$axios.onRequest(() => {
		store.dispatch("validation/clearErrors");
	});
}
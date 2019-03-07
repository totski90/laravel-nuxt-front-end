import Vue from 'vue';

import {mapGetters} from 'vuex';

const validation = {
	install(Vue, options) {
		Vue.mixin({
			computed: {
				...mapGetters({
					user: "auth/user",
					errors:"validation/errors"
				})
			}
		})
	}
};

Vue.use(validation);
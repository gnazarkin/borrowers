import ArticlesBaseController from './base';

export default ArticlesBaseController.extend({
	actions: {
		cancel: function() {
			this.transitionToRoute('friends.show');
			return false;
		}
	}
});
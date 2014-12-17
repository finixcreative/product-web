(function () {

	var app = angular.module('finix', ['ngAnimate']);

	app.controller('WebsiteController', function($scope) {
		this.products = website;
	});

	website = [
		{
			name: '',
			template: '',

		},
	];

	app.controller('SlidesController', function($scope) {
		$scope.images = [
			{
				img: 'bg1.jpg',
				alt: 'bg1',
				position: 'center right',
				id: 'slide1',
				headline: 'AES chambers help',
				subheadline: 'handheld device manufacturers pack for the beach',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				links: [
					{
						text: 'Learn More >',
						url: 'handheldelectronics.html',
					},
				],
			},
			{
				img: 'bg2.jpg',
				alt: 'bg2',
				position: 'center',
				id: 'slide2',
				headline: 'AES chambers help',
				subheadline: 'double testing throughput of analog devices',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				links: [
					{
						text: 'Learn More >',
						url: 'semiconductor.html',
					},
				],
			},
			{
				img: 'bg3.jpg',
				alt: 'bg3',
				position: 'center right',
				id: 'slide3',
				headline: 'AES chambers help',
				subheadline: 'test the batteries that will power the future',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				links: [
					{
						text: 'Learn More >',
						url: 'batteries.html',
					},
				],
			},
			{
				img: 'bg4.jpg',
				alt: 'bg4',
				position: 'center',
				id: 'slide4',
				headline: 'Decisions can be difficult',
				subheadline: 'Let us point you in the right direction',
				text: 'Use our interactive Chamber Selector to find the right device to meet your product testing specifications.',
				links: [
					{
						text: 'Learn More >',
						url: 'chamberselector.html',
					},
				],
			},
			{
				img: 'bg5.jpg',
				alt: 'bg5',
				position: 'center',
				id: 'slide5',
				headline: 'AES Dashboard',
				subheadline: 'Get our free app to monitor test progress with your tablet',
				text: '',
				links: [
					{
						text: 'Learn More >',
						url: 'https://itunes.apple.com/',
					},
					{
						text: 'App Store',
						url: 'https://itunes.apple.com/',
						icon: 'icon-logo_apple',
						target: '_blank',
					},
				],
			},
		]; 
	});
	app.directive('slider', function ($timeout) {
		return {
			restrict: 'AE',
			replace: true,
			scope:{
				images: '='
			},
			link: function (scope, elem, attrs) {
				scope.currentIndex = 0;
				scope.next = function(){
					scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				};
				scope.prev = function(){
					scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
				};
				scope.$watch('currentIndex', function() {
					scope.images.forEach(function(image) {
						image.visible = false;
					});
					scope.images[scope.currentIndex].visible = true;
				});
				var timer;
				var sliderFunc = function() {
					timer = $timeout(function() {
						scope.next();
						timer = $timeout(sliderFunc, 4000);
					}, 4000);
				};
				sliderFunc();
				scope.$on('$destroy', function() {
				  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
				});
			},
			templateUrl:'html/slider.html'
		};
	});
})();
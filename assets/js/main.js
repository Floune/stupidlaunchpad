$(document).ready(function(){

	let stupidLaunchpad = {

		init(){
			this.watchers();
		},

		watchers(){
			$('.1').on('click', function(e){
				console.log('1');
			});			

			$('.2').on('click', function(e){
				console.log('2');
			});	

			$('.3').on('click', function(e){
				console.log('3');
			});	

			$('.4').on('click', function(e){
				console.log('4');
			});	

			$('.5').on('click', function(e){
				console.log('5');
			});	

			$('.6').on('click', function(e){
				console.log('6');
			});	
		}
	}

	function main() {
		stupidLaunchpad.init();
	}

	main();

});
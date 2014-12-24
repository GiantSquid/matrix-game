// Copyright: FoxLab 2014

// Layout State Vars:

var LSV = {
	
}

// Element Generator

var elGen = {
	
	initial : function() {
		
		$( 'body' ).append( '<div class="start"></div>' );
		$( 'body' ).append( '<div class="field"></div>' );
		$( 'body' ).append( '<div class="timer">0</div>' );
		
	},
	
	swappers : function() {
		
		var col = 1;
		var row = 1;
		
		for ( var i = 1; i <= 16; i++ ) {
			
			function isInteger(num) {
				
  				return (num ^ 0) === num;
				
			}
			
			if ( isInteger( i / 4 ) ) {
				
				$( '.field' ).append( '<div class="swapper col'+col+' row'+row+'"></div>' );
				
				i++;
				
				col = 1;
				row = row + 1;
				
			};
			
			if ( row == 5 ) {
				break;
			};
			
			$( '.field' ).append( '<div class="swapper col'+col+' row'+row+'"></div>' );
			col = col + 1;
			
		}
		
	}
	
}

// UI Basic Actions:

var swapper = {
	
	checkWin : function () {
		
	},
	
	swapCross : function () {
		
	}
	
}
// UI Complex Triggers & Behaviors:

// Timer

var timer = {
	
	start : function() {
		
		function timeGo() {
			
			var curTime = $( '.timer' ).text() * 1;
			var newTime = curTime + 1;
			
			$( '.timer' ).text( newTime );
			
		}
		
		setInterval( timeGo, 1000 );
		
	},
	stop : function() {
	},
	reset : function() {
	}
	
}

// Event Hadlerss:

var EH = {
	
	start : function() {
		
		$( '.swapper' ).click( function () {
	
		$( this ).css( 'border-radius', '0vh' );
	
		} );
		
		$( '.swapper' ).hover( function () {
	
		$( this ).css( 'border-radius', '4vh' );
	
		},
		function () {
			$( '.swapper' ).addClass( '.swapper' );
		}
							 );
		
	}

}



// App Start:

function init() {
	console.log( 'Application started' );
	elGen.initial();
	elGen.swappers();
	timer.start();
	EH.start();
}
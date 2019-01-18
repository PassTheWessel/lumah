const l = require( './lib' );

l.register( 'Hello', ( res ) => res( true, 'Danceboye' ) );
l.register( 'This is so sad', ( res ) => res( false, 'Sadcat' ) );
l.register( 'Late ;_;', ( res ) => setTimeout( () => res( true, 'I\'ve came!' ), 500 ) );

l.start();
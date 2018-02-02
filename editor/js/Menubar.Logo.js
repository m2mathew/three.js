/**
 * @author m2mathew / http://www.github.com/m2mathew
 */

Menubar.Logo = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var image = new UI.Img();
	image.setClass( 'logo' );

	image.dom.src = 'http://res.cloudinary.com/drumsensei/image/upload/v1517543091/TCSLogo_sjyaan.jpg';
	image.dom.alt = 'The Container Store logo';
	image.dom.style.height = '25px';
	image.dom.style.transform = 'translateY(3px)';
	container.add( image );

	return container;

};

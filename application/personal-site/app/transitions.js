export default function() {
    this.transition(
	this.hasClass('hiding-content'),
	this.use('toUp', {duration: 650})
    );
    this.transition(
	this.hasClass('showing-content'),
	this.use('toDown', {duration: 650})
    );
    this.transition(
	this.hasClass('soundcloud-player-widget'),
	this.includingInitialRender(),
	this.use('fade', {duration: 400})
    );
    this.transition(
	this.hasClass('cool-scroll'),
	this.includingInitialRender(),
	this.use('wait', 1000, {then: 'toDown'})
    );
}

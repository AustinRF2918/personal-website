export default function() {
    this.transition(
	this.hasClass('hiding-content'),
	this.toValue(true),
	this.use('toUp', {duration: 400})
    );
    this.transition(
	this.hasClass('showing-content'),
	this.toValue(true),
	this.use('toDown', {duration: 900})
    );
}

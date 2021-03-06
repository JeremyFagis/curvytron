/**
 * Player
 *
 * @param {String} color
 */
function Player(color)
{
    EventEmitter.call(this);

    this.color = color || 'red';
    this.input = new PlayerInput();
    this.trail = new Trail(this.color);
}

Player.prototype = Object.create(EventEmitter.prototype);

/**
 * Update
 *
 * @param {Number} step
 */
Player.prototype.update = function(step)
{
    if (this.input.key) {
        this.trail.addAngle(0.1 * (this.input.key == '37' ? -1 : 1));
    }

    this.trail.update(step);
};
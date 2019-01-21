'use strict';

function StopWatch() {
    let startTime;
    let endTime;
    let running;
    let duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function() {
            return duration;
        }

    });
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });
    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        }
    });
    Object.defineProperty(this, 'reset', {
        get: function() {
            return reset;
        }
    });
}

StopWatch.prototype.start = function() {
    if (this.running) {
        throw new Error('StopWatch has already started.');
    }
    this.running = true;
    this.startTime = new Date();
};
StopWatch.prototype.stop = function() {
    if (!this.running) {
        throw new Error('StopWatch has not started yet.')
    }

    this.running       = false;
    this.endTime       = new Date();
    const seconds = (endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration     += seconds;
};
StopWatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime   = null;
    this.running   = false;
    this.duration  = 0;

};

const sw = new StopWatch();
sw.start(); // bad
sw.duration = 10;
setTimeout(() => {
    sw.stop();
    console.log(sw.duration);
}, 1000);

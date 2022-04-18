import barba from '@barba/core';
barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 5
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 10
            });
        }
    }]
});
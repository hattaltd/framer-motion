const contain = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.4, // children
            delayChildren: 0.4,
        }
    }
}

const btmToTop = {
    initial: {
        y: 70,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 0.7 }
    }
}

const l_to_r = {
    initial: {
        x: -70,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    }
}

const r_to_l = {
    initial: {
        x: 70,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7 }
    },
    // exit: {
    //     opacity: 0,
    //     x: 70

    // }
}

const btn_hover = {
    current: {
        scale: 1
    },
    hover: {
        scale: 1.03 ,
        transition: {
            duration: 0.07
        },
    },
}

export {
    contain,
    btmToTop,
    l_to_r,
    r_to_l,
    btn_hover
}
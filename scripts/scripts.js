const lines_cont = document.querySelector('#lines_cont');
const lines = lines_cont.querySelectorAll('.line')



anim();

setTimeout(() => {
    function less_go() {
        setStyles();
        init();
    }
    less_go();
}, 2000);


function init() {
    let mouse = {
        x: 0,
        y: 0,
    }

    document.addEventListener('mousemove', function (e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;


        lines[0].style.left = mouse.x + 'px';
        lines[0].style.height = mouse.y + 'px';

        let first_line_width = Math.sqrt(Math.pow(mouse.x, 2) + Math.pow((innerHeight - mouse.y), 2));
        lines[1].style.width = first_line_width + 'px';
        lines[1].style.transform = `rotate(${-1 * Math.acos(mouse.x / first_line_width) * 180 / Math.PI}deg)`;

        let second_line_width = Math.sqrt(Math.pow(innerWidth - mouse.x, 2) + Math.pow((innerHeight - mouse.y), 2));
        lines[2].style.width = second_line_width + 'px';
        lines[2].style.transform = `rotate(${Math.acos((innerWidth - mouse.x) / second_line_width) * 180 / Math.PI}deg)`;
    })
}

function anim() {


    const startPoint = {
        x: 0.4 * innerWidth,
        y: 0.4 * innerHeight,
    }


    lines[0].style.height = startPoint.y + 'px';

    let first_line_width = Math.sqrt(Math.pow(startPoint.x, 2) + Math.pow((innerHeight - startPoint.y), 2));
    lines[1].style.width = first_line_width + 'px';
    lines[1].style.transform = `rotate(${-1 * Math.acos(startPoint.x / first_line_width) * 180 / Math.PI + 180}deg)`;

    let second_line_width = Math.sqrt(Math.pow(innerWidth - startPoint.x, 2) + Math.pow((innerHeight - startPoint.y), 2));
    lines[2].style.width = second_line_width + 'px';
    lines[2].style.transform = `rotate(${Math.acos((innerWidth - startPoint.x) / second_line_width) * 180 / Math.PI}deg)`;

}

function setStyles() {
    lines.forEach(e => {
        e.classList.add('_unset')
    })
}
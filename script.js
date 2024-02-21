document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mousePos = { x: 0, y: 0 };
    let isMouseDown = false;
    let circleRadius = 0;

    const image = new Image();
    image.src = 'songoku.png'; // 이미지 경로 변경


    function scalingCircle (circleRadius){
        let risingCircle = Math.pow(2, circleRadius); // 2의 circleRadius 제곱을 계산
        return risingCircle; // 계산된 값을 반환
    }

    function updateCanvas() {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, mousePos.x - image.width / 2, mousePos.y - image.height / 2);

        if (isMouseDown) {
            circleRadius += 0.1; 
            let updatedCircle = scalingCircle(circleRadius);

            ctx.beginPath();
            ctx.arc(mousePos.x, mousePos.y, updatedCircle, 0, Math.PI * 2);
            ctx.fillStyle = 'black';
            ctx.fill();
        }

        requestAnimationFrame(updateCanvas);
    }

    window.addEventListener('resize', function() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    window.addEventListener('mousemove', function(e) {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
    });

    window.addEventListener('mousedown', function() {
        isMouseDown = true;
        circleRadius = 1;
    });

    window.addEventListener('mouseup', function() {
        isMouseDown = false;
    });

    updateCanvas();
});

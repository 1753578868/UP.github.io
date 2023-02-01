let mg = document.querySelector('.mg')
        let box = document.querySelector('.box')
        // 复制一份
        mg.innerHTML += mg.innerHTML
        let left = 0

        let timer

        function move() {
            clearInterval(timer)

            timer = setInterval(function () {
                left -= 2
                if (left === -(6 * 80 + 3 * 20)) {
                    left = 0
                }
                mg.style.left = left + 'px'
            }, 20)
        }

        move()
        box.onmouseenter = function () {
            clearInterval(timer)
        }
        box.onmouseleave = function () {
            move()
        }
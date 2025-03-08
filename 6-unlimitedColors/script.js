
const randomColor = function ()
{
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return (color)
}
console.log()

let intervalId

const startChangingColor = () =>
{
    if (!intervalId)
    {
        intervalId = setInterval(() =>
        {
            document.body.style.backgroundColor = randomColor()
        }, 1000);
    }

    // function changeBgColor()
    // {

    //     document.body.style.backgroundColor = randomColor()
    // }
}

const stopChangingColor = () =>
{
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
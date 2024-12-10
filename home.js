var title_top = 'Hi, I’m Evan Miller.\nComputer Science Student';
var title_bottom = 'attending California State\nUniversity, Fullerton.';
var wordle_text = 'This browser-based Wordle game, built with JavaScript, HTML, and CSS, challenges players to guess a five-letter word in six tries. It highlights correct letters in green, misplaced ones in yellow, and incorrect ones in gray.';
var space_text = 'A collaborative project recreating Space Invaders with Python and Pygame, featuring player controls, enemy waves, and dynamic scoring. Divided tasks included object creation, collision detection, and game loop optimization.';
var speed = 25;

window.onload = function()
{
    loadHeader();
}

function loadHeader()
{
    type("hero_text_white", title_top, () => {
        type("hero_text_red", title_bottom, () => {
            slide();
        });
    });
}

function slide()
{
    const hero_desc = document.getElementById('hero_description');
    setTimeout(() => {hero_desc.style.transform = 'translateX(0)';}, 70);
}

function wordle()
{
    var el = document.getElementById("project_vid");
    if(!el.src.endsWith("Videos/wordle.mp4"))
    {
        el.style.opacity = 0;
        el.src = "Videos/wordle.mp4";
        fadeIn(el);
        if(document.getElementById("project_text").innerHTML != wordle_text)
        {
            erase("project_text", () => {type("project_text", wordle_text);
                                        });
        }
    }
}

function spaceInvaders()
{
    var el = document.getElementById("project_vid");
    if(!el.src.endsWith("Videos/spaceinvaders.mp4"))
    {
        el.style.opacity = 0;
        el.src = "Videos/spaceinvaders.mp4";
        fadeIn(el);
        if(document.getElementById("project_text").innerHTML != space_text)
        { 
            erase("project_text", () => {type("project_text", space_text);
                                        });
        }
    }
}

function fadeIn(el)
{
    var tick = function()
    {
        el.style.opacity = +el.style.opacity + 0.01;
        if(+el.style.opacity < 1)
        {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function type(id, text)
{
    if(text.length > 0)
    {
        document.getElementById(id).innerHTML += text.substring(0, 1);
        setTimeout(() => type(id, text.substring(1)), speed);
    }
}

function type(id, text, callback)
{
    if(text.length > 0)
    {
        document.getElementById(id).innerHTML += text.substring(0, 1);
        setTimeout(() => type(id, text.substring(1), callback), speed);
    }
    else if(callback)
    {
        callback();
    }
    
}

function erase(id, callback)
{
    var text = document.getElementById(id).innerHTML;
    if(text.length > 0)
    {
        document.getElementById(id).innerHTML = text.substring(0, text.length - 2);
        setTimeout(() => erase(id, callback), speed);
    }
    else if(callback)
    {
        callback();
    }
}

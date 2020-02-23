let shedulle = true, address = false, contacts = false, about_goods = false;
let shedulle_text = "<h3>Режим работы</h3><br><br>Пн-Пт 9:00 - 19:00<br><br>Сб-Вс 10:00 - 16:00";
let address_text = "<h3>Адреса магазинов</h3><br>г. Драконий ров, ул. Колдунов 22<br>г. Древних магов, ул. Ледяных волков 38";
let contacts_text = "<h3>Телефоны</h3><br>Телефон горячей линии <br>***-***-***-**<br><br>Телефон склада<br>***-***-***-**<br><br>Телефон для корпоративных клиентов<br>***-***-***-**";
let about_goods_text = "<h3>Инофрмация о товарах</h3><br>Наши товары привозятся из стран с древнейшими традициями использования данного товара, он обладает высочайшим качеством и не имеет аналогов на рынке";

let cur_img = 0;

let imgs = Array(   "./imgs/img2.jpg",
                    "./imgs/img3.jpg",
                    "./imgs/img4.jpg",
                    "./imgs/img5.jpg",
                    "./imgs/img6.jpg"
);

$('document').ready( function()
    {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        
        let W = $("#wrapper").width();
        let H = $(".inner-header").height();
        canvas.width = W;
        canvas.height = H;
        
        let mp = 80;
        let particles = [];
        for(let i = 0; i < mp; i++)
        {
            particles.push({
                x: Math.random()*W,
                y: Math.random()*H,
                r: Math.random()*4+1,
                d: Math.random()*mp 
            })
        }

        function sidebar_imgs_swapper(){
            cur_img++;
            if(cur_img>4){
                cur_img=0;
            }
            $('.inner-sidebar').css("background-image","url(" + imgs[cur_img] + ")");
        }

        let q1 =  setInterval(sidebar_imgs_swapper, 3000);
        
        function draw()
        {
            ctx.clearRect(0, 0, W, H);
            
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.beginPath();
            for(let i = 0; i < mp; i++)
            {
                let p = particles[i];
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
            }
            ctx.fill();
            update();
        }
        
        let angle = 0;
        function update()
        {
            angle += 0.01;
            for(let i = 0; i < mp; i++)
            {
                let p = particles[i];

                p.y += Math.cos(angle+p.d) + 1 + p.r/2;
                p.x += Math.sin(angle) * 2;
                
                if(p.x > W+5 || p.x < -5 || p.y > H)
                {
                    if(i%3 > 0)
                    {
                        particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                    }
                    else
                    {
                        if(Math.sin(angle) > 0)
                        {
                            particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                        }
                        else
                        {
                            particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                        }
                    }
                }
            }
        }

        setInterval(draw, 25);

        $('#inner-shedulle').click( function(){
                $('#inner-shedulle').css("background-color", "red");
                $('#inner-address').css("background-color", "steelblue");
                $('#inner-contacts').css("background-color", "steelblue");
                $('#inner-about-goods').css("background-color", "steelblue");
                $('.inner-sidebar').html("");
                $('.inner-sidebar').append(shedulle_text);
                $('.inner-sidebar').css("background-color", "burlywood");
                $('.inner-sidebar').css("text-align", "center");
                $('.inner-sidebar').css("padding-top", "50px");
                $('.inner-sidebar').css("background-image", "none");
                clearInterval(q1);
            });

        $('#inner-address').click( function(){
            $('#inner-shedulle').css("background-color", "steelblue");
            $('#inner-address').css("background-color", "red");
            $('#inner-contacts').css("background-color", "steelblue");
            $('#inner-about-goods').css("background-color", "steelblue");
            $('.inner-sidebar').html("");
            $('.inner-sidebar').append(address_text);
            $('.inner-sidebar').css("background-color", "darkseagreen");
            $('.inner-sidebar').css("text-align", "center");
            $('.inner-sidebar').css("padding-top", "50px");
            $('.inner-sidebar').css("background-image", "none");
            clearInterval(q1);
        });
    
        $('#inner-contacts').click( function(){
            $('#inner-shedulle').css("background-color", "steelblue");
            $('#inner-address').css("background-color", "steelblue");
            $('#inner-contacts').css("background-color", "red");
            $('#inner-about-goods').css("background-color", "steelblue");
            $('.inner-sidebar').html("");
            $('.inner-sidebar').append(contacts_text);
            $('.inner-sidebar').css("background-color", "orchid");
            $('.inner-sidebar').css("text-align", "center");
            $('.inner-sidebar').css("padding-top", "40px");
            $('.inner-sidebar').css("background-image", "none");
            clearInterval(q1);
        });

        $('#inner-about-goods').click( function(){
            $('#inner-shedulle').css("background-color", "steelblue");
            $('#inner-address').css("background-color", "steelblue");
            $('#inner-contacts').css("background-color", "steelblue");
            $('#inner-about-goods').css("background-color", "red");
            $('.inner-sidebar').html("");
            $('.inner-sidebar').append(about_goods_text);
            $('.inner-sidebar').css("background-color", "olive");
            $('.inner-sidebar').css("text-align", "center");
            $('.inner-sidebar').css("padding-top", "38px");
            $('.inner-sidebar').css("background-image", "none");
            clearInterval(q1);
        });
    }
);
$(document).ready(function() {



    var audio1 = new Audio('sound/1.mp3');
    var audio2 = new Audio('sound/2.mp3');
    var audio3 = new Audio('sound/3.mp3');
    var audio4 = new Audio('sound/4.mp3');
    var audio5 = new Audio('sound/5.mp3');
    var audio6 = new Audio('sound/6.mp3');
    var audio7 = new Audio('sound/7.mp3');
    var audio8 = new Audio('sound/8.mp3');
    var audio9 = new Audio('sound/9.mp3');
    var audio10 = new Audio('sound/10.mp3');
    var audio11 = new Audio('sound/11.mp3');
    var audio12 = new Audio('sound/12.mp3');
    var audio13 = new Audio('sound/13.mp3');
    var audio14 = new Audio('sound/14.mp3');
    var audio15 = new Audio('sound/15.mp3');
    var audio16 = new Audio('sound/16.mp3');
    var audio17 = new Audio('sound/17.mp3');
    var audio18 = new Audio('sound/18.mp3');
    var audio19 = new Audio('sound/19.mp3');
    var audio20 = new Audio('sound/20.mp3');
    var audio21 = new Audio('sound/21.mp3');
    var audio22 = new Audio('sound/22.mp3');

    $('.info').width($('#screen').width());

    $(".p1 button").on("click", function() {
        $(".p43 button").css("opacity", "1");
        $(".animal2").css("opacity", "1");
        audio1.play();
    });

    $(".p43 button").on("click", function() {
        $(".p6 button").css("opacity", "1");
        $(".animal3").css("opacity", "1");
        audio2.play();
    });

    $(".p6 button").on("click", function() {
        $(".p13 button").css("opacity", "1");
        $(".animal4").css("opacity", "1");
        audio3.play();
    });

    $(".p13 button").on("click", function() {
        $(".p9 button").css("opacity", "1");
        $(".animal5").css("opacity", "1");
        audio4.play();
    });

    $(".p9 button").on("click", function() {
        $(".p31 button").css("opacity", "1");
        $(".animal6").css("opacity", "1");
        audio5.play();
    });

    $(".p31 button").on("click", function() {
        $(".p16 button").css("opacity", "1");
        $(".animal7").css("opacity", "1");
        audio6.play();
    });

    $(".p16 button").on("click", function() {
        $(".p8 button").css("opacity", "1");
        $(".animal8").css("opacity", "1");
        audio7.play();
    });

    $(".p8 button").on("click", function() {
        $(".p12 button").css("opacity", "1");
        $(".animal9").css("opacity", "1");
        audio8.play();
    });

    $(".p12 button").on("click", function() {
        $(".p2 button").css("opacity", "1");
        $(".animal10").css("opacity", "1");
        audio9.play();
    });

    $(".p2 button").on("click", function() {
        $(".p10 button").css("opacity", "1");
        $(".animal11").css("opacity", "1");
        audio10.play();
    });

    $(".p10 button").on("click", function() {
        $(".p15 button").css("opacity", "1");
        $(".animal12").css("opacity", "1");
        audio11.play();
    });

    $(".p15 button").on("click", function() {
        $(".p32 button").css("opacity", "1");
        $(".animal13").css("opacity", "1");
        audio12.play();
    });
    
    $(".p32 button").on("click", function() {
        $(".p19 button").css("opacity", "1");
        $(".animal14").css("opacity", "1");
        audio13.play();
    });

    $(".p19 button").on("click", function() {
        $(".p41 button").css("opacity", "1");
        $(".animal15").css("opacity", "1");
        audio14.play();
    });

    $(".p41 button").on("click", function() {
        $(".p72 button").css("opacity", "1");
        $(".animal16").css("opacity", "1");
        audio15.play();
    });

    $(".p72 button").on("click", function() {
        $(".p17 button").css("opacity", "1");
        $(".animal17").css("opacity", "1");
        audio16.play();
    });

    $(".p17 button").on("click", function() {
        $(".p42 button").css("opacity", "1");
        $(".animal18").css("opacity", "1");
        audio17.play();
    });

    $(".p42 button").on("click", function() {
        $(".p11 button").css("opacity", "1");
        $(".animal19").css("opacity", "1");
        audio18.play();
    });

    $(".p11 button").on("click", function() {
        $(".p71 button").css("opacity", "1");
        $(".animal20").css("opacity", "1");
        audio19.play();
    });

    $(".p71 button").on("click", function() {
        $(".p18 button").css("opacity", "1");
        $(".animal21").css("opacity", "1");
        audio20.play();
    });

    $(".p18 button").on("click", function() {
        $(".p5 button").css("opacity", "1");
        $(".animal22").css("opacity", "1");
        audio21.play();
    });

    $(".p5 button").on("click", function() {
        $(".animalFinal").css("opacity", "1");
        audio22.play();
    });


    /* random images */
    let character = [
        'animals/0_2_2.png', 'animals/0_2_3.png', 'animals/0_2.png', 'animals/00_2.png', 'animals/0_3 3.png', 'animals/0_3_2.png', 'animals/0_3.png', 'animals/00_3.png', 'animals/0_4.png', 'animals/0_5.png', 'animals/0.png', 'animals/00.png', 'animals/1_2 2.png', 'animals/1_2_2.png', 'animals/1_3.png', 'animals/1_4.png', 'animals/1_32.png', 'animals/1.png', 'animals/2_2.png', 'animals/02_2.png', 'animals/02_3_2.png', 'animals/02_3.png', 'animals/2.png', 'animals/02.png', 'animals/3_2.png', 'animals/3.png', 'animals/04.png', 'animals/05_2_2.png', 'animals/05_2.png', 'animals/05_3 2.png', 'animals/05_3_2.png', 'animals/05_3.png', 'animals/05_4.png', 'animals/005_4.png', 'animals/05.png', 'animals/06_2 2.png', 'animals/6_2.png', 'animals/06_2.png', 'animals/06_3.png', 'animals/07_2.png', 'animals/7.png', 'animals/10_2 3.png', 'animals/10_2_2.png', 'animals/10_2.png', 'animals/10_3.png', 'animals/11_2.png', 'animals/12_2.png', 'animals/12_3.png', 'animals/12_4.png', 'animals/13.png', 'animals/15_2.png',
        'animals/15.png', 'animals/16.png', 'animals/17.png', 'animals/20_2.png', 'animals/20_3.png', 'animals/20.png', 'animals/020.png', 'animals/21.png', 'animals/22_2.png', 'animals/22_3.png', 'animals/22.png', 'animals/23_2.png', 'animals/25_2.png', 'animals/025_3.png', 'animals/25.png', 'animals/26_2.png', 'animals/26.png', 'animals/027_2.png', 'animals/27.png', 'animals/30.png', 'animals/32_2.png', 'animals/32.png', 'animals/35_2.png', 'animals/35_3.png', 'animals/35.png', 'animals/36.png', 'animals/37_2.png', 'animals/37.png', 'animals/050_2.png', 'animals/050_3.png', 'animals/050.png', 'animals/052_2.png', 'animals/052_3.png', 'animals/052_4.png', 'animals/52.png', 'animals/052.png', 'animals/053_2.png', 'animals/53.png', 'animals/053.png', 'animals/0053.png', 'animals/055_2.png', 'animals/055_3.png', 'animals/55.png', 'animals/055.png', 'animals/056_2.png', 'animals/56.png', 'animals/056.png', 'animals/057_2.png', 'animals/57.png', 'animals/057.png', 'animals/060_2.png', 'animals/060_3.png', 'animals/060_4.png', 'animals/060.png', 'animals/62_2.png', 'animals/062_2.png', 'animals/62.png', 'animals/062.png', 'animals/065_2.png', 'animals/065.png', 'animals/070_2.png', 'animals/070.png', 'animals/073.png', 'animals/075_2.png', 'animals/075.png', 'animals/120.png', 'animals/122.png', 'animals/123.png', 'animals/126.png', 'animals/127_2.png', 'animals/127.png', 'animals/135.png', 'animals/152.png',
        'animals/153.png', 'animals/155 2.png', 'animals/155_2.png', 'animals/155.png', 'animals/157.png', 'animals/160_2.png', 'animals/160.png', 'animals/175.png', 'animals/207.png', 'animals/220.png', 'animals/222 2.png', 'animals/222_2.png', 'animals/222.png', 'animals/223 2.png', 'animals/223.png', 'animals/225.png', 'animals/226.png', 'animals/230_2.png', 'animals/230.png', 'animals/231.png', 'animals/235.png', 'animals/237.png', 'animals/250_2 2.png', 'animals/250_2.png', 'animals/250.png', 'animals/251.png', 'animals/252_2.png', 'animals/252.png', 'animals/0257_2.png', 'animals/262.png', 'animals/263.png', 'animals/272.png', 'animals/273.png', 'animals/305.png', 'animals/322_2.png', 'animals/323_2.png', 'animals/323.png', 'animals/330.png', 'animals/332 2.png', 'animals/336.png', 'animals/350_2.png', 'animals/350.png', 'animals/352 2.png', 'animals/352.png', 'animals/353.png', 'animals/355.png', 'animals/356.png', 'animals/362.png', 'animals/370.png', 'animals/500.png', 'animals/505.png', 'animals/0506_2.png', 'animals/0506.png', 'animals/00512.png', 'animals/0520_2.png', 'animals/520.png', 'animals/0520.png', 'animals/522.png', 'animals/526.png', 'animals/533.png', 'animals/535.png', 'animals/0537.png', 'animals/542.png', 'animals/0550.png', 'animals/0552_2.png', 'animals/0552.png', 'animals/553.png', 'animals/0562.png', 'animals/00572.png', 'animals/605.png', 'animals/621.png',
        'animals/635.png', 'animals/637.png', 'animals/0651.png', 'animals/0652.png', 'animals/666.png', 'animals/0707.png', 'animals/720.png', 'animals/0720.png', 'animals/0722.png', 'animals/0723.png', 'animals/725.png', 'animals/726_2.png', 'animals/0726_2.png', 'animals/0726.png', 'animals/0730.png', 'animals/735.png','animals/752.png', 'animals/755.png', 'animals/756.png', 'animals/1232.png', 'animals/1255.png', 'animals/1353.png', 'animals/1516.png', 'animals/1521.png', 'animals/1525.png', 'animals/1652.png', 'animals/1723.png', 'animals/2227.png', 'animals/2231.png', 'animals/2232.png', 'animals/2252.png', 'animals/2273.png', 'animals/2323 2.png', 'animals/2323.png', 'animals/2523.png', 'animals/2533.png', 'animals/2563.png', 'animals/2752.png', 'animals/3222_2.png', 'animals/3223.png', 'animals/3335.png', 'animals/3535.png', 'animals/5323.png', 'animals/5332.png', 'animals/05623.png', 'animals/06533.png',
        'animals/06576.png', 'animals/6627.png', 'animals/6652.png', 'animals/6756 2.png', 'animals/6756.png', 'animals/7123.png', 'animals/7232.png', 'animals/7233.png', 'animals/7253.png', 'animals/7322.png', 'animals/7325.png', 'animals/7375.png', 'animals/7522.png', 'animals/7552.png', 'animals/32553.png', 'animals/35726.png'
    ]

    let randomimg = character[Math.floor(Math.random() * character.length)];
    $('img#randomly').attr('src', randomimg);

    /* real me images */
    let realme = [
        'animals/0_2_2.png', 'animals/0_2_3.png', 'animals/0_2.png', 'animals/00_2.png', 'animals/0_3 3.png', 'animals/0_3_2.png', 'animals/0_3.png', 'animals/00_3.png', 'animals/0_4.png', 'animals/0_5.png', 'animals/0.png', 'animals/00.png', 'animals/1_2 2.png', 'animals/1_2_2.png', 'animals/1_3.png', 'animals/1_4.png', 'animals/1_32.png', 'animals/1.png', 'animals/2_2.png', 'animals/02_2.png', 'animals/02_3_2.png', 'animals/02_3.png', 'animals/2.png', 'animals/02.png', 'animals/3_2.png', 'animals/3.png', 'animals/04.png', 'animals/05_2_2.png', 'animals/05_2.png', 'animals/05_3 2.png', 'animals/05_3_2.png', 'animals/05_3.png', 'animals/05_4.png', 'animals/005_4.png', 'animals/05.png', 'animals/06_2 2.png', 'animals/6_2.png', 'animals/06_2.png', 'animals/06_3.png', 'animals/07_2.png', 'animals/7.png', 'animals/10_2 3.png', 'animals/10_2_2.png', 'animals/10_2.png', 'animals/10_3.png', 'animals/11_2.png', 'animals/12_2.png', 'animals/12_3.png', 'animals/12_4.png', 'animals/13.png', 'animals/15_2.png',
        'animals/15.png', 'animals/16.png', 'animals/17.png', 'animals/20_2.png', 'animals/20_3.png', 'animals/20.png', 'animals/020.png', 'animals/21.png', 'animals/22_2.png', 'animals/22_3.png', 'animals/22.png', 'animals/23_2.png', 'animals/25_2.png', 'animals/025_3.png', 'animals/25.png', 'animals/26_2.png', 'animals/26.png', 'animals/027_2.png', 'animals/27.png', 'animals/30.png', 'animals/32_2.png', 'animals/32.png', 'animals/35_2.png', 'animals/35_3.png', 'animals/35.png', 'animals/36.png', 'animals/37_2.png', 'animals/37.png', 'animals/050_2.png', 'animals/050_3.png', 'animals/050.png', 'animals/052_2.png', 'animals/052_3.png', 'animals/052_4.png', 'animals/52.png', 'animals/052.png', 'animals/053_2.png', 'animals/53.png', 'animals/053.png', 'animals/0053.png', 'animals/055_2.png', 'animals/055_3.png', 'animals/55.png', 'animals/055.png', 'animals/056_2.png', 'animals/56.png', 'animals/056.png', 'animals/057_2.png', 'animals/57.png', 'animals/057.png', 'animals/060_2.png', 'animals/060_3.png', 'animals/060_4.png', 'animals/060.png', 'animals/62_2.png', 'animals/062_2.png', 'animals/62.png', 'animals/062.png', 'animals/065_2.png', 'animals/065.png', 'animals/070_2.png', 'animals/070.png', 'animals/073.png', 'animals/075_2.png', 'animals/075.png', 'animals/120.png', 'animals/122.png', 'animals/123.png', 'animals/126.png', 'animals/127_2.png', 'animals/127.png', 'animals/135.png', 'animals/152.png',
        'animals/153.png', 'animals/155 2.png', 'animals/155_2.png', 'animals/155.png', 'animals/157.png', 'animals/160_2.png', 'animals/160.png', 'animals/175.png', 'animals/207.png', 'animals/220.png', 'animals/222 2.png', 'animals/222_2.png', 'animals/222.png', 'animals/223 2.png', 'animals/223.png', 'animals/225.png', 'animals/226.png', 'animals/230_2.png', 'animals/230.png', 'animals/231.png', 'animals/235.png', 'animals/237.png', 'animals/250_2 2.png', 'animals/250_2.png', 'animals/250.png', 'animals/251.png', 'animals/252_2.png', 'animals/252.png', 'animals/0257_2.png', 'animals/262.png', 'animals/263.png', 'animals/272.png', 'animals/273.png', 'animals/305.png', 'animals/322_2.png', 'animals/323_2.png', 'animals/323.png', 'animals/330.png', 'animals/332 2.png', 'animals/336.png', 'animals/350_2.png', 'animals/350.png', 'animals/352 2.png', 'animals/352.png', 'animals/353.png', 'animals/355.png', 'animals/356.png', 'animals/362.png', 'animals/370.png', 'animals/500.png', 'animals/505.png', 'animals/0506_2.png', 'animals/0506.png', 'animals/00512.png', 'animals/0520_2.png', 'animals/520.png', 'animals/0520.png', 'animals/522.png', 'animals/526.png', 'animals/533.png', 'animals/535.png', 'animals/0537.png', 'animals/542.png', 'animals/0550.png', 'animals/0552_2.png', 'animals/0552.png', 'animals/553.png', 'animals/0562.png', 'animals/00572.png', 'animals/605.png', 'animals/621.png',
        'animals/635.png', 'animals/637.png', 'animals/0651.png', 'animals/0652.png', 'animals/666.png', 'animals/0707.png', 'animals/720.png', 'animals/0720.png', 'animals/0722.png', 'animals/0723.png', 'animals/725.png', 'animals/726_2.png', 'animals/0726_2.png', 'animals/0726.png', 'animals/0730.png', 'animals/735.png','animals/752.png', 'animals/755.png', 'animals/756.png', 'animals/1232.png', 'animals/1255.png', 'animals/1353.png', 'animals/1516.png', 'animals/1521.png', 'animals/1525.png', 'animals/1652.png', 'animals/1723.png', 'animals/2227.png', 'animals/2231.png', 'animals/2232.png', 'animals/2252.png', 'animals/2273.png', 'animals/2323 2.png', 'animals/2323.png', 'animals/2523.png', 'animals/2533.png', 'animals/2563.png', 'animals/2752.png', 'animals/3222_2.png', 'animals/3223.png', 'animals/3335.png', 'animals/3535.png', 'animals/5323.png', 'animals/5332.png', 'animals/05623.png', 'animals/06533.png',
        'animals/06576.png', 'animals/6627.png', 'animals/6652.png', 'animals/6756 2.png', 'animals/6756.png', 'animals/7123.png', 'animals/7232.png', 'animals/7233.png', 'animals/7253.png', 'animals/7322.png', 'animals/7325.png', 'animals/7375.png', 'animals/7522.png', 'animals/7552.png', 'animals/32553.png', 'animals/35726.png'
    ]

    let realrandomimg = realme[Math.floor(Math.random() * realme.length)];
    $('img.animalFinal').attr('src', realrandomimg);

    //web page icon randomly changes
    $('#favicon').attr('href', realrandomimg);

})


$('path').hover(function(e){

  $('path').css('fill','#fff');
  $('.indicator').html('');
  var id = $(this).attr('id').toUpperCase();

  if($(this).attr('name')) {
    var name = $(this).attr('name');
    $('<div>' + name +'</div>').appendTo('.indicator');
  }


  if($(this).attr('flag')) {
    var flag = "http://sandbox.alexti-dev.ru/mapping/" + $(this).attr('flag') ;
    $(' <img class="flag" src="" alt="">').appendTo('.indicator');
    $('.indicator').find('img').attr('src',flag )
   // $('<img src='+ flag+ ' >').appendTo('.indicator');
 }

 $('.change').remove();

 var script = document.createElement('script');
 // script.classList.add('change');
  //script.src = 'http://api.geonames.org/countryInfoJSON?country='+info[id]+'&username=pixeltest&style=full&callback=update';
  document.body.appendChild(script);

  $(this).css('fill','#f6e72d');
  $('path').not(this).css('fill','rgba(0,0,0,0.5)');
  $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();



},function(){
  $('.indicator').html('');
  $('.indicator').hide();
  $('path').css('fill','rgba(0,0,0,0.2)');
});





var idAarr = ["RU-MOW", "RU-SPE", "RU-NEN", "RU-YAR", "RU-CHE", "RU-ULY", "RU-TYU", "RU-TUL", "RU-SVE", "RU-RYA", "RU-ORL", "RU-OMS", "RU-NGR", "RU-LIP", "RU-KRS", "RU-KGN", "RU-KGD", "RU-IVA", "RU-BRY", "RU-AST", "RU-KHA", "RU-CE", "RU-UD", "RU-SE", "RU-MO", "RU-KR", "RU-KL", "RU-IN", "RU-AL", "RU-BA", "RU-AD", "RU-CR", "RU-SEV", "RU-KO", "RU-KIR", "RU-PNZ", "RU-TAM", "RU-MUR", "RU-LEN", "RU-VLG", "RU-KOS", "RU-PSK", "RU-ARK", "RU-YAN", "RU-CHU", "RU-YEV", "RU-TY", "RU-SAK", "RU-AMU", "RU-BU", "RU-KK", "RU-KEM", "RU-NVS", "RU-ALT", "RU-DA", "RU-STA", "RU-KB", "RU-KC", "RU-KDA", "RU-ROS", "RU-SAM", "RU-TA", "RU-ME", "RU-CU", "RU-NIZ", "RU-VLA", "RU-MOS", "RU-KLU", "RU-BEL", "RU-ZAB", "RU-PRI", "RU-KAM", "RU-MAG", "RU-SA", "RU-KYA", "RU-ORE", "RU-SAR", "RU-VGG", "RU-VOR", "RU-SMO", "RU-TVE", "RU-PER", "RU-KHM", "RU-TOM", "RU-IRK"];
var idAarr2 = new Array(
  ["RU-MOW",  "Москва", "moscow.gif"],
  ["RU-CHE", "Челябинская область", "chelyabinskaya_flag.png" ],
  ["RU-ORL",  "Орловская область"],
  ["RU-OMS",  "Омская область", "flag_omskoj_oblasti.png"],
  ["RU-LIP",  "Липецкая область", "lipeckya.jpg"],
  ["RU-KRS",  "Курская область", "flag_of_kursk_oblast.png"],
  ["RU-RYA",  "Рязанская область", "ryazan.png"],
  ["RU-BRY",  "Брянская область", "bryanskaya_flag.png"],
  ["RU-KIR",  "Кировская область", "flag_kirovskoy_oblasti.png"],
  ["RU-ARK",  "Архангельская область", ""],
  ["RU-MUR",  "Мурманская область", ""],
  ["RU-SPE",  "Санкт-Петербург", ""],
  ["RU-YAR",  "Ярославская область", ""],
  ["RU-ULY",  "Ульяновская область", ""],
  ["RU-NVS",  "Новосибирская область", ""],
  ["RU-TYU",  "Тюменская область", ""],
  ["RU-SVE",  "Свердловская область", ""],
  ["RU-NGR",  "Новгородская область", ""],
  ["RU-KGN",  "Курганская область", ""],
  ["RU-KGD",  "Калининградская область", ""],
  ["RU-IVA",  "Ивановская область", ""],
  ["RU-AST",  "Астраханская область", ""],
  ["RU-KHA",  "Хабаровский край", ""],
  ["RU-CE",  "Чеченская республика", ""],
  ["RU-UD",  "Удмуртская республика", ""],
  ["RU-SE",  "Республика Северная Осетия", ""],
  ["RU-MO",  "Республика Мордовия", ""],
  ["RU-KR",  "Республика  Карелия", ""],
  ["RU-KL",  "Республика  Калмыкия", ""],
  ["RU-IN",  "Республика  Ингушетия", ""],
  ["RU-AL",  "Республика Алтай", ""],
  ["RU-BA",  "Республика Башкортостан", ""],
  ["RU-AD",  "Республика Адыгея", ""],
  ["RU-CR",  "Республика Крым", ""],
  ["RU-SEV",  "Севастополь", ""],
  ["RU-KO",  "Республика Коми", ""],
  ["RU-PNZ",  "Пензенская область", ""],
  ["RU-TAM",  "Тамбовская область", ""],
  ["RU-LEN",  "Ленинградская область", ""],
  ["RU-VLG",  "Вологодская область", ""],
  ["RU-KOS",  "Костромская область", ""],
  ["RU-PSK",  "Псковская область", ""],
  ["RU-YAN",  "Ямало-Ненецкий АО", ""],
  ["RU-CHU",  "Чукотский АО", ""],
  ["RU-YEV",  "Еврейская автономская область", ""],
  ["RU-TY",  "Республика Тыва", ""],
  ["RU-SAK",  "Сахалинская область", ""],
  ["RU-AMU",  "Амурская область", ""],
  ["RU-BU",  "Республика Бурятия", ""],
  ["RU-KK",  "Республика Хакасия", ""],
  ["RU-KEM",  "Кемеровская область", ""],
  ["RU-ALT",  "Алтайский край", ""],
  ["RU-DA",  "Республика Дагестан", ""],
  ["RU-KB",  "Кабардино-Балкарская республика", ""],
  ["RU-KC",  "Карачаевая-Черкесская республика", ""],
  ["RU-KDA",  "Краснодарский край", ""],
  ["RU-ROS",  "Ростовская область", ""],
  ["RU-SAM",  "Самарская область", ""],
  ["RU-TA",  "Республика Татарстан", ""],
  ["RU-ME",  "Республика Марий Эл", ""],
  ["RU-CU",  "Чувашская республика", ""],
  ["RU-NIZ",  "Нижегородская край", ""],
  ["RU-VLA",  "Владимировская область", ""],
  ["RU-MOS",  "Московская область", ""],
  ["RU-KLU",  "Калужская область", ""],
  ["RU-BEL",  "Белгородская область", ""],
  ["RU-ZAB",  "Забайкальский край", ""],
  ["RU-PRI",  "Приморский край", ""],
  ["RU-KAM",  "Камачатский край", ""],
  ["RU-MAG",  "Магаданская область", ""],
  ["RU-SA",  "Республика Саха", ""],
  ["RU-KYA",  "Красноярский край", ""],
  ["RU-ORE",  "Оренбургская область", ""],
  ["RU-SAR",  "Саратовская область", ""],
  ["RU-VGG",  "Волгоградская область", ""],
  ["RU-VOR",  "Ставропольский край", ""],
  ["RU-SMO",  "Смоленская область", ""],
  ["RU-TVE",  "Тверская область", ""],
  ["RU-PER",  "Пермская область", ""],
  ["RU-KHM",  "Ханты-Мансийский АО", ""],
  ["RU-KHM",  "Ханты-Мансийский АО", ""],
  ["RU-TOM",  "Томская область", ""],
  ["RU-IRK",  "Иркутская область", ""],
  ["RU-NEN",  "Ненецскй АО", ""],
  ["RU-STA",  "Ставропольский край", ""],
  ["RU-TUL",  "Тульская область", "tulskaya_flag.png"]

  );

$('path').each(function() {

  var regId = $(this).attr('id');
  var flag = '';
  var name = '';
  for (var j = 0; j < idAarr2.length; j++) {

    if (regId == idAarr2[j][0]) {
      name = idAarr2[j][1];
      flag =  'flags/'+ idAarr2[j][2];

      $(this).attr('name', name);
      $(this).attr('flag', flag);
    }
  }


  var regIdDiv = '<div class="reg" >'+ '[' + '<span>'+  regId +'</span>' + ']' +' '+ name +'</div>'
  $(regIdDiv).appendTo('.regs');


// var idArrMin = [regId, '_'];
// idAarr2.push(idArrMin);


})


// for (var j = 0; j < idAarr2.length; j++) {
//   if (regId == idAarr2[j][0]) {
//     name = cyr2latChars[j][1];

//   }
// }


function naming() {

}


//revertFill();


$('.reg').hover(function(e) {


  var id = $(this).find('span').text();

  idHover = '#' + id;

  $(idHover).css('fill','#f6e72d');
 // $('path').not(this).css('fill','rgba(0,0,0,0.5)');
 // $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();

},function(){
  $('.indicator').html('');
  $('.indicator').hide();
  $('path').css('fill','rgba(0,0,0,0.2)');
});

//} // revertFill

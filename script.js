var _0x4311=['<h1\x20class=\x27question3\x27>3.\x20What\x20state\x20is\x20AoIT\x20in?</h1>','.ipt1','.ipt2','.ipt3','.btn2','hide','.ans','.btnReverse','.btn','click','val','append','.questionTarget','html','log','You\x20got\x20','round','.correctTotal','Answers\x20Correct:\x20','New\x20York','show','<h1\x20class=\x27question1\x27>1.\x20What\x20borough\x20is\x20AoIT\x20in?</h1>','<h1\x20class=\x27question2\x27>2.\x20What\x20city\x20is\x20AoIT\x20in?</h1>'];(function(_0x168691,_0xbecfaa){var _0x219eb1=function(_0x40bce4){while(--_0x40bce4){_0x168691['push'](_0x168691['shift']());}};_0x219eb1(++_0xbecfaa);}(_0x4311,0x9f));var _0x5a74=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x4311[_0x2d8f05];return _0x4d74cb;};var userAnswer1;var userAnswer2;var userAnswer3;var total=0x0;var userNum=0x0;var questions=[_0x5a74('0x0'),_0x5a74('0x1'),_0x5a74('0x2')];var disIpt=[_0x5a74('0x3'),_0x5a74('0x4'),_0x5a74('0x5')];$(_0x5a74('0x6'))['hide']();$(_0x5a74('0x3'))[_0x5a74('0x7')]();$('.ipt2')[_0x5a74('0x7')]();$('.ipt3')['hide']();$(_0x5a74('0x8'))[_0x5a74('0x7')]();$(_0x5a74('0x9'))[_0x5a74('0x7')]();$(_0x5a74('0xa'))[_0x5a74('0xb')](function(){userNum=parseInt($('.ipt')[_0x5a74('0xc')]());for(var _0x41a183=0x0;_0x41a183<userNum;_0x41a183++){$('.questionTarget')[_0x5a74('0xd')](questions[_0x41a183]);buttonClick();}buttonClick();showIpts();});$(_0x5a74('0x9'))[_0x5a74('0xb')](function(){$(_0x5a74('0xe'))[_0x5a74('0xf')]('\x20');for(var _0x511d53=userNum;0x0<_0x511d53;_0x511d53--){$(_0x5a74('0xe'))[_0x5a74('0xd')](questions[_0x511d53-0x1]);buttonClick();console[_0x5a74('0x10')](_0x511d53);}});$(_0x5a74('0x6'))['click'](function(){userAnswer1=$('.ipt1')[_0x5a74('0xc')]();userAnswer2=$(_0x5a74('0x4'))['val']();userAnswer3=$(_0x5a74('0x5'))[_0x5a74('0xc')]();if(userNum===0x1){question1(userAnswer1);alert(_0x5a74('0x11')+Math['round'](total/0x1*0x64)+'%');}else if(userNum===0x2){question1(userAnswer1);question2(userAnswer2);alert(_0x5a74('0x11')+Math[_0x5a74('0x12')](total/0x2*0x64)+'%');}else{question1(userAnswer1);question2(userAnswer2);question3(userAnswer3);alert('You\x20got\x20'+Math[_0x5a74('0x12')](total/0x3*0x64)+'%');}});function question1(_0x403bfb){if(_0x403bfb==='Brooklyn'){total++;$(_0x5a74('0x13'))[_0x5a74('0xf')](_0x5a74('0x14')+total);}else{$(_0x5a74('0x13'))[_0x5a74('0xf')](_0x5a74('0x14')+total);}}function question2(_0x75ea8){if(_0x75ea8===_0x5a74('0x15')){total++;$('.correctTotal')[_0x5a74('0xf')](_0x5a74('0x14')+total);}else{$(_0x5a74('0x13'))[_0x5a74('0xf')](_0x5a74('0x14')+total);}}function question3(_0x53e3a2){if(_0x53e3a2===_0x5a74('0x15')){total++;$(_0x5a74('0x13'))[_0x5a74('0xf')]('Answers\x20Correct:\x20'+total);}else{$(_0x5a74('0x13'))[_0x5a74('0xf')](_0x5a74('0x14')+total);}}function buttonClick(){$('.btn')[_0x5a74('0x7')]();$('.ipt')[_0x5a74('0x7')]();$(_0x5a74('0x6'))[_0x5a74('0x16')]();$(_0x5a74('0x8'))[_0x5a74('0x16')]();$(_0x5a74('0x9'))[_0x5a74('0x16')]();}function showIpts(){$(_0x5a74('0x3'))[_0x5a74('0x16')]();$('.ipt2')['show']();$('.ipt3')[_0x5a74('0x16')]();}

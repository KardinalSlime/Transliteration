/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
		transliterate = (
			function() {
				var
					rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
					eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);
				return function(text, engToRus) {
				var x;
				for(x = 0; x < rus.length; x++) {
					text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
					text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());   
				}
				return text;
				}
			}
		)();
		
	$(document).ready(function() {
    $("#toEn").click(function() {
        $("#text2").val( transliterate( $("#text1").val(), false ) );
    });

    $("#toRu").click(function () {
        $("#text1").val( transliterate( $("#text2").val(), true ) );
    });
});

'use strict';
  // создаем <link rel="stylesheet" href="light|dark.css">
  let head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  // проверяем значение из localStorage если dark то темная тема
  if (localStorage.getItem('themeStyle') === 'dark') {
    link.href = 'dark.css'; // ссылка на темный стиль
    document.getElementById('switch-1').setAttribute('checked', true); // переключаем чекбокс в положение "темная тема"
  }
  // по умолчанию светлая тема
  else {
    link.href = 'light.css'; // ссылка на светлый стиль
  }
  head.appendChild(link); // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы между темаги head

  // событие при переключении чекбокса
  document.getElementById('switch-1').addEventListener('change', ev => {
    let btn = ev.target;
    // если чекбокс включен
    if (btn.checked) {
      link.href = 'dark.css'; // сключаем темную тему
      localStorage.setItem('themeStyle', 'dark'); // записываем значение в localStorage
    }
    else {
      link.href = 'light.css'; // включаем светлую тему
      localStorage.setItem('themeStyle', 'light'); // записываем значение в localStorage
    }
  });
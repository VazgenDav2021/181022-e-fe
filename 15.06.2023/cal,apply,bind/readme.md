1. this - это контекст в котором он был указан.
2. Если this был вызван глобально, за пределы функции, объектов, классов, и В БРАУЗЕРЕ он возвращает глобальный this (Window). Где написаны методы который нам предаставляет браузер (Browser API).
3. Если this был вызван глобально в термниале то он зовращает {}.
4. Есть 3 способа передачи контекста
   --1 call. Метод call принимает n-ое количство параметров, первым параметром указывается контекст, после него указываются параметры для фунцкии или метода
   --2 apply. Делает тоже самое что и call, просто параметры функции указываются в массиве
   --3 bind. Тоже функции передает контекст, за исклжчением того что сразы не возвращает результат. А ворзвращает функцию которая должа быть вызвана для получения результат

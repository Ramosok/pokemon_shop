Краткое содержание приложения:
1.	Страница Регистрации
2.	Страница Входа в приложение
3.	Страница Товаров
4.	Страница ТоварА
5.	Страница Корзины
6.	Страница Личного Кабинета Пользователя
Подробное описание постраничной функциональности:
1.	Регистрация:
-	На данной странице должна быть форма для регистрации пользователя.
-	Форма должна валидироваться. Кнопка, submit должна быть заблокирована, пока все поля формы не будут заполнены корректно.
-	При успешном создании аккаунта должно быть показано сообщение, в котором говорится о том, что аккаунт создан и кнопкой, которая будет перенаправлять юзера на страницу для входа.
2.	Страница входа (Логин):
-	Аналогично, должна быть валидация полей 
-	При успешном входе, перенаправлять пользователя на страницу товаров, в ином случае очистить форму и вывести ошибку
3.	Страница товаров:
-	При попадании на данную страницу должна происходить загрузка товаров и отображение полученных товаров
-	Также, на данной странице должна быть реализована пагинация
-	Элемент товара должен иметь вид:  Изображение товара, название, стоимость, кнопка добавить в корзину, кнопка для перехода на отдельную страницу кликнутого товара
4.	Страница товара:
-	На отдельной странице товара должна быть выведена информация по текущему товару, и так же кнопка добавить в корзину
5.	Страница корзины:
-	При входе на страницу корзины должен осуществляться запрос на ранее добавленные товары
-	Каждый элемент корзины должен иметь картинку, название, возможность изменять количество (счётчик),  стоимость
-	Так же в корзине должна быть отображена текущая сумма заказа, которая высчитывается в зависимости от находящихся там продуктов
-	Кнопка “Подтвердить заказ”, при нажатии на которую будет происходить создание заказа. При успешном создании заказа, вывести сообщение об этом и очистить корзину. 
-	ТАКЖЕ в хедере должен быть значок корзины, с отображением количества элементов в ней на данный момент
6.	Личный кабинет пользователя: 
-	На данной странице вывести информацию об авторизированном пользователе и список совершённых им заказов

Дополнительная информация:
В вашем приложении все роуты, кроме страницы логина и регистрации должны быть ПРИВАТНЫМИ.
Обязательно использовать Material UI
Архитектура приложения должна быть строго такая, как я вам объяснял в течение всего обучения.
Ссылка на документацию к API: https://demo-api.it-shatle.by/api/

P.S. Всем удачи и успехов. Я в вас верю. Дедлайн 13 августа 2021 года до 15:00.


use `sunflower_db`;
delete from `carts`;
delete from `categories`;
delete from `products`;
delete from `productscarts`;
delete from `roles`;
delete from `sizes`;
delete from `sizesproducts`;
delete from `users`; 

insert into categories (name) values ('Plantas de interior');

insert into categories (name) values ('Plantas de exterior');

insert into sizes (name) values ('10');

insert into sizes (name) values ('20');

insert into sizes (name) values ('30');


insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Geranio', 'Los geranios son plantas de exterior con flores de atractivos y colores vivos que florecen durante el verano y son bastante resistentes. Los geranios son plantas de exterior con flores de colores vivos. Florecen durante el verano y son bastante resistentes. Se suelen cultivar en el jardín, en la terraza o el balcón pero también se pueden mantener en interior, siempre y cuando se coloque en un lugar muy luminoso alejados de la calefacción.',
1200, 15,'img-products-geranio-2.png', 1, 0, '2022-02-15');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Helecho', 'Los helechos, son plantas vasculares sin semilla (pteridofitas), cuyas características morfológicas más sobresalientes son sus hojas grandes, usualmente pinadas y con prefoliación circinada. La cantidad de especies y formas de los helechos les convierte en unas de las plantas más atractivas y espectaculares para decorar terrazas y jardines, pero también como planta de interior. En este artículo te vamos a contar cómo cuidarlas para que te duren mucho y se vean siempre bonitas y con vida.',
700, 10, 'img-products-helecho.png', 1, 0, '2022-02-15');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Lavanda','Planta medicinal para tratar heridas y quemaduras. La lavanda toma su nombre del latín lavare (lavar), y se ha utilizado durante siglos para aromatizar aceite de baño y jabones. Es originaria del Mediterráneo y sigue estrechamente relacionada con la industria del perfume del sur de Francia. Sus flores son apreciadas por sus virtudes calmantes y sedantes, y el aceite esencial se utiliza para los dolores musculares y los problemas respiratorios.',
2500, 30,'img-products-lavanda.png', 2, 0, '2022-02-25');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Erica','Una planta bonita y fácil de cuidar. Es perfecta para tener en el jardín, ya sea plantada a ambos lados de una entrada, o delimitando caminos. Capaz de vivir muchos años incluso si se cultiva en maceta. La Erica, llamada a veces brezo, es una planta que se ve hermosa durante gran parte del año, siendo el otoño el momento en el que se llena de flores. Así, vale la pena tenerla en cuenta para darle color al patio o al rincón verde del hogar.',
1000, 15,'img-products-erica.png', 2, 0, '2022-02-17');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Homalomena', 'Es una interesante planta adecuada para entornos de interior gracias a su ornamental follaje. Goza de unas bellísimas hojas de naturaleza permanente. El género de las Homalomena procede de diversas partes tropicales de Asia y América del Sur y lo determinan plantas de condición perenne. No es raro que produzca flores, aún en los espacios cerrados de una vivienda si se dan las condiciones oportunas.',
2200, 0,'img-products-selby1.jpg', 1, 0, null);

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Ficus-lyrata', 'LA PLANTA DE TENDENCIA. El ficus lyrata destaca por sus hojas verdes y su presencia. Es una planta perfecta para decorar cualquier rincón y amenaza con conquistar esta temporada el reinado del helecho. El ficus lyrata es una planta tropical procedente de África perfecta para interiores. Su nombre es un homenaje a la lira ya que sus hojas tienen la forma de ese instrumento de cuerda. Aunque también se la conoce como higuera de hojas de violín, árbol lira o ficus lirado.',
3500, 0,'img-products-ficus-lyrata.png', 1, 0, null);

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Fittonia', 'La Fitonia (Fittonia verschaffeltii) es una planta de interior de tipo rastrero. Se caracteriza por su pequeño tamaño, perfecto como tapiz para realizar composiciones con plantas de mayor tamaño. Se caracteriza por sus hojas, de color verde y con venas o nervaduras de color que contrastan con el resto de la hoja. Es una planta que alcanza muy poca altura, unos 15 centímetros. Este porte rastrero la hace perfecta como complemento en composiciones de plantas. Las distintas variedades permiten encontrar multitud de patrones de colores en sus hojas que van desde el blanco o plateado, al amarillo, rojo intenso o morado.',
1600, 10,'img-products-fittonia.png', 1, 0, '2022-02-27');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Sanseviera', 'UNA PLANTA DE INTERIOR FÁCIL DE CUIDAR Y QUE LIMPIA EL AIRE. La sansevieria necesita muy poca agua y su llamativo color verde suma vitalidad a cualquier rincón. Además, ¡mejora el aire en tu casa!. La sansevieria es una planta fácil de cultivar y una superviviente nata en cualquier espacio: aguanta temperaturas elevadas y también bajas (hasta -5ºC). Resulta muy decorativa con sus hojas robustas y verticales, su verde «atigrado» y el borde de las hojas entre verde lima y amarillo. Además, ¡es una gran limpiadora del aire interior de la casa!. La sansevieria,también conocida como lengua de suegra, es una de las plantas recomendadas por la NASA (Administración Nacional de la Aeronáutica y del Espacio de Estados Unidos) para eliminar del aire que respiramos tóxicos como el benceno, el tolueno, el xileno, el tricloroetileno y el formaldehído. Y añade a esto que es muy resistente a las plagas; incluso los ácaros lo tienen difícil con ella. Por todo ello, está el top ten de las que no pueden faltar en tu casa si eres principiante.',
600, 20,'img-products-sanseviera.png', 1, 0, '2022-02-11');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Suculenta', 'Las plantas suculentas se han convertido en unas habituales tanto para los amantes de la jardinería como para quienes tienen poca mano con ella. El hecho de que ocupen poco espacio y que, además, pueden crecer en casi en cualquier sitio (ya sea en interior o en exterior) convierten a las suculentas en una apuesta genial para tener un pedacito de Naturaleza en casi cualquier espacio. Una manera genial de evitarles plagas, deformaciones o, incluso, la muerte (algo realmente complicado por el tipo de planta que son: Poca Agua, Mucha luz, drenaje y un suelo sencillo.',
900, 20,'img-products-suculenta-variada.jpg', 2, 0, '2022-02-09');

insert into products (name, description, price, discount, image, category_id, deleted, date_sale) values 
('Lirio azul', 'Hermosa planta tropical', 2300, 10,'productImg1636146969187.webp', 2, 0, '2022-03-22');


insert into sizesproducts (product_id, size_id)
values (1, 2);

insert into sizesproducts (product_id, size_id)
values (2, 2);

insert into sizesproducts (product_id, size_id)
values (3, 2);

insert into sizesproducts (product_id, size_id)
values (4, 3);

insert into sizesproducts (product_id, size_id)
values (5, 3);

insert into sizesproducts (product_id, size_id)
values ( 6, 1);

insert into sizesproducts (product_id, size_id)
values ( 7, 3);

insert into sizesproducts (product_id, size_id)
values ( 8, 2);

insert into sizesproducts (product_id, size_id)
values ( 9, 1);

insert into sizesproducts (product_id, size_id)
values ( 10, 1);

insert into sizesproducts (product_id, size_id)
values ( 1 , 3);


insert into roles (name) values ('administrador');
insert into roles (name) values ('usuario');

INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Valentine','Deakin','vdeakin0@homestead.com','(818) 2737727','Idt0OriW',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Olvan','Hritzko','ohritzko1@amazonaws.com','(426) 4398099','cuyutyOAi',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Jereme','Schimon','jschimon2@senate.gov','(708) 5122350','VGqMK4Qa1vh',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Katti','Eagling','keagling3@nyu.edu','(277) 8201593','IT9qtC1accN',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Eliot','Neilus','eneilus4@tumblr.com','(513) 4434897','lifBQKUX',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Johanna','Niño','hanni.file@gmail.com','3017082187','123456',1,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Ariel','cruz','ariel@gmail.com','12344','$2a$10$N7mMvg5zil1/zxevMrWobOWl8oor5NXzJcVL.pR8Sij79kzUXXzhS',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Johanna','sdfsdf','jn@gmail.com','12123213','$2a$10$Bc7zu8vHYgw/d.VABF5fBu82h5OcblhVocMSU7p7sH5/EyjwjToCG',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Linda','Niño','linda@gmail.com','12344','$2a$10$KE3bBb4m5vd4OUb6cHIwAuGkDvYUM.uz1SEdvJAvixV/QeGxxYZmy',2,'userImg1637651645731.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','ju','bu','hj@mail.com','3','$2a$10$dH7cHyg6UHX9XSW3gvU6R.F6ZkNbSwMvCmUAURYy4sPZ.xcykpKty',2,'userImg1637754399875.png');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','julia','bu','g@mail.com','2','$2a$10$PxLsYUiFW7HD/Tvie2daguSKDhGFK4Mg9IIJVC4C3CbfJm7J3TJkK',2,'userImg1637756165414.png');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','julias','bu','j@mail.com','2','$2a$10$yiBDRR8nUelVJat.1IcWp.eQR8tY6v9R798ej0T5.pylkLqmlPXLG',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','jules','bu','gh@mail.com','2','$2a$10$VVszDkySZLpB8b327j/jtO1I9IvD6aOE4cfZLho2Y4q2O.1CAk2J2',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','juli','bur','ju@mail.com','2','$2a$10$MbsQV7RMrr0Q0/bglJqcxOygnTZszLYIfPHtGydXAcGBoKlGtmBCm',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Prueba25','nov','prueba25@mail.com','3017082187','$2a$10$BEeDMFjhOFpQiE63uc5f9eh6nZFsA5pX/BfkSzSXXbEiuumbJiigC',2,'user.jpg');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','Johanna','Niño','johy@gmail.com','3017082187','$2a$10$NXhtKT6S9125ntKhEq24H.FTMe/A7y0KFLED.5BT34Q1e2lNzZyFm',1,'johanna.jfif');
INSERT INTO users(birthday,first_name,last_name,email,phone,password,rol_id,image_profile) VALUES ('2000-01-01','pruebaCliente','Cliente','cliente@gmail.com','3017082187','$2a$10$sLaruLeJCTpdV1IQtzMs.e4IY.DqK5/FWg.avFxNHyFc.LB6Ep71e',2,'userImg1637975090982.webp');



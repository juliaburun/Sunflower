create database if not exists  `sunflower_db`;
use `sunflower_db`;

create TABLE `categories`(
`id` int(20) unsigned auto_increment,
`name` varchar(100) not null,
primary key (`id`));


create table `products`(
`id` int(20) unsigned auto_increment,
`name` varchar(100) not null,
`description` text not null,
`price` int(20) unsigned not null,
`discount` int unsigned  not null,
`image` varchar(255),
`category_id` int(20) unsigned,
`deleted` int unsigned not null default 0,
`date_sale` date,
primary key(`id`),
constraint `fk_products_category_id` foreign key (`category_id`) references `categories`(`id`) on delete cascade on update cascade);


create TABLE `sizes`(
`id` int(20) unsigned auto_increment,
`name` varchar(100) not null,
primary key (`id`));

create TABLE `sizesProducts`(
`id` int(20) unsigned auto_increment,
`product_id` int(20) unsigned,
`size_id` int(20)  unsigned,
primary key (`id`),
constraint `fk_sizesProducts_product_id` foreign key (`product_id`) references `products`(`id`) on delete cascade on update cascade,
constraint `fk_sizesProducts_size_id` foreign key (`size_id`) references `sizes`(`id`) on delete cascade on update cascade);

create TABLE `roles`(
`id` int(20) unsigned auto_increment,
`name` varchar(100) not null,
primary key (`id`));

create table `users`(
`id` int(20) unsigned auto_increment,
`first_name` varchar(100) not null,
`last_name` varchar(100) not null,
`email` varchar(255) not null,
`phone` varchar(60) not null,
`password` varchar(255) not null,
`image_profile` varchar(255),
`rol_id` int(20) unsigned,
`deleted` int unsigned not null default 0,
primary key(`id`),
constraint `fk_users_rol_id` foreign key (`rol_id`) references `roles`(`id`) on delete cascade on update cascade);

create TABLE `carts`(
`id` int(20) unsigned auto_increment,
`date_cart` date,
`user_id` int(20) unsigned,
`total` int(100) unsigned not null,
`finished` int unsigned not null default 0, 
primary key (`id`),
constraint `fk_carts_user_id` foreign key (`user_id`) references `users`(`id`) on delete cascade on update cascade);

create TABLE `productsCarts`(
`id` int(20) unsigned auto_increment,
`product_id` int(20) unsigned,
`cart_id` int(20) unsigned,
`amount` int(50) unsigned not null,
`subtotal` int(100) unsigned not null,
primary key (`id`),
constraint `fk_productsCarts_product_id` foreign key (`product_id`) references `products`(`id`) on delete cascade on update cascade,
constraint `fk_productsCarts_cart_id` foreign key (`cart_id`) references `carts`(`id`) on delete cascade on update cascade);


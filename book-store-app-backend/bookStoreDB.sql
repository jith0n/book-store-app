--drop database UsersDB

----------------------------------------------

create database UsersDB

use UsersDB


-------------------------------------------------------
create table category
(
	CategoryId	int identity(101,1) primary key,
	CategoryName varchar(20) ,
	[Status] bit ,
	CreatedAt date default getdate(),
)
create table books
(
	BookId int identity(101,1) primary key,
	CategoryId	int foreign key references category(CategoryId),
	Title varchar(30),
	ISBN varchar(20),
	[Year] int,
	Price float,
	[Description] varchar(1000),
	[Status] bit,
	[Image] varchar(150),
	Author varchar(50),
	Stock int,
	CreatedAt date default getdate()
)


create table shipping
(
	id int identity (101,1) primary key,
	userId nvarchar(128) foreign key references [User](Id),
	[name] varchar(20),
	[address] varchar(50),
	country varchar(20),
	[state] varchar (20),
	pincode int
)

create table coupons
(
    couponcode varchar(20) primary key,
	discount float ,
	stock int ,
	[type] varchar(20)
)

create table wishlist
(
    id int primary key identity(101,1),
	booksid int foreign key references books(BookId),
	userid nvarchar(128) foreign key references [User](Id)
)
alter table wishlist
ADD CONSTRAINT wishlist_unq UNIQUE (booksid, userid)


create table orders
(
	OrderId int identity(101,1) primary key,
	userId nvarchar(128) foreign key references [User](Id),
	TotalPrice float
)

create table cart
(
	Id int identity(101,1) primary key ,
	BookId int foreign key references books(BookId),
	userId nvarchar(128) foreign key references [User](Id),
	OrderId int foreign key references orders(OrderId),
	BookQuantity int
)

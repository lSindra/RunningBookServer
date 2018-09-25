CREATE DATABASE runningbook;
USE runningbook;
CREATE TABLE USER(
ID_USER INT auto_increment,
Name VARCHAR(30) NOT NULL,
Score INT DEFAULT 0,
Level VARCHAR(10) DEFAULT '1',
Birthday DATE NOT NULL,
City VARCHAR(30),
PRIMARY KEY(ID_USER)
);
CREATE TABLE CHALLENGE(
ID_CHALLENGE INT auto_increment,
Description LONGTEXT NOT NULL,
Score INT NOT NULL,
Level VARCHAR(10) DEFAULT '1',
PRIMARY KEY(ID_CHALLENGE)
);
CREATE TABLE CATEGORY(
ID_CATEGORY INT auto_increment,
Category VARCHAR(25) NOT NULL,
PRIMARY KEY(ID_CATEGORY)
);
CREATE TABLE GROUP(
ID_GROUP INT AUTO_INCREMENT,
Name LONGTEXT NOT NULL,
Category INT,
PRIMARY KEY(ID_GROUP),
CONSTRAINT FK_CAT FOREIGN KEY(Category) REFERENCES CATEGORY(ID_CATEGORY) 
);
CREATE TABLE USER_CHALLENGE(
ID_USER INT,
ID_CHALLENGE INT,
ChallengeDone CHAR(1) DEFAULT 'N',
PRIMARY KEY(ID_USER,ID_CHALLENGE),
CONSTRAINT FK_US FOREIGN KEY (ID_USER) REFERENCES USER(ID_USER),
CONSTRAINT FK_DE FOREIGN KEY (ID_CHALLENGE) REFERENCES CHALLENGE(ID_CHALLENGE)
);
CREATE TABLE USER_GROUP(
ID_USER INT,
ID_GROUP INT,
PRIMARY KEY(ID_USER,ID_GROUP),
CONSTRAINT FK_USGR FOREIGN KEY (ID_USER) REFERENCES USER(ID_USER),
CONSTRAINT FK_GRU FOREIGN KEY (ID_GROUP) REFERENCES GROUP(ID_GROUP)
);


INSERT INTO USER (Name,Birthday,City)
VALUES('Guilherme', '1994-05-16','Porto Alegre'),
	  ('Julia','1988-08-10','Boston');
      
INSERT INTO CATEGORY (Category)
VALUES('Corrida'),
	  ('Musculação'),
      ('Abdominal');
      
INSERT INTO GROUP (Name,Category)
VALUES('Passeio noturno',1),
	  ('Juntos somos mais fortes',2),
      ('Tanque cheio',3);
      
INSERT INTO CHALLENGE(Description, Score, Level)
VALUES('Corrida 3km',10,1),
	  ('Rosca de 3kg',8,1),
      ('2 seq. de 12x abdominal tradicional',12,1);
INSERT INTO USER_CHALLENGE 
values(1,2,'N'),
	  (2,3,'S'),
      (2,1,'N'),
      (1,1,'S');

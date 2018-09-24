CREATE DATABASE runningbook;
USE runningbook;
CREATE TABLE USUARIO(
CodUsuario INT auto_increment,
Nome VARCHAR(30) NOT NULL,
Pontuacao INT DEFAULT 0,
Nivel VARCHAR(10) DEFAULT '1',
DataNasc DATE NOT NULL,
Cidade VARCHAR(30),
PRIMARY KEY(CodUsuario)
);
CREATE TABLE DESAFIO(
CodDesafio INT auto_increment,
Descricao LONGTEXT NOT NULL,
Pontuacao INT NOT NULL,
Nivel VARCHAR(10) DEFAULT '1',
PRIMARY KEY(CodDesafio)
);
CREATE TABLE CATEGORIA(
CodCategoria INT auto_increment,
Categoria VARCHAR(25) NOT NULL,
PRIMARY KEY(CodCategoria)
);
CREATE TABLE GRUPO(
CodGrupo INT AUTO_INCREMENT,
Nome LONGTEXT NOT NULL,
Categoria INT,
PRIMARY KEY(CodGrupo),
CONSTRAINT FK_CAT FOREIGN KEY(Categoria) REFERENCES CATEGORIA(CodCategoria) 
);
CREATE TABLE USUARIO_DESAFIO(
CodUsuario INT,
CodDesafio INT,
DesafioDone CHAR(1) DEFAULT 'N',
PRIMARY KEY(CodUsuario,CodDesafio),
CONSTRAINT FK_US FOREIGN KEY (CodUsuario) REFERENCES USUARIO(CodUsuario),
CONSTRAINT FK_DE FOREIGN KEY (CodDesafio) REFERENCES DESAFIO(CodDesafio)
);
CREATE TABLE USUARIO_GRUPO(
CodUsuario INT,
CodGrupo INT,
PRIMARY KEY(CodUsuario,CodGrupo),
CONSTRAINT FK_USGR FOREIGN KEY (CodUsuario) REFERENCES USUARIO(CodUsuario),
CONSTRAINT FK_GRU FOREIGN KEY (CodGrupo) REFERENCES GRUPO(CodGrupo)
);


INSERT INTO USUARIO (Nome,DataNasc,Cidade)
VALUES('Guilherme', '1994-05-16','Porto Alegre'),
	  ('Julia','1988-08-10','Boston');
      
INSERT INTO CATEGORIA (Categoria)
VALUES('Corrida'),
	  ('Musculação'),
      ('Abdominal');
      
INSERT INTO GRUPO (Nome,Categoria)
VALUES('Passeio noturno',1),
	  ('Juntos somos mais fortes',2),
      ('Tanque cheio',3);
      
INSERT INTO DESAFIO(Descricao, Pontuacao, Nivel)
VALUES('Corrida 3km',10,1),
	  ('Rosca de 3kg',8,1),
      ('2 seq. de 12x abdominal tradicional',12,1);
INSERT INTO USUARIO_DESAFIO 
values(1,2,'N'),
	  (2,3,'S'),
      (2,1,'N'),
      (1,1,'S');

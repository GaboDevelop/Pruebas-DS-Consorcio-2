CREATE TABLE Persona(
    clave       SERIAL          PRIMARY KEY,
    nombre      VARCHAR(20)     NOT NULL,
    apellido    VARCHAR(20)     NOT NULL
);

CREATE TABLE Curso(
    id          SERIAL          PRIMARY KEY,
    nombre      VARCHAR(20)     NOT NULL
);

CREATE TABLE Curso_Persona(
    id              SERIAL          PRIMARY KEY,
    fk_id_curso     INTEGER         NOT NULL,
    fk_id_persona   INTEGER         NOT NULL,
    CONSTRAINT fk_cp_c FOREIGN KEY (fk_id_curso)
	REFERENCES Curso (id) ON DELETE CASCADE,
    CONSTRAINT fk_cp_p FOREIGN KEY (fk_id_persona)
	REFERENCES Persona (clave) ON DELETE CASCADE
)
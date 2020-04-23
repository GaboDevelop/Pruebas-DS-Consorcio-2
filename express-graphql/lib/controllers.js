const client = require('../database/connectiondb');
const BDCtrl = {};

function errorHandler (error) {
    console.error(error);
    throw new Error('Fallo en la operación del servidor');
}

//----------------------------------------Controladores de persona---------------------------------------------------

BDCtrl.getPersons = async () => {
    try {
        const persons = await client.query("SELECT clave AS id, nombre AS name, apellido AS lastname FROM Persona");
        return persons.rows;
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.getPerson = async (id) => {
    try {
        const person = await client.query(`SELECT clave AS id, nombre AS name, apellido AS lastname FROM Persona WHERE clave = ${id}`);
        return person.rows[0];
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.createPerson = async (input) => {
    try {
        const person = await client.query(`INSERT INTO Persona (nombre,apellido) VALUES ('${input.name}','${input.lastname}') RETURNING clave, nombre, apellido`);
        let insertedPerson = {
            id : person.rows[0].clave,
            name : person.rows[0].nombre,
            lastname : person.rows[0].apellido
        }
        return insertedPerson;
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.updatePerson = async (id,input) => {
    try {
        const person = await client.query(`UPDATE Persona SET nombre = '${input.name}', apellido = '${input.lastname}' WHERE clave = ${id} RETURNING clave, nombre, apellido`);
        let updatedPerson = {
            id : person.rows[0].clave,
            name : person.rows[0].nombre,
            lastname : person.rows[0].apellido
        }
        return updatedPerson;
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.deletePerson = async (id) => {
    try {
        await client.query(`DELETE FROM Persona WHERE clave = ${id}`);
        return "Persona eliminada"
    } catch (error) {
        errorHandler(error);
    }
}

//-----------------------------------Controladores de curso----------------------------------------------------------

BDCtrl.getCourses = async () => {
    try {
        const courses = await client.query("SELECT id AS id, nombre AS name FROM Curso");
        return courses.rows;
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.getCourse = async (id) => {
    try {
        const course = await client.query(`SELECT id AS id, nombre AS name FROM Curso WHERE id = ${id}`);
        return course.rows[0];
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.createCourse = async (input) => {
    try {
        const course = await client.query(`INSERT INTO Curso (nombre) VALUES ('${input.name}') RETURNING id, nombre`);
        let insertedPerson = {
            id : course.rows[0].id,
            name : course.rows[0].nombre,
        }
        return insertedPerson;
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.updateCourse = async (id,input) => {
    try {
        const person = await client.query(`UPDATE Curso SET nombre = '${input.name}' WHERE id = ${id} RETURNING id, nombre`);
        let updatedCourse = {
            id : person.rows[0].id,
            name : person.rows[0].nombre,
        }
        return updatedCourse;
    } catch (error) {
        errorHandler(error);
    }
}

BDCtrl.deleteCourse = async (id) => {
    try {
        await client.query(`DELETE FROM Curso WHERE id = ${id}`);
        return "Curso eliminado"
    } catch (error) {
        errorHandler(error);
    }
}

//------------------------------------------Controladores de curso_persona---------------------------------------

BDCtrl.getPersonsOnCourse = async (id) => {
    try {
        const persons = await client.query(`SELECT p.clave AS id, p.nombre AS name, p.apellido AS lastname 
                                            FROM Persona p, Curso_Persona cp, Curso c 
                                            WHERE p.clave = cp.fk_id_persona
                                            AND cp.fk_id_curso = c.id
                                            AND c.id = ${id}`);
        return persons.rows;
    }
    catch(error){
        errorHandler(error);
    }
}

module.exports = BDCtrl;
const BDCtrl = require('./controllers');

module.exports = {
    createPerson: async (root, { input }) => {
        return await BDCtrl.createPerson(input);
    },

    createCourse: async (root, { input }) => {
        return await BDCtrl.createCourse(input);
    },

    updatePerson: async (root, args) => {
        return await BDCtrl.updatePerson(args.id,args.input);
    },

    updateCourse: async (root, args) => {
        return await BDCtrl.updateCourse(args.id,args.input);
    },

    deletePerson: async (root, args) => {
        return await BDCtrl.deletePerson(args.id);
    },

    deleteCourse: async (root, args) => {
        return await BDCtrl.deleteCourse(args.id);
    },
}
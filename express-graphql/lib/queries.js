const BDCtrl = require('./controllers');

module.exports = {
    getPersons: async () => {
        return await BDCtrl.getPersons();
    },

    getPerson: async (root, args) => {
        return await BDCtrl.getPerson(args.id);
    },

    getCourses: async () => {
        return await BDCtrl.getCourses();
    },

    getCourse: async (root, args) => {
        return await BDCtrl.getCourse(args.id);
    },
}
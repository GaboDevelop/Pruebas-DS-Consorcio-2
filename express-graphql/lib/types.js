const BDCtrl = require('./controllers');

module.exports = {
    Course: {
        students: async (args) => {
            return await BDCtrl.getPersonsOnCourse(args.id);
        }
    }
}
module.exports = {
    getIndex: (req, res) => {
        res.render("index0.ejs");
    },

    getIndexParents: (req, res) => {
        res.render("indexParents.ejs");
    },

    getIndexTeachers: (req, res) => {
        res.render("indexTeachers.ejs");
    },
};

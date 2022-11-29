
const TicketList = require('../models/Ticket')


module.exports = {

    getIndex: (req, res) => {
    res.render("index0.ejs");
  },


    getTicket : async (req, res) => {
        try {
            const tickets = await TicketList.find()
            res.render("ticket.ejs", { ticketList: tickets });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },

    createTicket: async (req, res) => {
        const newTicket = new TicketList(
            {
                subject: req.body.subject,
                description: req.body.description,
                severity: req.body.severity,
                assignedTo: req.body.assignedTo,
                status: req.body.status
            });
        try {
            await newTicket.save();
            console.log(newTicket);
            res.redirect("/ticket");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/profile");
        }
    },

     deleteTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/ticket");
        });
    },


    updateTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndUpdate(
            id,
            {
                status: 'Closed'
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/ticket");
            });
    }
}


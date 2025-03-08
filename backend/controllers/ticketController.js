exports.getTicketsByUser = async (req, res) => {
  try {
    const tickets = await Ticket.find({ postedBy: req.user.id });
    res.json(tickets);
  } catch (err) {
    console.error('Error fetching user tickets:', err.message);
    res.status(500).send('Server error');
  }
};
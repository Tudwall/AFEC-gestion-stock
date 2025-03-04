import CommandeService from "../services/commande.service.js";

class CommandeController {
	constructor() {
		this.commandeService = new CommandeService();
	}

	async createCommande(req, res) {
		const { id, user_id, date, total_price, status } = req.body;
		try {
			const newCommande = await this.commandeService.createCommande({
				id,
				user_id,
				date,
				total_price,
				status,
			});
			res.status(201).json(newCommande);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default CommandeController;

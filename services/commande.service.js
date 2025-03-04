import CommandeRepository from "../repositories/commande.repository.js";

class CommandeService {
	constructor() {
		this.commandeRepository = new CommandeRepository();
	}

	async createCommande({ id, user_id, date, total_price, status }) {
		try {
			return await this.commandeRepository.createCommande({
				id,
				user_id,
				date,
				total_price,
				status,
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default CommandeService;

import { forwardTo } from "prisma-binding";

export const SynthesizationMutation = {
	createSynthesization: forwardTo('db'),
	updateSynthesization: forwardTo('db'),
	updateManySynthesizations: forwardTo('db'),
	deleteSynthesization: forwardTo('db'),
	deleteManySynthesizations: forwardTo('db'),
}

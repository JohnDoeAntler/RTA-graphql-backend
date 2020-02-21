import { forwardTo } from "prisma-binding";

export const SynthesizationQuery = {
	synthesization: forwardTo('db'),
	synthesizations: forwardTo('db'),
	synthesizationsConnection: forwardTo('db'),
}

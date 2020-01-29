import { Context } from "../../utils";

export const VoiceDataMutation = {
	async createVoiceData(parent, args, ctx: Context, info) {
		return ctx.prisma.createVoiceData(
			args
		);
	},
	async updateVoiceData(parent, args, ctx: Context, info) {
		return ctx.prisma.updateVoiceData(
			args
		);
	},
	async updateManyVoiceDatas(parent, args, ctx: Context, info) {
		return ctx.prisma.updateManyVoiceDatas(
			args
		);
	},
	async deleteVoiceData(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteVoiceData(
			args
		);
	},
	async deleteManyVoiceDatas(parent, args, ctx: Context, info) {
		return ctx.prisma.deleteManyVoiceDatas(
			args
		)
	}
}
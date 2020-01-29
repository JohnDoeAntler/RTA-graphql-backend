import { Context } from '../../utils';

export const VoiceDataQuery = {
	voiceData: (parent, args, ctx: Context) => {
		return ctx.prisma.voiceData(args);
	},
	voiceDatas: (parent, args, ctx: Context) => {
		return ctx.prisma.voiceDatas(args);
	},
}

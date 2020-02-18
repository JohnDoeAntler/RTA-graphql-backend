import { forwardTo } from "prisma-binding";

export const VoiceDataQuery = {
	voiceData: forwardTo('db'),
	voiceDatas: forwardTo('db'),
	voiceDatasConnection: forwardTo('db'),
}

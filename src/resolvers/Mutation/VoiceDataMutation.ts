import { forwardTo } from "prisma-binding";

export const VoiceDataMutation = {
	createVoiceData: forwardTo('db'),
	updateVoiceData: forwardTo('db'),
	updateManyVoiceDatas: forwardTo('db'),
	deleteVoiceData: forwardTo('db'),
	deleteManyVoiceDatas: forwardTo('db'),
}

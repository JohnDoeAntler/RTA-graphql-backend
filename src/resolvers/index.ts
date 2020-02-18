import { auth } from './Mutation/auth';
import { WorkQuery } from './Query/WorkQuery';
import { WorkMutation } from './Mutation/WorkMutation';
import { UserQuery } from './Query/UserQuery';
import { UserMutation } from './Mutation/UserMutation';
import { ImageDataQuery } from './Query/ImageDataQuery';
import { ImageDataMutation } from './Mutation/ImageDataMutation';
import { VoiceDataQuery } from './Query/VoiceDataQuery';
import { VoiceDataMutation } from './Mutation/VoiceDataMutation';
import { ReportQuery } from './Query/ReportQuery';
import { ReportMutation } from './Mutation/ReportMutation';
import { CommentQuery } from './Query/CommentQuery';
import { CommentMutation } from './Mutation/CommentMutation';
import { CategoryQuery } from './Query/CategoryQuery';
import { CategoryMutation } from './Mutation/CategoryMutation';

export default {
	Query: {
		...WorkQuery,
		...UserQuery,
		...ImageDataQuery,
		...VoiceDataQuery,
		...ReportQuery,
		...CommentQuery,
		...CategoryQuery,
	},
	Mutation: {
		...auth,
		...WorkMutation,
		...UserMutation,
		...ImageDataMutation,
		...VoiceDataMutation,
		...ReportMutation,
		...CommentMutation,
		...CategoryMutation,
	},
}

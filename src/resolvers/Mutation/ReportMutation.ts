import { forwardTo } from "prisma-binding";

export const ReportMutation = {
	createReport: forwardTo('db'),
	updateReport: forwardTo('db'),
	updateManyReports: forwardTo('db'),
	deleteReport: forwardTo('db'),
	deleteManyReports: forwardTo('db'),
}

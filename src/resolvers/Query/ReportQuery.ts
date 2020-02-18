import { forwardTo } from "prisma-binding";

export const ReportQuery = {
	report: forwardTo('db'),
	reports: forwardTo('db'),
	reportsConnection: forwardTo('db'),
}

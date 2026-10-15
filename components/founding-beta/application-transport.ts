export type BetaApplicationValues = {
  name: string;
  business: string;
  email: string;
  portfolio: string;
  jobsPerWeek: string;
  capture: string[];
};

export type ApplicationResult = { status: "unavailable"; message: string };

// Replace this adapter when a CAPLIST-domain submission service is selected.
// Never return a successful receipt until the service has accepted the application.
// No storage, logging, third-party requests or personal recipient in this preview.
export async function submitBetaApplication(
  _values: BetaApplicationValues,
): Promise<ApplicationResult> {
  return {
    status: "unavailable",
    message: "Applications are not being sent yet. Please return when applications open. Your details have not been sent or saved.",
  };
}

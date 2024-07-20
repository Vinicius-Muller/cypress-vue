export interface User {
  firstName: String | undefined;
  sirName: String | undefined;
  email: String | undefined;
  permissions: String[];
  dateInitial: Date | undefined;
  dateEnd: Date | undefined;
}

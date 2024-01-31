import { apiConstant } from "./apiConstants"
import { Request } from "./service"

// export const applicationVersion = () => {
//     return Request(apiConstant.application_version, 'Get')
// }
export const getEvent = () => {
  return Request(
    "/calendars/7fa9727166044d44ac1aab65742de67d/events",
    // "/oauth/user/info",
    'Get',
    null,
    null,
    { Authorization: "Bearer 1000.af876c03a59d1df7eb49f43dff97ec4d.d987ce161402d1a74578b340c81a60c4" })
}
// export const resetPassword = (params) => {
//     return Request(`${apiConstant.reset_password}?reset_password_token=${params.token}`, 'Post', params.params, true);
// }

// export const updateEmployee = (params) => {
//     return Request(`${apiConstant.employees}/${params.id}`, 'Put', params.params, true)
// }


// export const deleteDepartmentInConfigrution = (id) => commonDeleteService(id, 'departmentInConf');

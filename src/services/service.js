import axios from 'axios'

export const Request = (url, method, params, formDataFlag, headers) => {
  let formData = new FormData();
  for (const key in params) {
    formData.append(key, params[key])
  }

  return axios({
    url: url,
    method: method, // default
    headers: buildHeaders(headers),
    params: !formDataFlag ? params : null,
    data: formDataFlag ? formData : null
  })
}

function buildHeaders(extraHeaders) {
  const token = window.localStorage.token;
  let headers = {
    // Pragma: 'no-cache',
    // 'Cache-Control': 'no-cache',
    ...extraHeaders,
  };

  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }
  return { ...headers };
}
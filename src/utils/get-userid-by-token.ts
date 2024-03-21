import Cookies from 'js-cookie'

export function getUserIdByToken() {
  const token = String(Cookies.get('auth'))

  if (!token) {
    return
  }
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')

  const payload = JSON.parse(window.atob(base64))

  return payload
}

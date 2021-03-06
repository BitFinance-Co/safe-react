// @flow
export const ensureOnce = (fn: Function): Function => {
  let executed = false
  let response

  return (...args) => {
    if (executed) {
      return response
    }

    executed = true
    // eslint-disable-next-line
    response = fn.apply(undefined, args)

    return response
  }
}

export const ensureOnceAsync = (fn: Function): Function => {
  let executed = false
  let response

  return async (...args) => {
    if (executed) {
      return response
    }

    executed = true
    // eslint-disable-next-line
    response = await fn.apply(undefined, args)

    return response
  }
}

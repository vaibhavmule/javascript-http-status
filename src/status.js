const Status = {
  http100Continue: 100,
  http101SwitchingProtocols: 101,
  http102Processing: 102,
  http200Ok: 200,
  http201Created: 201,
  http202Accepted: 202,
  http203NonAuthoritativeInformation: 203,
  http204NoContent: 204,
  http205ResetContent: 205,
  http206PartialContent: 206,
  http300MultipleChoices: 300,
  http301MovedPermanently: 301,
  http302Found: 302,
  http303SeeOther: 303,
  http304NotModified: 304,
  http305UseProxy: 305,
  http306Reserved: 306,
  http307TemporaryRedirect: 307,
  http308ResumeIncomplete: 308,
  http400BadRequest: 400,
  http401Unauthorized: 401,
  http402PaymentRequired: 402,
  http403Forbidden: 403,
  http404NotFound: 404,
  http405MethodNotAllowed: 405,
  http406NotAcceptable: 406,
  http407ProxyAuthenticationRequired: 407,
  http408RequestTimeout: 408,
  http409Conflict: 409,
  http410Gone: 410,
  http411LengthRequired: 411,
  http412PreconditionFailed: 412,
  http413RequestEntityTooLarge: 413,
  http414RequestUriTooLong: 414,
  http415UnsupportedMediaType: 415,
  http416RequestedRangeNotSatisfiable: 416,
  http417ExpectationFailed: 417,
  http418IAmATeapot: 418,
  http422UnprocessableEntity: 422,
  http428PreconditionRequired: 428,
  http429TooManyRequests: 429,
  http431RequestHeaderFieldsTooLarge: 431,
  http444NoResponse: 444, // Non Standard status code for nginx https://httpstatuses.com/444
  http451UnavailableForLegalReasons: 451,
  /*
    non-standard http status code for nginx 444, 495, 496, 497, 499.
    source: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#nginx
  */
  http495SSLCertificationError: 495,
  http496SSLCertificateRequired: 496,
  http497HTTPRequestSentToHTTPSPort: 497,
  http499ClientClosedRequest: 499,
  http500InternalServerError: 500,
  http501NotImplemented: 501,
  http502BadGateway: 502,
  http503ServiceUnavailable: 503,
  http504GatewayTimeout: 504,
  http505HttpVersionNotSupported: 505,
  http511NetworkAuthenticationRequired: 511,
};

export default Status;

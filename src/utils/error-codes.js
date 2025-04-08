const success_codes = Object.freeze({
    ok: 200,
    created: 201
});

const client_side_errors = Object.freeze({
    bad_request: 400,
    unAuthorized: 401,
    not_found: 404,
    method_not_found: 405
});

const server_errors = Object.freeze({
    internal_server_error: 500,
    service_unavailable: 503
});

module.exports = {
    success_codes,
    client_side_errors,
    server_errors
}
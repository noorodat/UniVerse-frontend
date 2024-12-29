export function buildEndpoint(endpoint, params = {}) {
    return endpoint.replace(/{(\w+)}/g, (_, key) => params[key] || '');
}

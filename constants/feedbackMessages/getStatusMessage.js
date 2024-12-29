export default function getStatusMessage(status, type, operation) {
    if (status === 'success') {
        return `${type} ${operation} successfully.`
    } else if ('error') {
        return `Failed to ${operation} ${type}`
    } else {
        return null;
    }
}
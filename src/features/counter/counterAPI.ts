export function fetchCount(amount = 1, timeout = 1000) {
    return new Promise<{ data: number }>((resolve, rej) =>
        setTimeout(() => resolve({data: amount}), timeout)
    );
}

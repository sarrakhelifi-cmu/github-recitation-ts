import express from 'express';
import { Request, Response } from 'express';

const app = express();

function fibonacci(n: number): number | undefined {
    if (n < 0) return undefined; // Handle negative numbers
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

app.get('/fib/:num', (req: Request, res: Response) => {
    const num = parseInt(req.params.num);

    if (isNaN(num)) {
        return res.send(`fibonacci(NaN) is undefined`);
    }

    const result = fibonacci(num);

    if (result === undefined) {
        return res.send(`fibonacci(${num}) is undefined`);
    }

    return res.send(`fibonacci(${num}) is ${result}`);
});

export default app;

import { TestCase } from '../../../testCase.spec.js';
const test: TestCase = {
    name: 'Test query',
    endpoint: '/sample/aggregated',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
        country: 'Switzerland',
        fields: ['division', 'country'],
        orderBy: [
            {
                field: 'division',
                type: 'ascending',
            },
        ],
    },
    expectedStatusCode: 200,
    expectedResponse: {
        fileName: 'query1.result.json',
    },
};
export default test;

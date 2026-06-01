const url = 'https://query1.finance.yahoo.com/v8/finance/chart/068270.KS';
const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    `https://cors.eu.org/${url}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    `https://corsproxy.io/?${encodeURIComponent(url)}`
];

async function test() {
    for (let p of proxies) {
        console.log('Trying', p);
        try {
            let res = await fetch(p);
            console.log(res.status);
            if(res.ok) {
                let t = await res.text();
                console.log('Success length:', t.length);
            }
        } catch(e) {
            console.log('Error:', e.message);
        }
    }
}
test();

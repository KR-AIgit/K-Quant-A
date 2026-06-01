const url = 'https://query2.finance.yahoo.com/v8/finance/chart/068270.KS';
const proxies = [
    'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
    'https://thingproxy.freeboard.io/fetch/' + url,
    'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url)
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
                if (t.length < 50) console.log(t);
            }
        } catch(e) {
            console.log('Error:', e.message);
        }
    }
}
test();

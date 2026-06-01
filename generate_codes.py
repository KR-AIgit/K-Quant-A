import FinanceDataReader as fdr
import json

df = fdr.StockListing('KRX')

mapping = {}
for index, row in df.iterrows():
    name = row['Name']
    code = row['Code']
    mapping[name] = code

js_content = "const ALL_KRX_STOCKS = " + json.dumps(mapping, ensure_ascii=False) + ";\n"

with open('stockCodes.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Dumped {len(mapping)} stocks to stockCodes.js")

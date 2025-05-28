#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

const instrumentsUrl = 'https://api.bybit.com/v5/market/instruments-info?category=linear';
const tickersUrl = 'https://api.bybit.com/v5/market/tickers?category=linear';

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function main() {
  try {
    const instrumentsData = await fetchJson(instrumentsUrl);
    const tickersData = await fetchJson(tickersUrl);

    const instruments = instrumentsData.result?.list || [];
    const volumes = Object.fromEntries(
      tickersData.result?.list.map(item => [item.symbol, +item.volume24h])
    );

    instruments.sort((a, b) => (volumes[b.symbol] || 0) - (volumes[a.symbol] || 0));

    const output = instruments
      .slice(0, 40)
      .map(inst => `BYBIT:${inst.symbol}`)
      .join('\n');

    fs.writeFileSync('bybit_futures_tradingview_symbols.txt', output);
    console.log('✅ File created: bybit_futures_tradingview_symbols.txt');
  } catch (err) {
    console.error('❌ Error:', err.message || err);
  }
}

main();

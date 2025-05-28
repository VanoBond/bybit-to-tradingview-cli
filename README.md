# bybit-to-tradingview-cli

> 🧩 A simple CLI tool that exports the top 40 Bybit USDT perpetual futures symbols to a TradingView-compatible format.

---

## ✨ Features

- Fetches data from Bybit’s public API
- Sorts symbols by 24h trading volume
- Outputs `BYBIT:<symbol>` format for TradingView
- Pure Node.js, zero dependencies

---

## 📦 Installation

Install globally from npm:

```bash
npm install -g bybit-to-tradingview-cli
```

---

## 🚀 Usage

Run the command:

```bash
bybit-to-tradingview
```

This will generate a file in the current directory:

```
bybit_futures_tradingview_symbols.txt
```

Example output:

```
BYBIT:BTCUSDT
BYBIT:ETHUSDT
BYBIT:XRPUSDT
...
```

---

## 📁 Output File Use Case

The output file can be used to:

- Feed TradingView custom symbol lists
- Load into watchlists, screener scripts, etc.
- Build dashboards or bots

---

## 📜 License

MIT

---

## 🔗 Links

- [GitHub Repository](https://github.com/VanoBond/bybit-to-tradingview-cli)
- [npm Package](https://www.npmjs.com/package/bybit-to-tradingview-cli)
- [Bybit API](https://bybit-exchange.github.io/docs/v5/intro)

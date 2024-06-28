# node-express-jposta
[jposta](https://github.com/nickichi/jposta) is a library to get Japanese address from zip code.

You can use jposta with Node.js and Express as API.

## Usage
```bash
$ node src/api.mjs
```

```bash
$ curl "http://localhost:3000/api/getAddress?zip=1000001"
{"pref":"東京都","prefNum":13,"city":"千代田区","area":"千代田"}

$ curl "http://localhost:3000/api/getAddress?zip=907-0023"
{"pref":"沖縄県","prefNum":47,"city":"石垣市","area":"石垣"}
```
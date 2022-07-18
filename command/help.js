const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

━━━━━━━━━━━━━━━━━━━━━━━
🔰CHEAT FREE FIRE V1.91X🔰
━━━━━━━━━━━━━━━━━━━━━━━
10 Hari 𝗣𝗦𝗛𝟰𝗫
Rp. 150.000 | $11

20 Hari 𝗣𝗦𝗛𝟰𝗫
Rp. 300.000 | $28

Bulanan PFTEAM
Rp. 150.000 | $11

Bulanan 𝐅𝐅𝐇𝟒𝐗 
Rp. 200.000 | $18

15 Hari : 𝐍𝐞𝐰 𝐌𝐨𝐝
Rp. 150.000 | $11 / 15 Hari/Day

Bulanan 𝐆𝐨𝐝𝐬𝐓𝐞𝐚𝐦 (𝗔𝗨𝗧𝗢 𝗞𝗜𝗟) 
Rp. 250.000 | $18

Bulannan MR.ROBOT (FLAY) 
Rp. 150.000 | $18

Bulanan Premium Mobile & Emulator
Rp. 300.000 | $28

15 Hari Premium Mobile & Emulator
Rp. 200.000 | $20

Bulanan Matrix Regedit PC/Emulator
Rp. 350.000 | $30

━━━━━━━━━━━━━━━━━━━━━━━
🔰CHEAT MOBILAGEND 🔰
━━━━━━━━━━━━━━━━━━━━━━━
Bulanan/Month ML+
Rp. 100.000 | $15

Bulanan/Month HAYDEX
Rp. 150.000 | $18

Bulanan/Month NIU
Rp. 150.000 | $18

━━━━━━━━━━━━━━━━━━━━━━━
🔰TESTIMONI🔰
━━━━━━━━━━━━━━━━━━━━━━━
TESTIMONI: https://t.me/testimonipsteamadm


Admin akan membalas pesan anda secepatnya🙏
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Pembayaran 
Dana ovo gopay bank qris
Nomer : 083846077142
Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

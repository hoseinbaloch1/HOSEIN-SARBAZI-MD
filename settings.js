//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'
': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['9339658384']
global.premium = ['9339658384']
global.ownernomer = '9339658384'
global.ownername = 'HOSEIN BALOCH'
global.botname = 'HOSEIN SARBAZI MD BOT'
global.footer = 'HOSEIN SARBAZI MD'
global.cap = '*Genarated By HOSEIN SARBAZI Md*'
global.ig = 'https://github.com/hoseinbaloch'
global.region = 'Sri Lanka, Sabaragamuwa, Embilipitiya'
global.sc = 'https://github.com/hoseinbaloch'
global.myweb = 'https://chat.whatsapp.com/GDZMyhooBar5FxfzPhUrOn'
global.packname ='hosein sarbazi Md Sticker Bot'
global.author = 'HOSEIN SARBAZI'
global.autobio = 'true'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ok ✓',
    admin: 'Fagat Admin Mitvanad Az In Gabliyat Stfade Konad!',
    botAdmin: 'In Vizhegi Fagat Baraye Admin Ast !',
    owner: 'In Vizhegi Fagat Baraye Owner Mibashad!',
    group: 'In Gablyat Fagat Braye Group Ha Mibashad!',
    private: 'In Gablyat Fagat Braye Private Chat Ha Mibashad!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Lotfan Sabr Konid...',
    error: 'Moshkeli Vejod Darad🤔!',
    endLimit: 'Shoma Ban Shodi Bayad 12 Sat Sabr Konid',
}
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

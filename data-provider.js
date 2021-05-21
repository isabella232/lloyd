const fs = require('fs');
const path = require('path')
const RandExp = require('randexp');

const appIdsFile = path.join(__dirname, './appIds.csv')
const appIdsCount = 30

function generate() {
    if (fs.existsSync(appIdsFile)) {
        fs.unlinkSync(appIdsFile)
    }

    fs.appendFileSync(appIdsFile, `appId\n`)

    for(let index = 0; index < appIdsCount; index += 1) {
        const appId = new RandExp(/(a|b)-[0-9][0-9][a-z][a-z]/).gen();
        if (index % 10 === 0) {
            for (let repeat = 0; repeat < 5; repeat += 1)
                fs.appendFileSync(appIdsFile, `${appId}\n`)
        }
        fs.appendFileSync(appIdsFile, `${appId}\n`)
    }
}

module.exports = { generate }
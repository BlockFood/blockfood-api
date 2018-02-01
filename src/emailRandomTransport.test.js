const {expect, assert} = require('chai')
const sinon = require('sinon')

const emailRandomTransport = require('./emailRandomTransport')

describe.only('emailRandomTransport', () => {
    it('should randomly select a transporter', async () => {
        const emailConfig = {
            host: 'host',
            port: 42,
            auth: [
                {user: 'auth1', pass: 'pass1'},
                {user: 'auth2', pass: 'pass2'},
            ]
        }

        const nodeMailerStub = {
            createTransport: (emailConf) => {
                return {
                    sendMail: (what) => {
                        console.log(emailConf.auth.user, '..stub called with', what)
                    }
                }
            }
        }

        const randomizedTransport = emailRandomTransport(emailConfig, nodeMailerStub)

        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
        randomizedTransport.sendMail('lol')
    })
})

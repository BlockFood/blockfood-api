module.exports = (send, getNextStepUrl) => {

    return {
        sendFirstEmail: async (email, privateId) => {
            await send({
                title: 'BlockFood - Next step for pre-sale',
                content: `<p>Thank you very much for applying to the pre-sale process.</p>
                    <p>In order to finalize your application, the following form must be completed:</p>
                    <p><a href='${getNextStepUrl(privateId)}' class='call-to-action'>Next step</a></p>`,
                signature: 'Best regards,<br><br>BlockFood team'
            })
        },

        sendSecondEmail: async (email, application) => {
            await send({
                title: 'BlockFood - One final step for pre-sale',
                content: `<p>Dear ${application.firstName}, thank you for submitting your documents.</p>
                    <p>If you did not already use the smart contract to finalize your application, follow this link:</p>
                    <p><a href='${getNextStepUrl(application.privateId)}' class='call-to-action'>Finalize application</a></p>
                    <p>Once your application is finalized, the BlockFood team will review your information and accept your participation if everything is okay. You should receive a confirmation email in the next 24 hours.</p>
                    <p>Thanks again for being awesome.</p>`,

                signature: 'Best regards,<br><br>BlockFood team'
            })
        }
    }
}
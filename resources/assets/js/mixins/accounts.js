module.exports = {
    methods: {
        showAccount: (account) => {
            eventBus.$emit('accountEntryShow', account)
        },

        createAccount: (siteId) => {
            eventBus.$emit('accountEntryCreate', siteId)
        },

        editAccount: (account) => {
            eventBus.$emit('accountEntryEdit', account)
        },

        deleteAccount: (account) => {
            eventBus.$emit('accountEntryDelete', account)
        },

        showAccountHistory: (account) => {
            eventBus.$emit('accountHistoryShow', account)
        }
    }
}

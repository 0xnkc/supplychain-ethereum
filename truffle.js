var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
			host: "127.0.0.1",
	   		port: 7545,
	   		network_id: "*" // Match any network id
		},
    	rinkeby: {
    	    provider: function() {
				var mnemonic = "doctor multiply stereo hard turkey cigar eight flip excess enter blur exist"; //put ETH wallet 12 mnemonic code	
				return new HDWalletProvider(mnemonic, "HTTP://127.0.0.1:7545");
		    },
		    network_id: '5777',
			from: '0x817eb0ce3540a67a0b5d2d30dc87b46b77801707', /*ETH wallet 12 mnemonic code wallet address*/
		}  
    }
};
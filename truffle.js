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
					var mnemonic = "trigger anchor mystery deposit potato diesel limit rain math depth action hole"; //put ETH wallet 12 mnemonic code	
				return new HDWalletProvider(mnemonic, "HTTP://192.168.43.149:7545");
		    },
		    network_id: '5777',
				from: '0x6c427f3c532370dfa7b187e7c83b001f5bcaed34', /*ETH wallet 12 mnemonic code wallet address*/
		}  
    }
};
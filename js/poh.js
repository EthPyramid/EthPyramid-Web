window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        $('#buy-panel').hide();
        $('#metamask-not-found').show();
    }

    let abi = [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "tokenBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "buyPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "ethervalue",
                    "type": "uint256"
                },
                {
                    "name": "subvalue",
                    "type": "uint256"
                }
            ],
            "name": "calculateDividendTokens",
            "outputs": [
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "payouts",
            "outputs": [
                {
                    "name": "",
                    "type": "int256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "dividends",
            "outputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "getEtherForTokens",
            "outputs": [
                {
                    "name": "ethervalue",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "sellPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "ethervalue",
                    "type": "uint256"
                }
            ],
            "name": "getTokensForEther",
            "outputs": [
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "reinvestDividends",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "withdrawOld",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "sellMyTokens",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "getMeOutOfHere",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "fund",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }
    ]
    var ponziContract = web3.eth.contract(abi);

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var contract = ponziContract.at('0x2Fa0ac498D01632f959D3C18E38f4390B005e200')
    updateData(contract);
    
    // Now you can start your app & access web3 freely:
    var refreshInterval = setInterval(function() {
        updateData(contract);
      }, 1000);

    $('#buy-eos-tokens').click(function() {
        let amount = $('#purchase-amount').val();
        if(amount == 0) {
            alert("Error: You can't fund 0 ETH. The value input is above the button.")
        } else {
            contract.fund({
                value: convertEthToWei(amount)
            }, function(e, r) {
                console.log(e, r);
            })
        }
    })

    $('#sell-tokens-btn').click(function() {
        contract.sellMyTokens(function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-btn').click(function() {
        contract.reinvestDividends(function(e, r) {
            console.log(e, r);
        })
    })
    $('#withdraw-btn').click(function() {
        contract.withdraw(function(e, r) {
            console.log(e, r);
        })
    })

    $('#sell-tokens-btn-m').click(function() {
        contract.sellMyTokens(function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-btn-m').click(function() {
        contract.reinvestDividends(function(e, r) {
            console.log(e, r);
        })
    })
    $('#withdraw-btn-m').click(function() {
        contract.withdraw(function(e, r) {
            console.log(e, r);
        })
    })
})

function convertEthToWei(e) {
    return 1e18 * e
}

function convertWeiToEth(e) {
    return e / 1e18
}

var ethPrice = 0;

function updateEthPrice() {
	$.getJSON( 'https://api.coinmarketcap.com/v1/ticker/ethereum/', function( result ) {
		var eth = result[0];
		ethPrice = parseFloat( eth.price_usd );
		setTimeout( updateEthPrice, 10000 );
	});
}

updateEthPrice();

function updateData(contract) {
    // Populate data
    // console.log(contract)
    if(!web3.eth.defaultAccount) {
        return
    }

    var dividendValue = 0;
    var tokenBalance = 0;

    contract.balanceOf(web3.eth.defaultAccount, function(e, r) {
        $('.current-sale .poh-balance').text((r / 1e18*1000).toFixed(4) + " EPY");
        contract.getEtherForTokens(r, function(e, r) {
	    let bal = convertWeiToEth(r*0.9);
            $(".current-sale .poh-value").text(bal.toFixed(4) + " ETH");
	    $(".current-sale .usd-value").text("($"+ (convertWeiToEth(r * 0.9) * ethPrice).toFixed(2) + " USD)");
	    if( tokenBalance !== 0 ){
		    if( bal > tokenBalance ){
                        $(".current-sale .poh-value").addClass('up').removeClass('down');
		    }
		    else if( bal < tokenBalance ){
                        $(".current-sale .poh-value").addClass('down').removeClass('up');
		    }
	    }
	    tokenBalance = bal;
        })
    })

    contract.buyPrice(function(e, r) {
        let buyPrice = (1/(convertWeiToEth(r) * .9)/1000000);
        $('.current-sale .poh-buy').text(buyPrice.toFixed(6) + " ETH");
		$(".current-sale .usd-buy").text("($"+(buyPrice * ethPrice).toFixed(2) + " USD)");        
    })

    contract.sellPrice(function(e, r) {
        let sellPrice = convertWeiToEth(r);
        $('.current-sale .poh-sell').text(sellPrice.toFixed(6) + " ETH");
		$(".current-sale .usd-sell").text("($"+(sellPrice * ethPrice).toFixed(2) + " USD)");
    })

    contract.dividends(web3.eth.defaultAccount, function(e, r) {
	let div = convertWeiToEth(r);

        $('.current-sale .poh-div').text(div.toFixed(6) + " ETH");
	$(".current-sale .usd-div").text("($"+(convertWeiToEth(r) * ethPrice).toFixed(2) + " USD)");

        if( dividendValue != div ){
		$('.current-sale .poh-div').fadeTo(100, 0.3, function(){ $(this).fadeTo(250, 1.0); });;
		dividendValue = div;
	}
    } )

    web3.eth.getBalance(contract.address, function(e, r) {
        $(".current-distribution-period").text(convertWeiToEth(r).toFixed(4));
    })
    
}

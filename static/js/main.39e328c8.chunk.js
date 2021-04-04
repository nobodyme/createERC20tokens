(this["webpackJsonpcreate-erc20-tokens"]=this["webpackJsonpcreate-erc20-tokens"]||[]).push([[0],{308:function(e,a,t){},322:function(e,a){},331:function(e,a){},349:function(e,a){},351:function(e,a){},368:function(e,a){},369:function(e,a){},433:function(e,a){},435:function(e,a){},444:function(e,a){},446:function(e,a){},471:function(e,a){},473:function(e,a){},474:function(e,a){},479:function(e,a){},481:function(e,a){},494:function(e,a){},506:function(e,a){},509:function(e,a){},514:function(e,a){},525:function(e,a){},528:function(e,a){},584:function(e,a,t){},715:function(e,a,t){},716:function(e,a,t){},717:function(e,a,t){},718:function(e,a,t){},719:function(e,a,t){},720:function(e,a,t){},721:function(e,a,t){},722:function(e,a,t){},723:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t.n(n),c=t(292),i=t.n(c);t(308),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(301),o=t(25),b=t.n(o),d=t(105),l=t(30),u=t(161),f=t.n(u),p=t(2),m=s.a.createContext();function j(e){var a=Object(n.useState)(null),t=Object(l.a)(a,2),c=t[0],i=t[1];return s.a.useEffect((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=10;break}return i(new f.a(new f.a(window.ethereum).currentProvider)),e.prev=2,e.next=5,window.ethereum.enable();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),i(1);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsx)(m.Provider,Object(r.a)({value:c},e))}function y(){var e=s.a.useContext(m);if(void 0===e)throw new Error("useWeb3 must be used within a Web3Provider");return e}var _=t(300),h=(t(584),t(50)),x=t(85);t(715),t(716);var v=function(){return Object(p.jsxs)("div",{className:"createTokenForm__form__fields",children:[Object(p.jsx)("div",{className:"form__fields",children:Object(p.jsxs)("div",{className:"form__fields__value",children:[Object(p.jsx)(h.a,{className:"form__symbol form__fields__input",id:"symbol",name:"symbol",type:"text",required:!0}),Object(p.jsx)("label",{className:"form__fields__label",htmlFor:"symbol",children:"Symbol"})]})}),Object(p.jsx)("div",{className:"form__fields",children:Object(p.jsxs)("div",{className:"form__fields__value",children:[Object(p.jsx)(h.a,{className:"form__name form__fields__input",id:"name",name:"name",type:"text",required:!0}),Object(p.jsx)("label",{className:"form__fields__label",htmlFor:"name",children:"Name"})]})}),Object(p.jsx)("div",{className:"form__fields",children:Object(p.jsxs)("div",{className:"form__fields__value",children:[Object(p.jsx)(h.a,{id:"totalSupply",className:"form__totalSupply form__fields__input",name:"totalSupply",type:"number",required:!0}),Object(p.jsx)("label",{className:"form__fields__label",htmlFor:"totalSupply",children:"Supply"})]})})]})},O=[{constant:!1,inputs:[],name:"acceptOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"tokens",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"tokens",type:"uint256"},{name:"data",type:"bytes"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"destruct",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokens",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"tokenAddress",type:"address"},{name:"tokens",type:"uint256"}],name:"transferAnyERC20Token",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokens",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"c_symbol",type:"string"},{name:"c_name",type:"string"},{name:"c_totalSupply",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"tokens",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"tokenOwner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"tokens",type:"uint256"}],name:"Approval",type:"event"},{constant:!0,inputs:[],name:"_totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenOwner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenOwner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"newOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"a",type:"uint256"},{name:"b",type:"uint256"}],name:"safeAdd",outputs:[{name:"c",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[{name:"a",type:"uint256"},{name:"b",type:"uint256"}],name:"safeDiv",outputs:[{name:"c",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[{name:"a",type:"uint256"},{name:"b",type:"uint256"}],name:"safeMul",outputs:[{name:"c",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[{name:"a",type:"uint256"},{name:"b",type:"uint256"}],name:"safeSub",outputs:[{name:"c",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],w=t(83);var g=function(e){var a=e.web3,t=e.setSubmitToggle,n=e.setProcessedStage,s=e.setTransactionHash,c=e.setContractAddress,i=e.setDeploymentError;return Object(p.jsx)(h.c,{initialValues:{symbol:"",name:"",totalSupply:""},validationSchema:x.object().shape({symbol:x.string().required("Symbol for your token is required"),name:x.string().required("Name for your token is required"),totalSupply:x.number().typeError("Supply should be a number").required("Total Supply of the token is required").min(0,"Number should be greater than 0")}),onSubmit:function(){var e=Object(d.a)(b.a.mark((function e(r){var o,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t((function(e){return!e})),n(1),e.next=5,a.eth.getAccounts();case 5:o=e.sent,d=o[0],new a.eth.Contract(O).deploy({data:"0x6080604052600060095534801561001557600080fd5b50604051620010f6380380620010f68339810160405280516020808301805190820180519083015160038054600160a060020a0333811660006101000a9081029102199091161790559385018051909592909201939092909161007e9160059190870190610103565b508251610092906006906020860190610103565b5081600781905550600754600a0a810260028190555033600360006101000a815481600160a060020a030219169083600160a060020a0316021790555060025460008033600160a060020a0316600160a060020a03168152602001908152602001600020819055505050505061019e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014457805160ff1916838001178555610171565b82800160010185558215610171579182015b82811115610171578251825591602001919060010190610156565b5061017d929150610181565b5090565b61019b91905b8082111561017d5760008155600101610187565b90565b610f4880620001ae6000396000f30060806040526004361061013d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde038114610142578063095ea7b3146101cc57806318160ddd1461020a57806323b872dd14610232578063313ce5671461026357806331d2f89114610278578063483a20b2146102b5578063549c6bbb146102d85780635fa51277146102ff5780636a608d8f1461031457806370a082311461032c57806379ba50971461034d5780638da5cb5b1461036257806395d89b4114610377578063a242f0491461038c578063a293d1e8146103a1578063a9059cbb146103bf578063b5931f7c146103e6578063d05c78da14610404578063d4ee1d9014610422578063dd62ed3e14610437578063e6cb901314610461578063f2fde38b1461047f578063f40d71f1146104a0575b600080fd5b34801561014e57600080fd5b506101576104c7565b6040516020808201828103835283518152835183929182019185019080838360005b83811015610191578181015183820152602001610179565b50505050905090810190601f1680156101be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d857600080fd5b506101f360048035600160a060020a03169060200135610553565b604080519115151515825251602090910181900390f35b34801561021657600080fd5b5061021f6105c9565b6040805191825251602090910181900390f35b34801561023e57600080fd5b506101f3600160a060020a0360048035821691602091820180359091169101356105ec565b34801561026f57600080fd5b5061021f610611565b34801561028457600080fd5b5061028d610617565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b3480156102c157600080fd5b506102d6600160a060020a036004351661062e565b005b3480156102e457600080fd5b506102d660048035600160a060020a031690602001356106af565b34801561030b57600080fd5b506102d661080c565b34801561032057600080fd5b506102d660043561089c565b34801561033857600080fd5b5061021f600160a060020a03600435166108e5565b34801561035957600080fd5b506102d6610905565b34801561036e57600080fd5b5061028d6109c5565b34801561038357600080fd5b506101576109dc565b34801561039857600080fd5b5061021f610a35565b3480156103ad57600080fd5b5061021f600480359060200135610a3b565b3480156103cb57600080fd5b506101f360048035600160a060020a03169060200135610a52565b3480156103f257600080fd5b5061021f600480359060200135610a75565b34801561041057600080fd5b5061021f600480359060200135610a98565b34801561042e57600080fd5b5061028d610abf565b34801561044357600080fd5b5061021f60048035600160a060020a03908116916020013516610ad6565b34801561046d57600080fd5b5061021f600480359060200135610b08565b34801561048b57600080fd5b506102d6600160a060020a0360043516610b1a565b3480156104ac57600080fd5b506102d660048035600160a060020a03169060200135610b79565b600680546040805160206002600180861615610100020390941693909304601f8101849004840284018201909252818152929183018282801561054b5780601f106105205761010080835404028352916020019161054b565b820191906000526020600020905b81548152906001019060200180831161052e57829003601f168201915b505050505081565b600160a060020a033381168082166000908152600160208083019182528181018084208887169687168552909252908220859055604080518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929190910181900390a35060015b92915050565b6000600160a060020a038181161681526020808201828152019020546002540390565b6000600954421115156105fe57600080fd5b610609848484610ce3565b509392505050565b60075481565b60085460006101000a9004600160a060020a031681565b600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561066357600080fd5b6000600160a060020a031681600160a060020a03161415151561068557600080fd5b80600860006101000a815481600160a060020a030219169083600160a060020a0316021790555050565b600860009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156106e457600080fd5b61071260008084600160a060020a0316600160a060020a031681526020019081526020016000205482610a3b565b60008084600160a060020a0316600160a060020a031681526020019081526020016000208190555061077d600080600360009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a031681526020019081526020016000205482610b08565b600080600360009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a0316815260200190815260200160002081905550600360009054906101000a9004600160a060020a0316600160a060020a031682600160a060020a0316600080516020610efd833981519152836040518082815260200191505060405180910390a35050565b600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561084157600080fd5b600360009054906101000a9004600160a060020a0316600160a060020a03166108fc30600160a060020a0316319081150290604051600060405180830381858888f19350505050158015610899573d6000803e3d6000fd5b50565b600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156108d157600080fd5b6000811115156108e057600080fd5b600955565b600160a060020a0390811616600090815260208082018281520190205490565b600460009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561093a57600080fd5b600454600354604051600160a060020a0360006101000a9384900481168116939092048216909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080800390a36004805460038054600160a060020a03600061010081900a948590048216821685028286021993841617909355845492169092029116179055565b60035460006101000a9004600160a060020a031681565b600580546040805160206002600180861615610100020390941693909304601f8101849004840284018201909252818152929183018282801561054b5780601f106105205761010080835404028352916020019161054b565b60095481565b6000828211151515610a4c57600080fd5b50900390565b600060095442111515610a6457600080fd5b610a6e8383610e0c565b5092915050565b60008082111515610a8557600080fd5b8183811515610a9057fe5b049392505050565b8181026000831480610ab45750818382811515610ab157fe5b04145b15156105c357600080fd5b60045460006101000a9004600160a060020a031681565b600160a060020a0391821682166000908152600160208083019182528101808320938516909416825291909152205490565b8181018281101515156105c357600080fd5b600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515610b4f57600080fd5b80600460006101000a815481600160a060020a030219169083600160a060020a0316021790555050565b600860009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515610bae57600080fd5b6000600160a060020a031682600160a060020a031614151515610bd057600080fd5b600081111515610bdf57600080fd5b610c22600080600360009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a031681526020019081526020016000205482610a3b565b600354600160a060020a03600061010081900a909204811681168116825260208083018381529081018084209490945585821690911682528190522054610c699082610b08565b60008084600160a060020a0316600160a060020a031681526020019081526020016000208190555081600160a060020a0316600360009054906101000a9004600160a060020a0316600160a060020a0316600080516020610efd833981519152836040518082815260200191505060405180910390a35050565b6000610d1360008086600160a060020a0316600160a060020a031681526020019081526020016000205483610a3b565b600160a060020a03808616811660008181526020808201828152908101808320959095559181526001825283812033841690931681529190522054610d589083610a3b565b600160a060020a0380861681166000908152600160208083019182528101808320338516851684528252808320949094558683169092168152908190522054610da19083610b08565b60008085600160a060020a0316600160a060020a031681526020019081526020016000208190555082600160a060020a031684600160a060020a0316600080516020610efd833981519152846040518082815260200191505060405180910390a35060019392505050565b6000610e3c60008033600160a060020a0316600160a060020a031681526020019081526020016000205483610a3b565b60008033600160a060020a0316600160a060020a0316815260200190815260200160002081905550610e9260008085600160a060020a0316600160a060020a031681526020019081526020016000205483610b08565b60008085600160a060020a0316600160a060020a031681526020019081526020016000208190555082600160a060020a031633600160a060020a0316600080516020610efd833981519152846040518082815260200191505060405180910390a3506001929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820bbbeeb58fa72fe82d7def550b0f99f367f0457b9a174b8d759e5847d97cde8930029",arguments:[r.symbol,r.name,r.totalSupply]}).send({from:d}).on("error",(function(e){i(e.message)})).on("transactionHash",(function(e){n(2),s(e)})).on("receipt",(function(e){n(3),c(e.contractAddress.toLowerCase())})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),i(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),render:function(e){var a=e.values,t=e.status;return Object(p.jsxs)(h.b,{className:"form",children:[Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"form__submitContainer",children:[Object(p.jsxs)("button",{className:"form__submitButton",type:"submit",disabled:""===a.symbol||""===a.name||""===a.totalSupply,value:"Submit",children:[Object(p.jsx)("span",{className:"form__submitButton__icon",children:Object(p.jsx)(w.b,{})}),"Generate"]}),t&&t.msg&&Object(p.jsxs)("div",{className:"form__errors",children:["! ",t.msg]})]})]})}})},k=t.p+"static/media/metamaskFox.71f3ed9a.svg";t(717);var N=function(e){var a,t=e.web3;return a=null===t?"Please connect the site to an etherum wallet like metamask to continue":"User denied access, refresh to continue",Object(p.jsxs)("div",{className:"error",children:[Object(p.jsx)("div",{className:"error__image",children:Object(p.jsx)("img",{src:k,alt:"metamask",style:{width:80,height:80}})}),1!==t?Object(p.jsx)("div",{className:"error__button__container",children:Object(p.jsx)("button",{className:"error__button",children:Object(p.jsx)("a",{href:"https://metamask.io",target:"_blank",rel:"noopener noreferrer",children:"Download Metamask"})})}):null,Object(p.jsx)("div",{className:"error__description__container",children:Object(p.jsx)("div",{className:"error__description ".concat(1===t?"description__error__alert":"description__warning__alert"),children:a})})]})};t(718),t(719);var S=function(e){var a=e.processedStage,t=e.elementStage;return a===t-1?Object(p.jsx)("div",{className:"statusHelper status__1",children:"Processing..."}):a===t||a>t?Object(p.jsx)("div",{className:"statusHelper status__2",children:"Success"}):Object(p.jsx)("div",{className:"statusHelper status__3",children:"Pending..."})},I=t(299),T=t(68);var M=function(e){var a=e.setSubmitToggle,t=e.processedStage,n=e.transactionHash,s=e.contractAddress,c=e.ethereumNetwork,i=e.deploymentError,r=function(e){var a;switch(e){case"mainnet":a="https://etherscan.io";break;case"ropsten":a="https://ropsten.etherscan.io";break;case"kovan":a="https://kovan.etherscan.io";break;case"rinkeby":a="https://rinkeby.etherscan.io";break;default:a=null}return a}(c);return Object(p.jsxs)("div",{className:"stageIndicator",children:[Object(p.jsxs)("div",{className:"stageIndicator__sectionContainer",children:[Object(p.jsxs)("div",{className:"stageIndicator__section__1 stageIndicator__section",children:[Object(p.jsx)("div",{className:"stageIndicator__img",children:Object(p.jsx)(I.a,{})}),Object(p.jsxs)("div",{className:"stageIndicator__header",children:[Object(p.jsx)("div",{className:"stageIndicator__title",children:"Initiating Token Creation"}),Object(p.jsx)(S,{processedStage:t,elementStage:1})]})]}),Object(p.jsxs)("div",{className:"stageIndicator__section__2 stageIndicator__section",children:[Object(p.jsx)("div",{className:"stageIndicator__img",children:Object(p.jsx)(w.a,{})}),Object(p.jsxs)("div",{className:"stageIndicator__header",children:[Object(p.jsx)("div",{className:"stageIndicator__title",children:"Transaction Hash"}),t>=2?Object(p.jsxs)("div",{className:"stageIndicator__link__container",children:[Object(p.jsxs)("a",{className:"stageIndicator__link",href:"".concat(r,"/tx/").concat(n),target:"_blank",rel:"noopener noreferrer",children:["View on etherscan",Object(p.jsx)("span",{title:"open in etherscan",className:"stageIndicator__extLink",children:Object(p.jsx)(T.a,{})})]}),Object(p.jsx)("span",{className:"stageIndicator__copy",title:"copy transaction hash",onClick:function(){return navigator.clipboard.writeText(n)},children:Object(p.jsx)(T.c,{})})]}):null,Object(p.jsx)(S,{processedStage:t,elementStage:2})]})]}),Object(p.jsxs)("div",{className:"stageIndicator__section__3 stageIndicator__section",children:[Object(p.jsx)("div",{className:"stageIndicator__img",children:Object(p.jsx)(T.b,{})}),Object(p.jsxs)("div",{className:"stageIndicator__header",children:[Object(p.jsx)("div",{className:"stageIndicator__title",children:"Contract Address"}),3===t?Object(p.jsxs)("div",{className:"stageIndicator__link__container",children:[Object(p.jsxs)("a",{className:"stageIndicator__link",href:"".concat(r,"/address/").concat(s),target:"_blank",rel:"noopener noreferrer",children:["View on etherscan",Object(p.jsx)("span",{title:"open in etherscan",className:"stageIndicator__extLink",children:Object(p.jsx)(T.a,{})})]}),Object(p.jsx)("span",{className:"stageIndicator__copy",title:"copy contract address",onClick:function(){return navigator.clipboard.writeText(s)},children:Object(p.jsx)(T.c,{})})]}):null,Object(p.jsx)(S,{processedStage:t,elementStage:3})]})]})]}),Object(p.jsxs)("div",{className:"newTokenButton__container",children:[Object(p.jsxs)("button",{className:"newTokenButton",onClick:function(){return a((function(e){return!e}))},children:[Object(p.jsx)("span",{className:"newTokenButton__icon",children:Object(p.jsx)(w.b,{})}),"Create New Token"]}),i&&Object(p.jsxs)("div",{className:"form__errors",children:["! ",i]})]})]})};var C=function(e){var a=e.ethereumNetwork,t=y(),s=Object(n.useState)(0),c=Object(l.a)(s,2),i=c[0],r=c[1],o=Object(n.useState)(null),b=Object(l.a)(o,2),d=b[0],u=b[1],f=Object(n.useState)(null),m=Object(l.a)(f,2),j=m[0],_=m[1],h=Object(n.useState)(!1),x=Object(l.a)(h,2),v=x[0],O=x[1],w=Object(n.useState)(null),k=Object(l.a)(w,2),S=k[0],I=k[1];return Object(p.jsx)("div",{className:"createToken",children:null===t||1===t?Object(p.jsx)(N,{web3:t}):Object(p.jsx)("div",{className:"createToken__card",children:Object(p.jsxs)("div",{className:"createToken__container",children:[Object(p.jsx)("div",{className:"createToken__form",children:!1===v?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"createToken__formHeader",children:"Create Tokens"}),Object(p.jsx)(g,{web3:t,setDeploymentError:I,setSubmitToggle:O,setProcessedStage:r,setTransactionHash:u,setContractAddress:_})]}):Object(p.jsx)(M,{deploymentError:S,setSubmitToggle:O,processedStage:i,transactionHash:d,contractAddress:j,ethereumNetwork:a})}),Object(p.jsx)("div",{className:"createToken__formDisclaimer",children:!1===v?"We take no responsibility for any security problems you might experience, please verify the contract yourself.":"You can close the tab or browser anytime now. The deployment will continue and you can check the result in your connected wallet."})]})})})};t(720);var A=function(e){var a=e.ethereumNetwork;return Object(p.jsx)("div",{className:"description",children:Object(p.jsx)("div",{className:"description__header",children:Object(p.jsxs)("div",{className:"description__title",children:[Object(p.jsx)("div",{className:"description__tag description__token",children:"ERC20"}),Object(p.jsx)("div",{className:"description__tag",children:"Create Tokens"}),Object(p.jsx)("div",{className:"description__network",children:null!==a?Object(p.jsxs)("span",{className:"description__networkInfo networkInfo__active",children:["Connected to ",a," network"]}):Object(p.jsx)("span",{className:"description__networkInfo networkInfo__inactive",children:"Not connected"})})]})})})};t(721);var q=function(){var e=y(),a=Object(n.useState)(null),t=Object(l.a)(a,2),c=t[0],i=t[1];return s.a.useEffect((function(){null!==e&&1!==e&&e.eth.net.getNetworkType().then((function(e){i(e)}))}),[e]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(A,{ethereumNetwork:c}),Object(p.jsx)(C,{ethereumNetwork:c})]})};t(722);var E=function(){return Object(p.jsx)("div",{className:"mobile",children:"Website is not compatible with mobile, since it requries you to connect to an ethereum wallet which are usually available as extensions. Please view the site in your computer to continue."})};i.a.render(Object(p.jsx)(_.a,{query:"(min-width: 320px) and (max-width: 767px)",children:function(e){return e?Object(p.jsx)(E,{}):Object(p.jsx)(j,{children:Object(p.jsx)(q,{})})}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[723,1,2]]]);
//# sourceMappingURL=main.39e328c8.chunk.js.map
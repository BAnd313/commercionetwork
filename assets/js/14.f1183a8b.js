(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{204:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"run-a-validator-on-the-commercio-network-mainnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-a-validator-on-the-commercio-network-mainnet","aria-hidden":"true"}},[a._v("#")]),a._v(" Run a Validator on the Commercio.network Mainnet")]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[a._v("Information on how to join the mainnet ("),e("code",[a._v("genenis.json")]),a._v(" file and seeds) is held\n"),e("a",{attrs:{href:"https://github.com/commercionetwork/launch",target:"_blank",rel:"noopener noreferrer"}},[a._v("in our "),e("code",[a._v("launch")]),a._v(" repo"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("p",[a._v("Before setting up your validator node, make sure you've already gone through the\n"),e("router-link",{attrs:{to:"/join-mainnet.html"}},[a._v("Full Node Setup")]),a._v(" guide.")],1),a._v(" "),e("h2",{attrs:{id:"what-is-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-validator","aria-hidden":"true"}},[a._v("#")]),a._v(" What is a Validator?")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://cosmos.network/docs/cosmos-hub/validators/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Validators"),e("OutboundLink")],1),a._v(" are responsible for committing new\nblocks to the blockchain through voting.\nA validator's stake is slashed if they become unavailable or sign blocks at the same height.\nPlease read about "),e("a",{attrs:{href:"https://cosmos.network/docs/cosmos-hub/validators/validator-faq.html#technical-requirements",target:"_blank",rel:"noopener noreferrer"}},[a._v("Sentry Node Architecture"),e("OutboundLink")],1),a._v("\nto protect your node from DDOS attacks and to ensure high-availability.")]),a._v(" "),e("div",{staticClass:"danger custom-block"},[e("p",[a._v("If you want to become a validator for the Hub's "),e("code",[a._v("mainnet")]),a._v(", you should\n"),e("a",{attrs:{href:"https://cosmos.network/docs/cosmos-hub/validators/security.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("research security"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("You may want to skip the next section if you have already "),e("router-link",{attrs:{to:"/join-mainnet.html"}},[a._v("set up a full-node")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"create-your-validator-machine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-validator-machine","aria-hidden":"true"}},[a._v("#")]),a._v(" Create your validator machine")]),a._v(" "),e("p",[a._v("In order to properly run a validator, some criteria must be satisfied to ensure that your machine won't stop working and\nall your stake won't be slashed for downtime. Three different hardware setup can be found inside the\n"),e("router-link",{attrs:{to:"/validator-hardware.html"}},[a._v("validator hardware")]),a._v(" page.")],1),a._v(" "),e("h2",{attrs:{id:"create-your-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-validator","aria-hidden":"true"}},[a._v("#")]),a._v(" Create your validator")]),a._v(" "),e("p",[a._v("Your "),e("code",[a._v("comnetvalconspub")]),a._v(" can be used to create a new validator by staking tokens.\nYou can find your validator pubkey by running:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cnd tendermint show-validator\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("To create your validator, just use the following command:")]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[a._v("Don't use more "),e("code",[a._v("ucommercio")]),a._v(" than you have")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli tx staking create-validator "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --amount"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("50000000000ucommercio "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cnd tendermint show-validator"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --moniker"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"choose a moniker"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --commission-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --commission-max-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.20"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --commission-max-change-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.01"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --min-self-delegation"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"auto"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --gas-prices"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.025ucommercio"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("div",{staticClass:"tip custom-block"},[e("p",[a._v("When specifying the commission parameters, the "),e("code",[a._v("commision-max-change-rate")]),a._v(" is used to measure the "),e("code",[a._v("% point")]),a._v("\nchange over the "),e("code",[a._v("commission-rate")]),a._v(". E.g. 1% to 2% is a 100% rate increase but only 1 percentage point.")])]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("code",[a._v("Min-self-delegation")]),a._v(" is a strictly positive integer that represents the minimum amount of self-delegated\nvoting power your validator must always have. A "),e("code",[a._v("min-self-delegation")]),a._v(" of 1 means your validator will never have a\nself-delegation lower than "),e("code",[a._v("1commercio")]),a._v(", or "),e("code",[a._v("1000000ucommercio")]),a._v(".")])]),a._v(" "),e("p",[a._v("You can confirm that you are in the validator set by using a third party explorer.")]),a._v(" "),e("h2",{attrs:{id:"edit-the-validator-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-validator-description","aria-hidden":"true"}},[a._v("#")]),a._v(" Edit the validator description")]),a._v(" "),e("p",[a._v("You can edit your validator's public description. This info is to identify your validator, and will be relied on by\ndelegators to decide which validators to stake to.\nMake sure to provide input for every flag below. If a flag is not included in the command the field will default to\nempty ("),e("code",[a._v("--moniker")]),a._v(" defaults to the machine name) if the field has never been set or remain the same if it has been\nset in the past.")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("<key_name>")]),a._v(" specifies which validator you are editing. If you choose to not include certain flags, remember that\nthe "),e("code",[a._v("--from")]),a._v(" flag must be included to identify the validator to update.")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("--identity")]),a._v(" can be used as to verify identity with systems like Keybase or UPort. When using with\nKeybase "),e("code",[a._v("--identity")]),a._v(" should be populated with a 16-digit string that is generated with a\n"),e("a",{attrs:{href:"https://keybase.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("keybase.io"),e("OutboundLink")],1),a._v(" account. It's a cryptographically secure method of verifying your identity across\nmultiple online networks. The Keybase API allows us to retrieve your Keybase avatar.\nThis is how you can add a logo to your validator profile.")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli tx staking edit-validator\n  --moniker"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"choose a moniker"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --website"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://commercio.network"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --identity"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("6A0D65E29A4CBC8E "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --details"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The documents blockchain!"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"auto"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --gas-prices"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.025ucommercio"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --commission-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("p",[e("strong",[a._v("Note")]),a._v(": The "),e("code",[a._v("commision-rate")]),a._v(" value must adhere to the following inviariants:")]),a._v(" "),e("ul",[e("li",[a._v("Must be between 0 and the validator's "),e("code",[a._v("commission-max-rate")])]),a._v(" "),e("li",[a._v("Must not exceed the validator's "),e("code",[a._v("commission-max-change-rate")]),a._v(" which is maximum % point change rate per day."),e("br"),a._v("\nIn other words, a validator can only change its commission once per day and within "),e("code",[a._v("commission-max-change-rate")]),a._v(" bounds.")])]),a._v(" "),e("h2",{attrs:{id:"view-the-validator-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-the-validator-description","aria-hidden":"true"}},[a._v("#")]),a._v(" View the validator description")]),a._v(" "),e("p",[a._v("View the validator's information with this command:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli query staking validator "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_commercio_network"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"track-the-validator-signing-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#track-the-validator-signing-information","aria-hidden":"true"}},[a._v("#")]),a._v(" Track the Validator Signing Information")]),a._v(" "),e("p",[a._v("In order to keep track of a validator's signatures in the past you can do so by using the signing-info command:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli query slashing signing-info "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"unjail-a-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unjail-a-validator","aria-hidden":"true"}},[a._v("#")]),a._v(" Unjail a validator")]),a._v(" "),e("p",[a._v('When a validator is "jailed" for downtime, you must submit an '),e("code",[a._v("Unjail")]),a._v(" transaction from the operator account in order\nto be able to get block proposer rewards again (depends on the zone fee distribution).")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli tx slashing unjail "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--from"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\t--chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"confirm-your-validator-is-running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#confirm-your-validator-is-running","aria-hidden":"true"}},[a._v("#")]),a._v(" Confirm your validator is running")]),a._v(" "),e("p",[a._v("Your validator is active if the following command returns anything:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli query tendermint-validator-set "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cnd tendermint show-validator"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("You should now see your validator in one of the Cosmos Hub explorers.\nYou are looking for the Bech32 encoded address in the "),e("code",[a._v("~/.cnd/config/priv_validator.json")]),a._v(" file.")]),a._v(" "),e("blockquote",[e("p",[a._v("NOTE. To be in the validator set, you need to have more total voting power than the 100th validator.")])]),a._v(" "),e("h2",{attrs:{id:"common-problems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-problems","aria-hidden":"true"}},[a._v("#")]),a._v(" Common problems")]),a._v(" "),e("h3",{attrs:{id:"problem-1-my-validator-has-voting-power-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-1-my-validator-has-voting-power-0","aria-hidden":"true"}},[a._v("#")]),a._v(" Problem #1: My validator has "),e("code",[a._v("voting_power: 0")])]),a._v(" "),e("p",[a._v("Your validator has become jailed. Validators get jailed, i.e. get removed from the active validator set,\nif they do not vote on "),e("code",[a._v("500")]),a._v(" of the last "),e("code",[a._v("10000")]),a._v(" blocks, or if they double sign.")]),a._v(" "),e("p",[a._v("If you got jailed for downtime, you can get your voting power back to your validator.\nFirst, if "),e("code",[a._v("cnd")]),a._v(" is not running, start it up again:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cnd start\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Wait for your full node to catch up to the latest block. Then, you can "),e("a",{attrs:{href:"#unjail-a-validator"}},[a._v("unjail your validator")]),a._v(".")]),a._v(" "),e("p",[a._v("Lastly, check your validator again to see if your voting power is back.")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cncli status\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("You may notice that your voting power is less than it used to be. That's because you got slashed for downtime!")]),a._v(" "),e("h3",{attrs:{id:"problem-2-my-cnd-crashes-because-of-too-many-open-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem-2-my-cnd-crashes-because-of-too-many-open-files","aria-hidden":"true"}},[a._v("#")]),a._v(" Problem #2: My "),e("code",[a._v("cnd")]),a._v(" crashes because of "),e("code",[a._v("too many open files")])]),a._v(" "),e("p",[a._v("The default number of files Linux can open (per-process) is "),e("code",[a._v("1024")]),a._v(".\n"),e("code",[a._v("cnd")]),a._v(" is known to open more than "),e("code",[a._v("1024")]),a._v(" files. This causes the process to crash.\nA quick fix is to run "),e("code",[a._v("ulimit -n 4096")]),a._v(" (increase the number of open files allowed) and then restart the process with\n"),e("code",[a._v("cnd start")]),a._v(". If you are using "),e("code",[a._v("systemd")]),a._v(" or another process manager to launch "),e("code",[a._v("cnd")]),a._v(" this may require some\nconfiguration at that level. A sample "),e("code",[a._v("systemd")]),a._v(" file to fix this issue is below:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# /etc/systemd/system/cnd.service\n[Unit]\nDescription=Commercio.network Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=ubuntu\nWorkingDirectory=/home/ubuntu\nExecStart=/home/ubuntu/go/bin/cnd start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
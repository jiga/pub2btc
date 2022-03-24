
// @ts-ignore
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.14.0/index.ts';
// @ts-ignore
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';



function stringToArrayBuffer(str: string) {
	return new TextEncoder().encode(str);
}


Clarinet.test({
    name: "convert to p2pkh",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const wallet = accounts.get('wallet_1')!;

        let p2pkh_key = chain.callReadOnlyFn('pub2btc', 'to-p2pkh', ['0x03adb8de4bfb65db2cfd6120d55c6526ae9c52e675db7e47308636534ba7786110'], wallet.address);

        console.log(p2pkh_key.result)
    },
});

Clarinet.test({
    name: "convert to p2sh-p2wpkh",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const wallet = accounts.get('wallet_1')!;

        let p2sh_p2wpkh_key = chain.callReadOnlyFn('pub2btc', 'to-p2sh-p2wpkh', ['0x03adb8de4bfb65db2cfd6120d55c6526ae9c52e675db7e47308636534ba7786110'], wallet.address);

        console.log(p2sh_p2wpkh_key.result)
    },
});


Clarinet.test({
    name: "convert to p2sh",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const wallet = accounts.get('wallet_1')!;

        let p2sh_key = chain.callReadOnlyFn('pub2btc', 'to-p2sh', ['0x01000000b0287b4a252ac05af83d2dcef00ba313af78a3e9c329afa216eb3aa2a7b4613a18606b350cd8bf565266bc352f0caddcf01e8fa789dd8a15386327cf8cabe198db6b1b20aa0fd7b23880be2ecbd4a98130974cf4748fb66092ac4d3ceb1a5477010000001976a91479091972186c449eb1ded22b78e40d009bdf008988ac00ca9a3b00000000feffffffde984f44532e2173ca0d64314fcefe6d30da6f8cf27bafa706da61df8a226c839204000001000000'], wallet.address);

        console.log(p2sh_key.result)
    },
});


Clarinet.test({
    name: "check input publick key format",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        const wallet = accounts.get('wallet_1')!;

        let p2sh_p2wpkh_key = chain.callReadOnlyFn('pub2btc', 'to-p2sh-p2wpkh', ['0x01adb8de4bfb65db2cfd6120d55c6526ae9c52e675db7e47308636534ba7786110'], wallet.address);

        console.log(p2sh_p2wpkh_key.result)
        p2sh_p2wpkh_key.result.expectErr();
    },
});

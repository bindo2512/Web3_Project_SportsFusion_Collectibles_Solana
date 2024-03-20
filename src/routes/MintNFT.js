import React, { useState } from 'react';
import "../styles/formmintnft.css"

function MintNFT() {
    const [file, setFile] = useState();
    const [network, setNetwork] = useState("devnet");
    const [publicKey, setPublicKey] = useState('');
    const [name, setName] = useState();
    const [symbol, setSymbol] = useState();
    const [desc, setDesc] = useState();
    const [attr, setAttr] = useState();
    const [extUrl, setExtUrl] = useState();
    const [maxSup, setMaxSup] = useState(0);
    const [roy, setRoy] = useState(1);
    const [status, setStatus] = useState("Awaiting Upload");
    const [dispResponse, setDispResp] = useState("");

    const mintNow = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <form>
                <label htmlFor="file">Select File</label>
                <input name="file" type="file" onChange={(e) => {
                    setFile(e.target.files[0]);
                }} />
                <br />

                <label htmlFor="network">
                    Network <span>(network: string)</span>
                </label>
                <select name="network" onChange={(e) => { setNetwork(e.target.value) }}>
                    <option value="devnet">Devnet</option>
                    <option value="testnet">Testnet</option>
                    <option value="mainnet-beta">Mainnet Beta</option>
                </select>
                <br />

                <label>Public Key (wallet:string)</label>
                <input type="text" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} required />
                <br />

                <label htmlFor="name">Name (name:string)</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <br />

                <label htmlFor="symbol">Symbol (symbol:string)</label>
                <input type="text" name="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
                <br />

                <label htmlFor="desc">Description (description:string)</label>
                <textarea name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
                <br />

                <label htmlFor="attributes">Attributes (attributes:string)</label>
                <textarea name="attributes" value={attr} onChange={(e) => setAttr(e.target.value)} required></textarea>
                <br />

                <label htmlFor="external_url">External Url (external_url:string)</label>
                <input type="text" name="external_url" value={extUrl} onChange={(e) => setExtUrl(e.target.value)} />
                <br />

                <label htmlFor="max_supply">Max Supply (max_supply:number)</label>
                <input type="number" name="max_supply" value={maxSup} onChange={(e) => { setMaxSup(e.target.value) }} required />
                <br />

                <label htmlFor="royalty">Royalty (royalty:number)</label>
                <input type="number" name="royalty" value={roy} onChange={(e) => { setRoy(e.target.value) }} required />
                <br />

                <button type="submit" onClick={mintNow}>
                    Submit
                </button>
            </form>
            <textarea
                className="form-control"
                name=""
                value={JSON.stringify(dispResponse)}
                id=""
                cols="30"
                rows="10"
            ></textarea>
        </div>
    );
}

export default MintNFT;

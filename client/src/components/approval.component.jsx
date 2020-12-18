import React, { useState, useEffect } from "react";
import LandService from "../service/LandService"
import getWeb3 from "../getWeb3";
import "./approval.style.css"
import LandRegistery from "../contracts/LandRegistery.json";


const ApprovalLand = props => {
    const initialLandState = {
        id: null,
        ownerid: "",
        ownername: "",
        fathername: "",
        location: "",
        province: "",
        city: "",
        estimatedprice: "",

    };

    const [currentLand, setCurrentLand] = useState(initialLandState);
    const [storage, setStoragevalue] = useState([]);
    const [web3, setWeb3] = useState(null);
    const [accounts, setAaccounts] = useState(null);
    const [contract, setContract] = useState(null);
    const [message, setMessage] = useState("");
    const [id, setid] = useState("");

    const getLand = id => {
        LandService.get(id)
            .then(response => {
                setCurrentLand(response.data);
                console.log(id);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getLand(props.match.params.id);
        console.log(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setid(event.target.value);
        console.log(id);
        setCurrentLand({ ...currentLand, [name]: value });
    };
    const callWeb3 = async () => {
        console.log("hello g");
        try {
            // Get network provider and web3 instance.
            const web3 = getWeb3();
            console.log("hello g2");
            // Use web3 to get the user's accounts.
            const accounts = await web3.getAccounts().then(function (result) { return result[0] });

            // Get the contract instance.
            const networkId = web3.eth.net.getId();
            const deployedNetwork = LandRegistery.networks[networkId];
            const instance = new web3.eth.Contract(
                LandRegistery.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.

            setWeb3({ web3 });
            setAaccounts({ accounts });
            setContract({ instance });
            runExample();
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }


        const runExample = async () => {
            setContract({ contract });
            setAaccounts({ accounts });

            // Stores a given value, 5 by default.
            await contract.methods.addLand(33202, "saslik", "assa", "asad", "we", "weqw", "asassa").send({ from: accounts[0] });

            // Get the value from the contract to prove it worked.
            const response = await contract.methods.getLandByOwnerId(33202).call();

            // Update state with the result.
            setStoragevalue(response);
        };

    };


    return (

        <div>

            <div className="edit-form container-fluid ">

                <div className="panel"></div>
                <div className="center">


                    <h3 class="mb-4 text-center text-danger text-bolder">LETTER OF DECLARTION</h3>
                    <p className="m-4">
                        I, <span style={{ color: "red", textTransform: "uppercase", fontWeight: "bolder" }}>{currentLand.ownername}</span> resident of <span style={{ color: "red", textTransform: "uppercase", fontWeight: "bolder" }}>{currentLand.city}</span>, do hereby declare on oath as under
                    <br />




                         That after purchasing the said plot the location  <span style={{ color: "red", textTransform: "uppercase", fontWeight: "bolder" }}>{currentLand.location}</span> allotted  in respect of the said plot.
                        <br />

                        <br />
                         I declare any difference will be found later on in my statement in respect of the above mentioned property then I shall be fully responsible for the same and if later on the will be find any right, title and interest over the said property then that person can take any action against me.
                        <br />
                        Declarant/Deponent :
                        <span style={{ color: "Blue", textTransform: "uppercase", fontWeight: "bolder" }}>{currentLand.ownername}</span>
                        <br></br>
                        Verified that the contents of my above declaration are true and correct to best of my knowledge and belief and nothing has been concealed therein.
                        Verified at <span style={{ color: "Blue", textTransform: "uppercase", fontWeight: "bolder" }}>{new Date().toLocaleString()} </span> By Director Land Authority



                    </p>
                    <button onClick={callWeb3}>
                        Approved
                </button>
                </div>
            </div>
        </div >
    );

};

export default ApprovalLand;
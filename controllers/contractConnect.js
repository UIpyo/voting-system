// import Web3 from "web3";
import web3 from "../contracts/web3";
import factory from '../contracts/build/contracts/VotingFactory.json'
import election from '../contracts/build/contracts/votingSystem.json'

const getAccounts = () => {
    const accounts = await web3.eth.getAccounts();
    return accounts;
}

const connectFactory = () => {
    return new web3.eth.Contract(JSON.parse(JSON.stringify(factory.abi)),"0x14e9257A4Df744aC321Df658C0c82060A1A2762D");
}

const connectElection = address => {
    return new web3.eth.Contract(JSON.parse(JSON.stringify(election.abi)),address);
}

const createElection = async (name, level, electionType) => {
    try{
        if(level > 2 || electionType > 1) {
            console.log("wrong inputs");
            return;
        }
        await connectFactory.methods.createElection(name, level, electionType).send({from: getAccounts()[0]})
    }
    catch(err) {
        console.log("An error caught in createElection", err);
    }
}

const getDeployedElections = async() => {
    try{
        const elections = await connectFactory.methods.getDeployedElections().call({from : getAccounts()[0]});
        return elections;
    }
    catch(err) {
        console.log("An error occured in getDeployedElections", err);
    }
}

const registerVoter = async (name, age, aadharNumber, phone) => {
    try{
        await connectElection.methods.registerVoter(name, age, aadharNumber, phone).send({from: getAccounts()[0]})
    }
    catch(err) {
        console.log("An error occured while registering voter");
    }
}

const registerCandidate = async (name, party, age, aadharNumber) => {
    try {
        await connectElection.methods.registerCandidate(name, party, age, aadharNumber).send({from : getAccounts()[0]});
    }
    catch(err) {
        console.log("An error occured in registerCandidate");
    }
}

const approveCandidate = async (address) => {
    try {
        await connectElection.methods.approveCandidate(address).send({from : getAccounts()[0]});
    }
    catch(err) {
        console.log("An error occured in approveCandidate",err)
    }
}

const approveVoter = async (address) => {
    try {
        await connectElection.methods.approveVoter(address).send({from : getAccounts()[0]});
    }
    catch(err) {
        console.log("An error occured in approveVoter", err);
    }
}

const getPersonalInfo = async () => {
    try{
        await connectElection.methods.getPersonalInfo().call({from: getAccounts()[0]});
    }
    catch(err) {
        console.log("An error occured in getPersonalInfo", err);
    }
}

export {createElection, getDeployedElections, registerVoter, registerCandidate, approveCandidate, approveVoter, getPersonalInfo}
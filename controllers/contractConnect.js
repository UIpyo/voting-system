// import Web3 from "web3";
import web3 from "../contracts/web3";
import factory from '../contracts/build/contracts/VotingFactory.json'
import election from '../contracts/build/contracts/votingSystem.json'

const connectFactory = () => {
    return new web3.eth.Contract(JSON.parse(JSON.stringify(factory.abi)),"0xDD419DA304929c650CD252931A606B96BD6E9BAD");
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
        const address = await web3.eth.getAccounts();
        await connectFactory().methods.createElection(name, level, electionType).send({from : address[0]})
    }
    catch(err) {
        console.log("An error caught in createElection", err);
    }
}

const getDeployedElections = async() => {
    try{
        const address = await web3.eth.getAccounts();
        const elections = await connectFactory().methods.getDeployedElections().call({from : address[0]});
        console.log(elections);
        return elections;
    }
    catch(err) {
        console.log("An error occured in getDeployedElections", err);
    }
}

const registerVoter = async (name, age, aadharNumber, phone, contractAddress) => {
    try{
        const address = await web3.eth.getAccounts();
        const data = await connectElection(contractAddress).methods.registerVoter(name, age, aadharNumber, phone).send({from: address[0]})
        console.log(data);
    }
    catch(err) {
        console.log("An error occured while registering voter", err);
    }
}

const registerCandidate = async (name, party, age, aadharNumber, contractAddress) => {
    try {
        const address = await web3.eth.getAccounts();
        await connectElection(contractAddress).methods.registerCandidate(name, party, age, aadharNumber).send({from : address[0]});
    }
    catch(err) {
        console.log("An error occured in registerCandidate");
    }
}

const approveCandidate = async (candidateAddress, contractAddress) => {
    try {
        const address = await web3.eth.getAccounts();
        await connectElection(contractAddress).methods.approveCandidate(candidateAddress).send({from : address[0]});
    }
    catch(err) {
        console.log("An error occured in approveCandidate",err)
    }
}

const approveVoter = async (voterAddress, contractAddress) => {
    try {
        const address = await web3.eth.getAccounts();
        await connectElection(contractAddress).methods.approveVoter(voterAddress).send({from : address[0]});
    }
    catch(err) {
        console.log("An error occured in approveVoter", err);
    }
}

const getPersonalInfo = async (contractAddress) => {
    try{
        const address = await web3.eth.getAccounts();
        const data = await connectElection(contractAddress).methods.getPersonalInfo().call({from: address[0]});
        console.log(data);
    }
    catch(err) {
        console.log("An error occured in getPersonalInfo", err);
    }
}

export { createElection, getDeployedElections, registerVoter, registerCandidate, approveCandidate, approveVoter, getPersonalInfo}
# TRUS-FYP1
decentralized Rating system using ETHEREUM smart contracts and react
consist of there major Parts
1. Client /React application +web3pi 
2. RestApi (node js) +mongob 
3. Truffle+ ganache+metmask 1-Truffle+ganache+metamask
 Compile,develop and migrate the smart contract using these commands: Run always first ganache and set Project workspace in setting -truffle compile
 -truffle develop
  -truffle migrate --network ganache
   This will generate a and use gas from ganache
2-REST API(Nodejs+mongodb)  
 Open project folder -cd backend -npm install
-nodemon server.js 
Possible errors: CORS POLICY ERROR(Solution:Enable google cors extension) 
Mongodb not connected(Solution :go to backend/config/keys) 
Change mongodb srv name according to your mongodb When all resolve you will see messgae Mongodb successfulyy connected(now let’s fly)
 3- React+Web3 
 -Cd client 
 -npm install
  -Npm start

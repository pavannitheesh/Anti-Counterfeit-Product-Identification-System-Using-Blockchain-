const hre = require("hardhat"); // Import Hardhat Runtime Environment

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();

  // Fetch the account balance
  const accountBalance = await hre.ethers.provider.getBalance(deployer.address);

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  // Deploy the contract
  const productContractFactory = await hre.ethers.getContractFactory("Identeefi");
  const productContract = await productContractFactory.deploy();

  // Wait for the deployment to be completed
  await productContract.waitForDeployment();

  console.log("Identeefi address: ", productContract.target);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("Error during deployment:", error);
    process.exit(1);
  }
};

runMain();

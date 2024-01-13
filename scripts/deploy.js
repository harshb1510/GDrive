
const hre = require('hardhat');

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
  await upload.deployed();
  console.log("Upload deployed to:", upload.address);
  };

// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// MARKET -> 0x0165878A594ca255338adfa4d48449f69242Eb8F
// PROXY -> 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853

const { getConstants } = require("./constants");

// PROXY ADMIN -> 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
async function main(network) {
  console.log("Network is ", network.name);

  const { ADDRESS_REGISTRY } = getConstants(network);

  const addressRegistry = await ethers.getContractAt(
    "FibboAddressRegistry",
    ADDRESS_REGISTRY
  );

  const verificationAddress = await addressRegistry.verification();

  const verificationProxy = await ethers.getContractAt(
    "FibboVerification",
    verificationAddress
  );

  const marketAddress = await addressRegistry.marketplace();

  const marketplaceProxy = await ethers.getContractAt(
    "FibboMarketplace",
    marketAddress
  );

  const UtilityCollection = await ethers.getContractFactory("UtilityFibbo");
  const utilityCollection = await UtilityCollection.deploy(
    marketplaceProxy.address
  );
  await utilityCollection.deployed();
  console.log("UtilityCollection deploted to: ", utilityCollection.address);

  await utilityCollection.updateFibboVerification(verificationProxy.address);
}

main(network)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// MARKET -> 0x0165878A594ca255338adfa4d48449f69242Eb8F
// PROXY -> 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853

const { getConstants } = require("../constants");

async function main(network) {
  console.log("Network is ", network.name);

  const { ADDRESS_REGISTRY } = getConstants(network);

  const addressRegistry = await ethers.getContractAt(
    "FibboAddressRegistry",
    ADDRESS_REGISTRY
  );

  const marketAddress = await addressRegistry.auction();
  const communityAddress = await addressRegistry.community();
  const factoryAddress = await addressRegistry.factory();

  console.log("Marketplace deployed at: ", marketAddress);
  console.log("Community deployed at: ", communityAddress);
  console.log("Factory deployed at: ", factoryAddress);
}

main(network)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

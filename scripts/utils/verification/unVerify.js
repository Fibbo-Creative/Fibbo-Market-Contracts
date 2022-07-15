// MARKET -> 0x0165878A594ca255338adfa4d48449f69242Eb8F
// PROXY -> 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853

const { getConstants } = require("../../constants");

async function main(network) {
  console.log("Network is ", network.name);

  const { ADDRESS_REGISTRY } = getConstants(network);

  const addressRegistry = await ethers.getContractAt(
    "FibboAddressRegistry",
    ADDRESS_REGISTRY
  );
  const verificationAddress = await addressRegistry.verification();

  const verification = await ethers.getContractAt(
    "FibboVerification",
    verificationAddress
  );

  await verification.unverifyAddress(
    "0x7e82AD54f2a77Fb91AAD24A7d847267a45182fEe"
  );
}

main(network)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

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

  const verificationAddress = await addressRegistry.verification();

  const verification = await ethers.getContractAt(
    "FibboVerification",
    verificationAddress
  );

  await verification.verificateAddress(
    "0x1d92D9a839e9c5D8cc02A7F87E591fF1AdA33268"
  );
  await verification.verificateAddress(
    "0x06b3cC29D74a36f15F1B2beD529Fe45E30CAaf12"
  );
  await verification.verificateAddress(
    "0x8c6ce70D3ab8E962c29458D5fF711f670790711f"
  );
  await verification.verificateAddress(
    "0x1d5318c25AcDCc270b3f92CcDB72d245836bBCc1"
  );
  await verification.verificateAddress(
    "0x3a8FDCa22221CC7C67F95520466b1E991B49168d"
  );
}

main(network)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

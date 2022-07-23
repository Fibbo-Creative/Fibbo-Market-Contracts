function getConstants(network) {
  switch (network.name) {
    case "localhost":
      return LOCAL_CONSTANTS;
    case "testnet":
      return TEST_CONSTANTS;
    case "mainnet":
      return MAIN_CONSTANTS;
    default:
      return LOCAL_CONSTANTS;
  }
}

const LOCAL_CONSTANTS = {
  TREASURY_ADDRESS: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  ADDRESS_REGISTRY: "0x9a30345D5EF8ff499476bfdBF4eDd3996C3E75Da",
  PROXY_ADDRESS: "0xCC3513CbC0bb78125C84Bc82a0019fBB2d9f14Da",
  PLATFORM_FEE: 200,
};

const TEST_CONSTANTS = {
  TREASURY_ADDRESS: "0xBcBE0c2F3aB715340DECf7b444577935599b0F8f",
  ADDRESS_REGISTRY: "0x696933C51106B9BF59bda4322AB884Ead0b20995",
  PROXY_ADDRESS: "0xfa65304CE2e959Cb41Ddda506dD6A76112C66192",
  PLATFORM_FEE: 200,
};

const MAIN_CONSTANTS = {
  TREASURY_ADDRESS: "0xBcBE0c2F3aB715340DECf7b444577935599b0F8f",
  ADDRESS_REGISTRY: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  PROXY_ADDRESS: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  PLATFORM_FEE: 200,
};

module.exports = {
  getConstants,
};

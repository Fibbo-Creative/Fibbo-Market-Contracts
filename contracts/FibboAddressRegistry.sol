// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract FibboAddressRegistry is OwnableUpgradeable {
    bytes4 private constant INTERFACE_ID_ERC721 = 0x80ac58cd;

    /// @notice Fibbo default Collection contract
    address public fibboCollection;

    /// @notice Fibbo Utility Collection contract
    address public utilityCollection;

    /// @notice FibboMarketplace contract
    address public marketplace;

    /// @notice FibboMarketplace contract
    address public community;

    /// @notice FibboMarketplace contract
    address public verification;

    /// @notice Contract initializer
    function initialize() public initializer {
        __Ownable_init();
    }

    /**
     @notice Update Fibbo default collection contract
     @dev Only admin
     */
    function updateFibboCollection(address _fibboCollection)
        external
        onlyOwner
    {
        require(
            IERC165(_fibboCollection).supportsInterface(INTERFACE_ID_ERC721),
            "Not ERC721"
        );
        fibboCollection = _fibboCollection;
    }

    /** 
     @notice Update Fibbo default collection contract
     @dev Only admin
     */
    function updateUtilityCollection(address _utilityCollection)
        external
        onlyOwner
    {
        require(
            IERC165(_utilityCollection).supportsInterface(INTERFACE_ID_ERC721),
            "Not ERC721"
        );
        utilityCollection = _utilityCollection;
    }

    /**
     @notice Update FibboMarket contract
     @dev Only admin
     */
    function updateMarketplace(address _marketplace) external onlyOwner {
        marketplace = _marketplace;
    }

    /**
     @notice Update FibboCommunity contract
     @dev Only admin
     */
    function updateCommunity(address _community) external onlyOwner {
        community = _community;
    }

    /**
     @notice Update FibboVerification contract
     @dev Only admin
     */

    function updateVerification(address _verification) external onlyOwner {
        verification = _verification;
    }
}

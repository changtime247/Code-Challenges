/*
1108. Defanging an IP Address
Easy
1.4K
1.6K
Companies
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:

The given address is a valid IPv4 address.
*/

/*
Given an IPv4 address as a string. 
Return a defanged version of it. 
Replace all '.' with '[.]'
*/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split`.`.join`[.]`
}

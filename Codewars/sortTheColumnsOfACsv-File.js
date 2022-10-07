// 6 kyu
// Sort the columns of a csv-file

// You get a string with the content of a csv-file. The columns are separated by semicolons.
// The first line contains the names of the columns.
// Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

// An example:

// Before sorting:
// As table (only visualization):
// |myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
// |17945       |10091    |10088  |3907   |10132          |
// |2           |12       |13     |48     |11             |

// The csv-file:
// myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
// 17945;10091;10088;3907;10132\n
// 2;12;13;48;11

// ----------------------------------

// After sorting:
// As table (only visualization):
// |Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
// |3907   |17945       |10091    |10088  |10132          |
// |48     |2           |12       |13     |11             |

// The csv-file:
// Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
// 3907;17945;10091;10088;10132\n
// 48;2;12;13;11
// There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

// ----------------------
// Parameter: Given 'a CSV file' as a string (arrayOfRows are separated by new lines and columns are separated by semicolons)
// Return string that is sorted such that the entire 'file' is sorted by the first row alphabetically AND all the subsequent arrayOfRows are sorted along with the first row.
// Examples:
// Ex 1:
// - preSorting -
// csvFileContent =
// 'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79
//  17945;10091;10088;3907;10132
//  2;12;13;48;11'
// sortCsvColumns(csvFileContent)
// -->
// - postSorting -
// 'Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79
//  3907;17945;10091;10088;10132
//  48;2;12;13;11'
//
// Ex 2:
// - preSorting -
// sortCsvColumns(
// 'IronMan;Thor;Captain America;Hulk\n' +
// 'arrogant;divine;honorably;angry\n' +
// 'armor;hammer;shield;greenhorn\n' +
// 'Tony;Thor;Steven;Bruce')
// -->
// - postSorting -
// 'Captain America;Hulk;IronMan;Thor\n' +
// 'honorably;angry;arrogant;divine\n' +
// 'shield;greenhorn;armor;hammer\n' +
// 'Steven;Bruce;Tony;Thor'
//
// Ex 3:
// - preSorting -
// csvFileContent =
// 'nobdhl;dC;FcGVw;yhcmhh;peydqz;KNrI;sz;nB;QWXtny
// gjev;qaXyM;dnhD;Ld;aha;gby;owgcu;ex;Jrzs
// Fuzd;wjpo;ddll;tohrsi;gepn;rl;EnnK;rvg;xqnS
// lhEu;an;oMPjXk;wvvuRQ;mXnp;Lcwvk;GfRV;Fyh;hG
// OvwwLu;oiB;SIy;wtAbxH;sp;ELGfj;nwuh;zRl;lzvr
// Kfxolm;pG;ajYuRm;opwhsz;mcpgb;sn;LrkRph;fZlqwu;eYun
// rnxua;eljrQc;tyyev;jGLttt;jNuy;vzdo;Uvgn;xqi;jcU
// qxxbhd;tsUF;iplhb;rlm;Nvuws;fLP;Zge;fmaw;dhkEbk
// vyutqw;knxqd;vbmodf;oL;te;wLwhc;xqJea;dCh;mLlpRq
// rK;dKxl;LY;Gb;lw;eaxzg;cluC;pSMf;byy
// Rdatf;aMu;pz;uq;Waya;oxcd;jgfyL;xHkf;kw
// ffj;qN;vTvm;inKdbX;fgusr;fc;Ztf;jhs;tmlzp
// bnkiz;okckow;Ikf;Qpdp;cjMd;lA;jckv;wad;xlOxn
// ukv;yKm;lpmy;ymrp;phb;wtfSHk;gzgZo;shgm;kluCx'
// sortCsvColumns(csvFileContent)
// -->
// - postSorting -
// 'dC;FcGVw;KNrI;nB;nobdhl;peydqz;QWXtny;sz;yhcmhh
// qaXyM;dnhD;gby;ex;gjev;aha;Jrzs;owgcu;Ld
// wjpo;ddll;rl;rvg;Fuzd;gepn;xqnS;EnnK;tohrsi
// an;oMPjXk;Lcwvk;Fyh;lhEu;mXnp;hG;GfRV;wvvuRQ
// oiB;SIy;ELGfj;zRl;OvwwLu;sp;lzvr;nwuh;wtAbxH
// pG;ajYuRm;sn;fZlqwu;Kfxolm;mcpgb;eYun;LrkRph;opwhsz
// eljrQc;tyyev;vzdo;xqi;rnxua;jNuy;jcU;Uvgn;jGLttt
// tsUF;iplhb;fLP;fmaw;qxxbhd;Nvuws;dhkEbk;Zge;rlm
// knxqd;vbmodf;wLwhc;dCh;vyutqw;te;mLlpRq;xqJea;oL
// dKxl;LY;eaxzg;pSMf;rK;lw;byy;cluC;Gb
// aMu;pz;oxcd;xHkf;Rdatf;Waya;kw;jgfyL;uq
// qN;vTvm;fc;jhs;ffj;fgusr;tmlzp;Ztf;inKdbX
// okckow;Ikf;lA;wad;bnkiz;cjMd;xlOxn;jckv;Qpdp
// yKm;lpmy;wtfSHk;shgm;ukv;phb;kluCx;gzgZo;ymrp'
//
// Pseudocode:
// Split CSV file on new lines and semi-colons to get an array of sub-arrays, each being a row's data value.
// Essentially, this is to get the data looking like an array of cells (each cell containing the corresponding value)
// Loop through the array of sub-arrays to partition the data according to the first row (i.e. group data values of each column together).
// Sort the partitioned data alphabetically.
// Take partitioned and sorted data and 're-apply' csv-formatting - rejoin sub-arrays' elements on semi-colons and rejoin sub-arrays on new lines.
// Return final string.

function sortCsvColumns(csvFileContent) {
  // Get each data value into a 'cell'
  let arrayOfRows = csvFileContent.split('\n')
  let arrOfRowsAsArrays = arrayOfRows.reduce(
    (a, k, i) => (a[i] = k.split`;`) && a,
    []
  )

  // Loops to partition data according to first row
  let partitionData = []
  for (let i = 0; i < arrOfRowsAsArrays[0].length; i++) {
    let innerPartitionData = []
    for (let j = 0; j < arrOfRowsAsArrays.length; j++) {
      innerPartitionData.push(arrOfRowsAsArrays[j][i])
    }
    partitionData.push(innerPartitionData)
  }

  // The actual sorting
  let partitionDataSorted = partitionData.sort((a, b) =>
    a[0].localeCompare(b[0])
  )

  // Loops to turn partitioned and sorted data into a string
  let finalStr = ''
  for (let i = 0; i < arrayOfRows.length; i++) {
    let innerFinalStr = ''
    for (let j = 0; j < partitionData.length; j++) {
      innerFinalStr +=
        partitionData[j][i] + `${j === partitionData.length - 1 ? '' : ';'}`
    }
    finalStr += innerFinalStr + `${i === arrayOfRows.length - 1 ? '' : '\n'}`
  }

  return finalStr
}

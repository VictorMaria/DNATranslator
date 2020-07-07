const DNACodons = {
  'ATT': 'I', 'ATC': 'I', 'ATA': 'I',
  'CTT': 'L', 'CTC': 'L', 'CTA': 'L', 'CTG': 'L', 'TTA': 'L', 'TTG': 'L',
  'GTT': 'V', 'GTC': 'V', 'GTA': 'V', 'GTG': 'V',
  'TTT': 'F', 'TTC': 'F',
  'ATG': 'M',
  'TGT': 'C', 'TGC': 'C',
  'GCT': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
  'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G',
  'CCT': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
  'ACT': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
  'TCT': 'S', 'TCC': 'S', 'TCA': 'S', 'TCG': 'S', 'AGT': 'S', 'AGC': 'S',
  'TAT': 'Y', 'TAC': 'Y',
  'TGG': 'W',
  'CAA': 'Q', 'CAG': 'Q',
  'AAT': 'N', 'AAC': 'N',
  'CAT': 'H', 'CAC': 'H',
  'GAA': 'E', 'GAG': 'E',
  'GAT': 'D', 'GAC': 'D',
  'AAA': 'K', 'AAG': 'K',
  'CGT': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R', 'AGA': 'R', 'AGG': 'R',
  'TAA': '_', 'TAG': '_', 'TGA': '_'
};

const util = {};
util.translate = (strand) => {
  // This stores a group of three nucleotides
  let markedCodons = '';
  let slc = '';
  for (let eachCodon of strand) {
    markedCodons += eachCodon;
    if(markedCodons.length === 3) {
      if(DNACodons[markedCodons]) {
        slc += DNACodons[markedCodons];
        markedCodons = '';
      } else {
        // Alien codons are marked in backticks  
        slc += '`' + markedCodons + '`';
        markedCodons = '';
      }  
    }
  }
  /* 
  If the strand's length is not divisible by 3
  then it means there are either one or two nucleotides in a group
  This shortened groups are marked in backticks
   */
  if(strand.length % 3 === 1) {
    slc += '`' + strand[strand.length - 1] + '`';
  } else if (strand.length % 3 === 2 ) {
    slc += '`' + strand[strand.length - 2] + strand[strand.length - 1] + '`';
  }
  return slc;
} 

export default util;
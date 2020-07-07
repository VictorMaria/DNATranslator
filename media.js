import fs from 'fs';
import util from './translate';

const { translate } = util;

const media = {};

const openFile = (filePath) => {
  try {
  const data = fs.readFileSync(filePath, 'utf8')
  return data;
} catch (err) {
  console.log(err)
}
}
media.mutate = (fileToRead, fileToWrite, targetNucleotide, mutantNucleotide) => {
  // Content read from the original file
  const content = openFile(fileToRead);
  if(!content) {
    console.log('File is empty!');
    return 'File is empty'
  }
  const refinedContent = content.replace(targetNucleotide, mutantNucleotide);
  fs.writeFile(fileToWrite, refinedContent, (err) => {
  if (err) return console.log(err);
  console.log(`Content written to ${fileToWrite}\n`);
});
}

media.txtTranslate = (fileName) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if(err) {
      console.log(err);
      return err;
    }
    if(data.length === 0) {
      console.log('File is empty!!');
      return 'File is empty';
    }
    const refinedData = data.split('\n');
    console.log(`\nContent from ${fileName}`);
    console.log('Alien Codons or Codons with one or two nucleotide(s) will be quoted in backticks');
    for (let sequence of refinedData) {
      console.log(translate(sequence));
    }
  })
}


export default media;
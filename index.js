import media from './media';

const { mutate, txtTranslate } = media;


mutate('DNA.txt','normalDNA.txt', 'a', 'A');
mutate('DNA.txt','mutatedDNA.txt', 'a', 'T');

txtTranslate('normalDNA.txt');
txtTranslate('mutatedDNA.txt');








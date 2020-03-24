/* These regular expressions should match strings
containing one of the substrings described */

/ca[tr]/  //car and cat
/pr?op/  //pop and prop
/ferr(et|ari|y|)/  //ferret, ferry, and ferrari
/ious\b/  //Any word ending in ious
/\s[.,:;]/  //A whitespace character followed by . or , or : or ;
/\w{7}/  //A word longer than six letters
/\b[^\We]+\b/  //A word without the letter e (or E)

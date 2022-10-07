// 7 kyu
// ReOrdering

// There is a sentence which has a mistake in its ordering.

// The part with a capital letter should be the first word.

// Please build a function for re-ordering

// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'

// >>> re_ordering('Mano donowana')
// 'Mano donowana'

// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'

// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'

// ----------------------
// Parameters: Given string representing a sentence. Within sentence, only one word will have its first letter capitalized. 
// Return the sentence with same words in same order, except that one capitalized word should be the first word of sentence
// Examples:
// reOrdering('JoJo')                                                 -->  'JoJo'
// reOrdering('ming Yao')                                             -->  'Yao ming'
// reOrdering('Mano donowana')                                        -->  'Mano donowana'
// reOrdering('wario LoBan hello')                                    -->  'LoBan wario hello'
// reOrdering('bull color pig Patrick')                               -->  'Patrick bull color pig'
// reOrdering('jojo ddjajdiojdwo ana G nnibiial')                     -->  'G jojo ddjajdiojdwo ana nnibiial'
// reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z')  -->  'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
// reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z')  -->  'N a b c d e f g h i j k l m o p q r s t u v w x y z'
// reOrdering('is one of those rare names that s both exotic and simple Adira')   --> 
// 'Adira is one of those rare names that s both exotic and simple'
// reOrdering('is an older name than annabel Amabel and a lot more distinctive')  --> 
// 'Amabel is an older name than annabel and a lot more distinctive'
// Pseudocode: Split sentence with single space (ie, ' ') as delimiter
// Find the single word with its first letter capitalized
// Splice array to delete the capitalized word
// Unshift that word to first position of the array
// Join with space (ie, ' ') and return

function reOrdering(text){
    let spl = text.split` `;
    let ele = spl.find(x=>x.slice(0,1)===x.slice(0,1).toUpperCase());
    spl.splice(spl.indexOf(ele),1);
    spl.unshift(ele);
    return spl.join` `;
}
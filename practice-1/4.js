// get idea
// The idea is to use any comparison based sorting algorithm. In the used sorting algorithm, instead of using the default comparison, write a comparison function myCompare() and use it to sort numbers. Given two numbers X and Y, how should myCompare() decide which number to put first – we compare two numbers XY (Y appended at the end of X) and YX (X appended at the end of Y). If XY is larger, then X should come before Y in output, else Y should come before. 
// For example, let X and Y be 542 and 60
// To compare X and Y, we compare 54260 and 60542
// Since 60542 is greater than 54260, we put Y first

<?php

// a missing digit is substituted with a lowercase x
// find the missing digit
// example:
//input: "4 - 2 = x"
//outut: 2

$inputString = "40 - 22 = 1x";
function missingDigit($string) {

    if (strlen($string) < 1) {
        return null;
    }

    $stringToParts = explode(' ', $string);

    $firstNumber = $stringToParts[0];
    $secondNumber = $stringToParts[2];
    $operator = $stringToParts[1];
    $result = $stringToParts[4];

    if (preg_match('/[x]/', $firstNumber) == true) {
        $xIndex = strpos($firstNumber, 'x');

        for($i = 0; $i < 9; $i++)
        {
            $firstNumber = substr_replace($firstNumber, $i, $xIndex, 1);

            if(calculateOutcome($firstNumber, $secondNumber, $operator) == intval($result))
            {
                return $i;
            }
        }
    } else if (preg_match('/[x]/', $secondNumber) == true) {
        $xIndex = strpos($secondNumber, 'x');

        for($i = 0; $i < 9; $i++)
        {
            $secondNumber = substr_replace($secondNumber, $i, $xIndex, 1);

            if(calculateOutcome($firstNumber, $secondNumber, $operator) == intval($result))
            {
                return $i;
            }
        }
    } else {
        $xIndex = strpos($result, 'x');

        for($i = 0; $i < 9; $i++)
        {
            $result = substr_replace($result, $i, $xIndex, 1);

            if(calculateOutcome($firstNumber, $secondNumber, $operator) == intval($result))
            {
                return $i;
            }
        }
    }

    return null;
}

function calculateOutcome($firstNumber, $secondNumber, $operator) {
    switch ($operator) {
        case "+":
            return intval($firstNumber) + intval($secondNumber);
        case "-":
            return intval($firstNumber) - intval($secondNumber);
        case "*":
            return intval($firstNumber) * intval($secondNumber);
        case "/":
            return intval($firstNumber) / intval($secondNumber);
        default:
            return null;
    }
}

$result = missingDigit($inputString);
var_dump($result);
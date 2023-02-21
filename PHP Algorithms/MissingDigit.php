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
        $originalFirstNumber = $firstNumber;
        $start = 0;
        $end = 9;
    } else if (preg_match('/[x]/', $secondNumber) == true) {
        $originalSecondNumber = $secondNumber;
        $start = 0;
        $end = 9;
    } else {
        $originalResult = $result;
        $start = 0;
        $end = 9;
    }

    for ($i = $start; $i <= $end; $i++) {
        if (isset($originalFirstNumber)) {
            $firstNumber = str_replace("x", $i, $originalFirstNumber);
        } else if (isset($originalSecondNumber)) {
            $secondNumber = str_replace("x", $i, $originalSecondNumber);
        } else {
            $result = str_replace("x", $i, $originalResult);
        }

        $outcome = calculateOutcome($firstNumber, $secondNumber, $operator);

        if (intval($outcome) === intval($result)) {
            return $i;
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
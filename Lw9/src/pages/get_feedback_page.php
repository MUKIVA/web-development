<?php

function getUser(): void
    {
        $dataFeedback = [];
        $dataFeedback['completed'] = true;
        $email = strtolower(getPostParameter('email'));
        $dataFeedback['email'] = $email;
        if (file_exists("./data/$email.txt" ))
        {
            $dataFeedback['data'] = file_get_contents("./data/".$email.".txt");
        }
        else
        {
            $dataFeedback['completed'] = false;
        }
        feedbackPage($dataFeedback);
    }
?>
<?php

function getUser(): void
    {
        $dataFeedback = [];
        $dataFeedback['completed'] = true;
        $dataFeedback['email'] = strtolower(getPostParameter('email'));
        $dataFeedback['data'] = getFeedback($dataFeedback['email']);
        $dataFeedback['completed'] = $dataFeedback['data'] == [] ? false : true;
        feedbackPage($dataFeedback);
    }
?>
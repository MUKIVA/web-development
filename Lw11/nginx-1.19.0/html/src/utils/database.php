<?php
    include __DIR__ . '../../config/config.php';
    function database(): PDO
    {
        static $connection = null;
        if ($connection === null)
        {
            $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
        }
        return $connection;
    }

    function saveFeedback(array $feedback): void
    {
        $formDB = database();
        $name = $feedback['name'];
        $email = $feedback['email'];
        $country = $feedback['country'];
        $gender = $feedback['gender'];
        $message = $feedback['message'];

        $formDB->query("INSERT INTO `request`(`user_name`, `email`, `country`, `gender`, `message` ) VALUES('$name', '$email', '$country', '$gender', '$message')");
    }

    function getFeedback(string $email): array
    {
        $data = [];
        $formDB = database();
        $request = $formDB->prepare("
        SELECT 
            `email` AS `Почта`,
            `user_name` AS `Имя`,
            `country` AS `Страна`,
            `gender` AS `Пол`,
            `message` AS `Сообщение`
        FROM
            `request`
        WHERE
            email = ?;
        ");
        $request->execute([$email]);
        $data = $request->fetchAll(PDO::FETCH_ASSOC|PDO::FETCH_GROUP);
        return $data;
    }
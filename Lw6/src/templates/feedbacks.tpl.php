<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Feedback page</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=cyrillic" rel="stylesheet" >
    <link rel="stylesheet" href="./css/contact.css" >
    <meta charset="UTH-8" >
  </head>

  <body>
    <div class="write_module">
      <form action="feedbacks.php" method="POST"> 
        <p>Введите email</p>
        <input type="email" name="email" class="input_string" value="<?php echo $args['email'] ?? ''; ?>" require >
        <input type="submit" value="Отправить" class="send_button" >
      </form>
    </div>
    <?php
      if (isset($args['completed'])):
        if ($args['completed']):
          echo '<pre>';
            echo $args['data'];
          echo '</pre>';
        endif;
        if (!($args['completed'])):
          echo '<span class="non_completed_msg">Такого пользователя не существует</span>';
        endif;
      endif;
    ?>
  </body>
</html>
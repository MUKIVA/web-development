<div class="write_module">
  <form action="feedbacks.php" method="POST"> 
    <p>Введите email</p>
    <input type="email" name="email" class="input_string" value="<?php echo $args['email'] ?? ''; ?>" require >
    <input type="submit" value="Отправить" class="send_button" >
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
  </form>
</div>
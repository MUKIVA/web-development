<div id="write_module">
  <div class="grey_line"></div>
  <h4>НАПИШИ МНЕ</h4>
  <div class="grey_line"></div>
  <form action="index.php" method="POST">
    <p>
      Ваше имя <span>*</span>
      <span>
        <?php
          if (isset($args['name_error'])):
            echo $args['name_error'];
          endif;
        ?>
      </span>
    </p>
    <input class="input_string" type="text" name="name" value="<?php echo $args['name'] ?? ''; ?>">
    <p>
      Ваш email <span>*</span>
      <span>
        <?php
          if (isset($args['email_error'])):
            echo $args['email_error'];
          endif;
        ?>
      </span>
    </p>
    <input class="input_string" type="email" name="email" value="<?php echo $args['email'] ?? ''; ?>">
    <p>Откуда вы?</p>
    <select class="input_space" name="country">
      <option value="-" <?php if (isset($args['country'])): if ($args['country'] == '-'): echo 'selected'; endif; endif?>>-</option>
      <option value="Russia"<?php if (isset($args['country'])): if ($args['country'] == 'Russia'): echo 'selected'; endif; endif?>>Россия</option>
      <option value="other" <?php if (isset($args['country'])): if ($args['country'] == 'Other'): echo 'selected'; endif; endif?>>Другое</option> 
    </select>
    <p>Ваш пол</p>
    <input class="radio_male" type="radio" name="gender" value="male" id="gender_male" <?php if (isset($args['gender'])): if ($args['gender'] == 'мужской'): echo 'Checked'; endif; endif ?>><label for="gender_male">Мужской</label>
    <input class="radio_female" type="radio" name="gender" value="female" id="gender_female" <?php if (isset($args['gender'])): if ($args['gender'] == 'женский'): echo 'checked'; endif; endif ?>><label for="gender_female">Женский</label>
    <p>
      Ваше сообщение <span>*</span>
      <span>
        <?php
          if (isset($args['message_error'])):
            echo $args['message_error'];
          endif;
        ?>
      </span>
    </p>
    <textarea class="input_message" name="message" ><?php echo $args['message'] ?? ''; ?></textarea>
    <input id="send_button" type="submit" value="Отправить">
    <?php if (isset($args['сompleted'])):
      if ($args['сompleted']):
         echo "<span class=\"completed_msg\">Успех</span>";
       endif;
       if (!($args['сompleted'])):
         echo "<span class=\"non_completed_msg\">Провал</span>";
       endif;
     endif; ?>
  </form>
</div>
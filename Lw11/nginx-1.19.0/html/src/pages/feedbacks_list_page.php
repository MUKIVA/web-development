<?php
function feedBackPage(array $args = []): void
{
    renderTemplate('feedbacks.tpl.php', $args);
}
?>
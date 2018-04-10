<?
        $to = 'info@car-style.su';
        $subject = 'Новая заявка обратной связи с сайта car-style.su';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['contactName'].'</p>
                        <p>Телефон: '.$_POST['contactEmail'].'</p>         
                        <p> '$_POST['contactSubject']'</p>                
                        <p> '$_POST['contactMessage']'</p>               
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: название сайта <info@site.ru>\r\n"; 
        mail($to, $subject, $message, $headers);
?>
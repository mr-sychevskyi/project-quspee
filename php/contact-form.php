<?
    if((isset($_POST['email']))) {
            $to = 'info@quspee.com';
            $from = $_POST['email'];
            $subject = 'Message from Quspee';
            $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>First name: '.$_POST['first-name'].'</p>
                            <p>Last name: '.$_POST['last-name'].'</p>
                            <p>Email: '.$_POST['email'].'</p>
                            <p>Country: '.$_POST['country'].'</p>
                            <p>State: '.$_POST['usa-state'].'</p>

                            <hr/>

                            <p>Choosed: '.$_POST['choosed'].'</p>

                            <h4>Total: '.$_POST['total'].'</h4>
                        </body>
                    </html>';
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= "From: ".$from." \r\n";
            $headers .= "X-Priority: 3\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Transfer-Encoding: 8bit\r\n";
            mail($to, $subject, $message, $headers);
    }
?>
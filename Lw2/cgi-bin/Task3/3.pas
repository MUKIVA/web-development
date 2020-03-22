PROGRAM DearName(INPUT, OUTPUT);
USES
  DOS;
VAR
  Name: STRING;
BEGIN {DearName}
  WRITELN('Content-Type: Text/plain');
  WRITELN;
  Name := GetEnv('QUERY_STRING');
  IF (POS('name=', Name) = 1)
  THEN                 
    DELETE(Name, 1, POS('=', Name))
  ELSE
    Name := ' ';
  IF Name = ' '
  THEN
    WRITELN('Hello Anonymous')
  ELSE
    WRITELN('Hello dear, ', Name, '!')    
END. {DearName}


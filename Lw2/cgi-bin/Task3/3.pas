PROGRAM DearName(INPUT, OUTPUT);
USES
  DOS;
VAR
  Name: STRING;
BEGIN {DearName}
  WRITELN('Content-Type: Text/plain');
  WRITELN;
  Name := GetEnv('QUERY_STRING');
  IF (POS('Name=', Name))>0
  THEN
    BEGIN                   
      DELETE(Name, 1, POS('Name=', Name));
      DELETE(Name, 1, POS('=', Name))
    END;
  IF Name = ''
  THEN
    WRITELN('Hello Anonymous')
  ELSE
    WRITELN('Hello dear, ', Name, '!')    
END. {DearName}


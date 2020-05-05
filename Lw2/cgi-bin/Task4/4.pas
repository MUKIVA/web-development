PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;  
FUNCTION CleanSpace(Str: STRING): STRING;
VAR
  Index: INTEGER;
BEGIN
  WHILE POS('%20', Str) > 0
  DO
    DELETE(Str, POS('%20', Str), 3);
  CleanSpace := Str
END;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Str: STRING;
BEGIN
  Str := GetEnv('QUERY_STRING');
  Str := CleanSpace(Str);
  IF (Str[POS(Key, Str)-1] = '&') OR (POS(Key, Str) = 1)
  THEN
    BEGIN
      DELETE(Str, 1, POS(Key, Str)-1);
      IF COPY(Str, 1, POS('=', Str)-1) = Key
      THEN
        BEGIN
          DELETE(Str, 1, POS('=', Str));
          IF (POS('&', Str) <> 0)
          THEN
            GetQueryStringParameter := COPY(Str, 1, POS('&', Str)-1)
          ELSE
            GetQueryStringParameter := COPY(Str, 1, LENGTH(Str))
        END
      ELSE
        GetQueryStringParameter := ''     
    END    
  ELSE
    GetQueryStringParameter := ''     
END;
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}


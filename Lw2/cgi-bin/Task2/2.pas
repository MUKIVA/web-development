PROGRAM SarahRevere(INPUT, OUTPUT);
USES
   DOS;
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: Text/plain');
  WRITELN;
  IF GetEnv('QUERY_STRING') = 'lanterns=1'
  THEN
    WRITELN('Land')
  ELSE
    IF GetEnv('QUERY_STRING') = 'lanterns=2'
    THEN
      WRITELN('Sea')
    ELSE
      WRITELN('Sarah didn''t say')
END. {WorkWithQueryString}

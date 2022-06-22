import linecache as ls

def file_to_arguments(filename, line=0,start_line=0,end_line=-1):
    '''
    Functie die een dict returned in de vorm van:
    {'arguments': [......], size: int, lines: range(....)}
    '''
    if end_line == -1:
        with open(filename, 'r') as f:
            end_line = len(f.readlines())
    args = list(map(str.strip, ls.getlines(filename, range(start_line, end_line))))
    lines = [str(r) for r in range(start_line,end_line)]
    return {'arguments': args, 'size': len(args), 'lines': lines}

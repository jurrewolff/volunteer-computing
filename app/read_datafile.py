import linecache as ls
import subprocess

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


def get_line_from_file(filename, line=0):
    '''
    Functie die een dict returned in de vorm van:
    {'arguments': [......], size: int, lines: range(....)}
    '''
    args = ls.getline(filename, line+1)
    return {'arguments': args.strip(), 'size': 1, 'lines': line}


def sort_file(filename):
    f = open("download", "w+")
    # f = open(filename, "w+")
    test = subprocess.run(['sort','-k1','-n', filename], capture_output=True, text=True)
    r = test.stdout.split("\n")
    for line in r[:-1]:
        s = line.split(" ", 1)
        f.write(s[1] + "\n")
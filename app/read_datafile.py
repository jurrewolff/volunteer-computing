"""
Date:               29-06-2022
Contributers:       PSE Group G

File description:
Helper functions for reading files.

"""

import linecache as ls
import subprocess

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
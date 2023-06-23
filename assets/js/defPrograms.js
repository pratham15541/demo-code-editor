'use strict';
const lMode1 = 'csharp';
const lang1 = '//Progman.Program.Main is the entry point for your code. Don\'t change it.\n//Microsoft (R) Visual C# Compiler version 2.9.0.63208 (958f2354)\n\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text.RegularExpressions;\n\nnamespace Progman\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            //Your code goes here\n            Console.WriteLine("Hello, world!");\n        }\n    }\n}';
const cArgs1 = '';
const lMode2 = 'vbscript';
const cArgs2 = '';
const lang2 = "'Progman.Program.Main is the entry point for your code. Don't change it.\n'Microsoft (R) Visual Basic Compiler version 2.9.0.63208 (958f2354)\n\nImports System\nImports System.Collections.Generic\nImports System.Linq\nImports System.Text.RegularExpressions\n\nNamespace Progman\n    Public Module Program\n        Public Sub Main(args() As string)\n            'Your code goes here\n            Console.WriteLine(\"Hello, world!\")\n        End Sub\n    End Module\nEnd Namespace";
const lMode3 = 'fsharp';
const cArgs3 = '';
const lang3 = '//F# Compiler for F# 4.0 (Open Source Edition)\n\nopen System\nprintfn "Hello, World!"';
const lMode4 = 'java';
const cArgs4 = '';
const lang4 = "//'main' method must be in a class 'Program'.\n//openjdk version '11.0.5' \n\nimport java.util.*;\nimport java.lang.*;\n\nclass Progman\n{  \n    public static void main(String args[])\n    {\n        System.out.println(\"Hello, World!\");\n    }\n}";
const lMode5 = 'python';
const cArgs5 = '';
const lang5 = '#Python 3.6.9\n\nprint("Hello, world!")\n';
const lMode6 = 'c_cpp';
const cArgs6 = '-Wall -std=gnu99 -O2 -o a.out source_file.c';
const lang6 = '//gcc 7.4.0\n\n#include  <stdio.h>\n\nint main(void)\n{\n    printf("Hello, world!\\n");\n    return 0;\n}';
const lMode7 = 'c_cpp';
const cArgs7 = '-Wall -std=c++14 -O2 -o a.out source_file.cpp';
const lang7 = '//g++  7.4.0\n\n#include <iostream>\n\nint main()\n{\n    std::cout << "Hello, world!\\n";\n}';
const lMode8 = 'php';
const cArgs8 = '';
const lang8 = '<?php //php 7.2.24\n\necho "Hello, world! "\n\n?>';
const lMode9 = 'pascal';
const cArgs9 = '';
const lang9 = "//fpc 3.0.4\n\nprogram HelloWorld;\n\nbegin\n    writeln('Hello, world!');\nend.\n";
const lMode10 = 'objectivec';
const cArgs10 = '-MMD -MP -DGNUSTEP -DGNUSTEP_BASE_LIBRARY=1 -DGNU_GUI_LIBRARY=1 -DGNU_RUNTIME=1 -DGNUSTEP_BASE_LIBRARY=1 -fno-strict-aliasing -fexceptions -fobjc-exceptions -D_NATIVE_OBJC_EXCEPTIONS -pthread -fPIC -Wall -DGSWARN -DGSDIAGNOSE -Wno-import -g -O2 -fgnu-runtime -fconstant-string-class=NSConstantString -I. -I /usr/include/GNUstep -I/usr/include/GNUstep -o a.out source_file.m -lobjc -lgnustep-base';
const lang10 = '//gcc 7.4.0\n\n#import <Foundation/Foundation.h>\n\nint main (int argc, const char * argv[])\n{\n    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];\n    NSLog (@"Hello, World!");\n    [pool drain];\n    return 0;\n}';
const lMode11 = 'haskell';
const cArgs11 = '-o a.out source_file.hs';
const lang11 = '--ghc 8.0.2\n\nmain = print $ "Hello, world!"';
const lMode12 = 'ruby';
const cArgs12 = '';
const lang12 = '#ruby 2.5.1 \n\nputs "Hello, world!"';
const lMode13 = 'perl';
const cArgs13 = '';
const lang13 = '#perl 5.26.1 \n\nprint "Hello World\\n";';
const lMode14 = 'lua';
const cArgs14 = '';
const lang14 = '--lua 5.3\n\nprint ("Hello, World!")';
const lMode15 = 'assembly_x86';
const cArgs15 = '';
const lang15 = ";nasm 2.13.02\n\nsection .data\n    hello:     db 'Hello world!',10    ; 'Hello world!' plus a linefeed character\n    helloLen:  equ $-hello             ; Length of the 'Hello world!' string\n\nsection .text\n\tglobal _start\n\n_start:\n\tmov eax,4            ; The system call for write (sys_write)\n\tmov ebx,1            ; File descriptor 1 - standard output\n\tmov ecx,hello        ; Put the offset of hello in ecx\n\tmov edx,helloLen     ; helloLen is a constant, so we don't need to say\n\t                     ;  mov edx,[helloLen] to get it's actual value\n\tint 80h              ; Call the kernel\n\n\tmov eax,1            ; The system call for exit (sys_exit)\n\tmov ebx,0            ; Exit with return code of 0 (no error)\n\tint 80h;";
const lMode16 = 'sqlserver';
const cArgs16 = '';
const lang16 = "--Sql Server 2014 Express Edition\n--Batches are separated by 'go'\n\nselect @@version as 'sql server version'";
const lMode17 = 'javascript';
const cArgs17 = '';
const lang17 = '//nodejs v8.10.0\n\nconsole.log("Hello, world!")';
const lMode18 = 'lisp';
const cArgs18 = '';
const lang18 = ';gnu clisp  2.49.60\n\n(print "Hello, world!")';
const lMode19 = 'prolog';
const cArgs19 = '';
const lang19 = "%commands to the interpreter are submitted from stdin input ('show input' box below)\n%'halt.' will be automatically appended to stdin input.\n%swi-prolog 7.6.4\n\nprogram :- write('Hello, world!').\n:- program.";
const lMode20 = 'golang';
const cArgs20 = '-o a.out source_file.go';
const lang20 = '//go 1.10.4\n\npackage main  \nimport "fmt" \n\nfunc main() { \n    fmt.Printf("hello, world\\n") \n}';
const lMode21 = 'scala';
const cArgs21 = '';
const lang21 = "//'Progman' class is the entry point for your code.\n//Don't declare a package.\n//scala 2.13.1\n\nobject Main extends App {\n    println(\"Hello, World!\")\n }";
const lMode22 = 'scheme';
const cArgs22 = '';
const lang22 = ';guile 2.2.3\n\n(display "Hello, World!")';
const lMode23 = 'javascript';
const cArgs23 = '';
const lang23 = '//nodejs v8.10.0\n\nconsole.log("Hello, World!");';
const lMode24 = 'python';
const cArgs24 = '';
const lang24 = '#python 3.6.9\n\nprint ("Hello, world!")\n';
const lMode25 = 'matlab';
const cArgs25 = '';
const lang25 = "%To view plots after 'plot' (and other plot-producing commands) this command must follow: 'print -dpng some_unique_plot_name.png;'\n%It exports current plot to png image which then is sent to your browser\n%GNU Octave 4.2.2\n\nx=1:0.1:10;\nplot(x, sin(x));\nprint -dpng some_name.png;\n";
const lMode26 = 'c_cpp';
const cArgs26 = '-Wall -std=gnu99 -O2 -o a.out source_file.c';
const lang26 = '//clang 6.0.0\n\n#include  <stdio.h>\n\nint main(void)\n{\n    printf("Hello, world!\\n");\n    return 0;\n}';
const lMode27 = 'c_cpp';
const cArgs27 = '-Wall -std=c++14 -stdlib=libc++ -O2 -o a.out source_file.cpp';
const lang27 = '//clang 6.0.0\n\n#include <iostream>\n\nint main()\n{\n    std::cout << "Hello, world!\\n";\n}';
const lMode28 = 'c_cpp';
const cArgs28 = 'source_file.cpp -o a.exe /EHsc /MD /I C:\\boost_1_60_0 /link /LIBPATH:C:\\boost_1_60_0\\stage\\lib';
const lang28 = '//Microsoft (R) C/C++ Optimizing Compiler Version 19.00.23506 for x64\n\n#include <iostream>\n\nint main()\n{\n    std::cout << "Hello, world!\\n";\n}';
const lMode29 = 'c_cpp';
const cArgs29 = 'source_file.c -o a.exe';
const lang29 = '//Microsoft (R) C/C++ Optimizing Compiler Version 19.00.23506 for x64\n\n#include  <stdio.h>\n\nint main(void)\n{\n    printf("Hello, world!\\n");\n    return 0;\n}';
const lMode30 = 'd';
const cArgs30 = 'source_file.d -ofa.out';
const lang30 = '//DMD64 D Compiler 2.091.0\n\nimport std.stdio;\n \nvoid main()\n{\n    writeln("Hello, World!");\n}';
const lMode31 = 'r';
const cArgs31 = '';
const lang31 = '#R version 3.4.4 \n  \nprint("Hello, world!")\n';
const lMode32 = 'tcl';
const cArgs32 = '';
const lang32 = '#tclsh 8.6\n\nputs "Hello, world!"\n';
const lMode33 = 'mysql';
const cArgs33 = '';
const lang33 = "#MySQL 5.7.12\n#please drop objects you've created at the end of the script \n#or check for their existance before creating\n#'\\' is a delimiter\n\nselect version() as 'mysql version'";
const lMode34 = 'pgsql';
const cArgs34 = '';
const lang34 = "--PostgreSQL 9.6\n--'\\' is a delimiter\n\nselect version() as postgresql_version";
const lMode35 = 'sqlserver';
const cArgs35 = '';
const lang35 = "--Oracle Database 18c Express Edition Release 18.0.0.0.0 - Production\n--please drop objects you've created at the end of the script \n--or check for their existance before creating\n--'\\' is a delimiter\n\nselect banner as \"oracle version\" from v$version";
const lMode36 = 'html';
const cArgs36 = '';
const lang36 = '<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello, world!</title>\n\t<meta charset="utf-8" />\n</head>\n<body>\n    <p>Hello World!</p>\n</body>\n</html>\n';
const lMode37 = 'swift';
const cArgs37 = '';
const lang37 = '//swift 5.1.5\n\nprint("Hello, world!")';
const lMode38 = 'sh';
const cArgs38 = '';
const lang38 = '#!/bin/bash\n# GNU bash, version 4.4.20\n\necho "Hello, world!";\n';
const lMode39 = 'ada';
const cArgs39 = '';
const lang39 = '--GNAT 8.3.0\n\nwith Ada.Text_IO; use Ada.Text_IO;\nprocedure Hello is\nbegin\n    Put_Line ("Hello, world!");\nend Hello;';
const lMode40 = 'erlang';
const cArgs40 = '';
const lang40 = '%Erlang 10.6.4\n%escript will ignore the first line\n\nmain(_) ->\n\tio:format("Hello, world!").\n';
const lMode41 = 'elixir';
const cArgs41 = '';
const lang41 = '#Elixir 1.10.2\n\nIO.puts "Hello, world!"\n';
const lMode42 = 'ocaml';
const cArgs42 = '';
const lang42 = '(*The Ocaml compiler, version 4.05.0*)\n\nprint_string "Hello, world!\\n";;\n';
const lMode43 = 'kotlin';
const cArgs43 = '';
const lang43 = '//Kotlin 1.1\n\nfun main(args: Array<String>) {\n    println("Hello, world!")\n}';
const lMode44 = '';
const cArgs44 = '';
const lang44 = '';
const lMode45 = 'fortran';
const cArgs45 = '';
const lang45 = '!gfortran, gcc version 7.4.0\n\nprogram hello\n    print *, "Hello World!"\nend program hello';
const lMode46 = 'rust';
const cArgs46 = '';
const lang46 = '//rustc 1.39.0\n\nfn main() {\n    println!("Hello, world!");\n}';
const lMode47 = 'clojure';
const cArgs47 = '';
const lang47 = ';;clojure 1.9.0\n\n(println "Hello world!")';
const langarr = [
  lang1,
  lang2,
  lang3,
  lang4,
  lang5,
  lang6,
  lang7,
  lang8,
  lang9,
  lang10,
  lang11,
  lang12,
  lang13,
  lang14,
  lang15,
  lang16,
  lang17,
  lang18,
  lang19,
  lang20,
  lang21,
  lang22,
  lang23,
  lang24,
  lang25,
  lang26,
  lang27,
  lang28,
  lang29,
  lang30,
  lang31,
  lang32,
  lang33,
  lang34,
  lang35,
  lang36,
  lang37,
  lang38,
  lang39,
  lang40,
  lang41,
  lang42,
  lang43,
  '',
  lang45,
  lang46,
  lang47,
];
const cArgsArr = [
  '',
  '',
  '',
  '',
  '',
  cArgs6,
  cArgs7,
  '',
  '',
  cArgs10,
  cArgs11,
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  cArgs20,
  '',
  '',
  '',
  '',
  '',
  cArgs26,
  cArgs27,
  cArgs28,
  cArgs29,
  cArgs30,
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];
const clModeArr = [
  lMode1,
  lMode2,
  lMode3,
  'java',
  lMode5,
  lMode6,
  lMode7,
  'php',
  lMode9,
  lMode10,
  lMode11,
  'ruby',
  'perl',
  'lua',
  lMode15,
  lMode16,
  lMode17,
  'lisp',
  lMode19,
  lMode20,
  'scala',
  lMode22,
  lMode23,
  lMode24,
  lMode25,
  'c_cpp',
  'c_cpp',
  'c_cpp',
  'c_cpp',
  'd',
  'r',
  'tcl',
  'mysql',
  'pgsql',
  lMode35,
  'html',
  'swift',
  'sh',
  'ada',
  lMode40,
  lMode41,
  'ocaml',
  lMode43,
  '',
  lMode45,
  'rust',
  lMode47,
];

function loadLang(n) {
  (languageCode = n),
  (compilerArgs = `${cArgsArr[n - 1]}`),
  (program = langarr[n - 1]),
  (langMode = clModeArr[n - 1]),
  updateLang();
}

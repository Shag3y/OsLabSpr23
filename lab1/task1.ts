Script started on 2023-02-19 19:34:32+05:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="79" LINES="29"]
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

[?2004h]0;sami@sami-VirtualBox: ~[01;32msami@sami-VirtualBox[00m:[01;34m~[00m$ string s[K[Ks /bio[Kn/bash
[?2004l
Command 'strings' not found, but can be installed with:
sudo apt install binutils
[?2004h]0;sami@sami-VirtualBox: ~[01;32msami@sami-VirtualBox[00m:[01;34m~[00m$ sudo ap t[K[Kt o[Kinstall bu[Kinutils
[?2004l
[sudo] password for sami: 

Reading package lists... 0%

Reading package lists... 100%

Reading package lists... Done


Building dependency tree... 0%

Building dependency tree... 0%

Building dependency tree... 50%

Building dependency tree... 50%

Building dependency tree... Done


Reading state information... 0% 

Reading state information... 0%

Reading state information... Done

The following package was automatically installed and is no longer required:
  systemd-hwe-hwdb
Use 'sudo apt autoremove' to remove it.
The following additional packages will be installed:
  binutils-common binutils-x86-64-linux-gnu libbinutils libctf-nobfd0 libctf0
Suggested packages:
  binutils-doc
The following NEW packages will be installed:
  binutils binutils-common binutils-x86-64-linux-gnu libbinutils
  libctf-nobfd0 libctf0
0 upgraded, 6 newly installed, 0 to remove and 280 not upgraded.
Need to get 3,424 kB of archives.
After this operation, 14.7 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
[33m
0% [Working][0m
            
Get:1 http://pk.archive.ubuntu.com/ubuntu jammy-updates/main amd64 binutils-common amd64 2.38-4ubuntu2.1 [221 kB]
[33m
0% [1 binutils-common 5,365 B/221 kB 2%][0m[33m
2% [1 binutils-common 73.1 kB/221 kB 33%][0m[33m
                                         
9% [Working][0m
            
Get:2 http://pk.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libbinutils amd64 2.38-4ubuntu2.1 [661 kB]
[33m
9% [2 libbinutils 5,365 B/661 kB 1%][0m[33m
20% [2 libbinutils 487 kB/661 kB 74%][0m
                                     
Get:3 http://pk.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libctf-nobfd0 amd64 2.38-4ubuntu2.1 [107 kB]
[33m
27% [3 libctf-nobfd0 1,690 B/107 kB 2%][0m[33m
                                       
33% [Waiting for headers][0m
                         
Get:4 http://pk.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libctf0 amd64 2.38-4ubuntu2.1 [103 kB]
[33m
33% [4 libctf0 1,689 B/103 kB 2%][0m[33m
                                 
39% [Waiting for headers][0m
                         
Get:5 http://pk.archive.ubuntu.com/ubuntu jammy-updates/main amd64 binutils-x86-64-linux-gnu amd64 2.38-4ubuntu2.1 [2,328 kB]
[33m
39% [5 binutils-x86-64-linux-gnu 98 B/2,328 kB 0%][0m[33m
77% [5 binutils-x86-64-linux-gnu 1,631 kB/2,328 kB 70%][0m[33m
83% [5 binutils-x86-64-linux-gnu 1,908 kB/2,328 kB 82%][0m[33m
85% [5 binutils-x86-64-linux-gnu 1,953 kB/2,328 kB 84%][0m[33m
92% [5 binutils-x86-64-linux-gnu 2,273 kB/2,328 kB 98%][0m[33m
92% [5 binutils-x86-64-linux-gnu 2,273 kB/2,328 kB 98%][0m[33m
92% [5 binutils-x86-64-linux-gnu 2,273 kB/2,328 kB 98%][0m[33m
                                                       
97% [Waiting for headers][0m
                         
Get:6 http://pk.archive.ubuntu.com/ubuntu jammy-updates/main amd64 binutils amd64 2.38-4ubuntu2.1 [3,198 B]
[33m
97% [6 binutils 3,198 B/3,198 B 100%][0m[33m
                                     
100% [Working][0m
              
Fetched 3,424 kB in 5s (635 kB/s)

7[0;28r8[1ASelecting previously unselected package binutils-common:amd64.
(Reading database ... 
(Reading database ... 5%
(Reading database ... 10%
(Reading database ... 15%
(Reading database ... 20%
(Reading database ... 25%
(Reading database ... 30%
(Reading database ... 35%
(Reading database ... 40%
(Reading database ... 45%
(Reading database ... 50%
(Reading database ... 55%
(Reading database ... 60%
(Reading database ... 65%
(Reading database ... 70%
(Reading database ... 75%
(Reading database ... 80%
(Reading database ... 85%
(Reading database ... 90%
(Reading database ... 95%
(Reading database ... 100%
(Reading database ... 196287 files and directories currently installed.)
Preparing to unpack .../0-binutils-common_2.38-4ubuntu2.1_amd64.deb ...
7[29;0f[42m[30mProgress: [  0%][49m[39m [.........................................................] 87[29;0f[42m[30mProgress: [  4%][49m[39m [##.......................................................] 8Unpacking binutils-common:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [  8%][49m[39m [####.....................................................] 8Selecting previously unselected package libbinutils:amd64.
Preparing to unpack .../1-libbinutils_2.38-4ubuntu2.1_amd64.deb ...
7[29;0f[42m[30mProgress: [ 12%][49m[39m [######...................................................] 8Unpacking libbinutils:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 16%][49m[39m [#########................................................] 8Selecting previously unselected package libctf-nobfd0:amd64.
Preparing to unpack .../2-libctf-nobfd0_2.38-4ubuntu2.1_amd64.deb ...
7[29;0f[42m[30mProgress: [ 20%][49m[39m [###########..............................................] 8Unpacking libctf-nobfd0:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 24%][49m[39m [#############............................................] 8Selecting previously unselected package libctf0:amd64.
Preparing to unpack .../3-libctf0_2.38-4ubuntu2.1_amd64.deb ...
7[29;0f[42m[30mProgress: [ 28%][49m[39m [###############..........................................] 8Unpacking libctf0:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 32%][49m[39m [##################.......................................] 8Selecting previously unselected package binutils-x86-64-linux-gnu.
Preparing to unpack .../4-binutils-x86-64-linux-gnu_2.38-4ubuntu2.1_amd64.deb ...
7[29;0f[42m[30mProgress: [ 36%][49m[39m [####################.....................................] 8Unpacking binutils-x86-64-linux-gnu (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 40%][49m[39m [######################...................................] 8Selecting previously unselected package binutils.
Preparing to unpack .../5-binutils_2.38-4ubuntu2.1_amd64.deb ...
7[29;0f[42m[30mProgress: [ 44%][49m[39m [#########################................................] 8Unpacking binutils (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 48%][49m[39m [###########################..............................] 8Setting up binutils-common:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 52%][49m[39m [#############################............................] 87[29;0f[42m[30mProgress: [ 56%][49m[39m [###############################..........................] 8Setting up libctf-nobfd0:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 60%][49m[39m [##################################.......................] 87[29;0f[42m[30mProgress: [ 64%][49m[39m [####################################.....................] 8Setting up libbinutils:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 68%][49m[39m [######################################...................] 87[29;0f[42m[30mProgress: [ 72%][49m[39m [#########################################................] 8Setting up libctf0:amd64 (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 76%][49m[39m [###########################################..............] 87[29;0f[42m[30mProgress: [ 80%][49m[39m [#############################################............] 8Setting up binutils-x86-64-linux-gnu (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 84%][49m[39m [###############################################..........] 87[29;0f[42m[30mProgress: [ 88%][49m[39m [##################################################.......] 8Setting up binutils (2.38-4ubuntu2.1) ...
7[29;0f[42m[30mProgress: [ 92%][49m[39m [####################################################.....] 87[29;0f[42m[30mProgress: [ 96%][49m[39m [######################################################...] 8Processing triggers for libc-bin (2.35-0ubuntu3.1) ...
Processing triggers for man-db (2.10.2-1) ...

7[0;29r8[1A[J[?2004h]0;sami@sami-VirtualBox: ~[01;32msami@sami-VirtualBox[00m:[01;34m~[00m$ string[K[K[K[K[K[Ksc[Ktrings /bin.bashj[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Ksudo apt install binutils[8Ptrings /bin/bash
[?2004l
/lib64/ld-linux-x86-64.so.2
 $DJ
CDDB
E`% 
0`0 	
"BB1
B8: 
0D@kB
 9E4
NR l
 "?$aD
!A8H
h% H0A
Hap5
@ E<
($B 
d> 7
`	0 
A!I`
	!C)
&51H
e")T8*C8
NAo`
`0Tr@
oETj
U_Ey
oMOI;r
 h^k_
U7cMu=O
4Yx,
]bv~
iFbxY
][1qo
,%2R
w=e%w
R16XM
H%MG>O}F
7'.c
0Sq3-l
dq83-
Q+ld
G;iR
JB,+S
	rJb
I7Fw]
SW\o1
\3^-
\cK^
=Un#|
2BTz:
	9q_
;CbIw`
|81t
wnsB
3\H 
]SU--
Z9Gbu
3B<TE
h OG
@M>>o
G",[
)d"4y
}l0zx
2j	C
^MD*
:BQCI
[uiy
H0[Zb
{EXJw
"hjg
{k~[v
;-jS
Kv4M
)zkI
:*]2Vfk
|>8W
A`(^rM
?Bas0&
'6mo
,zZ/
IJxV
E>$a
'aWr
n9Or/yo
z`DQ
S'&6i
'&%L:
U.|3d
AC!)\
-}KM
Wza8$F
}=:q
jPl8
C:uY
D3T9
lz6Y
6bt}
gbLE
jOpp
.Af#
jl&3
Ut10
G su
1jx;
`=b`
=3%>l2}
7-*3
^ry>
% "p
]C$.<
WqL_b_
a<\v
N.6mO
g^/@_
X* t\5MS
)Nd9
q[E~
L`{6
% o7
hvyd55
W4=%-
CT5N
pRDQ
7<HV`G6
T {1
__cxa_finalize
__libc_start_main
strrchr
getpwuid
strcpy
endpwent
dcgettext
fcntl
__ctype_b_loc
strstr
stdout
fflush
stderr
setresuid
setresgid
gethostname
__stack_chk_fail
__fprintf_chk
fputs
strchr
fputc
fileno
memcpy
strncpy
localtime
__strcpy_chk
__sprintf_chk
ttyname
strftime
__memmove_chk
getcwd
clearerr
mbrtowc
memset
strtol
__sigsetjmp
sigprocmask
putchar
getuid
getgid
geteuid
getegid
gettimeofday
__printf_chk
isatty
strncmp
lseek
dup2
__errno_location
fstat
getgroups
memmove
sysconf
wcswidth
getdtablesize
group_member
confstr
strtoimax
fclose
__vfprintf_chk
localeconv
__ctype_get_mb_cur_max
strnlen
__memcpy_chk
fwrite
strpbrk
__fpurge
ferror
sigemptyset
sigaddset
calloc
killpg
__snprintf_chk
getpid
getppid
qsort
__longjmp_chk
tzset
__environ
fdopen
tcsetattr
imaxdiv
tcgetpgrp
strsignal
setpgid
sigaction
tcgetattr
tcsetpgrp
mbtowc
wcschr
wcsdup
strncasecmp
__libc_current_sigrtmax
__libc_current_sigrtmin
strcasecmp
wcslen
iswupper
towlower
sigismember
sigdelset
strcoll
__asprintf_chk
setservent
getservent
endservent
setgrent
getgrent
endgrent
strcat
fopen
fgets
__strncpy_chk
setlocale
iconv_close
bindtextdomain
strcasestr
dlopen
dlsym
dlclose
dlerror
unlink
dcngettext
getrlimit
umask
__mbrlen
getrusage
setrlimit
__vsnprintf_chk
wcscoll
wcsncmp
__ctype_tolower_loc
wcscmp
wctob
iswctype
wmemchr
mbsinit
strtold
strtoumax
opendir
readdir
closedir
strchrnul
mbsnrtowcs
wcrtomb
setvbuf
getpeername
readlink
iswprint
strdup
setitimer
pselect
__fdelt_chk
ioctl
getrandom
wcwidth
putenv
unsetenv
regcomp
regexec
regfree
faccessat
getaddrinfo
socket
freeaddrinfo
gai_strerror
pathconf
mktemp
mkstemp
mkdtemp
iswalnum
__ctype_toupper_loc
iswlower
towupper
wctomb
iconv
iconv_open
setpwent
getpwent
tcflow
memcmp
rename
fnmatch
chown
getpwnam
nl_langinfo
chdir
fchmod
_ITM_deregisterTMCloneTable
__gmon_start__
_ITM_registerTMCloneTable
tgetnum
tputs
tgoto
tgetent
tgetflag
tgetstr
libtinfo.so.6
libc.so.6
sigwinch_sighandler
sh_modcase
parse_shellopts
strvec_search
parse_string
_rl_set_normal_color
protected_mode
rl_show_char
rl_byte_oriented
rl_filename_quoting_desired
search_for_command
_rl_eof_char
xdupmbstowcs
_rl_start_using_history
shell_glob_filename
_rl_intr_char
sourcenest_max
rl_outstream
sh_get_env_value
uitos
clean_itemlist
rl_discard_keymap
rl_vi_domove
utf8_mbsmbchar
declare_doc
rl_digit_argument
count_all_jobs
command_word_completion_function
xwcsrtombs
rl_executing_key
wcsnwidth
array_dequote_escapes
find_variable
coproc_active
default_columns
running_trap
break_doc
jobs_doc
utf8_mblen
dirspell
coproc_fdrestore
fmtulong
_rl_last_c_pos
shopt_setopt
array_dispose_element
set_shellopts
_rl_fix_last_undo_of_type
pop_args
_rl_isearch_dispatch
_rl_block_sigint
lastpipe_opt
no_exit_on_failed_exec
should_ignore_glob_matches
duplicate_buffered_stream
rl_bind_key
rl_completion_append_character
bashline_reset
rl_begin_undo_group
getifs
executing_builtin
rl_input_available_hook
all_digits
_rl_clean_up_for_exit
rl_unix_filename_rubout
tempvar_list
completions_to_stringlist
get_current_prompt_level
_hs_history_patsearch
discard_last_procsub_child
pat_subst
add_or_supercede_exported_var
rl_insert_text
rl_replace_from_history
show_name_attributes
top_level_mask
bash_initialize_history
unbind_variable_noref
_rl_input_available
the_printed_command
add_unwind_protect
_rl_want_redisplay
rl_tilde_expand
var_lookup
fd_ispipe
rl_tty_set_default_bindings
save_proc_status
no_symbolic_links
strvec_from_word_list
execute_array_command
expand_string_unsplit_to_string
reset_mail_timer
the_printed_command_except_trap
_rl_free_match_list
set_default_locale
make_while_command
assoc_patsub
emacs_standard_keymap
executing_line_number
localvar_unset
check_dev_tty
_rl_keymap
reset_shell_options
buffered_ungetchar
yynerrs
cleanup_the_pipeline
u32tocesc
rl_vi_end_word
wmatchlen
read_tty_cleanup
dispose_function_def_contents
rl_reset_after_signal
restricted_shell
terminate_immediately
rl_emacs_editing_mode
_rl_push_executing_macro
history_set_history_state
hash_doc
zwrite
array_shift
signal_is_trapped
_rl_suppress_redisplay
bash_tilde_expand
ulimit_builtin
logout_doc
_rl_free_undo_list
rl_vi_movement_mode
_rl_init_terminal_io
get_dirstack_from_string
rl_vi_column
zmapfd
select_doc
wdcache
gather_here_documents
_rl_show_mode_in_prompt
rl_get_termcap
rl_prompt
waiting_for_child
print_rlimtype
dstack
_rl_fix_mark
rl_forced_update_display
_rl_backspace
trim_pathname
add_history_time
run_debug_trap
history_quoting_state
close_fd_bitmap
break_builtin
localvar_inherit
find_variable_for_assignment
sv_histtimefmt
close_buffered_stream
bash_getcwd_errstr
_rl_callback_data
_rl_digit_value
breaking
history_lines_in_file
glob_star
convert_var_to_array
rl_unix_line_discard
bash_copyright
subshell_envp
remember_mail_dates
fg_doc
builtin_error
builtin_address
_rl_current_display_line
_rl_skip_completed_text
remove_backslashes
free_mail_files
parser_error
rl_special_prefixes
rl_backward_kill_word
rl_last_func
_rl_executing_keyseq_size
make_variable_value
command_errstr
coproc_fdchk
mailstat
expand_words_no_vars
u32cconv
it_arrayvars
glob_patscan_wc
reader_loop
rl_kill_region
rl_forward_byte
rl_noninc_forward_search
local_exported_variables
sh_syntabsiz
rl_completion_query_items
coproc_flush
make_command
local_builtin
rl_set_mark
hostname_list_initialized
find_path_file
assoc_insert
file_exists
_rl_to_upper
zcatfd
sv_execignore
caller_doc
expand_words_shellexp
rl_bind_keyseq_if_unbound
_rl_uppercase_p
rl_bind_keyseq
which_set_flags
rltty_set_default_bindings
ifs_firstc
strcreplace
caller_builtin
bind_keyseq_to_unix_command
execute_variable_command
assoc_to_kvpair
_rl_refresh_line
builtin_warning
exit_immediately_on_error
max_input_history
where_history
_rl_dispatching_keymap
rl_alphabetic
find_string_in_alist
push_context
sigint_sighandler
_rl_internal_char_cleanup
primary_prompt
redirection_expand
hash_builtin
shell_initialized
sh_contains_quotes
set_compatibility_opts
rl_reset_line_state
tt_setnocanon
fg_percent_doc
bash_logout
close_buffered_fd
ttrestore
ifs_cmap
disown_builtin
find_or_make_array_variable
glob_patscan
rl_gnu_readline_p
rl_attempted_completion_function
array_remove_quoted_nulls
sh_stat
continue_builtin
glob_ignore_case
strlist_resize
coproc_setvars
bgpids
find_variable_noref
rl_forward_word
rl_binding_keymap
disable_priv_mode
falarm
array_rshift
next_pending_trap
_rl_bracketed_read_mbstring
shell_version_string
xbcopy
strlist_flush
posix_readline_initialize
rl_sort_completion_matches
_rl_vimvcxt
history_truncate_file
print_arith_command
test_command
rl_completer_quote_characters
_rl_susp_char
suspend_builtin
fnx_tofs
wait_intr_flag
undo_partial_redirects
is_basic_table
rl_callback_handler_install
assoc_expand_once
coproc_fdsave
expand_prompt_string
grouping_braces_doc
_rl_standout_off
rl_tty_status
xtrace_reset
queue_sigchld_trap
expand_and_quote_assoc_word
set_sigint_handler
no_empty_command_completion
rl_complete_internal
base_pathname
alloc_word_desc
default_buffered_input
set_trap_state
addtimeval
rl_complete_with_tilde_expansion
make_coproc_command
array_expand_index
alias_expand_word
rl_variable_bind
secondary_prompt
unbind_unix_command
array_modcase
list_stopped_jobs
string_list_dollar_star
pop_var_context
enable_hostname_completion
push_scope
maybe_make_export_env
array_shift_element
copy_function_def_contents
push_stream
evalnest_max
_rl_horizontal_scroll_mode
rl_completion_matches
_rl_kill_kbd_macro
get_minus_o_opts
echo_builtin
sh_optopt
_rl_vi_cmd_modestr_len
buffered_getchar
rl_free_line_state
return_EOF
_rl_strip_prompt
current_fds_to_close
rl_read_init_file
bg_doc
zgetline
rl_macro_bind
rl_set_key
exit_builtin
let_doc
rl_funmap_names
_rl_optimize_redisplay
_rl_read_mbstring
rl_parse_and_bind
skip_to_delim
signal_is_special
notify_and_cleanup
rl_vi_put
make_word
builtin_doc
dot_found_in_search
termsig_sighandler
locale_mb_cur_max
read_command
flush_temporary_env
_rl_nsearch_cleanup
ttfd_cbreak
build_version
exit_doc
_rl_pending_command
rl_vi_bracktype
_rl_orig_sigset
_rl_parse_colors
_rl_nscxt
_rl_term_autowrap
_rl_sigwinch_resize_terminal
saved_command_line_count
current_command_line_count
copy_command
_edata
rl_old_menu_complete
expand_word_unsplit
do_word_assignment
find_shell_builtin
make_bare_word
setup_glob_ignore
read_secondary_line
shell_eof_token
dircomplete_expand_relpath
history_is_stifled
current_readline_line
initialize_readline
copy_function_def
popd_doc
sh_quote_reusable
yyerror
history_max_entries
_rl_print_completions_horizontally
get_locale_var
unset_bash_input
rl_forward_char
readline_internal_teardown
return_catch_value
rl_deactivate_mark
_rl_isearch_cleanup
print_unix_command_map
_rl_set_screen_size
rl_directory_completion_hook
assoc_dequote_escapes
rl_echo_signal_char
rl_set_keymap
yyparse
wait_for_job
sv_strict_posix
array_patsub
make_if_command
it_running
exportable_function_name
show_localname_attributes
dispose_partial_redirects
times_doc
_rl_add_macro_char
_rl_keyseq_chain_dispose
legal_alias_name
sh_regmatch
trapped_signal_received
rl_complete
array_expand_once
current_command_first_line_saved
dispose_function_def
sh_setclexec
get_history_event
all_visible_functions
first_pending_trap
_rl_set_insert_mode
rl_blink_matching_paren
rl_yank_last_arg
subshell_level
parse_bashopts
write_history
bash_badsub_errmsg
complete_builtin
list_string
_rl_echoctl
ungetc_with_restart
expand_and_quote_kvpair_word
seedrand32
set_signal_handler
already_making_children
last_made_pid
zreadintr
word_split
procsub_waitall
find_special_builtin
sh_optind
wait_for_background_pids
wordexp_only
history_get_history_state
get_original_tty_job_signals
sh_eaccess
rl_forward_search_history
importable_function_name
shell_compatibility_level
sv_shcompat
quote_string_for_globbing
_rl_fix_point
sv_mail
with_input_from_string
force_execute_file
lcurrent
rl_history_search_backward
make_local_array_variable
bind_int_variable
rl_vi_eWord
set_login_shell
rl_vi_eword
pushed_string_list
history_inhibit_expansion_function
ifs_var
_rl_last_command_was_kill
find_user_command
sh_realpath
_rl_release_sigwinch
fmtumax
array_to_assign
rl_filename_rewrite_hook
pcomp_curcmd
nohup_job
set_maxchild
set_working_directory
last_command_exit_signal
shell_is_restricted
make_function_def
times_builtin
shell_tty
sh_backslash_quote
rl_rubout
strlist_print
save_bash_input
_rl_arg_getchar
find_global_variable_last_nameref
_rl_next_macro_key
set_signal
maybe_set_sigchld_trap
rl_generic_bind
initialize_shell_options
_rl_terminal_can_insert
rl_clear_pending_input
hash_dispose
get_name_for_error
rl_completion_quote_character
rl_unbind_key_in_map
rl_add_undo
locale_decpoint
rl_mark_active_p
find_index_in_alist
double_quotes_inhibit_history_expansion
readonly_builtin
assign_array_element
describe_pid
unwind_protect_mem
rl_display_prompt
get_working_directory
set_if_not
fail_glob_expansion
localetrans
assign_array_from_string
divtimeval
find_procsub_child
_rl_cr
sv_optind
_rl_scxt_alloc
sh_getopt_save_istate
read_history
_rl_char_search_internal
return_doc
sv_opterr
terminate_stopped_jobs
_rl_term_forward_char
dircomplete_expand
set_default_locale_vars
rl_vi_start_inserting
sv_funcnest
_rl_untranslate_macro_value
sv_comp_wordbreaks
command_string_index
rl_function_of_keyseq
sh_backslash_quote_for_double_quotes
pcomp_curcs
ttnocanon
sh_nojobs
until_doc
set_pwd
find_function_def
_rl_output_meta_chars
_rl_last_v_pos
rl_set_retained_kills
phash_remove
optimize_fork
_rl_parsing_conditionalized_out
rl_getc
rl_callback_sigcleanup
u32reset
_rl_free_history_entry
rl_filename_completion_function
gen_compspec_completions
builtin_bind_variable
uwcache
source_builtin
kill_all_local_variables
named_function_string
tt_setonechar
procsub_prune
set_pipestatus_array
get_numeric_arg
internal_warning
hash_copy
expand_string_to_string
tilde_expand_word
tt_setcbreak
list_minus_o_opts
find_tempenv_variable
rl_initialize_funmap
rl_completion_suppress_quote
_rl_command_to_execute
subshell_top_level
find_shell_variable
sh_erange
pop_context
restore_sigmask
no_longjmp_on_fatal_error
with_input_from_stream
expand_string
rl_vi_bword
rl_signal_event_hook
assoc_to_assign
_rl_comment_begin
return_catch
it_jobs
array_quote
netopen
string_list_dollar_at
rl_deprep_terminal
rl_vi_complete
it_keywords
array_dispose
maybe_set_error_trap
optimize_shell_function
glob_vector
change_flag
sv_childmax
rl_completion_display_matches_hook
trap_doc
alloc_history_entry
it_helptopics
unset_builtin
parser_in_command_position
rl_revert_line
initialize_shell_builtins
_rl_make_prompt_for_search
dequote_list
find_variable_tempenv
init_bash_argv
_rl_erase_entire_line
bind_function
unbind_func
glob_asciirange
_rl_unget_char
expand_word_leave_quoted
set_signal_ignored
xfree
rl_copy_backward_word
read_history_range
bashline_reinitialize
rl_getc_function
builtin_help
print_command
parse_symbolic_mode
xtrace_fp
initialize_signals
rl_num_chars_to_read
string_rest_of_args
signal_is_pending
rl_vi_check
signal_names
rl_clear_display
_rl_clear_screen
rl_line_buffer
xrealloc
ps2_prompt
rl_reset_terminal
EOF_Reached
current_history
rl_variable_dumper
_rl_erase_at_end_of_line
_rl_prev_macro_key
rl_noninc_forward_search_again
_rl_insert_typein
sv_terminal
make_new_array_variable
sourcenest
rl_backward_kill_line
word_token_alist
check_identifier
history_multiline_entries
suppress_debug_trap_verbose
make_until_command
command_connect
bash_add_history
get_current_flags
rl_operate_and_get_next
ttfd_noecho
_rl_output_character_function
rl_backward_word
the_printed_command_size
unquoted_glob_pattern_p
reset_shopt_options
push_var_context
make_cond_command
_rl_init_executing_keyseq
sccs_version
sh_syntaxtab
rl_vi_overstrike_delete
rl_newline
prog_completes
programming_error
rl_delete
save_pipestatus_array
substring
job_exit_signal
new_var_context
hash_string
find_in_path
_rl_prep_non_filename_text
unlink_fifo_list
history_offset
rl_vi_fword
history_lines_this_session
sh_physpath
rl_vi_match
job_exit_status
progcomp_remove
sh_mktmpfd
source_searches_cwd
clear_string_list_expander
set_job_control
get_word_from_string
rl_tty_unset_default_bindings
print_var_value
map_over
rl_insert_comment
line_number_for_err_trap
set_sigchld_handler
set_jobs_list_frozen
reinit_special_variables
fc_execute_file
unbind_function_def
rl_insert
logout_builtin
print_shift_error
fifos_pending
_rl_term_clrscroll
ps0_prompt
copy_fifo_list
export_builtin
open_buffered_stream
rl_noninc_reverse_search_again
_rl_nsearch_callback
rl_vi_redo
_rl_arg_overflow
rl_execute_next
hup_on_exit
coproc_list
reset_signal_handlers
it_users
push_args
strvec_mcreate
initialize_shell_variables
set_impossible_sigchld_trap
skipsubscript
tempenv_assign_error
_rl_is_mbchar_matched
echo_doc
_rl_arg_callback
phash_flush
array_from_word_list
rl_reverse_search_history
array_copy
wait_doc
extract_arithmetic_subst
xmalloc
yy_input_name
_rl_read_bracketed_paste_prefix
_rl_find_next_mbchar
kill_current_pipeline
eval_builtin
dircomplete_spelling
u32toutf16
_rl_find_prev_mbchar
wcdequote_pathname
discard_pipeline
rl_skip_csi_sequence
_rl_dispatch
rl_vi_yank_to
find_variable_nameref_for_create
_rl_revert_all_lines
convert_var_to_assoc
hist_verify
internal_wstrmatch
_rl_term_ei
find_variable_no_invisible
maybe_execute_file
rl_vi_goto_mark
strvec_strcmp
restart_job_control
conf_standard_path
filter_stringlist
rl_vi_delete_to
reap_procsubs
compspec_copy
compgen_doc
_rl_term_pc
makunbound
phash_search
rl_insert_close
_rl_set_the_line
this_shell_function
rl_vi_prev_word
history_expansion_inhibited
interrupt_immediately
rl_yank
array_remove
dequote_word
rl_basic_quote_characters
minus_o_option_value
sync_buffered_stream
pwd_builtin
_rl_find_prev_mbchar_internal
absolute_program
rl_vi_change_case
_rl_vi_domove_callback
histexp_flag
progcomp_dispose
rl_re_read_init_file
ttfd_onechar
run_trap_cleanup
get_group_array
rl_erase_empty_line
decode_prompt_string
nameref_transform_name
mail_warning
rl_kill_text
ifs_is_null
arith_for_doc
xtrace_init
history_get
static_shell_builtins
set_current_prompt_level
make_bare_simple_command
sh_double_quote
subshell_argv
zreset
current_readline_line_index
eof_encountered
umatchlen
_rl_input_queued
clear_dollar_vars
rl_macro_dumper
assoc_quote_escapes
rl_startup_hook
dot_doc
_rl_sigcleanup
read_but_dont_execute
rl_vi_replace
phash_create
rl_linefunc
source_file
line_isblank
hash_size
loop_level
cdable_vars
privileged_mode
_rl_read_mbchar
ifs_value
rl_end
maybe_set_debug_trap
builtin_usage
_rl_output_some_chars
check_signals_and_traps
rl_redisplay_function
_rl_control_keypad
_rl_vi_ins_modestr_len
executable_file
expand_assignment_string_to_string
bind_var_to_int
shell_name
_rl_keyseq_cxt_dispose
remove_alias
set_directory_hook
rl_vi_search
all_array_variables
give_terminal_to
just_one_command
_rl_argcxt
trap_saved_exit_value
array_create_element
_rl_walphabetic
wait_for_any_job
_rl_null_function
command_error
allow_null_glob_expansion
_rl_insert_char
rl_set_keymap_name
true_doc
getcoprocbypid
assign_array_var_from_word_list
make_new_assoc_variable
rl_visible_stats
rl_list_funmap_names
_rl_vi_ins_mode_str
debugging_login_shell
get_new_window_size
sh_mktmpfp
pipefail_opt
rl_completion_mode
with_input_from_stdin
_rl_allow_pathname_alphabetic_chars
push_token
builtin_builtin
want_pending_command
rl_free_keymap
rl_completion_mark_symlink_dirs
ps1_prompt
_rl_with_macro_input
interrupt_state
sigterm_sighandler
rl_menu_completion_entry_function
return_builtin
_rl_possible_meta_prefixes
restore_funcarray_state
display_signal_list
xtrace_fd
copy_word_list
string_list_internal
rl_copy_keymap
rl_kill_line
rl_already_prompted
compspec_create
_rl_revert_previous_lines
ttsave
redirection_error
rl_expand_prompt
restore_pgrp_pipe
set_var_attribute
complete_doc
read_doc
funmap_program_specific_entry_start
rl_change_environment
rl_vi_arg_digit
rl_add_defun
dispose_variable
variable_context
rl_maybe_unsave_line
rl_transpose_words
run_sigchld_trap
_hs_replace_history_data
rl_completion_word_break_hook
rl_undo_command
strlist_create
coproc_wclose
__data_start
strlist_to_word_list
rl_vi_overstrike
make_group_command
set_minus_o_option
execute_shell_function
wait_signal_received
rl_library_version
_rl_term_ip
rl_overwrite_mode
set_bash_input_fd
_rl_vi_motion_command
hash_walk
clear_hostname_list
wait_builtin
rl_terminal_name
_rl_vi_domove_motion_cleanup
set_buffered_stream
strvec_to_word_list
rl_call_last_kbd_macro
run_unwind_frame
dispose_command
_rl_vi_cmd_mode_str
clear_fifo
internal_strmatch
rl_extend_line_buffer
extract_colon_unit
promptvars
compspec_dispose
procsub_search
strlist_walk
kill_doc
_rl_caught_signal
sh_notbuiltin
place_keywords_in_env
_rl_top_level
history_word_delimiters
expand_string_assignment
rl_backward_byte
rl_message
rl_read_key
assoc_quote
shellstart
rl_set_signals
do_redirections
rl_clear_history
sh_invalidoptname
tilde_expansion_preexpansion_hook
sh_set_lines_and_columns
_rl_enable_keypad
extract_command_subst
_rl_completion_prefix_display_length
disallow_filename_globbing
initialize_job_signals
rl_completer_word_break_characters
rl_unix_word_rubout
print_timeval
colon_doc
timeval_to_cpu
rl_vi_append_mode
rl_pending_signal
exec_argv0
rl_completion_type
it_hostnames
coproc_init
set_pipestatus_from_exit
match_pattern_wchar
_rl_overwrite_char
kill_pid
test_builtin
hist_last_line_added
rl_tab_insert
_rl_update_final
free_pushed_string_input
adjust_shell_level
update_export_env_inplace
sv_ifs
pop_dollar_vars
_rl_term_DC
maybe_set_return_trap
xtrace_set
rl_make_keymap
coproc_closeall
function_trace_mode
invalid_env
rl_transpose_chars
rl_executing_keyseq
sh_opterr
_rl_scxt_dispose
_rl_print_color_indicator
it_commands
xparse_dolparen
restore_original_signals
sh_coproc
_rl_colored_completion_prefix
brace_expansion
expand_words
rl_vi_subst
sub_append_string
ttgetattr
history_file_version
rl_menu_complete
ansicstr
unbind_nameref
quote_globbing_chars
rl_yank_pop
init_yy_io
do_assignment
reset_mail_files
zreadc
shopt_doc
dump_po_strings
running_in_background
shift_doc
rl_reset_screen_size
parse_and_execute_cleanup
rl_char_is_quoted_p
tilde_expansion_failure_hook
subshell_exit
zread
copy_history_entry
getmaxgroups
last_random_value
reset_terminating_signals
_rl_echoing_p
rl_bracketed_paste_begin
word_list_remove_quoted_nulls
posix_initialize
find_variable_last_nameref
bind_doc
enable_doc
rl_named_function
compopt_builtin
set_original_signal
glob_dirscan
tilde_additional_prefixes
bash_history_disable
posparam_count
_rl_any_typein
_rl_add_executing_keyseq
subshell_environment
printf_doc
history_search_prefix
dispose_fd_bitmap
without_job_control
internal_inform
get_array_value
strip_trailing_ifs_whitespace
rl_backward_char
_rl_pop_executing_macro
maybe_call_trap_handler
unlink_all_fifos
shell_start_time
prompt_string_pointer
typeset_doc
rl_vi_yank_arg
exec_builtin
forced_interactive
malloc_trace_at_exit
phash_insert
source_uses_path
indirection_level_string
num_posix_options
list_all_jobs
enable_builtin
_IO_stdin_used
_rl_copy_undo_list
strvec_len
_rl_ttyflush
stream_list
rl_readline_state
sh_mktmpdir
sh_un_double_quote
_rl_color_indicator
rl_free
rl_do_lowercase_version
alrmbuf
asynchronous_notification
delete_all_contexts
set_locale_var
patch_level
rl_do_undo
signal_name
_rl_peek_macro_key
make_funcname_visible
absolute_pathname
append_process
emacs_meta_keymap
get_all_original_signals
last_asynchronous_pid
pcomp_curtxt
assoc_to_word_list
yychar
_rl_bracketed_text
getopts_doc
it_aliases
rl_restart_output
array_variable_name
array_to_kvpair
local_doc
print_array_assignment
rl_pre_input_hook
history_search_delimiter_chars
coproc_pidchk
set_dollar_vars_unchanged
rl_history_substr_search_forward
sh_single_quote
rl_undo_list
sh_validfd
_rl_term_backspace
string_to_rlimtype
rl_discard_argument
strvec_mresize
_rl_init_eightbit
history_length
command_substitute
rl_display_fixed
maybe_make_restricted
function_doc
_rl_get_screen_size
_rl_sigcleanarg
err_unboundvar
it_directories
sh_badjob
reset_completer_word_break_chars
rl_filename_quoting_function
array_quote_escapes
unbind_args
coproc_close
list_rest_of_args
_rl_utf8locale
bash_directory_completion_matches
expand_arith_string
rl_get_previous_history
history_search
rl_translate_keyseq
current_readline_prompt
literal_history
strsub
interactive_shell
while_doc
eof_encountered_limit
clean_simple_command
sbrand
arith_doc
rl_backward_char_search
sh_closepipe
_rl_colored_stats
array_assign_list
async_redirect_stdin
errexit_flag
sh_invalidid
rl_inhibit_completion
check_hashed_filenames
sh_exit
strlist_append
sys_error
dispose_redirects
rl_set_prompt
programmable_completions
_rl_history_preserve_point
kvpair_assignment_p
make_command_string
rl_vi_fetch_history
unfreeze_jobs_list
set_procsub_status
ifs_firstchar
suspend_doc
_rl_optimize_typeahead
dispose_word_desc
assoc_replace
save_parser_state
make_absolute
current_prompt_string
array_walk
rl_key_sequence_length
make_arith_for_command
rl_upcase_word
glob_always_skip_dot_and_dotdot
read_tty_modified
rl_history_search_forward
getmaxchild
_rl_completion_case_map
bash_tilde_find_word
sh_badpid
rl_bind_keyseq_if_unbound_in_map
_rl_completion_case_fold
strvec_copy
_hs_append_history_line
sh_getopt
array_to_word_list
sh_mbsnlen
assoc_flush
case_doc
fsleep
trap_to_sighandler
rl_callback_handler_remove
mapfile_builtin
show_local_var_attributes
_rl_overwrite_rubout
get_variable_value
dump_translatable_strings
wait_sigint_cleanup
uinttostr
ansiexpand
signal_in_progress
rl_end_kbd_macro
dispose_words
rl_instream
get_shopt_options
history_search_pos
compgen_builtin
assoc_remove
timeval_to_secs
dollar_dollar_pid
rl_dump_macros
get_dollar_var_value
rl_end_of_line
rl_vi_insert_mode
validate_inherited_value
no_line_editing
rl_vi_search_again
current_token
binary_test
assoc_keys_to_word_list
set_default_lang
rl_persistent_signal_handlers
readline_internal_char
need_here_doc
find_variable_notempenv
internal_error
parser_save_alias
jobs_builtin
file_isdir
run_pending_traps
rl_vi_tilde_expand
ifs_firstc_len
_rl_keyseq_cxt_alloc
compopt_doc
bash_execute_unix_command
full_pathname
setup_ignore_patterns
rl_clear_visible_line
list_one_job
rl_bind_key_in_map
rl_prefer_env_winsize
type_builtin
_rl_to_lower
match_ignore_case
pop_scope
ansic_wshouldquote
_rl_print_prefix_color
maybe_append_history
bash_re_edit
rl_empty_keymap
assoc_dispose
show_all_var_attributes
seedrand
rl_vi_eof_maybe
_rl_strindex
rl_add_funmap_entry
make_default_mailpath
history_no_expand_chars
delete_all_jobs
current_command_subst_pid
_rl_screenchars
have_unwind_protects
sigalrm_seen
num_fifos
it_disabled
rl_vi_insert_beg
sh_invalidopt
procsub_delete
get_string_value
_rl_enable_active_region
_rl_adjust_point
eval_doc
bash_history_reinit
get_original_signal
rl_vi_yank_pop
disown_doc
rl_start_kbd_macro
strvec_create
exec_doc
get_exitstat
rl_quoted_insert
_rl_keep_mark_active
_rl_nchars_available
rl_ignore_completion_duplicates
_rl_doing_an_undo
save_input_line_state
rl_delete_horizontal_space
init_job_stats
mark_modified_vars
history_reediting
readline_internal_setup
save_bash_argv
valid_array_reference
current_user
false_builtin
cdspelling
string_list_pos_params
all_exported_variables
put_command_name_into_env
rl_vi_editing_mode
get_urandom32
_rl_term_cr
_rl_digit_p
sh_invalidsig
setup_history_ignore
rl_mark
array_insert
_rl_vi_set_last
ttnoecho
bind_builtin
quote_rhs
current_command_number
dirs_builtin
false_doc
rl_function_of_keyseq_len
enable_history_list
array_keys_to_word_list
it_builtins
command_execution_string
set_or_show_attributes
rl_ignore_some_completions_function
bind_variable_value
assoc_remove_quoted_nulls
_rl_bell_preference
history_total_bytes
_rl_term_executing_keyseq
rl_vi_bWord
rl_done
current_builtin
cond_expand_word
run_return_trap
posixly_correct
delete_var
rl_capitalize_word
global_variables
_rl_set_cursor
it_functions
find_global_variable
report_error
_rl_term_IC
rl_delete_text
sh_openpipe
xstrmatch
utf8_mbscmp
print_func_list
rl_modifying
check_bash_input
unwind_protect_tag_on_stack
array_dequote
_rl_in_stream
remove_quoted_escapes
make_select_command
_rl_complete_mark_symlink_dirs
rl_crlf
sigwinch_received
remove_quoted_ifs
ttattr
set_ppid
_rl_arg_init
_rl_ttymsg
time_to_check_mail
xpg_echo
xtrace_print_word_list
file_iswdir
error_trace_mode
progcomp_alias
_rl_init_locale
it_services
trap_list
rl_stuff_char
list_running_jobs
let_builtin
type_doc
export_doc
rl_pending_input
sh_neednumarg
exec_redirection_undo_list
progcomp_search
printable_filename
sv_history_control
rl_completion_invoking_key
sh_getopt_dispose_istate
rl_yank_nth_arg
global_command
_rl_release_sigint
wlcache
assoc_to_string
jobs_m_flag
pop_stream
_rl_backward_char_internal
it_signals
sh_get_home_dir
rl_redisplay
rl_vi_change_char
rl_untranslate_keyseq
wcsmatch
cmd_init
show_func_attributes
coproc_checkfd
rl_username_completion_function
strvec_sort
mk_msgstr
wextglob_pattern_p
_rl_pushed_input_available
_rl_meta_flag
ttonechar
find_alias
alias_expand
zreadretry
rl_on_new_line
rl_print_last_kbd_macro
_rl_term_goto
rl_vi_fWord
path_dot_or_dotdot
bind_array_variable
ulimit_doc
rl_character_len
rl_unbind_function_in_map
reset_internal_getopt
remember_on_history
glob_error_return
progcomp_flush
utf8_mbschr
sh_makepath
rl_exchange_point_and_mark
progcomp_insert
rl_vi_change_to
strvec_posixcmp
dispose_saved_dollar_vars
initialize_job_control
_rl_standout_on
history_quotes_inhibit_expansion
rl_activate_mark
rl_cleanup_after_signal
autocd
_rl_complete_show_all
_rl_redisplay_after_sigwinch
rl_completion_entry_function
restore_pipeline
it_variables
colon_builtin
rl_function_dumper
err_readonly
rl_set_keymap_from_edit_mode
xtrace_print_assignment
bash_delete_history_range
rl_get_next_history
_rl_enable_meta_key
fc_builtin
merge_function_temporary_env
interactive_comments
rl_on_new_line_with_prompt
xtrace_fdchk
rl_readline_name
run_interrupt_trap
make_simple_command
rl_vi_unix_word_rubout
file_status
_rl_compare_chars
locale_shiftstates
_rl_revert_all_at_newline
find_variable_nameref
list_reverse
rl_editing_mode
sv_xtracefd
rl_visible_prompt_length
_rl_emacs_modestr_len
pretty_print_loop
string_quote_removal
bash_license
rl_attempted_completion_over
_rl_complete_mark_directories
nohup_all_jobs
reading_shell_script
perform_hostname_completion
rl_dump_variables
clear_unwind_protect_list
jump_to_top_level
_rl_convert_meta_chars_to_ascii
quote_compound_array_list
any_signals_trapped
rl_initialize
xtrace_print_for_command_head
terminate_current_pipeline
set_tty_state
comsub_ignore_return
rl_unbind_command_in_map
__bss_start
xtrace_print_arith_cmd
u32tochar
xtrace_print_select_command_head
rl_check_signals
unalias_doc
rl_forward
array_variable_part
find_global_variable_noref
_rl_block_sigwinch
rl_tty_set_echoing
remove_history_range
_rl_complete_show_unmodified
setup_async_signals
show_shell_version
funcnest_max
stream_on_stack
set_current_flags
tilde_initialize
it_enabled
bg_builtin
history_number
pre_process_line
rl_ding
readonly_doc
_rl_menu_complete_prefix_first
rl_backward
list_optarg
initialize_traps
history_set_pos
copy_redirects
sv_histchars
umask_builtin
make_pattern_list
shopt_builtin
no_options
tteightbit
current_command_line_comment
builtin_ignoring_errexit
list_optopt
delete_all_aliases
_rl_init_line_state
if_doc
test_bracket_doc
restore_parser_state
return_catch_flag
pcomp_line
close_pgrp_pipe
make_array_variable_value
sh_getopt_alloc_istate
command_oriented_history
get_current_user_info
reap_dead_jobs
rl_executing_macro
save_token_state
pcomp_set_readline_variables
pwd_doc
sh_mktmpname
_rl_find_completion_word
begin_unwind_frame
strlist_remove
release_status
sv_histsize
isnetconn
split_at_delims
array_create
make_builtin_argv
set_var_read_only
array_unshift_element
initialize_bashopts
rl_restore_prompt
_rl_emacs_mode_str
history_lines_written_to_file
execute_command_internal
terminating_signal
time_doc
getcoprocbyname
multimeval
initialize_bash_input
umask_doc
rl_get_keymap_name
make_subshell_command
cd_doc
rl_point
rl_clear_message
_rl_screenheight
close_new_fifos
u32toutf8
strlist_prefix_suffix
_rl_history_saved_point
sv_globignore
find_reserved_word
sv_tz
find_token_in_alist
last_history_line
nchars_avail
_rl_term_dc
parse_and_execute
print_var_list
_rl_dispatch_subseq
_rl_qsort_string_compare
_rl_screenwidth
readarray_doc
rl_make_bare_keymap
ansic_quote
array_to_argv
read_from_stdin
rl_prep_term_function
gnu_error_format
sh_chkwrite
maybe_save_shell_history
strvec_flush
history_comment_char
ttsetattr
make_here_document
_rl_signal_handler
coproc_dispose
rl_save_state
shell_script_filename
history_doc
_rl_disable_tty_signals
xtrace_print_cond_term
get_current_options
procsub_waitpid
hashing_enabled
_rl_vi_initialize_line
ttfd_nocanon
_rl_vi_redoing
rl_variable_value
clear_fifo_list
rl_completion_found_quote
parser_remaining_input
save_pgrp_pipe
dont_save_function_defs
_rl_abort_internal
builtin_address_internal
coproc_rclose
check_selfref
utf8_mbsnlen
fc_doc
_rl_get_char_len
ignore_signal
shift_builtin
strvec_resize
rl_invoking_keyseqs
rl_filename_quote_characters
shift_args
get_random_number
bash_history_enable
make_case_command
nameref_invalid_value
rl_arrow_keys
evalexp
array_keys
_rl_vis_botlin
polite_directory_format
dirs_doc
rl_set_keyboard_input_timeout
declare_builtin
executing
fd_is_bash_input
copy_redirect
_rl_internal_startup_hook
free_trap_strings
valid_nameref_value
_rl_enable_bracketed_paste
_rl_search_getchar
set_posix_options
invalidate_cached_quoted_dollar_at
set_signal_hard_ignored
rl_prep_terminal
echo_input_at_read
rl_previous_screen_line
move_to_high_fd
strlist_dispose
make_arith_command
_rl_page_completions
_rl_completion_columns
noglob_dot_filenames
setifs
stupidly_hack_special_variables
shell_function_defs
_rl_isearch_callback
show_var_attributes
_rl_reset_argument
match_pattern_char
clear_shell_input_line
this_shell_builtin
load_history
check_add_history
continuing
rl_redraw_prompt_last_line
stdin_redirects
fg_builtin
print_assoc_assignment
subst_assign_varlist
_rl_possible_control_prefixes
termsig_handler
force_fignore
exit_shell
sh_badopt
sv_hostfile
rl_vi_next_word
array_to_string
indirection_level
rl_vi_rubout
hash_bucket
last_command_subst_pid
strlist_sort
save_pipeline
last_shell_builtin
_rl_lowercase_p
it_exports
_rl_disable_meta_key
rl_event_hook
continue_doc
_rl_vi_last_command
rl_get_keymap_by_name
parse_and_execute_level
strip_trailing
initialize_itemlist
extended_quote
_rl_put_indicator
builtin_unbind_variable
is_directory
_rl_char_value
loptend
dispose_used_env_vars
rl_char_search
mapfile_doc
assoc_dequote
var_attribute_string
copy_word
test_unop
rl_beg_of_line
reset_readahead_token
_rl_term_clrpag
strvec_remove
parser_expanding_alias
array_needs_making
it_files
parse_command
terminal_pgrp
check_binary_file
rl_vi_undo
_rl_replace_text
run_unwind_protects
rl_clear_signals
legal_number
_rl_pure_alphabetic
sh_setlinebuf
make_word_from_token
it_stopped
reset_parser
history_subst_char
brace_expand
char_is_quoted
localeexpand
_rl_saved_line_for_history
from_return_trap
printf_builtin
force_append_history
unset_sigwinch_handler
remember_args
utf8_mbstrlen
sigterm_received
_rl_callback_data_dispose
set_bashopts
progcomp_create
print_cond_command
expand_compound_array_assignment
rl_vi_first_print
tt_seteightbit
rl_replace_line
coproc_doc
set_current_options
sh_wrerror
init_mail_dates
run_exit_trap
rl_kill_full_line
can_optimize_connection
getopts_builtin
dispose_word
test_binop
sh_contains_shell_metas
rl_directory_rewrite_hook
top_level_cleanup
rl_next_screen_line
rl_vi_delete
dispose_var_context
current_host_name
dispose_cond_node
_rl_reset_prompt
rl_executing_keymap
this_command_name
rl_catch_sigwinch
rl_vi_append_eol
_rl_term_clreol
rl_rubout_or_delete
locale_utf8locale
coproc_unsetvars
sh_restricted
rl_vi_back_to_indent
here_doc_first_line
make_word_flags
end_job_control
rl_vi_insertion_mode
unbind_array_element
_rl_echo_control_chars
bashline_set_event_hook
_rl_rubout_char
assoc_modcase
signal_is_hard_ignored
set_itemlist_dirty
strlist_from_word_list
it_groups
read_builtin
get_directory_stack
rl_arg_sign
list_opttype
decode_signal
noclobber
user_command_matches
assign_array_var_from_string
history_get_time
yylval
mitos
input_avail
do_assignment_no_expand
rl_filename_stat_hook
chkexport
_rl_color_ext_list
subshell_argc
expand_string_unsplit
uwp_init
bash_brace_completion
history_arg_extract
sv_locale
rl_abort
set_dirstack_element
_rl_restore_tty_signals
zsyncfd
running_under_emacs
pushd_doc
bind_global_variable
all_variables_matching_prefix
sh_optarg
_getenv
it_setopts
rl_possible_completions
_rl_errmsg
wait_intr_buf
tvlist_ind
rl_filename_dequoting_function
_rl_keyseq_timeout
evalstring
rl_filename_completion_desired
err_badarraysub
execute_command
bash_delete_last_history
same_file
test_doc
make_local_variable
assign_compound_array_list
check_jobs_at_exit
_rl_move_vert
set_exit_status
_rl_end_executing_keyseq
read_octal
pidstat_table
delete_all_variables
_rl_quit_char
assigning_in_environment
rl_dispatching
unclosed_pair
unalias_builtin
progcomp_walk
set_lang
rl_insert_completions
ttcbreak
get_job_spec
skip_to_histexp
throw_to_top_level
setup_exec_ignore
describe_command
assoc_reference
extract_array_assignment_list
rl_end_of_history
sourcelevel
source_doc
make_redirection
sort_variables
sh_mkdoublequoted
rl_explicit_arg
get_job_by_pid
difftimeval
strvec_dispose
pcomp_ind
_rl_callback_data_alloc
set_dollar_vars_changed
hangup_all_jobs
find_flag
pretty_print_mode
executing_list
should_suppress_fork
ignore_tty_job_signals
uconvert
evalnest
verbose_flag
glob_char_p
push_dollar_vars
unbound_vars_is_error
rl_beginning_of_history
sh_unset_nodelay_mode
check_window_size
remove_history
bash_clear_history
pipeline_pgrp
other_token_alist
rl_readline_version
bash_input_fd_changed
initialize_aliases
print_var_function
executing_command_builtin
bash_readline_initialized
sh_needarg
hist_last_line_pushed
have_devfd
unset_doc
pushd_builtin
sv_ignoreeof
rl_bind_key_if_unbound
make_for_command
history_tokenize
file_error
rl_copy_region_to_kill
get_alias_value
rl_dump_functions
no_args
de_backslash
rl_vi_char_search
original_pgrp
xtrace_print_case_command_head
initialize_flags
rl_restore_state
rl_line_buffer_len
history_expand
echo_command_at_execute
_rl_vi_done_inserting
urandom_close
list_length
_rl_bind_stty_chars
vi_movement_keymap
rl_unbind_key
_rl_bracketed_read_key
_rl_kscxt
alias_expand_all
rl_deprep_term_function
remove_unwind_protect
array_flush
number_of_args
expanding_redir
delete_job
rl_save_prompt
emacs_ctlx_keymap
rl_get_keymap
_rl_copy_undo_entry
trap_builtin
help_builtin
get_job_by_name
udequote_pathname
rl_bind_key_if_unbound_in_map
sh_ttyerror
unstifle_history
optflags
command_doc
_rl_set_mark_at_pos
debugging_mode
bash_servicename_completion_function
rl_kill_word
tilde_additional_suffixes
clear_pending_traps
bashline_reset_event_hook
rl_copy_forward_word
rl_push_macro_input
_rl_free_saved_history_line
_rl_arg_dispatch
restore_input_line_state
the_current_maintainer
rl_bind_keyseq_in_map
rl_end_undo_group
run_error_trap
get_hostname_list
extended_glob
sv_path
coproc_alloc
print_simple_command
restore_token_state
make_cond_node
ansic_shouldquote
make_word_list
spname
get_tty_state
conditional_doc
legal_identifier
rl_callback_read_char
variable_help_doc
stop_making_children
rl_backward_menu_complete
wait_for
procsub_add
new_fd_bitmap
rl_catch_signals
the_current_working_directory
stop_pipeline
start_pipeline
assoc_subrange
sv_histignore
history_expansion_char
_rl_vi_textmod_command
extract_process_subst
save_posix_options
fd_to_buffered_stream
rl_delete_or_show_completions
maybe_add_history
it_shopts
last_command_exit_value
array_slice
parser_will_prompt
history_write_timestamps
all_shell_variables
rl_downcase_word
check_unbind_variable
sh_canonpath
rl_invoking_keyseqs_in_map
getopts_reset
executable_or_directory
history_builtin
_rl_enable_meta
shell_pgrp
parse_string_to_word_list
get_group_list
rl_display_match_list
find_function
strlist_merge
bash_dequote_text
rl_noninc_reverse_search
unary_test
rl_numeric_arg
history_delimiting_chars
array_subrange
all_visible_variables
_rl_reset_completion_state
_rl_term_up
coproc_fdclose
_rl_eof_found
rl_maybe_save_line
optimize_subshell_command
rl_copy_text
inherit_errexit
rl_universal_argument
sh_getopt_restore_istate
prog_completion_enabled
rl_get_keymap_name_from_edit_mode
_rl_forward_char_internal
pcomp_set_compspec_options
_rl_term_ic
complete_fullquote
_rl_iscxt
_rl_out_stream
rl_basic_word_break_characters
_rl_dispatch_callback
progcomp_size
make_child
startup_state
get_posix_options
rl_vi_set_mark
bash_groupname_completion_function
_rl_savestring
strlist_copy
sh_notfound
zreadcintr
all_shell_functions
reset_shell_flags
replace_history_entry
_rl_term_im
make_local_assoc_variable
coproc_reap
default_tty_job_signals
_rl_enable_paren_matching
shell_execve
start_job
signal_is_ignored
rl_insert_mode
xmbsrtowcs
num_shell_builtins
cd_builtin
popd_builtin
tt_setnoecho
global_error_list
with_input_from_buffered_stream
stdin_redir
rl_maybe_replace_line
rl_completion_suppress_append
ttfd_eightbit
wait_for_single_pid
free_buffered_stream
sh_invalidnum
history_lines_read_from_file
_rl_vi_reset_last
ifs_is_set
initialize_terminating_signals
assign_in_env
history_base
dist_version
bind_assoc_variable
map_over_funcs
connect_async_list
sh_readonly
procsub_clear
merge_temporary_env
fnx_fromfs
bash_delete_histent
zreadn
find_variable_nameref_for_assignment
it_bindings
sh_getopt_restore_state
unlink_fifo
_rl_match_hidden_files
_rl_callback_func
restore_default_signal
bash_default_completion
rl_stop_output
parser_restore_alias
restore_pipestatus_array
rl_resize_terminal
_rl_clear_to_eol
vi_insertion_keymap
expand_aliases
bash_argv_initialized
add_alias
_rl_isearch_terminators
kill_builtin
rl_set_paren_blink_timeout
line_number_base
dispose_exec_redirects
dequote_string
shopt_listopt
discard_unwind_frame
_rl_undo_group_level
_rl_mark_modified_lines
rl_history_substr_search_backward
NCURSES6_TINFO_5.0.19991023
GLIBC_2.25
GLIBC_2.11
GLIBC_2.14
GLIBC_2.8
GLIBC_2.33
GLIBC_2.15
GLIBC_2.4
GLIBC_2.34
GLIBC_2.3.4
GLIBC_2.3
GLIBC_2.2.5
\$H1
AWAVAUATUSH
|$ H
T$(dH
;(tWH
D$ H
D$X9
T$XH
L$(H
9D$ 
HcD$
9D$ 
t$XL
D9t$ 
D</w
T$0H
tL<-
t,HcD$XH
D$XH
D$XH
D$TH
D$XH
T$ 1
D$X;D$ t
D$X;D$ t
HcD$XH
T$XH
t$XH
dtQH
tt0H
et.H
D$T;D$ u
T$HH
T$HH
PTE1
u+UH
8)~OHc
-t=f
H9:t
H9:t
ATUSD
[]A\
ATUH
-t1E1
rt	D
[]A\
AVAUATUH
/bin/sh
E []A\A]A^
/bin/sh
AWAVM
[]A\A]A^A_
[]A\
AUATUSH
t @:.u
[]A\A]
]A\A]
C([H
ATUH
[]A\
[]A\
[]A\
ATUSH
[]A\
[]A\
AWAVAUATUSH
$tXM
[]A\A]A^A_
ATUSH
[]A\
AWAVAUATA
[]A\A]A^A_
A]A^A_
AVAUATUH
L;-C
]A\A]A^
]A\A]A^
AUATL
[]A\A]A^
ATUL
]A\A]
AWAVAUATUSH
tRE1
[]A\A]A^A_
l$0L
L$@H
L$ H
T$,L
D$ H
T$,I
T$ D
T$ H
H90t"H
H90t
Hc|$
l$0H
}t#E
L$@L
|$ I
T$ L
T$ H
D$ H
[]A\
[]A\
AWAVAUATUSH
[]A\A]A^A_
[]A\
[]A\
[]A\
]A\A]
]A\A]
A\A]
]A\A]Hc8
AWAVAUATI
[]A\A]A^A_
t4Hc
t;A)
AWAVAUL
[]A\A]A^A_
[]A\
AWAVA
AUATUSH
[]A\A]A^A_
l$`I
d$0H
L$(H
)t.H9
D$(H
T$(H
AVAUATUSH
 []A\A]A^
[]A\A]A^
[]A\A]
AWAVAUATUSH
[]A\A]A^A_
L;=g
AWAVAUATUSH
L$0D
D$X1
D$#f
\$8D
T$(D
\$8H
D$HD)
t$(L
T$@D
D$HI
8)~'
T$(E
T$(L
D$0D
D$XdH+
[]A\A]A^A_
t$(I
$8E9
D$(E
D$(L
\$8D)
t0@Ic
t$(L
\$8I
T$(L
|$(L
\$(D)
t0@Mc
\$(I
|$$H
t$(I
t$T1
\$8D)
t$(L
\$8I
T$@L
\$8H
t$(I
L$HL
L$@D
\$8D
L$HD
T$(H
\$8L
\$(H
L$TA
\$(I
D$TD
L$PD
|$(I
\$8E
D$PM
D$TE
\$8H
t$(I
T$8D)
t0@Ic
t$(L
T$8I
d$TL
T$(E
L$$L
D$P1
|$(I
t$PL
D$PL
\$8D
T$(D
\$8H
\$@A
T$8M
t$(D
T$8D
\$@L
\$8H
t$(I
\$(D
T$8H
t$(I
\$@D
T$8L
t$(I
T$8D)
t0@Ic
T$8I
T$TD
D$8D)
t0@Ic
t$(L
D$8I
d$TL
D$(E
\$(I
T$8H
t$(I
D$8H
t$(I
\$@L
D$8D
\$@L
D$8L
T$8L
T$8L
AWAVAUATUSH
D$XH
L$HD
T$HA
`t%A
l$0A
L$HE1
&(Hc
\$HL
L$,)
L$ D
L$,H
L$,D
D$ D
(LcD$ 
t$PH
D$,H
D$ H
LcD$ 
LcD$
LcD$
L$ H
D$XdH+
[]A\A]A^A_
t$HD
T$HA
L$HA
'[Ic
l$HH
L$HE1
}OIc
\$HL
D$,H
\$ LcD$,
(HcE
D$L1
t$L1
D$LD
D$LB
}7Ic
d$LE1
L$0E
@:.u
l$ E
l$0D
@:.u
l$0H
L$,D
l$ L
t$PH
D$PHc
L$L1
\$ I
\$ D
D$8H
L$<H
T$HE
D$HL
L$ H
L$ M
L$ H
L$ )
L$ H
d$,E1
|$4H
|$P1
L$ H
D$PH
D$ H
L$ L
AVAUE1
ATUS
T$@H
T$ L
D$@Mc
wiIc
f;4W
D$ L
L;d$ t
[]A\A]A^A_
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$(u	I
D$0H
D$(H
D$0H
D$0H
L$0H
T$(H
L$0H
L$0H
T$(H
L$0H
L$0H
T$(H
L$0H
T$(L
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
D$0H
L$0H
T$(H
L$0H
L$0H
T$(H
L$0H
L$0H
T$(H
L$0H
L$0H
T$(H
L$0H
D$0H
D$(H
T$(L
D$0H
D$(H
T$(L
D$0H
D$(H
D$0H
D$(H
D$0H
D$0H
D$(H
D$0H
D$(H
D$0H
D$(H
L$0H
L$0H
T$(L
L$(H
L$(L
D$(H
D$0H
D$(H
D$0H
D$(H
D$0H
D$(H
D$(H
D$0H
D$(H
T$(L
D$0H
D$(H
D$0H
D$(H
D$0H
D$(H
D$(H
D$0H
D$(H
D$0H
D$(H
T$(L
D$0H
D$(H
D$(H
D$0H
D$(H
D$0H
D$(H
T$(L
D$0H
D$(H
D$(H
D$0H
D$(H
D$(H
D$(H
L$(H
L$(L
D$(H
D$(H
L$(H
L$(L
D$(H
D$0H
D$(H
T$(L
D$0H
D$(H
D$0H
D$(H
L$0H
T$(H
L$0H
D$0H
D$(H
D$(H
D$0H
D$(H
D$0H
D$(H
L$(L
T$8L
T$8L
T$8L
T$8L
T$0H
L$(L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$8L
T$0H
L$(L
T$8L
T$8L
T$8L
T$8L
ATSH
AVAUATUSH
usE1
]A\A]A^
]A\A]A^
ATSH
([A\
AWAVAUATUSH
[]A\A]A^A_
ATUS
[]A\
[]A\
ATUS
[]A\
k =!
k []A\
AVAUI
ATE1
[]A\A]A^A_
tOUH
ATUSH
;8}	[]A\
#[]A\
[]A\
AUATUSH
[]A\A]
~lIc
[]A\A]
AVAUI
A\A]A^A_
0<	v
0<	w
ATUSH
<_u#
[]A\
ATUH
0<	v
_u4H
[]A\A]
tWUH
[]A\
AVAUATA
[]A\A]A^
AUATUSH
[]A\A]
[]A\A]
]A\A]
AWAVAUATI
<:tp
td</t`
[]A\A]A^A_
AVAUATL
]A\A]A^
~hIc
[]A\A]A^
]A\A]
tc:/usr/A
D$(etc
D$ L
]A\A]
	u H
t"E1
[]A\
ATUSH
[]A\A]
AVAUATUH
]A\A]A^
]A\A]A^
AWAVI
AUATI
xpu6f
[]A\A]A^A_
,$I)
[]A\A]
[]A\A]A^
[]A\A]A^
[]A\A]
ATUH
[]A\A]
[]A\
[]A\
ATUH
ATUH
\$ [A
A\A]A^
ATSH
AUATI
[]A\A]
[]A\A]
ATUS
[]A\A]A^
AWAVAUA
[]A\A]A^A_
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
tWAUL
[]A\A]
tgATUH
AVAUATUSH
A9D$
A9D$
IcD$
[]A\A]A^A_
AUATA
[]A\A]
AULc
]A\A]
]A\A]
AWAVAUE
D$(1
gfffffffH
gfffffff
D$(dH+
[]A\A]A^A_
ATUH
D$ A
]A\A]A^
tGU1
AUATUH
?/u2H
]A\A]
]A\A]
ATUSH
~$Hc
[]A\
[]A\
AUATU
<+tp<-tD
0<	wY
]A\A]
u(]1
A\A]
ATUH
"<:w
]A\A]
]A\A]
AUATI
?~tW
<$/t
]A\A]
AUATUH
[]A\A]
[]A\A]
Hc5d
AWAVL
AUATE1
|$0H
t$8L
T$,H
< tZ<	tVL
D$ H
|$0H
D$8H
[]A\A]A^A_
D$ H
D$ H
|$,H
|$,H
[]A\
AWAVAUATUSH
|$01
D$8I
w(E1
L$ H
T$(H
t$<H
D$0H
H[]A\A]A^A_
D88u
T$(L
L$ H
A\A]A^A_
ATUH
l$ I
[]A\A]A^
0<	v
[]A\A]A^
AUATUH
[]A\A]
ATUH
AVAUATUSH
D$(1
D$(dH+
[]A\A]A^A_
E9)~p
[]A\A]
AWAVAUI
ATUSH
[]A\A]A^A_
[]A\A]A^A_
AVAUATUH
[]A\A]A^
AWAVAUATUSH
t$8H
T$@H
L$HL
D$PL
)D$`
)L$p
D$(1
D$0L
Hc;H
D$(dH+
[]A\A]A^A_
ATUSH
[]A\A]
AUATUSH
[]A\A]
AUATUSH
[]A\A]
A\A]A^
[]A\H
0A]1
[]A\A]A^
AUATI
<;uZA
[]A\A]
ATUSH
AUE1
ATE1
tGf.
]A\A]A^
[]A\A]A^
t1<_
0<	w"H
AUATUSH
[]A\A]A^
[]A\A]A^
ATUL
AWAVAUATUSH
([]A\A]A^A_
+=KQ
t5f.
[]A\A]A^A_
AWAVAUATI
[]A\A]A^A_
D:>u
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
 []A\A]A^
[]A\A]A^
AUATUSH
[]A\A]
[]A\A]
AWAVAUATUSH
~u	@
[]A\A]A^A_
AVAUATUSH
t$HH
t$(L
D$0H
D$ H
D$8I
L$(H
t$0E
D$ PAW
D$4PD
L$0D
t$pI
PAWD
L$,D
L$8H
T$hH
T$dH
[]A\A]A^A_
?cu!H
|$XM
D$81
l$ 1
L$(I
L$(A
D$ 1
l$0E
L$PA
L$HH
L$PH
l$@H
D$@H
L$@H
D$HH
D$HH
L$(H
D$0H
D$0H
D$(H
D$P;
D$@H
T$hH
T$dH
L$ E
D$0H
D$0H
D$0H
D$(H
t$HH
t$lH
D$HH
t$(H
L$HH
AWAVAUATUSH
[]A\A]A^A_
\$(L
D$ H
T$(D
L$0H
T$(D
D$0H
L$ H
T$(A
[]A\A]A^A_
\$(L
D$ H
T$(H
T$ A
\$(H
|$0H
D$PH
T$PH
D$HH
D$PL
|$(M
|$0L
DD$ 
D$HH
T$HH
D$dA
D$HH
\$HH
D$HI
t$XHcD$
D$pH
	~5A
c~*A
D;d$x
L$PE
D9|$
T$|B
D$HH
+t0H
\$8H
T$ tK
|$(H
\$0H
D$HH
D$8D
D$ H
D$ H
\$HD
|$8L
|$8L
T$(L
D$ D
T$(L
D$ 1
D$PD
D$HH
D$HL
T$PH
L$HL
L$Ht=H
l$H1
D$HH
L$XH
L$dH
L$dH
L$XL
|$h1
D$PD
\$dH
D$ H
L$ D
D$PH
\$PL
T$PL
\$PL
T$dH
\$dL
D$HL
D$HL
AUATI
[]A\A]
[]A\A]
AWAVAUATA
[]A\A]A^A_
AVE1
D$,1
0[]A\A]A^
0[]A\A]A^
D$$1
AWAVAUA
ATUH
|$0H
|$(L
urE1
[]A\A]A^A_
|$(L
T$ H
AWAVAUATA
L$<L
D$`I
D$8H
D$XH
HcD$XI
LcD$\
D$8H
|$\D
D$XD
HcL$
L$(D
L$(H
L$0H
L$(D
L$(H
L$0H
ylLcD$\
L$@H
t$0H
L$(H
t$0L
|$8D
L$<I
HcD$H
|$H9}
[]A\A]A^A_
L$HL
;8u[H
D$HA
G(E1
9O,D
G(E1
9G,A
AVAUATI
]A\A]A^
AVAUATI
[]A\A]A^
AUATI
H;8t
[]A\A]A^
AVAUI
ATUH
]A\A]A^
AVAUI
ATUSH
]A\A]A^
AUATI
D$81
D$8dH+
]A\A]A^
ATUH
[]A\
AVAUATUH
A\A]A^
ATUH
ATUSH
 []A\
@u	1
AWAVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
AVAUI
ATUS
[]A\A]A^
AWAVAUATUSH
D$ H
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
ATUS
[]A\A]A^
ATUSH
[]A\A]
[]A\A]
AUATUSH
[]A\A]A^
AVAUATI
H;=J
uKL;=
t]L;=
t	L;=
L;=s
$ugE
[]A\A]A^A_
L;=Y
T$(L
T$(L
+8Hc
<$H+8H
tEATI
[]A\
t<[]A\
AUATU
[]A\A]
]A\A]
AUATI
[]A\A]
]A\A]
]A\A]
[]A\
AWAVAUA
ATUSH
[]A\A]A^A_
AWAVI
ATUH
D$(%
[]A\A]A^A_
<$Hc
ATUSH
[]A\
AVAUATI
]A\A]A^
t-I9
[]A\A]
[]A\A]
[]A\
[]A\
[]A\
AUATUSH
[]A\A]
AWAVA
AUATUSH
L$(D
D$<D
T$@L
T$HH
T$PH
T$XH
oP f
oX0L
o`@f
ohPA
op`f
oxpA
L$`H
L$`H
T$hH
D$pM
t$xL
\$ H
l$8L
9H,u	H
[]A\A]A^A_
D$(H
D$0H
L$8E
|$<1
AVAUI
]A\A]A^
[]A\
ATUH
[]A\
[]A\A]
ATSH
ATUH
@ttH
t)SH
AWAVAUI
ATUSH
[]A\A]A^A_
[]A\
AWAVI
AUATUSH
[]A\A]A^A_
AVAUI
]A\A]A^
]A\A]A^
]A\A]A^
AWAVI
AUATUSH
[]A\A]A^A_
A\A]
]A\A]
AWAVAUATE1
Hc\$
([]A\A]A^A_
ATUSH
[]A\
AVAUATUH
]A\A]A^A_
L$(@I
AWAVAUATA
9A9},
A9U,tf%
[]A\A]A^A_
I#E(H
ItwE
AVAUI
ATUH
D$(I
[]A\A]A^A_
ATUH
[]A\
t$(I
ATUH
L$(@L
[]A\
t$(I
L$(@I
[]A\
AWAVAUATI
[]A\A]A^A_
[]A\A]A^A_
D$(A
AVAUE
ATUH
D$(H
D$(H
[]A\A]A^A_
D$(I
D$(%
D$(I
T$(A
D$(I
H9h 
D$(%
AWAVAUATUSH
([]A\A]A^A_
([]A\A]A^A_
T$ I
T$ D
gfff
 []A\
ATUH
]A\A]
(]A\
ATE1
([A\
AUATUH
]A\A]A^
AVAUL
U(H9Y 
$H9Z 
U(	P(H
]A\A]A^
AVAUATUH
]A\A]A^
[]A\A]A^
AVAUA
D$(H
[]A\A]A^
]A\A]A^
T$ L9
AWAVI
[]A\A]A^A_
AWAVAUATI
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AWAVAUI
ATUSH
([]A\A]A^A_
([]A\A]A^A_
([]A\A]A^A_
AVAUI
ATUSHc
[]A\A]A^
AWAVAUI
d$xD
|$xH
\$pA
t$(H
D$ H
[]A\A]A^A_
D$ E1
D$(H
ATUD
d$hH
D$`E
$~%I
L$pH
T$pL
AWAVAUATUSH
HcD$
Hcl$
([]A\A]A^A_
BASH_FUNL
AWAVAUATUSH
[]A\A]A^A_
8+u	
ATUH
]A\A]
ttATI
AWAVI
AUATUSH
 ufL
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
ATUSH
[]A\A]
[]A\A]
 u	H
AUATUSH
[]A\A]
[]A\A]
AUATUSH
[]A\A]
[]A\A]
0<	w
ATUH
E(	C(
Dt6H
AWAVAUATUSH
[]A\A]A^A_
A\A]A^A_
AWAVAUATUSH
E9t$
]A\A]A^A_
E9t$
A\A]A^A_
ATUSH
[]A\
x:<St^H
AWAVAUATUSH
[]A\A]A^A_
AVAUATUSH
D$x1
d$PH
D$P5.1
\$DE1
t$01
D$8D
|$0A1
T$0H
D$xdH+
[]A\A]A^A_
D$ H
t$(H
T$ A
AUATU
[]A\A]
AUATUSH
[]A\A]
ATUSH
[]A\
ATE1
[]A\A]
ATUSH
[]A\
AUATA
[]A\A]
ATUS
[]A\
AUATL
[]A\A]A^
<$Lc
AVAUA
]A\A]A^
AUATI
]A\A]
ATUS
A9\$
[]A\
AUATU
$A9l$
]A\A]
AUATUSH
[]A\A]
ATLc
[]A\A]A^
AUATUSH
A9\$
A9\$
[]A\A]
AUATUSH
[]A\A]
t5;h
[]A\
t(;h
AVAUATI
]A\A]A^
]A\A]A^
uRUSH
t2H9
t]H9
tdH9
HcC09
t)Hc
HcC4
HcS0H
AWAVAUATA
[]A\A]A^A_
|$ L
[]A\A]A^A_
ATUSH
[]A\
AVAUATI
~SMc
([]A\A]A^A_
Ic<$
Ic<$
t	H;
AVAUL
ATLc
[]A\A]A^
AWAVAUATUSH
t$ L
H;+t
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AVAUATUSH
oS A
D$ [L
]A\A]A^
tWU1
ATUSH
|$ A\
AWAVAUATUSH
[]A\A]A^A_
ATUSH
AVAUATI
]A\A]A^
</t$L
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
D$ H
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
D$ H
AUATI
[]A\A]
[]A\A]
ATUH
[]A\
[]A\
$< t
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
[]A\
AVAUATD
x.E1
A\A]A^
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
D$ H
ATUS
[]A\
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
D$ H
ATUSH
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
[]A\A]A^
AVE1
AUATUH
[]A\A]A^
AWAVAUATUSH
[]A\A]A^A_
t6x<A
AWAVAUATUSH
/wxI
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
<tJI9
AUATUSH
[]A\A]
ATUS
|u+f
[]A\
ATUS
[]A\
[]A\
AWAVAUATUSH
[]A\A]A^A_
|uVM	
&w)H
^t2A
ATUH
A\A]
D$8A
L$HA
D$ H
D$0Hc
o_HH
]A\A]
)L$ f
)T$0f
)\$@f
)d$P
)l$`
)t$p
ol$ f
ot$0f
o|$@
od$P
ol$`
ot$p
ol$ f
ot$0f
o|$@f
od$PH
ol$`
ot$p
AWAVAUATUSH
D$H1
 uOI
D$HdH+
X[]A\A]A^A_
t	H9
D$ H
D$(H
D$0H
D$ H
D$(L
D$0H
D$8D
D$ H
D$(L
D$0H
D$8D
<@t5<_
D$@H
D$@1
<>u:@
< u>H
-t-H
+tqL
u-E1
AWAVAUATA
l$0L
F Ic
[]A\A]A^A_
<unknown
T$ L
T$ A9
T$ H
l$ Ic
l$ D
L$ L
D$(M9
D;{ ~
D$ L
L$ D
T$(M
AWAVAUATUSH
HcD$ H
T$ E1
D$ D
T$(D
|$(D
[]A\A]A^A_
8[]A\A]A^A_
AVAUI
ATUSHc
D9p0t
D9p4A
[]A\A]A^
[]A\A]A^
[]A\H
A]A^HcH
AWAVAUATUSH
l$0H
A9>t
[]A\A]A^A_
AWAVAUATUS
|$ H
[]A\A]A^A_
D9`0t
AWAVA
ATUSH
[]A\A]A^A_
AVAUATUS
l$ H
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUA
ATUSH
\$ H
[]A\A]A^A_
D9h0t
D9h4H
)%C0
)-H0
)5T/
)=K/
)5P/
AWAVAUATI
[]A\A]A^A_
AWAVAUATA
[]A\A]A^A_
AWAVAUATUS
t\9E
t	9E
[]A\A]A^A_
A9<$
AWAVAUATUSH
tX<'tTA
<\u	E
[]A\A]A^A_
<$I)
ATUSH
[]A\
ATUS
[]A\
ATUH
ATUH
;toA9
[]A\
[]A\
USHc
AUATUSH
[]A\A]
ATUH
AWAVAUATI
[]A\A]A^A_
tGIc}
AVAUI
ATUSH
[]A\A]A^A_
AWAVAUATE1
[]A\A]A^A_
AWAVAUATI
~@Hc
[]A\A]A^A_
<$I)
AWAVAUATUSH
tEI9
[]A\A]A^A_
[]A\A]A^A_
ATUSH
[]A\
AUATI
[A\A]]
 u	H
AUATUH
]A\A]
A\A]
]A\A]
ATUH
ATUSH
[]A\
AWAVAUATUH
D$81
D$8dH+
[]A\A]A^A_
D$01
L$0L
T$ H)
T$ H
D$(H
AWAVAUATUSH
D$(1
D$(dH+
[]A\A]A^A_
D$ L
L$ H)
D$(dH+
[]A\A]A^A_
u'AT
AWAVAUATUH
[]A\A]A^A_
[]A\A]A^A_
[]A\
ATE1
AWAVI
AUATUSH
D$(1
D$(dH+
[]A\A]A^A_
D$ L
L$ L)
AVAUATI
~@Hc
[]A\A]A^A_
<$I)
t/SH
ATUH
AVAUATUH
]A\A]A^
ATUH
AWAVAUATUSH
d$ H
[]A\A]A^A_
AWAVAUATUHc
L9m8
L9m@
HcE$H
HcE H
;E0t
;E4u
[]A\A]A^A_
[]A\A]A^A_
E$D9
AVAUATA
[]A\A]A^
AUATUSH
u	D;%
[]A\A]
[]A\A]
AWAVAUI
Lc8K
~BHc
[]A\A]A^A_
Lc;E1
AWAVAUI
ATUSH
4$dH
D$H1
Lc H
L9$$
Hc(A)
D$HdH+
[]A\A]A^A_
T$(H
|$<H
t$<H
L$@H
|$@L)
Lc L
D$ H
|$ L
AWAVAUATUSH
D$h1
t$8D
D$HL
D$8H
T$0H
HcT$\H
HcT$\I
L$ H
L$ H
D$hdH+
D$ H
x[]A\A]A^A_
D$<H
D$`D
d$\A
HcD$\A
t$ L
\$HH
t$@H
t$@H
t$ A
T$(L
D$\D
|$\H
d$\Mc
HcD$L
D$\A
t$LI
AWAVAUATUSH
Hc|$$L
L$$L
[]A\A]A^A_
t$$E
HcD$
Hct$$H
L$(D
D$H1
T$ Hc
H;T$
l-[L
~JHc
D$HdH+
[]A\A]A^A_
L$8H
l$8I)
t$4L
t$4L
HcD$4H
\$4Hc
T$4D
HcD$4H
^u	E
,u	E
d$@H
\$4I
'tmL
t$ M
d$@H)
D$81
L$8D
T$ I)
D$(L
T$ H
AWHc
AUE1
D$(1
D$(dH+
[]A\A]A^A_
D$ 1
L$ I)
L$ L
t$ I)
HcD$
AVAUI
ATUSH
T$ L
t$(L
D$h1
D$ 8
\$HE
T$0E
T$0L
|$(D
+D$0
D$(D
D$hdH+
[]A\A]A^A_
L$XL
HcT$
L$OL
L$@L
D$8L
t$TL
T$ D
HcD$TI
L$XL
d$XLc
t$TL
HcD$TI
t$TL
HcD$TI
HcT$0L
L$OL
L$@L
D$8L
D$0D
\$TA
T$8L
T$8L
t$`H
'trL
|$8M
t$`L)
L$XL
D$(Hc
Hc0L
HcT$HL
L$OL
L$@L
D$8L
L$OA
D$HL
t$TL
HcD$TH9
ATUSH
T$,H
D$X1
|$ H
D$XdH+
[]A\A]A^A_
,'Lc
L$8D
|$LL
\$0L
t$L1
L$8L
\$0L
Lc\$LLc
T$ 1
L$PL
D$0D
d$PH)
D$0v
d$PD
T$,L
t$LL
\$0D
L$8H
D$8H
t$0D
t$0L
AWAVI
AUATA
D$H1
D$$t
|$@M
D$HdH+
[]A\A]A^A_
tP@8
'uTA
L$8L
|$8I)
|$8A
L$(I
L$(A
d$@I)
d$@Hc
L$(E1
D$81
L$8L
D$(L
D$(H
AWAVAUATU
D$81
T$0H
't'A
D$8dH+
[]A\A]A^A_
D$(1
L$(I)
D$(A9
|$0L
D$(1
L$(I)
AWAVAUI
ATE1
D$(1
'toA
D$(dH+
[]A\A]A^A_
~PIc
xdu2A
D$ 1
L$ I)
D$ A9
L$ 1
|$ D
|$ A
AWAVA
ATUSH
T$(Hc
D$h1
D$$t
D$LB
l$ E1
t$PA
HcT$PH
T$hdH+
x[]A\A]A^A_
l$`H
l$0L
l$0E1
T$ A
L$XL
t$XI)
t$XA
L$JH
T$@D
t$0D
\$8H
t$0H
T$8H
t$Pf
T$VA
T$UL
L$UH
L$XL
T$0L
t$XI)
T$0H
l$`I)
l$`A
t$XIc
T$0Hc
t$PH
HcT$PH;T$
T$0H
t$PA
HcT$PH
H;T$
|$(H
T$0H
t$PA
AWAVAUATE1
[]A\A]A^A_
AVAUATUH
]A\A]A^
AWAVAUATUSH
t$\H
L$HD
D$(L
L$PH
D$0dH
D$h1
D$8H
D$`1
T$8N
L$ H
d$8H
< u&
L$LH
D$ H
D$ H
D$ L
T$HH
D$@D
t$,H
< uGE
<'t2<"t.I
D$ H
D$ H
l$ L
<'t&<"t"I
l$ f
HcD$H9
D$PH
D$0H
D$8H
L$ H
L$ H
D$hdH+
D$ H
x[]A\A]A^A_
T$@H
t$(D
|$ H
D$PH
D$0H
T$(<	
t$ H
D$8H
AUATI
[]A\A]
AWAVI
AUATA
[A\A]A^A_]
AWE1
AUATA
~uTD
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
:+u	
E(Dt
A9E,
Lcd$
$A9U,
E(@u
M(@I
AWAVE1
AUATA
D$(1
D$(dH+
[]A\A]A^A_
D$(dH+
[]A\A]A^A_
D$ 1
L$ I)
AUATUSH
[]A\A]
]A\A]
AWAVI
AUATI
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSH
D$81
D$8dH+
H[]A\A]A^A_
|$ H
t$ A
|$ I
t$(L9
L$0H
t$(L
D$8dH+
[]A\A]A^A_
D$8dH+
t$(f
|$ I
|$ I
|$ I
AWAVAUATUSH
[]A\A]A^A_
ATUSH
L$ L
8[]A\A]A^A_
L;l$
L;l$
L9t$
L9t$
L9t$
D$ A
D$(L
D$ H
D$(H
\$ L
\$(H
AWAVAUATUSH
D$81
D$8PD
D$8dH+
[]A\A]A^A_
|$0L
<#t,
D$(A
tRHc5[
tGATUH
t/Hc
]A\H
AUATI
}THc
[]A\A]A^
t2Hc
[]A\
AWAVAUATUSH
T$(dH
D$X1
D$0H
D$(H
L$HL
D$@L
L$HI
D$XdH+
[]A\A]A^A_
L$HL
D$(H
t$(L
\$ H
\$ I
\$8L
L$ H
\$8L
L$ H
t$(K
L$ L
L$ L
\$ H
D$(H
d$@A
t$(I
T$0L
\$P1
L$PL
L$ L)
L$ H
\$PA
t$(L
AWAVAUATUSH
<$dH
D$81
T$,E1
/dev/fd/I
D$8dH+
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
D$8D
D$4E
L$PH
L$PA
T$LL
L$`I
=Vy	
T$0E
L$dL
L$,L
L$,H
T$xL
T$xL
L$pI
=Bu	
0<	v2
0<	w
AUATUSH
D$(1
<@tC<*t?H
T$ 1
HcD$
|$ H
HcD$
|$ H
T$(dH+
8[]A\A]
t$ L
DtzH
HcD$
HcD$
HcD$
AWAVAUI
ATUH
D$(dH+
[]A\A]A^A_
D$(dH+
[]A\A]A^A_
D$(dH+
[]A\A]A^A_
D$(dH+
D$(dH+
[]A\A]A^A_
D$(dH+
AWAVAUATUSH
[]A\A]A^A_
AWAVI
AUATA
D$X1
|$DI
T$(L
|$@@
T$(H
l$DL
D$DL
D$P$@
t$QH
t$PH
D$DfA
T$XdH+
h[]A\A]A^A_
t$DL
HcD$DE1
|$DD
t$@E1
|$@L
d$@I
d$DH
L$<E
|$@H
|$@I
|$DH
HcD$DL
8u3H
8 t'
HcD$DL
D$@H
\$ D
d$,M
HcD$DI
l$DA
|$PH
|$PH)
|$(L
\$ D
d$,L
D$DE1
D$DE1
|$(L
\$ D
L$HL
|$H)
L$HL
t$HD)
=zO	
=cO	
=CO	
AWAVA
D$81
t$(H
D$0H
|$0E1
t$ AVD
|$@I
D$8dH+
[]A\A]A^A_
T$01
D$ H
|$0H
D$0H
D$0H
AUATA
[]A\A]
[]A\A]
[]A\A]
=8G	
AWAVE
AUATA
t$,E
<	v4H
D$8@@
D$8@H
L$,H
|$0E1
L$0L
T$,H
D$8@@
D$HdH+
[]A\A]A^A_
55?	
5t>	
AWE1
AVAUATI
D$81
T$01
d$(M
D$(1
D$8dH+
[]A\A]A^A_
D$(1
	v.H
uS<#t
<?uK
d$(E1
AWAVAUATI
D$h1
D$`PD
[A^A
D$XA
D$(H
D$PH
D$0H
D$`H
T$LE
|$XH
D$hdH+
[]A\A]A^A_
T$0L
D$(H
T$0I
T$8L
|$(H
L$LE
D$0L
L$XL
	vWM
L$(L
L$(H
|$XH
D$(LcP
L$ 1
|$`H)
|$`A
D$PD
D$(H
D$0I
D$8Mc
d$XA)
|$XH
D$(L
D$8LcP
|$(E1
L$ 1
l$`H)
=/.	
D$0H
L$0L
D$(L
AWAVAUATI
L$0L
D$@L
L$8dH
L$8H
T$@D
L$hD
L$hD
D$(M
<	w"
0<	v
[]A\A]A^A_
^t$A
D$`~
D$PE
D$(I
t$(L
D$PH
L$8H
L$XM
t$PL
L$PD	
|$PI
D$(A
t$XH
D$XH
D$XH
D$(H
D$0H
\$PH
AYAZ
t$0H
t$P1
D$8H
|$XL
t$`D
l$hM
T$ D
L$0A
D$@H
D$(A
L$@D
D$@H
L$hD
D$XD
L$hD
D$(H
D$0H
\$@H
A[A\
|$`^
|$`,
|$`~
D$0H
l$0L
\$XH
l$`H
|$HD
A9D$
D$(H
At	M
|$0H
D$(H
D$@H
t$(H
D$PH
D$Pt
D$ H
D$(H
\$HL
H9D$p
H9D$p
D$pI
D$@H
T$ L
D$pH
D$(H
\$8H
\$xH
D$@H
T$ H
D$pH
d$p1
L$ H
t$`H
d$8L
L$0H
D$xH
D$(H
\$@H
t$@L
L$PE1
D$(H
D$xH
l$x1
\$XL
t$PH
ET$ L
d$0L
D$ M
T$ H
D$(H
\$HH
D$xL
D$@H
D$8H
t$@L
L$PD
D$xf
D$0E
A]A^H
\$xH
D$(H
set -- 
D$@H
D$8H
D$XH
AWAVAUI
ATUS
[]A\A]A^A_
[]A\A]A^A_
AUATUS
}7D)
A\A]
[]A\A]
AWAVAUATA
D$H1
<'tN<\u
D$HdH+
X[]A\A]A^A_
l$@H
T$ L
T$ H
\$ L
t$(M
\$ D
t$(I
T$ H
T$ H
l$@I)
l$@A
|$8H
L$8L
|$ H)
D$ H
AWAVAUATUSH
[]A\A]A^A_
t|US
x^Hc
AWAVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUS
thHc
]A\A]A^
AWAVAUATUSH
tNIc
t7A9\$
@8/u
[]A\A]A^A_
D#l$
AVAUI
ATUSH
tvE1
D8'u
[]A\A]A^A_
tVAT1
AVAUATI
[]A\A]A^
]A\A]A^
AWAVA
[]A\A]A^A_
tgAUATI
[]A\A]
E9l$
AVAUA
ATUSH
([]A\A]A^A_
H;\$
DtjI
RtcH
ATUH
[]A\
H;=y
AUATI
]A\A]
AUATUH
A\A]
AUATUH
A\A]
AUATI
]A\A]
[]A\
t?UH
AUATU
D$ H
[]A\A]
AWAVAUATUSH
B  u
oR A
@  t
H  H
[]A\A]A^A_
D;0u
tOATUH
G  u
ATUH
xa9=;
tAHc
E  u
tHHc
H+s(u
ATLc
[]A\A]
AWAVAUATUSH
[]A\A]A^A_
<\tD<]u
t`</u
<wAH
u:E1
AVAUATUSH
[]A\A]A^A_
trHc
<]tF
t'<]
=<]tPA
AWAVAUATUH
D$(1
D$(dH+
[]A\A]A^A_
L$ H
|$ H)
|$ L
AWAVAUATUSH
[]A\A]A^A_
 u	1
AWAVAUATUSH
L$(L
D$@H
D$(H
L$S1
T$8M
T$8I
L$@H
T$4Y^L9
L$(H
t$|H
\$$D
T$@H
T$8I
\$0	
t$$E
D$`H
L$XH
t$8H
L$XH
D$`I
T$|D
T$`D
L$XHc
t$8HcL$XH
HcT$`I
L$8A
t$TL
t$|Hc
T$|D
D$|E
|$8H
t$|H
D$(H
T$`D
D$XH
L$8M
L$8D
T$`I
T$`D
D$XH
T$`D
D$XH
;D$|
9t$H
T$8I
[]A\A]A^A_
T$@1
L$LE
T$8I
t$8H
D$XLc
T$`D
D$XH
L$8I
ED$ 
L$`H
t$XH
L$`H
D$8A
T$XL
L$8M
L$`I
L$8L
|$0H
L$8H
L$8H
L$8t(H
L$8I
D$`H
T$XH
t$8H
T$XH
D$`I
D$8H
T$hD
T$8M
L$XD
L$`L
T$hI
L$8L
T$`D
T$`D
T$@H
L$8I
T$XL
T$XH
L$XL
t$8H
L$XH
L$8M
L$8H
Hcl$|
T$`D
L$XH
t$8D
L$XH
T$`I
T$@H
T$XL
L$8I
T$@H
T$hD
T$8I
D$@1
T$XH
L$8L
L$8L
T$XH
T$XD
T$XD
HcL$XHcT$8
D$XH
D$XH
D$XH
D$XH
AUATUH
]A\A]A^
tRATUH
AWAVAUATUSH
D$(A
D$(H
D$(H
8[]A\A]A^A_
T$ H
AWAVI
D$h1
|$XL
t$PH
|$`H
|$XH
D$(H
D$49
|$XE1
D$hdH+
[]A\A]A^A_
D$hdH+
]A\A]A^A_
|$XE1
\$ L
H9\$
t$(L
\$ L
|$XH
HcL$4
t$(L
|$XE
\$HL
l$@H
H9\$
DD$4Lc
L9l$
\$09
l$ L
\$8L
D9t$0
t$(H
D$8L
l$@H
\$HD
|$XI
l$ H
AVAUATUH
.t7L
]A\A]A^
]A\A]A^
T$HH
T$XH
[]A\
AVAUATUSH
l$ L
T$hH
[]A\A]A^A_
H;\$h
L;t$x
H;L$PL
[]A\A]A^A_
AWAVAUATI
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
?w,ATSHc
ATUH
At7L9m
[]A\A]A^
ATUSH
[]A\
[]A\
[]A\
AUATSH
[A\A]
[A\A]
USHc
ATUSH
At%A
[]A\A]
H9Cxt[
AUATUSH
[]A\A]
[]A\A]
[]A\A]
ATUH
L$(A
T$(H
D$DHcD$
d$HH
D$ H
|$ H
D$ H
T$0H
t$0H
T$8HcL$
oW f
o_0f
og@f
)D$`f
ow`f
)L$pf
T$\H
od$`
ol$pH
)w f
)g@f
HcT$
AWAVAUATUSH
D$ H
D$ H
D$ H
D$(H
d$0L
L$(A
[]A\A]A^A_
ATUH
 ]A\A]
 ]A\A]
[]A\
tbH;
AVAUATUSH
[]A\A]A^A_
AVAUATUH
[]A\A]A^
AUHc
ATUH
[]A\A]
D$  Mc,$u
ATUS
[]A\
AWAVAUATI
[]A\A]A^A_
AWAVAUATUSH
t$DdH
[]A\A]A^A_
L$\L
D$X1
\$XE
D$`-
t$p1
?-uCH
T$p1
D$(H
D$8H
D$0I
\$ H
t$(H
T$0H
(Hc|$
HcT$ L
HcD$
D$`-
D$ H
?[t`L
l$HL
D$ 1
L$HH
T$0H
L$ H
t$ Hc
t$HH
HcT$ L
T$ A
L9t$
D$@L
D$@H
T$01
T$01
AWAVAUATUSH
([]A\A]A^A_
D;d$
Hct$
([]A\A]A^A_
AUATUSH
[]A\A]
t2Hc
AUATUSH
[]A\A]
AUATU
]A\A]
H;5l8
AWAVAUATUSH
Lc#L
[]A\A]A^A_
?-u&
<=tU
<!td<-uJ
ft 1
AWAVAUATUSH
[]A\A]A^A_
AUATUSH
[]A\A]
]A\A]
AVAUATUH
A\A]A^
tgATI
I9\$
[]A\
tGATUH
ATUSH
D$ H9
[]A\
ATUH
[]A\A]
tWAUATUH
[]A\A]
ATUH
tgATI
I9\$
[]A\
ATUH
u	H9
[]A\A]
[]A\A]
[]A\A]
[]A\A]
t|H9w
~KL9
H90|
H90tX
H90~
ATUSH
[]A\
[]A\
AWAVAUATUSH
[]A\A]A^A_
D$(L
ATUSH
[]A\A]
[]A\A]
AUATUSH
5Rl	
[]A\A]
AWAVAUATA
5mh	
AUATI
D$XH
[]A\A]
AUATI
([]A\A]
ttk<e
ATUSH
5*d	
<!tD<-u
[]A\
[]A\
t]AU1
]A\A]
A\A]
AUATI
[]A\A]
AUATI
D$(H
[]A\A]
AVAUATI
]A\A]A^
AWAVAUATUH
[]A\A]A^A_
ATUSH
[]A\
AWAVAUATUH
=m[	
T$ L
T$ H
<$Ic
T$(H
t$ L
$$Ic
8[]A\A]A^A_
<\t 8
<$Lc
T$(L
D$ H
T$ L
<$Hc
I9\$
[]A\
AWAVAUATUSH
[]A\A]A^A_
ATUSH
[]A\A]
[]A\A]
AWAVAUATUSH
|$8H
t$ H
D$ H
D$81
D$4f
T$0Lc
t$4Ic
D$ M
L9t$
H9L$(tRH
D$ H
D$ H
H[]A\A]A^A_
D$8H
D$ H
D$ H
tgATI
I9\$
[]A\
ATUSH
[]A\A]
[]A\A]
tgATI
I9\$
[]A\
ATUSH
[]A\A]
[]A\A]
t_UH
tVATI
A9l$
[]A\
AVAUATUS
(H9k
[]A\A]A^
]A\A]A^
AVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
>[u\1
([]A\A]A^A_
AWAVAUATUSH
D$81
I9D$
I9T$
t"Hc
D$8dH+
[]A\A]A^A_
AWAVAUATUSH
D$81
D$ A
$t&A
|.D)
D$8dH+
[]A\A]A^A_
5QU	
AWAVI
AUATE
[]A\A]A^A_
[]A\A]A^A_
D$ H
]A\A]A^
D$ H
]A\A]A^
D$(@t
[]A\A]
]A\A]A^
]A\A]A^
]A\A]A^
@u-I
AWAVI
}lIc
[]A\A]A^A_
[]A\A]A^A_
ATUH
ATUH
AVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AVAUATUH
]A\A]A^
]A\A]A^
T$(I
T$(E
p t5H
L$(@I
[]A\A]A^
[]A\A]A^
T$(I
T$(E
ATUH
[]A\A]
@(@t
[]A\A]
AVAUI
ATUSH
D$X1
D$PL
D$XdH+
[]A\A]A^A_
|$8M
\$(D
u<<[
\$(M
T$ H
D$P1
D$0H
D$PA
|$8M
D$0E)
t$HH
Hct$@Mc
HcD$0L
AVAULc
[]A\A]A^
t E1
AWAVI
D$81
L$,H
T$0@
@(@t
D$0A
HcT$,
D$8dH+
[]A\A]A^A_
HcD$,
D$0I
=]A	
|$8H
t$ H
\$01
D$,L
=;@	
t$ L
D$ H
H9D$0
H[]A\A]A^A_
D$,H
t$ L
D$(1
D$ H
L$0H9
[]A\A]A^A_
]t|A
E(@uE
T$,L
=h<	
E(@u
t$01
L$8H
L$ H
D$(L
D$ 1
D$0M
\$0H
D$ A
|$8H
D$(K
=68	
L$ 1
]A\A]
AUATI
]A\A]
AVAUATA
@tfI
]A\A]A^
A\A]A^
]A\A]A^
]A\A]A^
AWAVAUI
D$(1
HcT$
D$(dH+
[]A\A]A^A_
l$ L
HcD$
|$ H
HcD$
=E/	
HcD$
HcD$
HcD$
G<3w?H
L$<9H
D$8%
L$@9H
D$8%
D$xH9D$h
+D$p
D$8%
D$8%
D$8%
D$8%
5E)	
ATUSH
[]A\
tt<9
[]A\
AUE1
ATUSH
!uyA
]A\A]
(uoA
[]A\A]
[]A\A]
[]A\A]
[]A\A]
<!t%<-u'
AUATUSH
[]A\A]
]A\A]
[]A\A]
HcD$
8]ug
]uOH
[]A\A]
AWAVAUATUSH
 L9u
 L9u
|&A)
[]A\A]A^A_
AWAVAUATUSH
,[Hc
$t%A
 L9u
[]A\A]A^A_
AWAVAUI
ATUSH
HHc:H
D$81
>w)A
T$8dH+
H[]A\A]A^A_
L$0L
|$0H)
L$0L
|$0H)
t$,1
\$,H
,uVE
AWAVAUATUS1
t$lL
|$hdH
{t2H
[]A\A]A^A_
D$<)
d$hIc
D$HH
T$0H
t$pL
L$xH
D$ H)
9T$@
;\$@~
L$H9L$@
D$0H
L;L$(
D$0M
H9D$(
T$(H
\$0L)
L$HH
L$HH
t$H1
l$XL
l$0L
d$PA
H9\$(
H9\$(
d$PL
l$XHc
t$HH
HcD$<H
T$ 1
~[Hc
t$xH
D$PH
D$0H
L$@D
HcD$<H
~IIc
T$(H
HcT$
HcT$
L$0H
D$ 1
HcD$<H
HcD$<H
D$ 1
\$ L
L$xH
L$0A
L;L$(
H9D$(
L$@A
t$HL
d$PI
l$XE1
L;L$(
\$0H
D$ A
d$PL
t$HI
AVAUATUSH
([]A\A]A^A_
AWAVAUI
ATUSH
HcD$
[]A\A]A^A_
Lcl$
[]A\A]A^A_
AUATU
<\t;
uW<'
<"t{
[]A\A]
[]A\
\tC9
ugHc
AVAUATUS
&D:e
t;[H
]A\A]A^
]A\A]A^
AUATU
tVHc
]A\A]
A\A]
AUATUH
[]A\A]
$9;t
ATUSH
[]A\
"'@><
=;|&H
"'><=
;|&(H
AVAUATUS
[]A\A]A^A_
"'@><
=;|&H
"'><=
;|&(H
AUATI
]A\H
ATUSH
tPH;
t;H;
[]A\
[]A\H
[]A\H
AWAVAUI
ATUSH
D$;Hc
|$(9<$
D$;t	A9
D9<$
D+t$
L$,A
L$,H
t$0L
L$ H
L$ H
[]A\A]A^A_
D$0M
L$(9
T$;t
Lct$
L$ L
L$ H
t=Lc
H[]A\A]A^A_
AUATUH
[]A\A]
AVAUATUSH
([]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
([]A\A]A^A_
([]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AVAUATUSH
[]A\A]A^A_
AUATI
~FHc
8'tTH
[]A\A]
<#t&)
9;~uHc
ATUS1
[]A\
AWAVAUATUH
_AXH
[]A\A]A^A_
AWAVAUATUH
[]A\A]A^A_
D9-{p
AUATUH
[]A\A]
[]A\A]
AWAVAUATI
[]A\A]A^A_
x(E1
ATUSH
[]A\A]
[]A\A]
ATUS
tx[]A\
#[]A\
AUATU
]A\A]
AVAUATUSH
tA< w
u;Hc
[]A\A]A^A_
AWAVAUATUSH
t]Hc
Hc=4S
[]A\A]A^A_
thHc
AWAVAUATUSH
[]A\A]A^A_
$H9D$
[]A\A]A^A_
ATUSH
[]A\A]
AUATI
[]A\A]A^A_
AUATUH
]A\A]
AWAVAUATUSH
D$(1
Hc3D
|$ H
D9;~OH
T$(dH+
8[]A\A]A^A_
t	D9
|$ H
|$ H
D$ 1
|$ H
AWAVAUATUSH
~0Ic
([]A\A]A^A_
D;d$
xhUSH
xhUSH
AWAVAUATI
[]A\A]A^A_
AVAUL
SIc]
t?A9
<	u:[]A\A]A^
[]A\A]A^
]A\A]A^
AUATUSH
[]A\A]
[]A\A]
AWAVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATU
< t@<	t<
< t,<	t(
[]A\A]A^A_
[]A\A]A^A_
AUATUSH
thHc
[]A\A]
[]A\A]
AVAUATUSH
[]A\A]A^
AVAUI
ATU1
Hc<$K
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSHc
t0Hc
[]A\A]A^A_
trMc
ATUH
AVAUATUSH
[]A\A]A^A_
ATUH
@u!H
t	A9
~t[H
[]A\A]A^
D$(%
D$(%
AVAUATI
D$HH
D$ M
D$HdH+
[]A\A]A^A_
t)Mc
D$HdH+
]A\A]A^A_
l$(L
{u	D9
7<(u@
l$<L
D$81
/< t
D9l$8
\$89\$
D$8D
d$0I
L$8A
HcD$8
L$8H
\$DD
L$8I
\$DH
D$D1
\$DH
D9l$8
\$DA
AUATUH
D$(E1
]A\A]
AVAUATUSH
D$(1
D$(dH+
[]A\A]A^A_
HcD$
Lcl$
AWAVAUATUH
[]A\A]A^A_
t$(D
|$(L
Lc=n
Lc5B
[]A\A]A^A_
t$0H
D$H%
AWAVAUATUSH
Lc H
D9d$
D9 ~$H
 < t
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATI
[]A\A]A^A_
<$~M
AUATA
]A\A]
]A\A]
AUATUSH
4$HcT$
Lc|$
([]A\A]A^A_
H90u	
AUATUSHc
[]A\A]
AWAVAUATUSH
Hc0H
[]A\A]A^A_
Hc8~
|$$E1
Hc8~
|$0L
|t1H
AVAUL
ATUSA
[]A\A]A^
ATUSL
[]A\
ATUSH
[]A\A]
 t	H
AVAUATUSL
[]A\A]A^
ATSH
AVAUATUSH
([]A\A]A^A_
ATUH
[]A\
AUATUH
[]A\A]
]A\A]
ATE1
[]A\
ATUH
t;9~
AUATLc
[]A\A]
AUATI
L$,H
D$8HcD$
$D8(t_
T$0H
D$,D
|$8E1
[]A\A]A^A_
[]A\A]A^A_
AWAVAUI
Hct$
tU<\u
}DHc
[]A\A]A^A_
}BHc
L$ L
L$ L
L$(H
t$ H
L$(H
AWAVAUATI
[]A\A]A^A_
A9\$
A9\$
H;l$
AUATI
TtsH
]A\A]
[]A\A]
[]A\A]
ATUH
AUATUSH
t!<C
[]A\A]
[]A\A]
[]A\A]
ATUSH
"tCH
\t;@
[]A\
AWAVA
[]A\A]A^A_
ATUH
AWAVA
AUATUSH
tTHc
[]A\A]A^A_
t$ H
HcD$
L$ D
Hc-K
AWAVAUA
ATUH
[]A\A]A^A_
t$ H
[]A\A]A^A_
HcD$
[]A\A]A^A_
AWAVAUATI
[]A\A]A^A_
[]A\A]A^A_
$A8E
AVAUATUH
]A\A]A^
]A\A]A^
AUATA
uRE1
[]A\A]
[]A\A]
]A\A]
Hc{ 
Hc{ 
 []A]
AVAUATA
h E1
([]A\A]A^A_
AWAVAUATUH
HcD$
[]A\A]A^A_
AUATI
[]A\A]
"tyH
,$D8
E:l$
AUATUSH
l$ H
l$(H
l$0H
l$8H
l$@H
l$HH
l$PH
[]A\A]
[]A\
AWAVAUATI
[]A\A]A^A_
AWAVAUATUSH
H9\$
[]A\A]A^A_
[]A\A]A^A_
AVAUATUSH
L9d$
([]A\A]A^A_
AWAVAUA
[]A\A]A^A_
AWAVAUATUS
D$HH
[]A\A]A^A_
AWAVAUI
D$(1
D$(dH+
8[]A\A]A^A_
Hc|$
AWAVI
[]A\A]A^A_
[]A\H
t@U1
AUATI
[]A\A]
AWAVA
ATUSH
[]A\A]A^A_
AUATL
[A\A]
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
D$ H
[]A\A]A^
]A\A]A^
AWAVL
AUE1
ATU1
[]A\A]A^A_
[]A\A]A^A_
tyA	
AVAUI
ATUSH
[]A\A]A^
AUATA
[]A\A]
[]A\A]
AWAVL
AUATU1
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUS
[]A\A]A^A_
AWAVL
ATUSH
Luc1
([]A\A]A^A_
<$-u
AUATE1
[]A\A]
[]A\A]
H9+t
[]A\A]
?-tBH
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
AWAVAUATI
D$HH
D$HdH+
|$,H
X[]A\A]A^A_
D$ H
L$8H
l$ A
D$ H
@:.u
D9l$
T$@H
Hct$@H
L$D1
t$ H
?-tfH
ATUSH
[]A\
ATUSH
[]A\
AWAVA
ATUSH
T$(D
L$0dH
AZA[H
\$ Hc
l$@D
t$LE
|$ L
l$@D
t$LE
D$`A
D$(AXAYH
\$XH
L$ H
D$ H
T$(H
l$`H
|$ H
D$ 1
\$XA
T$(A
D$8L
D$8A
l$@E
T$8L
l$@Hc
l$8I
l$8H
D$0H
T$(1
[]A\A]A^A_
T$8H
L$8H
AWAVAUATUH
t$hH
T$`H
[]A\A]A^A_
|$0H
l$|L
D$PdH
D$xH
AZA[I
t$0H
H;8t
L;|$0t
\$PH
[]A\A]A^A_
L$|I
D$ H
L$ H
|$@H
D$X)
HcT$LH
t$`L
D$hH
T$8H
t$@L
D$`H
D$`H
T$ H
t$(L
D$`H
L$8H
D$XH
t$@H
D$ H
|$(1
D$XHc
D$@H
t$ HcT$@H
t$(H
D$@H
T$ L
D$@H
D$LH
L;|$0t
D$(H
D$(H
L$ H
H;8t
D$(H
D$(H
L$ H
AUATUH
0D:.u
[]A\A]A^A_
ATUH
]A\A]
AUATI
[]A\A]
AWAVAUI
D$$D
D$(H
8[]A\A]A^A_
$uMHc
T$(L
	vA<-te~
<?uRH
<+w7H
0<	v
AWAVAUATUSH
[]A\A]A^A_
Hc0H
L9 t
]A\A]
A\A]
AWAVL
ATE1
[]A\A]A^A_
<StD<Ut4H
[]A\A]
 u	H
AWAVAUATUH
;-uJ
([]A\A]A^A_
<et$<nt
AWAVAUATI
oR f
oZ0A
ob@f
ojPA
or`f
ozpA
[]A\A]A^A_
AUHc
/tbH
[]A\A]
[]A\A]
]A\A]
AWE1
AVAUL
t$@L
:+t 
7w/HcD
[]A\A]A^A_
t(Hc
D$ %
\$d1
ED$0
T$@E
T$X1
Q(E1
\$ D
T$HA
\$xD
D$tL
L$h@
t$pD
\$xD
D$tL
t$pD
T$8A
D$ @
L$8D
\$ D
T$4H
E!T$(L
T$8H
D$0E
D$`L
@( t
A9A,
D$ 	
D$0I
t$(H
D$8H
t$(H
t$8H
t$(H
T$8L
D$ @
t$\L
D$ %
D$ A
T$8H
T$8H
t$\L
l$X1
L$@E
[]A\A]A^A_
\$HE
[]A\A]A^A_
D$ A
A9D$,
t$\L
t$\L
l$(	
T$DH
Q(E1
D$ @
\$(E
L$8D
L$8D
D$ %
t$X1
\$8H
\$8I
l$4L
L$(D
L$(H
A9A,
\$8H
\$8I
t$X@
L$XE
L$ D
L$ I
T$4H
T$8L
L$(D
T$8H
L$(D
T$ L
T$ L
T$ L
L$(D
L$(D
T$4H
T$8L
L$(D
T$8H
\$HL
L$(D
T$4H
T$8L
L$(D
T$8H
L$pD
\$HA
L$HD
\$8L
\$8L
t$(@
D$ H
D$ L
L$(D
L$PH
L$HH
T$8H
L$PL
L$HD
?-tJH
AVAUL
ATU1
[]A\A]A^A_
o_ A
_struct
_loaL
_builtinf
HcD$
L;%k
T$(L
t$(A
AVAUATI
[]A\A]A^
t$H;
t$ 1
AWAVAUATUSH
[]A\A]A^A_
D$HH
D$PH
D$PH
\$`H
D$XE1
l$hL
L$@H
\$`H
l$hD
op f
D$0H
D$0H
L$(H
L$ L
)P f
)X0f
L$@H
op f
L$pH
T$8H
T$xL
T$xH
L$0H
L$<E1
[]A\
+[]A\
D$ H
D$,H
T$,H
oW f
og@f
ow`f
AUATI
l$0H
[A\A]
D$(H
t$01
AUATE1
autH
[]A\A]A^A_
M9.t
L9(t'I
D$(%
ATUSH
[]A\A]
?-tMH
?-tBH
AWE1
AUATUH
D$(1
D$(dH+
[]A\A]A^A_
D$(dH+
]A\A]A^A_
D;d$
l$ I
|$ H
\$ H
l$ H
|$ H
l$ H
l$ H
ATUSH
[]A\A]
[]A\
[]A\
AWAVAUATUSH
[]A\A]A^A_
4$E	
AWAVAUE1
[]A\A]A^A_
D$ H
D$ H
\$8D
l$LI
D$ 1
D$0L
d$(I
HcT$0H
|$(L
D$ L
d$(H
D$ H
|$(L
D$XH
D$hH
D$hB
D$XH
|$hL
D$hH
D$hB
D$XH
L$PH
D$hH
L$PH
D$hB
t$PL
|$PL
D$8H
D$ H
D$0H
D$(H
|$8Ic
D$@L
Ct$0
v#f.
T$ L
L$(D
D;t$ |
L$L9
Lct$L
D$(H
H9D$@L
FD$0L
D$@L
T$ L
;T$ |
D9l$
t$pD
D$hD
t$8H
D$(L
t$8H
AVAUATL
D$(1
D$(dH+
[]A\A]A^A_
l$ L
|$ H
t$ L
D$(dH+
8[]A\A]A^A_
t$ L
T$ H
Hc6H)
D$(dH+
Hc6H9
D$ H
T$ Hc
x,H9
AVAUL
ATLc
D$h1
t$ H
D$hdH+
p[]A\A]A^
AUATUH
[]A\A]A^
&[]A\A]A^
AUATL
\$(D
ta[L
]A\A]A^
]A\A]A^
]A\A]A^
[]A\A]A^A_
ATUSH
[]A\A]
O(Ic
O(Ic
O(Ic
O(Ic
O(Ic
O(Ic
O(Ic
O(Ic
O(Ic
O(Ic
AVAUATL
<ot*
[]A\A]A^A_
<wtW<xu
[]A\A]A^A_
-t:A
[]A\A]A^A_
D	t$
AUE1
ATE1
[]A\A]A^A_
Ic|$
AVE1
ATE1
[]A\A]A^A_
l$ L
}3Hc
AWAVAUATUSH
Lu9A
<st<<nt8<-
<suT
|$ L
[]A\A]A^A_
[]A\A]A^A_
?-tnH
AVLc
[]A\A]A^
]A\A]A^
AWE1
AVAUE1
D$h1
D$hdH+
[]A\A]A^A_
D$PH
D$PH
D$PH
D$PH
T$ H9
l$PM
D$(H
D$`H
D$8H
D$XH
D$0M
|$@D
l$HL
|$8E
H9D$@~
l$HH
T$8H
t$0E
|$ H
|$(L
t$@H
L$ H
D$(H
D$HH
T$HH
AUE1
ATE1
[]A\A]A^
]A\A]A^
<	wb1
]A\A]A^
AWAVAUATUSH
D$(1
l$ E1
|$ H
T$(dH+
8[]A\A]A^A_
+T$ 1
D$ H
AUATUH
[]A\A]
AWAVAUATUSH
D$(1
H+D$ H
D$ H
x[H9
tOHc
D$ H
D$(dH+
[]A\A]A^A_
\$ I
AWAVAUATUSH
Hc5yn
[]A\A]A^A_
Hc51l
AWAVAUATUSH
.~PL
[]A\A]A^A_
AVAUATUS1
D$(1
](E1
D$(dH+
[]A\A]A^A_
AWE1
AVAUE1
D$pH
'wxHc
d$,L
[]A\A]A^A_
D$ 1
D$TE
D$hH
t$,H
D$TD
|$ H
\$HH
D$ E1
t$hH
D$0H
|$(H
t$pD
d$xH
|$$L
l$`H
uKHc
D$XH
|$ H
D$8E
Hcl$
|$ H
|$ H
0t'H
D$@H
d$(Hc
l$`D
D$Pt
L$8E
l$|H
L$<L
t$hL
\$ H
\$ H
D$XH
D$XH
|$0H
D$<H
t$HH
t$ L
l$`D
l$`A
t$hH
T$<L
|$ H
9|$ 
l$`D
|$ H
T$<H
L$ ;H
?-tBH
[]A\A]A^
AWAVAUI
[]A\A]A^A_
+t*H
-tSH
-t7H
=TF	
ATUSH
[]A\
AUATUSH
[]A\A]
AWAVAUATUSH
5*G	
([]A\A]A^A_
[]A\A]A^A_
AUE1
ATU1
D$81
D$8dH+
[]A\A]A^A_
$$A!
D$.I
T$.A
t$(E
t$0H
T$/D
L$ H
D$.A
t$(E
A(Du
L$ D
L$ H
T$01
|$ H
t$0L
t$(E1
AWAVAUATA
[]A\A]A^A_
AWAVAUATUS
[]A\A]A^A_
AVAUATUS
[]A\A]A^A_
G( t
9O,t
AVAUATI
[]A\A]A^
[]A\A]A^
	E(H
A	](I
]A\A]A^
AVE1
AUE1
ATE1
D$hH
D$$E
T$,E
L$$A
D$`E
D$br
HcD$L
L$KHcD$@L
t$`H
T$8L
`HcD$D
L$0H
L$0H
T$hdH+
x[]A\A]A^A_
D	}(
T$(1
|$PL
?-t~H
AVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
H9(t
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AUE1
ATUH
fu!A
[]A\A]
[]A\A]
ATUSH
[]A\
[]A\
AWAVL
AUATE1
[]A\A]A^A_
[]A\A]A^A_
0<	v
-u#A
AVAUATI
t7D:.u
[]A\A]A^A_
AVAUATL
<au$H
>-u;A
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSH
D$X1
D$XdH+
[]A\A]A^A_
au1A
}\Hc
|$81
D$XdH+
[]A\A]A^A_
|$8D
d$,M
D$$1
|$(I
t$@D
|$HD
t$81
0<	v
|$8Hc
|$0Hc
D$$E
|$(H
L9|$@L
D$(I
t{E1
[t4w>
ATUH
ATUH
AUATUSH
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
D$ H)
[]A\A]
~,LcD$
AWAVA
ATUH
T$$dH
D$H%
D$ H
D$ A
D$ A
D$ A
D$(L
t$0L
D$H%
[]A\A]A^A_
AWAVAUATL
t+D8}
[]A\A]A^A_
[]A\
AWAVAUATL
-xY	
t39M
[]A\A]A^A_
AWAVA
AUATUSH
:tUH
[]A\A]A^A_
;-tRA
AVAUATUH
H9=E
-mP	
<$Ic
[]A\A]A^A_
6<:t$
5_N	
0<	H
51M	
<_t 
t3Hc
[]A\
AWAVAUATUSH
|$XH
L$pL
D$PD
L$ dH
L9d$
d$XH
D$XH9D$
[]A\A]A^A_
\u+L9l$
H9D$
L9d$X
L9l$
l$$L
L$ L
D$0I
D$0H
\$ L
l$@L
L9d$
|$(H
D$hE
|$|H
l$HL
d$@I
L$c@
L$0 
t$8H
D8l$(
l$HL
D$cM
|$([L
d$@L
D$8A
D$8E
L$0D
\$(D9
|$(H
L$0@
L$0D
|$(H
\$0D
D$8L
d$@L
D8l$(
l$HL
d$@L
D$0M
L9d$X
D$ H
L$ L
D$pL
[]A\A]A^A_
L9l$
=r?	
5i?	
D$cA
L9d$X
D$8A
D$8E
|$(I
d$@L
l$HL
L9d$
L$0H
T$(t
T$(H
L$ H
L9d$X
|$([
=wFI
\$0M
l$@L
d$8I
D$01
l$HL
d$@L
|$hH
<8fA
l$HL
d$@I
|$hH
<8fA
|$|_
|$hH
|$hH
<8fA
|$hH
<8fA
|$hH
<8fA
|$hH
<8fA
|$hH
<8fA
|$hH
|$hH
<8fA
|$hH
<8fA
|$hH
|$hH
<8fA
D$PH
L9d$
L9d$
<$/u
L$ H
L$pE1
L$ L
D$pH
tgAUI
ATUSH
]A\A]
[]A\A]
AWAVI
AUATI
T$ H
D$(L;d$ 
L9l$
D$ I
H;l$
D$0H
D$(H
H9t$
L;|$ 
D$(H
\$0H
t$ H
H9\$ s
t$(L9t$
H[]A\A]A^A_
D$ I
D$ D
D$ L
t$ E1
L9t$ 
\$ L
t$8M
D$(H
t$ I9
D$0I9
D$8H
L$ E1
L$(I9
L$ H
H[]A\A]A^A_
T$0H9T$
D$ L
t$ E1
]A\A]A^A_
t$ E1
|u&D
AWAVAUATUSH
|$PH
L$ L
D$HD
L9d$
L9t$ 
d$PH
D$PH9D$
[]A\A]A^A_
\u+H
T$ H9T$
H9D$
L9d$P
T$ H9T$
/u	E
|$(L
D$ D
t$,M
D$0I
D$0H
d$0I
l$@M
L9d$
D$,A
d$@L
l$\M
t$ZA
t$0@ 
D9d$,
d$@M
D$ZL
|$,[L
D$0A
D$8D
|$,1
|$,1
d$@L
L$8M
D9d$,
d$@M
L9d$P
D$ L
[]A\A]A^A_
L$ H9L$
l$lI
5F&	
=G&	
-3&	
D$0E1
H9D$ 
D$ZA
L9d$P
t$lH
t$,H
t$lL
t$,I
l$pH
|$\1
\$lM
d$@M
\$pI
t$pL
d$@M
L9d$
L$ L
D$pA
t$pM
t$pM
L9d$P
|$,[
=wHI
\$8L
d$0D
l$@I
D$01
d$@M
D$HL
L9d$
L9d$
<$/u
L$ E1
D$ I
tgAUATI
]A\A]
[]A\A]
AUATI
T$ H
D$(L;d$ 
L9l$
D$ I
H;l$
D$0H
D$(H
H9t$
L;|$ 
D$(H
\$0H
t$ H
H9\$ s
t$(L9t$
H[]A\A]A^A_
D$ I
D$ D
D$ L
t$ E1
L9t$ 
\$ L
t$8M
D$(H
t$ I9
D$0I9
D$8H
L$ E1
L$(I9
L$ H
H[]A\A]A^A_
|$0H9|$
D$ L
t$ E1
]A\A]A^A_
t$ E1
AUATUH
D$(1
D$(dH+
[]A\A]A^A_
L$ H
AWAVAUATUSH
pucH
[]A\A]A^A_
D$0Hc
l$`L
D$<H
t$(L
|$(Ic
|$8f
D$<A
t$$D
T$<H
|$$H
Hc|$8H
Hct$8H
AWAVAUATUSH
D$81
D$8dH+
[]A\A]A^A_
=nC	
=(C	
D$.L
t$ A
=XA	
AWAVAUATA
[]A\A]A^A_
[]A\A]A^A_
AWAVL
AUATL
[]A\A]A^A_
[]A\A]A^A_
]A\A]A^A_
AVAUATUS
]A\A]A^
AUATUS
]A\A]A^
[]A\
AVE1
AUATL
D$81
D$8dH+
[]A\A]A^A_
AWAVAUATUH
[]A\A]A^A_
]A\A]
AWAVAUI
ATUSH
D$(1
%u	D
D+l$
D+d$
|$&E
T$(dH+
8[]A\A]A^A_
	w)f.
AUATUSH
$<'tf<"tb
"t}H
[]A\A]
[]A\A]
ATUH
AWAVAUATUH
<Vw,H
[]A\A]A^A_
t2L9
AWAVAUL
ATUH
vuuH
[]A\A]A^A_
D$HH
D$OH
|$0H
T$(1
D$0H
D$OD
D$0I
t$HL
t$HD
D$OH
D$(H
T$(L
l$(H
\$@L
L$dH
|$0D
D$dLc
HcT$h
T$0H
t$HL
L$(D
L$HH
=k|	
\$pf
T$`H
)D$p
=Dz	
l$hH
T$(L
|$(H
L$HH
=ly	
=Wy	
t$HL
t$HH
T$HM
L$HA
=pw	
=ww	
=hw	
t$HH
t$XL
AXAY
|$(L
l$(H
\$@A
L$HD)
T$HE
A[A]
T$HM
T$HL
t$(1
T$HH
AZA[
|$0H
|$0H
AXAY
5^q	
=ap	
T$HH
=]o	
5&o	
=Ho	
t$0t
=>n	
=En	
=6n	
D$(L
=,m	
AUAU
L$HH
ATUSH
[]A\
AUATI
]A\A]A^
AVAUATUSH
-Xa	
]A\A]A^
A\A]A^
AWAVAUATUSH
D$(1
L$ E
D$(dH+
[]A\A]A^A_
%pc	
%:c	
AWAVAUATL
D$81
D$0H
L$ Mc
D$8dH+
[]A\A]A^A_
T$,H
HcD$4
D$8dH+
[]A\A]A^A_
AWAVAUATE1
D$(1
L$ H
\$ H
%tZ	
%]Y	
%'Y	
=/V	
ePE1
D$(dH+
[]A\A]A^A_
@u6D
\tzA
AWAVAUA
D$81
D$8dH+
[]A\A]A^A_
t$ H
D$8dH+
[]A\A]A^A_
AVAUATUH
 []A\A]A^
AWAVAUATI
[A\A]A^A_]
-yE	
t1M9
AWAVAUATI
H;D$
[]A\A]A^A_
t$@L
D$X%
l$(M
d$ %
D$81
t$8E
|$ D
H;l$
D$<t
|$(H
T$0H
L$(E
L$(H
l$(H
D$X%
D$<E
<*u>A
*u7A
l$(H
l$(L
l$(M
ATUH
AWAVI
AUATU1
D$H1
D$8H
t$0H
D$@L
t$(H
D$8H
t$(H
D$0A
D$(H
D$@H
D$8N
D$@H
t$0H)
t$0M
t$0L
D$HdH+
[]A\A]A^A_
T$(H
D$8H
T$0H
t$0B
AUATI
D$x1
D$0H
H+l$
D$xdH+
[]A\A]A^A_
H+l$
l$0H
\$(H
AWAVAUATUSH
t$(dH
D$H1
D$<E1
D$<K
<\u*I
D$<\
D$ H
D$(L
D$HdH+
[]A\A]A^A_
AUATUSH
;w+H
[]A\A]
[]A\A]
AUATUSH
[]A\A]
]A\A]
]A\A]
AVE1
AUE1
]A\A]A^
]A\A]A^
D< ~"
<[t$<\u
<\tL<[th<:
]t[H
]tsH
]tZH
]tiH
[]A\
ATUH
]A\A]A^
5a%	
H+5R%	
5u)	
5')	
D$H1
)T$ 
T$HdH+
D$H1
D$0f
)T$ 
T$HdH+
D$H1
)T$ 
T$HdH+
D$H1
D$0f
)T$ 
T$HdH+
D$H1
)T$ 
T$HdH+
AVAUATUH
]A\A]A^
/dev/fd/L
]A\A]A^
D$(1
T$(dH+
gfffffff
CAUATUH
[]A\A]
AVAUATUH
[]A\A]A^A_
>/t	I
t$ L
D$8L
/t+L
t$ L
D$8L
AWAVAUATUSH
<$</
H94$H
|$ </
[]A\A]A^A_
,$</
|$ /A
<$</
AUATUS
[]A\A]
ATUHc
AUATU
[]A\A]
tbIcD$
[]A\A]
[]A\A]
ATUHc
tGUH
t/SH
tOATUH
t7UH
tgAUATUH
[]A\A]
t7ATUH
[]A\
AWAVAUATI
t%Lc
[]A\A]A^A_
[]A\A]A^A_
t'SH
AUATUSH
D:.u
]A\A]A^
A\A]A^
AWAVAUATUSH
|$8H
t$(dH
L$0L
</t%f.
|$@L
[]A\A]A^A_
L$ L
L$ t=L
.tOA
8.t	
t$(H
ATUH
ATUSH
'tk@
[]A\
<$]A\
AWAVAUATUH
D$(1
D$ L
D$(dH+
[]A\A]A^A_
D$ 1
AWAVAULc
[]A\A]A^A_
ATUSH
[]A\
[]A\
AVAUA
ATUH
D$81
D$8dH+
[]A\A]A^A_
D$0L
L$$H)
D$(H
\$(D
L$$H
L$$L
\$(H
AWAVAUATUSH
D$(1
t$ L
D$(dH+
[]A\A]A^A_
D$ 1
"<:w
ATUS
]A\A]A^
A\A]A^
AUATUSH
@tDA
[]A\A]
[]A\A]
AWAVI
AUATUSH
[]A\A]A^A_
ATUH
AWAVAUATUSL
omPL
o}pH
D$h%
[]A\A]A^A_
D$h%
D$h%
D$8H
H9D$P
oL$P
\$H1
oT$`f
o\$p
|$Lf
l$@L
t$(I
d$0I
|$0L
\$HH
l$@L
DD$8H
H9D$X
D$8H;
ATUH
[]A\
[]A\
AUE1
ATUH
 ]A\A]
ATUH
 ]A\A]
<.tl
t'Hc
0<	w
0<	v
t;Hc
D$H1
t$ H
T$HdH+
[]A\
AUATU
[]A\A]A^
AWAVAUATUSH
}vE1
[]A\A]A^A_
[]A\A]A^A_
AUATE1
[]A\A]A^
AWAVA
ATE1
[]A\A]A^A_
<$I)
<?wcH
?w:<
AUATUSH
[]A\A]
ATE1
[]A\A]
D$(1
D$(dH+
AVE1
AUATI
xGIc
A\A]A^A_
[]A\A]A^A_
A\A]A^A_
AUATA
[]A\A]
[]A\A]
AWAVI
AUE1
[]A\A]A^A_
D$(*
D$ L
AVAUATUS
]A\A]A^
A\A]A^
<+=u
<+=u
ATUSH
[]A\
AUATUSH
=uYH
[]A\A]
]A\A]
ATUH
]A\A]A^
ATUSH
[]A\
AWAVAUATUSH
|)D)
txIc
[]A\A]A^A_
AVAUATU
D$h1
)D$ L
)D$0
)D$@
)D$P
D$PL
D$hdH+
x[]A\A]A^A_
H9l$Ps
?/t<H
AWAVAUI
ATUSH
D$H1
)D$ 
)D$0
D$HdH+
[]A\A]A^A_
AVAUA
ATUH
[]A\A]A^A_
AUATUSH
[]A\A]
[]A\A]
[]A\A]
ATu!L
AUATUH
[]A\A]
AVAUA
[]A\A]A^
ATUS
[]A\
AUATI
[]A\A]
[]A\A]
AWAVAUATUSH
L;,$u
[]A\A]A^A_
AUATUSH
t	Lcf
[]A\A]A^A_
H9\$
HcT$
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AVAUATUSH
t$(H
T$ H
D$ H
D$ H
t.E1
8[]A\A]A^A_
t$(H
Hc|$
t$ H
AVAUATUH
[]A\A]A^
AWAVAUA
[]A\A]A^A_
AWAVI
AUATUSH
[]A\A]A^A_
AWAVAUATUSH
D$(1
~	Hc
T$(dH+
8[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATA
D$x1
D$,H
D$ H
d$HA
 u D
HcD$
L$ D
9\$(
L$8)
|$LH
d$LH
D$4L
Lct$
d$HA
T$(L
d$PH
|$HH
t$HA
Lcl$
l$ A
d$HH
9\$(
HcD$
D$xdH+
D$ H
[]A\A]A^A_
D$4Mc
D$`L
T$(1
L$PH
d$P)
d$HA
d$HA
T$(1
L$PH
d$P)
d$PA
Hc|$
d$HA
u"AT
AUATUH
D$H1
T$HdH+
X[]A\A]
d$ H
ASCIf
AWAVAUATI
L$ L
D$81
L+T$
D$8dH+
H[]A\A]A^A_
HcT$
|$41
T$(A
T$(1
T$(A
L$(@
L$(I
D$/I
t$/D
L$(I
{t^D
}tHD
D$ M
AUATU
[]A\A]A^A_
AUATUH
[]A\A]
ATUH
[]A\
8[]A\
AWAVAUATU
[]A\A]A^A_
[]A\A]A^A_
H90u
AWAVAUA
[]A\A]A^A_
[]A\A]A^A_
H;-9
[]A\A]A^A_
[]A\
[]A\
[]A\
ATSH
uJf.
AVAUATU
[]A\A]A^
uLH;
tcHc
[]A\A]A^
[]A\A]A^
ATUH
AVAUATUSH
[]A\A]A^A_
AUATU
[]A\A]
AUATUSH
[]A\A]
AUATUH
[]A\A]
AUATU
]A\A]
]A\A]
AVAUATUH
D$(A
tYE1
[]A\A]A^
AUATUSH
[]A\A]A^
AWAVAUATUSH
([]A\A]A^A_
AVAUATI
$Hc=
]A\A]A^
A\A]A^
HcO(H
ATUSIc
[]A\A]A^
AWAVI
ATUSH
}[Hc
[]A\A]A^A_
ATSH
H98t(H
t7UH
u0[1
1< tQ<	tE
<	t{
AWAVAUA
ATUSH
<	uZ
[]A\A]A^A_
u'<_t#
AWAVAUATUSH
E94$~fH
E94$
[]A\A]A^A_
<{tT<}
[]A\A]A^A_
<[u2
<{t4<}u
<]t 
<[u.
<{t,<}u
AWAVAUATUSH
[]A\A]A^A_
AVAUL
<	u-
< tf<	
]A\A]A^
AWAVAUATA
<	u]
[]A\A]A^A_
>D;}
<	uF
>D;}
AWAVAUATUSH
_uWE
<$D9
< uDf.
[]A\A]A^A_
HcD$
HcD$
AWAVAUATUSH
[]A\A]A^A_
ATUH
AUATUS
[]A\A]
[]A\A]
AVAUATA
[]A\A]A^
AVAUATI
[]A\A]A^
]A\A]A^
?D:l7
A:6u
AVAUATUS
]A\A]A^
A\A]A^
ATUS
[]A\
AWAVAUATUSH
[]A\A]A^A_
4$;0
	wWH
[]A\
[]A\
AUATI
D$XH
L$/L
D$XdH+
`]A\A]
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AUATA
[]A\A]
]A\A]
[]A\A]
AWAVAUATUSH
D$81
D$8dH+
[]A\A]A^A_
D;(}
|$ L
AUATA
[]A\A]
[]A\A]
[]A\A]
AWAVAUA
ATUSH
,$A;.}JD
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
[]A\
[]A\
AVAUATUS
[]A\A]A^
$A9E
AWAVAUATI
[]A\A]A^A_
[]A\A]A^A_
AWAVI
AUATUSH
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUH
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATLc
[]A\A]A^A_
AWAVAUATLc
[]A\A]A^A_
AWAVAUATLc
[]A\A]A^A_
AVAUATU
,t^H
]A\A]A^
[]A\A]A^
ATUSH
 []A\
ATUH
]A\A]
AVAUATUSH
x3Ic
[]A\A]A^
AUATUH
?^tc1
3[]A\A]A^
?^u	H
ATUSH
[]A\
AUATUSH
A\A]
[]A\A]
Nt/1
nt/1
ATSH
AVAUA
ATUS
]A\A]A^
A\A]A^
]A\A]A^
AWAVAUATU
[]A\A]A^A_
t`ATA
t`ATA
tXATA
tXATA
AWAVAUATUSH
D$X1
D$XdH+
h[]A\A]A^A_
D$@L
oL$ H
oT$0
D$HA
L$/D
D$0E
AWAVAUI
]L;%
[]A\A]A^A_
ATUSD
]A\A]A^
AVAUATUS
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATLc
T$(H
<$dH
D$H1
L$<L
l$@H
|$(1
<$E1
D$HdH+
[]A\A]A^A_
< E1
|$(1
T$ H
T$ H
T$ H
AVAUATA
D$(H
\$(H
HcD$
[]A\A]A^A_
t$0L
D$HA
D$(H
|$(A
D$HA
|$ L
|$(A
AWAVAUATUSH
D$X1
D$HL
D$XdH+
[]A\A]A^A_
|$PH
l$0L
t$DH
D$ H
D$@H
\$8H
T$ L
D$D9
l$0H
l$0L
t$DH
D$ H
D$@H
\$8H
T$ L
|$@H
\$(E1
L9|$
T$ H
\$(H
l$0H
\$8H
AWAVAUATUS
|$@D
A;,$~#H
D$@L
X[]A\A]A^A_
D9$$u
HcD$H
D$OH
D$0H
9T$(
D$0H
T$8E1
\$(L
t$@Hc
D;d$
L$H9L$(|h
D$(H
;D$H
X[]A\A]A^A_
D$@L
ucA9
D$@Hct$
AVAUATUH
]A\A]A^
[]A\A]A^
[]A\A]A^
AWAVAUATU
D$81
D$(L
L$'H
D$0I
l$0M
D$8dH+
[]A\A]A^A_
t$,H
D$'H
L$'D
t$,D
AUATU
$}aH
[]A\A]
[]A\A]
[]A\A]
AVAUATU
[]A\A]A^
AVAUATU
[]A\A]A^
Hc5A
<=tB<!t>A
<>toA
<>tE
=t#<<u
AVAUATUS
A\A]A^
A\A]A^
$\C-?A\A]A^
trAUATUH
[]A\A]
[]A\A]
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
tB~0H
ATUSH
Hc-@
[]A\A]
AUE1
L9#tCH
]A\A]A^
AWAVE1
AUE1
([]A\A]A^A_
AWAVI
AUATUSH
D$X1
t$0H
T$TH
D"$$D
\$(L
L$ D
L$ I
|$TL
|$TM
T$XdH+
h[]A\A]A^A_
\$HH
t$@L
L$8D
T$(D
\$HH
t$@L
L$8D
T$(D
;H9x
T$TH
\$8L
L$(D
\$8L
L$(D
vfHc
ATUH
]A\A]A^A_
AVAUATUSH
HcD$
[]A\A]A^
< t,<	t(D
AUATUH
[]A\A]
[]A\A]
[]A\A]
AUATUH
[]A\A]
[]A\A]
[]A\A]
AUATUH
[]A\A]
[]A\A]
[]A\A]
AWAVAUATA
\t	@
[]A\A]A^A_
t"H;J
]A\A]
[]A\A]
A\A]
[]A\A]
AVAUATUSH
(Lc%0
[]A\A]A^A_
HcD$
	t	M
 u+D
HcD$
Lc\$
	w1f
Lc\$
HcT$
	u+I
HcD$
Lc\$
AUATUSH
[]A\A]
AVAUATI
tjL;`
[]A\A]A^A_
[]A\A]A^A_
AWAVI
uuHct$
u5H;
[]A\A]A^A_
Hct$
D$0H
D$4H
D$8A
D$<H
D$PI
D$XL
AUATUSH
[]A\A]
Icl$
Mcl$
AVLc
1u:H
[]A\A]A^A_
[]A\A]A^A_
0u3A
1u-H
1w9I
[]A\
[]A\
AUATUSH
[]A\A]
[]A\A]
AWAVE1
AUE1
D$0H
Hcl$
D$XD
Hct$
t$ I
}!Lc|$
Hct$
[]A\A]A^A_
D$>A
d$@H
t$ I
L$ H
L$ L
D$XE
L$XH
t$HH
L$ tpH
$\M-
L$PH
L$HH
L$XH
t$ H
L$XH
L$ H
AWAVAUATUSH
[]A\A]A^A_
AVAUI
ATUH
([]A\A]A^A_
HcL$
ATUH
[]A\
[]A\
ATUH
HcW8H
E89E<t`H
AVAUATUS
D$81
x$Lc
T$8dH+
H[]A\A]A^A_
L;%#Z
L;%0Z
D$$A
D$$HcT$
IcW8I
T$0Icw
D$0A
D$$M
D$(E
IcFdMcN`L
D;|$
D;e(u
D$$I
D;|$
|$,I
D+l$
IcW`I
T$$A
L;%VN
AVAUATUSH
|$ H98H
L$@L
D$HL
L$P@8
|$(H
4$A9
L;|$ 
D$8H
D$@H
D$HH
D$PH
Hc(H
t$ I
H+T$
|$(H
L$8;
D$@H
D$HH
D$PH
 L;|$ t
[]A\A]A^A_
H+D$
|$(I
\$dI)
T$`D
L$XL
l$pD
L$XD
\$dA
\$xD
T$lI
L$`H
L$`D
D$dD
L$hD
T$lD
\$xH
gfffH
L$0D9D$p
L$`D
\$lD
T$hD
L$dD
T$hH
\$lD
L$`t
\$hD
T$dD
L$`H
L$XD
L$`D
T$dD
Hc(H
Hc(H
t$|H
|$(1
\$dD
T$`D
L$XD
T$`D
\$dA
t$ L
ATUH
[]A\
AWAVI
ATE1
[]A\A]A^A_
AVAUATUSH
D$81
D$8dH+
[]A\A]A^A_
=t>E1
D$(H
L$ H
L$ D
D$(H
D$6H
< tc<	t_
L9|$
|$6E1
|$(H
Hc\$(H
AWAVAUATI
l$@I
Lcl$
[]A\A]A^A_
u`AU
ATUH
[]A\A]
AWAVAUATUSH
D$pH
[]A\A]A^A_
D$8L
D$xt
,$L;(t
IcT$
D$ D9(
D$0D
|$8H
|$0H
D$0H
L$H9
L$X9
D$(HcT$
L$`H
T$PD
|$\A
L$PA
D$ D9(
Lcd$
\$DD
HcD$
t$DH
D$xD
D$(E1
;AVAPE
D$ D
$*A9
L$PH
\$ A
Lcl$
\$DB
D$ D9(
Lcl$
\$DB
HcD$
HcD$
D$PH
L$ A
|QD)
HcD$
t$PD
D$ 9
D;l$`
VUUUA
D$xD
u	D9
D$ L
AYAZ
4$~&D
D$xH
|$LB
D$\H
D$0H
D$PH9
\$()
l$`I
L;l$Pr
D$0D
l$`L
\$`H
\$ L
L$DE1
T$PA
T$PI
T$`A
T$`H
T$`A
T$`H
L$`I
L$PI
\$`D
D$8H
9D$0
D$0)
\$89
T$PH
T$`H
t$PH
T$`H
t$PH
L$PI
L$`H
t$PI
d$`E
T$PH
l$ D
D$DA
~ILc
d$DIc
T$PE
\$09
~rD9
|mIc
d$ H
E9.|HH
E9.u
\$\A
L$\D
Lc(D)
Jc|*
HcD$\
t$`H
t$`H
+|$0
Lc*D)
Lc(D)
Lc)D)
T$PL
T$PL
ATUS
[]A\
[]A\
AWAVAUATUSH
9:|\A
[]A\A]A^A_
[]A\A]
AVAUATUH
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
[]A\A]A^
AWAVAUATUS
[]A\A]A^A_
t_Ic
ATUH
#[]A\
AWAVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
tOSH
H9>t
AWAVA
ATUSH
D$(1
T$(dH+
8[]A\A]A^A_
AVAUATUH
[]A\A]A^
AWAVAUATUSH
[]A\A]A^A_
ATUH
t7E1
<$E1
x8SH
xpSH
AUATU
[]A\A]
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
t$(H
T$0H
L$8L
D$@L
)D$P
)L$`
)T$p
AVAUATI
]A\A]A^
A\A]A^
A\A]
[]A\A]A^
tOUSH
AVAUATUSH
]A\A]A^
ATUSH
[]A\
AWAVAUATU
[]A\A]A^A_
t-Hc
tSHc
Ht#Hc
AUATLc%"
[]A\A]A^
Lc%o
[]A\
AUATUSH
[]A\A]
[]A\
AVAUA
ATUSH
[]A\A]A^
ATUH
 t@H
[]A\A]
[]A\A]
AUATU
[]A\A]
[]A\A]
AWAVAUI
([]A\A]A^A_
t'Ic
([]A\A]A^A_
AWAVAUE1
ATUSH
[]A\A]A^A_
AUATA
[]A\A]
AVAUATUSH
},Hc
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
xhUSH
xhUSH
$[]A\
Hc3A
r]Hc3
AUATA
[]A\A]
[]A\
[]A\
AVAUATU
+[]A\A]A^
]A\A]A^
AVAUATU
+[]A\A]A^
]A\A]A^
AUATUSH
[]A\A]
~+Hc
AWAVI
ATUSH
D$$D
HcD$
D$(D
[]A\A]A^A_
D$$H
HcD$$9B
HcD$
D$HH
T$@H
;\$0
t$PE
9\$0
T$XD
D$(H
D$(D
HcL$
t$0D
D$XL
D$(E
\$HD)
L$@H
\$HLc
D$@L9
\$xL
L$`H
9@88
t$h1
ED$H1
d$`H;\$xvRL;
\$xL
d$`H
\$@L
HcT$
\$@H
owjE
t$X1
t$PL
D$PIc
t$0H
D$(D
L$@L)
D$(M9
vhL9
D$@H
|$HH
D$@H
l$@I
T$`L
\$(L
|$XL
T$`L
T$`H
D$@L
\$(L
D$(E
T$@L
T$`M9
|$H9=
l$`L
\$`L
\$hD
T$@D9
\$hD
L$xH
\$`A9
|$@L
D$`f
|$`9|$X
t$(H
L$(A
;L$$
t$0D
L$8)
D$$;
9D$$
|$$L
T$HL
\$(L
D$8D
D;D$X
D$hL
T$`L
\$(L
T$`H
D$hv
t$8D
L$XH
D$P9
D$`H
D$xL
T$hL
T$hD
D$xD
\$xD
D$hL
L$(D
D$hL
\$xL
D$`9
l$XH
HcD$
D$HH
l$(M
L$@A
<$Hc
|$(H
|$0H9D$H
D$(H
D$8D
L$8E
D$(L
D$8D
D$@E
D$`M)
$D;d$P
D$(D
|$XH
T$(L
T$(H
D$@L
<$A)
t$0D
D$(E
D$8D
9D$H
+D$HA
t$0D
L$$9
t$8)
t$0D
L$$L
|$(	
L$8)
|$@E1
\$`L
T$HL
D$(A
D$(H
D$8D
;T$P
D$`D
L$XD
D$`I
D$XD
L$(D
l$PH
D$hD
D$hH
D$(D
D$hD
D$hA)
D$(D
D$(D
L$pH
t$0D
L$0D
D$(D
|$$9=
t	M9
D$(M)
D$`+D$XA)
t$0D
t$8D
|$XH
|$(H
D$@L
<$A)
D+L$P
T$PL
|$(H
|$H9=-
t$0D
t$H;5
t$0D
D$8D
D$PI
t$0L
D$p;0
;D$H
+D$H
D$P9
\$@L
\$xH
\$(H
t$@1
T$`D)
T$`L
\$HH
t$PE
9\$0
L$H9L$
l$XL
|$@D
D$PD
D9l$@
T$0A
l$0D
\$HL
\$@H
D$8D
;\$0
D;D$H
tFHc
D$0I
D$0L
t$0+t$H
L$8D
795A
D$xI
T$hL
D$xL
T$hL
D$@L)
T$@H
D$8D
\$hD
L$xH
\$`E
Lc|$
L$(D
t$p9
HcD$$H
T$@H
T$xL
\$hD
T$xL
D$(L
\$hL
T$xL
T$(H
t$(H
t$H9t$
l$XL
|$@D
D$PA
T$@H
|$XH
T$`L
T$`H
D$@L
<$A)
D$(E
~[US
xWt6H
x\t5H
$tAA
AWAVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
AUATUSH
[]A\A]
+;(u
uZE1
]A\A]
AVAUATA
+D;(
]A\A]A^
]A\A]A^
]A\A]A^
AUATU
[]A\A]
AWAVAUATUSH
<(;:
[]A\A]A^A_
AUATUSH
[]A\A]
AUATU
[]A\A]A^A_
AVAUATUH
]A\A]A^
[]A\A]A^
AWAVAUATUSH
~ua1
>~t|H
[]A\A]A^A_
t`Lcd$
AWAVAUATUS
[]A\A]A^A_
[]A\A]A^A_
[]A\A]A^A_
t	A;
AUATUSH
]A\A]
AWAVAUI
ATUSH
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUS1
;8t*H
[]A\A]A^A_
[]A\A]A^A_
t	H%
AWAVAUATA
[]A\A]A^A_
AUATUSH
[]A\A]
AWAVAUATUS
t$ H
[]A\A]A^A_
ATSH
AWAVAUATUSH
[]A\A]A^A_
ATE1
AWAVAUATUSH
.u|H
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AWHc
[]A\A]A^A_
ATUH
[]A\
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
[]A\A]
]A\A]
]A\A]
[]A\A]
]A\A]
AUATA
[]A\A]
[]A\A]
[]A\A]
AWAVAUE1
ATUH
[]A\A]A^A_
AVAUATUSH
oW f
o_0f
og@f
ow`f
)p f
)x0f
[]A\A]A^
[]A\A]A^
AWAVAUATUSH
[]A\A]A^A_
[]A\
[]A\
ATUH
H90t=
tD<'t@
t$<'t <\u
Hw`E
]A\A]
AWAVAUATUSHc
[]A\A]A^A_
<<ukD
<\t^
<-t"<<
AWAVAUI
ATUHc
[]A\A]A^A_
AWHc
AVAUL
ATUH
tkMc
[]A\A]A^A_
AUATUSH
gfffA
gfffA
gfffA
gfffA
gfff
.tmp
[]A\A]
AUATUH
]A\A]
~.Hc
t/UH
98|!
AWAVAUATUSH
[]A\A]A^A_
AUATUS
[]A\A]A^
AUE1
ATUSH
[]A\A]
AVAUATUH
]A\A]A^
tWUSH
AWAVAUATUH
D$X1
D$XdH+
h[]A\A]A^A_
Mc,$H
ATUH
~aAUATUH
[]A\A]
AVAUATUSH
[]A\A]A^
A\A]A^
AWAVE1
AUATUSHc
[]A\A]A^A_
;8thH
t\Hc
AUHc
ATUH
[]A\A]
X[]A\A]
y^Lc
ATSH
t"Hc
AWAVAUATUSH
[]A\A]A^A_
AWAVAUATU1
[]A\A]A^A_
AUATUS1
~^f.
[]A\A]
AWAVAUATA
t$ D
D$$H
D$,Hc
L$ A
[]A\A]A^A_
D+|$,
$A8E
AWAVAUA
[]A\A]A^A_
ATUH
#[]A\
AWAVI
ATUS
D$(H
|$ 1
D$(dH+
[]A\A]A^A_
|$ A
t7E1
AVLc
AUMc
[]A\A]A^
AVAUATI
[]A\A]A^A_
AWAVAUATUH
8Lc.H
T$ L
D$(1
<$\u
t9;D$
uNE1
D$(dH+
[]A\A]A^A_
ttD9
}%Lc
D;D$
AWAVAUATUSH
D$(1
D$(dH+
[]A\A]A^A_
AWAVL
ATUSH
[]A\A]A^A_
AWAVL
ATUSH
|ztz
3A;4$}7H
[]A\A]A^A_
AVAUATUH
[]A\A]A^
AWAVAUA
ATUSH
D$hH
D$hdH+
[]A\A]A^A_
L$@)
|$<H
D$ H
d$<D
D$PL
d$HH
\$ Lc
L;d$
D$()
t$(L
D+L$
HcT$(J
<#H+T$ H
D+L$
t$<L
\$ L
AVAUATUS
~HHc
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSH
;E;<$
[]A\A]A^A_
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
[]A\A]A^A_
AVAUA
(]A\A]A^
AUATUH
(]A\A]A^
AWAVAUATU
D$H1
l$0A
D$HdH+
[]A\A]A^A_
|$(H
D$0D
~ Hc
t$0L
~!Hc
t$0L
AWAVAUA
ATUSH
u=E1
[]A\A]A^A_
tL;l$
l$ 1
AVAUATUH
]A\A]A^
teHc
.historyH
]A\A]A^
A\A]A^
AWAVAUATA
D$H%
|$`I
l$(L
l$ E1
tkE1
[]A\A]A^A_
l$ L
l$(I9
AWAVAUATU
;t$,u
9T$0
[]A\A]A^A_
E8>u
<$L)
AWAVAUA
ATUS
t$ H
D$8%
t$<H
[]A\A]A^A_
AVAUATUSH
]A\A]A^
]A\A]A^
]A\A]A^
]A\A]A^
	w@H
[]A\
-u;H
[]A\
[]A\
AVAUATA
[]A\A]A^A_
[]A\A]A^A_
[]A\
AWAVAUATUSH
l$(H
tRHcL$
\$(1
8[]A\A]A^A_
\$ E
A9,$|
+[]A\
AVAUATUSH
t$$ 
T$#t
< u,A
8[]A\A]A^A_
D$$D9
Hcl$
Lct$
AWAVAUATUSH
D$81
D9|$
D+l$
D$8dH+
[]A\A]A^A_
T$,D
AVAUATUS
$trD9
[]A\A]A^A_
~+E1
AVAUATUH
D$ H
t$<E1
D$(H
D$0H
d$8J
D$(I
D$8D
t$<B
Lcl$
9l$ u
D;t$
Hc|$
H[]A\A]A^A_
L9d$0
D$ D
AWAVAUATUSH
t$0dH
D$(H
t	D8
9\$(
D9l$(
D: t$A
d$,Mc
T$ H
T$ H
@Lcl$
t$(D)
D;t$
@Lcd$
T$ H
T$ H
t$01
[]A\A]A^A_
D$0H
(L9|$
T$X1
d$@A
\$PH
L$ H
l$HI
H9\$ u
\$PE
D$ D
D;t$
+D$,
T$ H
T$8A
D$PH
L$,@
l$ H
L$,H
D$(H
t$,Mc
D;d$
@Lcd$
@Lcd$
@Lcd$
@Lcd$
T$ H
t$ H
D$ D
d$HH
D$PH
D$0H
L9|$
D$dx
D$dA
d$HD
|$dx
t$HL
d$@H
D$@H
D$HH
l$HH
|$PM
D;t$
t$PL
D$dq
D$HL
|$pE1
|$H1
$(E9
@Lct$
|$PH
@Lcd$
t$ H
D$HA9
D;t$H~
L$\E
D$pD)
D$xMc
HcT$pJ
Hc5'
Lcd$xH
D$ E
D$0H
L9|$
D$pH
@Hc\$
T$8L
D$ H
T$8H
T$8L
D$ H
T$8D
t$HA
t$ H
@Lct$
<^tl
t$ H
t$xI
T$8L
D$ H
|$PD
D$PH
|$pL
d$HIc
<xIc
t$xI
t$ H
t$ H
L$HD
t$xI
d$HH
d$HH
t$xI
T$@H
 t&D
'\''H
D$HD
\$HH
l$hD
t$HH
AVAUATUSH
D$(1
D$(dH+
8[]A\A]A^A_
T$%H
D$&L
l$%H
AUATUSH
[]A\A]
>.tfH
>.tl
.tWH
$t D
H9D$
]A\A]A^
AVAUI
ATUH
[]A\A]A^
AWHc
4@AUI
HcD$
([]A\A]A^A_
[]A\A]A^A_
AWAVAULc
D$81
D$8dH+
[]A\A]A^A_
L$(D
|$(A
|$(L
L$(D
HcD$$I
L$(D
't_D
l$(A
|$0H
'teA
l$0H)
l$0A
AWAVAUATI
[]A\A]A^A_
AWE1
AVAUA
u{Lct$
[]A\A]A^A_
Lct$
<Ut4E1
AWAVAUATUSH
|$8H
T$ H
D$8H
\$0H
d$,H
0D:.u
\$8H
D$09C
H[]A\A]A^A_
|$,Lcd$(H
D$ L
AWAVAUATA
[]A\A]A^A_
H;5j
[]A\
AWAVAUATI
[]A\A]A^A_
AWAVAUATUSH
T$(dH
D$H1
D$8H
|$0H
L$@H
|$4H
t$0D
d$4D
D$0A
D$4A
L9l$
D$ H
l$(H
$$Hc
d$ L
D9|$
D$ L
D9l$
D$ H
D$HdH+
X[]A\A]A^A_
D$ H
D$HdH+
t$(H
[]A\A]A^A_
D$ L
D$ L
Lc|$
D$ Hct$
D$(I
AVAUA
[]A\A]A^
AVAUI
ATUS
i-searchH
[]A\H
A]A^
reverse-H
failed 
AVAUATA
u(Mc
[]A\A]A^A_
[]A\A]A^A_
AVE1
D$HH
T$HdH+
X[]A\A]A^A_
l$ H
l$ L
|$(H
D$0H
l$ H
l$ L
|$(L
AWAVAUATI
[]A\A]A^A_
AWAVAUATUSH
[]A\A]A^A_
AVAUATI
[]A\A]A^
A]A^
]A\A]A^
AVAUATUSH
|$ ;Z
6H;5
u/H;
D$(dH+
8[]A\A]A^A_
H;55V
AWAVAUATUSH
t$@dH
D$h1
D$LH
HcD$
;D$0
D$hdH+
A\A]A^A_
D$8I
(u*H
D;d$
L$`E1
l$`L
D$ H
D$hdH+
[]A\A]A^A_
HcD$
;D$0
Lc|$
D9d$
D$89
Hc|$
d @Ic
D;d$
t$8L
D$PI
D$ I
HcT$0H
|$ A
L$HH
d @Ic
t$HL
D$ H
D;d$
D;d$
Lc|$
T$,E
L$LL
D$d1
t$d1
D$dL
t/Hc|$
D$ L
HcT$0H
|$ A
L$HH
T$PA
T$PI
T$PH
t$8I
d @Ic
D;d$
d @Ic
t$8I
D$PH
t$8I
L$`H
T$`H
T$XL
D$PD)
d @Ic
t$8L
D$PH
T$XI
T$PL
T$PL
d @Mc
d @Ic
HcT$
Lc|$
d"@Mc
t$`1
t$8I
D+|$
D$ A
D$ H
Hct$
D$0L
D$0H
D$0E89
D$8D
D$XD
L$PH
L$PH
D$PD
L$8L
d @Mc
D$PD
L$8L
T$XL
D$PH
t$8I
d @Mc
D$XD
L$PH
|$8D
d @Mc
D$8D
L$XH
d @Mc
|$ L
<tID
D$ L
AUATI
[A\A]]
AUATUSH
[]A\A]
ATUSH
[]A\A]
[]A\A]
[]A\A]
AWAVI
AUATI
[]A\A]A^A_
AWAVAUATUSH
t$,H
T$8H
L$0dH
o_ f
og0f
oOpf
)@ f
)@0f
)@@f
)@Pf
)@`f
)@pf
l$hM
|$XE
d$PH
t$`)
L$PH
\$@L
L$HH
D$(H
[]A\A]A^A_
D$01
T$,H
L$`1
L$XH
T$<H
|8@Ic
t$pI
D$ H
L$hH
t$xI
t$$H
AWAVAUATUSH
[]A\A]A^A_
$()A
AVAUATUS
tjHc
[]A\A]A^A_
D$(%
[]A\
AWAVAUI
ATUH
D$(1
|$ L
t$ L
|$ H
D$(dH+
[]A\A]A^A_
D$(dH+
[]A\A]A^A_
AWAVAUI
[]A\A]A^A_
L9<$
AWAVAUATI
[]A\A]A^A_
AWAVAUATA
w dH
x	9E
[A\A]A^A_]
x	A9
AWAVAUATUSH
8D8?u
T$XH
T$hH
[]A\A]A^A_
ATUH
@uqH
rbash
xmalloc
I have no name!
readline stdin
BASH_ENV
HISTFILE
??host??
GNU bash, version %s-(%s)
x86_64-pc-linux-gnu
GNU long options:
	--%s
Shell options:
	-%s or -o option
%s: cannot allocate %lu bytes
xrealloc
%a %b %d
%H:%M:%S
%I:%M:%S
%I:%M %p
%H:%M
%s.%d
HOME
Use "%s" to leave the shell.
	;|&
syntax error
syntax error near `%s'
PIPESTATUS
command substitution
#%^,~:-=?+/
esac
eval
"$@"
COPROC
PROMPT_COMMAND
eterm
TMOUT
reader_loop
autocd
POSIXLY_CORRECT
POSIX_PEDANTIC
\s-\v\$ 
~/.bashrc
%s: invalid option
shopt %s %s
%-15s	%s
%c%c: invalid option
INSIDE_EMACS
,term:
 (term:
dumb
emacs
SSH_CLIENT
SSH2_CLIENT
/etc/bash.bashrc
/etc/profile
~/.profile
~/.bash_profile
~/.bash_login
FUNCNAME
BASH_SOURCE
BASH_LINENO
main
expected `)'
unalias
unalias [-a] name [name ...]
break
break [n]
continue
continue [n]
caller
caller [expr]
cd [-L|[-P [-e]] [-@]] [dir]
pwd [-LP]
true
false
declare
typeset
local
echo [-neE] [arg ...]
enable
eval [arg ...]
getopts
exit [n]
logout [n]
fg [job_spec]
bg [job_spec ...]
help [-dms] [pattern ...]
disown
let arg [arg ...]
read
return [n]
readonly
shift
shift [n]
source
source filename [arguments]
. filename [arguments]
suspend [-f]
test
test [expr]
[ arg... ]
times
type [-afptP] name [name ...]
ulimit
umask
umask [-p] [-S] [mode]
wait
wait [-fn] [-p var] [id ...]
for ((
select
time [-p] pipeline
while
until
coproc
{ ... }
{ COMMANDS ; }
job_spec [&]
(( ... ))
(( expression ))
[[ ... ]]
[[ expression ]]
pushd
pushd [-n] [+N | -N | dir]
popd
popd [-n] [+N | -N]
dirs [-clpv] [+N] [-N]
shopt
printf
compgen
compopt
mapfile
readarray
allexport
braceexpand
errtrace
functrace
hashall
histexpand
ignoreeof
interactive-comments
keyword
monitor
noclobber
noexec
noglob
nolog
notify
nounset
onecmd
physical
pipefail
posix
privileged
xtrace
then
else
elif
done
debugger
dump-po-strings
dump-strings
noediting
noprofile
norc
pretty-print
rcfile
assoc_expand_once
cdable_vars
cdspell
checkhash
checkjobs
checkwinsize
cmdhist
compat31
compat32
compat40
compat41
compat42
compat43
compat44
complete_fullquote
direxpand
dirspell
dotglob
execfail
expand_aliases
extdebug
extglob
extquote
failglob
force_fignore
globasciiranges
globstar
gnu_errfmt
histappend
histreedit
histverify
hostcomplete
huponexit
inherit_errexit
interactive_comments
lastpipe
lithist
localvar_inherit
localvar_unset
login_shell
mailwarn
no_empty_cmd_completion
nocaseglob
nocasematch
nullglob
progcomp
progcomp_alias
promptvars
restricted_shell
shift_verbose
sourcepath
xpg_echo
cannot set uid to %d: effective uid %d
cannot set gid to %d: effective gid %d
/usr/share/bashdb/bashdb-main.inc
cannot start debugger; debugging mode disabled
Usage:	%s [GNU long option] [option] ...
	%s [GNU long option] [option] script-file ...
	-ilrsD or -c command or -O shopt_option		(invocation only)
Type `%s -c "help set"' for more information about shell options.
Type `%s -c help' for more information about shell builtin commands.
Use the `bashbug' command to report bugs.
bash home page: <http://www.gnu.org/software/bash>
General help using GNU software: <http://www.gnu.org/gethelp/>
timed out waiting for input: auto-logout
syntax error near unexpected token `%s'
syntax error: unexpected end of file
maximum here-document count exceeded
unexpected EOF while looking for matching `%c'
unexpected EOF while looking for `]]'
syntax error in conditional expression: unexpected token `%s'
syntax error in conditional expression
unexpected EOF while looking for matching `)'
%s: option requires an argument
%s: cannot execute binary file
pretty-printing mode ignored in interactive shells
unexpected token `%s', expected `)'
unexpected argument `%s' to conditional unary operator
unexpected argument to conditional unary operator
unexpected token `%s', conditional binary operator expected
conditional binary operator expected
unexpected argument `%s' to conditional binary operator
unexpected argument to conditional binary operator
unexpected token `%c' in conditional command
unexpected token `%s' in conditional command
unexpected token %d in conditional command
Read lines from a file into an array variable.
    
    A synonym for `mapfile'.
Read lines from the standard input into an indexed array variable.
    
    Read lines from the standard input into the indexed array variable ARRAY, or
    from file descriptor FD if the -u option is supplied.  The variable MAPFILE
    is the default ARRAY.
    
    Options:
      -d delim	Use DELIM to terminate lines, instead of newline
      -n count	Copy at most COUNT lines.  If COUNT is 0, all lines are copied
      -O origin	Begin assigning to ARRAY at index ORIGIN.  The default index is 0
      -s count	Discard the first COUNT lines read
      -t	Remove a trailing DELIM from each line read (default newline)
      -u fd	Read lines from file descriptor FD instead of the standard input
      -C callback	Evaluate CALLBACK each time QUANTUM lines are read
      -c quantum	Specify the number of lines read between each call to
    			CALLBACK
    
    Arguments:
      ARRAY	Array variable name to use for file data
    
    If -C is supplied without -c, the default quantum is 5000.  When
    CALLBACK is evaluated, it is supplied the index of the next array
    element to be assigned and the line to be assigned to that element
    as additional arguments.
    
    If not supplied with an explicit origin, mapfile will clear ARRAY before
    assigning to it.
    
    Exit Status:
    Returns success unless an invalid option is given or ARRAY is readonly or
    not an indexed array.
Modify or display completion options.
    
    Modify the completion options for each NAME, or, if no NAMEs are supplied,
    the completion currently being executed.  If no OPTIONs are given, print
    the completion options for each NAME or the current completion specification.
    
    Options:
    	-o option	Set completion option OPTION for each NAME
    	-D		Change options for the "default" command completion
    	-E		Change options for the "empty" command completion
    	-I		Change options for completion on the initial word
    
    Using `+o' instead of `-o' turns off the specified option.
    
    Arguments:
    
    Each NAME refers to a command for which a completion specification must
    have previously been defined using the `complete' builtin.  If no NAMEs
    are supplied, compopt must be called by a function currently generating
    completions, and the options for that currently-executing completion
    generator are modified.
    
    Exit Status:
    Returns success unless an invalid option is supplied or NAME does not
    have a completion specification defined.
Display possible completions depending on the options.
    
    Intended to be used from within a shell function generating possible
    completions.  If the optional WORD argument is supplied, matches against
    WORD are generated.
    
    Exit Status:
    Returns success unless an invalid option is supplied or an error occurs.
Specify how arguments are to be completed by Readline.
    
    For each NAME, specify how arguments are to be completed.  If no options
    are supplied, existing completion specifications are printed in a way that
    allows them to be reused as input.
    
    Options:
      -p	print existing completion specifications in a reusable format
      -r	remove a completion specification for each NAME, or, if no
    		NAMEs are supplied, all completion specifications
      -D	apply the completions and actions as the default for commands
    		without any specific completion defined
      -E	apply the completions and actions to "empty" commands --
    		completion attempted on a blank line
      -I	apply the completions and actions to the initial (usually the
    		command) word
    
    When completion is attempted, the actions are applied in the order the
    uppercase-letter options are listed above. If multiple options are supplied,
    the -D option takes precedence over -E, and both take precedence over -I.
    
    Exit Status:
    Returns success unless an invalid option is supplied or an error occurs.
Formats and prints ARGUMENTS under control of the FORMAT.
    
    Options:
      -v var	assign the output to shell variable VAR rather than
    		display it on the standard output
    
    FORMAT is a character string which contains three types of objects: plain
    characters, which are simply copied to standard output; character escape
    sequences, which are converted and copied to the standard output; and
    format specifications, each of which causes printing of the next successive
    argument.
    
    In addition to the standard format specifications described in printf(1),
    printf interprets:
    
      %b	expand backslash escape sequences in the corresponding argument
      %q	quote the argument in a way that can be reused as shell input
      %(fmt)T	output the date-time string resulting from using FMT as a format
    	        string for strftime(3)
    
    The format is re-used as necessary to consume all of the arguments.  If
    there are fewer arguments than the format requires,  extra format
    specifications behave as if a zero value or null string, as appropriate,
    had been supplied.
    
    Exit Status:
    Returns success unless an invalid option is given or a write or assignment
    error occurs.
Set and unset shell options.
    
    Change the setting of each shell option OPTNAME.  Without any option
    arguments, list each supplied OPTNAME, or all shell options if no
    OPTNAMEs are given, with an indication of whether or not each is set.
    
    Options:
      -o	restrict OPTNAMEs to those defined for use with `set -o'
      -p	print each shell option with an indication of its status
      -q	suppress output
      -s	enable (set) each OPTNAME
      -u	disable (unset) each OPTNAME
    
    Exit Status:
    Returns success if OPTNAME is enabled; fails if an invalid option is
    given or OPTNAME is disabled.
Display directory stack.
    
    Display the list of currently remembered directories.  Directories
    find their way onto the list with the `pushd' command; you can get
    back up through the list with the `popd' command.
    
    Options:
      -c	clear the directory stack by deleting all of the elements
      -l	do not print tilde-prefixed versions of directories relative
    		to your home directory
      -p	print the directory stack with one entry per line
      -v	print the directory stack with one entry per line prefixed
    		with its position in the stack
    
    Arguments:
      +N	Displays the Nth entry counting from the left of the list
    		shown by dirs when invoked without options, starting with
    		zero.
    
      -N	Displays the Nth entry counting from the right of the list
    		shown by dirs when invoked without options, starting with
    		zero.
    
    Exit Status:
    Returns success unless an invalid option is supplied or an error occurs.
Remove directories from stack.
    
    Removes entries from the directory stack.  With no arguments, removes
    the top directory from the stack, and changes to the new top directory.
    
    Options:
      -n	Suppresses the normal change of directory when removing
    		directories from the stack, so only the stack is manipulated.
    
    Arguments:
      +N	Removes the Nth entry counting from the left of the list
    		shown by `dirs', starting with zero.  For example: `popd +0'
    		removes the first directory, `popd +1' the second.
    
      -N	Removes the Nth entry counting from the right of the list
    		shown by `dirs', starting with zero.  For example: `popd -0'
    		removes the last directory, `popd -1' the next to last.
    
    The `dirs' builtin displays the directory stack.
    
    Exit Status:
    Returns success unless an invalid argument is supplied or the directory
    change fails.
Add directories to stack.
    
    Adds a directory to the top of the directory stack, or rotates
    the stack, making the new top of the stack the current working
    directory.  With no arguments, exchanges the top two directories.
    
    Options:
      -n	Suppresses the normal change of directory when adding
    		directories to the stack, so only the stack is manipulated.
    
    Arguments:
      +N	Rotates the stack so that the Nth directory (counting
    		from the left of the list shown by `dirs', starting with
    		zero) is at the top.
    
      -N	Rotates the stack so that the Nth directory (counting
    		from the right of the list shown by `dirs', starting with
    		zero) is at the top.
    
      dir	Adds DIR to the directory stack at the top, making it the
    		new current working directory.
    
    The `dirs' builtin displays the directory stack.
    
    Exit Status:
    Returns success unless an invalid argument is supplied or the directory
    change fails.
Common shell variable names and usage.
    
    BASH_VERSION	Version information for this Bash.
    CDPATH	A colon-separated list of directories to search
    		for directories given as arguments to `cd'.
    GLOBIGNORE	A colon-separated list of patterns describing filenames to
    		be ignored by pathname expansion.
    HISTFILE	The name of the file where your command history is stored.
    HISTFILESIZE	The maximum number of lines this file can contain.
    HISTSIZE	The maximum number of history lines that a running
    		shell can access.
    HOME	The complete pathname to your login directory.
    HOSTNAME	The name of the current host.
    HOSTTYPE	The type of CPU this version of Bash is running under.
    IGNOREEOF	Controls the action of the shell on receipt of an EOF
    		character as the sole input.  If set, then the value
    		of it is the number of EOF characters that can be seen
    		in a row on an empty line before the shell will exit
    		(default 10).  When unset, EOF signifies the end of input.
    MACHTYPE	A string describing the current system Bash is running on.
    MAILCHECK	How often, in seconds, Bash checks for new mail.
    MAILPATH	A colon-separated list of filenames which Bash checks
    		for new mail.
    OSTYPE	The version of Unix this version of Bash is running on.
    PATH	A colon-separated list of directories to search when
    		looking for commands.
    PROMPT_COMMAND	A command to be executed before the printing of each
    		primary prompt.
    PS1		The primary prompt string.
    PS2		The secondary prompt string.
    PWD		The full pathname of the current directory.
    SHELLOPTS	A colon-separated list of enabled shell options.
    TERM	The name of the current terminal type.
    TIMEFORMAT	The output format for timing statistics displayed by the
    		`time' reserved word.
    auto_resume	Non-null means a command word appearing on a line by
    		itself is first looked for in the list of currently
    		stopped jobs.  If found there, that job is foregrounded.
    		A value of `exact' means that the command word must
    		exactly match a command in the list of stopped jobs.  A
    		value of `substring' means that the command word must
    		match a substring of the job.  Any other value means that
    		the command must be a prefix of a stopped job.
    histchars	Characters controlling history expansion and quick
    		substitution.  The first character is the history
    		substitution character, usually `!'.  The second is
    		the `quick substitution' character, usually `^'.  The
    		third is the `history comment' character, usually `#'.
    HISTIGNORE	A colon-separated list of patterns used to decide which
    		commands should be saved on the history list.
Execute conditional command.
    
    Returns a status of 0 or 1 depending on the evaluation of the conditional
    expression EXPRESSION.  Expressions are composed of the same primaries used
    by the `test' builtin, and may be combined using the following operators:
    
      ( EXPRESSION )	Returns the value of EXPRESSION
      ! EXPRESSION		True if EXPRESSION is false; else false
      EXPR1 && EXPR2	True if both EXPR1 and EXPR2 are true; else false
      EXPR1 || EXPR2	True if either EXPR1 or EXPR2 is true; else false
    
    When the `==' and `!=' operators are used, the string to the right of
    the operator is used as a pattern and pattern matching is performed.
    When the `=~' operator is used, the string to the right of the operator
    is matched as a regular expression.
    
    The && and || operators do not evaluate EXPR2 if EXPR1 is sufficient to
    determine the expression's value.
    
    Exit Status:
    0 or 1 depending on value of EXPRESSION.
Evaluate arithmetic expression.
    
    The EXPRESSION is evaluated according to the rules for arithmetic
    evaluation.  Equivalent to `let "EXPRESSION"'.
    
    Exit Status:
    Returns 1 if EXPRESSION evaluates to 0; returns 0 otherwise.
Resume job in foreground.
    
    Equivalent to the JOB_SPEC argument to the `fg' command.  Resume a
    stopped or background job.  JOB_SPEC can specify either a job name
    or a job number.  Following JOB_SPEC with a `&' places the job in
    the background, as if the job specification had been supplied as an
    argument to `bg'.
    
    Exit Status:
    Returns the status of the resumed job.
Group commands as a unit.
    
    Run a set of commands in a group.  This is one way to redirect an
    entire set of commands.
    
    Exit Status:
    Returns the status of the last command executed.
Define shell function.
    
    Create a shell function named NAME.  When invoked as a simple command,
    NAME runs COMMANDs in the calling shell's context.  When NAME is invoked,
    the arguments are passed to the function as $1...$n, and the function's
    name is in $FUNCNAME.
    
    Exit Status:
    Returns success unless NAME is readonly.
Create a coprocess named NAME.
    
    Execute COMMAND asynchronously, with the standard output and standard
    input of the command connected via a pipe to file descriptors assigned
    to indices 0 and 1 of an array variable NAME in the executing shell.
    The default NAME is "COPROC".
    
    Exit Status:
    The coproc command returns an exit status of 0.
Execute commands as long as a test does not succeed.
    
    Expand and execute COMMANDS as long as the final command in the
    `until' COMMANDS has an exit status which is not zero.
    
    Exit Status:
    Returns the status of the last command executed.
Execute commands as long as a test succeeds.
    
    Expand and execute COMMANDS as long as the final command in the
    `while' COMMANDS has an exit status of zero.
    
    Exit Status:
    Returns the status of the last command executed.
Execute commands based on conditional.
    
    The `if COMMANDS' list is executed.  If its exit status is zero, then the
    `then COMMANDS' list is executed.  Otherwise, each `elif COMMANDS' list is
    executed in turn, and if its exit status is zero, the corresponding
    `then COMMANDS' list is executed and the if command completes.  Otherwise,
    the `else COMMANDS' list is executed, if present.  The exit status of the
    entire construct is the exit status of the last command executed, or zero
    if no condition tested true.
    
    Exit Status:
    Returns the status of the last command executed.
Execute commands based on pattern matching.
    
    Selectively execute COMMANDS based upon WORD matching PATTERN.  The
    `|' is used to separate multiple patterns.
    
    Exit Status:
    Returns the status of the last command executed.
Report time consumed by pipeline's execution.
    
    Execute PIPELINE and print a summary of the real time, user CPU time,
    and system CPU time spent executing PIPELINE when it terminates.
    
    Options:
      -p	print the timing summary in the portable Posix format
    
    The value of the TIMEFORMAT variable is used as the output format.
    
    Exit Status:
    The return status is the return status of PIPELINE.
Select words from a list and execute commands.
    
    The WORDS are expanded, generating a list of words.  The
    set of expanded words is printed on the standard error, each
    preceded by a number.  If `in WORDS' is not present, `in "$@"'
    is assumed.  The PS3 prompt is then displayed and a line read
    from the standard input.  If the line consists of the number
    corresponding to one of the displayed words, then NAME is set
    to that word.  If the line is empty, WORDS and the prompt are
    redisplayed.  If EOF is read, the command completes.  Any other
    value read causes NAME to be set to null.  The line read is saved
    in the variable REPLY.  COMMANDS are executed after each selection
    until a break command is executed.
    
    Exit Status:
    Returns the status of the last command executed.
Arithmetic for loop.
    
    Equivalent to
    	(( EXP1 ))
    	while (( EXP2 )); do
    		COMMANDS
    		(( EXP3 ))
    	done
    EXP1, EXP2, and EXP3 are arithmetic expressions.  If any expression is
    omitted, it behaves as if it evaluates to 1.
    
    Exit Status:
    Returns the status of the last command executed.
Execute commands for each member in a list.
    
    The `for' loop executes a sequence of commands for each member in a
    list of items.  If `in WORDS ...;' is not present, then `in "$@"' is
    assumed.  For each element in WORDS, NAME is set to that element, and
    the COMMANDS are executed.
    
    Exit Status:
    Returns the status of the last command executed.
Wait for job completion and return exit status.
    
    Waits for each process identified by an ID, which may be a process ID or a
    job specification, and reports its termination status.  If ID is not
    given, waits for all currently active child processes, and the return
    status is zero.  If ID is a job specification, waits for all processes
    in that job's pipeline.
    
    If the -n option is supplied, waits for a single job from the list of IDs,
    or, if no IDs are supplied, for the next job to complete and returns its
    exit status.
    
    If the -p option is supplied, the process or job identifier of the job
    for which the exit status is returned is assigned to the variable VAR
    named by the option argument. The variable will be unset initially, before
    any assignment. This is useful only when the -n option is supplied.
    
    If the -f option is supplied, and job control is enabled, waits for the
    specified ID to terminate, instead of waiting for it to change status.
    
    Exit Status:
    Returns the status of the last ID; fails if ID is invalid or an invalid
    option is given, or if -n is supplied and the shell has no unwaited-for
    children.
Display or set file mode mask.
    
    Sets the user file-creation mask to MODE.  If MODE is omitted, prints
    the current value of the mask.
    
    If MODE begins with a digit, it is interpreted as an octal number;
    otherwise it is a symbolic mode string like that accepted by chmod(1).
    
    Options:
      -p	if MODE is omitted, output in a form that may be reused as input
      -S	makes the output symbolic; otherwise an octal number is output
    
    Exit Status:
    Returns success unless MODE is invalid or an invalid option is given.
Modify shell resource limits.
    
    Provides control over the resources available to the shell and processes
    it creates, on systems that allow such control.
    
    Options:
      -S	use the `soft' resource limit
      -H	use the `hard' resource limit
      -a	all current limits are reported
      -b	the socket buffer size
      -c	the maximum size of core files created
      -d	the maximum size of a process's data segment
      -e	the maximum scheduling priority (`nice')
      -f	the maximum size of files written by the shell and its children
      -i	the maximum number of pending signals
      -k	the maximum number of kqueues allocated for this process
      -l	the maximum size a process may lock into memory
      -m	the maximum resident set size
      -n	the maximum number of open file descriptors
      -p	the pipe buffer size
      -q	the maximum number of bytes in POSIX message queues
      -r	the maximum real-time scheduling priority
      -s	the maximum stack size
      -t	the maximum amount of cpu time in seconds
      -u	the maximum number of user processes
      -v	the size of virtual memory
      -x	the maximum number of file locks
      -P	the maximum number of pseudoterminals
      -R	the maximum time a real-time process can run before blocking
      -T	the maximum number of threads
    
    Not all options are available on all platforms.
    
    If LIMIT is given, it is the new value of the specified resource; the
    special LIMIT values `soft', `hard', and `unlimited' stand for the
    current soft limit, the current hard limit, and no limit, respectively.
    Otherwise, the current value of the specified resource is printed.  If
    no option is given, then -f is assumed.
    
    Values are in 1024-byte increments, except for -t, which is in seconds,
    -p, which is in increments of 512 bytes, and -u, which is an unscaled
    number of processes.
    
    Exit Status:
    Returns success unless an invalid option is supplied or an error occurs.
Display information about command type.
    
    For each NAME, indicate how it would be interpreted if used as a
    command name.
    
    Options:
      -a	display all locations containing an executable named NAME;
    		includes aliases, builtins, and functions, if and only if
    		the `-p' option is not also used
      -f	suppress shell function lookup
      -P	force a PATH search for each NAME, even if it is an alias,
    		builtin, or function, and returns the name of the disk file
    		that would be executed
      -p	returns either the name of the disk file that would be executed,
    		or nothing if `type -t NAME' would not return `file'
      -t	output a single word which is one of `alias', `keyword',
    		`function', `builtin', `file' or `', if NAME is an alias,
    		shell reserved word, shell function, shell builtin, disk file,
    		or not found, respectively
    
    Arguments:
      NAME	Command name to be interpreted.
    
    Exit Status:
    Returns success if all of the NAMEs are found; fails if any are not found.
Trap signals and other events.
    
    Defines and activates handlers to be run when the shell receives signals
    or other conditions.
    
    ARG is a command to be read and executed when the shell receives the
    signal(s) SIGNAL_SPEC.  If ARG is absent (and a single SIGNAL_SPEC
    is supplied) or `-', each specified signal is reset to its original
    value.  If ARG is the null string each SIGNAL_SPEC is ignored by the
    shell and by the commands it invokes.
    
    If a SIGNAL_SPEC is EXIT (0) ARG is executed on exit from the shell.  If
    a SIGNAL_SPEC is DEBUG, ARG is executed before every simple command.  If
    a SIGNAL_SPEC is RETURN, ARG is executed each time a shell function or a
    script run by the . or source builtins finishes executing.  A SIGNAL_SPEC
    of ERR means to execute ARG each time a command's failure would cause the
    shell to exit when the -e option is enabled.
    
    If no arguments are supplied, trap prints the list of commands associated
    with each signal.
    
    Options:
      -l	print a list of signal names and their corresponding numbers
      -p	display the trap commands associated with each SIGNAL_SPEC
    
    Each SIGNAL_SPEC is either a signal name in <signal.h> or a signal number.
    Signal names are case insensitive and the SIG prefix is optional.  A
    signal may be sent to the shell with "kill -signal $$".
    
    Exit Status:
    Returns success unless a SIGSPEC is invalid or an invalid option is given.
Display process times.
    
    Prints the accumulated user and system times for the shell and all of its
    child processes.
    
    Exit Status:
    Always succeeds.
Evaluate conditional expression.
    
    This is a synonym for the "test" builtin, but the last argument must
    be a literal `]', to match the opening `['.
Evaluate conditional expression.
    
    Exits with a status of 0 (true) or 1 (false) depending on
    the evaluation of EXPR.  Expressions may be unary or binary.  Unary
    expressions are often used to examine the status of a file.  There
    are string operators and numeric comparison operators as well.
    
    The behavior of test depends on the number of arguments.  Read the
    bash manual page for the complete specification.
    
    File operators:
    
      -a FILE        True if file exists.
      -b FILE        True if file is block special.
      -c FILE        True if file is character special.
      -d FILE        True if file is a directory.
      -e FILE        True if file exists.
      -f FILE        True if file exists and is a regular file.
      -g FILE        True if file is set-group-id.
      -h FILE        True if file is a symbolic link.
      -L FILE        True if file is a symbolic link.
      -k FILE        True if file has its `sticky' bit set.
      -p FILE        True if file is a named pipe.
      -r FILE        True if file is readable by you.
      -s FILE        True if file exists and is not empty.
      -S FILE        True if file is a socket.
      -t FD          True if FD is opened on a terminal.
      -u FILE        True if the file is set-user-id.
      -w FILE        True if the file is writable by you.
      -x FILE        True if the file is executable by you.
      -O FILE        True if the file is effectively owned by you.
      -G FILE        True if the file is effectively owned by your group.
      -N FILE        True if the file has been modified since it was last read.
    
      FILE1 -nt FILE2  True if file1 is newer than file2 (according to
                       modification date).
    
      FILE1 -ot FILE2  True if file1 is older than file2.
    
      FILE1 -ef FILE2  True if file1 is a hard link to file2.
    
    All file operators except -h and -L are acting on the target of a symbolic
    link, not on the symlink itself, if FILE is a symbolic link.
    
    String operators:
    
      -z STRING      True if string is empty.
    
      -n STRING
         STRING      True if string is not empty.
    
      STRING1 = STRING2
                     True if the strings are equal.
      STRING1 != STRING2
                     True if the strings are not equal.
      STRING1 < STRING2
                     True if STRING1 sorts before STRING2 lexicographically.
      STRING1 > STRING2
                     True if STRING1 sorts after STRING2 lexicographically.
    
    Other operators:
    
      -o OPTION      True if the shell option OPTION is enabled.
      -v VAR         True if the shell variable VAR is set.
      -R VAR         True if the shell variable VAR is set and is a name
                     reference.
      ! EXPR         True if expr is false.
      EXPR1 -a EXPR2 True if both expr1 AND expr2 are true.
      EXPR1 -o EXPR2 True if either expr1 OR expr2 is true.
    
      arg1 OP arg2   Arithmetic tests.  OP is one of -eq, -ne,
                     -lt, -le, -gt, or -ge.
    
    Arithmetic binary operators return true if ARG1 is equal, not-equal,
    less-than, less-than-or-equal, greater-than, or greater-than-or-equal
    than ARG2.
    
    See the bash manual page bash(1) for the handling of parameters (i.e.
    missing parameters).
    
    Exit Status:
    Returns success if EXPR evaluates to true; fails if EXPR evaluates to
    false or an invalid argument is given.
Suspend shell execution.
    
    Suspend the execution of this shell until it receives a SIGCONT signal.
    Unless forced, login shells cannot be suspended.
    
    Options:
      -f	force the suspend, even if the shell is a login shell
    
    Exit Status:
    Returns success unless job control is not enabled or an error occurs.
Execute commands from a file in the current shell.
    
    Read and execute commands from FILENAME in the current shell.  The
    entries in $PATH are used to find the directory containing FILENAME.
    If any ARGUMENTS are supplied, they become the positional parameters
    when FILENAME is executed.
    
    Exit Status:
    Returns the status of the last command executed in FILENAME; fails if
    FILENAME cannot be read.
Shift positional parameters.
    
    Rename the positional parameters $N+1,$N+2 ... to $1,$2 ...  If N is
    not given, it is assumed to be 1.
    
    Exit Status:
    Returns success unless N is negative or greater than $#.
Mark shell variables as unchangeable.
    
    Mark each NAME as read-only; the values of these NAMEs may not be
    changed by subsequent assignment.  If VALUE is supplied, assign VALUE
    before marking as read-only.
    
    Options:
      -a	refer to indexed array variables
      -A	refer to associative array variables
      -f	refer to shell functions
      -p	display a list of all readonly variables or functions,
    		depending on whether or not the -f option is given
    
    An argument of `--' disables further option processing.
    
    Exit Status:
    Returns success unless an invalid option is given or NAME is invalid.
Set export attribute for shell variables.
    
    Marks each NAME for automatic export to the environment of subsequently
    executed commands.  If VALUE is supplied, assign VALUE before exporting.
    
    Options:
      -f	refer to shell functions
      -n	remove the export property from each NAME
      -p	display a list of all exported variables and functions
    
    An argument of `--' disables further option processing.
    
    Exit Status:
    Returns success unless an invalid option is given or NAME is invalid.
Unset values and attributes of shell variables and functions.
    
    For each NAME, remove the corresponding variable or function.
    
    Options:
      -f	treat each NAME as a shell function
      -v	treat each NAME as a shell variable
      -n	treat each NAME as a name reference and unset the variable itself
    		rather than the variable it references
    
    Without options, unset first tries to unset a variable, and if that fails,
    tries to unset a function.
    
    Some variables cannot be unset; also see `readonly'.
    
    Exit Status:
    Returns success unless an invalid option is given or a NAME is read-only.
Set or unset values of shell options and positional parameters.
    
    Change the value of shell attributes and positional parameters, or
    display the names and values of shell variables.
    
    Options:
      -a  Mark variables which are modified or created for export.
      -b  Notify of job termination immediately.
      -e  Exit immediately if a command exits with a non-zero status.
      -f  Disable file name generation (globbing).
      -h  Remember the location of commands as they are looked up.
      -k  All assignment arguments are placed in the environment for a
          command, not just those that precede the command name.
      -m  Job control is enabled.
      -n  Read commands but do not execute them.
      -o option-name
          Set the variable corresponding to option-name:
              allexport    same as -a
              braceexpand  same as -B
              emacs        use an emacs-style line editing interface
              errexit      same as -e
              errtrace     same as -E
              functrace    same as -T
              hashall      same as -h
              histexpand   same as -H
              history      enable command history
              ignoreeof    the shell will not exit upon reading EOF
              interactive-comments
                           allow comments to appear in interactive commands
              keyword      same as -k
              monitor      same as -m
              noclobber    same as -C
              noexec       same as -n
              noglob       same as -f
              nolog        currently accepted but ignored
              notify       same as -b
              nounset      same as -u
              onecmd       same as -t
              physical     same as -P
              pipefail     the return value of a pipeline is the status of
                           the last command to exit with a non-zero status,
                           or zero if no command exited with a non-zero status
              posix        change the behavior of bash where the default
                           operation differs from the Posix standard to
                           match the standard
              privileged   same as -p
              verbose      same as -v
              vi           use a vi-style line editing interface
              xtrace       same as -x
      -p  Turned on whenever the real and effective user ids do not match.
          Disables processing of the $ENV file and importing of shell
          functions.  Turning this option off causes the effective uid and
          gid to be set to the real uid and gid.
      -t  Exit after reading and executing one command.
      -u  Treat unset variables as an error when substituting.
      -v  Print shell input lines as they are read.
      -x  Print commands and their arguments as they are executed.
      -B  the shell will perform brace expansion
      -C  If set, disallow existing regular files to be overwritten
          by redirection of output.
      -E  If set, the ERR trap is inherited by shell functions.
      -H  Enable ! style history substitution.  This flag is on
          by default when the shell is interactive.
      -P  If set, do not resolve symbolic links when executing commands
          such as cd which change the current directory.
      -T  If set, the DEBUG and RETURN traps are inherited by shell functions.
      --  Assign any remaining arguments to the positional parameters.
          If there are no remaining arguments, the positional parameters
          are unset.
      -   Assign any remaining arguments to the positional parameters.
          The -x and -v options are turned off.
    
    Using + rather than - causes these flags to be turned off.  The
    flags can also be used upon invocation of the shell.  The current
    set of flags may be found in $-.  The remaining n ARGs are positional
    parameters and are assigned, in order, to $1, $2, .. $n.  If no
    ARGs are given, all shell variables are printed.
    
    Exit Status:
    Returns success unless an invalid option is given.
Return from a shell function.
    
    Causes a function or sourced script to exit with the return value
    specified by N.  If N is omitted, the return status is that of the
    last command executed within the function or script.
    
    Exit Status:
    Returns N, or failure if the shell is not executing a function or script.
Read a line from the standard input and split it into fields.
    
    Reads a single line from the standard input, or from file descriptor FD
    if the -u option is supplied.  The line is split into fields as with word
    splitting, and the first word is assigned to the first NAME, the second
    word to the second NAME, and so on, with any leftover words assigned to
    the last NAME.  Only the characters found in $IFS are recognized as word
    delimiters.
    
    If no NAMEs are supplied, the line read is stored in the REPLY variable.
    
    Options:
      -a array	assign the words read to sequential indices of the array
    		variable ARRAY, starting at zero
      -d delim	continue until the first character of DELIM is read, rather
    		than newline
      -e	use Readline to obtain the line
      -i text	use TEXT as the initial text for Readline
      -n nchars	return after reading NCHARS characters rather than waiting
    		for a newline, but honor a delimiter if fewer than
    		NCHARS characters are read before the delimiter
      -N nchars	return only after reading exactly NCHARS characters, unless
    		EOF is encountered or read times out, ignoring any
    		delimiter
      -p prompt	output the string PROMPT without a trailing newline before
    		attempting to read
      -r	do not allow backslashes to escape any characters
      -s	do not echo input coming from a terminal
      -t timeout	time out and return failure if a complete line of
    		input is not read within TIMEOUT seconds.  The value of the
    		TMOUT variable is the default timeout.  TIMEOUT may be a
    		fractional number.  If TIMEOUT is 0, read returns
    		immediately, without trying to read any data, returning
    		success only if input is available on the specified
    		file descriptor.  The exit status is greater than 128
    		if the timeout is exceeded
      -u fd	read from file descriptor FD instead of the standard input
    
    Exit Status:
    The return code is zero, unless end-of-file is encountered, read times out
    (in which case it's greater than 128), a variable assignment error occurs,
    or an invalid file descriptor is supplied as the argument to -u.
Evaluate arithmetic expressions.
    
    Evaluate each ARG as an arithmetic expression.  Evaluation is done in
    fixed-width integers with no check for overflow, though division by 0
    is trapped and flagged as an error.  The following list of operators is
    grouped into levels of equal-precedence operators.  The levels are listed
    in order of decreasing precedence.
    
    	id++, id--	variable post-increment, post-decrement
    	++id, --id	variable pre-increment, pre-decrement
    	-, +		unary minus, plus
    	!, ~		logical and bitwise negation
    	**		exponentiation
    	*, /, %		multiplication, division, remainder
    	+, -		addition, subtraction
    	<<, >>		left and right bitwise shifts
    	<=, >=, <, >	comparison
    	==, !=		equality, inequality
    	&		bitwise AND
    	^		bitwise XOR
    	|		bitwise OR
    	&&		logical AND
    	||		logical OR
    	expr ? expr : expr
    			conditional operator
    	=, *=, /=, %=,
    	+=, -=, <<=, >>=,
    	&=, ^=, |=	assignment
    
    Shell variables are allowed as operands.  The name of the variable
    is replaced by its value (coerced to a fixed-width integer) within
    an expression.  The variable need not have its integer attribute
    turned on to be used in an expression.
    
    Operators are evaluated in order of precedence.  Sub-expressions in
    parentheses are evaluated first and may override the precedence
    rules above.
    
    Exit Status:
    If the last ARG evaluates to 0, let returns 1; let returns 0 otherwise.
Send a signal to a job.
    
    Send the processes identified by PID or JOBSPEC the signal named by
    SIGSPEC or SIGNUM.  If neither SIGSPEC nor SIGNUM is present, then
    SIGTERM is assumed.
    
    Options:
      -s sig	SIG is a signal name
      -n sig	SIG is a signal number
      -l	list the signal names; if arguments follow `-l' they are
    		assumed to be signal numbers for which names should be listed
      -L	synonym for -l
    
    Kill is a shell builtin for two reasons: it allows job IDs to be used
    instead of process IDs, and allows processes to be killed if the limit
    on processes that you can create is reached.
    
    Exit Status:
    Returns success unless an invalid option is given or an error occurs.
Remove jobs from current shell.
    
    Removes each JOBSPEC argument from the table of active jobs.  Without
    any JOBSPECs, the shell uses its notion of the current job.
    
    Options:
      -a	remove all jobs if JOBSPEC is not supplied
      -h	mark each JOBSPEC so that SIGHUP is not sent to the job if the
    		shell receives a SIGHUP
      -r	remove only running jobs
    
    Exit Status:
    Returns success unless an invalid option or JOBSPEC is given.
Display status of jobs.
    
    Lists the active jobs.  JOBSPEC restricts output to that job.
    Without options, the status of all active jobs is displayed.
    
    Options:
      -l	lists process IDs in addition to the normal information
      -n	lists only processes that have changed status since the last
    		notification
      -p	lists process IDs only
      -r	restrict output to running jobs
      -s	restrict output to stopped jobs
    
    If -x is supplied, COMMAND is run after all job specifications that
    appear in ARGS have been replaced with the process ID of that job's
    process group leader.
    
    Exit Status:
    Returns success unless an invalid option is given or an error occurs.
    If -x is used, returns the exit status of COMMAND.
Display or manipulate the history list.
    
    Display the history list with line numbers, prefixing each modified
    entry with a `*'.  An argument of N lists only the last N entries.
    
    Options:
      -c	clear the history list by deleting all of the entries
      -d offset	delete the history entry at position OFFSET. Negative
    		offsets count back from the end of the history list
    
      -a	append history lines from this session to the history file
      -n	read all history lines not already read from the history file
    		and append them to the history list
      -r	read the history file and append the contents to the history
    		list
      -w	write the current history to the history file
    
      -p	perform history expansion on each ARG and display the result
    		without storing it in the history list
      -s	append the ARGs to the history list as a single entry
    
    If FILENAME is given, it is used as the history file.  Otherwise,
    if HISTFILE has a value, that is used, else ~/.bash_history.
    
    If the HISTTIMEFORMAT variable is set and not null, its value is used
    as a format string for strftime(3) to print the time stamp associated
    with each displayed history entry.  No time stamps are printed otherwise.
    
    Exit Status:
    Returns success unless an invalid option is given or an error occurs.
Display information about builtin commands.
    
    Displays brief summaries of builtin commands.  If PATTERN is
    specified, gives detailed help on all commands matching PATTERN,
    otherwise the list of help topics is printed.
    
    Options:
      -d	output short description for each topic
      -m	display usage in pseudo-manpage format
      -s	output only a short usage synopsis for each topic matching
    		PATTERN
    
    Arguments:
      PATTERN	Pattern specifying a help topic
    
    Exit Status:
    Returns success unless PATTERN is not found or an invalid option is given.
Remember or display program locations.
    
    Determine and remember the full pathname of each command NAME.  If
    no arguments are given, information about remembered commands is displayed.
    
    Options:
      -d	forget the remembered location of each NAME
      -l	display in a format that may be reused as input
      -p pathname	use PATHNAME as the full pathname of NAME
      -r	forget all remembered locations
      -t	print the remembered location of each NAME, preceding
    		each location with the corresponding NAME if multiple
    		NAMEs are given
    Arguments:
      NAME	Each NAME is searched for in $PATH and added to the list
    		of remembered commands.
    
    Exit Status:
    Returns success unless NAME is not found or an invalid option is given.
Move jobs to the background.
    
    Place the jobs identified by each JOB_SPEC in the background, as if they
    had been started with `&'.  If JOB_SPEC is not present, the shell's notion
    of the current job is used.
    
    Exit Status:
    Returns success unless job control is not enabled or an error occurs.
Move job to the foreground.
    
    Place the job identified by JOB_SPEC in the foreground, making it the
    current job.  If JOB_SPEC is not present, the shell's notion of the
    current job is used.
    
    Exit Status:
    Status of command placed in foreground, or failure if an error occurs.
Display or execute commands from the history list.
    
    fc is used to list or edit and re-execute commands from the history list.
    FIRST and LAST can be numbers specifying the range, or FIRST can be a
    string, which means the most recent command beginning with that
    string.
    
    Options:
      -e ENAME	select which editor to use.  Default is FCEDIT, then EDITOR,
    		then vi
      -l 	list lines instead of editing
      -n	omit line numbers when listing
      -r	reverse the order of the lines (newest listed first)
    
    With the `fc -s [pat=rep ...] [command]' format, COMMAND is
    re-executed after the substitution OLD=NEW is performed.
    
    A useful alias to use with this is r='fc -s', so that typing `r cc'
    runs the last command beginning with `cc' and typing `r' re-executes
    the last command.
    
    Exit Status:
    Returns success or status of executed command; non-zero if an error occurs.
Exit a login shell.
    
    Exits a login shell with exit status N.  Returns an error if not executed
    in a login shell.
Exit the shell.
    
    Exits the shell with a status of N.  If N is omitted, the exit status
    is that of the last command executed.
Replace the shell with the given command.
    
    Execute COMMAND, replacing this shell with the specified program.
    ARGUMENTS become the arguments to COMMAND.  If COMMAND is not specified,
    any redirections take effect in the current shell.
    
    Options:
      -a name	pass NAME as the zeroth argument to COMMAND
      -c	execute COMMAND with an empty environment
      -l	place a dash in the zeroth argument to COMMAND
    
    If the command cannot be executed, a non-interactive shell exits, unless
    the shell option `execfail' is set.
    
    Exit Status:
    Returns success unless COMMAND is not found or a redirection error occurs.
Parse option arguments.
    
    Getopts is used by shell procedures to parse positional parameters
    as options.
    
    OPTSTRING contains the option letters to be recognized; if a letter
    is followed by a colon, the option is expected to have an argument,
    which should be separated from it by white space.
    
    Each time it is invoked, getopts will place the next option in the
    shell variable $name, initializing name if it does not exist, and
    the index of the next argument to be processed into the shell
    variable OPTIND.  OPTIND is initialized to 1 each time the shell or
    a shell script is invoked.  When an option requires an argument,
    getopts places that argument into the shell variable OPTARG.
    
    getopts reports errors in one of two ways.  If the first character
    of OPTSTRING is a colon, getopts uses silent error reporting.  In
    this mode, no error messages are printed.  If an invalid option is
    seen, getopts places the option character found into OPTARG.  If a
    required argument is not found, getopts places a ':' into NAME and
    sets OPTARG to the option character found.  If getopts is not in
    silent mode, and an invalid option is seen, getopts places '?' into
    NAME and unsets OPTARG.  If a required argument is not found, a '?'
    is placed in NAME, OPTARG is unset, and a diagnostic message is
    printed.
    
    If the shell variable OPTERR has the value 0, getopts disables the
    printing of error messages, even if the first character of
    OPTSTRING is not a colon.  OPTERR has the value 1 by default.
    
    Getopts normally parses the positional parameters, but if arguments
    are supplied as ARG values, they are parsed instead.
    
    Exit Status:
    Returns success if an option is found; fails if the end of options is
    encountered or an error occurs.
Execute arguments as a shell command.
    
    Combine ARGs into a single string, use the result as input to the shell,
    and execute the resulting commands.
    
    Exit Status:
    Returns exit status of command or success if command is null.
Enable and disable shell builtins.
    
    Enables and disables builtin shell commands.  Disabling allows you to
    execute a disk command which has the same name as a shell builtin
    without using a full pathname.
    
    Options:
      -a	print a list of builtins showing whether or not each is enabled
      -n	disable each NAME or display a list of disabled builtins
      -p	print the list of builtins in a reusable format
      -s	print only the names of Posix `special' builtins
    
    Options controlling dynamic loading:
      -f	Load builtin NAME from shared object FILENAME
      -d	Remove a builtin loaded with -f
    
    Without options, each NAME is enabled.
    
    To use the `test' found in $PATH instead of the shell builtin
    version, type `enable -n test'.
    
    Exit Status:
    Returns success unless NAME is not a shell builtin or an error occurs.
Write arguments to the standard output.
    
    Display the ARGs, separated by a single space character and followed by a
    newline, on the standard output.
    
    Options:
      -n	do not append a newline
      -e	enable interpretation of the following backslash escapes
      -E	explicitly suppress interpretation of backslash escapes
    
    `echo' interprets the following backslash-escaped characters:
      \a	alert (bell)
      \b	backspace
      \c	suppress further output
      \e	escape character
      \E	escape character
      \f	form feed
      \n	new line
      \r	carriage return
      \t	horizontal tab
      \v	vertical tab
      \\	backslash
      \0nnn	the character whose ASCII code is NNN (octal).  NNN can be
    		0 to 3 octal digits
      \xHH	the eight-bit character whose value is HH (hexadecimal).  HH
    		can be one or two hex digits
      \uHHHH	the Unicode character whose value is the hexadecimal value HHHH.
    		HHHH can be one to four hex digits.
      \UHHHHHHHH the Unicode character whose value is the hexadecimal value
    		HHHHHHHH. HHHHHHHH can be one to eight hex digits.
    
    Exit Status:
    Returns success unless a write error occurs.
Define local variables.
    
    Create a local variable called NAME, and give it VALUE.  OPTION can
    be any option accepted by `declare'.
    
    Local variables can only be used within a function; they are visible
    only to the function where they are defined and its children.
    
    Exit Status:
    Returns success unless an invalid option is supplied, a variable
    assignment error occurs, or the shell is not executing a function.
Set variable values and attributes.
    
    A synonym for `declare'.  See `help declare'.
Set variable values and attributes.
    
    Declare variables and give them attributes.  If no NAMEs are given,
    display the attributes and values of all variables.
    
    Options:
      -f	restrict action or display to function names and definitions
      -F	restrict display to function names only (plus line number and
    		source file when debugging)
      -g	create global variables when used in a shell function; otherwise
    		ignored
      -I	if creating a local variable, inherit the attributes and value
    		of a variable with the same name at a previous scope
      -p	display the attributes and value of each NAME
    
    Options which set attributes:
      -a	to make NAMEs indexed arrays (if supported)
      -A	to make NAMEs associative arrays (if supported)
      -i	to make NAMEs have the `integer' attribute
      -l	to convert the value of each NAME to lower case on assignment
      -n	make NAME a reference to the variable named by its value
      -r	to make NAMEs readonly
      -t	to make NAMEs have the `trace' attribute
      -u	to convert the value of each NAME to upper case on assignment
      -x	to make NAMEs export
    
    Using `+' instead of `-' turns off the given attribute.
    
    Variables with the integer attribute have arithmetic evaluation (see
    the `let' command) performed when the variable is assigned a value.
    
    When used in a function, `declare' makes NAMEs local, as with the `local'
    command.  The `-g' option suppresses this behavior.
    
    Exit Status:
    Returns success unless an invalid option is supplied or a variable
    assignment error occurs.
Execute a simple command or display information about commands.
    
    Runs COMMAND with ARGS suppressing  shell function lookup, or display
    information about the specified COMMANDs.  Can be used to invoke commands
    on disk when a function with the same name exists.
    
    Options:
      -p    use a default value for PATH that is guaranteed to find all of
            the standard utilities
      -v    print a description of COMMAND similar to the `type' builtin
      -V    print a more verbose description of each COMMAND
    
    Exit Status:
    Returns exit status of COMMAND, or failure if COMMAND is not found.
Return an unsuccessful result.
    
    Exit Status:
    Always fails.
Return a successful result.
    
    Exit Status:
    Always succeeds.
Null command.
    
    No effect; the command does nothing.
    
    Exit Status:
    Always succeeds.
Print the name of the current working directory.
    
    Options:
      -L	print the value of $PWD if it names the current working
    		directory
      -P	print the physical directory, without any symbolic links
    
    By default, `pwd' behaves as if `-L' were specified.
    
    Exit Status:
    Returns 0 unless an invalid option is given or the current directory
    cannot be read.
Change the shell working directory.
    
    Change the current directory to DIR.  The default DIR is the value of the
    HOME shell variable.
    
    The variable CDPATH defines the search path for the directory containing
    DIR.  Alternative directory names in CDPATH are separated by a colon (:).
    A null directory name is the same as the current directory.  If DIR begins
    with a slash (/), then CDPATH is not used.
    
    If the directory is not found, and the shell option `cdable_vars' is set,
    the word is assumed to be  a variable name.  If that variable has a value,
    its value is used for DIR.
    
    Options:
      -L	force symbolic links to be followed: resolve symbolic
    		links in DIR after processing instances of `..'
      -P	use the physical directory structure without following
    		symbolic links: resolve symbolic links in DIR before
    		processing instances of `..'
      -e	if the -P option is supplied, and the current working
    		directory cannot be determined successfully, exit with
    		a non-zero status
      -@	on systems that support it, present a file with extended
    		attributes as a directory containing the file attributes
    
    The default is to follow symbolic links, as if `-L' were specified.
    `..' is processed by removing the immediately previous pathname component
    back to a slash or the beginning of DIR.
    
    Exit Status:
    Returns 0 if the directory is changed, and if $PWD is set successfully when
    -P is used; non-zero otherwise.
Return the context of the current subroutine call.
    
    Without EXPR, returns "$line $filename".  With EXPR, returns
    "$line $subroutine $filename"; this extra information can be used to
    provide a stack trace.
    
    The value of EXPR indicates how many call frames to go back before the
    current one; the top frame is frame 0.
    
    Exit Status:
    Returns 0 unless the shell is not executing a shell function or EXPR
    is invalid.
Execute shell builtins.
    
    Execute SHELL-BUILTIN with arguments ARGs without performing command
    lookup.  This is useful when you wish to reimplement a shell builtin
    as a shell function, but need to execute the builtin within the function.
    
    Exit Status:
    Returns the exit status of SHELL-BUILTIN, or false if SHELL-BUILTIN is
    not a shell builtin.
Resume for, while, or until loops.
    
    Resumes the next iteration of the enclosing FOR, WHILE or UNTIL loop.
    If N is specified, resumes the Nth enclosing loop.
    
    Exit Status:
    The exit status is 0 unless N is not greater than or equal to 1.
Exit for, while, or until loops.
    
    Exit a FOR, WHILE or UNTIL loop.  If N is specified, break N enclosing
    loops.
    
    Exit Status:
    The exit status is 0 unless N is not greater than or equal to 1.
Set Readline key bindings and variables.
    
    Bind a key sequence to a Readline function or a macro, or set a
    Readline variable.  The non-option argument syntax is equivalent to
    that found in ~/.inputrc, but must be passed as a single argument:
    e.g., bind '"\C-x\C-r": re-read-init-file'.
    
    Options:
      -m  keymap         Use KEYMAP as the keymap for the duration of this
                         command.  Acceptable keymap names are emacs,
                         emacs-standard, emacs-meta, emacs-ctlx, vi, vi-move,
                         vi-command, and vi-insert.
      -l                 List names of functions.
      -P                 List function names and bindings.
      -p                 List functions and bindings in a form that can be
                         reused as input.
      -S                 List key sequences that invoke macros and their values
      -s                 List key sequences that invoke macros and their values
                         in a form that can be reused as input.
      -V                 List variable names and values
      -v                 List variable names and values in a form that can
                         be reused as input.
      -q  function-name  Query about which keys invoke the named function.
      -u  function-name  Unbind all keys which are bound to the named function.
      -r  keyseq         Remove the binding for KEYSEQ.
      -f  filename       Read key bindings from FILENAME.
      -x  keyseq:shell-command	Cause SHELL-COMMAND to be executed when
    				KEYSEQ is entered.
      -X                 List key sequences bound with -x and associated commands
                         in a form that can be reused as input.
    
    Exit Status:
    bind returns 0 unless an unrecognized option is given or an error occurs.
Remove each NAME from the list of defined aliases.
    
    Options:
      -a	remove all alias definitions
    
    Return success unless a NAME is not an existing alias.
Define or display aliases.
    
    Without arguments, `alias' prints the list of aliases in the reusable
    form `alias NAME=VALUE' on standard output.
    
    Otherwise, an alias is defined for each NAME whose VALUE is given.
    A trailing space in VALUE causes the next word to be checked for
    alias substitution when the alias is expanded.
    
    Options:
      -p	print all defined aliases in a reusable format
    
    Exit Status:
    alias returns true unless a NAME is supplied for which no alias has been
    defined.
alias [-p] [name[=value] ... ]
bind [-lpsvPSVX] [-m keymap] [-f filename] [-q name] [-u name] [-r keyseq] [-x keyseq:shell-command] [keyseq:readline-function or readline-command]
builtin [shell-builtin [arg ...]]
command [-pVv] command [arg ...]
declare [-aAfFgiIlnrtux] [-p] [name[=value] ...]
typeset [-aAfFgiIlnrtux] [-p] name[=value] ...
local [option] name[=value] ...
enable [-a] [-dnps] [-f filename] [name ...]
getopts optstring name [arg ...]
exec [-cl] [-a name] [command [argument ...]] [redirection ...]
fc [-e ename] [-lnr] [first] [last] or fc -s [pat=rep] [command]
hash [-lr] [-p pathname] [-dt] [name ...]
history [-c] [-d offset] [n] or history -anrw [filename] or history -ps arg [arg...]
jobs [-lnprs] [jobspec ...] or jobs -x command [args]
disown [-h] [-ar] [jobspec ... | pid ...]
kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]
read [-ers] [-a array] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name ...]
set [-abefhkmnptuvxBCHP] [-o option-name] [--] [arg ...]
unset [-f] [-v] [-n] [name ...]
export [-fn] [name[=value] ...] or export -p
readonly [-aAf] [name[=value] ...] or readonly -p
trap [-lp] [[arg] signal_spec ...]
ulimit [-SHabcdefiklmnpqrstuvxPT] [limit]
for NAME [in WORDS ... ] ; do COMMANDS; done
for (( exp1; exp2; exp3 )); do COMMANDS; done
select NAME [in WORDS ... ;] do COMMANDS; done
case WORD in [PATTERN [| PATTERN]...) COMMANDS ;;]... esac
if COMMANDS; then COMMANDS; [ elif COMMANDS; then COMMANDS; ]... [ else COMMANDS; ] fi
while COMMANDS; do COMMANDS; done
until COMMANDS; do COMMANDS; done
coproc [NAME] command [redirections]
function name { COMMANDS ; } or name () { COMMANDS ; }
variables - Names and meanings of some shell variables
shopt [-pqsu] [-o] [optname ...]
printf [-v var] format [arguments]
complete [-abcdefgjksuv] [-pr] [-DEI] [-o option] [-A action] [-G globpat] [-W wordlist] [-F function] [-C command] [-X filterpat] [-P prefix] [-S suffix] [name ...]
compgen [-abcdefgjksuv] [-o option] [-A action] [-G globpat] [-W wordlist] [-F function] [-C command] [-X filterpat] [-P prefix] [-S suffix] [word]
compopt [-o|+o option] [-DEI] [name ...]
mapfile [-d delim] [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [array]
readarray [-d delim] [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [array]
=>>>>>??@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AAABBCCDDDDDEEEEEEEEEEEFFFFFFFFGGGGHHHHHHHHIIIJJJJKKLMMMMMNNNOPQRRRSSTTTTUUUUUUVVWXXYYYZZZZZZ[[\\\]]^^^_____`````aaabbbb
=AKEB?G@FHIJ
5;8>
gelkt
)#2 ,&/
TUZ[
^_vPQ\]
 !"#$%&'()*+,-./04
`%s': not a valid identifier
/dev/tty
xtrace_set: NULL file pointer
/dev/null
PROMPT_DIRTRIM
OLDPWD
COLUMNS
syntax error: `;' unexpected
syntax error: `((%s))'
environment
clean_simple_command
dispose_command
%s=(%s)
''%s
for %s in 
select %s in 
case %s in
case %s in 
 && 
 || 
{%s}
<<%s%s
>| %s
<> %s
<<< %s
{%s}<&%d
%d<&%d
{%s}>&%d
%d>&%d
{%s}<&%s
%d<&%s
{%s}>&%s
%d>&%s
{%s}<&%d-
%d<&%d-
{%s}>&%d-
%d>&%d-
{%s}<&%s-
%d<&%s-
{%s}>&%s-
%d>&%s-
{%s}>&-
%d>&-
&> %s
&>> %s
time 
 then
else
function %s () 
coproc %s 
print_command
function 
%s: readonly variable
%s_PID
execute_cond_node
simple-command
auto_resume
exact
substring
saved_fifos
saved-redirects
internal_fifos
loop_redirections
error trap
execute_connection
`%s': is a special builtin
%s: readonly function
execute_command
%*d%s%s
pipe error
pipe-file-descriptors
lastpipe-exec
cannot redirect standard input from /dev/null: %s
syntax error: arithmetic expression required
xtrace_set: %d: invalid file descriptor
xtrace fd (%d) != fileno xtrace fp (%d)
make_here_document: bad instruction type %d
here-document at line %d delimited by end-of-file (wanted `%s')
make_redirection: redirection instruction `%d' out of range
cprintf: `%c': invalid format character
print_command: bad connector `%d'
execute_coproc: coproc [%d:%s] still exists
/bin:/usr/bin:/sbin:/usr/sbin:/e%u%c%06u
eval_builtin
builtin_env
return_temp_env
%s: %s: bad interpreter
%s: circular name reference
BASH_ARGV
BASH_ARGC
function_calling
return trap
OPTIND
execute-shell-function
%s: not found
`%s': invalid alias name
OPTERR
SHLVL
shell_init
shell-init
PPID
LINES
command_not_found_handle
%s: command not found
POSIX_PEDANDTIC
%s: cannot unset: readonly %s
%s: cannot unset
COMP_WORDBREAKS
GLOBIGNORE
ignorespace
ignoredups
ignoreboth
erasedups
~/.sh_history
~/.bash_history
BASH_FUNC_
() {
SHELLOPTS
x86_64
HOSTTYPE
OSTYPE
MACHTYPE
HOSTNAME
MAILCHECK
BASH_ARGV0
BASH
%s.%d(%d)-%s
release
BASH_VERSION
BASH_VERSINFO
BASH_EXECUTION_STRING
IGNOREEOF
HISTCONTROL
HISTTIMEFORMAT
EUID
BASH_XTRACEFD
BASH_COMPAT
FUNCNEST
BASH_COMMAND
BASH_SUBSHELL
SRANDOM
BASHPID
EPOCHSECONDS
EPOCHREALTIME
HISTCMD
DIRSTACK
GROUPS
BASH_CMDS
BASH_ALIASES
EXECIGNORE
CHILD_MAX
HISTFILESIZE
HISTIGNORE
HISTSIZE
HOSTFILE
LANG
LC_ALL
LC_COLLATE
LC_CTYPE
LC_MESSAGES
LC_NUMERIC
LC_TIME
MAIL
MAILPATH
TERMCAP
TERMINFO
TEXTDOMAIN
TEXTDOMAINDIR
histchars
"\'`@$><=;|&{(
all_local_variables: no function context at current scope
eval: maximum eval nesting level exceeded (%d)
%s: maximum source nesting level exceeded (%d)
cannot duplicate fd %d to fd %d
%s: cannot execute binary file: %s
%s: maximum function nesting level exceeded (%d)
%s: removing nameref attribute
%s: variable may not be assigned value
make_local_variable: no function context at current scope
%s: cannot inherit value from incompatible type
shell level (%d) too high, resetting to 1
%s: nameref variable self references not allowed
%s: assigning integer to name reference
%s: restricted: cannot specify `/' in command names
pop_var_context: head of shell_variables not a function context
pop_var_context: no global_variables context
pop_scope: head of shell_variables not a temporary environment scope
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
error importing function definition for `%s'
unknown command error
<unknown>
 line 
%s: 
%s: %s: cannot open as FILE
warning: 
INFORM: 
start_pipeline: pgrp pipe
[%ld: %d (%d)] tcsetattr
(null)
last command: %s
Aborting...
%s: %s: %d
[%d] %ld
bad array subscript
%s: unbound variable
%s: %s:%s%d: 
%s[%s]
missing `)'
exponent less than 0
division by 0
expression expected
bug: bad expassign token
syntax error in expression
recursion stack underflow
invalid number
invalid arithmetic base
invalid integer constant
value too great for base
*/%+-&^|
job-working-directory
     
%5ld
Stopped
invalid signal number
Stopped(%s)
Running
Signal %d
Done
Done(%d)
Exit %d
Unknown status
(core dumped) 
  (wd: %s)
[%d]%c 
fork: retry
fork
child setpgid (%ld to %ld)
%s: no current jobs
%s: job has terminated
[%d]%s
	(wd: %s)
job %d[%d] stopped
SIGCHLD trap
no job control in this shell
EXIT
SIGHUP
SIGINT
SIGQUIT
SIGILL
SIGTRAP
SIGABRT
SIGBUS
SIGFPE
SIGKILL
SIGUSR1
SIGSEGV
SIGUSR2
SIGPIPE
SIGALRM
SIGTERM
SIGSTKFLT
SIGCHLD
SIGCONT
SIGSTOP
SIGTSTP
SIGTTIN
SIGTTOU
SIGURG
SIGXCPU
SIGXFSZ
SIGVTALRM
SIGPROF
SIGWINCH
SIGIO
SIGPWR
SIGSYS
SIGJUNK(32)
SIGJUNK(33)
SIGRTMIN
SIGRTMIN+1
SIGRTMIN+2
SIGRTMIN+3
SIGRTMIN+4
SIGRTMIN+5
SIGRTMIN+6
SIGRTMIN+7
SIGRTMIN+8
SIGRTMIN+9
SIGRTMIN+10
SIGRTMIN+11
SIGRTMIN+12
SIGRTMIN+13
SIGRTMIN+14
SIGRTMIN+15
SIGRTMAX-14
SIGRTMAX-13
SIGRTMAX-12
SIGRTMAX-11
SIGRTMAX-10
SIGRTMAX-9
SIGRTMAX-8
SIGRTMAX-7
SIGRTMAX-6
SIGRTMAX-5
SIGRTMAX-4
SIGRTMAX-3
SIGRTMAX-2
SIGRTMAX-1
SIGRTMAX
DEBUG
RETURN
bad command type
bad connector
bad jump
%s: %s: invalid value for trace file descriptor
%s: %s: compatibility value out of range
%s%s%s: %s (error token is "%s")
describe_pid: %ld: no such pid
identifier expected after pre-increment or pre-decrement
syntax error: operand expected
`:' expected for conditional expression
attempted assignment to non-variable
syntax error in variable assignment
expression recursion level exceeded
--: assignment requires lvalue
++: assignment requires lvalue
syntax error: invalid arithmetic operator
wait_for: No record of process %ld
bgp_search: LOOP: psi (%d) == storage[psi].bucket_next
wait: pid %ld is not a child of this shell
wait_for_job: job %d is stopped
%s: job %d already in background
initialize_job_control: getpgrp failed
initialize_job_control: no job control in background
initialize_job_control: setpgid
cannot set terminal process group (%d)
%s: line %d: 
 (core dumped)
(wd now: %s)
notify_of_job_status
?*+!@
deleting stopped job %d with process group %ld
bad substitution: no closing `%s' in %s
%s: cannot assign list to array member
process substitution
read-comsub
declare -%s %s
declare -%s %s=%s
%s: invalid variable name
%s: substring expression < 0
#%^,~:-=?+/@}
#%:-=?+/@}
%:=+/
%s: bad substitution
set -- 
%s: parameter not set
%s: parameter null or not set
cannot make pipe for process substitution
cannot make child for process substitution
cannot duplicate named pipe %s as fd %d
cannot make pipe for command substitution
cannot make child for command substitution
command_substitute: cannot duplicate pipe as fd 1
command substitution: ignored null byte in input
%s: invalid variable name for name reference
%s: invalid indirect expansion
$%s: cannot assign in this way
SIGRTMIN+
You have mail in $_
You have new mail in $_
The mail in %s has been read
interrupt trap
exit trap
trap_handler: bad signal %d
debug trap
error reading input file: %s
array assign
no match: %s
bad substitution: no closing "`" in %s
unwind_frame_discard: %s: frame not found
trap handler: maximum trap handler level exceeded (%d)
run_pending_traps: signal handler is SIG_DFL, resending %d (%s) to myself
run_pending_traps: bad value in trap_list[%d]: %p
cannot reset nodelay mode for fd %d
cannot allocate new file descriptor for bash input from fd %d
save_bash_input: buffer already exists for new fd %d
argument expected
parse_and_execute top
GNU bash, version %s (%s)
%s: binary operator expected
;|&(
;|&()
'()'
%s[%s: %s
[%s]: %s
`)' expected
`)' expected, found %s
%s: unary operator expected
missing `]'
syntax error: `%s' unexpected
too many arguments
%0*d
%s: integer expression expected
Copyright (C) 2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
%s: cannot convert indexed to associative array
%s: invalid associative array key
%s: cannot assign to non-numeric index
%s: %s: must use subscript when assigning associative array
brace expansion: failed to allocate memory for %u elements
brace expansion: failed to allocate memory for `%s'
brace expansion: cannot allocate memory for %s
no closing `%c' in %s
%s: cannot create: %s
\"'@<>=;|&()#$`?*[!:{~
%s%s%s
comment-begin
$include 
/etc/hosts
hostname_completion_file
C-xC-e
%s %d
input-meta
fc -e vi
;|&{(`
symlink-hook
_InitialWorD_
()<>;&| 	
_EmptycmD_
completion-ignore-case
%s: missing colon separator
READLINE_LINE
READLINE_POINT
READLINE_MARK
bash_execute_unix_command
FIGNORE
%s: first non-whitespace character is not `"'
fc -e "${VISUAL:-${EDITOR:-$(command -v editor || echo vi)}}"
fc -e "${VISUAL:-${EDITOR:-$(command -v editor || echo emacs)}}"
`%s': cannot unbind in command keymap
bash_execute_unix_command: cannot find keymap for command
%s: usage: 
Bash
shell-expand-line
history-expand-line
magic-space
shell-forward-word
shell-backward-word
shell-kill-word
shell-backward-kill-word
shell-transpose-words
history-and-alias-expand-line
insert-last-argument
display-shell-version
edit-and-execute-command
complete-into-braces
complete-filename
possible-filename-completions
complete-username
possible-username-completions
complete-hostname
possible-hostname-completions
complete-variable
possible-variable-completions
complete-command
possible-command-completions
glob-complete-word
glob-expand-word
glob-list-expansions
dynamic-complete-history
dabbrev-expand
/usr/share/locale
POSIX
file descriptor out of range
%s: ambiguous redirect
COMP_LINE
COMP_POINT
COMP_TYPE
COMP_KEY
COMP_WORDS
COMP_CWORD
alias %s
%s: not a shell builtin
%s: restricted
command_builtin
%s: numeric argument required
%s: invalid option name
invalid octal number
invalid hex number
NULL
--help
%s %s %s
%s: %s out of range
%s: no such job
%s: no job control
write error: %s
OLDPWD=
HOME not set
OLDPWD not set
CDPATH
line editing not enabled
bind_builtin
lvpVPsSXf:q:u:m:r:x:
`%s': invalid keymap name
%s: cannot read: %s
`%s': unknown function name
%s is not bound to any keys.
%s can be invoked via 
"%s"%s
`%s': cannot unbind
loop count
gen-shell-function-matches
COMPREPLY
_DefaultCmD_
other
setlocale: LC_ALL: cannot change locale (%s)
setlocale: LC_ALL: cannot change locale (%s): %s
setlocale: %s: cannot change locale (%s)
setlocale: %s: cannot change locale (%s): %s
#: %s:%d
msgid %s%s
msgstr ""
%s: cannot overwrite existing file
%s: restricted: cannot redirect output
cannot create temp file for here-document: %s
%s: cannot assign fd to variable
redirection error: cannot duplicate fd
progcomp_insert: %s: NULL COMPSPEC
%s: invalid signal specification
`%s': not a pid or valid job spec
error setting terminal attributes: %s
error getting terminal attributes: %s
only meaningful in a `for', `while', or `until' loop
completion: function `%s' not found
programmable_completion: %s: possible retry loop
%4d	%s
%s: cannot open: %s
%s: ambiguous job spec
builtin hash -p %s %s
SIGJUNK
Unknown
%2d) %s
%*s%s
%s: %s
+acfgilnprtuxAFGI
%s %d %s
adnpsf:
enable %s
enable -n %s
BASH_LOADABLES_PATH
%s: not dynamically loaded
%s: cannot delete: %s
pe_dispose
parse_and_execute
%s: is a directory
%s: not a regular file
%s: file is too large
_evalfile
~/.bash_logout
/etc/bash.bash_logout
evalstring
parse_string top
parse_string
cla:
%s: cannot execute: %s
There are stopped jobs.
There are running jobs.
exit
logout
not login shell: use `exit'
:e:lnrs
no command found
history specification
bash-fc
%s: cannot open temp file: %s
fc builtin
current
hashing disabled
dlp:rt
hits	command
%s: hash table empty
%c%s
%*s%s - 
SYNOPSIS
%*s%s
DESCRIPTION
SEE ALSO
%*sbash(1)
IMPLEMENTATION
acd:npsrw
%s: history expansion failed
history position
%s: invalid timestamp
%5d%c %s%s
getcwd: cannot access parent directories
%s: error retrieving current directory: %s: %s
%s: reference variable cannot be an array
`%s': invalid variable name for name reference
cannot use `-f' to make functions
%s: quoted compound array assignment deprecated
%s: cannot destroy array variables in this way
%s: cannot convert associative to indexed array
can only be used in a function
cannot open shared object %s: %s
cannot find %s in shared object %s: %s
%s: dynamic builtin already loaded
load function for %s returns failure (%d): not loaded
%s: ignoring function definition attempt
${FCEDIT:-${EDITOR:-$(command -v editor || echo ed)}}
${FCEDIT:-${EDITOR:-$(command -v editor || echo vi)}}
job %d started without job control
These shell commands are defined internally.  Type `help' to see this list.
Type `help name' to find out more about the function `name'.
Use `info bash' to find out more about the shell in general.
Use `man -k' or `info' to find out more about commands not in this list.
A star (*) next to a name means that the command is disabled.
Shell commands matching keywords `
Shell commands matching keyword `
no help topics match `%s'.  Try `help help' or `man -k %s' or `info %s'.
cannot use more than one of -anrw
_builtin_unload
u=%s,g=%s,o=%s
(%s, -%c) 
(-%c) 
%-20s %20s
unlimited
set %co %s
agou
lpnxrs
jobs_builtin
Unknown error
(%ld) - %s
unknown
trap -- %s %d
trap -- %s %s
MAPFILE
%s: invalid line count
%s: invalid array origin
%s: invalid callback quantum
d:u:n:O:tC:c:s:
empty array variable name
%s: not an indexed array
%s %d %s
umask%s 
%04lo
directory stack empty
directory stack index
<no current directory>
%2d  %s
no other directory
%s: invalid argument
dirstack
ersa:d:i:n:p:t:u:N:
read_builtin
read error: %d: %s
%s: not an array variable
declare -%s 
%s -%s 
aAfnp
%s: not a function
%s: cannot export
shift count
filename argument required
%s: file not found
cannot suspend
cannot suspend a login shell
%s is aliased to `%s'
alias %s=%s
%s is a shell keyword
%s is a function
%s is a shell builtin
%s is %s
%s is hashed (%s)
-type
-path
-all
afptP
%s: cannot get limit: %s
hard
soft
%s: cannot modify limit: %s
`%c': bad command
real-time non-blocking time
microseconds
core file size
blocks
data seg size
kbytes
scheduling priority
pending signals
max locked memory
max memory size
open files
pipe size
512 bytes
POSIX message queues
real-time priority
stack size
cpu time
max user processes
virtual memory
file locks
`%c': invalid symbolic mode operator
`%c': invalid symbolic mode character
no other options allowed with `-x'
%s: arguments must be process or job IDs
%s: invalid file descriptor specification
%d: invalid file descriptor: %s
internal error: getting variable name
%s: invalid timeout specification
can only `return' from a function or sourced script
cannot simultaneously unset a function and a variable
%s is a special shell builtin
warning: %s: %s
%s: illegal option -- %c
ascii
?*+@!
fnp:
OPTARG
%s: invalid shell option name
psuoq
BASHOPTS
#'-+ 0
missing hex digit for \x
missing unicode digit for \%c
hjlLtz
bashdefault
arrayvar
complete 
-o %s 
-%c 
-A %s 
%s %s 
+o:DEI
alnum
alpha
blank
cntrl
graph
lower
punct
upper
xdigit
alert
backspace
vertical-tab
form-feed
carriage-return
exclamation-mark
quotation-mark
number-sign
dollar-sign
percent-sign
ampersand
apostrophe
left-parenthesis
right-parenthesis
asterisk
plus-sign
comma
hyphen
hyphen-minus
dash
period
full-stop
zero
three
four
five
seven
eight
nine
semicolon
less-than-sign
equals-sign
greater-than-sign
question-mark
commercial-at
left-square-bracket
backslash
reverse-solidus
right-square-bracket
circumflex
circumflex-accent
underscore
grave-accent
left-brace
left-curly-bracket
vertical-line
right-brace
right-curly-bracket
dirnames
filenames
noquote
nosort
nospace
plusdirs
binding
helptopic
group
running
service
setopt
signal
user
%s: option requires an argument -- %c
cannot set and unset shell options simultaneously
`%c': invalid time format specification
`%c': invalid format character
`%s': missing format character
%s: no completion specification
not currently executing completion function
warning: -F option may not work as you expect
warning: -C option may not work as you expect
/dev/fd/
%ldm%d%c%03ds
%s/cur
%s/tmp
%s/new
%s/%s
invalid base
0123456789abcdef
0123456789ABCDEF
\u%04X
\u%08X
BASH_REMATCH
/dev/std
socket
connect
sh_makepath
sh_realpath
TMPDIR
/var/tmp
/usr/tmp
shtmp
%s/%s.XXXXXX
UTF-8
ASCII
_*\AaIiCcDdPpYyRrSsXx~
%s: bad network path specification
[1;5C
[1;5D
[3;5~
[1;3C
[1;3D
 hl^$0ftFT;,%wbeWBE|`
abort
[200~
 l|h^0bBFT`
 l|hwW^0bBFT`
 l|h^0%bBFT`
(arg: %d) 
[?2004h
[?2004l
--More--
01;34
01;36
01;35
01;33
01;32
37;41
30;43
37;44
34;42
30;42
30;41
accept-line
arrow-key-prefix
backward-byte
backward-char
backward-kill-line
beginning-of-history
beginning-of-line
bracketed-paste-begin
call-last-kbd-macro
capitalize-word
character-search
character-search-backward
clear-display
clear-screen
copy-backward-word
copy-forward-word
copy-region-as-kill
delete-char-or-list
delete-horizontal-space
digit-argument
do-lowercase-version
downcase-word
dump-functions
dump-macros
dump-variables
emacs-editing-mode
end-kbd-macro
end-of-history
end-of-line
exchange-point-and-mark
forward-backward-delete-char
forward-byte
forward-char
forward-search-history
history-search-backward
history-search-forward
insert-comment
insert-completions
kill-whole-line
kill-region
menu-complete-backward
next-history
next-screen-line
old-menu-complete
operate-and-get-next
overwrite-mode
possible-completions
previous-history
previous-screen-line
print-last-kbd-macro
quoted-insert
re-read-init-file
redraw-current-line
reverse-search-history
revert-line
self-insert
skip-csi-sequence
start-kbd-macro
tab-insert
transpose-chars
tty-status
undo
universal-argument
unix-filename-rubout
unix-line-discard
upcase-word
yank
yank-last-arg
yank-nth-arg
vi-append-eol
vi-append-mode
vi-arg-digit
vi-back-to-indent
vi-backward-bigword
vi-backward-word
vi-bWord
vi-bword
vi-change-case
vi-change-char
vi-change-to
vi-char-search
vi-column
vi-complete
vi-delete
vi-delete-to
vi-eWord
vi-editing-mode
vi-end-bigword
vi-end-word
vi-eof-maybe
vi-eword
vi-fWord
vi-fetch-history
vi-first-print
vi-forward-bigword
vi-forward-word
vi-fword
vi-goto-mark
vi-insert-beg
vi-insertion-mode
vi-match
vi-movement-mode
vi-next-word
vi-overstrike
vi-overstrike-delete
vi-prev-word
vi-put
vi-redo
vi-replace
vi-rubout
vi-search
vi-search-again
vi-set-mark
vi-subst
vi-tilde-expand
vi-unix-word-rubout
vi-yank-arg
vi-yank-pop
vi-yank-to
warning: turning off output flushing
vidomove_dispatch: unknown operator %d
Display all %d possibilities? (y or n)
bad value %d for what_to_do in rl_complete
history-substring-search-backward
history-substring-search-forward
non-incremental-forward-search-history
non-incremental-reverse-search-history
non-incremental-forward-search-history-again
non-incremental-reverse-search-history-again
none
audible
visible
readline: 
$endif without matching $if
(ins)
(cmd)
completion-display-width
completion-query-items
history-size
isearch-terminators
keymap
keyseq-timeout
emacs-mode-string
vi-cmd-mode-string
vi-ins-mode-string
bind-tty-special-chars
bell-style
term=
mode=
argument expected, found `%s'
set %s %s
%s is set to `%s'
# %s (not bound)
"%s": %s
%s is not bound to any keys
%s can be found on 
"%s%s": "%s"
%s%s outputs %s
/-_=~.#$
blink-matching-paren
prefer-visible-bell
show-mode-in-prompt
enable-bracketed-paste
%s: unknown variable name
Control-
Meta
%s: unknown parser directive
%s: unknown key modifier
prefix-meta
/etc/inputrc
INPUTRC
~/.inputrc
emacs-standard
emacs-meta
emacs-ctlx
vi-move
vi-command
vi-insert
endif
include
Escape
Newline
Return
Rubout
Space
CTRL-
byte-oriented
colored-completion-prefix
colored-stats
completion-map-case
convert-meta
disable-completion
echo-control-characters
enable-keypad
enable-meta-key
expand-tilde
history-preserve-point
horizontal-scroll-mode
mark-directories
mark-modified-lines
mark-symlinked-directories
match-hidden-files
menu-complete-display-prefix
meta-flag
output-meta
page-completions
revert-all-at-newline
show-all-if-ambiguous
show-all-if-unmodified
skip-completed-text
visible-stats
$else found without matching $if
completion-prefix-display-length
comparison operator expected, found `%s'
numeric argument expected, found `%s'
trailing garbage on line: `%s'
equality comparison operator expected, found `%s'
%s: could not set value to `%s'
`%s': invalid key binding: missing key sequence
%s: no key sequence terminator
`%s': missing closing quote for macro
%s: no closing `"' in key binding
print-completions-horizontally
[201~
maximum macro execution nesting level exceeded
readline_callback_read_char() called with no handler!
<>$!@?+*
<>;&|
event not found
bad word specifier
substitution failed
unrecognized history modifier
no previous substitution
X%lu
target
^$*%-
:$*%^
LS_COLORS
LS_COLORS: syntax error: %s
;&()|<>
LS_COLORS: unrecognized prefix: %s
unparsable value for LS_COLORS environment variable
compopt 
+o %s 
utf8
%s: invalid action name
chdir
real %2R
user %2U
sys %2S
real	%3lR
user	%3lU
sys	%3lS
user	%2lU
sys	%2lS
sh-thd
run_one_command
bash-maintainers@gnu.org
/dev/tcp/*/*
/dev/udp/*/*
abcdefgjko:prsuvA:G:W:P:S:X:F:C:DEI
unwind_frame_run: %s: frame not found
bgp_delete: LOOP: psi (%d) == storage[psi].bucket_next
waitchld: turning on WNOHANG to avoid indefinite block
TIMEFORMAT: `%c': invalid format character
@(#)Bash version 5.1.16(1) release GNU
:*3$"
a5554034feb2af38e8c75872058883b2988bc5.debug
.shstrtab
.interp
.note.gnu.property
.note.gnu.build-id
.note.ABI-tag
.gnu.hash
.dynsym
.dynstr
.gnu.version
.gnu.version_r
.rela.dyn
.rela.plt
.init
.plt.got
.plt.sec
.text
.fini
.rodata
.eh_frame_hdr
.eh_frame
.init_array
.fini_array
.data.rel.ro
.dynamic
.data
.bss
.gnu_debuglink
[?2004h]0;sami@sami-VirtualBox: ~[01;32msami@sami-VirtualBox[00m:[01;34m~[00m$ [?2004l

exit

Script done on 2023-02-19 19:35:41+05:00 [COMMAND_EXIT_CODE="0"]

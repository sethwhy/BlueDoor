# BlueDoor CTF Challenge

## Overview

**Challenge Name**: BlueDoor  
**CVE**: CVE-2017-0144 (EternalBlue)  
**Difficulty**: 3/5  
**Category**: Exploitation, Windows  
**Author(s)**: Seth Davis

BlueDoor simulates a real-world vulnerability (EternalBlue - CVE-2017-0144) in a Windows 7 system. The objective is to exploit the vulnerability, escalate privileges, and retrieve a hidden flag.

## Requirements

- **Virtual Machine Software**: VMware, VirtualBox, or equivalent
- **Operating Systems**: Windows 7 (via OVA file) and Kali Linux (or equivalent attack machine)
- **Tools**: `nmap`, `netlify`, `google drive`, `msfvenom`, for payload generation, and a network connection between both VMs.

## Setup Instructions

### 1. Download and Import the VM

- **Windows 7 OVA**: [Download OVA file](https://drive.google.com/file/d/1P4yf9R9rUodoWmSNELrdQajRWESWnsP_/view)
- Import the OVA into your chosen VM software.
  - **VMware**: Open a Virtual Machine.
  - **VirtualBox**: Import Appliance.

### 2. Configure Networking

- Ensure the Windows 7 and Kali Linux VMs are on the same network and can ping each other.

### 3. Disable Firewalls on Windows 7 (Optional)

To avoid network issues during exploitation:
netsh advfirewall set allprofiles state off

## Exploitation Steps

1. **Scan for Vulnerability**  
    Use `nmap` to verify if the target system is vulnerable to EternalBlue:
   nmap -p 139,445 --script smb-vuln-ms17-010 <target-ip>

2. **Exploit the Vulnerability**

- Create a reverse shell payload using `msfvenom` or similar tools.
- Use Metasploit or a Python-based exploit to deliver the payload and gain a shell on the target.

3. **Privilege Escalation**  
   After obtaining access, ensure you have escalated to administrator-level privileges.

4. **Locate the Flag**  
   Search the system for the flag, which is stored in a restricted location.

## Challenge Regeneration

If you need to regenerate the challenge:

- Uninstall the current Windows 7 setup.
- Re-import the OVA and reset the environment as needed.

CTF Submission Site Checker, email sd053520@ohio.edu if link is down! [CTF Submission Site](https://ctf-2017-0144-sethdavis.netlify.app/).

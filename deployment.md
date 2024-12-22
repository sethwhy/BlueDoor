# BlueDoor Deployment

## Dependencies

- Windows 7 OVA file https://drive.google.com/file/d/1P4yf9R9rUodoWmSNELrdQajRWESWnsP_/view
- Virtual Machine Software with Kali linux (VMware, VirtualBox, or equivalent)
- Access to a web browser for the submission site https://ctf-2017-0144-sethdavis.netlify.app/

## First-Time Setup

- Import the OVA File
  In VMware or other virtualization software like VirtualBox:
  Open the virtualization software.
  Choose the "File" menu and look for an option like:
  VMware: "Open a Virtual Machine".
  VirtualBox: "Import Appliance".
  Browse to the location of the OVA file.
  Select the OVA file and click Import.

- Start your kali linux machine to serve as the attacker
  Start both VM's and check if you're able to ping both ip addresses

## Starting up the Challenge

- Ensure VM host machine and target ip can ping eachother, that is all!
  ![ping-scan](image-2.png)

- Restart is needed only and only if you tampered to much in Windows 7 machine
  This will require deletion of all Win x64 files and redownload and configuration

## Challenge Regeneration

Challenge regeneration will generate the following files:

- `flag.txt`
- `<randomfiles.txt>`

To regenerate the challenge:

- Uninstall the current version of your Windows ISO and
- Republish all files that were regenerated

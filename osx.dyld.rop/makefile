all: sc.asm x64_shellcode.asm
	nasm x64_shellcode.asm
	nasm -fmacho64 sc.asm
	gcc sc.o -o sc

clean:
	rm *.o sc x64_shellcode

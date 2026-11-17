import subprocess
import webbrowser
import time
import sys

def main():
    print("🚀 Starting Dragon Type Specimen preview...")
    # Run vite dev server with --open flag to automatically open default browser
    try:
        subprocess.run("npm run dev -- --open", shell=True, check=True)
    except KeyboardInterrupt:
        print("\n👋 Dev server stopped.")
    except Exception as e:
        print(f"Error starting dev server: {e}")

if __name__ == "__main__":
    main()

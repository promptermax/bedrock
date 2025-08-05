import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-card-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo/Bedrock-full-logo-color.png" alt="Bedrock Gambia" className="h-32 w-auto" />
          </div>
          <p className="text-muted-foreground text-sm">
            We help communities thrive by unlocking one of life's most essential resources. At Bedrock, we're not just digging holes — we're building long-term water solutions that fuel life, productivity, and resilience.
          </p>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">© 2024 Bedrock Gambia. All rights reserved.</p>
            <p className="text-muted-foreground text-sm mt-2">
              Powered by <a href="https://syntopian.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Syntopian</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

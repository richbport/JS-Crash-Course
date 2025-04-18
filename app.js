const statusRef = document.querySelector('.status')

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise()
}

async function main() {
  const status = (await getSubscriptionStatus());
  statusRef.innerHTML = status
}

main();
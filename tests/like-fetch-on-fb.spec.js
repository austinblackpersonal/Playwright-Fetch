// @ts-check
const { test, expect } = require('@playwright/test');

test('navigate to Fetchs FB page and like it', async ({ page }) => {
    await page.goto('https://facebook.com')

    // Expect url to be on Facebook.com
    await expect(page).toHaveURL(/.*facebook/);

    const usernameInput = page.getByTestId('royal_email');
    const passwordInput = page.getByTestId('royal_pass');

    // Fill in log-in information
    await usernameInput.fill('plzgivemeajobatfetch@yahoo.com');
    await passwordInput.fill('FetchTest1234');

    await page.getByTestId('royal_login_button').click();

    const searchBar = page.getByPlaceholder('Search Facebook');

    await searchBar.fill('Fetch Rewards Facebook Page');

    const searchResult = page.getByText('Search for Fetch Rewards Facebook Page')

    await searchResult.click();

    const fetchLink = await page.locator('//a[@aria-label="Fetch, Verified account"]')

    await expect(fetchLink).toBeVisible()

    await fetchLink.click()

    await expect(page).toHaveURL('https://www.facebook.com/FetchRewards')

    const closeChat = page.locator('//div[@aria-label="Close chat"]')

    await closeChat.click()

    const likeButton = page.getByRole('button', { name: 'Like' }).filter({ hasText: 'Like' }).first()

    await likeButton.click()

    await expect(likeButton).toHaveText("Liked")

    await likeButton.click()

    await expect(likeButton).toHaveText("Like")
})
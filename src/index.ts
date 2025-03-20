import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

function main () {
    const anthropic = new Anthropic({apiKey: process.env.ANTHROPIC_API_KEY!});

}
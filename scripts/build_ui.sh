#!/usr/bin/env bash
cd ui
npm install
npm run build
cp -R ./build/. ../public

#!/usr/bin/env bash
cd ui
npm run install
npm run build
cp -R ./build/. ../public

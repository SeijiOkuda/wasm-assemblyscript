# wasm-assemblyscript

このプロジェクトは、AssemblyScriptを使用してWebAssemblyモジュールを作成するためのものです。

## インストール

プロジェクトをクローンし、依存関係をインストールします。

```sh
git clone https://github.com/yourusername/wasm-assemblyscript.git
cd wasm-assemblyscript
npm install
```

## 使用方法

AssemblyScriptコードをコンパイルしてWebAssemblyモジュールを生成します。

```sh
npm run asbuild
```

生成されたWebAssemblyモジュールは`build`ディレクトリに配置されます。

## ローカルサーバーの起動

プロジェクトのルートディレクトリで以下のコマンドを実行することで、ローカルサーバーを起動できます。

```sh
npx serve .
```

このコマンドは、現在のディレクトリをルートとして静的ファイルサーバーを起動します。ブラウザで `http://localhost:3000` にアクセスすることで、プロジェクトの内容を確認できます。

## ディレクトリ構造

```
wasm-assemblyscript/
├── assembly/       # AssemblyScriptソースコード
├── build/          # コンパイルされたWebAssemblyモジュール
├── node_modules/   # 依存関係
├── package.json    # npmパッケージ設定
└── README.md       # このファイル
```


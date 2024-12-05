# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-oci.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciProvider <a name="OciProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs oci}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-oci'

new provider.OciProvider(scope: Construct, id: string, config?: OciProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig">OciProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig">OciProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile">resetConfigFileProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries">resetDisableAutoRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags">resetIgnoreDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword">resetPrivateKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath">resetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled">resetRealmSpecificServiceEndpointTemplateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds">resetRetryDurationSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid">resetTenancyOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid">resetUserOcid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuth` <a name="resetAuth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetConfigFileProfile` <a name="resetConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile"></a>

```typescript
public resetConfigFileProfile(): void
```

##### `resetDisableAutoRetries` <a name="resetDisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries"></a>

```typescript
public resetDisableAutoRetries(): void
```

##### `resetFingerprint` <a name="resetFingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint"></a>

```typescript
public resetFingerprint(): void
```

##### `resetIgnoreDefinedTags` <a name="resetIgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags"></a>

```typescript
public resetIgnoreDefinedTags(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyPassword` <a name="resetPrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword"></a>

```typescript
public resetPrivateKeyPassword(): void
```

##### `resetPrivateKeyPath` <a name="resetPrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath"></a>

```typescript
public resetPrivateKeyPath(): void
```

##### `resetRealmSpecificServiceEndpointTemplateEnabled` <a name="resetRealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled"></a>

```typescript
public resetRealmSpecificServiceEndpointTemplateEnabled(): void
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetryDurationSeconds` <a name="resetRetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds"></a>

```typescript
public resetRetryDurationSeconds(): void
```

##### `resetTenancyOcid` <a name="resetTenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid"></a>

```typescript
public resetTenancyOcid(): void
```

##### `resetUserOcid` <a name="resetUserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid"></a>

```typescript
public resetUserOcid(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-oci'

provider.OciProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-oci'

provider.OciProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-oci'

provider.OciProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-oci'

provider.OciProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OciProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OciProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OciProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput">authInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput">configFileProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput">disableAutoRetriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput">fingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput">ignoreDefinedTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput">privateKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput">privateKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput">realmSpecificServiceEndpointTemplateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput">retryDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput">tenancyOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput">userOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth">auth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile">configFileProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries">disableAutoRetries</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags">ignoreDefinedTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword">privateKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath">privateKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled">realmSpecificServiceEndpointTemplateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds">retryDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid">userOcid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput"></a>

```typescript
public readonly authInput: string;
```

- *Type:* string

---

##### `configFileProfileInput`<sup>Optional</sup> <a name="configFileProfileInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput"></a>

```typescript
public readonly configFileProfileInput: string;
```

- *Type:* string

---

##### `disableAutoRetriesInput`<sup>Optional</sup> <a name="disableAutoRetriesInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput"></a>

```typescript
public readonly disableAutoRetriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput"></a>

```typescript
public readonly fingerprintInput: string;
```

- *Type:* string

---

##### `ignoreDefinedTagsInput`<sup>Optional</sup> <a name="ignoreDefinedTagsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput"></a>

```typescript
public readonly ignoreDefinedTagsInput: string[];
```

- *Type:* string[]

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPasswordInput`<sup>Optional</sup> <a name="privateKeyPasswordInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput"></a>

```typescript
public readonly privateKeyPasswordInput: string;
```

- *Type:* string

---

##### `privateKeyPathInput`<sup>Optional</sup> <a name="privateKeyPathInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput"></a>

```typescript
public readonly privateKeyPathInput: string;
```

- *Type:* string

---

##### `realmSpecificServiceEndpointTemplateEnabledInput`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabledInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput"></a>

```typescript
public readonly realmSpecificServiceEndpointTemplateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retryDurationSecondsInput`<sup>Optional</sup> <a name="retryDurationSecondsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput"></a>

```typescript
public readonly retryDurationSecondsInput: number;
```

- *Type:* number

---

##### `tenancyOcidInput`<sup>Optional</sup> <a name="tenancyOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput"></a>

```typescript
public readonly tenancyOcidInput: string;
```

- *Type:* string

---

##### `userOcidInput`<sup>Optional</sup> <a name="userOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput"></a>

```typescript
public readonly userOcidInput: string;
```

- *Type:* string

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth"></a>

```typescript
public readonly auth: string;
```

- *Type:* string

---

##### `configFileProfile`<sup>Optional</sup> <a name="configFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile"></a>

```typescript
public readonly configFileProfile: string;
```

- *Type:* string

---

##### `disableAutoRetries`<sup>Optional</sup> <a name="disableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries"></a>

```typescript
public readonly disableAutoRetries: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `ignoreDefinedTags`<sup>Optional</sup> <a name="ignoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags"></a>

```typescript
public readonly ignoreDefinedTags: string[];
```

- *Type:* string[]

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyPassword`<sup>Optional</sup> <a name="privateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword"></a>

```typescript
public readonly privateKeyPassword: string;
```

- *Type:* string

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath"></a>

```typescript
public readonly privateKeyPath: string;
```

- *Type:* string

---

##### `realmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```typescript
public readonly realmSpecificServiceEndpointTemplateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `retryDurationSeconds`<sup>Optional</sup> <a name="retryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds"></a>

```typescript
public readonly retryDurationSeconds: number;
```

- *Type:* number

---

##### `tenancyOcid`<sup>Optional</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `userOcid`<sup>Optional</sup> <a name="userOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid"></a>

```typescript
public readonly userOcid: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OciProviderConfig <a name="OciProviderConfig" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.Initializer"></a>

```typescript
import { provider } from 'rhizo-co-terraform-provider-oci'

const ociProviderConfig: provider.OciProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth">auth</a></code> | <code>string</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile">configFileProfile</a></code> | <code>string</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries">disableAutoRetries</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint">fingerprint</a></code> | <code>string</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags">ignoreDefinedTags</a></code> | <code>string[]</code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey">privateKey</a></code> | <code>string</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword">privateKeyPassword</a></code> | <code>string</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath">privateKeyPath</a></code> | <code>string</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled">realmSpecificServiceEndpointTemplateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region">region</a></code> | <code>string</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds">retryDurationSeconds</a></code> | <code>number</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid">userOcid</a></code> | <code>string</code> | (Optional) The user OCID. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth"></a>

```typescript
public readonly auth: string;
```

- *Type:* string

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `configFileProfile`<sup>Optional</sup> <a name="configFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile"></a>

```typescript
public readonly configFileProfile: string;
```

- *Type:* string

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `disableAutoRetries`<sup>Optional</sup> <a name="disableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries"></a>

```typescript
public readonly disableAutoRetries: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `ignoreDefinedTags`<sup>Optional</sup> <a name="ignoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags"></a>

```typescript
public readonly ignoreDefinedTags: string[];
```

- *Type:* string[]

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `privateKeyPassword`<sup>Optional</sup> <a name="privateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword"></a>

```typescript
public readonly privateKeyPassword: string;
```

- *Type:* string

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath"></a>

```typescript
public readonly privateKeyPath: string;
```

- *Type:* string

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `realmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```typescript
public readonly realmSpecificServiceEndpointTemplateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `retryDurationSeconds`<sup>Optional</sup> <a name="retryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds"></a>

```typescript
public readonly retryDurationSeconds: number;
```

- *Type:* number

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `tenancyOcid`<sup>Optional</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `userOcid`<sup>Optional</sup> <a name="userOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid"></a>

```typescript
public readonly userOcid: string;
```

- *Type:* string

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---




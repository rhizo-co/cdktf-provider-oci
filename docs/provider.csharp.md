# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-oci.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciProvider <a name="OciProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs oci}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OciProvider(Construct Scope, string Id, OciProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig">OciProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig">OciProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile">ResetConfigFileProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries">ResetDisableAutoRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint">ResetFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags">ResetIgnoreDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword">ResetPrivateKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath">ResetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled">ResetRealmSpecificServiceEndpointTemplateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds">ResetRetryDurationSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid">ResetTenancyOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid">ResetUserOcid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuth` <a name="ResetAuth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetConfigFileProfile` <a name="ResetConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile"></a>

```csharp
private void ResetConfigFileProfile()
```

##### `ResetDisableAutoRetries` <a name="ResetDisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries"></a>

```csharp
private void ResetDisableAutoRetries()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint"></a>

```csharp
private void ResetFingerprint()
```

##### `ResetIgnoreDefinedTags` <a name="ResetIgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags"></a>

```csharp
private void ResetIgnoreDefinedTags()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPrivateKeyPassword` <a name="ResetPrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword"></a>

```csharp
private void ResetPrivateKeyPassword()
```

##### `ResetPrivateKeyPath` <a name="ResetPrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath"></a>

```csharp
private void ResetPrivateKeyPath()
```

##### `ResetRealmSpecificServiceEndpointTemplateEnabled` <a name="ResetRealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled"></a>

```csharp
private void ResetRealmSpecificServiceEndpointTemplateEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRetryDurationSeconds` <a name="ResetRetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds"></a>

```csharp
private void ResetRetryDurationSeconds()
```

##### `ResetTenancyOcid` <a name="ResetTenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid"></a>

```csharp
private void ResetTenancyOcid()
```

##### `ResetUserOcid` <a name="ResetUserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid"></a>

```csharp
private void ResetUserOcid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OciProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OciProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OciProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OciProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OciProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OciProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OciProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput">AuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput">ConfigFileProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput">DisableAutoRetriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput">FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput">IgnoreDefinedTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput">PrivateKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput">PrivateKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput">RealmSpecificServiceEndpointTemplateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput">RetryDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput">TenancyOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput">UserOcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth">Auth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile">ConfigFileProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries">DisableAutoRetries</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags">IgnoreDefinedTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword">PrivateKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath">PrivateKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled">RealmSpecificServiceEndpointTemplateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds">RetryDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid">UserOcid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput"></a>

```csharp
public string AuthInput { get; }
```

- *Type:* string

---

##### `ConfigFileProfileInput`<sup>Optional</sup> <a name="ConfigFileProfileInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput"></a>

```csharp
public string ConfigFileProfileInput { get; }
```

- *Type:* string

---

##### `DisableAutoRetriesInput`<sup>Optional</sup> <a name="DisableAutoRetriesInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput"></a>

```csharp
public object DisableAutoRetriesInput { get; }
```

- *Type:* object

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput"></a>

```csharp
public string FingerprintInput { get; }
```

- *Type:* string

---

##### `IgnoreDefinedTagsInput`<sup>Optional</sup> <a name="IgnoreDefinedTagsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput"></a>

```csharp
public string[] IgnoreDefinedTagsInput { get; }
```

- *Type:* string[]

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPasswordInput`<sup>Optional</sup> <a name="PrivateKeyPasswordInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput"></a>

```csharp
public string PrivateKeyPasswordInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPathInput`<sup>Optional</sup> <a name="PrivateKeyPathInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput"></a>

```csharp
public string PrivateKeyPathInput { get; }
```

- *Type:* string

---

##### `RealmSpecificServiceEndpointTemplateEnabledInput`<sup>Optional</sup> <a name="RealmSpecificServiceEndpointTemplateEnabledInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput"></a>

```csharp
public object RealmSpecificServiceEndpointTemplateEnabledInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RetryDurationSecondsInput`<sup>Optional</sup> <a name="RetryDurationSecondsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput"></a>

```csharp
public double RetryDurationSecondsInput { get; }
```

- *Type:* double

---

##### `TenancyOcidInput`<sup>Optional</sup> <a name="TenancyOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput"></a>

```csharp
public string TenancyOcidInput { get; }
```

- *Type:* string

---

##### `UserOcidInput`<sup>Optional</sup> <a name="UserOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput"></a>

```csharp
public string UserOcidInput { get; }
```

- *Type:* string

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth"></a>

```csharp
public string Auth { get; }
```

- *Type:* string

---

##### `ConfigFileProfile`<sup>Optional</sup> <a name="ConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile"></a>

```csharp
public string ConfigFileProfile { get; }
```

- *Type:* string

---

##### `DisableAutoRetries`<sup>Optional</sup> <a name="DisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries"></a>

```csharp
public object DisableAutoRetries { get; }
```

- *Type:* object

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `IgnoreDefinedTags`<sup>Optional</sup> <a name="IgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags"></a>

```csharp
public string[] IgnoreDefinedTags { get; }
```

- *Type:* string[]

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyPassword`<sup>Optional</sup> <a name="PrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword"></a>

```csharp
public string PrivateKeyPassword { get; }
```

- *Type:* string

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath"></a>

```csharp
public string PrivateKeyPath { get; }
```

- *Type:* string

---

##### `RealmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="RealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```csharp
public object RealmSpecificServiceEndpointTemplateEnabled { get; }
```

- *Type:* object

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RetryDurationSeconds`<sup>Optional</sup> <a name="RetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds"></a>

```csharp
public double RetryDurationSeconds { get; }
```

- *Type:* double

---

##### `TenancyOcid`<sup>Optional</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `UserOcid`<sup>Optional</sup> <a name="UserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid"></a>

```csharp
public string UserOcid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OciProviderConfig <a name="OciProviderConfig" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OciProviderConfig {
    string Alias = null,
    string Auth = null,
    string ConfigFileProfile = null,
    object DisableAutoRetries = null,
    string Fingerprint = null,
    string[] IgnoreDefinedTags = null,
    string PrivateKey = null,
    string PrivateKeyPassword = null,
    string PrivateKeyPath = null,
    object RealmSpecificServiceEndpointTemplateEnabled = null,
    string Region = null,
    double RetryDurationSeconds = null,
    string TenancyOcid = null,
    string UserOcid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth">Auth</a></code> | <code>string</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile">ConfigFileProfile</a></code> | <code>string</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries">DisableAutoRetries</a></code> | <code>object</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint">Fingerprint</a></code> | <code>string</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags">IgnoreDefinedTags</a></code> | <code>string[]</code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword">PrivateKeyPassword</a></code> | <code>string</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath">PrivateKeyPath</a></code> | <code>string</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled">RealmSpecificServiceEndpointTemplateEnabled</a></code> | <code>object</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region">Region</a></code> | <code>string</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds">RetryDurationSeconds</a></code> | <code>double</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid">UserOcid</a></code> | <code>string</code> | (Optional) The user OCID. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth"></a>

```csharp
public string Auth { get; set; }
```

- *Type:* string

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `ConfigFileProfile`<sup>Optional</sup> <a name="ConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile"></a>

```csharp
public string ConfigFileProfile { get; set; }
```

- *Type:* string

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `DisableAutoRetries`<sup>Optional</sup> <a name="DisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries"></a>

```csharp
public object DisableAutoRetries { get; set; }
```

- *Type:* object

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint"></a>

```csharp
public string Fingerprint { get; set; }
```

- *Type:* string

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `IgnoreDefinedTags`<sup>Optional</sup> <a name="IgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags"></a>

```csharp
public string[] IgnoreDefinedTags { get; set; }
```

- *Type:* string[]

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `PrivateKeyPassword`<sup>Optional</sup> <a name="PrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword"></a>

```csharp
public string PrivateKeyPassword { get; set; }
```

- *Type:* string

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath"></a>

```csharp
public string PrivateKeyPath { get; set; }
```

- *Type:* string

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `RealmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="RealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```csharp
public object RealmSpecificServiceEndpointTemplateEnabled { get; set; }
```

- *Type:* object

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `RetryDurationSeconds`<sup>Optional</sup> <a name="RetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds"></a>

```csharp
public double RetryDurationSeconds { get; set; }
```

- *Type:* double

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `TenancyOcid`<sup>Optional</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; set; }
```

- *Type:* string

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `UserOcid`<sup>Optional</sup> <a name="UserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid"></a>

```csharp
public string UserOcid { get; set; }
```

- *Type:* string

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---




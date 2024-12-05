# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-oci.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciProvider <a name="OciProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs oci}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/provider"

provider.NewOciProvider(scope Construct, id *string, config OciProviderConfig) OciProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig">OciProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuth` <a name="ResetAuth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth"></a>

```go
func ResetAuth()
```

##### `ResetConfigFileProfile` <a name="ResetConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile"></a>

```go
func ResetConfigFileProfile()
```

##### `ResetDisableAutoRetries` <a name="ResetDisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries"></a>

```go
func ResetDisableAutoRetries()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint"></a>

```go
func ResetFingerprint()
```

##### `ResetIgnoreDefinedTags` <a name="ResetIgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags"></a>

```go
func ResetIgnoreDefinedTags()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyPassword` <a name="ResetPrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword"></a>

```go
func ResetPrivateKeyPassword()
```

##### `ResetPrivateKeyPath` <a name="ResetPrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath"></a>

```go
func ResetPrivateKeyPath()
```

##### `ResetRealmSpecificServiceEndpointTemplateEnabled` <a name="ResetRealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled"></a>

```go
func ResetRealmSpecificServiceEndpointTemplateEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRetryDurationSeconds` <a name="ResetRetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds"></a>

```go
func ResetRetryDurationSeconds()
```

##### `ResetTenancyOcid` <a name="ResetTenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid"></a>

```go
func ResetTenancyOcid()
```

##### `ResetUserOcid` <a name="ResetUserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid"></a>

```go
func ResetUserOcid()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/provider"

provider.OciProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/provider"

provider.OciProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/provider"

provider.OciProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/provider"

provider.OciProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OciProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OciProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OciProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput">AuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput">ConfigFileProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput">DisableAutoRetriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput">FingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput">IgnoreDefinedTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput">PrivateKeyPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput">PrivateKeyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput">RealmSpecificServiceEndpointTemplateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput">RetryDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput">TenancyOcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput">UserOcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth">Auth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile">ConfigFileProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries">DisableAutoRetries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags">IgnoreDefinedTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword">PrivateKeyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath">PrivateKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled">RealmSpecificServiceEndpointTemplateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds">RetryDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid">UserOcid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput"></a>

```go
func AuthInput() *string
```

- *Type:* *string

---

##### `ConfigFileProfileInput`<sup>Optional</sup> <a name="ConfigFileProfileInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput"></a>

```go
func ConfigFileProfileInput() *string
```

- *Type:* *string

---

##### `DisableAutoRetriesInput`<sup>Optional</sup> <a name="DisableAutoRetriesInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput"></a>

```go
func DisableAutoRetriesInput() interface{}
```

- *Type:* interface{}

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput"></a>

```go
func FingerprintInput() *string
```

- *Type:* *string

---

##### `IgnoreDefinedTagsInput`<sup>Optional</sup> <a name="IgnoreDefinedTagsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput"></a>

```go
func IgnoreDefinedTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPasswordInput`<sup>Optional</sup> <a name="PrivateKeyPasswordInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput"></a>

```go
func PrivateKeyPasswordInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPathInput`<sup>Optional</sup> <a name="PrivateKeyPathInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput"></a>

```go
func PrivateKeyPathInput() *string
```

- *Type:* *string

---

##### `RealmSpecificServiceEndpointTemplateEnabledInput`<sup>Optional</sup> <a name="RealmSpecificServiceEndpointTemplateEnabledInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput"></a>

```go
func RealmSpecificServiceEndpointTemplateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RetryDurationSecondsInput`<sup>Optional</sup> <a name="RetryDurationSecondsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput"></a>

```go
func RetryDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `TenancyOcidInput`<sup>Optional</sup> <a name="TenancyOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput"></a>

```go
func TenancyOcidInput() *string
```

- *Type:* *string

---

##### `UserOcidInput`<sup>Optional</sup> <a name="UserOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput"></a>

```go
func UserOcidInput() *string
```

- *Type:* *string

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth"></a>

```go
func Auth() *string
```

- *Type:* *string

---

##### `ConfigFileProfile`<sup>Optional</sup> <a name="ConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile"></a>

```go
func ConfigFileProfile() *string
```

- *Type:* *string

---

##### `DisableAutoRetries`<sup>Optional</sup> <a name="DisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries"></a>

```go
func DisableAutoRetries() interface{}
```

- *Type:* interface{}

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `IgnoreDefinedTags`<sup>Optional</sup> <a name="IgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags"></a>

```go
func IgnoreDefinedTags() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyPassword`<sup>Optional</sup> <a name="PrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword"></a>

```go
func PrivateKeyPassword() *string
```

- *Type:* *string

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath"></a>

```go
func PrivateKeyPath() *string
```

- *Type:* *string

---

##### `RealmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="RealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```go
func RealmSpecificServiceEndpointTemplateEnabled() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RetryDurationSeconds`<sup>Optional</sup> <a name="RetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds"></a>

```go
func RetryDurationSeconds() *f64
```

- *Type:* *f64

---

##### `TenancyOcid`<sup>Optional</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UserOcid`<sup>Optional</sup> <a name="UserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid"></a>

```go
func UserOcid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OciProviderConfig <a name="OciProviderConfig" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/provider"

&provider.OciProviderConfig {
	Alias: *string,
	Auth: *string,
	ConfigFileProfile: *string,
	DisableAutoRetries: interface{},
	Fingerprint: *string,
	IgnoreDefinedTags: *[]*string,
	PrivateKey: *string,
	PrivateKeyPassword: *string,
	PrivateKeyPath: *string,
	RealmSpecificServiceEndpointTemplateEnabled: interface{},
	Region: *string,
	RetryDurationSeconds: *f64,
	TenancyOcid: *string,
	UserOcid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth">Auth</a></code> | <code>*string</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile">ConfigFileProfile</a></code> | <code>*string</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries">DisableAutoRetries</a></code> | <code>interface{}</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags">IgnoreDefinedTags</a></code> | <code>*[]*string</code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword">PrivateKeyPassword</a></code> | <code>*string</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath">PrivateKeyPath</a></code> | <code>*string</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled">RealmSpecificServiceEndpointTemplateEnabled</a></code> | <code>interface{}</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region">Region</a></code> | <code>*string</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds">RetryDurationSeconds</a></code> | <code>*f64</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid">UserOcid</a></code> | <code>*string</code> | (Optional) The user OCID. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth"></a>

```go
Auth *string
```

- *Type:* *string

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `ConfigFileProfile`<sup>Optional</sup> <a name="ConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile"></a>

```go
ConfigFileProfile *string
```

- *Type:* *string

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `DisableAutoRetries`<sup>Optional</sup> <a name="DisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries"></a>

```go
DisableAutoRetries interface{}
```

- *Type:* interface{}

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint"></a>

```go
Fingerprint *string
```

- *Type:* *string

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `IgnoreDefinedTags`<sup>Optional</sup> <a name="IgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags"></a>

```go
IgnoreDefinedTags *[]*string
```

- *Type:* *[]*string

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `PrivateKeyPassword`<sup>Optional</sup> <a name="PrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword"></a>

```go
PrivateKeyPassword *string
```

- *Type:* *string

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath"></a>

```go
PrivateKeyPath *string
```

- *Type:* *string

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `RealmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="RealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```go
RealmSpecificServiceEndpointTemplateEnabled interface{}
```

- *Type:* interface{}

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `RetryDurationSeconds`<sup>Optional</sup> <a name="RetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds"></a>

```go
RetryDurationSeconds *f64
```

- *Type:* *f64

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `TenancyOcid`<sup>Optional</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid"></a>

```go
TenancyOcid *string
```

- *Type:* *string

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `UserOcid`<sup>Optional</sup> <a name="UserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid"></a>

```go
UserOcid *string
```

- *Type:* *string

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---




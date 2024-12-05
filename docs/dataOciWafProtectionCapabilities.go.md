# `dataOciWafProtectionCapabilities` Submodule <a name="`dataOciWafProtectionCapabilities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilities <a name="DataOciWafProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities oci_waf_protection_capabilities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilities(scope Construct, id *string, config DataOciWafProtectionCapabilitiesConfig) DataOciWafProtectionCapabilities
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig">DataOciWafProtectionCapabilitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig">DataOciWafProtectionCapabilitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetGroupTag">ResetGroupTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetIsLatestVersion">ResetIsLatestVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGroupTag` <a name="ResetGroupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetGroupTag"></a>

```go
func ResetGroupTag()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLatestVersion` <a name="ResetIsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetIsLatestVersion"></a>

```go
func ResetIsLatestVersion()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilities resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.DataOciWafProtectionCapabilities_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.DataOciWafProtectionCapabilities_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.DataOciWafProtectionCapabilities_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.DataOciWafProtectionCapabilities_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciWafProtectionCapabilities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciWafProtectionCapabilities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList">DataOciWafProtectionCapabilitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.protectionCapabilityCollection">ProtectionCapabilityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTagInput">GroupTagInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersionInput">IsLatestVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTag">GroupTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersion">IsLatestVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filter"></a>

```go
func Filter() DataOciWafProtectionCapabilitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList">DataOciWafProtectionCapabilitiesFilterList</a>

---

##### `ProtectionCapabilityCollection`<sup>Required</sup> <a name="ProtectionCapabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.protectionCapabilityCollection"></a>

```go
func ProtectionCapabilityCollection() DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GroupTagInput`<sup>Optional</sup> <a name="GroupTagInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTagInput"></a>

```go
func GroupTagInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLatestVersionInput`<sup>Optional</sup> <a name="IsLatestVersionInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersionInput"></a>

```go
func IsLatestVersionInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GroupTag`<sup>Required</sup> <a name="GroupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTag"></a>

```go
func GroupTag() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLatestVersion`<sup>Required</sup> <a name="IsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersion"></a>

```go
func IsLatestVersion() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilitiesConfig <a name="DataOciWafProtectionCapabilitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

&dataociwafprotectioncapabilities.DataOciWafProtectionCapabilitiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	GroupTag: *[]*string,
	Id: *string,
	IsLatestVersion: interface{},
	Key: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.groupTag">GroupTag</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.isLatestVersion">IsLatestVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#filter DataOciWafProtectionCapabilities#filter}

---

##### `GroupTag`<sup>Optional</sup> <a name="GroupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.groupTag"></a>

```go
GroupTag *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLatestVersion`<sup>Optional</sup> <a name="IsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.isLatestVersion"></a>

```go
IsLatestVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}.

---

### DataOciWafProtectionCapabilitiesFilter <a name="DataOciWafProtectionCapabilitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

&dataociwafprotectioncapabilities.DataOciWafProtectionCapabilitiesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#name DataOciWafProtectionCapabilities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#values DataOciWafProtectionCapabilities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#regex DataOciWafProtectionCapabilities#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#name DataOciWafProtectionCapabilities#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#values DataOciWafProtectionCapabilities#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#regex DataOciWafProtectionCapabilities#regex}.

---

### DataOciWafProtectionCapabilitiesProtectionCapabilityCollection <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

&dataociwafprotectioncapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection {

}
```


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

&dataociwafprotectioncapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems {

}
```


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

&dataociwafprotectioncapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilitiesFilterList <a name="DataOciWafProtectionCapabilitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilitiesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWafProtectionCapabilitiesFilterOutputReference <a name="DataOciWafProtectionCapabilitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilitiesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.groupTags">GroupTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.isLatestVersion">IsLatestVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeActionThreshold"></a>

```go
func CollaborativeActionThreshold() *f64
```

- *Type:* *f64

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeWeights"></a>

```go
func CollaborativeWeights() DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GroupTags`<sup>Required</sup> <a name="GroupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.groupTags"></a>

```go
func GroupTags() *[]*string
```

- *Type:* *[]*string

---

##### `IsLatestVersion`<sup>Required</sup> <a name="IsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.isLatestVersion"></a>

```go
func IsLatestVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get"></a>

```go
func Get(index *f64) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwafprotectioncapabilities"

dataociwafprotectioncapabilities.NewDataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection">DataOciWafProtectionCapabilitiesProtectionCapabilityCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.items"></a>

```go
func Items() DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWafProtectionCapabilitiesProtectionCapabilityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection">DataOciWafProtectionCapabilitiesProtectionCapabilityCollection</a>

---




# `dataOciBlockchainBlockchainPlatforms` Submodule <a name="`dataOciBlockchainBlockchainPlatforms` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatforms <a name="DataOciBlockchainBlockchainPlatforms" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms oci_blockchain_blockchain_platforms}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatforms(scope Construct, id *string, config DataOciBlockchainBlockchainPlatformsConfig) DataOciBlockchainBlockchainPlatforms
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig">DataOciBlockchainBlockchainPlatformsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig">DataOciBlockchainBlockchainPlatformsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatforms_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatforms_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatforms_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatforms_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatforms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBlockchainBlockchainPlatforms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatforms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection">BlockchainPlatformCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BlockchainPlatformCollection`<sup>Required</sup> <a name="BlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection"></a>

```go
func BlockchainPlatformCollection() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter"></a>

```go
func Filter() DataOciBlockchainBlockchainPlatformsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo {

}
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas {

}
```


### DataOciBlockchainBlockchainPlatformsConfig <a name="DataOciBlockchainBlockchainPlatformsConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsConfig {
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
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

### DataOciBlockchainBlockchainPlatformsFilter <a name="DataOciBlockchainBlockchainPlatformsFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

&dataociblockchainblockchainplatforms.DataOciBlockchainBlockchainPlatformsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```go
func OcpuAllocationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad">Ad</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey">OsnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad"></a>

```go
func Ad() *string
```

- *Type:* *string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```go
func OcpuAllocationParam() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `OsnKey`<sup>Required</sup> <a name="OsnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey"></a>

```go
func OsnKey() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns">Osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers">Peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Osns`<sup>Required</sup> <a name="Osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns"></a>

```go
func Osns() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers"></a>

```go
func Peers() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```go
func OcpuAllocationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad">Ad</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey">PeerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad"></a>

```go
func Ad() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```go
func OcpuAllocationParam() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `PeerKey`<sup>Required</sup> <a name="PeerKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey"></a>

```go
func PeerKey() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">OcpuCapacityNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">OcpuUtilizationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `OcpuCapacityNumber`<sup>Required</sup> <a name="OcpuCapacityNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```go
func OcpuCapacityNumber() *f64
```

- *Type:* *f64

---

##### `OcpuUtilizationNumber`<sup>Required</sup> <a name="OcpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```go
func OcpuUtilizationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails">ComponentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape">ComputeShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId">FederatedUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo">HostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol">IsByol</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd">IsMultiAd</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole">PlatformRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType">PlatformShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion">ServiceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs">StorageUsedInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCertArchiveText`<sup>Required</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText"></a>

```go
func CaCertArchiveText() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComponentDetails`<sup>Required</sup> <a name="ComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails"></a>

```go
func ComponentDetails() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a>

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape"></a>

```go
func ComputeShape() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FederatedUserId`<sup>Required</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId"></a>

```go
func FederatedUserId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostOcpuUtilizationInfo`<sup>Required</sup> <a name="HostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo"></a>

```go
func HostOcpuUtilizationInfo() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken"></a>

```go
func IdcsAccessToken() *string
```

- *Type:* *string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol"></a>

```go
func IsByol() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMultiAd`<sup>Required</sup> <a name="IsMultiAd" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd"></a>

```go
func IsMultiAd() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LoadBalancerShape`<sup>Required</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape"></a>

```go
func LoadBalancerShape() *string
```

- *Type:* *string

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole"></a>

```go
func PlatformRole() *string
```

- *Type:* *string

---

##### `PlatformShapeType`<sup>Required</sup> <a name="PlatformShapeType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType"></a>

```go
func PlatformShapeType() *string
```

- *Type:* *string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas"></a>

```go
func Replicas() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a>

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint"></a>

```go
func ServiceEndpoint() *string
```

- *Type:* *string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion"></a>

```go
func ServiceVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageSizeInTbs`<sup>Required</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs"></a>

```go
func StorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `StorageUsedInTbs`<sup>Required</sup> <a name="StorageUsedInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs"></a>

```go
func StorageUsedInTbs() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalOcpuCapacity`<sup>Required</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity"></a>

```go
func TotalOcpuCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount">CaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount">ConsoleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount">ProxyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCount`<sup>Required</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount"></a>

```go
func CaCount() *f64
```

- *Type:* *f64

---

##### `ConsoleCount`<sup>Required</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount"></a>

```go
func ConsoleCount() *f64
```

- *Type:* *f64

---

##### `ProxyCount`<sup>Required</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount"></a>

```go
func ProxyCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items"></a>

```go
func Items() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a>

---


### DataOciBlockchainBlockchainPlatformsFilterList <a name="DataOciBlockchainBlockchainPlatformsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciBlockchainBlockchainPlatformsFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatforms"

dataociblockchainblockchainplatforms.NewDataOciBlockchainBlockchainPlatformsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




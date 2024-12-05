# `dataOciBlockchainBlockchainPlatform` Submodule <a name="`dataOciBlockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatform <a name="DataOciBlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatform(scope Construct, id *string, config DataOciBlockchainBlockchainPlatformConfig) DataOciBlockchainBlockchainPlatform
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig">DataOciBlockchainBlockchainPlatformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig">DataOciBlockchainBlockchainPlatformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatform_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatform_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatform_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatform_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.componentDetails">ComponentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList">DataOciBlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.computeShape">ComputeShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.federatedUserId">FederatedUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">HostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isByol">IsByol</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isMultiAd">IsMultiAd</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformRole">PlatformRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformShapeType">PlatformShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList">DataOciBlockchainBlockchainPlatformReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceVersion">ServiceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageUsedInTbs">StorageUsedInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformIdInput">BlockchainPlatformIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformId">BlockchainPlatformId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaCertArchiveText`<sup>Required</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```go
func CaCertArchiveText() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComponentDetails`<sup>Required</sup> <a name="ComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.componentDetails"></a>

```go
func ComponentDetails() DataOciBlockchainBlockchainPlatformComponentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList">DataOciBlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.computeShape"></a>

```go
func ComputeShape() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FederatedUserId`<sup>Required</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.federatedUserId"></a>

```go
func FederatedUserId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostOcpuUtilizationInfo`<sup>Required</sup> <a name="HostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```go
func HostOcpuUtilizationInfo() DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```go
func IdcsAccessToken() *string
```

- *Type:* *string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isByol"></a>

```go
func IsByol() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMultiAd`<sup>Required</sup> <a name="IsMultiAd" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isMultiAd"></a>

```go
func IsMultiAd() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LoadBalancerShape`<sup>Required</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```go
func LoadBalancerShape() *string
```

- *Type:* *string

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformRole"></a>

```go
func PlatformRole() *string
```

- *Type:* *string

---

##### `PlatformShapeType`<sup>Required</sup> <a name="PlatformShapeType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformShapeType"></a>

```go
func PlatformShapeType() *string
```

- *Type:* *string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.replicas"></a>

```go
func Replicas() DataOciBlockchainBlockchainPlatformReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList">DataOciBlockchainBlockchainPlatformReplicasList</a>

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```go
func ServiceEndpoint() *string
```

- *Type:* *string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceVersion"></a>

```go
func ServiceVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageSizeInTbs`<sup>Required</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```go
func StorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `StorageUsedInTbs`<sup>Required</sup> <a name="StorageUsedInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```go
func StorageUsedInTbs() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalOcpuCapacity`<sup>Required</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```go
func TotalOcpuCapacity() *f64
```

- *Type:* *f64

---

##### `BlockchainPlatformIdInput`<sup>Optional</sup> <a name="BlockchainPlatformIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformIdInput"></a>

```go
func BlockchainPlatformIdInput() *string
```

- *Type:* *string

---

##### `BlockchainPlatformId`<sup>Required</sup> <a name="BlockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformId"></a>

```go
func BlockchainPlatformId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformComponentDetails <a name="DataOciBlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformComponentDetails {

}
```


### DataOciBlockchainBlockchainPlatformComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns {

}
```


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam {

}
```


### DataOciBlockchainBlockchainPlatformComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers {

}
```


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam {

}
```


### DataOciBlockchainBlockchainPlatformConfig <a name="DataOciBlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BlockchainPlatformId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.blockchainPlatformId">BlockchainPlatformId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockchainPlatformId`<sup>Required</sup> <a name="BlockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.blockchainPlatformId"></a>

```go
BlockchainPlatformId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}.

---

### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo {

}
```


### DataOciBlockchainBlockchainPlatformReplicas <a name="DataOciBlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

&dataociblockchainblockchainplatform.DataOciBlockchainBlockchainPlatformReplicas {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsOsnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```go
func OcpuAllocationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">Ad</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">OsnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns">DataOciBlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```go
func Ad() *string
```

- *Type:* *string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```go
func OcpuAllocationParam() DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `OsnKey`<sup>Required</sup> <a name="OsnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```go
func OsnKey() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformComponentDetailsOsns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns">DataOciBlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">Osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">Peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails">DataOciBlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Osns`<sup>Required</sup> <a name="Osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```go
func Osns() DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```go
func Peers() DataOciBlockchainBlockchainPlatformComponentDetailsPeersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformComponentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails">DataOciBlockchainBlockchainPlatformComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```go
func OcpuAllocationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">Ad</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">PeerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers">DataOciBlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```go
func Ad() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```go
func OcpuAllocationParam() DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `PeerKey`<sup>Required</sup> <a name="PeerKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```go
func PeerKey() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformComponentDetailsPeers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers">DataOciBlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">OcpuCapacityNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">OcpuUtilizationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `OcpuCapacityNumber`<sup>Required</sup> <a name="OcpuCapacityNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```go
func OcpuCapacityNumber() *f64
```

- *Type:* *f64

---

##### `OcpuUtilizationNumber`<sup>Required</sup> <a name="OcpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```go
func OcpuUtilizationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformReplicasList <a name="DataOciBlockchainBlockchainPlatformReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformReplicasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBlockchainBlockchainPlatformReplicasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get"></a>

```go
func Get(index *f64) DataOciBlockchainBlockchainPlatformReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBlockchainBlockchainPlatformReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociblockchainblockchainplatform"

dataociblockchainblockchainplatform.NewDataOciBlockchainBlockchainPlatformReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBlockchainBlockchainPlatformReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.caCount">CaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">ConsoleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">ProxyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas">DataOciBlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCount`<sup>Required</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```go
func CaCount() *f64
```

- *Type:* *f64

---

##### `ConsoleCount`<sup>Required</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```go
func ConsoleCount() *f64
```

- *Type:* *f64

---

##### `ProxyCount`<sup>Required</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```go
func ProxyCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas">DataOciBlockchainBlockchainPlatformReplicas</a>

---




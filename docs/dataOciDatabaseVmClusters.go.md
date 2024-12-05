# `dataOciDatabaseVmClusters` Submodule <a name="`dataOciDatabaseVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusters <a name="DataOciDatabaseVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters oci_database_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClusters(scope Construct, id *string, config DataOciDatabaseVmClustersConfig) DataOciDatabaseVmClusters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig">DataOciDatabaseVmClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig">DataOciDatabaseVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetExadataInfrastructureId">ResetExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExadataInfrastructureId` <a name="ResetExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetExadataInfrastructureId"></a>

```go
func ResetExadataInfrastructureId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.DataOciDatabaseVmClusters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.DataOciDatabaseVmClusters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.DataOciDatabaseVmClusters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.DataOciDatabaseVmClusters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseVmClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList">DataOciDatabaseVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.vmClusters">VmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList">DataOciDatabaseVmClustersVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filter"></a>

```go
func Filter() DataOciDatabaseVmClustersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList">DataOciDatabaseVmClustersFilterList</a>

---

##### `VmClusters`<sup>Required</sup> <a name="VmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.vmClusters"></a>

```go
func VmClusters() DataOciDatabaseVmClustersVmClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList">DataOciDatabaseVmClustersVmClustersList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureIdInput"></a>

```go
func ExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClusters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClustersConfig <a name="DataOciDatabaseVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExadataInfrastructureId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#compartment_id DataOciDatabaseVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#display_name DataOciDatabaseVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#exadata_infrastructure_id DataOciDatabaseVmClusters#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#id DataOciDatabaseVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#state DataOciDatabaseVmClusters#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#compartment_id DataOciDatabaseVmClusters#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#display_name DataOciDatabaseVmClusters#display_name}.

---

##### `ExadataInfrastructureId`<sup>Optional</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.exadataInfrastructureId"></a>

```go
ExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#exadata_infrastructure_id DataOciDatabaseVmClusters#exadata_infrastructure_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#filter DataOciDatabaseVmClusters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#id DataOciDatabaseVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#state DataOciDatabaseVmClusters#state}.

---

### DataOciDatabaseVmClustersFilter <a name="DataOciDatabaseVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#name DataOciDatabaseVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#values DataOciDatabaseVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#regex DataOciDatabaseVmClusters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#name DataOciDatabaseVmClusters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#values DataOciDatabaseVmClusters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_clusters#regex DataOciDatabaseVmClusters#regex}.

---

### DataOciDatabaseVmClustersVmClusters <a name="DataOciDatabaseVmClustersVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersVmClusters {

}
```


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails {

}
```


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference {

}
```


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod {

}
```


### DataOciDatabaseVmClustersVmClustersDataCollectionOptions <a name="DataOciDatabaseVmClustersVmClustersDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions {

}
```


### DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails <a name="DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

&dataocidatabasevmclusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClustersFilterList <a name="DataOciDatabaseVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClustersFilterOutputReference <a name="DataOciDatabaseVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">ApplyUpdatePreferredEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">ApplyUpdatePreferredStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyUpdatePreferredEndTime`<sup>Required</sup> <a name="ApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```go
func ApplyUpdatePreferredEndTime() *string
```

- *Type:* *string

---

##### `ApplyUpdatePreferredStartTime`<sup>Required</sup> <a name="ApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```go
func ApplyUpdatePreferredStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">FreezePeriodEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">FreezePeriodStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FreezePeriodEndTime`<sup>Required</sup> <a name="FreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```go
func FreezePeriodEndTime() *string
```

- *Type:* *string

---

##### `FreezePeriodStartTime`<sup>Required</sup> <a name="FreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```go
func FreezePeriodStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference <a name="DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">ApplyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">FreezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">IsEarlyAdoptionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">IsFreezePeriodEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyUpdateTimePreference`<sup>Required</sup> <a name="ApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```go
func ApplyUpdateTimePreference() DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `FreezePeriod`<sup>Required</sup> <a name="FreezePeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```go
func FreezePeriod() DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `IsEarlyAdoptionEnabled`<sup>Required</sup> <a name="IsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```go
func IsEarlyAdoptionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsFreezePeriodEnabled`<sup>Required</sup> <a name="IsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```go
func IsFreezePeriodEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetails</a>

---


### DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList <a name="DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersDataCollectionOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference <a name="DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions">DataOciDatabaseVmClustersVmClustersDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClustersVmClustersDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptions">DataOciDatabaseVmClustersVmClustersDataCollectionOptions</a>

---


### DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList <a name="DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference <a name="DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">FileSystemSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemSizeGb`<sup>Required</sup> <a name="FileSystemSizeGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```go
func FileSystemSizeGb() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetails</a>

---


### DataOciDatabaseVmClustersVmClustersList <a name="DataOciDatabaseVmClustersVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClustersVmClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClustersVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClustersVmClustersOutputReference <a name="DataOciDatabaseVmClustersVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusters"

dataocidatabasevmclusters.NewDataOciDatabaseVmClustersVmClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClustersVmClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cloudAutomationUpdateDetails">CloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpusEnabled">CpusEnabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList">DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fileSystemConfigurationDetails">FileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpusEnabled">OcpusEnabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.vmClusterNetworkId">VmClusterNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters">DataOciDatabaseVmClustersVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CloudAutomationUpdateDetails`<sup>Required</sup> <a name="CloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cloudAutomationUpdateDetails"></a>

```go
func CloudAutomationUpdateDetails() DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList">DataOciDatabaseVmClustersVmClustersCloudAutomationUpdateDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CpusEnabled`<sup>Required</sup> <a name="CpusEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.cpusEnabled"></a>

```go
func CpusEnabled() *f64
```

- *Type:* *f64

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList">DataOciDatabaseVmClustersVmClustersDataCollectionOptionsList</a>

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```go
func DbNodeStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.dbServers"></a>

```go
func DbServers() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `FileSystemConfigurationDetails`<sup>Required</sup> <a name="FileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.fileSystemConfigurationDetails"></a>

```go
func FileSystemConfigurationDetails() DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList">DataOciDatabaseVmClustersVmClustersFileSystemConfigurationDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isLocalBackupEnabled"></a>

```go
func IsLocalBackupEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSparseDiskgroupEnabled`<sup>Required</sup> <a name="IsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.isSparseDiskgroupEnabled"></a>

```go
func IsSparseDiskgroupEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lastPatchHistoryEntryId"></a>

```go
func LastPatchHistoryEntryId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.memorySizeInGbs"></a>

```go
func MemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `OcpusEnabled`<sup>Required</sup> <a name="OcpusEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.ocpusEnabled"></a>

```go
func OcpusEnabled() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.systemVersion"></a>

```go
func SystemVersion() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VmClusterNetworkId`<sup>Required</sup> <a name="VmClusterNetworkId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.vmClusterNetworkId"></a>

```go
func VmClusterNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClustersVmClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusters.DataOciDatabaseVmClustersVmClusters">DataOciDatabaseVmClustersVmClusters</a>

---



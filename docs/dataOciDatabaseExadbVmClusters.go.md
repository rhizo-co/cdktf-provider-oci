# `dataOciDatabaseExadbVmClusters` Submodule <a name="`dataOciDatabaseExadbVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusters <a name="DataOciDatabaseExadbVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters oci_database_exadb_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClusters(scope Construct, id *string, config DataOciDatabaseExadbVmClustersConfig) DataOciDatabaseExadbVmClusters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig">DataOciDatabaseExadbVmClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig">DataOciDatabaseExadbVmClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetExascaleDbStorageVaultId">ResetExascaleDbStorageVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExascaleDbStorageVaultId` <a name="ResetExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetExascaleDbStorageVaultId"></a>

```go
func ResetExascaleDbStorageVaultId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClusters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClusters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClusters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClusters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseExadbVmClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseExadbVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exadbVmClusters">ExadbVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList">DataOciDatabaseExadbVmClustersExadbVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList">DataOciDatabaseExadbVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultIdInput">ExascaleDbStorageVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExadbVmClusters`<sup>Required</sup> <a name="ExadbVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exadbVmClusters"></a>

```go
func ExadbVmClusters() DataOciDatabaseExadbVmClustersExadbVmClustersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList">DataOciDatabaseExadbVmClustersExadbVmClustersList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filter"></a>

```go
func Filter() DataOciDatabaseExadbVmClustersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList">DataOciDatabaseExadbVmClustersFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultIdInput"></a>

```go
func ExascaleDbStorageVaultIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.exascaleDbStorageVaultId"></a>

```go
func ExascaleDbStorageVaultId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClusters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClustersConfig <a name="DataOciDatabaseExadbVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExascaleDbStorageVaultId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#compartment_id DataOciDatabaseExadbVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#display_name DataOciDatabaseExadbVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#exascale_db_storage_vault_id DataOciDatabaseExadbVmClusters#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#id DataOciDatabaseExadbVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#state DataOciDatabaseExadbVmClusters#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#compartment_id DataOciDatabaseExadbVmClusters#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#display_name DataOciDatabaseExadbVmClusters#display_name}.

---

##### `ExascaleDbStorageVaultId`<sup>Optional</sup> <a name="ExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.exascaleDbStorageVaultId"></a>

```go
ExascaleDbStorageVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#exascale_db_storage_vault_id DataOciDatabaseExadbVmClusters#exascale_db_storage_vault_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#filter DataOciDatabaseExadbVmClusters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#id DataOciDatabaseExadbVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#state DataOciDatabaseExadbVmClusters#state}.

---

### DataOciDatabaseExadbVmClustersExadbVmClusters <a name="DataOciDatabaseExadbVmClustersExadbVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersExadbVmClusters {

}
```


### DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions <a name="DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions {

}
```


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache {

}
```


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans {

}
```


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig {

}
```


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource {

}
```


### DataOciDatabaseExadbVmClustersFilter <a name="DataOciDatabaseExadbVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

&dataocidatabaseexadbvmclusters.DataOciDatabaseExadbVmClustersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#name DataOciDatabaseExadbVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#values DataOciDatabaseExadbVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#regex DataOciDatabaseExadbVmClusters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#name DataOciDatabaseExadbVmClusters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#values DataOciDatabaseExadbVmClusters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_clusters#regex DataOciDatabaseExadbVmClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptions</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```go
func FlashCacheLimit() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.share"></a>

```go
func Share() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlans</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.dbPlans"></a>

```go
func DbPlans() DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheDbPlansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.objective"></a>

```go
func Objective() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCache</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.memorySizeInGbsPerNode">MemorySizeInGbsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode">SnapshotFileSystemStorageSizeGbsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalEcpuCountPerNode">TotalEcpuCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode">TotalFileSystemStorageSizeGbsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode">VmFileSystemStorageSizeGbsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.enabledEcpuCountPerNode"></a>

```go
func EnabledEcpuCountPerNode() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGbsPerNode`<sup>Required</sup> <a name="MemorySizeInGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.memorySizeInGbsPerNode"></a>

```go
func MemorySizeInGbsPerNode() *f64
```

- *Type:* *f64

---

##### `SnapshotFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="SnapshotFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode"></a>

```go
func SnapshotFileSystemStorageSizeGbsPerNode() *f64
```

- *Type:* *f64

---

##### `TotalEcpuCountPerNode`<sup>Required</sup> <a name="TotalEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalEcpuCountPerNode"></a>

```go
func TotalEcpuCountPerNode() *f64
```

- *Type:* *f64

---

##### `TotalFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="TotalFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode"></a>

```go
func TotalFileSystemStorageSizeGbsPerNode() *f64
```

- *Type:* *f64

---

##### `VmFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="VmFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode"></a>

```go
func VmFileSystemStorageSizeGbsPerNode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfig</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeHostname">NodeHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeHostname`<sup>Required</sup> <a name="NodeHostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeHostname"></a>

```go
func NodeHostname() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResource</a>

---


### DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference <a name="DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersExadbVmClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupSubnetId">BackupSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageId">GridImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageType">GridImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lastUpdateHistoryEntryId">LastUpdateHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeConfig">NodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeResource">NodeResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.privateZoneId">PrivateZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsName">ScanDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.vipIds">VipIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters">DataOciDatabaseExadbVmClustersExadbVmClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupNetworkNsgIds"></a>

```go
func BackupNetworkNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.backupSubnetId"></a>

```go
func BackupSubnetId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList">DataOciDatabaseExadbVmClustersExadbVmClustersDataCollectionOptionsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.exascaleDbStorageVaultId"></a>

```go
func ExascaleDbStorageVaultId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageId"></a>

```go
func GridImageId() *string
```

- *Type:* *string

---

##### `GridImageType`<sup>Required</sup> <a name="GridImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.gridImageType"></a>

```go
func GridImageType() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.iormConfigCache"></a>

```go
func IormConfigCache() DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList">DataOciDatabaseExadbVmClustersExadbVmClustersIormConfigCacheList</a>

---

##### `LastUpdateHistoryEntryId`<sup>Required</sup> <a name="LastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lastUpdateHistoryEntryId"></a>

```go
func LastUpdateHistoryEntryId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *string
```

- *Type:* *string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeConfig"></a>

```go
func NodeConfig() DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeConfigList</a>

---

##### `NodeResource`<sup>Required</sup> <a name="NodeResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nodeResource"></a>

```go
func NodeResource() DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList">DataOciDatabaseExadbVmClustersExadbVmClustersNodeResourceList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateZoneId`<sup>Required</sup> <a name="PrivateZoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.privateZoneId"></a>

```go
func PrivateZoneId() *string
```

- *Type:* *string

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsName"></a>

```go
func ScanDnsName() *string
```

- *Type:* *string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanDnsRecordId"></a>

```go
func ScanDnsRecordId() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.securityAttributes"></a>

```go
func SecurityAttributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.systemVersion"></a>

```go
func SystemVersion() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.vipIds"></a>

```go
func VipIds() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseExadbVmClustersExadbVmClusters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersExadbVmClusters">DataOciDatabaseExadbVmClustersExadbVmClusters</a>

---


### DataOciDatabaseExadbVmClustersFilterList <a name="DataOciDatabaseExadbVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseExadbVmClustersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseExadbVmClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseExadbVmClustersFilterOutputReference <a name="DataOciDatabaseExadbVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseexadbvmclusters"

dataocidatabaseexadbvmclusters.NewDataOciDatabaseExadbVmClustersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseExadbVmClustersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusters.DataOciDatabaseExadbVmClustersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




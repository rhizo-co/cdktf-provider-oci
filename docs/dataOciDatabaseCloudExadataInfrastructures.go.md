# `dataOciDatabaseCloudExadataInfrastructures` Submodule <a name="`dataOciDatabaseCloudExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudExadataInfrastructures <a name="DataOciDatabaseCloudExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures oci_database_cloud_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructures(scope Construct, id *string, config DataOciDatabaseCloudExadataInfrastructuresConfig) DataOciDatabaseCloudExadataInfrastructures
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig">DataOciDatabaseCloudExadataInfrastructuresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig">DataOciDatabaseCloudExadataInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetClusterPlacementGroupId">ResetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClusterPlacementGroupId` <a name="ResetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetClusterPlacementGroupId"></a>

```go
func ResetClusterPlacementGroupId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructures_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructures_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructures_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructures_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseCloudExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseCloudExadataInfrastructures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseCloudExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cloudExadataInfrastructures">CloudExadataInfrastructures</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList">DataOciDatabaseCloudExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CloudExadataInfrastructures`<sup>Required</sup> <a name="CloudExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.cloudExadataInfrastructures"></a>

```go
func CloudExadataInfrastructures() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filter"></a>

```go
func Filter() DataOciDatabaseCloudExadataInfrastructuresFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList">DataOciDatabaseCloudExadataInfrastructuresFilterList</a>

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupIdInput"></a>

```go
func ClusterPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructures.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures {

}
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts {

}
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations {

}
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow {

}
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek {

}
```


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths {

}
```


### DataOciDatabaseCloudExadataInfrastructuresConfig <a name="DataOciDatabaseCloudExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ClusterPlacementGroupId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#compartment_id DataOciDatabaseCloudExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#cluster_placement_group_id DataOciDatabaseCloudExadataInfrastructures#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#display_name DataOciDatabaseCloudExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#id DataOciDatabaseCloudExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#state DataOciDatabaseCloudExadataInfrastructures#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#compartment_id DataOciDatabaseCloudExadataInfrastructures#compartment_id}.

---

##### `ClusterPlacementGroupId`<sup>Optional</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.clusterPlacementGroupId"></a>

```go
ClusterPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#cluster_placement_group_id DataOciDatabaseCloudExadataInfrastructures#cluster_placement_group_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#display_name DataOciDatabaseCloudExadataInfrastructures#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#filter DataOciDatabaseCloudExadataInfrastructures#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#id DataOciDatabaseCloudExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#state DataOciDatabaseCloudExadataInfrastructures#state}.

---

### DataOciDatabaseCloudExadataInfrastructuresFilter <a name="DataOciDatabaseCloudExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

&dataocidatabasecloudexadatainfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#name DataOciDatabaseCloudExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#values DataOciDatabaseCloudExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#regex DataOciDatabaseCloudExadataInfrastructures#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#name DataOciDatabaseCloudExadataInfrastructures#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#values DataOciDatabaseCloudExadataInfrastructures#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_exadata_infrastructures#regex DataOciDatabaseCloudExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContacts</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition">IsBackupPartition</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isResizable">IsResizable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.minSizeGb">MinSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsBackupPartition`<sup>Required</sup> <a name="IsBackupPartition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isBackupPartition"></a>

```go
func IsBackupPartition() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsResizable`<sup>Required</sup> <a name="IsResizable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.isResizable"></a>

```go
func IsResizable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MinSizeGb`<sup>Required</sup> <a name="MinSizeGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.minSizeGb"></a>

```go
func MinSizeGb() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurations</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonths</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```go
func IsMonthlyPatchingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu"></a>

```go
func SkipRu() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindow</a>

---


### DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availableStorageSizeInGbs">AvailableStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbServerVersion">DbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedFileSystemConfigurations">DefinedFileSystemConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxCpuCount">MaxCpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDataStorageInTbs">MaxDataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDbNodeStorageInGbs">MaxDbNodeStorageInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxMemoryInGbs">MaxMemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyDbServerVersion">MonthlyDbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyStorageServerVersion">MonthlyStorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageCount">StorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageServerVersion">StorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.totalStorageSizeInGbs">TotalStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.activatedStorageCount"></a>

```go
func ActivatedStorageCount() *f64
```

- *Type:* *f64

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.additionalStorageCount"></a>

```go
func AdditionalStorageCount() *f64
```

- *Type:* *f64

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `AvailableStorageSizeInGbs`<sup>Required</sup> <a name="AvailableStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.availableStorageSizeInGbs"></a>

```go
func AvailableStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.customerContacts"></a>

```go
func CustomerContacts() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresCustomerContactsList</a>

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbNodeStorageSizeInGbs"></a>

```go
func DbNodeStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.dbServerVersion"></a>

```go
func DbServerVersion() *string
```

- *Type:* *string

---

##### `DefinedFileSystemConfigurations`<sup>Required</sup> <a name="DefinedFileSystemConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedFileSystemConfigurations"></a>

```go
func DefinedFileSystemConfigurations() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresDefinedFileSystemConfigurationsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lastMaintenanceRunId"></a>

```go
func LastMaintenanceRunId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresMaintenanceWindowList</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxCpuCount"></a>

```go
func MaxCpuCount() *f64
```

- *Type:* *f64

---

##### `MaxDataStorageInTbs`<sup>Required</sup> <a name="MaxDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDataStorageInTbs"></a>

```go
func MaxDataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `MaxDbNodeStorageInGbs`<sup>Required</sup> <a name="MaxDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxDbNodeStorageInGbs"></a>

```go
func MaxDbNodeStorageInGbs() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInGbs`<sup>Required</sup> <a name="MaxMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.maxMemoryInGbs"></a>

```go
func MaxMemoryInGbs() *f64
```

- *Type:* *f64

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.memorySizeInGbs"></a>

```go
func MemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `MonthlyDbServerVersion`<sup>Required</sup> <a name="MonthlyDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyDbServerVersion"></a>

```go
func MonthlyDbServerVersion() *string
```

- *Type:* *string

---

##### `MonthlyStorageServerVersion`<sup>Required</sup> <a name="MonthlyStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.monthlyStorageServerVersion"></a>

```go
func MonthlyStorageServerVersion() *string
```

- *Type:* *string

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.nextMaintenanceRunId"></a>

```go
func NextMaintenanceRunId() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageCount"></a>

```go
func StorageCount() *f64
```

- *Type:* *f64

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.storageServerVersion"></a>

```go
func StorageServerVersion() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TotalStorageSizeInGbs`<sup>Required</sup> <a name="TotalStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.totalStorageSizeInGbs"></a>

```go
func TotalStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructuresOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures">DataOciDatabaseCloudExadataInfrastructuresCloudExadataInfrastructures</a>

---


### DataOciDatabaseCloudExadataInfrastructuresFilterList <a name="DataOciDatabaseCloudExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseCloudExadataInfrastructuresFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasecloudexadatainfrastructures"

dataocidatabasecloudexadatainfrastructures.NewDataOciDatabaseCloudExadataInfrastructuresFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudExadataInfrastructures.DataOciDatabaseCloudExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




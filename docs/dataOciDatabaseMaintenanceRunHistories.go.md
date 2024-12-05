# `dataOciDatabaseMaintenanceRunHistories` Submodule <a name="`dataOciDatabaseMaintenanceRunHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRunHistories <a name="DataOciDatabaseMaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories oci_database_maintenance_run_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistories(scope Construct, id *string, config DataOciDatabaseMaintenanceRunHistoriesConfig) DataOciDatabaseMaintenanceRunHistories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig">DataOciDatabaseMaintenanceRunHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig">DataOciDatabaseMaintenanceRunHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetMaintenanceType">ResetMaintenanceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceId">ResetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceType` <a name="ResetMaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetMaintenanceType"></a>

```go
func ResetMaintenanceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetResourceId` <a name="ResetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceId"></a>

```go
func ResetTargetResourceId()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceType"></a>

```go
func ResetTargetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseMaintenanceRunHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList">DataOciDatabaseMaintenanceRunHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceRunHistories">MaintenanceRunHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceTypeInput">MaintenanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceType">MaintenanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filter"></a>

```go
func Filter() DataOciDatabaseMaintenanceRunHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList">DataOciDatabaseMaintenanceRunHistoriesFilterList</a>

---

##### `MaintenanceRunHistories`<sup>Required</sup> <a name="MaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceRunHistories"></a>

```go
func MaintenanceRunHistories() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceTypeInput`<sup>Optional</sup> <a name="MaintenanceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceTypeInput"></a>

```go
func MaintenanceTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceTypeInput"></a>

```go
func TargetResourceTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceType"></a>

```go
func MaintenanceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunHistoriesConfig <a name="DataOciDatabaseMaintenanceRunHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AvailabilityDomain: *string,
	Filter: interface{},
	Id: *string,
	MaintenanceType: *string,
	State: *string,
	TargetResourceId: *string,
	TargetResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.maintenanceType">MaintenanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#filter DataOciDatabaseMaintenanceRunHistories#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceType`<sup>Optional</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.maintenanceType"></a>

```go
MaintenanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}.

---

##### `TargetResourceId`<sup>Optional</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}.

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceType"></a>

```go
TargetResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunHistoriesFilter <a name="DataOciDatabaseMaintenanceRunHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}.

---

### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories {

}
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails {

}
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails {

}
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails {

}
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

&dataocidatabasemaintenancerunhistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunHistoriesFilterList <a name="DataOciDatabaseMaintenanceRunHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMaintenanceRunHistoriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">EstimatedPatchDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus">PatchingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded">TimePatchingEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted">TimePatchingStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedPatchDuration`<sup>Required</sup> <a name="EstimatedPatchDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```go
func EstimatedPatchDuration() *f64
```

- *Type:* *f64

---

##### `PatchingStatus`<sup>Required</sup> <a name="PatchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```go
func PatchingStatus() *string
```

- *Type:* *string

---

##### `TimePatchingEnded`<sup>Required</sup> <a name="TimePatchingEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```go
func TimePatchingEnded() *string
```

- *Type:* *string

---

##### `TimePatchingStarted`<sup>Required</sup> <a name="TimePatchingStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```go
func TimePatchingStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails">DbServerPatchingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbServerPatchingDetails`<sup>Required</sup> <a name="DbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails"></a>

```go
func DbServerPatchingDetails() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">EstimatedDbServerPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">EstimatedNetworkSwitchesPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">EstimatedStorageServerPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">TotalEstimatedPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedDbServerPatchingTime`<sup>Required</sup> <a name="EstimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```go
func EstimatedDbServerPatchingTime() *f64
```

- *Type:* *f64

---

##### `EstimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="EstimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```go
func EstimatedNetworkSwitchesPatchingTime() *f64
```

- *Type:* *f64

---

##### `EstimatedStorageServerPatchingTime`<sup>Required</sup> <a name="EstimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```go
func EstimatedStorageServerPatchingTime() *f64
```

- *Type:* *f64

---

##### `TotalEstimatedPatchingTime`<sup>Required</sup> <a name="TotalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```go
func TotalEstimatedPatchingTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins">CurrentCustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentPatchingComponent">CurrentPatchingComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime">EstimatedComponentPatchingStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime">EstimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled">IsDstFileUpdateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceSubtype">MaintenanceSubtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceType">MaintenanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchFailureCount">PatchFailureCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchId">PatchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingEndTime">PatchingEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStartTime">PatchingStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStatus">PatchingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId">PeerMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetDbServerVersion">TargetDbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion">TargetStorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeScheduled">TimeScheduled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CurrentCustomActionTimeoutInMins`<sup>Required</sup> <a name="CurrentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```go
func CurrentCustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `CurrentPatchingComponent`<sup>Required</sup> <a name="CurrentPatchingComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentPatchingComponent"></a>

```go
func CurrentPatchingComponent() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId"></a>

```go
func DatabaseSoftwareImageId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EstimatedComponentPatchingStartTime`<sup>Required</sup> <a name="EstimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```go
func EstimatedComponentPatchingStartTime() *string
```

- *Type:* *string

---

##### `EstimatedPatchingTime`<sup>Required</sup> <a name="EstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime"></a>

```go
func EstimatedPatchingTime() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDstFileUpdateEnabled`<sup>Required</sup> <a name="IsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled"></a>

```go
func IsDstFileUpdateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaintenanceSubtype`<sup>Required</sup> <a name="MaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceSubtype"></a>

```go
func MaintenanceSubtype() *string
```

- *Type:* *string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceType"></a>

```go
func MaintenanceType() *string
```

- *Type:* *string

---

##### `PatchFailureCount`<sup>Required</sup> <a name="PatchFailureCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchFailureCount"></a>

```go
func PatchFailureCount() *f64
```

- *Type:* *f64

---

##### `PatchId`<sup>Required</sup> <a name="PatchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchId"></a>

```go
func PatchId() *string
```

- *Type:* *string

---

##### `PatchingEndTime`<sup>Required</sup> <a name="PatchingEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingEndTime"></a>

```go
func PatchingEndTime() *string
```

- *Type:* *string

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `PatchingStartTime`<sup>Required</sup> <a name="PatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStartTime"></a>

```go
func PatchingStartTime() *string
```

- *Type:* *string

---

##### `PatchingStatus`<sup>Required</sup> <a name="PatchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStatus"></a>

```go
func PatchingStatus() *string
```

- *Type:* *string

---

##### `PeerMaintenanceRunId`<sup>Required</sup> <a name="PeerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId"></a>

```go
func PeerMaintenanceRunId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetDbServerVersion`<sup>Required</sup> <a name="TargetDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetDbServerVersion"></a>

```go
func TargetDbServerVersion() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

##### `TargetStorageServerVersion`<sup>Required</sup> <a name="TargetStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion"></a>

```go
func TargetStorageServerVersion() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeScheduled"></a>

```go
func TimeScheduled() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemaintenancerunhistories"

dataocidatabasemaintenancerunhistories.NewDataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.dbServersHistoryDetails">DbServersHistoryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.maintenanceRunDetails">MaintenanceRunDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbServersHistoryDetails`<sup>Required</sup> <a name="DbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.dbServersHistoryDetails"></a>

```go
func DbServersHistoryDetails() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceRunDetails`<sup>Required</sup> <a name="MaintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.maintenanceRunDetails"></a>

```go
func MaintenanceRunDetails() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories</a>

---




# `dataOciFleetAppsManagementSchedulerDefinitions` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitions <a name="DataOciFleetAppsManagementSchedulerDefinitions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions oci_fleet_apps_management_scheduler_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitions(scope Construct, id *string, config DataOciFleetAppsManagementSchedulerDefinitionsConfig) DataOciFleetAppsManagementSchedulerDefinitions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig">DataOciFleetAppsManagementSchedulerDefinitionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig">DataOciFleetAppsManagementSchedulerDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId">ResetFleetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId">ResetMaintenanceWindowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFleetId` <a name="ResetFleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId"></a>

```go
func ResetFleetId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindowId` <a name="ResetMaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId"></a>

```go
func ResetMaintenanceWindowId()
```

##### `ResetProduct` <a name="ResetProduct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementSchedulerDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection">SchedulerDefinitionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput">MaintenanceWindowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter"></a>

```go
func Filter() DataOciFleetAppsManagementSchedulerDefinitionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a>

---

##### `SchedulerDefinitionCollection`<sup>Required</sup> <a name="SchedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection"></a>

```go
func SchedulerDefinitionCollection() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowIdInput`<sup>Optional</sup> <a name="MaintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput"></a>

```go
func MaintenanceWindowIdInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId"></a>

```go
func MaintenanceWindowId() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig {
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
	FleetId: *string,
	Id: *string,
	MaintenanceWindowId: *string,
	Product: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#filter DataOciFleetAppsManagementSchedulerDefinitions#filter}

---

##### `FleetId`<sup>Optional</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowId`<sup>Optional</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId"></a>

```go
MaintenanceWindowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}.

---

##### `Product`<sup>Optional</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

&dataocifleetappsmanagementschedulerdefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation">LifecycleOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId">RunbookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects">Subjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `LifecycleOperation`<sup>Required</sup> <a name="LifecycleOperation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation"></a>

```go
func LifecycleOperation() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId"></a>

```go
func RunbookId() *string
```

- *Type:* *string

---

##### `Subjects`<sup>Required</sup> <a name="Subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects"></a>

```go
func Subjects() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups">ActionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff">ActivityInitiationCutOff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes">ApplicationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups">CountOfAffectedActionGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations">LifecycleOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks">RunBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun">TimeOfNextRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups"></a>

```go
func ActionGroups() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a>

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes"></a>

```go
func ActionGroupTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ActivityInitiationCutOff`<sup>Required</sup> <a name="ActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff"></a>

```go
func ActivityInitiationCutOff() *f64
```

- *Type:* *f64

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes"></a>

```go
func ApplicationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CountOfAffectedActionGroups`<sup>Required</sup> <a name="CountOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups"></a>

```go
func CountOfAffectedActionGroups() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```go
func CountOfAffectedResources() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```go
func CountOfAffectedTargets() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleOperations`<sup>Required</sup> <a name="LifecycleOperations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations"></a>

```go
func LifecycleOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `RunBooks`<sup>Required</sup> <a name="RunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks"></a>

```go
func RunBooks() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule"></a>

```go
func Schedule() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfNextRun`<sup>Required</sup> <a name="TimeOfNextRun" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun"></a>

```go
func TimeOfNextRun() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments">Arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments"></a>

```go
func Arguments() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a>

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters">InputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters"></a>

```go
func InputParameters() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate">ExecutionStartdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences">Recurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ExecutionStartdate`<sup>Required</sup> <a name="ExecutionStartdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate"></a>

```go
func ExecutionStartdate() *string
```

- *Type:* *string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId"></a>

```go
func MaintenanceWindowId() *string
```

- *Type:* *string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences"></a>

```go
func Recurrences() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitions"

dataocifleetappsmanagementschedulerdefinitions.NewDataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a>

---




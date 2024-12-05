# `dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets oci_fleet_apps_management_scheduler_definition_scheduled_fleets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleets(scope Construct, id *string, config DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.scheduledFleetCollection">ScheduledFleetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionIdInput">SchedulerDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filter"></a>

```go
func Filter() DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList</a>

---

##### `ScheduledFleetCollection`<sup>Required</sup> <a name="ScheduledFleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.scheduledFleetCollection"></a>

```go
func ScheduledFleetCollection() DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SchedulerDefinitionIdInput`<sup>Optional</sup> <a name="SchedulerDefinitionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionIdInput"></a>

```go
func SchedulerDefinitionIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionId"></a>

```go
func SchedulerDefinitionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

&dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SchedulerDefinitionId: *string,
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.schedulerDefinitionId"></a>

```go
SchedulerDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#filter DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

&dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

&dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

&dataocifleetappsmanagementschedulerdefinitionscheduledfleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.applicationTypes">ApplicationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.actionGroupTypes"></a>

```go
func ActionGroupTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.applicationTypes"></a>

```go
func ApplicationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```go
func CountOfAffectedResources() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```go
func CountOfAffectedTargets() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinitionscheduledfleets"

dataocifleetappsmanagementschedulerdefinitionscheduledfleets.NewDataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection</a>

---




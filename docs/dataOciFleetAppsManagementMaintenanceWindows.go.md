# `dataOciFleetAppsManagementMaintenanceWindows` Submodule <a name="`dataOciFleetAppsManagementMaintenanceWindows` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementMaintenanceWindows <a name="DataOciFleetAppsManagementMaintenanceWindows" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows oci_fleet_apps_management_maintenance_windows}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindows(scope Construct, id *string, config DataOciFleetAppsManagementMaintenanceWindowsConfig) DataOciFleetAppsManagementMaintenanceWindows
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig">DataOciFleetAppsManagementMaintenanceWindowsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig">DataOciFleetAppsManagementMaintenanceWindowsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindows_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindows_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindows_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindows_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementMaintenanceWindows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementMaintenanceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementMaintenanceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList">DataOciFleetAppsManagementMaintenanceWindowsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.maintenanceWindowCollection">MaintenanceWindowCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filter"></a>

```go
func Filter() DataOciFleetAppsManagementMaintenanceWindowsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList">DataOciFleetAppsManagementMaintenanceWindowsFilterList</a>

---

##### `MaintenanceWindowCollection`<sup>Required</sup> <a name="MaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.maintenanceWindowCollection"></a>

```go
func MaintenanceWindowCollection() DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindows.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementMaintenanceWindowsConfig <a name="DataOciFleetAppsManagementMaintenanceWindowsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

&dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindowsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#compartment_id DataOciFleetAppsManagementMaintenanceWindows#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#display_name DataOciFleetAppsManagementMaintenanceWindows#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#filter DataOciFleetAppsManagementMaintenanceWindows#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#id DataOciFleetAppsManagementMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#state DataOciFleetAppsManagementMaintenanceWindows#state}.

---

### DataOciFleetAppsManagementMaintenanceWindowsFilter <a name="DataOciFleetAppsManagementMaintenanceWindowsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

&dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindowsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#name DataOciFleetAppsManagementMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#values DataOciFleetAppsManagementMaintenanceWindows#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#regex DataOciFleetAppsManagementMaintenanceWindows#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#name DataOciFleetAppsManagementMaintenanceWindows#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#values DataOciFleetAppsManagementMaintenanceWindows#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_windows#regex DataOciFleetAppsManagementMaintenanceWindows#regex}.

---

### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

&dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection {

}
```


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

&dataocifleetappsmanagementmaintenancewindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementMaintenanceWindowsFilterList <a name="DataOciFleetAppsManagementMaintenanceWindowsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindowsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementMaintenanceWindowsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isOutage">IsOutage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isRecurring">IsRecurring</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.maintenanceWindowType">MaintenanceWindowType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.recurrences">Recurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.taskInitiationCutoff">TaskInitiationCutoff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsOutage`<sup>Required</sup> <a name="IsOutage" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isOutage"></a>

```go
func IsOutage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRecurring`<sup>Required</sup> <a name="IsRecurring" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.isRecurring"></a>

```go
func IsRecurring() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaintenanceWindowType`<sup>Required</sup> <a name="MaintenanceWindowType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.maintenanceWindowType"></a>

```go
func MaintenanceWindowType() *string
```

- *Type:* *string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.recurrences"></a>

```go
func Recurrences() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TaskInitiationCutoff`<sup>Required</sup> <a name="TaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.taskInitiationCutoff"></a>

```go
func TaskInitiationCutoff() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeScheduleStart"></a>

```go
func TimeScheduleStart() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItems</a>

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference <a name="DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindows"

dataocifleetappsmanagementmaintenancewindows.NewDataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindows.DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection">DataOciFleetAppsManagementMaintenanceWindowsMaintenanceWindowCollection</a>

---




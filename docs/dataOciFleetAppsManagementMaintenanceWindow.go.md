# `dataOciFleetAppsManagementMaintenanceWindow` Submodule <a name="`dataOciFleetAppsManagementMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementMaintenanceWindow <a name="DataOciFleetAppsManagementMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindow"

dataocifleetappsmanagementmaintenancewindow.NewDataOciFleetAppsManagementMaintenanceWindow(scope Construct, id *string, config DataOciFleetAppsManagementMaintenanceWindowConfig) DataOciFleetAppsManagementMaintenanceWindow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig">DataOciFleetAppsManagementMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig">DataOciFleetAppsManagementMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindow"

dataocifleetappsmanagementmaintenancewindow.DataOciFleetAppsManagementMaintenanceWindow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindow"

dataocifleetappsmanagementmaintenancewindow.DataOciFleetAppsManagementMaintenanceWindow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindow"

dataocifleetappsmanagementmaintenancewindow.DataOciFleetAppsManagementMaintenanceWindow_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindow"

dataocifleetappsmanagementmaintenancewindow.DataOciFleetAppsManagementMaintenanceWindow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isOutage">IsOutage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isRecurring">IsRecurring</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowType">MaintenanceWindowType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.recurrences">Recurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff">TaskInitiationCutoff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowIdInput">MaintenanceWindowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsOutage`<sup>Required</sup> <a name="IsOutage" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isOutage"></a>

```go
func IsOutage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRecurring`<sup>Required</sup> <a name="IsRecurring" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.isRecurring"></a>

```go
func IsRecurring() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaintenanceWindowType`<sup>Required</sup> <a name="MaintenanceWindowType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowType"></a>

```go
func MaintenanceWindowType() *string
```

- *Type:* *string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.recurrences"></a>

```go
func Recurrences() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TaskInitiationCutoff`<sup>Required</sup> <a name="TaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff"></a>

```go
func TaskInitiationCutoff() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeScheduleStart"></a>

```go
func TimeScheduleStart() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `MaintenanceWindowIdInput`<sup>Optional</sup> <a name="MaintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowIdInput"></a>

```go
func MaintenanceWindowIdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.maintenanceWindowId"></a>

```go
func MaintenanceWindowId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementMaintenanceWindowConfig <a name="DataOciFleetAppsManagementMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementmaintenancewindow"

&dataocifleetappsmanagementmaintenancewindow.DataOciFleetAppsManagementMaintenanceWindowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MaintenanceWindowId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#maintenance_window_id DataOciFleetAppsManagementMaintenanceWindow#maintenance_window_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementMaintenanceWindow.DataOciFleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowId"></a>

```go
MaintenanceWindowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_maintenance_window#maintenance_window_id DataOciFleetAppsManagementMaintenanceWindow#maintenance_window_id}.

---




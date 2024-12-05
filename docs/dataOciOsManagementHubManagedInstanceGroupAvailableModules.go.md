# `dataOciOsManagementHubManagedInstanceGroupAvailableModules` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupAvailableModules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableModules <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModules" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules oci_os_management_hub_managed_instance_group_available_modules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModules(scope Construct, id *string, config DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig) DataOciOsManagementHubManagedInstanceGroupAvailableModules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig">DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig">DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetName"></a>

```go
func ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.resetNameContains"></a>

```go
func ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableModules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailableModules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupAvailableModules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubManagedInstanceGroupAvailableModules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupAvailableModules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupAvailableModuleCollection">ManagedInstanceGroupAvailableModuleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContainsInput">NameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContains">NameContains</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filter"></a>

```go
func Filter() DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList</a>

---

##### `ManagedInstanceGroupAvailableModuleCollection`<sup>Required</sup> <a name="ManagedInstanceGroupAvailableModuleCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupAvailableModuleCollection"></a>

```go
func ManagedInstanceGroupAvailableModuleCollection() DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupIdInput"></a>

```go
func ManagedInstanceGroupIdInput() *string
```

- *Type:* *string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContainsInput"></a>

```go
func NameContainsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.managedInstanceGroupId"></a>

```go
func ManagedInstanceGroupId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.nameContains"></a>

```go
func NameContains() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

&dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceGroupId: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	NameContains: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#id DataOciOsManagementHubManagedInstanceGroupAvailableModules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.nameContains">NameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name_contains DataOciOsManagementHubManagedInstanceGroupAvailableModules#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.managedInstanceGroupId"></a>

```go
ManagedInstanceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#managed_instance_group_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailableModules#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#filter DataOciOsManagementHubManagedInstanceGroupAvailableModules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#id DataOciOsManagementHubManagedInstanceGroupAvailableModules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesConfig.property.nameContains"></a>

```go
NameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name_contains DataOciOsManagementHubManagedInstanceGroupAvailableModules#name_contains}.

---

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

&dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#values DataOciOsManagementHubManagedInstanceGroupAvailableModules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#regex DataOciOsManagementHubManagedInstanceGroupAvailableModules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#name DataOciOsManagementHubManagedInstanceGroupAvailableModules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#values DataOciOsManagementHubManagedInstanceGroupAvailableModules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_modules#regex DataOciOsManagementHubManagedInstanceGroupAvailableModules#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

&dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection {

}
```


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

&dataociosmanagementhubmanagedinstancegroupavailablemodules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablemodules"

dataociosmanagementhubmanagedinstancegroupavailablemodules.NewDataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailableModules.DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection">DataOciOsManagementHubManagedInstanceGroupAvailableModulesManagedInstanceGroupAvailableModuleCollection</a>

---




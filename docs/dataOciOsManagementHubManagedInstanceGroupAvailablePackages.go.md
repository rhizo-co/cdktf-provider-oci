# `dataOciOsManagementHubManagedInstanceGroupAvailablePackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupAvailablePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailablePackages <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages oci_os_management_hub_managed_instance_group_available_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackages(scope Construct, id *string, config DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig) DataOciOsManagementHubManagedInstanceGroupAvailablePackages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetIsLatest">ResetIsLatest</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLatest` <a name="ResetIsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.resetIsLatest"></a>

```go
func ResetIsLatest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailablePackages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupAvailablePackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupAvailablePackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubManagedInstanceGroupAvailablePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupAvailablePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.managedInstanceGroupAvailablePackageCollection">ManagedInstanceGroupAvailablePackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayNameInput">DisplayNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.isLatestInput">IsLatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.isLatest">IsLatest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.filter"></a>

```go
func Filter() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList</a>

---

##### `ManagedInstanceGroupAvailablePackageCollection`<sup>Required</sup> <a name="ManagedInstanceGroupAvailablePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.managedInstanceGroupAvailablePackageCollection"></a>

```go
func ManagedInstanceGroupAvailablePackageCollection() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayNameInput"></a>

```go
func DisplayNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLatestInput`<sup>Optional</sup> <a name="IsLatestInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.isLatestInput"></a>

```go
func IsLatestInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.managedInstanceGroupIdInput"></a>

```go
func ManagedInstanceGroupIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayName"></a>

```go
func DisplayName() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.isLatest"></a>

```go
func IsLatest() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.managedInstanceGroupId"></a>

```go
func ManagedInstanceGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

&dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceGroupId: *string,
	CompartmentId: *string,
	DisplayName: *[]*string,
	DisplayNameContains: *string,
	Filter: interface{},
	Id: *string,
	IsLatest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailablePackages#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailablePackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#display_name DataOciOsManagementHubManagedInstanceGroupAvailablePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailablePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#id DataOciOsManagementHubManagedInstanceGroupAvailablePackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.isLatest">IsLatest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#is_latest DataOciOsManagementHubManagedInstanceGroupAvailablePackages#is_latest}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.managedInstanceGroupId"></a>

```go
ManagedInstanceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupAvailablePackages#managed_instance_group_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupAvailablePackages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.displayName"></a>

```go
DisplayName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#display_name DataOciOsManagementHubManagedInstanceGroupAvailablePackages#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupAvailablePackages#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#filter DataOciOsManagementHubManagedInstanceGroupAvailablePackages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#id DataOciOsManagementHubManagedInstanceGroupAvailablePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLatest`<sup>Optional</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesConfig.property.isLatest"></a>

```go
IsLatest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#is_latest DataOciOsManagementHubManagedInstanceGroupAvailablePackages#is_latest}.

---

### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

&dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#name DataOciOsManagementHubManagedInstanceGroupAvailablePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#values DataOciOsManagementHubManagedInstanceGroupAvailablePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#regex DataOciOsManagementHubManagedInstanceGroupAvailablePackages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#name DataOciOsManagementHubManagedInstanceGroupAvailablePackages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#values DataOciOsManagementHubManagedInstanceGroupAvailablePackages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_available_packages#regex DataOciOsManagementHubManagedInstanceGroupAvailablePackages#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

&dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection {

}
```


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

&dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems {

}
```


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

&dataociosmanagementhubmanagedinstancegroupavailablepackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.isLatest">IsLatest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsLatest`<sup>Required</sup> <a name="IsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.isLatest"></a>

```go
func IsLatest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.softwareSources"></a>

```go
func SoftwareSources() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```go
func IsMandatoryForAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```go
func SoftwareSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupavailablepackages"

dataociosmanagementhubmanagedinstancegroupavailablepackages.NewDataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupAvailablePackages.DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection">DataOciOsManagementHubManagedInstanceGroupAvailablePackagesManagedInstanceGroupAvailablePackageCollection</a>

---




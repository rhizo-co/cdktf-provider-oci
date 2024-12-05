# `dataOciOsManagementHubManagedInstanceInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackages <a name="DataOciOsManagementHubManagedInstanceInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages oci_os_management_hub_managed_instance_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackages(scope Construct, id *string, config DataOciOsManagementHubManagedInstanceInstalledPackagesConfig) DataOciOsManagementHubManagedInstanceInstalledPackages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceInstalledPackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceInstalledPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateEnd">ResetTimeInstallDateEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateStart">ResetTimeInstallDateStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeInstallDateEnd` <a name="ResetTimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateEnd"></a>

```go
func ResetTimeInstallDateEnd()
```

##### `ResetTimeInstallDateStart` <a name="ResetTimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.resetTimeInstallDateStart"></a>

```go
func ResetTimeInstallDateStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceInstalledPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubManagedInstanceInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.installedPackageCollection">InstalledPackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameInput">DisplayNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEndInput">TimeInstallDateEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStartInput">TimeInstallDateStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEnd">TimeInstallDateEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStart">TimeInstallDateStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filter"></a>

```go
func Filter() DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList</a>

---

##### `InstalledPackageCollection`<sup>Required</sup> <a name="InstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.installedPackageCollection"></a>

```go
func InstalledPackageCollection() DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameInput"></a>

```go
func DisplayNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `TimeInstallDateEndInput`<sup>Optional</sup> <a name="TimeInstallDateEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEndInput"></a>

```go
func TimeInstallDateEndInput() *string
```

- *Type:* *string

---

##### `TimeInstallDateStartInput`<sup>Optional</sup> <a name="TimeInstallDateStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStartInput"></a>

```go
func TimeInstallDateStartInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayName"></a>

```go
func DisplayName() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `TimeInstallDateEnd`<sup>Required</sup> <a name="TimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateEnd"></a>

```go
func TimeInstallDateEnd() *string
```

- *Type:* *string

---

##### `TimeInstallDateStart`<sup>Required</sup> <a name="TimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.timeInstallDateStart"></a>

```go
func TimeInstallDateStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

&dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	CompartmentId: *string,
	DisplayName: *[]*string,
	DisplayNameContains: *string,
	Filter: interface{},
	Id: *string,
	TimeInstallDateEnd: *string,
	TimeInstallDateStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateEnd">TimeInstallDateEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateStart">TimeInstallDateStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledPackages#managed_instance_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceInstalledPackages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayName"></a>

```go
DisplayName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name DataOciOsManagementHubManagedInstanceInstalledPackages#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceInstalledPackages#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#filter DataOciOsManagementHubManagedInstanceInstalledPackages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#id DataOciOsManagementHubManagedInstanceInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeInstallDateEnd`<sup>Optional</sup> <a name="TimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```go
TimeInstallDateEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_end}.

---

##### `TimeInstallDateStart`<sup>Optional</sup> <a name="TimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesConfig.property.timeInstallDateStart"></a>

```go
TimeInstallDateStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

&dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#name DataOciOsManagementHubManagedInstanceInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#values DataOciOsManagementHubManagedInstanceInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#regex DataOciOsManagementHubManagedInstanceInstalledPackages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#name DataOciOsManagementHubManagedInstanceInstalledPackages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#values DataOciOsManagementHubManagedInstanceInstalledPackages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_packages#regex DataOciOsManagementHubManagedInstanceInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

&dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection {

}
```


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

&dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems {

}
```


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

&dataociosmanagementhubmanagedinstanceinstalledpackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.packageClassification">PackageClassification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeInstalled">TimeInstalled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeIssued">TimeIssued</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageClassification`<sup>Required</sup> <a name="PackageClassification" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.packageClassification"></a>

```go
func PackageClassification() *string
```

- *Type:* *string

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.softwareSources"></a>

```go
func SoftwareSources() DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList</a>

---

##### `TimeInstalled`<sup>Required</sup> <a name="TimeInstalled" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeInstalled"></a>

```go
func TimeInstalled() *string
```

- *Type:* *string

---

##### `TimeIssued`<sup>Required</sup> <a name="TimeIssued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.timeIssued"></a>

```go
func TimeIssued() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```go
func IsMandatoryForAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```go
func SoftwareSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceinstalledpackages"

dataociosmanagementhubmanagedinstanceinstalledpackages.NewDataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledPackages.DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection">DataOciOsManagementHubManagedInstanceInstalledPackagesInstalledPackageCollection</a>

---




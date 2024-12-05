# `dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupInstalledPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackages <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages oci_os_management_hub_managed_instance_group_installed_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackages(scope Construct, id *string, config DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig) DataOciOsManagementHubManagedInstanceGroupInstalledPackages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd">ResetTimeInstallDateEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart">ResetTimeInstallDateStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeInstallDateEnd` <a name="ResetTimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateEnd"></a>

```go
func ResetTimeInstallDateEnd()
```

##### `ResetTimeInstallDateStart` <a name="ResetTimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.resetTimeInstallDateStart"></a>

```go
func ResetTimeInstallDateStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupInstalledPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubManagedInstanceGroupInstalledPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupInstalledPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection">ManagedInstanceGroupInstalledPackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput">DisplayNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput">TimeInstallDateEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput">TimeInstallDateStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd">TimeInstallDateEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart">TimeInstallDateStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filter"></a>

```go
func Filter() DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList</a>

---

##### `ManagedInstanceGroupInstalledPackageCollection`<sup>Required</sup> <a name="ManagedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupInstalledPackageCollection"></a>

```go
func ManagedInstanceGroupInstalledPackageCollection() DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameInput"></a>

```go
func DisplayNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupIdInput"></a>

```go
func ManagedInstanceGroupIdInput() *string
```

- *Type:* *string

---

##### `TimeInstallDateEndInput`<sup>Optional</sup> <a name="TimeInstallDateEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEndInput"></a>

```go
func TimeInstallDateEndInput() *string
```

- *Type:* *string

---

##### `TimeInstallDateStartInput`<sup>Optional</sup> <a name="TimeInstallDateStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStartInput"></a>

```go
func TimeInstallDateStartInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayName"></a>

```go
func DisplayName() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.managedInstanceGroupId"></a>

```go
func ManagedInstanceGroupId() *string
```

- *Type:* *string

---

##### `TimeInstallDateEnd`<sup>Required</sup> <a name="TimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateEnd"></a>

```go
func TimeInstallDateEnd() *string
```

- *Type:* *string

---

##### `TimeInstallDateStart`<sup>Required</sup> <a name="TimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.timeInstallDateStart"></a>

```go
func TimeInstallDateStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

&dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig {
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
	TimeInstallDateEnd: *string,
	TimeInstallDateStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd">TimeInstallDateEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart">TimeInstallDateStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.managedInstanceGroupId"></a>

```go
ManagedInstanceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#managed_instance_group_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#compartment_id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayName"></a>

```go
DisplayName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#display_name_contains DataOciOsManagementHubManagedInstanceGroupInstalledPackages#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#filter DataOciOsManagementHubManagedInstanceGroupInstalledPackages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#id DataOciOsManagementHubManagedInstanceGroupInstalledPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeInstallDateEnd`<sup>Optional</sup> <a name="TimeInstallDateEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateEnd"></a>

```go
TimeInstallDateEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_end DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_end}.

---

##### `TimeInstallDateStart`<sup>Optional</sup> <a name="TimeInstallDateStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesConfig.property.timeInstallDateStart"></a>

```go
TimeInstallDateStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#time_install_date_start DataOciOsManagementHubManagedInstanceGroupInstalledPackages#time_install_date_start}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

&dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#name DataOciOsManagementHubManagedInstanceGroupInstalledPackages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#values DataOciOsManagementHubManagedInstanceGroupInstalledPackages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_installed_packages#regex DataOciOsManagementHubManagedInstanceGroupInstalledPackages#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

&dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection {

}
```


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

&dataociosmanagementhubmanagedinstancegroupinstalledpackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroupinstalledpackages"

dataociosmanagementhubmanagedinstancegroupinstalledpackages.NewDataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupInstalledPackages.DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection">DataOciOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection</a>

---




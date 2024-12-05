# `dataOciOsManagementHubManagedInstanceGroups` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroups <a name="DataOciOsManagementHubManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups oci_os_management_hub_managed_instance_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroups(scope Construct, id *string, config DataOciOsManagementHubManagedInstanceGroupsConfig) DataOciOsManagementHubManagedInstanceGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig">DataOciOsManagementHubManagedInstanceGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig">DataOciOsManagementHubManagedInstanceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetArchType">ResetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetIsManagedByAutonomousLinux">ResetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocationNotEqualTo">ResetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetManagedInstanceGroupId">ResetManagedInstanceGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArchType` <a name="ResetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetArchType"></a>

```go
func ResetArchType()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetIsManagedByAutonomousLinux` <a name="ResetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetIsManagedByAutonomousLinux"></a>

```go
func ResetIsManagedByAutonomousLinux()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetLocationNotEqualTo` <a name="ResetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocationNotEqualTo"></a>

```go
func ResetLocationNotEqualTo()
```

##### `ResetManagedInstanceGroupId` <a name="ResetManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetManagedInstanceGroupId"></a>

```go
func ResetManagedInstanceGroupId()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOsFamily"></a>

```go
func ResetOsFamily()
```

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetSoftwareSourceId"></a>

```go
func ResetSoftwareSourceId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubManagedInstanceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList">DataOciOsManagementHubManagedInstanceGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupCollection">ManagedInstanceGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archTypeInput">ArchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameInput">DisplayNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinuxInput">IsManagedByAutonomousLinuxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationInput">LocationInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualToInput">LocationNotEqualToInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamilyInput">OsFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.location">Location</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualTo">LocationNotEqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filter"></a>

```go
func Filter() DataOciOsManagementHubManagedInstanceGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList">DataOciOsManagementHubManagedInstanceGroupsFilterList</a>

---

##### `ManagedInstanceGroupCollection`<sup>Required</sup> <a name="ManagedInstanceGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupCollection"></a>

```go
func ManagedInstanceGroupCollection() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList</a>

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archTypeInput"></a>

```go
func ArchTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameInput"></a>

```go
func DisplayNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="IsManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinuxInput"></a>

```go
func IsManagedByAutonomousLinuxInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationInput"></a>

```go
func LocationInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationNotEqualToInput`<sup>Optional</sup> <a name="LocationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualToInput"></a>

```go
func LocationNotEqualToInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupIdInput"></a>

```go
func ManagedInstanceGroupIdInput() *string
```

- *Type:* *string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamilyInput"></a>

```go
func OsFamilyInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayName"></a>

```go
func DisplayName() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinux`<sup>Required</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinux"></a>

```go
func IsManagedByAutonomousLinux() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.location"></a>

```go
func Location() *[]*string
```

- *Type:* *[]*string

---

##### `LocationNotEqualTo`<sup>Required</sup> <a name="LocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualTo"></a>

```go
func LocationNotEqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupId"></a>

```go
func ManagedInstanceGroupId() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupsConfig <a name="DataOciOsManagementHubManagedInstanceGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

&dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArchType: *string,
	CompartmentId: *string,
	DisplayName: *[]*string,
	DisplayNameContains: *string,
	Filter: interface{},
	Id: *string,
	IsManagedByAutonomousLinux: interface{},
	Location: *[]*string,
	LocationNotEqualTo: *[]*string,
	ManagedInstanceGroupId: *string,
	OsFamily: *string,
	SoftwareSourceId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.archType">ArchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayName">DisplayName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.location">Location</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.locationNotEqualTo">LocationNotEqualTo</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.osFamily">OsFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchType`<sup>Optional</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.archType"></a>

```go
ArchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayName"></a>

```go
DisplayName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#filter DataOciOsManagementHubManagedInstanceGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsManagedByAutonomousLinux`<sup>Optional</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.isManagedByAutonomousLinux"></a>

```go
IsManagedByAutonomousLinux interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.location"></a>

```go
Location *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}.

---

##### `LocationNotEqualTo`<sup>Optional</sup> <a name="LocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.locationNotEqualTo"></a>

```go
LocationNotEqualTo *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}.

---

##### `ManagedInstanceGroupId`<sup>Optional</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.managedInstanceGroupId"></a>

```go
ManagedInstanceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.osFamily"></a>

```go
OsFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}.

---

### DataOciOsManagementHubManagedInstanceGroupsFilter <a name="DataOciOsManagementHubManagedInstanceGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

&dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroupsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#name DataOciOsManagementHubManagedInstanceGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#values DataOciOsManagementHubManagedInstanceGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#regex DataOciOsManagementHubManagedInstanceGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#name DataOciOsManagementHubManagedInstanceGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#values DataOciOsManagementHubManagedInstanceGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#regex DataOciOsManagementHubManagedInstanceGroups#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

&dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection {

}
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

&dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems {

}
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

&dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings {

}
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

&dataociosmanagementhubmanagedinstancegroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupsFilterList <a name="DataOciOsManagementHubManagedInstanceGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId">ScheduledJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDataCollectionAuthorized`<sup>Required</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```go
func IsDataCollectionAuthorized() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScheduledJobId`<sup>Required</sup> <a name="ScheduledJobId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```go
func ScheduledJobId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.autonomousSettings">AutonomousSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceCount">ManagedInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.notificationTopicId">NotificationTopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.pendingJobCount">PendingJobCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSourceIds">SoftwareSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSources">SoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.vendorName">VendorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `AutonomousSettings`<sup>Required</sup> <a name="AutonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.autonomousSettings"></a>

```go
func AutonomousSettings() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinux`<sup>Required</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```go
func IsManagedByAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedInstanceCount`<sup>Required</sup> <a name="ManagedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceCount"></a>

```go
func ManagedInstanceCount() *f64
```

- *Type:* *f64

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceIds"></a>

```go
func ManagedInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.notificationTopicId"></a>

```go
func NotificationTopicId() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PendingJobCount`<sup>Required</sup> <a name="PendingJobCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.pendingJobCount"></a>

```go
func PendingJobCount() *f64
```

- *Type:* *f64

---

##### `SoftwareSourceIds`<sup>Required</sup> <a name="SoftwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSourceIds"></a>

```go
func SoftwareSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwareSources`<sup>Required</sup> <a name="SoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSources"></a>

```go
func SoftwareSources() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.vendorName"></a>

```go
func VendorName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```go
func IsMandatoryForAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```go
func SoftwareSourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstancegroups"

dataociosmanagementhubmanagedinstancegroups.NewDataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection</a>

---




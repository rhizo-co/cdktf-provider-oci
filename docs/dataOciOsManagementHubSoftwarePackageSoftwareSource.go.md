# `dataOciOsManagementHubSoftwarePackageSoftwareSource` Submodule <a name="`dataOciOsManagementHubSoftwarePackageSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSource <a name="DataOciOsManagementHubSoftwarePackageSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source oci_os_management_hub_software_package_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSource(scope Construct, id *string, config DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig) DataOciOsManagementHubSoftwarePackageSoftwareSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig">DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig">DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetArchType">ResetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAnywhere">ResetAvailabilityAnywhere</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAtOci">ResetAvailabilityAtOci</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetSoftwareSourceType">ResetSoftwareSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArchType` <a name="ResetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetArchType"></a>

```go
func ResetArchType()
```

##### `ResetAvailability` <a name="ResetAvailability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetAvailabilityAnywhere` <a name="ResetAvailabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAnywhere"></a>

```go
func ResetAvailabilityAnywhere()
```

##### `ResetAvailabilityAtOci` <a name="ResetAvailabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetAvailabilityAtOci"></a>

```go
func ResetAvailabilityAtOci()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetId"></a>

```go
func ResetId()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetOsFamily"></a>

```go
func ResetOsFamily()
```

##### `ResetSoftwareSourceType` <a name="ResetSoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetSoftwareSourceType"></a>

```go
func ResetSoftwareSourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwarePackageSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubSoftwarePackageSoftwareSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubSoftwarePackageSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwarePackageSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceCollection">SoftwareSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archTypeInput">ArchTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhereInput">AvailabilityAnywhereInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOciInput">AvailabilityAtOciInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityInput">AvailabilityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamilyInput">OsFamilyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageNameInput">SoftwarePackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceTypeInput">SoftwareSourceTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archType">ArchType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availability">Availability</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhere">AvailabilityAnywhere</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOci">AvailabilityAtOci</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamily">OsFamily</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageName">SoftwarePackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filter"></a>

```go
func Filter() DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList">DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList</a>

---

##### `SoftwareSourceCollection`<sup>Required</sup> <a name="SoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceCollection"></a>

```go
func SoftwareSourceCollection() DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList</a>

---

##### `ArchTypeInput`<sup>Optional</sup> <a name="ArchTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archTypeInput"></a>

```go
func ArchTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityAnywhereInput`<sup>Optional</sup> <a name="AvailabilityAnywhereInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhereInput"></a>

```go
func AvailabilityAnywhereInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityAtOciInput`<sup>Optional</sup> <a name="AvailabilityAtOciInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOciInput"></a>

```go
func AvailabilityAtOciInput() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityInput"></a>

```go
func AvailabilityInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamilyInput"></a>

```go
func OsFamilyInput() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwarePackageNameInput`<sup>Optional</sup> <a name="SoftwarePackageNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageNameInput"></a>

```go
func SoftwarePackageNameInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceTypeInput`<sup>Optional</sup> <a name="SoftwareSourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceTypeInput"></a>

```go
func SoftwareSourceTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.archType"></a>

```go
func ArchType() *[]*string
```

- *Type:* *[]*string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availability"></a>

```go
func Availability() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityAnywhere`<sup>Required</sup> <a name="AvailabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAnywhere"></a>

```go
func AvailabilityAnywhere() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityAtOci`<sup>Required</sup> <a name="AvailabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.availabilityAtOci"></a>

```go
func AvailabilityAtOci() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.osFamily"></a>

```go
func OsFamily() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwarePackageName`<sup>Required</sup> <a name="SoftwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwarePackageName"></a>

```go
func SoftwarePackageName() *string
```

- *Type:* *string

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.softwareSourceType"></a>

```go
func SoftwareSourceType() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

&dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SoftwarePackageName: *string,
	ArchType: *[]*string,
	Availability: *[]*string,
	AvailabilityAnywhere: *[]*string,
	AvailabilityAtOci: *[]*string,
	DisplayName: *string,
	DisplayNameContains: *string,
	Filter: interface{},
	Id: *string,
	OsFamily: *[]*string,
	SoftwareSourceType: *[]*string,
	State: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwarePackageName">SoftwarePackageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.archType">ArchType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availability">Availability</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAnywhere">AvailabilityAnywhere</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAtOci">AvailabilityAtOci</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.osFamily">OsFamily</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#compartment_id DataOciOsManagementHubSoftwarePackageSoftwareSource#compartment_id}.

---

##### `SoftwarePackageName`<sup>Required</sup> <a name="SoftwarePackageName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwarePackageName"></a>

```go
SoftwarePackageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_package_name DataOciOsManagementHubSoftwarePackageSoftwareSource#software_package_name}.

---

##### `ArchType`<sup>Optional</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.archType"></a>

```go
ArchType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#arch_type DataOciOsManagementHubSoftwarePackageSoftwareSource#arch_type}.

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availability"></a>

```go
Availability *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability DataOciOsManagementHubSoftwarePackageSoftwareSource#availability}.

---

##### `AvailabilityAnywhere`<sup>Optional</sup> <a name="AvailabilityAnywhere" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAnywhere"></a>

```go
AvailabilityAnywhere *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_anywhere DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_anywhere}.

---

##### `AvailabilityAtOci`<sup>Optional</sup> <a name="AvailabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.availabilityAtOci"></a>

```go
AvailabilityAtOci *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#availability_at_oci DataOciOsManagementHubSoftwarePackageSoftwareSource#availability_at_oci}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#display_name_contains DataOciOsManagementHubSoftwarePackageSoftwareSource#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#filter DataOciOsManagementHubSoftwarePackageSoftwareSource#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#id DataOciOsManagementHubSoftwarePackageSoftwareSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.osFamily"></a>

```go
OsFamily *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#os_family DataOciOsManagementHubSoftwarePackageSoftwareSource#os_family}.

---

##### `SoftwareSourceType`<sup>Optional</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.softwareSourceType"></a>

```go
SoftwareSourceType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#software_source_type DataOciOsManagementHubSoftwarePackageSoftwareSource#software_source_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#state DataOciOsManagementHubSoftwarePackageSoftwareSource#state}.

---

### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

&dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#name DataOciOsManagementHubSoftwarePackageSoftwareSource#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#values DataOciOsManagementHubSoftwarePackageSoftwareSource#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_package_software_source#regex DataOciOsManagementHubSoftwarePackageSoftwareSource#regex}.

---

### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

&dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection {

}
```


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

&dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems {

}
```


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

&dataociosmanagementhubsoftwarepackagesoftwaresource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.archType">ArchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci">AvailabilityAtOci</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux">IsMandatoryForAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.packageCount">PackageCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.repoId">RepoId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType">SoftwareSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion">SoftwareSourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorName">VendorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources">VendorSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchType`<sup>Required</sup> <a name="ArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.archType"></a>

```go
func ArchType() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `AvailabilityAtOci`<sup>Required</sup> <a name="AvailabilityAtOci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.availabilityAtOci"></a>

```go
func AvailabilityAtOci() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMandatoryForAutonomousLinux`<sup>Required</sup> <a name="IsMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.isMandatoryForAutonomousLinux"></a>

```go
func IsMandatoryForAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PackageCount`<sup>Required</sup> <a name="PackageCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.packageCount"></a>

```go
func PackageCount() *string
```

- *Type:* *string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.repoId"></a>

```go
func RepoId() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SoftwareSourceType`<sup>Required</sup> <a name="SoftwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceType"></a>

```go
func SoftwareSourceType() *string
```

- *Type:* *string

---

##### `SoftwareSourceVersion`<sup>Required</sup> <a name="SoftwareSourceVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.softwareSourceVersion"></a>

```go
func SoftwareSourceVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorName"></a>

```go
func VendorName() *string
```

- *Type:* *string

---

##### `VendorSoftwareSources`<sup>Required</sup> <a name="VendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.vendorSoftwareSources"></a>

```go
func VendorSoftwareSources() DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItems</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsVendorSoftwareSources</a>

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference <a name="DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwarepackagesoftwaresource"

dataociosmanagementhubsoftwarepackagesoftwaresource.NewDataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwarePackageSoftwareSource.DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection">DataOciOsManagementHubSoftwarePackageSoftwareSourceSoftwareSourceCollection</a>

---




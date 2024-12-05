# `dataOciOsManagementHubScheduledJobs` Submodule <a name="`dataOciOsManagementHubScheduledJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubScheduledJobs <a name="DataOciOsManagementHubScheduledJobs" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs oci_os_management_hub_scheduled_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobs(scope Construct, id *string, config DataOciOsManagementHubScheduledJobsConfig) DataOciOsManagementHubScheduledJobs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig">DataOciOsManagementHubScheduledJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig">DataOciOsManagementHubScheduledJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsManagedByAutonomousLinux">ResetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsRestricted">ResetIsRestricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLifecycleStageId">ResetLifecycleStageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocationNotEqualTo">ResetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedCompartmentId">ResetManagedCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceGroupId">ResetManagedInstanceGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceId">ResetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOperationType">ResetOperationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetScheduleType">ResetScheduleType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetId"></a>

```go
func ResetId()
```

##### `ResetIsManagedByAutonomousLinux` <a name="ResetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsManagedByAutonomousLinux"></a>

```go
func ResetIsManagedByAutonomousLinux()
```

##### `ResetIsRestricted` <a name="ResetIsRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetIsRestricted"></a>

```go
func ResetIsRestricted()
```

##### `ResetLifecycleStageId` <a name="ResetLifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLifecycleStageId"></a>

```go
func ResetLifecycleStageId()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetLocationNotEqualTo` <a name="ResetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetLocationNotEqualTo"></a>

```go
func ResetLocationNotEqualTo()
```

##### `ResetManagedCompartmentId` <a name="ResetManagedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedCompartmentId"></a>

```go
func ResetManagedCompartmentId()
```

##### `ResetManagedInstanceGroupId` <a name="ResetManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceGroupId"></a>

```go
func ResetManagedInstanceGroupId()
```

##### `ResetManagedInstanceId` <a name="ResetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetManagedInstanceId"></a>

```go
func ResetManagedInstanceId()
```

##### `ResetOperationType` <a name="ResetOperationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetOperationType"></a>

```go
func ResetOperationType()
```

##### `ResetScheduleType` <a name="ResetScheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetScheduleType"></a>

```go
func ResetScheduleType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeEnd"></a>

```go
func ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.resetTimeStart"></a>

```go
func ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubScheduledJobs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubScheduledJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubScheduledJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubScheduledJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubScheduledJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList">DataOciOsManagementHubScheduledJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduledJobCollection">ScheduledJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinuxInput">IsManagedByAutonomousLinuxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestrictedInput">IsRestrictedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageIdInput">LifecycleStageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationInput">LocationInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualToInput">LocationNotEqualToInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentIdInput">ManagedCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationTypeInput">OperationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleTypeInput">ScheduleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestricted">IsRestricted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageId">LifecycleStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.location">Location</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualTo">LocationNotEqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentId">ManagedCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filter"></a>

```go
func Filter() DataOciOsManagementHubScheduledJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList">DataOciOsManagementHubScheduledJobsFilterList</a>

---

##### `ScheduledJobCollection`<sup>Required</sup> <a name="ScheduledJobCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduledJobCollection"></a>

```go
func ScheduledJobCollection() DataOciOsManagementHubScheduledJobsScheduledJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="IsManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinuxInput"></a>

```go
func IsManagedByAutonomousLinuxInput() interface{}
```

- *Type:* interface{}

---

##### `IsRestrictedInput`<sup>Optional</sup> <a name="IsRestrictedInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestrictedInput"></a>

```go
func IsRestrictedInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleStageIdInput`<sup>Optional</sup> <a name="LifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageIdInput"></a>

```go
func LifecycleStageIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationInput"></a>

```go
func LocationInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationNotEqualToInput`<sup>Optional</sup> <a name="LocationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualToInput"></a>

```go
func LocationNotEqualToInput() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedCompartmentIdInput`<sup>Optional</sup> <a name="ManagedCompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentIdInput"></a>

```go
func ManagedCompartmentIdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupIdInput"></a>

```go
func ManagedInstanceGroupIdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `OperationTypeInput`<sup>Optional</sup> <a name="OperationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationTypeInput"></a>

```go
func OperationTypeInput() *string
```

- *Type:* *string

---

##### `ScheduleTypeInput`<sup>Optional</sup> <a name="ScheduleTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleTypeInput"></a>

```go
func ScheduleTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinux`<sup>Required</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isManagedByAutonomousLinux"></a>

```go
func IsManagedByAutonomousLinux() interface{}
```

- *Type:* interface{}

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.isRestricted"></a>

```go
func IsRestricted() interface{}
```

- *Type:* interface{}

---

##### `LifecycleStageId`<sup>Required</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.lifecycleStageId"></a>

```go
func LifecycleStageId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.location"></a>

```go
func Location() *[]*string
```

- *Type:* *[]*string

---

##### `LocationNotEqualTo`<sup>Required</sup> <a name="LocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.locationNotEqualTo"></a>

```go
func LocationNotEqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedCompartmentId`<sup>Required</sup> <a name="ManagedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedCompartmentId"></a>

```go
func ManagedCompartmentId() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceGroupId"></a>

```go
func ManagedInstanceGroupId() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.scheduleType"></a>

```go
func ScheduleType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubScheduledJobsConfig <a name="DataOciOsManagementHubScheduledJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	DisplayNameContains: *string,
	Filter: interface{},
	Id: *string,
	IsManagedByAutonomousLinux: interface{},
	IsRestricted: interface{},
	LifecycleStageId: *string,
	Location: *[]*string,
	LocationNotEqualTo: *[]*string,
	ManagedCompartmentId: *string,
	ManagedInstanceGroupId: *string,
	ManagedInstanceId: *string,
	OperationType: *string,
	ScheduleType: *string,
	State: *string,
	TimeEnd: *string,
	TimeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isRestricted">IsRestricted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycleStageId">LifecycleStageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.location">Location</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.locationNotEqualTo">LocationNotEqualTo</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedCompartmentId">ManagedCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.operationType">OperationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id DataOciOsManagementHubScheduledJobs#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#compartment_id_in_subtree DataOciOsManagementHubScheduledJobs#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name DataOciOsManagementHubScheduledJobs#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#display_name_contains DataOciOsManagementHubScheduledJobs#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#filter DataOciOsManagementHubScheduledJobs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#id DataOciOsManagementHubScheduledJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsManagedByAutonomousLinux`<sup>Optional</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isManagedByAutonomousLinux"></a>

```go
IsManagedByAutonomousLinux interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_managed_by_autonomous_linux DataOciOsManagementHubScheduledJobs#is_managed_by_autonomous_linux}.

---

##### `IsRestricted`<sup>Optional</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.isRestricted"></a>

```go
IsRestricted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#is_restricted DataOciOsManagementHubScheduledJobs#is_restricted}.

---

##### `LifecycleStageId`<sup>Optional</sup> <a name="LifecycleStageId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.lifecycleStageId"></a>

```go
LifecycleStageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#lifecycle_stage_id DataOciOsManagementHubScheduledJobs#lifecycle_stage_id}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.location"></a>

```go
Location *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location DataOciOsManagementHubScheduledJobs#location}.

---

##### `LocationNotEqualTo`<sup>Optional</sup> <a name="LocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.locationNotEqualTo"></a>

```go
LocationNotEqualTo *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#location_not_equal_to DataOciOsManagementHubScheduledJobs#location_not_equal_to}.

---

##### `ManagedCompartmentId`<sup>Optional</sup> <a name="ManagedCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedCompartmentId"></a>

```go
ManagedCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_compartment_id DataOciOsManagementHubScheduledJobs#managed_compartment_id}.

---

##### `ManagedInstanceGroupId`<sup>Optional</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceGroupId"></a>

```go
ManagedInstanceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_group_id DataOciOsManagementHubScheduledJobs#managed_instance_group_id}.

---

##### `ManagedInstanceId`<sup>Optional</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#managed_instance_id DataOciOsManagementHubScheduledJobs#managed_instance_id}.

---

##### `OperationType`<sup>Optional</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.operationType"></a>

```go
OperationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#operation_type DataOciOsManagementHubScheduledJobs#operation_type}.

---

##### `ScheduleType`<sup>Optional</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.scheduleType"></a>

```go
ScheduleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#schedule_type DataOciOsManagementHubScheduledJobs#schedule_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#state DataOciOsManagementHubScheduledJobs#state}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_end DataOciOsManagementHubScheduledJobs#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#time_start DataOciOsManagementHubScheduledJobs#time_start}.

---

### DataOciOsManagementHubScheduledJobsFilter <a name="DataOciOsManagementHubScheduledJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#name DataOciOsManagementHubScheduledJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#values DataOciOsManagementHubScheduledJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#regex DataOciOsManagementHubScheduledJobs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#name DataOciOsManagementHubScheduledJobs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#values DataOciOsManagementHubScheduledJobs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_scheduled_jobs#regex DataOciOsManagementHubScheduledJobs#regex}.

---

### DataOciOsManagementHubScheduledJobsScheduledJobCollection <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove {

}
```


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

&dataociosmanagementhubscheduledjobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubScheduledJobsFilterList <a name="DataOciOsManagementHubScheduledJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubScheduledJobsFilterOutputReference <a name="DataOciOsManagementHubScheduledJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisable</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnable</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstall</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.disable">Disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.enable">Enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.install">Install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.remove">Remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.disable"></a>

```go
func Disable() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsDisableList</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.enable"></a>

```go
func Enable() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsEnableList</a>

---

##### `Install`<sup>Required</sup> <a name="Install" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.install"></a>

```go
func Install() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsInstallList</a>

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.remove"></a>

```go
func Remove() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsRemove</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.manageModuleStreamsDetails">ManageModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.packageNames">PackageNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.softwareSourceIds">SoftwareSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.switchModuleStreamsDetails">SwitchModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.windowsUpdateNames">WindowsUpdateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManageModuleStreamsDetails`<sup>Required</sup> <a name="ManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.manageModuleStreamsDetails"></a>

```go
func ManageModuleStreamsDetails() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsManageModuleStreamsDetailsList</a>

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.packageNames"></a>

```go
func PackageNames() *[]*string
```

- *Type:* *[]*string

---

##### `SoftwareSourceIds`<sup>Required</sup> <a name="SoftwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.softwareSourceIds"></a>

```go
func SoftwareSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `SwitchModuleStreamsDetails`<sup>Required</sup> <a name="SwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.switchModuleStreamsDetails"></a>

```go
func SwitchModuleStreamsDetails() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList</a>

---

##### `WindowsUpdateNames`<sup>Required</sup> <a name="WindowsUpdateNames" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.windowsUpdateNames"></a>

```go
func WindowsUpdateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperations</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsSwitchModuleStreamsDetails</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isManagedByAutonomousLinux">IsManagedByAutonomousLinux</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isRestricted">IsRestricted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isSubcompartmentIncluded">IsSubcompartmentIncluded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.lifecycleStageIds">LifecycleStageIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedCompartmentIds">ManagedCompartmentIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceGroupIds">ManagedInstanceGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceIds">ManagedInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.operations">Operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.recurringRule">RecurringRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.retryIntervals">RetryIntervals</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeLastExecution">TimeLastExecution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeNextExecution">TimeNextExecution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.workRequestIds">WorkRequestIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsManagedByAutonomousLinux`<sup>Required</sup> <a name="IsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```go
func IsManagedByAutonomousLinux() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isRestricted"></a>

```go
func IsRestricted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSubcompartmentIncluded`<sup>Required</sup> <a name="IsSubcompartmentIncluded" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.isSubcompartmentIncluded"></a>

```go
func IsSubcompartmentIncluded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleStageIds`<sup>Required</sup> <a name="LifecycleStageIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.lifecycleStageIds"></a>

```go
func LifecycleStageIds() *[]*string
```

- *Type:* *[]*string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedCompartmentIds`<sup>Required</sup> <a name="ManagedCompartmentIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedCompartmentIds"></a>

```go
func ManagedCompartmentIds() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstanceGroupIds`<sup>Required</sup> <a name="ManagedInstanceGroupIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceGroupIds"></a>

```go
func ManagedInstanceGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstanceIds`<sup>Required</sup> <a name="ManagedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.managedInstanceIds"></a>

```go
func ManagedInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.operations"></a>

```go
func Operations() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOperationsList</a>

---

##### `RecurringRule`<sup>Required</sup> <a name="RecurringRule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.recurringRule"></a>

```go
func RecurringRule() *string
```

- *Type:* *string

---

##### `RetryIntervals`<sup>Required</sup> <a name="RetryIntervals" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.retryIntervals"></a>

```go
func RetryIntervals() *[]*f64
```

- *Type:* *[]*f64

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.scheduleType"></a>

```go
func ScheduleType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastExecution`<sup>Required</sup> <a name="TimeLastExecution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeLastExecution"></a>

```go
func TimeLastExecution() *string
```

- *Type:* *string

---

##### `TimeNextExecution`<sup>Required</sup> <a name="TimeNextExecution" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeNextExecution"></a>

```go
func TimeNextExecution() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkRequestIds`<sup>Required</sup> <a name="WorkRequestIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.workRequestIds"></a>

```go
func WorkRequestIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItems</a>

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionList <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference <a name="DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubscheduledjobs"

dataociosmanagementhubscheduledjobs.NewDataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection">DataOciOsManagementHubScheduledJobsScheduledJobCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList">DataOciOsManagementHubScheduledJobsScheduledJobCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubScheduledJobsScheduledJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubScheduledJobs.DataOciOsManagementHubScheduledJobsScheduledJobCollection">DataOciOsManagementHubScheduledJobsScheduledJobCollection</a>

---




# `osManagementHubManagedInstanceGroupManageModuleStreamsManagement` Submodule <a name="`osManagementHubManagedInstanceGroupManageModuleStreamsManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagement <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management oci_os_management_hub_managed_instance_group_manage_module_streams_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagement(scope Construct, id *string, config OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig) OsManagementHubManagedInstanceGroupManageModuleStreamsManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable">PutDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable">PutEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall">PutInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove">PutRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetInstall">ResetInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetIsDryRun">ResetIsDryRun</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisable` <a name="PutDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable"></a>

```go
func PutDisable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnable` <a name="PutEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable"></a>

```go
func PutEnable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstall` <a name="PutInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall"></a>

```go
func PutInstall(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemove` <a name="PutRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove"></a>

```go
func PutRemove(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails"></a>

```go
func PutWorkRequestDetails(value OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---

##### `ResetDisable` <a name="ResetDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetDisable"></a>

```go
func ResetDisable()
```

##### `ResetEnable` <a name="ResetEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetEnable"></a>

```go
func ResetEnable()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetInstall` <a name="ResetInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetInstall"></a>

```go
func ResetInstall()
```

##### `ResetIsDryRun` <a name="ResetIsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetIsDryRun"></a>

```go
func ResetIsDryRun()
```

##### `ResetRemove` <a name="ResetRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetWorkRequestDetails"></a>

```go
func ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubManagedInstanceGroupManageModuleStreamsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disable">Disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enable">Enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.install">Install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.remove">Remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disableInput">DisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.installInput">InstallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRunInput">IsDryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupIdInput">ManagedInstanceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.removeInput">RemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRun">IsDryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disable"></a>

```go
func Disable() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList</a>

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enable"></a>

```go
func Enable() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList</a>

---

##### `Install`<sup>Required</sup> <a name="Install" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.install"></a>

```go
func Install() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList</a>

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.remove"></a>

```go
func Remove() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeouts"></a>

```go
func Timeouts() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetails"></a>

```go
func WorkRequestDetails() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference</a>

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disableInput"></a>

```go
func DisableInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallInput`<sup>Optional</sup> <a name="InstallInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.installInput"></a>

```go
func InstallInput() interface{}
```

- *Type:* interface{}

---

##### `IsDryRunInput`<sup>Optional</sup> <a name="IsDryRunInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRunInput"></a>

```go
func IsDryRunInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceGroupIdInput`<sup>Optional</sup> <a name="ManagedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupIdInput"></a>

```go
func ManagedInstanceGroupIdInput() *string
```

- *Type:* *string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.removeInput"></a>

```go
func RemoveInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetailsInput"></a>

```go
func WorkRequestDetailsInput() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDryRun`<sup>Required</sup> <a name="IsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRun"></a>

```go
func IsDryRun() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupId"></a>

```go
func ManagedInstanceGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceGroupId: *string,
	Disable: interface{},
	Enable: interface{},
	Id: *string,
	Install: interface{},
	IsDryRun: interface{},
	Remove: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts,
	WorkRequestDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.managedInstanceGroupId">ManagedInstanceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.disable">Disable</a></code> | <code>interface{}</code> | disable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.enable">Enable</a></code> | <code>interface{}</code> | enable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.install">Install</a></code> | <code>interface{}</code> | install block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.isDryRun">IsDryRun</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.remove">Remove</a></code> | <code>interface{}</code> | remove block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceGroupId`<sup>Required</sup> <a name="ManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.managedInstanceGroupId"></a>

```go
ManagedInstanceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}.

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.disable"></a>

```go
Disable interface{}
```

- *Type:* interface{}

disable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#disable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#disable}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#enable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#enable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Install`<sup>Optional</sup> <a name="Install" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.install"></a>

```go
Install interface{}
```

- *Type:* interface{}

install block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#install OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#install}

---

##### `IsDryRun`<sup>Optional</sup> <a name="IsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.isDryRun"></a>

```go
IsDryRun interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}.

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.remove"></a>

```go
Remove interface{}
```

- *Type:* interface{}

remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#remove OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#remove}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#timeouts OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#timeouts}

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.workRequestDetails"></a>

```go
WorkRequestDetails OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#work_request_details OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable {
	ModuleName: *string,
	StreamName: *string,
	SoftwareSourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable {
	ModuleName: *string,
	StreamName: *string,
	SoftwareSourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall {
	ModuleName: *string,
	ProfileName: *string,
	StreamName: *string,
	SoftwareSourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove {
	ModuleName: *string,
	ProfileName: *string,
	StreamName: *string,
	SoftwareSourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `SoftwareSourceId`<sup>Optional</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

&osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails {
	Description: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get"></a>

```go
func Get(index *f64) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resetSoftwareSourceId"></a>

```go
func ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get"></a>

```go
func Get(index *f64) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resetSoftwareSourceId"></a>

```go
func ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get"></a>

```go
func Get(index *f64) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resetSoftwareSourceId"></a>

```go
func ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get"></a>

```go
func Get(index *f64) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resetSoftwareSourceId">ResetSoftwareSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSoftwareSourceId` <a name="ResetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resetSoftwareSourceId"></a>

```go
func ResetSoftwareSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement"

osmanagementhubmanagedinstancegroupmanagemodulestreamsmanagement.NewOsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---




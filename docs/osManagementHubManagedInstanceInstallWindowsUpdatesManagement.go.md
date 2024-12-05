# `osManagementHubManagedInstanceInstallWindowsUpdatesManagement` Submodule <a name="`osManagementHubManagedInstanceInstallWindowsUpdatesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagement <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management oci_os_management_hub_managed_instance_install_windows_updates_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.NewOsManagementHubManagedInstanceInstallWindowsUpdatesManagement(scope Construct, id *string, config OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig) OsManagementHubManagedInstanceInstallWindowsUpdatesManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateName">ResetWindowsUpdateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateTypes">ResetWindowsUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails"></a>

```go
func PutWorkRequestDetails(value OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWindowsUpdateName` <a name="ResetWindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateName"></a>

```go
func ResetWindowsUpdateName()
```

##### `ResetWindowsUpdateTypes` <a name="ResetWindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateTypes"></a>

```go
func ResetWindowsUpdateTypes()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWorkRequestDetails"></a>

```go
func ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubManagedInstanceInstallWindowsUpdatesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateNameInput">WindowsUpdateNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput">WindowsUpdateTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateName">WindowsUpdateName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypes">WindowsUpdateTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeouts"></a>

```go
func Timeouts() OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetails"></a>

```go
func WorkRequestDetails() OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WindowsUpdateNameInput`<sup>Optional</sup> <a name="WindowsUpdateNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateNameInput"></a>

```go
func WindowsUpdateNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `WindowsUpdateTypesInput`<sup>Optional</sup> <a name="WindowsUpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput"></a>

```go
func WindowsUpdateTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetailsInput"></a>

```go
func WorkRequestDetailsInput() OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `WindowsUpdateName`<sup>Required</sup> <a name="WindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateName"></a>

```go
func WindowsUpdateName() *[]*string
```

- *Type:* *[]*string

---

##### `WindowsUpdateTypes`<sup>Required</sup> <a name="WindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypes"></a>

```go
func WindowsUpdateTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

&osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts,
	WindowsUpdateName: *[]*string,
	WindowsUpdateTypes: *[]*string,
	WorkRequestDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateName">WindowsUpdateName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes">WindowsUpdateTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#timeouts OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#timeouts}

---

##### `WindowsUpdateName`<sup>Optional</sup> <a name="WindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateName"></a>

```go
WindowsUpdateName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}.

---

##### `WindowsUpdateTypes`<sup>Optional</sup> <a name="WindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes"></a>

```go
WindowsUpdateTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.workRequestDetails"></a>

```go
WorkRequestDetails OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#work_request_details}

---

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

&osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}.

---

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

&osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails {
	Description: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.NewOsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement"

osmanagementhubmanagedinstanceinstallwindowsupdatesmanagement.NewOsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---




# `osManagementHubManagedInstanceUpdatePackagesManagement` Submodule <a name="`osManagementHubManagedInstanceUpdatePackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagement <a name="OsManagementHubManagedInstanceUpdatePackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management oci_os_management_hub_managed_instance_update_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.NewOsManagementHubManagedInstanceUpdatePackagesManagement(scope Construct, id *string, config OsManagementHubManagedInstanceUpdatePackagesManagementConfig) OsManagementHubManagedInstanceUpdatePackagesManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig">OsManagementHubManagedInstanceUpdatePackagesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig">OsManagementHubManagedInstanceUpdatePackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails">PutWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetPackageNames">ResetPackageNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetUpdateTypes">ResetUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetWorkRequestDetails">ResetWorkRequestDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>

---

##### `PutWorkRequestDetails` <a name="PutWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails"></a>

```go
func PutWorkRequestDetails(value OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetPackageNames` <a name="ResetPackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetPackageNames"></a>

```go
func ResetPackageNames()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateTypes` <a name="ResetUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetUpdateTypes"></a>

```go
func ResetUpdateTypes()
```

##### `ResetWorkRequestDetails` <a name="ResetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.resetWorkRequestDetails"></a>

```go
func ResetWorkRequestDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceUpdatePackagesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubManagedInstanceUpdatePackagesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubManagedInstanceUpdatePackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceUpdatePackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNamesInput">PackageNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypesInput">UpdateTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetailsInput">WorkRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNames">PackageNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypes">UpdateTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeouts"></a>

```go
func Timeouts() OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference</a>

---

##### `WorkRequestDetails`<sup>Required</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetails"></a>

```go
func WorkRequestDetails() OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `PackageNamesInput`<sup>Optional</sup> <a name="PackageNamesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNamesInput"></a>

```go
func PackageNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateTypesInput`<sup>Optional</sup> <a name="UpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypesInput"></a>

```go
func UpdateTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkRequestDetailsInput`<sup>Optional</sup> <a name="WorkRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.workRequestDetailsInput"></a>

```go
func WorkRequestDetailsInput() OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `PackageNames`<sup>Required</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.packageNames"></a>

```go
func PackageNames() *[]*string
```

- *Type:* *[]*string

---

##### `UpdateTypes`<sup>Required</sup> <a name="UpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.updateTypes"></a>

```go
func UpdateTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagementConfig <a name="OsManagementHubManagedInstanceUpdatePackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

&osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	Id: *string,
	PackageNames: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts,
	UpdateTypes: *[]*string,
	WorkRequestDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.packageNames">PackageNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.updateTypes">UpdateTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.workRequestDetails">WorkRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#managed_instance_id OsManagementHubManagedInstanceUpdatePackagesManagement#managed_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#id OsManagementHubManagedInstanceUpdatePackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageNames`<sup>Optional</sup> <a name="PackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.packageNames"></a>

```go
PackageNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#package_names OsManagementHubManagedInstanceUpdatePackagesManagement#package_names}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts">OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#timeouts OsManagementHubManagedInstanceUpdatePackagesManagement#timeouts}

---

##### `UpdateTypes`<sup>Optional</sup> <a name="UpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.updateTypes"></a>

```go
UpdateTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update_types OsManagementHubManagedInstanceUpdatePackagesManagement#update_types}.

---

##### `WorkRequestDetails`<sup>Optional</sup> <a name="WorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementConfig.property.workRequestDetails"></a>

```go
WorkRequestDetails OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#work_request_details OsManagementHubManagedInstanceUpdatePackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts <a name="OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

&osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#create OsManagementHubManagedInstanceUpdatePackagesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#delete OsManagementHubManagedInstanceUpdatePackagesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#update OsManagementHubManagedInstanceUpdatePackagesManagement#update}.

---

### OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

&osmanagementhubmanagedinstanceupdatepackagesmanagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails {
	Description: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#description OsManagementHubManagedInstanceUpdatePackagesManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_update_packages_management#display_name OsManagementHubManagedInstanceUpdatePackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.NewOsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagedinstanceupdatepackagesmanagement"

osmanagementhubmanagedinstanceupdatepackagesmanagement.NewOsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceUpdatePackagesManagement.OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceUpdatePackagesManagementWorkRequestDetails</a>

---




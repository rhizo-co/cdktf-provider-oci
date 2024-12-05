# `psqlDbSystem` Submodule <a name="`psqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.psqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PsqlDbSystem <a name="PsqlDbSystem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system oci_psql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystem(scope Construct, id *string, config PsqlDbSystemConfig) PsqlDbSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig">PsqlDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig">PsqlDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails">PutInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy">PutManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails">PutNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations">PutPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails">PutStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig">ResetApplyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs">ResetInstanceMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount">ResetInstanceOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails">ResetInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy">ResetManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations">ResetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType">ResetSystemType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials"></a>

```go
func PutCredentials(value PsqlDbSystemCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `PutInstancesDetails` <a name="PutInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails"></a>

```go
func PutInstancesDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagementPolicy` <a name="PutManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy"></a>

```go
func PutManagementPolicy(value PsqlDbSystemManagementPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `PutNetworkDetails` <a name="PutNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails"></a>

```go
func PutNetworkDetails(value PsqlDbSystemNetworkDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `PutPatchOperations` <a name="PutPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations"></a>

```go
func PutPatchOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource"></a>

```go
func PutSource(value PsqlDbSystemSource)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `PutStorageDetails` <a name="PutStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails"></a>

```go
func PutStorageDetails(value PsqlDbSystemStorageDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts"></a>

```go
func PutTimeouts(value PsqlDbSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---

##### `ResetApplyConfig` <a name="ResetApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig"></a>

```go
func ResetApplyConfig()
```

##### `ResetConfigId` <a name="ResetConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId"></a>

```go
func ResetConfigId()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetInstanceMemorySizeInGbs` <a name="ResetInstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs"></a>

```go
func ResetInstanceMemorySizeInGbs()
```

##### `ResetInstanceOcpuCount` <a name="ResetInstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount"></a>

```go
func ResetInstanceOcpuCount()
```

##### `ResetInstancesDetails` <a name="ResetInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails"></a>

```go
func ResetInstancesDetails()
```

##### `ResetManagementPolicy` <a name="ResetManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy"></a>

```go
func ResetManagementPolicy()
```

##### `ResetPatchOperations` <a name="ResetPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations"></a>

```go
func ResetPatchOperations()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSystemType` <a name="ResetSystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType"></a>

```go
func ResetSystemType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.PsqlDbSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.PsqlDbSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.PsqlDbSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.PsqlDbSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PsqlDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PsqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PsqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances">Instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails">InstancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy">ManagementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails">StorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput">ApplyConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput">InstanceMemorySizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput">InstanceOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput">InstancesDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput">ManagementPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput">NetworkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput">PatchOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput">StorageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput">SystemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig">ApplyConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType">SystemType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials"></a>

```go
func Credentials() PsqlDbSystemCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances"></a>

```go
func Instances() PsqlDbSystemInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a>

---

##### `InstancesDetails`<sup>Required</sup> <a name="InstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails"></a>

```go
func InstancesDetails() PsqlDbSystemInstancesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagementPolicy`<sup>Required</sup> <a name="ManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy"></a>

```go
func ManagementPolicy() PsqlDbSystemManagementPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a>

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails"></a>

```go
func NetworkDetails() PsqlDbSystemNetworkDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations"></a>

```go
func PatchOperations() PsqlDbSystemPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source"></a>

```go
func Source() PsqlDbSystemSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageDetails`<sup>Required</sup> <a name="StorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails"></a>

```go
func StorageDetails() PsqlDbSystemStorageDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts"></a>

```go
func Timeouts() PsqlDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ApplyConfigInput`<sup>Optional</sup> <a name="ApplyConfigInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput"></a>

```go
func ApplyConfigInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput"></a>

```go
func CredentialsInput() PsqlDbSystemCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceMemorySizeInGbsInput`<sup>Optional</sup> <a name="InstanceMemorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput"></a>

```go
func InstanceMemorySizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `InstanceOcpuCountInput`<sup>Optional</sup> <a name="InstanceOcpuCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput"></a>

```go
func InstanceOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `InstancesDetailsInput`<sup>Optional</sup> <a name="InstancesDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput"></a>

```go
func InstancesDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ManagementPolicyInput`<sup>Optional</sup> <a name="ManagementPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput"></a>

```go
func ManagementPolicyInput() PsqlDbSystemManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `NetworkDetailsInput`<sup>Optional</sup> <a name="NetworkDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput"></a>

```go
func NetworkDetailsInput() PsqlDbSystemNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `PatchOperationsInput`<sup>Optional</sup> <a name="PatchOperationsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput"></a>

```go
func PatchOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput"></a>

```go
func SourceInput() PsqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `StorageDetailsInput`<sup>Optional</sup> <a name="StorageDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput"></a>

```go
func StorageDetailsInput() PsqlDbSystemStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput"></a>

```go
func SystemTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyConfig`<sup>Required</sup> <a name="ApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig"></a>

```go
func ApplyConfig() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceMemorySizeInGbs`<sup>Required</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs"></a>

```go
func InstanceMemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `InstanceOcpuCount`<sup>Required</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount"></a>

```go
func InstanceOcpuCount() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType"></a>

```go
func SystemType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PsqlDbSystemConfig <a name="PsqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DbVersion: *string,
	DisplayName: *string,
	NetworkDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemNetworkDetails,
	Shape: *string,
	StorageDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemStorageDetails,
	ApplyConfig: *string,
	ConfigId: *string,
	Credentials: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemCredentials,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InstanceCount: *f64,
	InstanceMemorySizeInGbs: *f64,
	InstanceOcpuCount: *f64,
	InstancesDetails: interface{},
	ManagementPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemManagementPolicy,
	PatchOperations: interface{},
	Source: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemSource,
	SystemType: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion">DbVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails">StorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig">ApplyConfig</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId">ConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs">InstanceMemorySizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount">InstanceOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails">InstancesDetails</a></code> | <code>interface{}</code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy">ManagementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations">PatchOperations</a></code> | <code>interface{}</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType">SystemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails"></a>

```go
NetworkDetails PsqlDbSystemNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `StorageDetails`<sup>Required</sup> <a name="StorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails"></a>

```go
StorageDetails PsqlDbSystemStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `ApplyConfig`<sup>Optional</sup> <a name="ApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig"></a>

```go
ApplyConfig *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials"></a>

```go
Credentials PsqlDbSystemCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `InstanceMemorySizeInGbs`<sup>Optional</sup> <a name="InstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs"></a>

```go
InstanceMemorySizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `InstanceOcpuCount`<sup>Optional</sup> <a name="InstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount"></a>

```go
InstanceOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `InstancesDetails`<sup>Optional</sup> <a name="InstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails"></a>

```go
InstancesDetails interface{}
```

- *Type:* interface{}

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `ManagementPolicy`<sup>Optional</sup> <a name="ManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy"></a>

```go
ManagementPolicy PsqlDbSystemManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `PatchOperations`<sup>Optional</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations"></a>

```go
PatchOperations interface{}
```

- *Type:* interface{}

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source"></a>

```go
Source PsqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `SystemType`<sup>Optional</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType"></a>

```go
SystemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts"></a>

```go
Timeouts PsqlDbSystemTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}

---

### PsqlDbSystemCredentials <a name="PsqlDbSystemCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemCredentials {
	PasswordDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails">PasswordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | password_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}. |

---

##### `PasswordDetails`<sup>Required</sup> <a name="PasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails"></a>

```go
PasswordDetails PsqlDbSystemCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

password_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}.

---

### PsqlDbSystemCredentialsPasswordDetails <a name="PsqlDbSystemCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemCredentialsPasswordDetails {
	PasswordType: *string,
	Password: *string,
	SecretId: *string,
	SecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType">PasswordType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}. |

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType"></a>

```go
PasswordType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion"></a>

```go
SecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}.

---

### PsqlDbSystemInstances <a name="PsqlDbSystemInstances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemInstances {

}
```


### PsqlDbSystemInstancesDetails <a name="PsqlDbSystemInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemInstancesDetails {
	Description: *string,
	DisplayName: *string,
	PrivateIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}.

---

### PsqlDbSystemManagementPolicy <a name="PsqlDbSystemManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemManagementPolicy {
	BackupPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy,
	MaintenanceWindowStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}. |

---

##### `BackupPolicy`<sup>Optional</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy"></a>

```go
BackupPolicy PsqlDbSystemManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}

---

##### `MaintenanceWindowStart`<sup>Optional</sup> <a name="MaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart"></a>

```go
MaintenanceWindowStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}.

---

### PsqlDbSystemManagementPolicyBackupPolicy <a name="PsqlDbSystemManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemManagementPolicyBackupPolicy {
	BackupStart: *string,
	DaysOfTheMonth: *[]*f64,
	DaysOfTheWeek: *[]*string,
	Kind: *string,
	RetentionDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart">BackupStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth">DaysOfTheMonth</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}. |

---

##### `BackupStart`<sup>Optional</sup> <a name="BackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart"></a>

```go
BackupStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}.

---

##### `DaysOfTheMonth`<sup>Optional</sup> <a name="DaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth"></a>

```go
DaysOfTheMonth *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}.

---

##### `DaysOfTheWeek`<sup>Optional</sup> <a name="DaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek"></a>

```go
DaysOfTheWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}.

---

### PsqlDbSystemNetworkDetails <a name="PsqlDbSystemNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemNetworkDetails {
	SubnetId: *string,
	NsgIds: *[]*string,
	PrimaryDbEndpointPrivateIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp">PrimaryDbEndpointPrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}.

---

##### `PrimaryDbEndpointPrivateIp`<sup>Optional</sup> <a name="PrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp"></a>

```go
PrimaryDbEndpointPrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}.

---

### PsqlDbSystemPatchOperations <a name="PsqlDbSystemPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemPatchOperations {
	Operation: *string,
	Selection: *string,
	From: *string,
	Position: *string,
	SelectedItem: *string,
	Value: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation">Operation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection">Selection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position">Position</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value">Value</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}.

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection"></a>

```go
Selection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}.

---

##### `From`<sup>Optional</sup> <a name="From" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position"></a>

```go
Position *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}.

---

##### `SelectedItem`<sup>Optional</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem"></a>

```go
SelectedItem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value"></a>

```go
Value *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}.

---

### PsqlDbSystemSource <a name="PsqlDbSystemSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemSource {
	SourceType: *string,
	BackupId: *string,
	IsHavingRestoreConfigOverrides: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId">BackupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides">IsHavingRestoreConfigOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}.

---

##### `IsHavingRestoreConfigOverrides`<sup>Optional</sup> <a name="IsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides"></a>

```go
IsHavingRestoreConfigOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}.

---

### PsqlDbSystemStorageDetails <a name="PsqlDbSystemStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemStorageDetails {
	IsRegionallyDurable: interface{},
	SystemType: *string,
	AvailabilityDomain: *string,
	Iops: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable">IsRegionallyDurable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType">SystemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops">Iops</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}. |

---

##### `IsRegionallyDurable`<sup>Required</sup> <a name="IsRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable"></a>

```go
IsRegionallyDurable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}.

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType"></a>

```go
SystemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops"></a>

```go
Iops *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}.

---

### PsqlDbSystemTimeouts <a name="PsqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

&psqldbsystem.PsqlDbSystemTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PsqlDbSystemCredentialsOutputReference <a name="PsqlDbSystemCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails">PutPasswordDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPasswordDetails` <a name="PutPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails"></a>

```go
func PutPasswordDetails(value PsqlDbSystemCredentialsPasswordDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails">PasswordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput">PasswordDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordDetails`<sup>Required</sup> <a name="PasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails"></a>

```go
func PasswordDetails() PsqlDbSystemCredentialsPasswordDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a>

---

##### `PasswordDetailsInput`<sup>Optional</sup> <a name="PasswordDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput"></a>

```go
func PasswordDetailsInput() PsqlDbSystemCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---


### PsqlDbSystemCredentialsPasswordDetailsOutputReference <a name="PsqlDbSystemCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemCredentialsPasswordDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemCredentialsPasswordDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion"></a>

```go
func ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput">PasswordTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType">PasswordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordTypeInput`<sup>Optional</sup> <a name="PasswordTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput"></a>

```go
func PasswordTypeInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```go
func PasswordType() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


### PsqlDbSystemInstancesDetailsList <a name="PsqlDbSystemInstancesDetailsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemInstancesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PsqlDbSystemInstancesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get"></a>

```go
func Get(index *f64) PsqlDbSystemInstancesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PsqlDbSystemInstancesDetailsOutputReference <a name="PsqlDbSystemInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemInstancesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PsqlDbSystemInstancesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PsqlDbSystemInstancesList <a name="PsqlDbSystemInstancesList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PsqlDbSystemInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get"></a>

```go
func Get(index *f64) PsqlDbSystemInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### PsqlDbSystemInstancesOutputReference <a name="PsqlDbSystemInstancesOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PsqlDbSystemInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a>

---


### PsqlDbSystemManagementPolicyBackupPolicyOutputReference <a name="PsqlDbSystemManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemManagementPolicyBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemManagementPolicyBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart">ResetBackupStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth">ResetDaysOfTheMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek">ResetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupStart` <a name="ResetBackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart"></a>

```go
func ResetBackupStart()
```

##### `ResetDaysOfTheMonth` <a name="ResetDaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth"></a>

```go
func ResetDaysOfTheMonth()
```

##### `ResetDaysOfTheWeek` <a name="ResetDaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek"></a>

```go
func ResetDaysOfTheWeek()
```

##### `ResetKind` <a name="ResetKind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind"></a>

```go
func ResetKind()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput">BackupStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput">DaysOfTheMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput">DaysOfTheWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart">BackupStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">DaysOfTheMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupStartInput`<sup>Optional</sup> <a name="BackupStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput"></a>

```go
func BackupStartInput() *string
```

- *Type:* *string

---

##### `DaysOfTheMonthInput`<sup>Optional</sup> <a name="DaysOfTheMonthInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput"></a>

```go
func DaysOfTheMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfTheWeekInput`<sup>Optional</sup> <a name="DaysOfTheWeekInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput"></a>

```go
func DaysOfTheWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BackupStart`<sup>Required</sup> <a name="BackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```go
func BackupStart() *string
```

- *Type:* *string

---

##### `DaysOfTheMonth`<sup>Required</sup> <a name="DaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```go
func DaysOfTheMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `DaysOfTheWeek`<sup>Required</sup> <a name="DaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```go
func DaysOfTheWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---


### PsqlDbSystemManagementPolicyOutputReference <a name="PsqlDbSystemManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemManagementPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemManagementPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy">PutBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy">ResetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart">ResetMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupPolicy` <a name="PutBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy"></a>

```go
func PutBackupPolicy(value PsqlDbSystemManagementPolicyBackupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `ResetBackupPolicy` <a name="ResetBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy"></a>

```go
func ResetBackupPolicy()
```

##### `ResetMaintenanceWindowStart` <a name="ResetMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart"></a>

```go
func ResetMaintenanceWindowStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput">BackupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput">MaintenanceWindowStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy"></a>

```go
func BackupPolicy() PsqlDbSystemManagementPolicyBackupPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a>

---

##### `BackupPolicyInput`<sup>Optional</sup> <a name="BackupPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput"></a>

```go
func BackupPolicyInput() PsqlDbSystemManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `MaintenanceWindowStartInput`<sup>Optional</sup> <a name="MaintenanceWindowStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput"></a>

```go
func MaintenanceWindowStartInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```go
func MaintenanceWindowStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---


### PsqlDbSystemNetworkDetailsOutputReference <a name="PsqlDbSystemNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemNetworkDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemNetworkDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp">ResetPrimaryDbEndpointPrivateIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPrimaryDbEndpointPrivateIp` <a name="ResetPrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp"></a>

```go
func ResetPrimaryDbEndpointPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput">PrimaryDbEndpointPrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">PrimaryDbEndpointPrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryDbEndpointPrivateIpInput`<sup>Optional</sup> <a name="PrimaryDbEndpointPrivateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput"></a>

```go
func PrimaryDbEndpointPrivateIpInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryDbEndpointPrivateIp`<sup>Required</sup> <a name="PrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```go
func PrimaryDbEndpointPrivateIp() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---


### PsqlDbSystemPatchOperationsList <a name="PsqlDbSystemPatchOperationsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemPatchOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PsqlDbSystemPatchOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get"></a>

```go
func Get(index *f64) PsqlDbSystemPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PsqlDbSystemPatchOperationsOutputReference <a name="PsqlDbSystemPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemPatchOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PsqlDbSystemPatchOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem">ResetSelectedItem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetPosition` <a name="ResetPosition" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetSelectedItem` <a name="ResetSelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem"></a>

```go
func ResetSelectedItem()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput">PositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput">SelectedItemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput">SelectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position">Position</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value">Value</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput"></a>

```go
func PositionInput() *string
```

- *Type:* *string

---

##### `SelectedItemInput`<sup>Optional</sup> <a name="SelectedItemInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput"></a>

```go
func SelectedItemInput() *string
```

- *Type:* *string

---

##### `SelectionInput`<sup>Optional</sup> <a name="SelectionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput"></a>

```go
func SelectionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position"></a>

```go
func Position() *string
```

- *Type:* *string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem"></a>

```go
func SelectedItem() *string
```

- *Type:* *string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection"></a>

```go
func Selection() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value"></a>

```go
func Value() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PsqlDbSystemSourceOutputReference <a name="PsqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides">ResetIsHavingRestoreConfigOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetIsHavingRestoreConfigOverrides` <a name="ResetIsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides"></a>

```go
func ResetIsHavingRestoreConfigOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput">IsHavingRestoreConfigOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides">IsHavingRestoreConfigOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `IsHavingRestoreConfigOverridesInput`<sup>Optional</sup> <a name="IsHavingRestoreConfigOverridesInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput"></a>

```go
func IsHavingRestoreConfigOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `IsHavingRestoreConfigOverrides`<sup>Required</sup> <a name="IsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```go
func IsHavingRestoreConfigOverrides() interface{}
```

- *Type:* interface{}

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---


### PsqlDbSystemStorageDetailsOutputReference <a name="PsqlDbSystemStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemStorageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemStorageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops">ResetIops</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetIops` <a name="ResetIops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops"></a>

```go
func ResetIops()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput">IsRegionallyDurableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput">SystemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops">Iops</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable">IsRegionallyDurable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType">SystemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *string
```

- *Type:* *string

---

##### `IsRegionallyDurableInput`<sup>Optional</sup> <a name="IsRegionallyDurableInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput"></a>

```go
func IsRegionallyDurableInput() interface{}
```

- *Type:* interface{}

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput"></a>

```go
func SystemTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops"></a>

```go
func Iops() *string
```

- *Type:* *string

---

##### `IsRegionallyDurable`<sup>Required</sup> <a name="IsRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```go
func IsRegionallyDurable() interface{}
```

- *Type:* interface{}

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType"></a>

```go
func SystemType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() PsqlDbSystemStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---


### PsqlDbSystemTimeoutsOutputReference <a name="PsqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/psqldbsystem"

psqldbsystem.NewPsqlDbSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PsqlDbSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




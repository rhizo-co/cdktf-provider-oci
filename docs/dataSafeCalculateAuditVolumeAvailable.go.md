# `dataSafeCalculateAuditVolumeAvailable` Submodule <a name="`dataSafeCalculateAuditVolumeAvailable` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeCalculateAuditVolumeAvailable <a name="DataSafeCalculateAuditVolumeAvailable" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available oci_data_safe_calculate_audit_volume_available}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.NewDataSafeCalculateAuditVolumeAvailable(scope Construct, id *string, config DataSafeCalculateAuditVolumeAvailableConfig) DataSafeCalculateAuditVolumeAvailable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig">DataSafeCalculateAuditVolumeAvailableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig">DataSafeCalculateAuditVolumeAvailableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetAuditCollectionStartTime">ResetAuditCollectionStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetDatabaseUniqueName">ResetDatabaseUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTrailLocations">ResetTrailLocations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeCalculateAuditVolumeAvailableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

---

##### `ResetAuditCollectionStartTime` <a name="ResetAuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetAuditCollectionStartTime"></a>

```go
func ResetAuditCollectionStartTime()
```

##### `ResetDatabaseUniqueName` <a name="ResetDatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetDatabaseUniqueName"></a>

```go
func ResetDatabaseUniqueName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrailLocations` <a name="ResetTrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTrailLocations"></a>

```go
func ResetTrailLocations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeCalculateAuditVolumeAvailable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeCalculateAuditVolumeAvailable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeCalculateAuditVolumeAvailable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeCalculateAuditVolumeAvailable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeCalculateAuditVolumeAvailable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.availableAuditVolumes">AvailableAuditVolumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference">DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTimeInput">AuditCollectionStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileIdInput">AuditProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueNameInput">DatabaseUniqueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocationsInput">TrailLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTime">AuditCollectionStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileId">AuditProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocations">TrailLocations</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailableAuditVolumes`<sup>Required</sup> <a name="AvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.availableAuditVolumes"></a>

```go
func AvailableAuditVolumes() DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeouts"></a>

```go
func Timeouts() DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference">DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference</a>

---

##### `AuditCollectionStartTimeInput`<sup>Optional</sup> <a name="AuditCollectionStartTimeInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTimeInput"></a>

```go
func AuditCollectionStartTimeInput() *string
```

- *Type:* *string

---

##### `AuditProfileIdInput`<sup>Optional</sup> <a name="AuditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileIdInput"></a>

```go
func AuditProfileIdInput() *string
```

- *Type:* *string

---

##### `DatabaseUniqueNameInput`<sup>Optional</sup> <a name="DatabaseUniqueNameInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueNameInput"></a>

```go
func DatabaseUniqueNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrailLocationsInput`<sup>Optional</sup> <a name="TrailLocationsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocationsInput"></a>

```go
func TrailLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditCollectionStartTime`<sup>Required</sup> <a name="AuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTime"></a>

```go
func AuditCollectionStartTime() *string
```

- *Type:* *string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileId"></a>

```go
func AuditProfileId() *string
```

- *Type:* *string

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueName"></a>

```go
func DatabaseUniqueName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TrailLocations`<sup>Required</sup> <a name="TrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocations"></a>

```go
func TrailLocations() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

&datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes {

}
```


### DataSafeCalculateAuditVolumeAvailableConfig <a name="DataSafeCalculateAuditVolumeAvailableConfig" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

&datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuditProfileId: *string,
	AuditCollectionStartTime: *string,
	DatabaseUniqueName: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts,
	TrailLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditProfileId">AuditProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditCollectionStartTime">AuditCollectionStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.trailLocations">TrailLocations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditProfileId"></a>

```go
AuditProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}.

---

##### `AuditCollectionStartTime`<sup>Optional</sup> <a name="AuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditCollectionStartTime"></a>

```go
AuditCollectionStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}.

---

##### `DatabaseUniqueName`<sup>Optional</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.databaseUniqueName"></a>

```go
DatabaseUniqueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.timeouts"></a>

```go
Timeouts DataSafeCalculateAuditVolumeAvailableTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#timeouts DataSafeCalculateAuditVolumeAvailable#timeouts}

---

##### `TrailLocations`<sup>Optional</sup> <a name="TrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.trailLocations"></a>

```go
TrailLocations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}.

---

### DataSafeCalculateAuditVolumeAvailableTimeouts <a name="DataSafeCalculateAuditVolumeAvailableTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

&datasafecalculateauditvolumeavailable.DataSafeCalculateAuditVolumeAvailableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#create DataSafeCalculateAuditVolumeAvailable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#delete DataSafeCalculateAuditVolumeAvailable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#update DataSafeCalculateAuditVolumeAvailable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#create DataSafeCalculateAuditVolumeAvailable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#delete DataSafeCalculateAuditVolumeAvailable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#update DataSafeCalculateAuditVolumeAvailable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.NewDataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get"></a>

```go
func Get(index *f64) DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.NewDataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.auditProfileId">AuditProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.monthInConsideration">MonthInConsideration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.trailLocation">TrailLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.volume">Volume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.auditProfileId"></a>

```go
func AuditProfileId() *string
```

- *Type:* *string

---

##### `MonthInConsideration`<sup>Required</sup> <a name="MonthInConsideration" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.monthInConsideration"></a>

```go
func MonthInConsideration() *string
```

- *Type:* *string

---

##### `TrailLocation`<sup>Required</sup> <a name="TrailLocation" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.trailLocation"></a>

```go
func TrailLocation() *string
```

- *Type:* *string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.volume"></a>

```go
func Volume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes</a>

---


### DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference <a name="DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafecalculateauditvolumeavailable"

datasafecalculateauditvolumeavailable.NewDataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




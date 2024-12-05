# `databaseAutonomousContainerDatabaseDataguardAssociation` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociation <a name="DatabaseAutonomousContainerDatabaseDataguardAssociation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association oci_database_autonomous_container_database_dataguard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.NewDatabaseAutonomousContainerDatabaseDataguardAssociation(scope Construct, id *string, config DatabaseAutonomousContainerDatabaseDataguardAssociationConfig) DatabaseAutonomousContainerDatabaseDataguardAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig">PutPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetAutonomousContainerDatabaseDataguardAssociationId">ResetAutonomousContainerDatabaseDataguardAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetFastStartFailOverLagLimitInSeconds">ResetFastStartFailOverLagLimitInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetIsAutomaticFailoverEnabled">ResetIsAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseBackupConfig">ResetPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseCompartmentId">ResetPeerAutonomousContainerDatabaseCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousVmClusterId">ResetPeerAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerCloudAutonomousVmClusterId">ResetPeerCloudAutonomousVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerDbUniqueName">ResetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetStandbyMaintenanceBufferInDays">ResetStandbyMaintenanceBufferInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPeerAutonomousContainerDatabaseBackupConfig` <a name="PutPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig"></a>

```go
func PutPeerAutonomousContainerDatabaseBackupConfig(value DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putPeerAutonomousContainerDatabaseBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>

---

##### `ResetAutonomousContainerDatabaseDataguardAssociationId` <a name="ResetAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetAutonomousContainerDatabaseDataguardAssociationId"></a>

```go
func ResetAutonomousContainerDatabaseDataguardAssociationId()
```

##### `ResetFastStartFailOverLagLimitInSeconds` <a name="ResetFastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetFastStartFailOverLagLimitInSeconds"></a>

```go
func ResetFastStartFailOverLagLimitInSeconds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAutomaticFailoverEnabled` <a name="ResetIsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetIsAutomaticFailoverEnabled"></a>

```go
func ResetIsAutomaticFailoverEnabled()
```

##### `ResetPeerAutonomousContainerDatabaseBackupConfig` <a name="ResetPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseBackupConfig"></a>

```go
func ResetPeerAutonomousContainerDatabaseBackupConfig()
```

##### `ResetPeerAutonomousContainerDatabaseCompartmentId` <a name="ResetPeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousContainerDatabaseCompartmentId"></a>

```go
func ResetPeerAutonomousContainerDatabaseCompartmentId()
```

##### `ResetPeerAutonomousVmClusterId` <a name="ResetPeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerAutonomousVmClusterId"></a>

```go
func ResetPeerAutonomousVmClusterId()
```

##### `ResetPeerCloudAutonomousVmClusterId` <a name="ResetPeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerCloudAutonomousVmClusterId"></a>

```go
func ResetPeerCloudAutonomousVmClusterId()
```

##### `ResetPeerDbUniqueName` <a name="ResetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetPeerDbUniqueName"></a>

```go
func ResetPeerDbUniqueName()
```

##### `ResetStandbyMaintenanceBufferInDays` <a name="ResetStandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetStandbyMaintenanceBufferInDays"></a>

```go
func ResetStandbyMaintenanceBufferInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseAutonomousContainerDatabaseDataguardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag">ApplyLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate">ApplyRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig">PeerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId">PeerAutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId">PeerAutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState">PeerLifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole">PeerRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged">TimeLastRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced">TimeLastSynced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag">TransportLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput">AutonomousContainerDatabaseDataguardAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput">AutonomousContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSecondsInput">FastStartFailOverLagLimitInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabledInput">IsAutomaticFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfigInput">PeerAutonomousContainerDatabaseBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentIdInput">PeerAutonomousContainerDatabaseCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayNameInput">PeerAutonomousContainerDatabaseDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterIdInput">PeerAutonomousVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterIdInput">PeerCloudAutonomousVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueNameInput">PeerDbUniqueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionModeInput">ProtectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDaysInput">StandbyMaintenanceBufferInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds">FastStartFailOverLagLimitInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled">IsAutomaticFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId">PeerAutonomousContainerDatabaseCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName">PeerAutonomousContainerDatabaseDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId">PeerAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays">StandbyMaintenanceBufferInDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyLag"></a>

```go
func ApplyLag() *string
```

- *Type:* *string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.applyRate"></a>

```go
func ApplyRate() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseBackupConfig`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```go
func PeerAutonomousContainerDatabaseBackupConfig() DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference</a>

---

##### `PeerAutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDataguardAssociationId"></a>

```go
func PeerAutonomousContainerDatabaseDataguardAssociationId() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseId"></a>

```go
func PeerAutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `PeerLifecycleState`<sup>Required</sup> <a name="PeerLifecycleState" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerLifecycleState"></a>

```go
func PeerLifecycleState() *string
```

- *Type:* *string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerRole"></a>

```go
func PeerRole() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRoleChanged`<sup>Required</sup> <a name="TimeLastRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastRoleChanged"></a>

```go
func TimeLastRoleChanged() *string
```

- *Type:* *string

---

##### `TimeLastSynced`<sup>Required</sup> <a name="TimeLastSynced" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeLastSynced"></a>

```go
func TimeLastSynced() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeouts"></a>

```go
func Timeouts() DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference</a>

---

##### `TransportLag`<sup>Required</sup> <a name="TransportLag" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.transportLag"></a>

```go
func TransportLag() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseDataguardAssociationIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseDataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```go
func AutonomousContainerDatabaseDataguardAssociationIdInput() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseIdInput"></a>

```go
func AutonomousContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `FastStartFailOverLagLimitInSecondsInput`<sup>Optional</sup> <a name="FastStartFailOverLagLimitInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSecondsInput"></a>

```go
func FastStartFailOverLagLimitInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="IsAutomaticFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabledInput"></a>

```go
func IsAutomaticFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PeerAutonomousContainerDatabaseBackupConfigInput`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseBackupConfigInput"></a>

```go
func PeerAutonomousContainerDatabaseBackupConfigInput() DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---

##### `PeerAutonomousContainerDatabaseCompartmentIdInput`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseCompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentIdInput"></a>

```go
func PeerAutonomousContainerDatabaseCompartmentIdInput() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseDisplayNameInput`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseDisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayNameInput"></a>

```go
func PeerAutonomousContainerDatabaseDisplayNameInput() *string
```

- *Type:* *string

---

##### `PeerAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="PeerAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterIdInput"></a>

```go
func PeerAutonomousVmClusterIdInput() *string
```

- *Type:* *string

---

##### `PeerCloudAutonomousVmClusterIdInput`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterIdInput"></a>

```go
func PeerCloudAutonomousVmClusterIdInput() *string
```

- *Type:* *string

---

##### `PeerDbUniqueNameInput`<sup>Optional</sup> <a name="PeerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueNameInput"></a>

```go
func PeerDbUniqueNameInput() *string
```

- *Type:* *string

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionModeInput"></a>

```go
func ProtectionModeInput() *string
```

- *Type:* *string

---

##### `StandbyMaintenanceBufferInDaysInput`<sup>Optional</sup> <a name="StandbyMaintenanceBufferInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDaysInput"></a>

```go
func StandbyMaintenanceBufferInDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Required</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```go
func AutonomousContainerDatabaseDataguardAssociationId() *string
```

- *Type:* *string

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.autonomousContainerDatabaseId"></a>

```go
func AutonomousContainerDatabaseId() *string
```

- *Type:* *string

---

##### `FastStartFailOverLagLimitInSeconds`<sup>Required</sup> <a name="FastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.fastStartFailOverLagLimitInSeconds"></a>

```go
func FastStartFailOverLagLimitInSeconds() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutomaticFailoverEnabled`<sup>Required</sup> <a name="IsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.isAutomaticFailoverEnabled"></a>

```go
func IsAutomaticFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `PeerAutonomousContainerDatabaseCompartmentId`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```go
func PeerAutonomousContainerDatabaseCompartmentId() *string
```

- *Type:* *string

---

##### `PeerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousContainerDatabaseDisplayName"></a>

```go
func PeerAutonomousContainerDatabaseDisplayName() *string
```

- *Type:* *string

---

##### `PeerAutonomousVmClusterId`<sup>Required</sup> <a name="PeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerAutonomousVmClusterId"></a>

```go
func PeerAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `PeerCloudAutonomousVmClusterId`<sup>Required</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerCloudAutonomousVmClusterId"></a>

```go
func PeerCloudAutonomousVmClusterId() *string
```

- *Type:* *string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.peerDbUniqueName"></a>

```go
func PeerDbUniqueName() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

##### `StandbyMaintenanceBufferInDays`<sup>Required</sup> <a name="StandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.standbyMaintenanceBufferInDays"></a>

```go
func StandbyMaintenanceBufferInDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

&databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousContainerDatabaseId: *string,
	PeerAutonomousContainerDatabaseDisplayName: *string,
	ProtectionMode: *string,
	AutonomousContainerDatabaseDataguardAssociationId: *string,
	FastStartFailOverLagLimitInSeconds: *f64,
	Id: *string,
	IsAutomaticFailoverEnabled: interface{},
	PeerAutonomousContainerDatabaseBackupConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig,
	PeerAutonomousContainerDatabaseCompartmentId: *string,
	PeerAutonomousVmClusterId: *string,
	PeerCloudAutonomousVmClusterId: *string,
	PeerDbUniqueName: *string,
	StandbyMaintenanceBufferInDays: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseDisplayName">PeerAutonomousContainerDatabaseDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId">AutonomousContainerDatabaseDataguardAssociationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.fastStartFailOverLagLimitInSeconds">FastStartFailOverLagLimitInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.isAutomaticFailoverEnabled">IsAutomaticFailoverEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseBackupConfig">PeerAutonomousContainerDatabaseBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | peer_autonomous_container_database_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseCompartmentId">PeerAutonomousContainerDatabaseCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousVmClusterId">PeerAutonomousVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerCloudAutonomousVmClusterId">PeerCloudAutonomousVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.standbyMaintenanceBufferInDays">StandbyMaintenanceBufferInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseId"></a>

```go
AutonomousContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_id}.

---

##### `PeerAutonomousContainerDatabaseDisplayName`<sup>Required</sup> <a name="PeerAutonomousContainerDatabaseDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseDisplayName"></a>

```go
PeerAutonomousContainerDatabaseDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_display_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_display_name}.

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.protectionMode"></a>

```go
ProtectionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#protection_mode DatabaseAutonomousContainerDatabaseDataguardAssociation#protection_mode}.

---

##### `AutonomousContainerDatabaseDataguardAssociationId`<sup>Optional</sup> <a name="AutonomousContainerDatabaseDataguardAssociationId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```go
AutonomousContainerDatabaseDataguardAssociationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociation#autonomous_container_database_dataguard_association_id}.

---

##### `FastStartFailOverLagLimitInSeconds`<sup>Optional</sup> <a name="FastStartFailOverLagLimitInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.fastStartFailOverLagLimitInSeconds"></a>

```go
FastStartFailOverLagLimitInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#fast_start_fail_over_lag_limit_in_seconds DatabaseAutonomousContainerDatabaseDataguardAssociation#fast_start_fail_over_lag_limit_in_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutomaticFailoverEnabled`<sup>Optional</sup> <a name="IsAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.isAutomaticFailoverEnabled"></a>

```go
IsAutomaticFailoverEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#is_automatic_failover_enabled DatabaseAutonomousContainerDatabaseDataguardAssociation#is_automatic_failover_enabled}.

---

##### `PeerAutonomousContainerDatabaseBackupConfig`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseBackupConfig"></a>

```go
PeerAutonomousContainerDatabaseBackupConfig DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

peer_autonomous_container_database_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_backup_config DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_backup_config}

---

##### `PeerAutonomousContainerDatabaseCompartmentId`<sup>Optional</sup> <a name="PeerAutonomousContainerDatabaseCompartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousContainerDatabaseCompartmentId"></a>

```go
PeerAutonomousContainerDatabaseCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_container_database_compartment_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_container_database_compartment_id}.

---

##### `PeerAutonomousVmClusterId`<sup>Optional</sup> <a name="PeerAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerAutonomousVmClusterId"></a>

```go
PeerAutonomousVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_autonomous_vm_cluster_id}.

---

##### `PeerCloudAutonomousVmClusterId`<sup>Optional</sup> <a name="PeerCloudAutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerCloudAutonomousVmClusterId"></a>

```go
PeerCloudAutonomousVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_cloud_autonomous_vm_cluster_id DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_cloud_autonomous_vm_cluster_id}.

---

##### `PeerDbUniqueName`<sup>Optional</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.peerDbUniqueName"></a>

```go
PeerDbUniqueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#peer_db_unique_name DatabaseAutonomousContainerDatabaseDataguardAssociation#peer_db_unique_name}.

---

##### `StandbyMaintenanceBufferInDays`<sup>Optional</sup> <a name="StandbyMaintenanceBufferInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.standbyMaintenanceBufferInDays"></a>

```go
StandbyMaintenanceBufferInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#standby_maintenance_buffer_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#standby_maintenance_buffer_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationConfig.property.timeouts"></a>

```go
Timeouts DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociation#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

&databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig {
	BackupDestinationDetails: interface{},
	RecoveryWindowInDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>interface{}</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}. |

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.backupDestinationDetails"></a>

```go
BackupDestinationDetails interface{}
```

- *Type:* interface{}

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#backup_destination_details DatabaseAutonomousContainerDatabaseDataguardAssociation#backup_destination_details}

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig.property.recoveryWindowInDays"></a>

```go
RecoveryWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#recovery_window_in_days DatabaseAutonomousContainerDatabaseDataguardAssociation#recovery_window_in_days}.

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

&databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
	Type: *string,
	DbrsPolicyId: *string,
	Id: *string,
	InternetProxy: *string,
	VpcPassword: *string,
	VpcUser: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy">InternetProxy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword">VpcPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser">VpcUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#type DatabaseAutonomousContainerDatabaseDataguardAssociation#type}.

---

##### `DbrsPolicyId`<sup>Optional</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```go
DbrsPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#dbrs_policy_id DatabaseAutonomousContainerDatabaseDataguardAssociation#dbrs_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#id DatabaseAutonomousContainerDatabaseDataguardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetProxy`<sup>Optional</sup> <a name="InternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.internetProxy"></a>

```go
InternetProxy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#internet_proxy DatabaseAutonomousContainerDatabaseDataguardAssociation#internet_proxy}.

---

##### `VpcPassword`<sup>Optional</sup> <a name="VpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcPassword"></a>

```go
VpcPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_password DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_password}.

---

##### `VpcUser`<sup>Optional</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetails.property.vpcUser"></a>

```go
VpcUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#vpc_user DatabaseAutonomousContainerDatabaseDataguardAssociation#vpc_user}.

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

&databaseautonomouscontainerdatabasedataguardassociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#create DatabaseAutonomousContainerDatabaseDataguardAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#delete DatabaseAutonomousContainerDatabaseDataguardAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association#update DatabaseAutonomousContainerDatabaseDataguardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.NewDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get"></a>

```go
func Get(index *f64) DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.NewDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">ResetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy">ResetInternetProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword">ResetVpcPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser">ResetVpcUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbrsPolicyId` <a name="ResetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```go
func ResetDbrsPolicyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetInternetProxy` <a name="ResetInternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```go
func ResetInternetProxy()
```

##### `ResetVpcPassword` <a name="ResetVpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```go
func ResetVpcPassword()
```

##### `ResetVpcUser` <a name="ResetVpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```go
func ResetVpcUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">DbrsPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput">InternetProxyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput">VpcPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput">VpcUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">InternetProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">VpcPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">VpcUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbrsPolicyIdInput`<sup>Optional</sup> <a name="DbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```go
func DbrsPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternetProxyInput`<sup>Optional</sup> <a name="InternetProxyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```go
func InternetProxyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcPasswordInput`<sup>Optional</sup> <a name="VpcPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```go
func VpcPasswordInput() *string
```

- *Type:* *string

---

##### `VpcUserInput`<sup>Optional</sup> <a name="VpcUserInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```go
func VpcUserInput() *string
```

- *Type:* *string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```go
func DbrsPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternetProxy`<sup>Required</sup> <a name="InternetProxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```go
func InternetProxy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcPassword`<sup>Required</sup> <a name="VpcPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```go
func VpcPassword() *string
```

- *Type:* *string

---

##### `VpcUser`<sup>Required</sup> <a name="VpcUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```go
func VpcUser() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.NewDatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails"></a>

```go
func PutBackupDestinationDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```go
func ResetBackupDestinationDetails()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```go
func ResetRecoveryWindowInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetails"></a>

```go
func BackupDestinationDetails() DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigBackupDestinationDetailsList</a>

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```go
func BackupDestinationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```go
func RecoveryWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```go
func RecoveryWindowInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig">DatabaseAutonomousContainerDatabaseDataguardAssociationPeerAutonomousContainerDatabaseBackupConfig</a>

---


### DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseautonomouscontainerdatabasedataguardassociation"

databaseautonomouscontainerdatabasedataguardassociation.NewDatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociation.DatabaseAutonomousContainerDatabaseDataguardAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




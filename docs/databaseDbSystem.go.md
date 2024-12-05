# `databaseDbSystem` Submodule <a name="`databaseDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystem <a name="DatabaseDbSystem" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system oci_database_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystem(scope Construct, id *string, config DatabaseDbSystemConfig) DatabaseDbSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig">DatabaseDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig">DatabaseDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome">PutDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions">PutDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails">PutMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds">ResetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId">ResetBackupSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition">ResetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage">ResetDataStoragePercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb">ResetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions">ResetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy">ResetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains">ResetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails">ResetMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb">ResetRecoStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId">ResetSourceDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup">ResetSparseDiskgroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode">ResetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value DatabaseDbSystemDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `PutDbHome` <a name="PutDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome"></a>

```go
func PutDbHome(value DatabaseDbSystemDbHome)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbHome.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `PutDbSystemOptions` <a name="PutDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions"></a>

```go
func PutDbSystemOptions(value DatabaseDbSystemDbSystemOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `PutMaintenanceWindowDetails` <a name="PutMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails"></a>

```go
func PutMaintenanceWindowDetails(value DatabaseDbSystemMaintenanceWindowDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putMaintenanceWindowDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseDbSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

---

##### `ResetBackupNetworkNsgIds` <a name="ResetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupNetworkNsgIds"></a>

```go
func ResetBackupNetworkNsgIds()
```

##### `ResetBackupSubnetId` <a name="ResetBackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetBackupSubnetId"></a>

```go
func ResetBackupSubnetId()
```

##### `ResetClusterName` <a name="ResetClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetDatabaseEdition` <a name="ResetDatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDatabaseEdition"></a>

```go
func ResetDatabaseEdition()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetDataStoragePercentage` <a name="ResetDataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStoragePercentage"></a>

```go
func ResetDataStoragePercentage()
```

##### `ResetDataStorageSizeInGb` <a name="ResetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDataStorageSizeInGb"></a>

```go
func ResetDataStorageSizeInGb()
```

##### `ResetDbSystemOptions` <a name="ResetDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDbSystemOptions"></a>

```go
func ResetDbSystemOptions()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDiskRedundancy` <a name="ResetDiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDiskRedundancy"></a>

```go
func ResetDiskRedundancy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetFaultDomains` <a name="ResetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFaultDomains"></a>

```go
func ResetFaultDomains()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetKmsKeyVersionId"></a>

```go
func ResetKmsKeyVersionId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetMaintenanceWindowDetails` <a name="ResetMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetMaintenanceWindowDetails"></a>

```go
func ResetMaintenanceWindowDetails()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetRecoStorageSizeInGb` <a name="ResetRecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetRecoStorageSizeInGb"></a>

```go
func ResetRecoStorageSizeInGb()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSecurityAttributes"></a>

```go
func ResetSecurityAttributes()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceDbSystemId` <a name="ResetSourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSourceDbSystemId"></a>

```go
func ResetSourceDbSystemId()
```

##### `ResetSparseDiskgroup` <a name="ResetSparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetSparseDiskgroup"></a>

```go
func ResetSparseDiskgroup()
```

##### `ResetStorageVolumePerformanceMode` <a name="ResetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetStorageVolumePerformanceMode"></a>

```go
func ResetStorageVolumePerformanceMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.DatabaseDbSystem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.DatabaseDbSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.DatabaseDbSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.DatabaseDbSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome">DbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp">PointInTimeDataDiskCloneTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName">ScanDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds">VipIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput">BackupNetworkNsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput">BackupSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput">DataStoragePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput">DataStorageSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput">DbHomeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput">DbSystemOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput">DiskRedundancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput">FaultDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput">MaintenanceWindowDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput">RecoStorageSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput">SourceDbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput">SparseDiskgroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput">StorageVolumePerformanceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId">BackupSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb">RecoStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId">SourceDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup">SparseDiskgroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() DatabaseDbSystemDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference">DatabaseDbSystemDataCollectionOptionsOutputReference</a>

---

##### `DbHome`<sup>Required</sup> <a name="DbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHome"></a>

```go
func DbHome() DatabaseDbSystemDbHomeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference">DatabaseDbSystemDbHomeOutputReference</a>

---

##### `DbSystemOptions`<sup>Required</sup> <a name="DbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptions"></a>

```go
func DbSystemOptions() DatabaseDbSystemDbSystemOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference">DatabaseDbSystemDbSystemOptionsOutputReference</a>

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.iormConfigCache"></a>

```go
func IormConfigCache() DatabaseDbSystemIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList">DatabaseDbSystemIormConfigCacheList</a>

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastMaintenanceRunId"></a>

```go
func LastMaintenanceRunId() *string
```

- *Type:* *string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lastPatchHistoryEntryId"></a>

```go
func LastPatchHistoryEntryId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DatabaseDbSystemMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList">DatabaseDbSystemMaintenanceWindowList</a>

---

##### `MaintenanceWindowDetails`<sup>Required</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetails"></a>

```go
func MaintenanceWindowDetails() DatabaseDbSystemMaintenanceWindowDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference">DatabaseDbSystemMaintenanceWindowDetailsOutputReference</a>

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.memorySizeInGbs"></a>

```go
func MemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nextMaintenanceRunId"></a>

```go
func NextMaintenanceRunId() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `PointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="PointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.pointInTimeDataDiskCloneTimestamp"></a>

```go
func PointInTimeDataDiskCloneTimestamp() *string
```

- *Type:* *string

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsName"></a>

```go
func ScanDnsName() *string
```

- *Type:* *string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanDnsRecordId"></a>

```go
func ScanDnsRecordId() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeouts"></a>

```go
func Timeouts() DatabaseDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference">DatabaseDbSystemTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.vipIds"></a>

```go
func VipIds() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIdsInput`<sup>Optional</sup> <a name="BackupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIdsInput"></a>

```go
func BackupNetworkNsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupSubnetIdInput`<sup>Optional</sup> <a name="BackupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetIdInput"></a>

```go
func BackupSubnetIdInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEditionInput"></a>

```go
func DatabaseEditionInput() *string
```

- *Type:* *string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() DatabaseDbSystemDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---

##### `DataStoragePercentageInput`<sup>Optional</sup> <a name="DataStoragePercentageInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentageInput"></a>

```go
func DataStoragePercentageInput() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGbInput`<sup>Optional</sup> <a name="DataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGbInput"></a>

```go
func DataStorageSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `DbHomeInput`<sup>Optional</sup> <a name="DbHomeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbHomeInput"></a>

```go
func DbHomeInput() DatabaseDbSystemDbHome
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---

##### `DbSystemOptionsInput`<sup>Optional</sup> <a name="DbSystemOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dbSystemOptionsInput"></a>

```go
func DbSystemOptionsInput() DatabaseDbSystemDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiskRedundancyInput`<sup>Optional</sup> <a name="DiskRedundancyInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancyInput"></a>

```go
func DiskRedundancyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `FaultDomainsInput`<sup>Optional</sup> <a name="FaultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomainsInput"></a>

```go
func FaultDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionIdInput"></a>

```go
func KmsKeyVersionIdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowDetailsInput`<sup>Optional</sup> <a name="MaintenanceWindowDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.maintenanceWindowDetailsInput"></a>

```go
func MaintenanceWindowDetailsInput() DatabaseDbSystemMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `RecoStorageSizeInGbInput`<sup>Optional</sup> <a name="RecoStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGbInput"></a>

```go
func RecoStorageSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributesInput"></a>

```go
func SecurityAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SourceDbSystemIdInput`<sup>Optional</sup> <a name="SourceDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemIdInput"></a>

```go
func SourceDbSystemIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SparseDiskgroupInput`<sup>Optional</sup> <a name="SparseDiskgroupInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroupInput"></a>

```go
func SparseDiskgroupInput() interface{}
```

- *Type:* interface{}

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageVolumePerformanceModeInput`<sup>Optional</sup> <a name="StorageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceModeInput"></a>

```go
func StorageVolumePerformanceModeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupNetworkNsgIds"></a>

```go
func BackupNetworkNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.backupSubnetId"></a>

```go
func BackupSubnetId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DataStoragePercentage`<sup>Required</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStoragePercentage"></a>

```go
func DataStoragePercentage() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.diskRedundancy"></a>

```go
func DiskRedundancy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.faultDomains"></a>

```go
func FaultDomains() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `RecoStorageSizeInGb`<sup>Required</sup> <a name="RecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.recoStorageSizeInGb"></a>

```go
func RecoStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.securityAttributes"></a>

```go
func SecurityAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceDbSystemId`<sup>Required</sup> <a name="SourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sourceDbSystemId"></a>

```go
func SourceDbSystemId() *string
```

- *Type:* *string

---

##### `SparseDiskgroup`<sup>Required</sup> <a name="SparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sparseDiskgroup"></a>

```go
func SparseDiskgroup() interface{}
```

- *Type:* interface{}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `StorageVolumePerformanceMode`<sup>Required</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.storageVolumePerformanceMode"></a>

```go
func StorageVolumePerformanceMode() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemConfig <a name="DatabaseDbSystemConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	DbHome: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemDbHome,
	Hostname: *string,
	Shape: *string,
	SshPublicKeys: *[]*string,
	SubnetId: *string,
	BackupNetworkNsgIds: *[]*string,
	BackupSubnetId: *string,
	ClusterName: *string,
	CpuCoreCount: *f64,
	DatabaseEdition: *string,
	DataCollectionOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions,
	DataStoragePercentage: *f64,
	DataStorageSizeInGb: *f64,
	DbSystemOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions,
	DefinedTags: *map[string]*string,
	DiskRedundancy: *string,
	DisplayName: *string,
	Domain: *string,
	FaultDomains: *[]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	KmsKeyId: *string,
	KmsKeyVersionId: *string,
	LicenseModel: *string,
	MaintenanceWindowDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails,
	NodeCount: *f64,
	NsgIds: *[]*string,
	PrivateIp: *string,
	RecoStorageSizeInGb: *f64,
	SecurityAttributes: *map[string]*string,
	Source: *string,
	SourceDbSystemId: *string,
	SparseDiskgroup: interface{},
	StorageVolumePerformanceMode: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome">DbHome</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | db_home block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId">BackupSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails">MaintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | maintenance_window_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb">RecoStorageSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId">SourceDbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup">SparseDiskgroup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#availability_domain DatabaseDbSystem#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#compartment_id DatabaseDbSystem#compartment_id}.

---

##### `DbHome`<sup>Required</sup> <a name="DbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbHome"></a>

```go
DbHome DatabaseDbSystemDbHome
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_home DatabaseDbSystem#db_home}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hostname DatabaseDbSystem#hostname}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#shape DatabaseDbSystem#shape}.

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ssh_public_keys DatabaseDbSystem#ssh_public_keys}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#subnet_id DatabaseDbSystem#subnet_id}.

---

##### `BackupNetworkNsgIds`<sup>Optional</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupNetworkNsgIds"></a>

```go
BackupNetworkNsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_network_nsg_ids DatabaseDbSystem#backup_network_nsg_ids}.

---

##### `BackupSubnetId`<sup>Optional</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.backupSubnetId"></a>

```go
BackupSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_subnet_id DatabaseDbSystem#backup_subnet_id}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cluster_name DatabaseDbSystem#cluster_name}.

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#cpu_core_count DatabaseDbSystem#cpu_core_count}.

---

##### `DatabaseEdition`<sup>Optional</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.databaseEdition"></a>

```go
DatabaseEdition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_edition DatabaseDbSystem#database_edition}.

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataCollectionOptions"></a>

```go
DataCollectionOptions DatabaseDbSystemDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_collection_options DatabaseDbSystem#data_collection_options}

---

##### `DataStoragePercentage`<sup>Optional</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStoragePercentage"></a>

```go
DataStoragePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_percentage DatabaseDbSystem#data_storage_percentage}.

---

##### `DataStorageSizeInGb`<sup>Optional</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dataStorageSizeInGb"></a>

```go
DataStorageSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#data_storage_size_in_gb DatabaseDbSystem#data_storage_size_in_gb}.

---

##### `DbSystemOptions`<sup>Optional</sup> <a name="DbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.dbSystemOptions"></a>

```go
DbSystemOptions DatabaseDbSystemDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_system_options DatabaseDbSystem#db_system_options}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `DiskRedundancy`<sup>Optional</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.diskRedundancy"></a>

```go
DiskRedundancy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#disk_redundancy DatabaseDbSystem#disk_redundancy}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#domain DatabaseDbSystem#domain}.

---

##### `FaultDomains`<sup>Optional</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.faultDomains"></a>

```go
FaultDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#fault_domains DatabaseDbSystem#fault_domains}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.kmsKeyVersionId"></a>

```go
KmsKeyVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#license_model DatabaseDbSystem#license_model}.

---

##### `MaintenanceWindowDetails`<sup>Optional</sup> <a name="MaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.maintenanceWindowDetails"></a>

```go
MaintenanceWindowDetails DatabaseDbSystemMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

maintenance_window_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#maintenance_window_details DatabaseDbSystem#maintenance_window_details}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#node_count DatabaseDbSystem#node_count}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#nsg_ids DatabaseDbSystem#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#private_ip DatabaseDbSystem#private_ip}.

---

##### `RecoStorageSizeInGb`<sup>Optional</sup> <a name="RecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.recoStorageSizeInGb"></a>

```go
RecoStorageSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#reco_storage_size_in_gb DatabaseDbSystem#reco_storage_size_in_gb}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.securityAttributes"></a>

```go
SecurityAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#security_attributes DatabaseDbSystem#security_attributes}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source DatabaseDbSystem#source}.

---

##### `SourceDbSystemId`<sup>Optional</sup> <a name="SourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sourceDbSystemId"></a>

```go
SourceDbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#source_db_system_id DatabaseDbSystem#source_db_system_id}.

---

##### `SparseDiskgroup`<sup>Optional</sup> <a name="SparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.sparseDiskgroup"></a>

```go
SparseDiskgroup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#sparse_diskgroup DatabaseDbSystem#sparse_diskgroup}.

---

##### `StorageVolumePerformanceMode`<sup>Optional</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.storageVolumePerformanceMode"></a>

```go
StorageVolumePerformanceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_volume_performance_mode DatabaseDbSystem#storage_volume_performance_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeouts"></a>

```go
Timeouts DatabaseDbSystemTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts">DatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#timeouts DatabaseDbSystem#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_zone DatabaseDbSystem#time_zone}.

---

### DatabaseDbSystemDataCollectionOptions <a name="DatabaseDbSystemDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsHealthMonitoringEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_diagnostics_events_enabled DatabaseDbSystem#is_diagnostics_events_enabled}.

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```go
IsHealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_health_monitoring_enabled DatabaseDbSystem#is_health_monitoring_enabled}.

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_incident_logs_enabled DatabaseDbSystem#is_incident_logs_enabled}.

---

### DatabaseDbSystemDbHome <a name="DatabaseDbSystemDbHome" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDbHome {
	Database: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase,
	CreateAsync: interface{},
	DatabaseSoftwareImageId: *string,
	DbVersion: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync">CreateAsync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion">DbVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.database"></a>

```go
Database DatabaseDbSystemDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database DatabaseDbSystem#database}

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.createAsync"></a>

```go
CreateAsync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create_async DatabaseDbSystem#create_async}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.databaseSoftwareImageId"></a>

```go
DatabaseSoftwareImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_version DatabaseDbSystem#db_version}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#display_name DatabaseDbSystem#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

### DatabaseDbSystemDbHomeDatabase <a name="DatabaseDbSystemDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDbHomeDatabase {
	AdminPassword: *string,
	BackupId: *string,
	BackupTdePassword: *string,
	CharacterSet: *string,
	DatabaseId: *string,
	DatabaseSoftwareImageId: *string,
	DbBackupConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig,
	DbDomain: *string,
	DbName: *string,
	DbUniqueName: *string,
	DbWorkload: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	KmsKeyId: *string,
	KmsKeyVersionId: *string,
	NcharacterSet: *string,
	PdbName: *string,
	PluggableDatabases: *[]*string,
	TdeWalletPassword: *string,
	TimeStampForPointInTimeRecovery: *string,
	VaultId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId">BackupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword">BackupTdePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain">DbDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName">DbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName">PdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases">PluggableDatabases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery">TimeStampForPointInTimeRecovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}. |

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#admin_password DatabaseDbSystem#admin_password}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_id DatabaseDbSystem#backup_id}.

---

##### `BackupTdePassword`<sup>Optional</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.backupTdePassword"></a>

```go
BackupTdePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_tde_password DatabaseDbSystem#backup_tde_password}.

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#character_set DatabaseDbSystem#character_set}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_id DatabaseDbSystem#database_id}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.databaseSoftwareImageId"></a>

```go
DatabaseSoftwareImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#database_software_image_id DatabaseDbSystem#database_software_image_id}.

---

##### `DbBackupConfig`<sup>Optional</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbBackupConfig"></a>

```go
DbBackupConfig DatabaseDbSystemDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_backup_config DatabaseDbSystem#db_backup_config}

---

##### `DbDomain`<sup>Optional</sup> <a name="DbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbDomain"></a>

```go
DbDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_domain DatabaseDbSystem#db_domain}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_name DatabaseDbSystem#db_name}.

---

##### `DbUniqueName`<sup>Optional</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbUniqueName"></a>

```go
DbUniqueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_unique_name DatabaseDbSystem#db_unique_name}.

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.dbWorkload"></a>

```go
DbWorkload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#db_workload DatabaseDbSystem#db_workload}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#defined_tags DatabaseDbSystem#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#freeform_tags DatabaseDbSystem#freeform_tags}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_id DatabaseDbSystem#kms_key_id}.

---

##### `KmsKeyVersionId`<sup>Optional</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.kmsKeyVersionId"></a>

```go
KmsKeyVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#kms_key_version_id DatabaseDbSystem#kms_key_version_id}.

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.ncharacterSet"></a>

```go
NcharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#ncharacter_set DatabaseDbSystem#ncharacter_set}.

---

##### `PdbName`<sup>Optional</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pdbName"></a>

```go
PdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pdb_name DatabaseDbSystem#pdb_name}.

---

##### `PluggableDatabases`<sup>Optional</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.pluggableDatabases"></a>

```go
PluggableDatabases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#pluggable_databases DatabaseDbSystem#pluggable_databases}.

---

##### `TdeWalletPassword`<sup>Optional</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.tdeWalletPassword"></a>

```go
TdeWalletPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#tde_wallet_password DatabaseDbSystem#tde_wallet_password}.

---

##### `TimeStampForPointInTimeRecovery`<sup>Optional</sup> <a name="TimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```go
TimeStampForPointInTimeRecovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#time_stamp_for_point_in_time_recovery DatabaseDbSystem#time_stamp_for_point_in_time_recovery}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#vault_id DatabaseDbSystem#vault_id}.

---

### DatabaseDbSystemDbHomeDatabaseConnectionStrings <a name="DatabaseDbSystemDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings {

}
```


### DatabaseDbSystemDbHomeDatabaseDbBackupConfig <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig {
	AutoBackupEnabled: interface{},
	AutoBackupWindow: *string,
	AutoFullBackupDay: *string,
	AutoFullBackupWindow: *string,
	BackupDeletionPolicy: *string,
	BackupDestinationDetails: interface{},
	RecoveryWindowInDays: *f64,
	RunImmediateFullBackup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code>interface{}</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}. |

---

##### `AutoBackupEnabled`<sup>Optional</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```go
AutoBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_enabled DatabaseDbSystem#auto_backup_enabled}.

---

##### `AutoBackupWindow`<sup>Optional</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```go
AutoBackupWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_backup_window DatabaseDbSystem#auto_backup_window}.

---

##### `AutoFullBackupDay`<sup>Optional</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```go
AutoFullBackupDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_day DatabaseDbSystem#auto_full_backup_day}.

---

##### `AutoFullBackupWindow`<sup>Optional</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```go
AutoFullBackupWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#auto_full_backup_window DatabaseDbSystem#auto_full_backup_window}.

---

##### `BackupDeletionPolicy`<sup>Optional</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```go
BackupDeletionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_deletion_policy DatabaseDbSystem#backup_deletion_policy}.

---

##### `BackupDestinationDetails`<sup>Optional</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```go
BackupDestinationDetails interface{}
```

- *Type:* interface{}

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#backup_destination_details DatabaseDbSystem#backup_destination_details}

---

##### `RecoveryWindowInDays`<sup>Optional</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```go
RecoveryWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#recovery_window_in_days DatabaseDbSystem#recovery_window_in_days}.

---

##### `RunImmediateFullBackup`<sup>Optional</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```go
RunImmediateFullBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#run_immediate_full_backup DatabaseDbSystem#run_immediate_full_backup}.

---

### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
	DbrsPolicyId: *string,
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}. |

---

##### `DbrsPolicyId`<sup>Optional</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```go
DbrsPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#dbrs_policy_id DatabaseDbSystem#dbrs_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#id DatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#type DatabaseDbSystem#type}.

---

### DatabaseDbSystemDbSystemOptions <a name="DatabaseDbSystemDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemDbSystemOptions {
	StorageManagement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}. |

---

##### `StorageManagement`<sup>Optional</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions.property.storageManagement"></a>

```go
StorageManagement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#storage_management DatabaseDbSystem#storage_management}.

---

### DatabaseDbSystemIormConfigCache <a name="DatabaseDbSystemIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemIormConfigCache {

}
```


### DatabaseDbSystemIormConfigCacheDbPlans <a name="DatabaseDbSystemIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemIormConfigCacheDbPlans {

}
```


### DatabaseDbSystemMaintenanceWindow <a name="DatabaseDbSystemMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemMaintenanceWindow {

}
```


### DatabaseDbSystemMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek {

}
```


### DatabaseDbSystemMaintenanceWindowDetails <a name="DatabaseDbSystemMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemMaintenanceWindowDetails {
	CustomActionTimeoutInMins: *f64,
	DaysOfWeek: interface{},
	HoursOfDay: *[]*f64,
	IsCustomActionTimeoutEnabled: interface{},
	IsMonthlyPatchingEnabled: interface{},
	LeadTimeInWeeks: *f64,
	Months: interface{},
	PatchingMode: *string,
	Preference: *string,
	SkipRu: interface{},
	WeeksOfMonth: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek">DaysOfWeek</a></code> | <code>interface{}</code> | days_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months">Months</a></code> | <code>interface{}</code> | months block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference">Preference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu">SkipRu</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.customActionTimeoutInMins"></a>

```go
CustomActionTimeoutInMins *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#custom_action_timeout_in_mins DatabaseDbSystem#custom_action_timeout_in_mins}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.daysOfWeek"></a>

```go
DaysOfWeek interface{}
```

- *Type:* interface{}

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#days_of_week DatabaseDbSystem#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.hoursOfDay"></a>

```go
HoursOfDay *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#hours_of_day DatabaseDbSystem#hours_of_day}.

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isCustomActionTimeoutEnabled"></a>

```go
IsCustomActionTimeoutEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_custom_action_timeout_enabled DatabaseDbSystem#is_custom_action_timeout_enabled}.

---

##### `IsMonthlyPatchingEnabled`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.isMonthlyPatchingEnabled"></a>

```go
IsMonthlyPatchingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#is_monthly_patching_enabled DatabaseDbSystem#is_monthly_patching_enabled}.

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.leadTimeInWeeks"></a>

```go
LeadTimeInWeeks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#lead_time_in_weeks DatabaseDbSystem#lead_time_in_weeks}.

---

##### `Months`<sup>Optional</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.months"></a>

```go
Months interface{}
```

- *Type:* interface{}

months block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#months DatabaseDbSystem#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.patchingMode"></a>

```go
PatchingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#patching_mode DatabaseDbSystem#patching_mode}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.preference"></a>

```go
Preference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#preference DatabaseDbSystem#preference}.

---

##### `SkipRu`<sup>Optional</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.skipRu"></a>

```go
SkipRu interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#skip_ru DatabaseDbSystem#skip_ru}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#weeks_of_month DatabaseDbSystem#weeks_of_month}.

---

### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowDetailsMonths <a name="DatabaseDbSystemMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemMaintenanceWindowDetailsMonths {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonths.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#name DatabaseDbSystem#name}.

---

### DatabaseDbSystemMaintenanceWindowMonths <a name="DatabaseDbSystemMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemMaintenanceWindowMonths {

}
```


### DatabaseDbSystemTimeouts <a name="DatabaseDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

&databasedbsystem.DatabaseDbSystemTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#create DatabaseDbSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#delete DatabaseDbSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_system#update DatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemDataCollectionOptionsOutputReference <a name="DatabaseDbSystemDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```go
func ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```go
func IsHealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDataCollectionOptions">DatabaseDbSystemDataCollectionOptions</a>

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsList <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeDatabaseConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemDbHomeDatabaseConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">CdbDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">CdbIpDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CdbDefault`<sup>Required</sup> <a name="CdbDefault" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```go
func CdbDefault() *string
```

- *Type:* *string

---

##### `CdbIpDefault`<sup>Required</sup> <a name="CdbIpDefault" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```go
func CdbIpDefault() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemDbHomeDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStrings">DatabaseDbSystemDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">ResetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbrsPolicyId` <a name="ResetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```go
func ResetDbrsPolicyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">DbrsPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">DbrsPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbrsPolicyIdInput`<sup>Optional</sup> <a name="DbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```go
func DbrsPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DbrsPolicyId`<sup>Required</sup> <a name="DbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```go
func DbrsPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">PutBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">ResetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">ResetAutoBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">ResetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">ResetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">ResetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">ResetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">ResetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">ResetRunImmediateFullBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupDestinationDetails` <a name="PutBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```go
func PutBackupDestinationDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoBackupEnabled` <a name="ResetAutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```go
func ResetAutoBackupEnabled()
```

##### `ResetAutoBackupWindow` <a name="ResetAutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```go
func ResetAutoBackupWindow()
```

##### `ResetAutoFullBackupDay` <a name="ResetAutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```go
func ResetAutoFullBackupDay()
```

##### `ResetAutoFullBackupWindow` <a name="ResetAutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```go
func ResetAutoFullBackupWindow()
```

##### `ResetBackupDeletionPolicy` <a name="ResetBackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```go
func ResetBackupDeletionPolicy()
```

##### `ResetBackupDestinationDetails` <a name="ResetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```go
func ResetBackupDestinationDetails()
```

##### `ResetRecoveryWindowInDays` <a name="ResetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```go
func ResetRecoveryWindowInDays()
```

##### `ResetRunImmediateFullBackup` <a name="ResetRunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```go
func ResetRunImmediateFullBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">BackupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">AutoBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">AutoBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">AutoFullBackupDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">AutoFullBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">BackupDeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">BackupDestinationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">RecoveryWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">RunImmediateFullBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">AutoBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">AutoBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">AutoFullBackupDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">AutoFullBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">BackupDeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">RecoveryWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">RunImmediateFullBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupDestinationDetails`<sup>Required</sup> <a name="BackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```go
func BackupDestinationDetails() DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `AutoBackupEnabledInput`<sup>Optional</sup> <a name="AutoBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```go
func AutoBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoBackupWindowInput`<sup>Optional</sup> <a name="AutoBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```go
func AutoBackupWindowInput() *string
```

- *Type:* *string

---

##### `AutoFullBackupDayInput`<sup>Optional</sup> <a name="AutoFullBackupDayInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```go
func AutoFullBackupDayInput() *string
```

- *Type:* *string

---

##### `AutoFullBackupWindowInput`<sup>Optional</sup> <a name="AutoFullBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```go
func AutoFullBackupWindowInput() *string
```

- *Type:* *string

---

##### `BackupDeletionPolicyInput`<sup>Optional</sup> <a name="BackupDeletionPolicyInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```go
func BackupDeletionPolicyInput() *string
```

- *Type:* *string

---

##### `BackupDestinationDetailsInput`<sup>Optional</sup> <a name="BackupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```go
func BackupDestinationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `RecoveryWindowInDaysInput`<sup>Optional</sup> <a name="RecoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```go
func RecoveryWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `RunImmediateFullBackupInput`<sup>Optional</sup> <a name="RunImmediateFullBackupInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```go
func RunImmediateFullBackupInput() interface{}
```

- *Type:* interface{}

---

##### `AutoBackupEnabled`<sup>Required</sup> <a name="AutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```go
func AutoBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoBackupWindow`<sup>Required</sup> <a name="AutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```go
func AutoBackupWindow() *string
```

- *Type:* *string

---

##### `AutoFullBackupDay`<sup>Required</sup> <a name="AutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```go
func AutoFullBackupDay() *string
```

- *Type:* *string

---

##### `AutoFullBackupWindow`<sup>Required</sup> <a name="AutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```go
func AutoFullBackupWindow() *string
```

- *Type:* *string

---

##### `BackupDeletionPolicy`<sup>Required</sup> <a name="BackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```go
func BackupDeletionPolicy() *string
```

- *Type:* *string

---

##### `RecoveryWindowInDays`<sup>Required</sup> <a name="RecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```go
func RecoveryWindowInDays() *f64
```

- *Type:* *f64

---

##### `RunImmediateFullBackup`<sup>Required</sup> <a name="RunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```go
func RunImmediateFullBackup() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbSystemDbHomeDatabaseOutputReference <a name="DatabaseDbSystemDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemDbHomeDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig">PutDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword">ResetBackupTdePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig">ResetDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain">ResetDbDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName">ResetDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId">ResetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName">ResetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases">ResetPluggableDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword">ResetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">ResetTimeStampForPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId">ResetVaultId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbBackupConfig` <a name="PutDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```go
func PutDbBackupConfig(value DatabaseDbSystemDbHomeDatabaseDbBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `ResetBackupId` <a name="ResetBackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetBackupTdePassword` <a name="ResetBackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```go
func ResetBackupTdePassword()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```go
func ResetCharacterSet()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```go
func ResetDatabaseSoftwareImageId()
```

##### `ResetDbBackupConfig` <a name="ResetDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```go
func ResetDbBackupConfig()
```

##### `ResetDbDomain` <a name="ResetDbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbDomain"></a>

```go
func ResetDbDomain()
```

##### `ResetDbName` <a name="ResetDbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDbUniqueName` <a name="ResetDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```go
func ResetDbUniqueName()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```go
func ResetDbWorkload()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetKmsKeyVersionId` <a name="ResetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```go
func ResetKmsKeyVersionId()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```go
func ResetNcharacterSet()
```

##### `ResetPdbName` <a name="ResetPdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPdbName"></a>

```go
func ResetPdbName()
```

##### `ResetPluggableDatabases` <a name="ResetPluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```go
func ResetPluggableDatabases()
```

##### `ResetTdeWalletPassword` <a name="ResetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```go
func ResetTdeWalletPassword()
```

##### `ResetTimeStampForPointInTimeRecovery` <a name="ResetTimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```go
func ResetTimeStampForPointInTimeRecovery()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.resetVaultId"></a>

```go
func ResetVaultId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig">DbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput">BackupTdePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput">DbBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput">DbDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput">DbUniqueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">KmsKeyVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput">PdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">PluggableDatabasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">TdeWalletPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">TimeStampForPointInTimeRecoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword">BackupTdePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain">DbDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId">KmsKeyVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases">PluggableDatabases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword">TdeWalletPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">TimeStampForPointInTimeRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```go
func ConnectionStrings() DatabaseDbSystemDbHomeDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseConnectionStringsList">DatabaseDbSystemDbHomeDatabaseConnectionStringsList</a>

---

##### `DbBackupConfig`<sup>Required</sup> <a name="DbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```go
func DbBackupConfig() DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbSystemDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `BackupTdePasswordInput`<sup>Optional</sup> <a name="BackupTdePasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```go
func BackupTdePasswordInput() *string
```

- *Type:* *string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```go
func DatabaseSoftwareImageIdInput() *string
```

- *Type:* *string

---

##### `DbBackupConfigInput`<sup>Optional</sup> <a name="DbBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```go
func DbBackupConfigInput() DatabaseDbSystemDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseDbBackupConfig">DatabaseDbSystemDbHomeDatabaseDbBackupConfig</a>

---

##### `DbDomainInput`<sup>Optional</sup> <a name="DbDomainInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomainInput"></a>

```go
func DbDomainInput() *string
```

- *Type:* *string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DbUniqueNameInput`<sup>Optional</sup> <a name="DbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```go
func DbUniqueNameInput() *string
```

- *Type:* *string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```go
func DbWorkloadInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyVersionIdInput`<sup>Optional</sup> <a name="KmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```go
func KmsKeyVersionIdInput() *string
```

- *Type:* *string

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```go
func NcharacterSetInput() *string
```

- *Type:* *string

---

##### `PdbNameInput`<sup>Optional</sup> <a name="PdbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```go
func PdbNameInput() *string
```

- *Type:* *string

---

##### `PluggableDatabasesInput`<sup>Optional</sup> <a name="PluggableDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```go
func PluggableDatabasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TdeWalletPasswordInput`<sup>Optional</sup> <a name="TdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```go
func TdeWalletPasswordInput() *string
```

- *Type:* *string

---

##### `TimeStampForPointInTimeRecoveryInput`<sup>Optional</sup> <a name="TimeStampForPointInTimeRecoveryInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```go
func TimeStampForPointInTimeRecoveryInput() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `BackupTdePassword`<sup>Required</sup> <a name="BackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```go
func BackupTdePassword() *string
```

- *Type:* *string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```go
func DatabaseSoftwareImageId() *string
```

- *Type:* *string

---

##### `DbDomain`<sup>Required</sup> <a name="DbDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbDomain"></a>

```go
func DbDomain() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```go
func DbUniqueName() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `KmsKeyVersionId`<sup>Required</sup> <a name="KmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```go
func KmsKeyVersionId() *string
```

- *Type:* *string

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `PluggableDatabases`<sup>Required</sup> <a name="PluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```go
func PluggableDatabases() *[]*string
```

- *Type:* *[]*string

---

##### `TdeWalletPassword`<sup>Required</sup> <a name="TdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```go
func TdeWalletPassword() *string
```

- *Type:* *string

---

##### `TimeStampForPointInTimeRecovery`<sup>Required</sup> <a name="TimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```go
func TimeStampForPointInTimeRecovery() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---


### DatabaseDbSystemDbHomeOutputReference <a name="DatabaseDbSystemDbHomeOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbHomeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemDbHomeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase"></a>

```go
func PutDatabase(value DatabaseDbSystemDbHomeDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetCreateAsync"></a>

```go
func ResetCreateAsync()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDatabaseSoftwareImageId"></a>

```go
func ResetDatabaseSoftwareImageId()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDbVersion"></a>

```go
func ResetDbVersion()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation">DbHomeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput">CreateAsyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput">DatabaseInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync">CreateAsync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.database"></a>

```go
func Database() DatabaseDbSystemDbHomeDatabaseOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabaseOutputReference">DatabaseDbSystemDbHomeDatabaseOutputReference</a>

---

##### `DbHomeLocation`<sup>Required</sup> <a name="DbHomeLocation" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbHomeLocation"></a>

```go
func DbHomeLocation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lastPatchHistoryEntryId"></a>

```go
func LastPatchHistoryEntryId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsyncInput"></a>

```go
func CreateAsyncInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() DatabaseDbSystemDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeDatabase">DatabaseDbSystemDbHomeDatabase</a>

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageIdInput"></a>

```go
func DatabaseSoftwareImageIdInput() *string
```

- *Type:* *string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.createAsync"></a>

```go
func CreateAsync() interface{}
```

- *Type:* interface{}

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.databaseSoftwareImageId"></a>

```go
func DatabaseSoftwareImageId() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHomeOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemDbHome
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbHome">DatabaseDbSystemDbHome</a>

---


### DatabaseDbSystemDbSystemOptionsOutputReference <a name="DatabaseDbSystemDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemDbSystemOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemDbSystemOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement">ResetStorageManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageManagement` <a name="ResetStorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.resetStorageManagement"></a>

```go
func ResetStorageManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput">StorageManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```go
func StorageManagementInput() *string
```

- *Type:* *string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.storageManagement"></a>

```go
func StorageManagement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemDbSystemOptions">DatabaseDbSystemDbSystemOptions</a>

---


### DatabaseDbSystemIormConfigCacheDbPlansList <a name="DatabaseDbSystemIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemIormConfigCacheDbPlansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemIormConfigCacheDbPlansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemIormConfigCacheDbPlansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemIormConfigCacheDbPlansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```go
func FlashCacheLimit() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.share"></a>

```go
func Share() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlans">DatabaseDbSystemIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemIormConfigCacheList <a name="DatabaseDbSystemIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemIormConfigCacheList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemIormConfigCacheList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemIormConfigCacheOutputReference <a name="DatabaseDbSystemIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemIormConfigCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemIormConfigCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbPlans"></a>

```go
func DbPlans() DatabaseDbSystemIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheDbPlansList">DatabaseDbSystemIormConfigCacheDbPlansList</a>

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.objective"></a>

```go
func Objective() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemIormConfigCache">DatabaseDbSystemIormConfigCache</a>

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDaysOfWeekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemMaintenanceWindowDaysOfWeekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeek">DatabaseDbSystemMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsList <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDetailsMonthsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemMaintenanceWindowDetailsMonthsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseDbSystemMaintenanceWindowDetailsOutputReference <a name="DatabaseDbSystemMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemMaintenanceWindowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek">PutDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths">PutMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled">ResetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu">ResetSkipRu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaysOfWeek` <a name="PutDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek"></a>

```go
func PutDaysOfWeek(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMonths` <a name="PutMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths"></a>

```go
func PutMonths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.putMonths.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetCustomActionTimeoutInMins"></a>

```go
func ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetHoursOfDay"></a>

```go
func ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```go
func ResetIsCustomActionTimeoutEnabled()
```

##### `ResetIsMonthlyPatchingEnabled` <a name="ResetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetIsMonthlyPatchingEnabled"></a>

```go
func ResetIsMonthlyPatchingEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetLeadTimeInWeeks"></a>

```go
func ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetMonths"></a>

```go
func ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPatchingMode"></a>

```go
func ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetPreference"></a>

```go
func ResetPreference()
```

##### `ResetSkipRu` <a name="ResetSkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetSkipRu"></a>

```go
func ResetSkipRu()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput">IsMonthlyPatchingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput">MonthsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput">SkipRuInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu">SkipRu</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.months"></a>

```go
func Months() DatabaseDbSystemMaintenanceWindowDetailsMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsMonthsList">DatabaseDbSystemMaintenanceWindowDetailsMonthsList</a>

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMinsInput"></a>

```go
func CustomActionTimeoutInMinsInput() *f64
```

- *Type:* *f64

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() interface{}
```

- *Type:* interface{}

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDayInput"></a>

```go
func HoursOfDayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```go
func IsCustomActionTimeoutEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="IsMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```go
func IsMonthlyPatchingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeksInput"></a>

```go
func LeadTimeInWeeksInput() *f64
```

- *Type:* *f64

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.monthsInput"></a>

```go
func MonthsInput() interface{}
```

- *Type:* interface{}

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingModeInput"></a>

```go
func PatchingModeInput() *string
```

- *Type:* *string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *string
```

- *Type:* *string

---

##### `SkipRuInput`<sup>Optional</sup> <a name="SkipRuInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRuInput"></a>

```go
func SkipRuInput() interface{}
```

- *Type:* interface{}

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```go
func IsMonthlyPatchingEnabled() interface{}
```

- *Type:* interface{}

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```go
func SkipRu() interface{}
```

- *Type:* interface{}

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDetails">DatabaseDbSystemMaintenanceWindowDetails</a>

---


### DatabaseDbSystemMaintenanceWindowList <a name="DatabaseDbSystemMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemMaintenanceWindowMonthsList <a name="DatabaseDbSystemMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowMonthsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemMaintenanceWindowMonthsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowMonthsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemMaintenanceWindowMonthsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonths">DatabaseDbSystemMaintenanceWindowMonths</a>

---


### DatabaseDbSystemMaintenanceWindowOutputReference <a name="DatabaseDbSystemMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu">SkipRu</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() DatabaseDbSystemMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowDaysOfWeekList">DatabaseDbSystemMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```go
func IsMonthlyPatchingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() DatabaseDbSystemMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowMonthsList">DatabaseDbSystemMaintenanceWindowMonthsList</a>

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `SkipRu`<sup>Required</sup> <a name="SkipRu" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.skipRu"></a>

```go
func SkipRu() BooleanList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanList

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemMaintenanceWindow">DatabaseDbSystemMaintenanceWindow</a>

---


### DatabaseDbSystemTimeoutsOutputReference <a name="DatabaseDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystem"

databasedbsystem.NewDatabaseDbSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystem.DatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




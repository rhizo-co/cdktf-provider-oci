# `databaseCloudVmCluster` Submodule <a name="`databaseCloudVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudVmCluster <a name="DatabaseCloudVmCluster" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster oci_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmCluster(scope Construct, id *string, config DatabaseCloudVmClusterConfig) DatabaseCloudVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig">DatabaseCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig">DatabaseCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails">PutCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails">PutFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetBackupNetworkNsgIds">ResetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCloudAutomationUpdateDetails">ResetCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStoragePercentage">ResetDataStoragePercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStorageSizeInTbs">ResetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbNodeStorageSizeInGbs">ResetDbNodeStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbServers">ResetDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFileSystemConfigurationDetails">ResetFileSystemConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsLocalBackupEnabled">ResetIsLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsSparseDiskgroupEnabled">ResetIsSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetMemorySizeInGbs">ResetMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOcpuCount">ResetOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetPrivateZoneId">ResetPrivateZoneId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcpSsl">ResetScanListenerPortTcpSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSystemVersion">ResetSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudAutomationUpdateDetails` <a name="PutCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails"></a>

```go
func PutCloudAutomationUpdateDetails(value DatabaseCloudVmClusterCloudAutomationUpdateDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putCloudAutomationUpdateDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value DatabaseCloudVmClusterDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---

##### `PutFileSystemConfigurationDetails` <a name="PutFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails"></a>

```go
func PutFileSystemConfigurationDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putFileSystemConfigurationDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseCloudVmClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

---

##### `ResetBackupNetworkNsgIds` <a name="ResetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetBackupNetworkNsgIds"></a>

```go
func ResetBackupNetworkNsgIds()
```

##### `ResetCloudAutomationUpdateDetails` <a name="ResetCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCloudAutomationUpdateDetails"></a>

```go
func ResetCloudAutomationUpdateDetails()
```

##### `ResetClusterName` <a name="ResetClusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetCreateAsync"></a>

```go
func ResetCreateAsync()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetDataStoragePercentage` <a name="ResetDataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStoragePercentage"></a>

```go
func ResetDataStoragePercentage()
```

##### `ResetDataStorageSizeInTbs` <a name="ResetDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDataStorageSizeInTbs"></a>

```go
func ResetDataStorageSizeInTbs()
```

##### `ResetDbNodeStorageSizeInGbs` <a name="ResetDbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbNodeStorageSizeInGbs"></a>

```go
func ResetDbNodeStorageSizeInGbs()
```

##### `ResetDbServers` <a name="ResetDbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDbServers"></a>

```go
func ResetDbServers()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetFileSystemConfigurationDetails` <a name="ResetFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFileSystemConfigurationDetails"></a>

```go
func ResetFileSystemConfigurationDetails()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLocalBackupEnabled` <a name="ResetIsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsLocalBackupEnabled"></a>

```go
func ResetIsLocalBackupEnabled()
```

##### `ResetIsSparseDiskgroupEnabled` <a name="ResetIsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetIsSparseDiskgroupEnabled"></a>

```go
func ResetIsSparseDiskgroupEnabled()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetMemorySizeInGbs` <a name="ResetMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetMemorySizeInGbs"></a>

```go
func ResetMemorySizeInGbs()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetOcpuCount` <a name="ResetOcpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetOcpuCount"></a>

```go
func ResetOcpuCount()
```

##### `ResetPrivateZoneId` <a name="ResetPrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetPrivateZoneId"></a>

```go
func ResetPrivateZoneId()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcp"></a>

```go
func ResetScanListenerPortTcp()
```

##### `ResetScanListenerPortTcpSsl` <a name="ResetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetScanListenerPortTcpSsl"></a>

```go
func ResetScanListenerPortTcpSsl()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSecurityAttributes"></a>

```go
func ResetSecurityAttributes()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetSystemVersion` <a name="ResetSystemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetSystemVersion"></a>

```go
func ResetSystemVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.DatabaseCloudVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.DatabaseCloudVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.DatabaseCloudVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.DatabaseCloudVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetails">CloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference">DatabaseCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetails">FileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList">DatabaseCloudVmClusterFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList">DatabaseCloudVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lastUpdateHistoryEntryId">LastUpdateHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.listenerPort">ListenerPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsName">ScanDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.storageSizeInGbs">StorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference">DatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.vipIds">VipIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIdsInput">BackupNetworkNsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetIdInput">BackupSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetailsInput">CloudAutomationUpdateDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsyncInput">CreateAsyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentageInput">DataStoragePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbsInput">DataStorageSizeInTbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbsInput">DbNodeStorageSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServersInput">DbServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetailsInput">FileSystemConfigurationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersionInput">GiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabledInput">IsLocalBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabledInput">IsSparseDiskgroupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbsInput">MemorySizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCountInput">OcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneIdInput">PrivateZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSslInput">ScanListenerPortTcpSslInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersionInput">SystemVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetId">BackupSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsync">CreateAsync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneId">PrivateZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CloudAutomationUpdateDetails`<sup>Required</sup> <a name="CloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetails"></a>

```go
func CloudAutomationUpdateDetails() DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference</a>

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() DatabaseCloudVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference">DatabaseCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.diskRedundancy"></a>

```go
func DiskRedundancy() *string
```

- *Type:* *string

---

##### `FileSystemConfigurationDetails`<sup>Required</sup> <a name="FileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetails"></a>

```go
func FileSystemConfigurationDetails() DatabaseCloudVmClusterFileSystemConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList">DatabaseCloudVmClusterFileSystemConfigurationDetailsList</a>

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.iormConfigCache"></a>

```go
func IormConfigCache() DatabaseCloudVmClusterIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList">DatabaseCloudVmClusterIormConfigCacheList</a>

---

##### `LastUpdateHistoryEntryId`<sup>Required</sup> <a name="LastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lastUpdateHistoryEntryId"></a>

```go
func LastUpdateHistoryEntryId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.listenerPort"></a>

```go
func ListenerPort() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsName"></a>

```go
func ScanDnsName() *string
```

- *Type:* *string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanDnsRecordId"></a>

```go
func ScanDnsRecordId() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageSizeInGbs`<sup>Required</sup> <a name="StorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.storageSizeInGbs"></a>

```go
func StorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeouts"></a>

```go
func Timeouts() DatabaseCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference">DatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.vipIds"></a>

```go
func VipIds() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIdsInput`<sup>Optional</sup> <a name="BackupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIdsInput"></a>

```go
func BackupNetworkNsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupSubnetIdInput`<sup>Optional</sup> <a name="BackupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetIdInput"></a>

```go
func BackupSubnetIdInput() *string
```

- *Type:* *string

---

##### `CloudAutomationUpdateDetailsInput`<sup>Optional</sup> <a name="CloudAutomationUpdateDetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudAutomationUpdateDetailsInput"></a>

```go
func CloudAutomationUpdateDetailsInput() DatabaseCloudVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureIdInput"></a>

```go
func CloudExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsyncInput"></a>

```go
func CreateAsyncInput() interface{}
```

- *Type:* interface{}

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() DatabaseCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---

##### `DataStoragePercentageInput`<sup>Optional</sup> <a name="DataStoragePercentageInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentageInput"></a>

```go
func DataStoragePercentageInput() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbsInput`<sup>Optional</sup> <a name="DataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbsInput"></a>

```go
func DataStorageSizeInTbsInput() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbsInput`<sup>Optional</sup> <a name="DbNodeStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbsInput"></a>

```go
func DbNodeStorageSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServersInput"></a>

```go
func DbServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `FileSystemConfigurationDetailsInput`<sup>Optional</sup> <a name="FileSystemConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.fileSystemConfigurationDetailsInput"></a>

```go
func FileSystemConfigurationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GiVersionInput`<sup>Optional</sup> <a name="GiVersionInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersionInput"></a>

```go
func GiVersionInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLocalBackupEnabledInput`<sup>Optional</sup> <a name="IsLocalBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabledInput"></a>

```go
func IsLocalBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="IsSparseDiskgroupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabledInput"></a>

```go
func IsSparseDiskgroupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `MemorySizeInGbsInput`<sup>Optional</sup> <a name="MemorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbsInput"></a>

```go
func MemorySizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OcpuCountInput`<sup>Optional</sup> <a name="OcpuCountInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCountInput"></a>

```go
func OcpuCountInput() *f64
```

- *Type:* *f64

---

##### `PrivateZoneIdInput`<sup>Optional</sup> <a name="PrivateZoneIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneIdInput"></a>

```go
func PrivateZoneIdInput() *string
```

- *Type:* *string

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpInput"></a>

```go
func ScanListenerPortTcpInput() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSslInput`<sup>Optional</sup> <a name="ScanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSslInput"></a>

```go
func ScanListenerPortTcpSslInput() *f64
```

- *Type:* *f64

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributesInput"></a>

```go
func SecurityAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `SystemVersionInput`<sup>Optional</sup> <a name="SystemVersionInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersionInput"></a>

```go
func SystemVersionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupNetworkNsgIds"></a>

```go
func BackupNetworkNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.backupSubnetId"></a>

```go
func BackupSubnetId() *string
```

- *Type:* *string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.createAsync"></a>

```go
func CreateAsync() interface{}
```

- *Type:* interface{}

---

##### `DataStoragePercentage`<sup>Required</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStoragePercentage"></a>

```go
func DataStoragePercentage() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbNodeStorageSizeInGbs"></a>

```go
func DbNodeStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.dbServers"></a>

```go
func DbServers() *[]*string
```

- *Type:* *[]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isLocalBackupEnabled"></a>

```go
func IsLocalBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSparseDiskgroupEnabled`<sup>Required</sup> <a name="IsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```go
func IsSparseDiskgroupEnabled() interface{}
```

- *Type:* interface{}

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.memorySizeInGbs"></a>

```go
func MemorySizeInGbs() *f64
```

- *Type:* *f64

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `PrivateZoneId`<sup>Required</sup> <a name="PrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.privateZoneId"></a>

```go
func PrivateZoneId() *string
```

- *Type:* *string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.securityAttributes"></a>

```go
func SecurityAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.systemVersion"></a>

```go
func SystemVersion() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudVmClusterCloudAutomationUpdateDetails <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails {
	ApplyUpdateTimePreference: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference,
	FreezePeriod: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod,
	IsEarlyAdoptionEnabled: interface{},
	IsFreezePeriodEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference">ApplyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | apply_update_time_preference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.freezePeriod">FreezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | freeze_period block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled">IsEarlyAdoptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled">IsFreezePeriodEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}. |

---

##### `ApplyUpdateTimePreference`<sup>Optional</sup> <a name="ApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.applyUpdateTimePreference"></a>

```go
ApplyUpdateTimePreference DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

apply_update_time_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_time_preference DatabaseCloudVmCluster#apply_update_time_preference}

---

##### `FreezePeriod`<sup>Optional</sup> <a name="FreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.freezePeriod"></a>

```go
FreezePeriod DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

freeze_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period DatabaseCloudVmCluster#freeze_period}

---

##### `IsEarlyAdoptionEnabled`<sup>Optional</sup> <a name="IsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isEarlyAdoptionEnabled"></a>

```go
IsEarlyAdoptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}.

---

##### `IsFreezePeriodEnabled`<sup>Optional</sup> <a name="IsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails.property.isFreezePeriodEnabled"></a>

```go
IsFreezePeriodEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}.

---

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference {
	ApplyUpdatePreferredEndTime: *string,
	ApplyUpdatePreferredStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime">ApplyUpdatePreferredEndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime">ApplyUpdatePreferredStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}. |

---

##### `ApplyUpdatePreferredEndTime`<sup>Optional</sup> <a name="ApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredEndTime"></a>

```go
ApplyUpdatePreferredEndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}.

---

##### `ApplyUpdatePreferredStartTime`<sup>Optional</sup> <a name="ApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference.property.applyUpdatePreferredStartTime"></a>

```go
ApplyUpdatePreferredStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}.

---

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod {
	FreezePeriodEndTime: *string,
	FreezePeriodStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime">FreezePeriodEndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime">FreezePeriodStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}. |

---

##### `FreezePeriodEndTime`<sup>Optional</sup> <a name="FreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodEndTime"></a>

```go
FreezePeriodEndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}.

---

##### `FreezePeriodStartTime`<sup>Optional</sup> <a name="FreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod.property.freezePeriodStartTime"></a>

```go
FreezePeriodStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}.

---

### DatabaseCloudVmClusterConfig <a name="DatabaseCloudVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupSubnetId: *string,
	CloudExadataInfrastructureId: *string,
	CompartmentId: *string,
	CpuCoreCount: *f64,
	DisplayName: *string,
	GiVersion: *string,
	Hostname: *string,
	SshPublicKeys: *[]*string,
	SubnetId: *string,
	BackupNetworkNsgIds: *[]*string,
	CloudAutomationUpdateDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails,
	ClusterName: *string,
	CreateAsync: interface{},
	DataCollectionOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions,
	DataStoragePercentage: *f64,
	DataStorageSizeInTbs: *f64,
	DbNodeStorageSizeInGbs: *f64,
	DbServers: *[]*string,
	DefinedTags: *map[string]*string,
	Domain: *string,
	FileSystemConfigurationDetails: interface{},
	FreeformTags: *map[string]*string,
	Id: *string,
	IsLocalBackupEnabled: interface{},
	IsSparseDiskgroupEnabled: interface{},
	LicenseModel: *string,
	MemorySizeInGbs: *f64,
	NsgIds: *[]*string,
	OcpuCount: *f64,
	PrivateZoneId: *string,
	ScanListenerPortTcp: *f64,
	ScanListenerPortTcpSsl: *f64,
	SecurityAttributes: *map[string]*string,
	SubscriptionId: *string,
	SystemVersion: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupSubnetId">BackupSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.giVersion">GiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudAutomationUpdateDetails">CloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | cloud_automation_update_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.createAsync">CreateAsync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbServers">DbServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.fileSystemConfigurationDetails">FileSystemConfigurationDetails</a></code> | <code>interface{}</code> | file_system_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.privateZoneId">PrivateZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupSubnetId"></a>

```go
BackupSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}.

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudExadataInfrastructureId"></a>

```go
CloudExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}.

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}.

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.giVersion"></a>

```go
GiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}.

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}.

---

##### `BackupNetworkNsgIds`<sup>Optional</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.backupNetworkNsgIds"></a>

```go
BackupNetworkNsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}.

---

##### `CloudAutomationUpdateDetails`<sup>Optional</sup> <a name="CloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.cloudAutomationUpdateDetails"></a>

```go
CloudAutomationUpdateDetails DatabaseCloudVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

cloud_automation_update_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cloud_automation_update_details DatabaseCloudVmCluster#cloud_automation_update_details}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}.

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.createAsync"></a>

```go
CreateAsync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}.

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataCollectionOptions"></a>

```go
DataCollectionOptions DatabaseCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_collection_options DatabaseCloudVmCluster#data_collection_options}

---

##### `DataStoragePercentage`<sup>Optional</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStoragePercentage"></a>

```go
DataStoragePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}.

---

##### `DataStorageSizeInTbs`<sup>Optional</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dataStorageSizeInTbs"></a>

```go
DataStorageSizeInTbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}.

---

##### `DbNodeStorageSizeInGbs`<sup>Optional</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbNodeStorageSizeInGbs"></a>

```go
DbNodeStorageSizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}.

---

##### `DbServers`<sup>Optional</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.dbServers"></a>

```go
DbServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}.

---

##### `FileSystemConfigurationDetails`<sup>Optional</sup> <a name="FileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.fileSystemConfigurationDetails"></a>

```go
FileSystemConfigurationDetails interface{}
```

- *Type:* interface{}

file_system_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_configuration_details DatabaseCloudVmCluster#file_system_configuration_details}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLocalBackupEnabled`<sup>Optional</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isLocalBackupEnabled"></a>

```go
IsLocalBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}.

---

##### `IsSparseDiskgroupEnabled`<sup>Optional</sup> <a name="IsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.isSparseDiskgroupEnabled"></a>

```go
IsSparseDiskgroupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}.

---

##### `MemorySizeInGbs`<sup>Optional</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.memorySizeInGbs"></a>

```go
MemorySizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}.

---

##### `OcpuCount`<sup>Optional</sup> <a name="OcpuCount" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.ocpuCount"></a>

```go
OcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}.

---

##### `PrivateZoneId`<sup>Optional</sup> <a name="PrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.privateZoneId"></a>

```go
PrivateZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}.

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcp"></a>

```go
ScanListenerPortTcp *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}.

---

##### `ScanListenerPortTcpSsl`<sup>Optional</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```go
ScanListenerPortTcpSsl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.securityAttributes"></a>

```go
SecurityAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}.

---

##### `SystemVersion`<sup>Optional</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.systemVersion"></a>

```go
SystemVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeouts"></a>

```go
Timeouts DatabaseCloudVmClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts">DatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#timeouts DatabaseCloudVmCluster#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}.

---

### DatabaseCloudVmClusterDataCollectionOptions <a name="DatabaseCloudVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsHealthMonitoringEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}.

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```go
IsHealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}.

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}.

---

### DatabaseCloudVmClusterFileSystemConfigurationDetails <a name="DatabaseCloudVmClusterFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterFileSystemConfigurationDetails {
	FileSystemSizeGb: *f64,
	MountPoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb">FileSystemSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.mountPoint">MountPoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}. |

---

##### `FileSystemSizeGb`<sup>Optional</sup> <a name="FileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.fileSystemSizeGb"></a>

```go
FileSystemSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}.

---

##### `MountPoint`<sup>Optional</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetails.property.mountPoint"></a>

```go
MountPoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}.

---

### DatabaseCloudVmClusterIormConfigCache <a name="DatabaseCloudVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterIormConfigCache {

}
```


### DatabaseCloudVmClusterIormConfigCacheDbPlans <a name="DatabaseCloudVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterIormConfigCacheDbPlans {

}
```


### DatabaseCloudVmClusterTimeouts <a name="DatabaseCloudVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

&databasecloudvmcluster.DatabaseCloudVmClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime">ResetApplyUpdatePreferredEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime">ResetApplyUpdatePreferredStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyUpdatePreferredEndTime` <a name="ResetApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredEndTime"></a>

```go
func ResetApplyUpdatePreferredEndTime()
```

##### `ResetApplyUpdatePreferredStartTime` <a name="ResetApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resetApplyUpdatePreferredStartTime"></a>

```go
func ResetApplyUpdatePreferredStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput">ApplyUpdatePreferredEndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput">ApplyUpdatePreferredStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">ApplyUpdatePreferredEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">ApplyUpdatePreferredStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyUpdatePreferredEndTimeInput`<sup>Optional</sup> <a name="ApplyUpdatePreferredEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTimeInput"></a>

```go
func ApplyUpdatePreferredEndTimeInput() *string
```

- *Type:* *string

---

##### `ApplyUpdatePreferredStartTimeInput`<sup>Optional</sup> <a name="ApplyUpdatePreferredStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTimeInput"></a>

```go
func ApplyUpdatePreferredStartTimeInput() *string
```

- *Type:* *string

---

##### `ApplyUpdatePreferredEndTime`<sup>Required</sup> <a name="ApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```go
func ApplyUpdatePreferredEndTime() *string
```

- *Type:* *string

---

##### `ApplyUpdatePreferredStartTime`<sup>Required</sup> <a name="ApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```go
func ApplyUpdatePreferredStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime">ResetFreezePeriodEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime">ResetFreezePeriodStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFreezePeriodEndTime` <a name="ResetFreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodEndTime"></a>

```go
func ResetFreezePeriodEndTime()
```

##### `ResetFreezePeriodStartTime` <a name="ResetFreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.resetFreezePeriodStartTime"></a>

```go
func ResetFreezePeriodStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput">FreezePeriodEndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput">FreezePeriodStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">FreezePeriodEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">FreezePeriodStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FreezePeriodEndTimeInput`<sup>Optional</sup> <a name="FreezePeriodEndTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTimeInput"></a>

```go
func FreezePeriodEndTimeInput() *string
```

- *Type:* *string

---

##### `FreezePeriodStartTimeInput`<sup>Optional</sup> <a name="FreezePeriodStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTimeInput"></a>

```go
func FreezePeriodStartTimeInput() *string
```

- *Type:* *string

---

##### `FreezePeriodEndTime`<sup>Required</sup> <a name="FreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```go
func FreezePeriodEndTime() *string
```

- *Type:* *string

---

##### `FreezePeriodStartTime`<sup>Required</sup> <a name="FreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```go
func FreezePeriodStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference <a name="DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference">PutApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod">PutFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference">ResetApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod">ResetFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled">ResetIsEarlyAdoptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled">ResetIsFreezePeriodEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplyUpdateTimePreference` <a name="PutApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference"></a>

```go
func PutApplyUpdateTimePreference(value DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putApplyUpdateTimePreference.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `PutFreezePeriod` <a name="PutFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod"></a>

```go
func PutFreezePeriod(value DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.putFreezePeriod.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `ResetApplyUpdateTimePreference` <a name="ResetApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetApplyUpdateTimePreference"></a>

```go
func ResetApplyUpdateTimePreference()
```

##### `ResetFreezePeriod` <a name="ResetFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetFreezePeriod"></a>

```go
func ResetFreezePeriod()
```

##### `ResetIsEarlyAdoptionEnabled` <a name="ResetIsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsEarlyAdoptionEnabled"></a>

```go
func ResetIsEarlyAdoptionEnabled()
```

##### `ResetIsFreezePeriodEnabled` <a name="ResetIsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.resetIsFreezePeriodEnabled"></a>

```go
func ResetIsFreezePeriodEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">ApplyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">FreezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput">ApplyUpdateTimePreferenceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput">FreezePeriodInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput">IsEarlyAdoptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput">IsFreezePeriodEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">IsEarlyAdoptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">IsFreezePeriodEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyUpdateTimePreference`<sup>Required</sup> <a name="ApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```go
func ApplyUpdateTimePreference() DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference</a>

---

##### `FreezePeriod`<sup>Required</sup> <a name="FreezePeriod" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```go
func FreezePeriod() DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference</a>

---

##### `ApplyUpdateTimePreferenceInput`<sup>Optional</sup> <a name="ApplyUpdateTimePreferenceInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreferenceInput"></a>

```go
func ApplyUpdateTimePreferenceInput() DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---

##### `FreezePeriodInput`<sup>Optional</sup> <a name="FreezePeriodInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.freezePeriodInput"></a>

```go
func FreezePeriodInput() DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod">DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod</a>

---

##### `IsEarlyAdoptionEnabledInput`<sup>Optional</sup> <a name="IsEarlyAdoptionEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabledInput"></a>

```go
func IsEarlyAdoptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsFreezePeriodEnabledInput`<sup>Optional</sup> <a name="IsFreezePeriodEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabledInput"></a>

```go
func IsFreezePeriodEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsEarlyAdoptionEnabled`<sup>Required</sup> <a name="IsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```go
func IsEarlyAdoptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsFreezePeriodEnabled`<sup>Required</sup> <a name="IsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```go
func IsFreezePeriodEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudVmClusterCloudAutomationUpdateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterCloudAutomationUpdateDetails">DatabaseCloudVmClusterCloudAutomationUpdateDetails</a>

---


### DatabaseCloudVmClusterDataCollectionOptionsOutputReference <a name="DatabaseCloudVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudVmClusterDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```go
func ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```go
func IsHealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterDataCollectionOptions">DatabaseCloudVmClusterDataCollectionOptions</a>

---


### DatabaseCloudVmClusterFileSystemConfigurationDetailsList <a name="DatabaseCloudVmClusterFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterFileSystemConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseCloudVmClusterFileSystemConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference <a name="DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb">ResetFileSystemSizeGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint">ResetMountPoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemSizeGb` <a name="ResetFileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetFileSystemSizeGb"></a>

```go
func ResetFileSystemSizeGb()
```

##### `ResetMountPoint` <a name="ResetMountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.resetMountPoint"></a>

```go
func ResetMountPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput">FileSystemSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">FileSystemSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemSizeGbInput`<sup>Optional</sup> <a name="FileSystemSizeGbInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGbInput"></a>

```go
func FileSystemSizeGbInput() *f64
```

- *Type:* *f64

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPointInput"></a>

```go
func MountPointInput() *string
```

- *Type:* *string

---

##### `FileSystemSizeGb`<sup>Required</sup> <a name="FileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```go
func FileSystemSizeGb() *f64
```

- *Type:* *f64

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseCloudVmClusterIormConfigCacheDbPlansList <a name="DatabaseCloudVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterIormConfigCacheDbPlansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseCloudVmClusterIormConfigCacheDbPlansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get"></a>

```go
func Get(index *f64) DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference <a name="DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans">DatabaseCloudVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```go
func FlashCacheLimit() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```go
func Share() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudVmClusterIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlans">DatabaseCloudVmClusterIormConfigCacheDbPlans</a>

---


### DatabaseCloudVmClusterIormConfigCacheList <a name="DatabaseCloudVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterIormConfigCacheList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseCloudVmClusterIormConfigCacheList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get"></a>

```go
func Get(index *f64) DatabaseCloudVmClusterIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseCloudVmClusterIormConfigCacheOutputReference <a name="DatabaseCloudVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterIormConfigCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseCloudVmClusterIormConfigCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList">DatabaseCloudVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache">DatabaseCloudVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```go
func DbPlans() DatabaseCloudVmClusterIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheDbPlansList">DatabaseCloudVmClusterIormConfigCacheDbPlansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.objective"></a>

```go
func Objective() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseCloudVmClusterIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterIormConfigCache">DatabaseCloudVmClusterIormConfigCache</a>

---


### DatabaseCloudVmClusterTimeoutsOutputReference <a name="DatabaseCloudVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasecloudvmcluster"

databasecloudvmcluster.NewDatabaseCloudVmClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseCloudVmClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseCloudVmCluster.DatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




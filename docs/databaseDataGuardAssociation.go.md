# `databaseDataGuardAssociation` Submodule <a name="`databaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDataGuardAssociation <a name="DatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.NewDatabaseDataGuardAssociation(scope Construct, id *string, config DatabaseDataGuardAssociationConfig) DatabaseDataGuardAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig">DatabaseDataGuardAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig">DatabaseDataGuardAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds">ResetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync">ResetCreateAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags">ResetDatabaseDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags">ResetDatabaseFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags">ResetDbSystemDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags">ResetDbSystemFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes">ResetDbSystemSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains">ResetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled">ResetIsActiveDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId">ResetPeerDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId">ResetPeerDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName">ResetPeerDbUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix">ResetPeerSidPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId">ResetPeerVmClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode">ResetStorageVolumePerformanceMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions"></a>

```go
func PutDataCollectionOptions(value DatabaseDataGuardAssociationDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseDataGuardAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetBackupNetworkNsgIds` <a name="ResetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetBackupNetworkNsgIds"></a>

```go
func ResetBackupNetworkNsgIds()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetCreateAsync` <a name="ResetCreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetCreateAsync"></a>

```go
func ResetCreateAsync()
```

##### `ResetDatabaseDefinedTags` <a name="ResetDatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseDefinedTags"></a>

```go
func ResetDatabaseDefinedTags()
```

##### `ResetDatabaseFreeformTags` <a name="ResetDatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseFreeformTags"></a>

```go
func ResetDatabaseFreeformTags()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDatabaseSoftwareImageId"></a>

```go
func ResetDatabaseSoftwareImageId()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDataCollectionOptions"></a>

```go
func ResetDataCollectionOptions()
```

##### `ResetDbSystemDefinedTags` <a name="ResetDbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemDefinedTags"></a>

```go
func ResetDbSystemDefinedTags()
```

##### `ResetDbSystemFreeformTags` <a name="ResetDbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemFreeformTags"></a>

```go
func ResetDbSystemFreeformTags()
```

##### `ResetDbSystemSecurityAttributes` <a name="ResetDbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDbSystemSecurityAttributes"></a>

```go
func ResetDbSystemSecurityAttributes()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetFaultDomains` <a name="ResetFaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetFaultDomains"></a>

```go
func ResetFaultDomains()
```

##### `ResetHostname` <a name="ResetHostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetIsActiveDataGuardEnabled` <a name="ResetIsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetIsActiveDataGuardEnabled"></a>

```go
func ResetIsActiveDataGuardEnabled()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPeerDbHomeId` <a name="ResetPeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbHomeId"></a>

```go
func ResetPeerDbHomeId()
```

##### `ResetPeerDbSystemId` <a name="ResetPeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbSystemId"></a>

```go
func ResetPeerDbSystemId()
```

##### `ResetPeerDbUniqueName` <a name="ResetPeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerDbUniqueName"></a>

```go
func ResetPeerDbUniqueName()
```

##### `ResetPeerSidPrefix` <a name="ResetPeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerSidPrefix"></a>

```go
func ResetPeerSidPrefix()
```

##### `ResetPeerVmClusterId` <a name="ResetPeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPeerVmClusterId"></a>

```go
func ResetPeerVmClusterId()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetShape"></a>

```go
func ResetShape()
```

##### `ResetStorageVolumePerformanceMode` <a name="ResetStorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetStorageVolumePerformanceMode"></a>

```go
func ResetStorageVolumePerformanceMode()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.DatabaseDataGuardAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.DatabaseDataGuardAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.DatabaseDataGuardAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.DatabaseDataGuardAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseDataGuardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag">ApplyLag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate">ApplyRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId">PeerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId">PeerDataGuardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole">PeerRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput">BackupNetworkNsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput">CreateAsyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput">CreationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput">DatabaseAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput">DatabaseDefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput">DatabaseFreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput">DbSystemDefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput">DbSystemFreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput">DbSystemSecurityAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput">DeleteStandbyDbHomeOnDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput">FaultDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput">IsActiveDataGuardEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput">PeerDbHomeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput">PeerDbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput">PeerDbUniqueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput">PeerSidPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput">PeerVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput">ProtectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput">StorageVolumePerformanceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput">TransportTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync">CreateAsync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType">CreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword">DatabaseAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags">DatabaseDefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags">DatabaseFreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags">DbSystemDefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags">DbSystemFreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">DbSystemSecurityAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">DeleteStandbyDbHomeOnDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">IsActiveDataGuardEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId">PeerDbHomeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId">PeerDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix">PeerSidPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId">PeerVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType">TransportType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplyLag`<sup>Required</sup> <a name="ApplyLag" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyLag"></a>

```go
func ApplyLag() *string
```

- *Type:* *string

---

##### `ApplyRate`<sup>Required</sup> <a name="ApplyRate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.applyRate"></a>

```go
func ApplyRate() *string
```

- *Type:* *string

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```go
func DataCollectionOptions() DatabaseDataGuardAssociationDataCollectionOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference">DatabaseDataGuardAssociationDataCollectionOptionsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PeerDatabaseId`<sup>Required</sup> <a name="PeerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```go
func PeerDatabaseId() *string
```

- *Type:* *string

---

##### `PeerDataGuardAssociationId`<sup>Required</sup> <a name="PeerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```go
func PeerDataGuardAssociationId() *string
```

- *Type:* *string

---

##### `PeerRole`<sup>Required</sup> <a name="PeerRole" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerRole"></a>

```go
func PeerRole() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeouts"></a>

```go
func Timeouts() DatabaseDataGuardAssociationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference">DatabaseDataGuardAssociationTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIdsInput`<sup>Optional</sup> <a name="BackupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIdsInput"></a>

```go
func BackupNetworkNsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `CreateAsyncInput`<sup>Optional</sup> <a name="CreateAsyncInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsyncInput"></a>

```go
func CreateAsyncInput() interface{}
```

- *Type:* interface{}

---

##### `CreationTypeInput`<sup>Optional</sup> <a name="CreationTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationTypeInput"></a>

```go
func CreationTypeInput() *string
```

- *Type:* *string

---

##### `DatabaseAdminPasswordInput`<sup>Optional</sup> <a name="DatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPasswordInput"></a>

```go
func DatabaseAdminPasswordInput() *string
```

- *Type:* *string

---

##### `DatabaseDefinedTagsInput`<sup>Optional</sup> <a name="DatabaseDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTagsInput"></a>

```go
func DatabaseDefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseFreeformTagsInput`<sup>Optional</sup> <a name="DatabaseFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTagsInput"></a>

```go
func DatabaseFreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageIdInput"></a>

```go
func DatabaseSoftwareImageIdInput() *string
```

- *Type:* *string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dataCollectionOptionsInput"></a>

```go
func DataCollectionOptionsInput() DatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---

##### `DbSystemDefinedTagsInput`<sup>Optional</sup> <a name="DbSystemDefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTagsInput"></a>

```go
func DbSystemDefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DbSystemFreeformTagsInput`<sup>Optional</sup> <a name="DbSystemFreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTagsInput"></a>

```go
func DbSystemFreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DbSystemSecurityAttributesInput`<sup>Optional</sup> <a name="DbSystemSecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributesInput"></a>

```go
func DbSystemSecurityAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteStandbyDbHomeOnDeleteInput`<sup>Optional</sup> <a name="DeleteStandbyDbHomeOnDeleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDeleteInput"></a>

```go
func DeleteStandbyDbHomeOnDeleteInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `FaultDomainsInput`<sup>Optional</sup> <a name="FaultDomainsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomainsInput"></a>

```go
func FaultDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsActiveDataGuardEnabledInput`<sup>Optional</sup> <a name="IsActiveDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabledInput"></a>

```go
func IsActiveDataGuardEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PeerDbHomeIdInput`<sup>Optional</sup> <a name="PeerDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeIdInput"></a>

```go
func PeerDbHomeIdInput() *string
```

- *Type:* *string

---

##### `PeerDbSystemIdInput`<sup>Optional</sup> <a name="PeerDbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemIdInput"></a>

```go
func PeerDbSystemIdInput() *string
```

- *Type:* *string

---

##### `PeerDbUniqueNameInput`<sup>Optional</sup> <a name="PeerDbUniqueNameInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueNameInput"></a>

```go
func PeerDbUniqueNameInput() *string
```

- *Type:* *string

---

##### `PeerSidPrefixInput`<sup>Optional</sup> <a name="PeerSidPrefixInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefixInput"></a>

```go
func PeerSidPrefixInput() *string
```

- *Type:* *string

---

##### `PeerVmClusterIdInput`<sup>Optional</sup> <a name="PeerVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterIdInput"></a>

```go
func PeerVmClusterIdInput() *string
```

- *Type:* *string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `ProtectionModeInput`<sup>Optional</sup> <a name="ProtectionModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionModeInput"></a>

```go
func ProtectionModeInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `StorageVolumePerformanceModeInput`<sup>Optional</sup> <a name="StorageVolumePerformanceModeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceModeInput"></a>

```go
func StorageVolumePerformanceModeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TransportTypeInput`<sup>Optional</sup> <a name="TransportTypeInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportTypeInput"></a>

```go
func TransportTypeInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```go
func BackupNetworkNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CreateAsync`<sup>Required</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.createAsync"></a>

```go
func CreateAsync() interface{}
```

- *Type:* interface{}

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.creationType"></a>

```go
func CreationType() *string
```

- *Type:* *string

---

##### `DatabaseAdminPassword`<sup>Required</sup> <a name="DatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```go
func DatabaseAdminPassword() *string
```

- *Type:* *string

---

##### `DatabaseDefinedTags`<sup>Required</sup> <a name="DatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```go
func DatabaseDefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseFreeformTags`<sup>Required</sup> <a name="DatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```go
func DatabaseFreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```go
func DatabaseSoftwareImageId() *string
```

- *Type:* *string

---

##### `DbSystemDefinedTags`<sup>Required</sup> <a name="DbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```go
func DbSystemDefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DbSystemFreeformTags`<sup>Required</sup> <a name="DbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```go
func DbSystemFreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DbSystemSecurityAttributes`<sup>Required</sup> <a name="DbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```go
func DbSystemSecurityAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="DeleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```go
func DeleteStandbyDbHomeOnDelete() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.faultDomains"></a>

```go
func FaultDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActiveDataGuardEnabled`<sup>Required</sup> <a name="IsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```go
func IsActiveDataGuardEnabled() interface{}
```

- *Type:* interface{}

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PeerDbHomeId`<sup>Required</sup> <a name="PeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```go
func PeerDbHomeId() *string
```

- *Type:* *string

---

##### `PeerDbSystemId`<sup>Required</sup> <a name="PeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```go
func PeerDbSystemId() *string
```

- *Type:* *string

---

##### `PeerDbUniqueName`<sup>Required</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```go
func PeerDbUniqueName() *string
```

- *Type:* *string

---

##### `PeerSidPrefix`<sup>Required</sup> <a name="PeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```go
func PeerSidPrefix() *string
```

- *Type:* *string

---

##### `PeerVmClusterId`<sup>Required</sup> <a name="PeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```go
func PeerVmClusterId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.protectionMode"></a>

```go
func ProtectionMode() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `StorageVolumePerformanceMode`<sup>Required</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```go
func StorageVolumePerformanceMode() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `TransportType`<sup>Required</sup> <a name="TransportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.transportType"></a>

```go
func TransportType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDataGuardAssociationConfig <a name="DatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

&databasedataguardassociation.DatabaseDataGuardAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CreationType: *string,
	DatabaseAdminPassword: *string,
	DatabaseId: *string,
	DeleteStandbyDbHomeOnDelete: *string,
	ProtectionMode: *string,
	TransportType: *string,
	AvailabilityDomain: *string,
	BackupNetworkNsgIds: *[]*string,
	CpuCoreCount: *f64,
	CreateAsync: interface{},
	DatabaseDefinedTags: *map[string]*string,
	DatabaseFreeformTags: *map[string]*string,
	DatabaseSoftwareImageId: *string,
	DataCollectionOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions,
	DbSystemDefinedTags: *map[string]*string,
	DbSystemFreeformTags: *map[string]*string,
	DbSystemSecurityAttributes: *map[string]*string,
	DisplayName: *string,
	Domain: *string,
	FaultDomains: *[]*string,
	Hostname: *string,
	Id: *string,
	IsActiveDataGuardEnabled: interface{},
	LicenseModel: *string,
	NodeCount: *f64,
	NsgIds: *[]*string,
	PeerDbHomeId: *string,
	PeerDbSystemId: *string,
	PeerDbUniqueName: *string,
	PeerSidPrefix: *string,
	PeerVmClusterId: *string,
	PrivateIp: *string,
	Shape: *string,
	StorageVolumePerformanceMode: *string,
	SubnetId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType">CreationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword">DatabaseAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete">DeleteStandbyDbHomeOnDelete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode">ProtectionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType">TransportType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync">CreateAsync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags">DatabaseDefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags">DatabaseFreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags">DbSystemDefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags">DbSystemFreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes">DbSystemSecurityAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled">IsActiveDataGuardEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId">PeerDbHomeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId">PeerDbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName">PeerDbUniqueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix">PeerSidPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId">PeerVmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode">StorageVolumePerformanceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.creationType"></a>

```go
CreationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#creation_type DatabaseDataGuardAssociation#creation_type}.

---

##### `DatabaseAdminPassword`<sup>Required</sup> <a name="DatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseAdminPassword"></a>

```go
DatabaseAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_admin_password DatabaseDataGuardAssociation#database_admin_password}.

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_id DatabaseDataGuardAssociation#database_id}.

---

##### `DeleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="DeleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.deleteStandbyDbHomeOnDelete"></a>

```go
DeleteStandbyDbHomeOnDelete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete_standby_db_home_on_delete DatabaseDataGuardAssociation#delete_standby_db_home_on_delete}.

---

##### `ProtectionMode`<sup>Required</sup> <a name="ProtectionMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.protectionMode"></a>

```go
ProtectionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#protection_mode DatabaseDataGuardAssociation#protection_mode}.

---

##### `TransportType`<sup>Required</sup> <a name="TransportType" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.transportType"></a>

```go
TransportType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#transport_type DatabaseDataGuardAssociation#transport_type}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#availability_domain DatabaseDataGuardAssociation#availability_domain}.

---

##### `BackupNetworkNsgIds`<sup>Optional</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.backupNetworkNsgIds"></a>

```go
BackupNetworkNsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#backup_network_nsg_ids DatabaseDataGuardAssociation#backup_network_nsg_ids}.

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#cpu_core_count DatabaseDataGuardAssociation#cpu_core_count}.

---

##### `CreateAsync`<sup>Optional</sup> <a name="CreateAsync" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.createAsync"></a>

```go
CreateAsync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create_async DatabaseDataGuardAssociation#create_async}.

---

##### `DatabaseDefinedTags`<sup>Optional</sup> <a name="DatabaseDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseDefinedTags"></a>

```go
DatabaseDefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_defined_tags DatabaseDataGuardAssociation#database_defined_tags}.

---

##### `DatabaseFreeformTags`<sup>Optional</sup> <a name="DatabaseFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseFreeformTags"></a>

```go
DatabaseFreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_freeform_tags DatabaseDataGuardAssociation#database_freeform_tags}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.databaseSoftwareImageId"></a>

```go
DatabaseSoftwareImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#database_software_image_id DatabaseDataGuardAssociation#database_software_image_id}.

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dataCollectionOptions"></a>

```go
DataCollectionOptions DatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#data_collection_options DatabaseDataGuardAssociation#data_collection_options}

---

##### `DbSystemDefinedTags`<sup>Optional</sup> <a name="DbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemDefinedTags"></a>

```go
DbSystemDefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_defined_tags DatabaseDataGuardAssociation#db_system_defined_tags}.

---

##### `DbSystemFreeformTags`<sup>Optional</sup> <a name="DbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemFreeformTags"></a>

```go
DbSystemFreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_freeform_tags DatabaseDataGuardAssociation#db_system_freeform_tags}.

---

##### `DbSystemSecurityAttributes`<sup>Optional</sup> <a name="DbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.dbSystemSecurityAttributes"></a>

```go
DbSystemSecurityAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#db_system_security_attributes DatabaseDataGuardAssociation#db_system_security_attributes}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#display_name DatabaseDataGuardAssociation#display_name}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#domain DatabaseDataGuardAssociation#domain}.

---

##### `FaultDomains`<sup>Optional</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.faultDomains"></a>

```go
FaultDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#fault_domains DatabaseDataGuardAssociation#fault_domains}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#hostname DatabaseDataGuardAssociation#hostname}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#id DatabaseDataGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActiveDataGuardEnabled`<sup>Optional</sup> <a name="IsActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.isActiveDataGuardEnabled"></a>

```go
IsActiveDataGuardEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_active_data_guard_enabled DatabaseDataGuardAssociation#is_active_data_guard_enabled}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#license_model DatabaseDataGuardAssociation#license_model}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#node_count DatabaseDataGuardAssociation#node_count}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#nsg_ids DatabaseDataGuardAssociation#nsg_ids}.

---

##### `PeerDbHomeId`<sup>Optional</sup> <a name="PeerDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbHomeId"></a>

```go
PeerDbHomeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_home_id DatabaseDataGuardAssociation#peer_db_home_id}.

---

##### `PeerDbSystemId`<sup>Optional</sup> <a name="PeerDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbSystemId"></a>

```go
PeerDbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_system_id DatabaseDataGuardAssociation#peer_db_system_id}.

---

##### `PeerDbUniqueName`<sup>Optional</sup> <a name="PeerDbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerDbUniqueName"></a>

```go
PeerDbUniqueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_db_unique_name DatabaseDataGuardAssociation#peer_db_unique_name}.

---

##### `PeerSidPrefix`<sup>Optional</sup> <a name="PeerSidPrefix" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerSidPrefix"></a>

```go
PeerSidPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_sid_prefix DatabaseDataGuardAssociation#peer_sid_prefix}.

---

##### `PeerVmClusterId`<sup>Optional</sup> <a name="PeerVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.peerVmClusterId"></a>

```go
PeerVmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#peer_vm_cluster_id DatabaseDataGuardAssociation#peer_vm_cluster_id}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#private_ip DatabaseDataGuardAssociation#private_ip}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#shape DatabaseDataGuardAssociation#shape}.

---

##### `StorageVolumePerformanceMode`<sup>Optional</sup> <a name="StorageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.storageVolumePerformanceMode"></a>

```go
StorageVolumePerformanceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#storage_volume_performance_mode DatabaseDataGuardAssociation#storage_volume_performance_mode}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#subnet_id DatabaseDataGuardAssociation#subnet_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeouts"></a>

```go
Timeouts DatabaseDataGuardAssociationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts">DatabaseDataGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#timeouts DatabaseDataGuardAssociation#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#time_zone DatabaseDataGuardAssociation#time_zone}.

---

### DatabaseDataGuardAssociationDataCollectionOptions <a name="DatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

&databasedataguardassociation.DatabaseDataGuardAssociationDataCollectionOptions {
	IsDiagnosticsEventsEnabled: interface{},
	IsHealthMonitoringEnabled: interface{},
	IsIncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```go
IsDiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_diagnostics_events_enabled DatabaseDataGuardAssociation#is_diagnostics_events_enabled}.

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```go
IsHealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_health_monitoring_enabled DatabaseDataGuardAssociation#is_health_monitoring_enabled}.

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```go
IsIncidentLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#is_incident_logs_enabled DatabaseDataGuardAssociation#is_incident_logs_enabled}.

---

### DatabaseDataGuardAssociationTimeouts <a name="DatabaseDataGuardAssociationTimeouts" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

&databasedataguardassociation.DatabaseDataGuardAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#create DatabaseDataGuardAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#delete DatabaseDataGuardAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_data_guard_association#update DatabaseDataGuardAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.NewDatabaseDataGuardAssociationDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDataGuardAssociationDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```go
func ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```go
func ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```go
func ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```go
func IsDiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```go
func IsHealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```go
func IsIncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```go
func IsDiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```go
func IsHealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```go
func IsIncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationDataCollectionOptions">DatabaseDataGuardAssociationDataCollectionOptions</a>

---


### DatabaseDataGuardAssociationTimeoutsOutputReference <a name="DatabaseDataGuardAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedataguardassociation"

databasedataguardassociation.NewDatabaseDataGuardAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDataGuardAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDataGuardAssociation.DatabaseDataGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




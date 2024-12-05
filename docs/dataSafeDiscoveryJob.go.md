# `dataSafeDiscoveryJob` Submodule <a name="`dataSafeDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJob <a name="DataSafeDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job oci_data_safe_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.NewDataSafeDiscoveryJob(scope Construct, id *string, config DataSafeDiscoveryJobConfig) DataSafeDiscoveryJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig">DataSafeDiscoveryJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig">DataSafeDiscoveryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery">PutTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType">ResetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled">ResetIsAppDefinedRelationDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas">ResetIsIncludeAllSchemas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes">ResetIsIncludeAllSensitiveTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled">ResetIsSampleDataCollectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery">ResetSchemasForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery">ResetSensitiveTypeIdsForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery">ResetTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTablesForDiscovery` <a name="PutTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery"></a>

```go
func PutTablesForDiscovery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeDiscoveryJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDiscoveryType` <a name="ResetDiscoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType"></a>

```go
func ResetDiscoveryType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAppDefinedRelationDiscoveryEnabled` <a name="ResetIsAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled"></a>

```go
func ResetIsAppDefinedRelationDiscoveryEnabled()
```

##### `ResetIsIncludeAllSchemas` <a name="ResetIsIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas"></a>

```go
func ResetIsIncludeAllSchemas()
```

##### `ResetIsIncludeAllSensitiveTypes` <a name="ResetIsIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes"></a>

```go
func ResetIsIncludeAllSensitiveTypes()
```

##### `ResetIsSampleDataCollectionEnabled` <a name="ResetIsSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled"></a>

```go
func ResetIsSampleDataCollectionEnabled()
```

##### `ResetSchemasForDiscovery` <a name="ResetSchemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery"></a>

```go
func ResetSchemasForDiscovery()
```

##### `ResetSensitiveTypeIdsForDiscovery` <a name="ResetSensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery"></a>

```go
func ResetSensitiveTypeIdsForDiscovery()
```

##### `ResetTablesForDiscovery` <a name="ResetTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery"></a>

```go
func ResetTablesForDiscovery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.DataSafeDiscoveryJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.DataSafeDiscoveryJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.DataSafeDiscoveryJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.DataSafeDiscoveryJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeDiscoveryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery">TablesForDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned">TotalColumnsScanned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns">TotalDeletedSensitiveColumns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns">TotalModifiedSensitiveColumns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns">TotalNewSensitiveColumns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned">TotalObjectsScanned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned">TotalSchemasScanned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput">DiscoveryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput">IsAppDefinedRelationDiscoveryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput">IsIncludeAllSchemasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput">IsIncludeAllSensitiveTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput">IsSampleDataCollectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput">SchemasForDiscoveryInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput">SensitiveTypeIdsForDiscoveryInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput">TablesForDiscoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType">DiscoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled">IsAppDefinedRelationDiscoveryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas">IsIncludeAllSchemas</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes">IsIncludeAllSensitiveTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled">IsSampleDataCollectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery">SchemasForDiscovery</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery">SensitiveTypeIdsForDiscovery</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TablesForDiscovery`<sup>Required</sup> <a name="TablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery"></a>

```go
func TablesForDiscovery() DataSafeDiscoveryJobTablesForDiscoveryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a>

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts"></a>

```go
func Timeouts() DataSafeDiscoveryJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TotalColumnsScanned`<sup>Required</sup> <a name="TotalColumnsScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned"></a>

```go
func TotalColumnsScanned() *string
```

- *Type:* *string

---

##### `TotalDeletedSensitiveColumns`<sup>Required</sup> <a name="TotalDeletedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns"></a>

```go
func TotalDeletedSensitiveColumns() *string
```

- *Type:* *string

---

##### `TotalModifiedSensitiveColumns`<sup>Required</sup> <a name="TotalModifiedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns"></a>

```go
func TotalModifiedSensitiveColumns() *string
```

- *Type:* *string

---

##### `TotalNewSensitiveColumns`<sup>Required</sup> <a name="TotalNewSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns"></a>

```go
func TotalNewSensitiveColumns() *string
```

- *Type:* *string

---

##### `TotalObjectsScanned`<sup>Required</sup> <a name="TotalObjectsScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned"></a>

```go
func TotalObjectsScanned() *string
```

- *Type:* *string

---

##### `TotalSchemasScanned`<sup>Required</sup> <a name="TotalSchemasScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned"></a>

```go
func TotalSchemasScanned() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiscoveryTypeInput`<sup>Optional</sup> <a name="DiscoveryTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput"></a>

```go
func DiscoveryTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAppDefinedRelationDiscoveryEnabledInput`<sup>Optional</sup> <a name="IsAppDefinedRelationDiscoveryEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput"></a>

```go
func IsAppDefinedRelationDiscoveryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncludeAllSchemasInput`<sup>Optional</sup> <a name="IsIncludeAllSchemasInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput"></a>

```go
func IsIncludeAllSchemasInput() interface{}
```

- *Type:* interface{}

---

##### `IsIncludeAllSensitiveTypesInput`<sup>Optional</sup> <a name="IsIncludeAllSensitiveTypesInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput"></a>

```go
func IsIncludeAllSensitiveTypesInput() interface{}
```

- *Type:* interface{}

---

##### `IsSampleDataCollectionEnabledInput`<sup>Optional</sup> <a name="IsSampleDataCollectionEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput"></a>

```go
func IsSampleDataCollectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SchemasForDiscoveryInput`<sup>Optional</sup> <a name="SchemasForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput"></a>

```go
func SchemasForDiscoveryInput() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput"></a>

```go
func SensitiveDataModelIdInput() *string
```

- *Type:* *string

---

##### `SensitiveTypeIdsForDiscoveryInput`<sup>Optional</sup> <a name="SensitiveTypeIdsForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput"></a>

```go
func SensitiveTypeIdsForDiscoveryInput() *[]*string
```

- *Type:* *[]*string

---

##### `TablesForDiscoveryInput`<sup>Optional</sup> <a name="TablesForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput"></a>

```go
func TablesForDiscoveryInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiscoveryType`<sup>Required</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType"></a>

```go
func DiscoveryType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAppDefinedRelationDiscoveryEnabled`<sup>Required</sup> <a name="IsAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled"></a>

```go
func IsAppDefinedRelationDiscoveryEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsIncludeAllSchemas`<sup>Required</sup> <a name="IsIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas"></a>

```go
func IsIncludeAllSchemas() interface{}
```

- *Type:* interface{}

---

##### `IsIncludeAllSensitiveTypes`<sup>Required</sup> <a name="IsIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes"></a>

```go
func IsIncludeAllSensitiveTypes() interface{}
```

- *Type:* interface{}

---

##### `IsSampleDataCollectionEnabled`<sup>Required</sup> <a name="IsSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled"></a>

```go
func IsSampleDataCollectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `SchemasForDiscovery`<sup>Required</sup> <a name="SchemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery"></a>

```go
func SchemasForDiscovery() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId"></a>

```go
func SensitiveDataModelId() *string
```

- *Type:* *string

---

##### `SensitiveTypeIdsForDiscovery`<sup>Required</sup> <a name="SensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery"></a>

```go
func SensitiveTypeIdsForDiscovery() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobConfig <a name="DataSafeDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

&datasafediscoveryjob.DataSafeDiscoveryJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SensitiveDataModelId: *string,
	DefinedTags: *map[string]*string,
	DiscoveryType: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsAppDefinedRelationDiscoveryEnabled: interface{},
	IsIncludeAllSchemas: interface{},
	IsIncludeAllSensitiveTypes: interface{},
	IsSampleDataCollectionEnabled: interface{},
	SchemasForDiscovery: *[]*string,
	SensitiveTypeIdsForDiscovery: *[]*string,
	TablesForDiscovery: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType">DiscoveryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled">IsAppDefinedRelationDiscoveryEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas">IsIncludeAllSchemas</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes">IsIncludeAllSensitiveTypes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled">IsSampleDataCollectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery">SchemasForDiscovery</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery">SensitiveTypeIdsForDiscovery</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery">TablesForDiscovery</a></code> | <code>interface{}</code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}.

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId"></a>

```go
SensitiveDataModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}.

---

##### `DiscoveryType`<sup>Optional</sup> <a name="DiscoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType"></a>

```go
DiscoveryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAppDefinedRelationDiscoveryEnabled`<sup>Optional</sup> <a name="IsAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled"></a>

```go
IsAppDefinedRelationDiscoveryEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}.

---

##### `IsIncludeAllSchemas`<sup>Optional</sup> <a name="IsIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas"></a>

```go
IsIncludeAllSchemas interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}.

---

##### `IsIncludeAllSensitiveTypes`<sup>Optional</sup> <a name="IsIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes"></a>

```go
IsIncludeAllSensitiveTypes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}.

---

##### `IsSampleDataCollectionEnabled`<sup>Optional</sup> <a name="IsSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled"></a>

```go
IsSampleDataCollectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}.

---

##### `SchemasForDiscovery`<sup>Optional</sup> <a name="SchemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery"></a>

```go
SchemasForDiscovery *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}.

---

##### `SensitiveTypeIdsForDiscovery`<sup>Optional</sup> <a name="SensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery"></a>

```go
SensitiveTypeIdsForDiscovery *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}.

---

##### `TablesForDiscovery`<sup>Optional</sup> <a name="TablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery"></a>

```go
TablesForDiscovery interface{}
```

- *Type:* interface{}

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts"></a>

```go
Timeouts DataSafeDiscoveryJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}

---

### DataSafeDiscoveryJobTablesForDiscovery <a name="DataSafeDiscoveryJobTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

&datasafediscoveryjob.DataSafeDiscoveryJobTablesForDiscovery {
	SchemaName: *string,
	TableNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames">TableNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}. |

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}.

---

##### `TableNames`<sup>Optional</sup> <a name="TableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames"></a>

```go
TableNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}.

---

### DataSafeDiscoveryJobTimeouts <a name="DataSafeDiscoveryJobTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

&datasafediscoveryjob.DataSafeDiscoveryJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobTablesForDiscoveryList <a name="DataSafeDiscoveryJobTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.NewDataSafeDiscoveryJobTablesForDiscoveryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeDiscoveryJobTablesForDiscoveryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get"></a>

```go
func Get(index *f64) DataSafeDiscoveryJobTablesForDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeDiscoveryJobTablesForDiscoveryOutputReference <a name="DataSafeDiscoveryJobTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.NewDataSafeDiscoveryJobTablesForDiscoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeDiscoveryJobTablesForDiscoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames">ResetTableNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTableNames` <a name="ResetTableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames"></a>

```go
func ResetTableNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput">TableNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames">TableNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNamesInput`<sup>Optional</sup> <a name="TableNamesInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput"></a>

```go
func TableNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableNames`<sup>Required</sup> <a name="TableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames"></a>

```go
func TableNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeDiscoveryJobTimeoutsOutputReference <a name="DataSafeDiscoveryJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafediscoveryjob"

datasafediscoveryjob.NewDataSafeDiscoveryJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeDiscoveryJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




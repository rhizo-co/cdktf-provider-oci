# `databaseMigrationMigration` Submodule <a name="`databaseMigrationMigration` Submodule" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationMigration <a name="DatabaseMigrationMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration oci_database_migration_migration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigration(scope Construct, id *string, config DatabaseMigrationMigrationConfig) DatabaseMigrationMigration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig">DatabaseMigrationMigrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig">DatabaseMigrationMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters">PutAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings">PutAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails">PutDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects">PutExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails">PutGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails">PutHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects">PutIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings">PutInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters">ResetAdvancedParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings">ResetAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData">ResetBulkIncludeExcludeData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails">ResetDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects">ResetExcludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails">ResetGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails">ResetHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects">ResetIncludeObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings">ResetInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId">ResetSourceContainerDatabaseConnectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedParameters` <a name="PutAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters"></a>

```go
func PutAdvancedParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvancedParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAdvisorSettings` <a name="PutAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings"></a>

```go
func PutAdvisorSettings(value DatabaseMigrationMigrationAdvisorSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putAdvisorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `PutDataTransferMediumDetails` <a name="PutDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails"></a>

```go
func PutDataTransferMediumDetails(value DatabaseMigrationMigrationDataTransferMediumDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putDataTransferMediumDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `PutExcludeObjects` <a name="PutExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects"></a>

```go
func PutExcludeObjects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putExcludeObjects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGgsDetails` <a name="PutGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails"></a>

```go
func PutGgsDetails(value DatabaseMigrationMigrationGgsDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putGgsDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `PutHubDetails` <a name="PutHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails"></a>

```go
func PutHubDetails(value DatabaseMigrationMigrationHubDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putHubDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `PutIncludeObjects` <a name="PutIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects"></a>

```go
func PutIncludeObjects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putIncludeObjects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInitialLoadSettings` <a name="PutInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings"></a>

```go
func PutInitialLoadSettings(value DatabaseMigrationMigrationInitialLoadSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putInitialLoadSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseMigrationMigrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

---

##### `ResetAdvancedParameters` <a name="ResetAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvancedParameters"></a>

```go
func ResetAdvancedParameters()
```

##### `ResetAdvisorSettings` <a name="ResetAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetAdvisorSettings"></a>

```go
func ResetAdvisorSettings()
```

##### `ResetBulkIncludeExcludeData` <a name="ResetBulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetBulkIncludeExcludeData"></a>

```go
func ResetBulkIncludeExcludeData()
```

##### `ResetDataTransferMediumDetails` <a name="ResetDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDataTransferMediumDetails"></a>

```go
func ResetDataTransferMediumDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExcludeObjects` <a name="ResetExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetExcludeObjects"></a>

```go
func ResetExcludeObjects()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetGgsDetails` <a name="ResetGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetGgsDetails"></a>

```go
func ResetGgsDetails()
```

##### `ResetHubDetails` <a name="ResetHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetHubDetails"></a>

```go
func ResetHubDetails()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeObjects` <a name="ResetIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetIncludeObjects"></a>

```go
func ResetIncludeObjects()
```

##### `ResetInitialLoadSettings` <a name="ResetInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetInitialLoadSettings"></a>

```go
func ResetInitialLoadSettings()
```

##### `ResetSourceContainerDatabaseConnectionId` <a name="ResetSourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetSourceContainerDatabaseConnectionId"></a>

```go
func ResetSourceContainerDatabaseConnectionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.DatabaseMigrationMigration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.DatabaseMigrationMigration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.DatabaseMigrationMigration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.DatabaseMigrationMigration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseMigrationMigration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseMigrationMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseMigrationMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters">AdvancedParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings">AdvisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails">DataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects">ExcludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId">ExecutingJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails">GgsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails">HubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects">IncludeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings">InitialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration">TimeLastMigration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter">WaitAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput">AdvancedParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput">AdvisorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput">BulkIncludeExcludeDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput">DatabaseCombinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput">DataTransferMediumDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput">ExcludeObjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput">GgsDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput">HubDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput">IncludeObjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput">InitialLoadSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput">SourceContainerDatabaseConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput">SourceDatabaseConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput">TargetDatabaseConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData">BulkIncludeExcludeData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination">DatabaseCombination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId">SourceContainerDatabaseConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId">SourceDatabaseConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId">TargetDatabaseConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedParameters`<sup>Required</sup> <a name="AdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParameters"></a>

```go
func AdvancedParameters() DatabaseMigrationMigrationAdvancedParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList">DatabaseMigrationMigrationAdvancedParametersList</a>

---

##### `AdvisorSettings`<sup>Required</sup> <a name="AdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettings"></a>

```go
func AdvisorSettings() DatabaseMigrationMigrationAdvisorSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference">DatabaseMigrationMigrationAdvisorSettingsOutputReference</a>

---

##### `DataTransferMediumDetails`<sup>Required</sup> <a name="DataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetails"></a>

```go
func DataTransferMediumDetails() DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference</a>

---

##### `ExcludeObjects`<sup>Required</sup> <a name="ExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjects"></a>

```go
func ExcludeObjects() DatabaseMigrationMigrationExcludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList">DatabaseMigrationMigrationExcludeObjectsList</a>

---

##### `ExecutingJobId`<sup>Required</sup> <a name="ExecutingJobId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.executingJobId"></a>

```go
func ExecutingJobId() *string
```

- *Type:* *string

---

##### `GgsDetails`<sup>Required</sup> <a name="GgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetails"></a>

```go
func GgsDetails() DatabaseMigrationMigrationGgsDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference">DatabaseMigrationMigrationGgsDetailsOutputReference</a>

---

##### `HubDetails`<sup>Required</sup> <a name="HubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetails"></a>

```go
func HubDetails() DatabaseMigrationMigrationHubDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference">DatabaseMigrationMigrationHubDetailsOutputReference</a>

---

##### `IncludeObjects`<sup>Required</sup> <a name="IncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjects"></a>

```go
func IncludeObjects() DatabaseMigrationMigrationIncludeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList">DatabaseMigrationMigrationIncludeObjectsList</a>

---

##### `InitialLoadSettings`<sup>Required</sup> <a name="InitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettings"></a>

```go
func InitialLoadSettings() DatabaseMigrationMigrationInitialLoadSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastMigration`<sup>Required</sup> <a name="TimeLastMigration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeLastMigration"></a>

```go
func TimeLastMigration() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeouts"></a>

```go
func Timeouts() DatabaseMigrationMigrationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference">DatabaseMigrationMigrationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WaitAfter`<sup>Required</sup> <a name="WaitAfter" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.waitAfter"></a>

```go
func WaitAfter() *string
```

- *Type:* *string

---

##### `AdvancedParametersInput`<sup>Optional</sup> <a name="AdvancedParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advancedParametersInput"></a>

```go
func AdvancedParametersInput() interface{}
```

- *Type:* interface{}

---

##### `AdvisorSettingsInput`<sup>Optional</sup> <a name="AdvisorSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.advisorSettingsInput"></a>

```go
func AdvisorSettingsInput() DatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---

##### `BulkIncludeExcludeDataInput`<sup>Optional</sup> <a name="BulkIncludeExcludeDataInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeDataInput"></a>

```go
func BulkIncludeExcludeDataInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DatabaseCombinationInput`<sup>Optional</sup> <a name="DatabaseCombinationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombinationInput"></a>

```go
func DatabaseCombinationInput() *string
```

- *Type:* *string

---

##### `DataTransferMediumDetailsInput`<sup>Optional</sup> <a name="DataTransferMediumDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.dataTransferMediumDetailsInput"></a>

```go
func DataTransferMediumDetailsInput() DatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExcludeObjectsInput`<sup>Optional</sup> <a name="ExcludeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.excludeObjectsInput"></a>

```go
func ExcludeObjectsInput() interface{}
```

- *Type:* interface{}

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GgsDetailsInput`<sup>Optional</sup> <a name="GgsDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.ggsDetailsInput"></a>

```go
func GgsDetailsInput() DatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---

##### `HubDetailsInput`<sup>Optional</sup> <a name="HubDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.hubDetailsInput"></a>

```go
func HubDetailsInput() DatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeObjectsInput`<sup>Optional</sup> <a name="IncludeObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.includeObjectsInput"></a>

```go
func IncludeObjectsInput() interface{}
```

- *Type:* interface{}

---

##### `InitialLoadSettingsInput`<sup>Optional</sup> <a name="InitialLoadSettingsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.initialLoadSettingsInput"></a>

```go
func InitialLoadSettingsInput() DatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---

##### `SourceContainerDatabaseConnectionIdInput`<sup>Optional</sup> <a name="SourceContainerDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionIdInput"></a>

```go
func SourceContainerDatabaseConnectionIdInput() *string
```

- *Type:* *string

---

##### `SourceDatabaseConnectionIdInput`<sup>Optional</sup> <a name="SourceDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionIdInput"></a>

```go
func SourceDatabaseConnectionIdInput() *string
```

- *Type:* *string

---

##### `TargetDatabaseConnectionIdInput`<sup>Optional</sup> <a name="TargetDatabaseConnectionIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionIdInput"></a>

```go
func TargetDatabaseConnectionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BulkIncludeExcludeData`<sup>Required</sup> <a name="BulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.bulkIncludeExcludeData"></a>

```go
func BulkIncludeExcludeData() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseCombination`<sup>Required</sup> <a name="DatabaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.databaseCombination"></a>

```go
func DatabaseCombination() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceContainerDatabaseConnectionId`<sup>Required</sup> <a name="SourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceContainerDatabaseConnectionId"></a>

```go
func SourceContainerDatabaseConnectionId() *string
```

- *Type:* *string

---

##### `SourceDatabaseConnectionId`<sup>Required</sup> <a name="SourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.sourceDatabaseConnectionId"></a>

```go
func SourceDatabaseConnectionId() *string
```

- *Type:* *string

---

##### `TargetDatabaseConnectionId`<sup>Required</sup> <a name="TargetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.targetDatabaseConnectionId"></a>

```go
func TargetDatabaseConnectionId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationMigrationAdvancedParameters <a name="DatabaseMigrationMigrationAdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationAdvancedParameters {
	DataType: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}. |

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_type DatabaseMigrationMigration#data_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#value DatabaseMigrationMigration#value}.

---

### DatabaseMigrationMigrationAdvisorSettings <a name="DatabaseMigrationMigrationAdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationAdvisorSettings {
	IsIgnoreErrors: interface{},
	IsSkipAdvisor: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors">IsIgnoreErrors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor">IsSkipAdvisor</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}. |

---

##### `IsIgnoreErrors`<sup>Optional</sup> <a name="IsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isIgnoreErrors"></a>

```go
IsIgnoreErrors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_errors DatabaseMigrationMigration#is_ignore_errors}.

---

##### `IsSkipAdvisor`<sup>Optional</sup> <a name="IsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings.property.isSkipAdvisor"></a>

```go
IsSkipAdvisor interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_skip_advisor DatabaseMigrationMigration#is_skip_advisor}.

---

### DatabaseMigrationMigrationConfig <a name="DatabaseMigrationMigrationConfig" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DatabaseCombination: *string,
	SourceDatabaseConnectionId: *string,
	TargetDatabaseConnectionId: *string,
	Type: *string,
	AdvancedParameters: interface{},
	AdvisorSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings,
	BulkIncludeExcludeData: *string,
	DataTransferMediumDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	ExcludeObjects: interface{},
	FreeformTags: *map[string]*string,
	GgsDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails,
	HubDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails,
	Id: *string,
	IncludeObjects: interface{},
	InitialLoadSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings,
	SourceContainerDatabaseConnectionId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination">DatabaseCombination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId">SourceDatabaseConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId">TargetDatabaseConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters">AdvancedParameters</a></code> | <code>interface{}</code> | advanced_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings">AdvisorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | advisor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData">BulkIncludeExcludeData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails">DataTransferMediumDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | data_transfer_medium_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects">ExcludeObjects</a></code> | <code>interface{}</code> | exclude_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails">GgsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | ggs_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails">HubDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | hub_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects">IncludeObjects</a></code> | <code>interface{}</code> | include_objects block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings">InitialLoadSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | initial_load_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId">SourceContainerDatabaseConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compartment_id DatabaseMigrationMigration#compartment_id}.

---

##### `DatabaseCombination`<sup>Required</sup> <a name="DatabaseCombination" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.databaseCombination"></a>

```go
DatabaseCombination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#database_combination DatabaseMigrationMigration#database_combination}.

---

##### `SourceDatabaseConnectionId`<sup>Required</sup> <a name="SourceDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceDatabaseConnectionId"></a>

```go
SourceDatabaseConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_database_connection_id DatabaseMigrationMigration#source_database_connection_id}.

---

##### `TargetDatabaseConnectionId`<sup>Required</sup> <a name="TargetDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.targetDatabaseConnectionId"></a>

```go
TargetDatabaseConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_database_connection_id DatabaseMigrationMigration#target_database_connection_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `AdvancedParameters`<sup>Optional</sup> <a name="AdvancedParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advancedParameters"></a>

```go
AdvancedParameters interface{}
```

- *Type:* interface{}

advanced_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advanced_parameters DatabaseMigrationMigration#advanced_parameters}

---

##### `AdvisorSettings`<sup>Optional</sup> <a name="AdvisorSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.advisorSettings"></a>

```go
AdvisorSettings DatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

advisor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#advisor_settings DatabaseMigrationMigration#advisor_settings}

---

##### `BulkIncludeExcludeData`<sup>Optional</sup> <a name="BulkIncludeExcludeData" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.bulkIncludeExcludeData"></a>

```go
BulkIncludeExcludeData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bulk_include_exclude_data DatabaseMigrationMigration#bulk_include_exclude_data}.

---

##### `DataTransferMediumDetails`<sup>Optional</sup> <a name="DataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.dataTransferMediumDetails"></a>

```go
DataTransferMediumDetails DatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

data_transfer_medium_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_transfer_medium_details DatabaseMigrationMigration#data_transfer_medium_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#defined_tags DatabaseMigrationMigration#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#description DatabaseMigrationMigration#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#display_name DatabaseMigrationMigration#display_name}.

---

##### `ExcludeObjects`<sup>Optional</sup> <a name="ExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.excludeObjects"></a>

```go
ExcludeObjects interface{}
```

- *Type:* interface{}

exclude_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_objects DatabaseMigrationMigration#exclude_objects}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#freeform_tags DatabaseMigrationMigration#freeform_tags}.

---

##### `GgsDetails`<sup>Optional</sup> <a name="GgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.ggsDetails"></a>

```go
GgsDetails DatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

ggs_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#ggs_details DatabaseMigrationMigration#ggs_details}

---

##### `HubDetails`<sup>Optional</sup> <a name="HubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.hubDetails"></a>

```go
HubDetails DatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

hub_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#hub_details DatabaseMigrationMigration#hub_details}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#id DatabaseMigrationMigration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeObjects`<sup>Optional</sup> <a name="IncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.includeObjects"></a>

```go
IncludeObjects interface{}
```

- *Type:* interface{}

include_objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#include_objects DatabaseMigrationMigration#include_objects}

---

##### `InitialLoadSettings`<sup>Optional</sup> <a name="InitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.initialLoadSettings"></a>

```go
InitialLoadSettings DatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

initial_load_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#initial_load_settings DatabaseMigrationMigration#initial_load_settings}

---

##### `SourceContainerDatabaseConnectionId`<sup>Optional</sup> <a name="SourceContainerDatabaseConnectionId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.sourceContainerDatabaseConnectionId"></a>

```go
SourceContainerDatabaseConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source_container_database_connection_id DatabaseMigrationMigration#source_container_database_connection_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationConfig.property.timeouts"></a>

```go
Timeouts DatabaseMigrationMigrationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts">DatabaseMigrationMigrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#timeouts DatabaseMigrationMigration#timeouts}

---

### DatabaseMigrationMigrationDataTransferMediumDetails <a name="DatabaseMigrationMigrationDataTransferMediumDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationDataTransferMediumDetails {
	Type: *string,
	AccessKeyId: *string,
	Name: *string,
	ObjectStorageBucket: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket,
	Region: *string,
	SecretAccessKey: *string,
	SharedStorageMountTargetId: *string,
	Source: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource,
	Target: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket">ObjectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | object_storage_bucket block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId">SharedStorageMountTargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | target block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#access_key_id DatabaseMigrationMigration#access_key_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `ObjectStorageBucket`<sup>Optional</sup> <a name="ObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.objectStorageBucket"></a>

```go
ObjectStorageBucket DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

object_storage_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object_storage_bucket DatabaseMigrationMigration#object_storage_bucket}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#region DatabaseMigrationMigration#region}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#secret_access_key DatabaseMigrationMigration#secret_access_key}.

---

##### `SharedStorageMountTargetId`<sup>Optional</sup> <a name="SharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.sharedStorageMountTargetId"></a>

```go
SharedStorageMountTargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#shared_storage_mount_target_id DatabaseMigrationMigration#shared_storage_mount_target_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.source"></a>

```go
Source DatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#source DatabaseMigrationMigration#source}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails.property.target"></a>

```go
Target DatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target DatabaseMigrationMigration#target}

---

### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket {
	Bucket: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#bucket DatabaseMigrationMigration#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#namespace DatabaseMigrationMigration#namespace}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsSource <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource {
	Kind: *string,
	OciHome: *string,
	WalletLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome">OciHome</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation">WalletLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `OciHome`<sup>Optional</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.ociHome"></a>

```go
OciHome *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `WalletLocation`<sup>Optional</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource.property.walletLocation"></a>

```go
WalletLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationDataTransferMediumDetailsTarget <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget {
	Kind: *string,
	OciHome: *string,
	WalletLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome">OciHome</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation">WalletLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#kind DatabaseMigrationMigration#kind}.

---

##### `OciHome`<sup>Optional</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.ociHome"></a>

```go
OciHome *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#oci_home DatabaseMigrationMigration#oci_home}.

---

##### `WalletLocation`<sup>Optional</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget.property.walletLocation"></a>

```go
WalletLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#wallet_location DatabaseMigrationMigration#wallet_location}.

---

### DatabaseMigrationMigrationExcludeObjects <a name="DatabaseMigrationMigrationExcludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationExcludeObjects {
	Object: *string,
	IsOmitExcludedTableFromReplication: interface{},
	Owner: *string,
	Schema: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `IsOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.isOmitExcludedTableFromReplication"></a>

```go
IsOmitExcludedTableFromReplication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjects.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationGgsDetails <a name="DatabaseMigrationMigrationGgsDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationGgsDetails {
	AcceptableLag: *f64,
	Extract: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract,
	Replicat: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag">AcceptableLag</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | replicat block. |

---

##### `AcceptableLag`<sup>Optional</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.acceptableLag"></a>

```go
AcceptableLag *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `Extract`<sup>Optional</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.extract"></a>

```go
Extract DatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `Replicat`<sup>Optional</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails.property.replicat"></a>

```go
Replicat DatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationGgsDetailsExtract <a name="DatabaseMigrationMigrationGgsDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationGgsDetailsExtract {
	LongTransDuration: *f64,
	PerformanceProfile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration">LongTransDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `LongTransDuration`<sup>Optional</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.longTransDuration"></a>

```go
LongTransDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract.property.performanceProfile"></a>

```go
PerformanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationGgsDetailsGgsDeployment <a name="DatabaseMigrationMigrationGgsDetailsGgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment {

}
```


### DatabaseMigrationMigrationGgsDetailsReplicat <a name="DatabaseMigrationMigrationGgsDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationGgsDetailsReplicat {
	PerformanceProfile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat.property.performanceProfile"></a>

```go
PerformanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetails <a name="DatabaseMigrationMigrationHubDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationHubDetails {
	KeyId: *string,
	RestAdminCredentials: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials,
	Url: *string,
	VaultId: *string,
	AcceptableLag: *f64,
	ComputeId: *string,
	Extract: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract,
	Replicat: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials">RestAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | rest_admin_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag">AcceptableLag</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId">ComputeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | extract block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | replicat block. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#key_id DatabaseMigrationMigration#key_id}.

---

##### `RestAdminCredentials`<sup>Required</sup> <a name="RestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.restAdminCredentials"></a>

```go
RestAdminCredentials DatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

rest_admin_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#rest_admin_credentials DatabaseMigrationMigration#rest_admin_credentials}

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#url DatabaseMigrationMigration#url}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#vault_id DatabaseMigrationMigration#vault_id}.

---

##### `AcceptableLag`<sup>Optional</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.acceptableLag"></a>

```go
AcceptableLag *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#acceptable_lag DatabaseMigrationMigration#acceptable_lag}.

---

##### `ComputeId`<sup>Optional</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.computeId"></a>

```go
ComputeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compute_id DatabaseMigrationMigration#compute_id}.

---

##### `Extract`<sup>Optional</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.extract"></a>

```go
Extract DatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extract DatabaseMigrationMigration#extract}

---

##### `Replicat`<sup>Optional</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails.property.replicat"></a>

```go
Replicat DatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

replicat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#replicat DatabaseMigrationMigration#replicat}

---

### DatabaseMigrationMigrationHubDetailsExtract <a name="DatabaseMigrationMigrationHubDetailsExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationHubDetailsExtract {
	LongTransDuration: *f64,
	PerformanceProfile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration">LongTransDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `LongTransDuration`<sup>Optional</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.longTransDuration"></a>

```go
LongTransDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#long_trans_duration DatabaseMigrationMigration#long_trans_duration}.

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract.property.performanceProfile"></a>

```go
PerformanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsReplicat <a name="DatabaseMigrationMigrationHubDetailsReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationHubDetailsReplicat {
	PerformanceProfile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}. |

---

##### `PerformanceProfile`<sup>Optional</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat.property.performanceProfile"></a>

```go
PerformanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#performance_profile DatabaseMigrationMigration#performance_profile}.

---

### DatabaseMigrationMigrationHubDetailsRestAdminCredentials <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#password DatabaseMigrationMigration#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#username DatabaseMigrationMigration#username}.

---

### DatabaseMigrationMigrationIncludeObjects <a name="DatabaseMigrationMigrationIncludeObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationIncludeObjects {
	Object: *string,
	IsOmitExcludedTableFromReplication: interface{},
	Owner: *string,
	Schema: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#object DatabaseMigrationMigration#object}.

---

##### `IsOmitExcludedTableFromReplication`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.isOmitExcludedTableFromReplication"></a>

```go
IsOmitExcludedTableFromReplication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_omit_excluded_table_from_replication DatabaseMigrationMigration#is_omit_excluded_table_from_replication}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#owner DatabaseMigrationMigration#owner}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#schema DatabaseMigrationMigration#schema}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjects.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettings <a name="DatabaseMigrationMigrationInitialLoadSettings" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationInitialLoadSettings {
	JobMode: *string,
	Compatibility: *[]*string,
	DataPumpParameters: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters,
	ExportDirectoryObject: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject,
	HandleGrantErrors: *string,
	ImportDirectoryObject: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject,
	IsConsistent: interface{},
	IsIgnoreExistingObjects: interface{},
	IsTzUtc: interface{},
	MetadataRemaps: interface{},
	PrimaryKeyCompatibility: *string,
	TablespaceDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode">JobMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility">Compatibility</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters">DataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | data_pump_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject">ExportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | export_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors">HandleGrantErrors</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject">ImportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | import_directory_object block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent">IsConsistent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects">IsIgnoreExistingObjects</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc">IsTzUtc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps">MetadataRemaps</a></code> | <code>interface{}</code> | metadata_remaps block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility">PrimaryKeyCompatibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails">TablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | tablespace_details block. |

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.jobMode"></a>

```go
JobMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#job_mode DatabaseMigrationMigration#job_mode}.

---

##### `Compatibility`<sup>Optional</sup> <a name="Compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.compatibility"></a>

```go
Compatibility *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#compatibility DatabaseMigrationMigration#compatibility}.

---

##### `DataPumpParameters`<sup>Optional</sup> <a name="DataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.dataPumpParameters"></a>

```go
DataPumpParameters DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

data_pump_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#data_pump_parameters DatabaseMigrationMigration#data_pump_parameters}

---

##### `ExportDirectoryObject`<sup>Optional</sup> <a name="ExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.exportDirectoryObject"></a>

```go
ExportDirectoryObject DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

export_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_directory_object DatabaseMigrationMigration#export_directory_object}

---

##### `HandleGrantErrors`<sup>Optional</sup> <a name="HandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.handleGrantErrors"></a>

```go
HandleGrantErrors *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#handle_grant_errors DatabaseMigrationMigration#handle_grant_errors}.

---

##### `ImportDirectoryObject`<sup>Optional</sup> <a name="ImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.importDirectoryObject"></a>

```go
ImportDirectoryObject DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

import_directory_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_directory_object DatabaseMigrationMigration#import_directory_object}

---

##### `IsConsistent`<sup>Optional</sup> <a name="IsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isConsistent"></a>

```go
IsConsistent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_consistent DatabaseMigrationMigration#is_consistent}.

---

##### `IsIgnoreExistingObjects`<sup>Optional</sup> <a name="IsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isIgnoreExistingObjects"></a>

```go
IsIgnoreExistingObjects interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_ignore_existing_objects DatabaseMigrationMigration#is_ignore_existing_objects}.

---

##### `IsTzUtc`<sup>Optional</sup> <a name="IsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.isTzUtc"></a>

```go
IsTzUtc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_tz_utc DatabaseMigrationMigration#is_tz_utc}.

---

##### `MetadataRemaps`<sup>Optional</sup> <a name="MetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.metadataRemaps"></a>

```go
MetadataRemaps interface{}
```

- *Type:* interface{}

metadata_remaps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#metadata_remaps DatabaseMigrationMigration#metadata_remaps}

---

##### `PrimaryKeyCompatibility`<sup>Optional</sup> <a name="PrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.primaryKeyCompatibility"></a>

```go
PrimaryKeyCompatibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#primary_key_compatibility DatabaseMigrationMigration#primary_key_compatibility}.

---

##### `TablespaceDetails`<sup>Optional</sup> <a name="TablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings.property.tablespaceDetails"></a>

```go
TablespaceDetails DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

tablespace_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#tablespace_details DatabaseMigrationMigration#tablespace_details}

---

### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters {
	Estimate: *string,
	ExcludeParameters: *[]*string,
	ExportParallelismDegree: *f64,
	ImportParallelismDegree: *f64,
	IsCluster: interface{},
	TableExistsAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate">Estimate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters">ExcludeParameters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree">ExportParallelismDegree</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree">ImportParallelismDegree</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster">IsCluster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction">TableExistsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}. |

---

##### `Estimate`<sup>Optional</sup> <a name="Estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.estimate"></a>

```go
Estimate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#estimate DatabaseMigrationMigration#estimate}.

---

##### `ExcludeParameters`<sup>Optional</sup> <a name="ExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.excludeParameters"></a>

```go
ExcludeParameters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#exclude_parameters DatabaseMigrationMigration#exclude_parameters}.

---

##### `ExportParallelismDegree`<sup>Optional</sup> <a name="ExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.exportParallelismDegree"></a>

```go
ExportParallelismDegree *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#export_parallelism_degree DatabaseMigrationMigration#export_parallelism_degree}.

---

##### `ImportParallelismDegree`<sup>Optional</sup> <a name="ImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.importParallelismDegree"></a>

```go
ImportParallelismDegree *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#import_parallelism_degree DatabaseMigrationMigration#import_parallelism_degree}.

---

##### `IsCluster`<sup>Optional</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.isCluster"></a>

```go
IsCluster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_cluster DatabaseMigrationMigration#is_cluster}.

---

##### `TableExistsAction`<sup>Optional</sup> <a name="TableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters.property.tableExistsAction"></a>

```go
TableExistsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#table_exists_action DatabaseMigrationMigration#table_exists_action}.

---

### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#name DatabaseMigrationMigration#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#path DatabaseMigrationMigration#path}.

---

### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps {
	NewValue: *string,
	OldValue: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue">NewValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue">OldValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}. |

---

##### `NewValue`<sup>Optional</sup> <a name="NewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.newValue"></a>

```go
NewValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#new_value DatabaseMigrationMigration#new_value}.

---

##### `OldValue`<sup>Optional</sup> <a name="OldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.oldValue"></a>

```go
OldValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#old_value DatabaseMigrationMigration#old_value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemaps.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#type DatabaseMigrationMigration#type}.

---

### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails {
	TargetType: *string,
	BlockSizeInKbs: *string,
	ExtendSizeInMbs: *f64,
	IsAutoCreate: interface{},
	IsBigFile: interface{},
	RemapTarget: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType">TargetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs">BlockSizeInKbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs">ExtendSizeInMbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate">IsAutoCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile">IsBigFile</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget">RemapTarget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}. |

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#target_type DatabaseMigrationMigration#target_type}.

---

##### `BlockSizeInKbs`<sup>Optional</sup> <a name="BlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.blockSizeInKbs"></a>

```go
BlockSizeInKbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#block_size_in_kbs DatabaseMigrationMigration#block_size_in_kbs}.

---

##### `ExtendSizeInMbs`<sup>Optional</sup> <a name="ExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.extendSizeInMbs"></a>

```go
ExtendSizeInMbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#extend_size_in_mbs DatabaseMigrationMigration#extend_size_in_mbs}.

---

##### `IsAutoCreate`<sup>Optional</sup> <a name="IsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isAutoCreate"></a>

```go
IsAutoCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_auto_create DatabaseMigrationMigration#is_auto_create}.

---

##### `IsBigFile`<sup>Optional</sup> <a name="IsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.isBigFile"></a>

```go
IsBigFile interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#is_big_file DatabaseMigrationMigration#is_big_file}.

---

##### `RemapTarget`<sup>Optional</sup> <a name="RemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails.property.remapTarget"></a>

```go
RemapTarget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#remap_target DatabaseMigrationMigration#remap_target}.

---

### DatabaseMigrationMigrationTimeouts <a name="DatabaseMigrationMigrationTimeouts" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

&databasemigrationmigration.DatabaseMigrationMigrationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#create DatabaseMigrationMigration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#delete DatabaseMigrationMigration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_migration_migration#update DatabaseMigrationMigration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationMigrationAdvancedParametersList <a name="DatabaseMigrationMigrationAdvancedParametersList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationAdvancedParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationMigrationAdvancedParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get"></a>

```go
func Get(index *f64) DatabaseMigrationMigrationAdvancedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationAdvancedParametersOutputReference <a name="DatabaseMigrationMigrationAdvancedParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationAdvancedParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationMigrationAdvancedParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataType` <a name="ResetDataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvancedParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationAdvisorSettingsOutputReference <a name="DatabaseMigrationMigrationAdvisorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationAdvisorSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationAdvisorSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors">ResetIsIgnoreErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor">ResetIsSkipAdvisor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsIgnoreErrors` <a name="ResetIsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsIgnoreErrors"></a>

```go
func ResetIsIgnoreErrors()
```

##### `ResetIsSkipAdvisor` <a name="ResetIsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.resetIsSkipAdvisor"></a>

```go
func ResetIsSkipAdvisor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput">IsIgnoreErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput">IsSkipAdvisorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors">IsIgnoreErrors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor">IsSkipAdvisor</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsIgnoreErrorsInput`<sup>Optional</sup> <a name="IsIgnoreErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrorsInput"></a>

```go
func IsIgnoreErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `IsSkipAdvisorInput`<sup>Optional</sup> <a name="IsSkipAdvisorInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisorInput"></a>

```go
func IsSkipAdvisorInput() interface{}
```

- *Type:* interface{}

---

##### `IsIgnoreErrors`<sup>Required</sup> <a name="IsIgnoreErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isIgnoreErrors"></a>

```go
func IsIgnoreErrors() interface{}
```

- *Type:* interface{}

---

##### `IsSkipAdvisor`<sup>Required</sup> <a name="IsSkipAdvisor" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.isSkipAdvisor"></a>

```go
func IsSkipAdvisor() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationAdvisorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationAdvisorSettings">DatabaseMigrationMigrationAdvisorSettings</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationDataTransferMediumDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket">PutObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket">ResetObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId">ResetSharedStorageMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectStorageBucket` <a name="PutObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket"></a>

```go
func PutObjectStorageBucket(value DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putObjectStorageBucket.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `PutSource` <a name="PutSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource"></a>

```go
func PutSource(value DatabaseMigrationMigrationDataTransferMediumDetailsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `PutTarget` <a name="PutTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget"></a>

```go
func PutTarget(value DatabaseMigrationMigrationDataTransferMediumDetailsTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetObjectStorageBucket` <a name="ResetObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetObjectStorageBucket"></a>

```go
func ResetObjectStorageBucket()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```

##### `ResetSharedStorageMountTargetId` <a name="ResetSharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSharedStorageMountTargetId"></a>

```go
func ResetSharedStorageMountTargetId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTarget` <a name="ResetTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket">ObjectStorageBucket</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput">ObjectStorageBucketInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput">SharedStorageMountTargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId">SharedStorageMountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectStorageBucket`<sup>Required</sup> <a name="ObjectStorageBucket" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucket"></a>

```go
func ObjectStorageBucket() DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucketOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.source"></a>

```go
func Source() DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.target"></a>

```go
func Target() DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference">DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference</a>

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketInput`<sup>Optional</sup> <a name="ObjectStorageBucketInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.objectStorageBucketInput"></a>

```go
func ObjectStorageBucketInput() DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket">DatabaseMigrationMigrationDataTransferMediumDetailsObjectStorageBucket</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `SharedStorageMountTargetIdInput`<sup>Optional</sup> <a name="SharedStorageMountTargetIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetIdInput"></a>

```go
func SharedStorageMountTargetIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sourceInput"></a>

```go
func SourceInput() DatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.targetInput"></a>

```go
func TargetInput() DatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `SharedStorageMountTargetId`<sup>Required</sup> <a name="SharedStorageMountTargetId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.sharedStorageMountTargetId"></a>

```go
func SharedStorageMountTargetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationDataTransferMediumDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetails">DatabaseMigrationMigrationDataTransferMediumDetails</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome">ResetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation">ResetWalletLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOciHome` <a name="ResetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetOciHome"></a>

```go
func ResetOciHome()
```

##### `ResetWalletLocation` <a name="ResetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.resetWalletLocation"></a>

```go
func ResetWalletLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput">OciHomeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput">WalletLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome">OciHome</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation">WalletLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `OciHomeInput`<sup>Optional</sup> <a name="OciHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHomeInput"></a>

```go
func OciHomeInput() *string
```

- *Type:* *string

---

##### `WalletLocationInput`<sup>Optional</sup> <a name="WalletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocationInput"></a>

```go
func WalletLocationInput() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `OciHome`<sup>Required</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.ociHome"></a>

```go
func OciHome() *string
```

- *Type:* *string

---

##### `WalletLocation`<sup>Required</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.walletLocation"></a>

```go
func WalletLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationDataTransferMediumDetailsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsSource">DatabaseMigrationMigrationDataTransferMediumDetailsSource</a>

---


### DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference <a name="DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome">ResetOciHome</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation">ResetWalletLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOciHome` <a name="ResetOciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetOciHome"></a>

```go
func ResetOciHome()
```

##### `ResetWalletLocation` <a name="ResetWalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.resetWalletLocation"></a>

```go
func ResetWalletLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput">OciHomeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput">WalletLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome">OciHome</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation">WalletLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `OciHomeInput`<sup>Optional</sup> <a name="OciHomeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHomeInput"></a>

```go
func OciHomeInput() *string
```

- *Type:* *string

---

##### `WalletLocationInput`<sup>Optional</sup> <a name="WalletLocationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocationInput"></a>

```go
func WalletLocationInput() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `OciHome`<sup>Required</sup> <a name="OciHome" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.ociHome"></a>

```go
func OciHome() *string
```

- *Type:* *string

---

##### `WalletLocation`<sup>Required</sup> <a name="WalletLocation" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.walletLocation"></a>

```go
func WalletLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationDataTransferMediumDetailsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationDataTransferMediumDetailsTarget">DatabaseMigrationMigrationDataTransferMediumDetailsTarget</a>

---


### DatabaseMigrationMigrationExcludeObjectsList <a name="DatabaseMigrationMigrationExcludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationExcludeObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationMigrationExcludeObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get"></a>

```go
func Get(index *f64) DatabaseMigrationMigrationExcludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationExcludeObjectsOutputReference <a name="DatabaseMigrationMigrationExcludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationExcludeObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationMigrationExcludeObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">ResetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsOmitExcludedTableFromReplication` <a name="ResetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```go
func ResetIsOmitExcludedTableFromReplication()
```

##### `ResetOwner` <a name="ResetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetSchema` <a name="ResetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">IsOmitExcludedTableFromReplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```go
func IsOmitExcludedTableFromReplicationInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IsOmitExcludedTableFromReplication`<sup>Required</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```go
func IsOmitExcludedTableFromReplication() interface{}
```

- *Type:* interface{}

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationExcludeObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationGgsDetailsExtractOutputReference <a name="DatabaseMigrationMigrationGgsDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationGgsDetailsExtractOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationGgsDetailsExtractOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration">ResetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLongTransDuration` <a name="ResetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetLongTransDuration"></a>

```go
func ResetLongTransDuration()
```

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.resetPerformanceProfile"></a>

```go
func ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput">LongTransDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration">LongTransDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LongTransDurationInput`<sup>Optional</sup> <a name="LongTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDurationInput"></a>

```go
func LongTransDurationInput() *f64
```

- *Type:* *f64

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfileInput"></a>

```go
func PerformanceProfileInput() *string
```

- *Type:* *string

---

##### `LongTransDuration`<sup>Required</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.longTransDuration"></a>

```go
func LongTransDuration() *f64
```

- *Type:* *f64

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentList <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationGgsDetailsGgsDeploymentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationMigrationGgsDetailsGgsDeploymentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get"></a>

```go
func Get(index *f64) DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference <a name="DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId">GgsAdminCredentialsSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `GgsAdminCredentialsSecretId`<sup>Required</sup> <a name="GgsAdminCredentialsSecretId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.ggsAdminCredentialsSecretId"></a>

```go
func GgsAdminCredentialsSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationGgsDetailsGgsDeployment
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeployment">DatabaseMigrationMigrationGgsDetailsGgsDeployment</a>

---


### DatabaseMigrationMigrationGgsDetailsOutputReference <a name="DatabaseMigrationMigrationGgsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationGgsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationGgsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract">PutExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat">PutReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag">ResetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract">ResetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat">ResetReplicat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtract` <a name="PutExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract"></a>

```go
func PutExtract(value DatabaseMigrationMigrationGgsDetailsExtract)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `PutReplicat` <a name="PutReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat"></a>

```go
func PutReplicat(value DatabaseMigrationMigrationGgsDetailsReplicat)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `ResetAcceptableLag` <a name="ResetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetAcceptableLag"></a>

```go
func ResetAcceptableLag()
```

##### `ResetExtract` <a name="ResetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetExtract"></a>

```go
func ResetExtract()
```

##### `ResetReplicat` <a name="ResetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.resetReplicat"></a>

```go
func ResetReplicat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment">GgsDeployment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput">AcceptableLagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput">ExtractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput">ReplicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag">AcceptableLag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extract"></a>

```go
func Extract() DatabaseMigrationMigrationGgsDetailsExtractOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtractOutputReference">DatabaseMigrationMigrationGgsDetailsExtractOutputReference</a>

---

##### `GgsDeployment`<sup>Required</sup> <a name="GgsDeployment" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.ggsDeployment"></a>

```go
func GgsDeployment() DatabaseMigrationMigrationGgsDetailsGgsDeploymentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsGgsDeploymentList">DatabaseMigrationMigrationGgsDetailsGgsDeploymentList</a>

---

##### `Replicat`<sup>Required</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicat"></a>

```go
func Replicat() DatabaseMigrationMigrationGgsDetailsReplicatOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference">DatabaseMigrationMigrationGgsDetailsReplicatOutputReference</a>

---

##### `AcceptableLagInput`<sup>Optional</sup> <a name="AcceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLagInput"></a>

```go
func AcceptableLagInput() *f64
```

- *Type:* *f64

---

##### `ExtractInput`<sup>Optional</sup> <a name="ExtractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.extractInput"></a>

```go
func ExtractInput() DatabaseMigrationMigrationGgsDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsExtract">DatabaseMigrationMigrationGgsDetailsExtract</a>

---

##### `ReplicatInput`<sup>Optional</sup> <a name="ReplicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.replicatInput"></a>

```go
func ReplicatInput() DatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---

##### `AcceptableLag`<sup>Required</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.acceptableLag"></a>

```go
func AcceptableLag() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationGgsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetails">DatabaseMigrationMigrationGgsDetails</a>

---


### DatabaseMigrationMigrationGgsDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationGgsDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationGgsDetailsReplicatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationGgsDetailsReplicatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```go
func ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```go
func PerformanceProfileInput() *string
```

- *Type:* *string

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicatOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationGgsDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationGgsDetailsReplicat">DatabaseMigrationMigrationGgsDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsExtractOutputReference <a name="DatabaseMigrationMigrationHubDetailsExtractOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationHubDetailsExtractOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationHubDetailsExtractOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration">ResetLongTransDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLongTransDuration` <a name="ResetLongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetLongTransDuration"></a>

```go
func ResetLongTransDuration()
```

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.resetPerformanceProfile"></a>

```go
func ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput">LongTransDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration">LongTransDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LongTransDurationInput`<sup>Optional</sup> <a name="LongTransDurationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDurationInput"></a>

```go
func LongTransDurationInput() *f64
```

- *Type:* *f64

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfileInput"></a>

```go
func PerformanceProfileInput() *string
```

- *Type:* *string

---

##### `LongTransDuration`<sup>Required</sup> <a name="LongTransDuration" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.longTransDuration"></a>

```go
func LongTransDuration() *f64
```

- *Type:* *f64

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---


### DatabaseMigrationMigrationHubDetailsOutputReference <a name="DatabaseMigrationMigrationHubDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationHubDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationHubDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract">PutExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat">PutReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials">PutRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag">ResetAcceptableLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId">ResetComputeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract">ResetExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat">ResetReplicat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtract` <a name="PutExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract"></a>

```go
func PutExtract(value DatabaseMigrationMigrationHubDetailsExtract)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putExtract.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `PutReplicat` <a name="PutReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat"></a>

```go
func PutReplicat(value DatabaseMigrationMigrationHubDetailsReplicat)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putReplicat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `PutRestAdminCredentials` <a name="PutRestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials"></a>

```go
func PutRestAdminCredentials(value DatabaseMigrationMigrationHubDetailsRestAdminCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.putRestAdminCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `ResetAcceptableLag` <a name="ResetAcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetAcceptableLag"></a>

```go
func ResetAcceptableLag()
```

##### `ResetComputeId` <a name="ResetComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetComputeId"></a>

```go
func ResetComputeId()
```

##### `ResetExtract` <a name="ResetExtract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetExtract"></a>

```go
func ResetExtract()
```

##### `ResetReplicat` <a name="ResetReplicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.resetReplicat"></a>

```go
func ResetReplicat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract">Extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat">Replicat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials">RestAdminCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput">AcceptableLagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput">ComputeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput">ExtractInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput">ReplicatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput">RestAdminCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag">AcceptableLag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId">ComputeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extract`<sup>Required</sup> <a name="Extract" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extract"></a>

```go
func Extract() DatabaseMigrationMigrationHubDetailsExtractOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtractOutputReference">DatabaseMigrationMigrationHubDetailsExtractOutputReference</a>

---

##### `Replicat`<sup>Required</sup> <a name="Replicat" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicat"></a>

```go
func Replicat() DatabaseMigrationMigrationHubDetailsReplicatOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference">DatabaseMigrationMigrationHubDetailsReplicatOutputReference</a>

---

##### `RestAdminCredentials`<sup>Required</sup> <a name="RestAdminCredentials" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentials"></a>

```go
func RestAdminCredentials() DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference">DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference</a>

---

##### `AcceptableLagInput`<sup>Optional</sup> <a name="AcceptableLagInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLagInput"></a>

```go
func AcceptableLagInput() *f64
```

- *Type:* *f64

---

##### `ComputeIdInput`<sup>Optional</sup> <a name="ComputeIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeIdInput"></a>

```go
func ComputeIdInput() *string
```

- *Type:* *string

---

##### `ExtractInput`<sup>Optional</sup> <a name="ExtractInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.extractInput"></a>

```go
func ExtractInput() DatabaseMigrationMigrationHubDetailsExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsExtract">DatabaseMigrationMigrationHubDetailsExtract</a>

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `ReplicatInput`<sup>Optional</sup> <a name="ReplicatInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.replicatInput"></a>

```go
func ReplicatInput() DatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---

##### `RestAdminCredentialsInput`<sup>Optional</sup> <a name="RestAdminCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.restAdminCredentialsInput"></a>

```go
func RestAdminCredentialsInput() DatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `AcceptableLag`<sup>Required</sup> <a name="AcceptableLag" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.acceptableLag"></a>

```go
func AcceptableLag() *f64
```

- *Type:* *f64

---

##### `ComputeId`<sup>Required</sup> <a name="ComputeId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.computeId"></a>

```go
func ComputeId() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationHubDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetails">DatabaseMigrationMigrationHubDetails</a>

---


### DatabaseMigrationMigrationHubDetailsReplicatOutputReference <a name="DatabaseMigrationMigrationHubDetailsReplicatOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationHubDetailsReplicatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationHubDetailsReplicatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile">ResetPerformanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPerformanceProfile` <a name="ResetPerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.resetPerformanceProfile"></a>

```go
func ResetPerformanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput">PerformanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile">PerformanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PerformanceProfileInput`<sup>Optional</sup> <a name="PerformanceProfileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfileInput"></a>

```go
func PerformanceProfileInput() *string
```

- *Type:* *string

---

##### `PerformanceProfile`<sup>Required</sup> <a name="PerformanceProfile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.performanceProfile"></a>

```go
func PerformanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicatOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationHubDetailsReplicat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsReplicat">DatabaseMigrationMigrationHubDetailsReplicat</a>

---


### DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference <a name="DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationHubDetailsRestAdminCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationHubDetailsRestAdminCredentials">DatabaseMigrationMigrationHubDetailsRestAdminCredentials</a>

---


### DatabaseMigrationMigrationIncludeObjectsList <a name="DatabaseMigrationMigrationIncludeObjectsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationIncludeObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationMigrationIncludeObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get"></a>

```go
func Get(index *f64) DatabaseMigrationMigrationIncludeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationIncludeObjectsOutputReference <a name="DatabaseMigrationMigrationIncludeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationIncludeObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationMigrationIncludeObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication">ResetIsOmitExcludedTableFromReplication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsOmitExcludedTableFromReplication` <a name="ResetIsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetIsOmitExcludedTableFromReplication"></a>

```go
func ResetIsOmitExcludedTableFromReplication()
```

##### `ResetOwner` <a name="ResetOwner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetSchema` <a name="ResetSchema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput">IsOmitExcludedTableFromReplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication">IsOmitExcludedTableFromReplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsOmitExcludedTableFromReplicationInput`<sup>Optional</sup> <a name="IsOmitExcludedTableFromReplicationInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplicationInput"></a>

```go
func IsOmitExcludedTableFromReplicationInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IsOmitExcludedTableFromReplication`<sup>Required</sup> <a name="IsOmitExcludedTableFromReplication" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.isOmitExcludedTableFromReplication"></a>

```go
func IsOmitExcludedTableFromReplication() interface{}
```

- *Type:* interface{}

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationIncludeObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate">ResetEstimate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters">ResetExcludeParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree">ResetExportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree">ResetImportParallelismDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster">ResetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction">ResetTableExistsAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEstimate` <a name="ResetEstimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetEstimate"></a>

```go
func ResetEstimate()
```

##### `ResetExcludeParameters` <a name="ResetExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExcludeParameters"></a>

```go
func ResetExcludeParameters()
```

##### `ResetExportParallelismDegree` <a name="ResetExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetExportParallelismDegree"></a>

```go
func ResetExportParallelismDegree()
```

##### `ResetImportParallelismDegree` <a name="ResetImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetImportParallelismDegree"></a>

```go
func ResetImportParallelismDegree()
```

##### `ResetIsCluster` <a name="ResetIsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetIsCluster"></a>

```go
func ResetIsCluster()
```

##### `ResetTableExistsAction` <a name="ResetTableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.resetTableExistsAction"></a>

```go
func ResetTableExistsAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput">EstimateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput">ExcludeParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput">ExportParallelismDegreeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput">ImportParallelismDegreeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput">IsClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput">TableExistsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate">Estimate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters">ExcludeParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree">ExportParallelismDegree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree">ImportParallelismDegree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster">IsCluster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction">TableExistsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimateInput`<sup>Optional</sup> <a name="EstimateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimateInput"></a>

```go
func EstimateInput() *string
```

- *Type:* *string

---

##### `ExcludeParametersInput`<sup>Optional</sup> <a name="ExcludeParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParametersInput"></a>

```go
func ExcludeParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExportParallelismDegreeInput`<sup>Optional</sup> <a name="ExportParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegreeInput"></a>

```go
func ExportParallelismDegreeInput() *f64
```

- *Type:* *f64

---

##### `ImportParallelismDegreeInput`<sup>Optional</sup> <a name="ImportParallelismDegreeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegreeInput"></a>

```go
func ImportParallelismDegreeInput() *f64
```

- *Type:* *f64

---

##### `IsClusterInput`<sup>Optional</sup> <a name="IsClusterInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isClusterInput"></a>

```go
func IsClusterInput() interface{}
```

- *Type:* interface{}

---

##### `TableExistsActionInput`<sup>Optional</sup> <a name="TableExistsActionInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsActionInput"></a>

```go
func TableExistsActionInput() *string
```

- *Type:* *string

---

##### `Estimate`<sup>Required</sup> <a name="Estimate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.estimate"></a>

```go
func Estimate() *string
```

- *Type:* *string

---

##### `ExcludeParameters`<sup>Required</sup> <a name="ExcludeParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.excludeParameters"></a>

```go
func ExcludeParameters() *[]*string
```

- *Type:* *[]*string

---

##### `ExportParallelismDegree`<sup>Required</sup> <a name="ExportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.exportParallelismDegree"></a>

```go
func ExportParallelismDegree() *f64
```

- *Type:* *f64

---

##### `ImportParallelismDegree`<sup>Required</sup> <a name="ImportParallelismDegree" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.importParallelismDegree"></a>

```go
func ImportParallelismDegree() *f64
```

- *Type:* *f64

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.isCluster"></a>

```go
func IsCluster() interface{}
```

- *Type:* interface{}

---

##### `TableExistsAction`<sup>Required</sup> <a name="TableExistsAction" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.tableExistsAction"></a>

```go
func TableExistsAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get"></a>

```go
func Get(index *f64) DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue">ResetNewValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue">ResetOldValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewValue` <a name="ResetNewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetNewValue"></a>

```go
func ResetNewValue()
```

##### `ResetOldValue` <a name="ResetOldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetOldValue"></a>

```go
func ResetOldValue()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput">NewValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput">OldValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue">NewValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue">OldValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewValueInput`<sup>Optional</sup> <a name="NewValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValueInput"></a>

```go
func NewValueInput() *string
```

- *Type:* *string

---

##### `OldValueInput`<sup>Optional</sup> <a name="OldValueInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValueInput"></a>

```go
func OldValueInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `NewValue`<sup>Required</sup> <a name="NewValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.newValue"></a>

```go
func NewValue() *string
```

- *Type:* *string

---

##### `OldValue`<sup>Required</sup> <a name="OldValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.oldValue"></a>

```go
func OldValue() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatabaseMigrationMigrationInitialLoadSettingsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationInitialLoadSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters">PutDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject">PutExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject">PutImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps">PutMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails">PutTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility">ResetCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters">ResetDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject">ResetExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors">ResetHandleGrantErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject">ResetImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent">ResetIsConsistent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects">ResetIsIgnoreExistingObjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc">ResetIsTzUtc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps">ResetMetadataRemaps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility">ResetPrimaryKeyCompatibility</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails">ResetTablespaceDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataPumpParameters` <a name="PutDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters"></a>

```go
func PutDataPumpParameters(value DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putDataPumpParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `PutExportDirectoryObject` <a name="PutExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject"></a>

```go
func PutExportDirectoryObject(value DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putExportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `PutImportDirectoryObject` <a name="PutImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject"></a>

```go
func PutImportDirectoryObject(value DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putImportDirectoryObject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `PutMetadataRemaps` <a name="PutMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps"></a>

```go
func PutMetadataRemaps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putMetadataRemaps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTablespaceDetails` <a name="PutTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails"></a>

```go
func PutTablespaceDetails(value DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.putTablespaceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `ResetCompatibility` <a name="ResetCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetCompatibility"></a>

```go
func ResetCompatibility()
```

##### `ResetDataPumpParameters` <a name="ResetDataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetDataPumpParameters"></a>

```go
func ResetDataPumpParameters()
```

##### `ResetExportDirectoryObject` <a name="ResetExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetExportDirectoryObject"></a>

```go
func ResetExportDirectoryObject()
```

##### `ResetHandleGrantErrors` <a name="ResetHandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetHandleGrantErrors"></a>

```go
func ResetHandleGrantErrors()
```

##### `ResetImportDirectoryObject` <a name="ResetImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetImportDirectoryObject"></a>

```go
func ResetImportDirectoryObject()
```

##### `ResetIsConsistent` <a name="ResetIsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsConsistent"></a>

```go
func ResetIsConsistent()
```

##### `ResetIsIgnoreExistingObjects` <a name="ResetIsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsIgnoreExistingObjects"></a>

```go
func ResetIsIgnoreExistingObjects()
```

##### `ResetIsTzUtc` <a name="ResetIsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetIsTzUtc"></a>

```go
func ResetIsTzUtc()
```

##### `ResetMetadataRemaps` <a name="ResetMetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetMetadataRemaps"></a>

```go
func ResetMetadataRemaps()
```

##### `ResetPrimaryKeyCompatibility` <a name="ResetPrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetPrimaryKeyCompatibility"></a>

```go
func ResetPrimaryKeyCompatibility()
```

##### `ResetTablespaceDetails` <a name="ResetTablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.resetTablespaceDetails"></a>

```go
func ResetTablespaceDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters">DataPumpParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject">ExportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject">ImportDirectoryObject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps">MetadataRemaps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails">TablespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput">CompatibilityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput">DataPumpParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput">ExportDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput">HandleGrantErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput">ImportDirectoryObjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput">IsConsistentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput">IsIgnoreExistingObjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput">IsTzUtcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput">JobModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput">MetadataRemapsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput">PrimaryKeyCompatibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput">TablespaceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility">Compatibility</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors">HandleGrantErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent">IsConsistent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects">IsIgnoreExistingObjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc">IsTzUtc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode">JobMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility">PrimaryKeyCompatibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataPumpParameters`<sup>Required</sup> <a name="DataPumpParameters" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParameters"></a>

```go
func DataPumpParameters() DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParametersOutputReference</a>

---

##### `ExportDirectoryObject`<sup>Required</sup> <a name="ExportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObject"></a>

```go
func ExportDirectoryObject() DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObjectOutputReference</a>

---

##### `ImportDirectoryObject`<sup>Required</sup> <a name="ImportDirectoryObject" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObject"></a>

```go
func ImportDirectoryObject() DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObjectOutputReference</a>

---

##### `MetadataRemaps`<sup>Required</sup> <a name="MetadataRemaps" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemaps"></a>

```go
func MetadataRemaps() DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList">DatabaseMigrationMigrationInitialLoadSettingsMetadataRemapsList</a>

---

##### `TablespaceDetails`<sup>Required</sup> <a name="TablespaceDetails" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetails"></a>

```go
func TablespaceDetails() DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference</a>

---

##### `CompatibilityInput`<sup>Optional</sup> <a name="CompatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibilityInput"></a>

```go
func CompatibilityInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataPumpParametersInput`<sup>Optional</sup> <a name="DataPumpParametersInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.dataPumpParametersInput"></a>

```go
func DataPumpParametersInput() DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters">DatabaseMigrationMigrationInitialLoadSettingsDataPumpParameters</a>

---

##### `ExportDirectoryObjectInput`<sup>Optional</sup> <a name="ExportDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.exportDirectoryObjectInput"></a>

```go
func ExportDirectoryObjectInput() DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsExportDirectoryObject</a>

---

##### `HandleGrantErrorsInput`<sup>Optional</sup> <a name="HandleGrantErrorsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrorsInput"></a>

```go
func HandleGrantErrorsInput() *string
```

- *Type:* *string

---

##### `ImportDirectoryObjectInput`<sup>Optional</sup> <a name="ImportDirectoryObjectInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.importDirectoryObjectInput"></a>

```go
func ImportDirectoryObjectInput() DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject">DatabaseMigrationMigrationInitialLoadSettingsImportDirectoryObject</a>

---

##### `IsConsistentInput`<sup>Optional</sup> <a name="IsConsistentInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistentInput"></a>

```go
func IsConsistentInput() interface{}
```

- *Type:* interface{}

---

##### `IsIgnoreExistingObjectsInput`<sup>Optional</sup> <a name="IsIgnoreExistingObjectsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjectsInput"></a>

```go
func IsIgnoreExistingObjectsInput() interface{}
```

- *Type:* interface{}

---

##### `IsTzUtcInput`<sup>Optional</sup> <a name="IsTzUtcInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtcInput"></a>

```go
func IsTzUtcInput() interface{}
```

- *Type:* interface{}

---

##### `JobModeInput`<sup>Optional</sup> <a name="JobModeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobModeInput"></a>

```go
func JobModeInput() *string
```

- *Type:* *string

---

##### `MetadataRemapsInput`<sup>Optional</sup> <a name="MetadataRemapsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.metadataRemapsInput"></a>

```go
func MetadataRemapsInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeyCompatibilityInput`<sup>Optional</sup> <a name="PrimaryKeyCompatibilityInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibilityInput"></a>

```go
func PrimaryKeyCompatibilityInput() *string
```

- *Type:* *string

---

##### `TablespaceDetailsInput`<sup>Optional</sup> <a name="TablespaceDetailsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.tablespaceDetailsInput"></a>

```go
func TablespaceDetailsInput() DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.compatibility"></a>

```go
func Compatibility() *[]*string
```

- *Type:* *[]*string

---

##### `HandleGrantErrors`<sup>Required</sup> <a name="HandleGrantErrors" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.handleGrantErrors"></a>

```go
func HandleGrantErrors() *string
```

- *Type:* *string

---

##### `IsConsistent`<sup>Required</sup> <a name="IsConsistent" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isConsistent"></a>

```go
func IsConsistent() interface{}
```

- *Type:* interface{}

---

##### `IsIgnoreExistingObjects`<sup>Required</sup> <a name="IsIgnoreExistingObjects" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isIgnoreExistingObjects"></a>

```go
func IsIgnoreExistingObjects() interface{}
```

- *Type:* interface{}

---

##### `IsTzUtc`<sup>Required</sup> <a name="IsTzUtc" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.isTzUtc"></a>

```go
func IsTzUtc() interface{}
```

- *Type:* interface{}

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.jobMode"></a>

```go
func JobMode() *string
```

- *Type:* *string

---

##### `PrimaryKeyCompatibility`<sup>Required</sup> <a name="PrimaryKeyCompatibility" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.primaryKeyCompatibility"></a>

```go
func PrimaryKeyCompatibility() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationInitialLoadSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettings">DatabaseMigrationMigrationInitialLoadSettings</a>

---


### DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference <a name="DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs">ResetBlockSizeInKbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs">ResetExtendSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate">ResetIsAutoCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile">ResetIsBigFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget">ResetRemapTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockSizeInKbs` <a name="ResetBlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetBlockSizeInKbs"></a>

```go
func ResetBlockSizeInKbs()
```

##### `ResetExtendSizeInMbs` <a name="ResetExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetExtendSizeInMbs"></a>

```go
func ResetExtendSizeInMbs()
```

##### `ResetIsAutoCreate` <a name="ResetIsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsAutoCreate"></a>

```go
func ResetIsAutoCreate()
```

##### `ResetIsBigFile` <a name="ResetIsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetIsBigFile"></a>

```go
func ResetIsBigFile()
```

##### `ResetRemapTarget` <a name="ResetRemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.resetRemapTarget"></a>

```go
func ResetRemapTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput">BlockSizeInKbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput">ExtendSizeInMbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput">IsAutoCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput">IsBigFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput">RemapTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs">BlockSizeInKbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs">ExtendSizeInMbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate">IsAutoCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile">IsBigFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget">RemapTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockSizeInKbsInput`<sup>Optional</sup> <a name="BlockSizeInKbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbsInput"></a>

```go
func BlockSizeInKbsInput() *string
```

- *Type:* *string

---

##### `ExtendSizeInMbsInput`<sup>Optional</sup> <a name="ExtendSizeInMbsInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbsInput"></a>

```go
func ExtendSizeInMbsInput() *f64
```

- *Type:* *f64

---

##### `IsAutoCreateInput`<sup>Optional</sup> <a name="IsAutoCreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreateInput"></a>

```go
func IsAutoCreateInput() interface{}
```

- *Type:* interface{}

---

##### `IsBigFileInput`<sup>Optional</sup> <a name="IsBigFileInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFileInput"></a>

```go
func IsBigFileInput() interface{}
```

- *Type:* interface{}

---

##### `RemapTargetInput`<sup>Optional</sup> <a name="RemapTargetInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTargetInput"></a>

```go
func RemapTargetInput() *string
```

- *Type:* *string

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `BlockSizeInKbs`<sup>Required</sup> <a name="BlockSizeInKbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.blockSizeInKbs"></a>

```go
func BlockSizeInKbs() *string
```

- *Type:* *string

---

##### `ExtendSizeInMbs`<sup>Required</sup> <a name="ExtendSizeInMbs" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.extendSizeInMbs"></a>

```go
func ExtendSizeInMbs() *f64
```

- *Type:* *f64

---

##### `IsAutoCreate`<sup>Required</sup> <a name="IsAutoCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isAutoCreate"></a>

```go
func IsAutoCreate() interface{}
```

- *Type:* interface{}

---

##### `IsBigFile`<sup>Required</sup> <a name="IsBigFile" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.isBigFile"></a>

```go
func IsBigFile() interface{}
```

- *Type:* interface{}

---

##### `RemapTarget`<sup>Required</sup> <a name="RemapTarget" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.remapTarget"></a>

```go
func RemapTarget() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails">DatabaseMigrationMigrationInitialLoadSettingsTablespaceDetails</a>

---


### DatabaseMigrationMigrationTimeoutsOutputReference <a name="DatabaseMigrationMigrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemigrationmigration"

databasemigrationmigration.NewDatabaseMigrationMigrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMigrationMigrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMigrationMigration.DatabaseMigrationMigrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



